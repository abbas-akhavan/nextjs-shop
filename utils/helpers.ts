import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

interface SupabaseQuery {
    select?: string;
    filters?: Record<string, string>;
    next?: NextFetchRequestConfig;
    userToken?: string;
    cache?: 'no-cache' | 'no-store' | 'force-cache';
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
    body?: unknown;
    timeoutMs?: number;
}

export async function fetchFromSupabase<T = any>(table: string, params?: SupabaseQuery): Promise<T> {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const queryParams = new URLSearchParams({
        select: params?.select || '*',
        ...params?.filters
    });

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${queryParams}`, {
            headers: {
                apikey: `${SUPABASE_ANON_KEY}`,
                Authorization: `Bearer ${params?.userToken || SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            },
            next: params?.next,
            cache: params?.cache
        });
        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(`Supabase fetch failed : ${response.status} ${responseText}`)
        }
        return await response?.json();
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Network error: maybe Supabase is down or unreachable');
        } else {
            console.error('Supabase fetch error :', error)
        }
        throw error
    }
}

// fetch with axios  

export async function fetchFromSupabaseWithAxios<T = any>(
    table: string,
    params?: SupabaseQuery
): Promise<T> {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        throw new Error('Missing Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY)');
    }

    const queryParams = new URLSearchParams({
        select: params?.select || '*',
        ...(params?.filters || {}),
    });

    const url = `${SUPABASE_URL}/rest/v1/${table}?${queryParams.toString()}`;

    try {
        const res = await axios.request<T>({
            url,
            method: params?.method || 'GET',
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${params?.userToken || SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
            },
            data: params?.body,
            timeout: params?.timeoutMs ?? 0,
        });
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosErr = error as AxiosError;

            if (axiosErr.response) {
                const status = axiosErr.response.status;
                const statusText = axiosErr.response.statusText;
                const respData = axiosErr.response.data;
                throw new Error(`Supabase fetch failed: ${status} ${statusText} - ${JSON.stringify(respData)}`);
            }

            if (axiosErr.request) {
                toast.error('خطا در برقراری ارتباط')
            }

            throw new Error(axiosErr.message);
        }

        throw error;
    }
}
