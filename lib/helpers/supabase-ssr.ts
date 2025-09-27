interface SupabaseQuery {
    select?: string;
    filters?: Record<string, string>;
    next?: NextFetchRequestConfig;
}
export async function fetchFromSupabase(table: string, params?: SupabaseQuery) {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

    const queryParams = new URLSearchParams({
        select: params?.select || '*',
        ...params?.filters
    });

    const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${queryParams}`, {
        headers: {
            apikey: `${SUPABASE_ANON_KEY}`,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
        },
        next: params?.next
    });

    if (!response.ok) {
        console.log(response);
    }

    return await response.json();
}