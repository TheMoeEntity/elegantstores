import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "./Helpers/supabase";

export async function middleware(req: NextRequest) {
    const signup = "/signup";
    const apisignup = "/api/signup";
    const account = '/account'
    const login = '/login'
    const res = NextResponse.next();
    const supabase = await createSupabaseServerClient()
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        if (req.nextUrl.pathname.startsWith(apisignup)) {
            return new NextResponse(
                JSON.stringify({ message: "authorization failed" }),
                { status: 403, headers: { "Content-Type": "application/json" } }
            );
        } else if (req.nextUrl.pathname.startsWith(signup) || req.nextUrl.pathname.startsWith(account) || req.nextUrl.pathname.startsWith(login)) {
            const redirectUrl = req.nextUrl.clone();
            redirectUrl.pathname = "/";
            return NextResponse.redirect(redirectUrl);
        }
    }
}

export const config = {
    matcher: ["/api/signup/:path*", "/signup/:path*", "/account/:path*", "/login/:path*"],
};