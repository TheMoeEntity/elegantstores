import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "./Helpers/supabase";
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
    const signup = "/signup";
    const apisignup = "/api/signup";
    const account = '/account'
    const login = '/login'
    let response = NextResponse.next({
        request: {
            headers: req.headers,
        },
    })
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
        {
            cookies: {
                get(name: string) {
                    return req.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    req.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: req.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name: string, options: CookieOptions) {
                    req.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: req.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        if (req.nextUrl.pathname.startsWith(apisignup)) {
            return new NextResponse(
                JSON.stringify({ message: "authorization failed" }),
                { status: 403, headers: { "Content-Type": "application/json" } }
            );
        } else if (req.nextUrl.pathname.startsWith(signup) || req.nextUrl.pathname.startsWith(login)) {
            const redirectUrl = req.nextUrl.clone();
            redirectUrl.pathname = "/";
            return NextResponse.redirect(redirectUrl);
        }
    } else if (!session) {
        if (req.nextUrl.pathname.startsWith(account)) {
            const redirectUrl = req.nextUrl.clone();
            redirectUrl.pathname = "/";
            return NextResponse.redirect(redirectUrl);
        }
    }
    //refresh
    await supabase.auth.getUser()
    return response

}

export const config = {
    matcher: ["/api/signup/:path*", '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)', "/signup/:path*", "/account/:path*", "/login/:path*"],
};