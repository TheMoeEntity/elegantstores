'use server'
import { createServerClient, type CookieOptions, createBrowserClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createSupabaseServerClient = async () => {
    const cookieStore = cookies()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    cookieStore.set({ name, value, ...options })
                },
                remove(name: string, options: CookieOptions) {
                    cookieStore.set({ name, value: '', ...options })
                },
            },
        }
    )
    return supabase
}

export const readUserSession = async () => {
    const supabase = await createSupabaseServerClient()
    const user = supabase.auth.getUser()
    return user
}

export const readUserSessionCLient = async ()=> {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
    )
    const user = supabase.auth.getUser()
    let data;
     user.then(user => {
        console.log(user)
        data = user
     })
    return data
}



