interface SupabaseQuery {
    select?: string;
    filters?: Record<string, string>;
    next?: NextFetchRequestConfig;
    userToken?: string;
    cache?: 'no-cache' | 'no-store' | 'force-cache';
}
export async function fetchFromSupabase(table: string, params?: SupabaseQuery) {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const queryParams = new URLSearchParams({
        select: params?.select || '*',
        ...params?.filters
    });
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
        console.log(response);
    }

    return await response.json();
}