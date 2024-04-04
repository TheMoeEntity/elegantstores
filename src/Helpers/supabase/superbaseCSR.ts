"use client"
import { createBrowserClient } from '@supabase/ssr'

export const createSupabaseServerClientSSR = async () => {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
    )

    return supabase
}