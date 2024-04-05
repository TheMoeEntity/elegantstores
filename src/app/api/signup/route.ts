import { createSupabaseServerClient } from "@/src/Helpers/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

    const { fullName, userName, email, password } = await req.json()
    const supabase = await createSupabaseServerClient()
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: 'http://localhost:3000/login',
                data: {
                    userName,
                    fullName
                }
            }
        })
        if (error?.message) {
            return NextResponse.json({ success: false, error }, { status: 400 });
        }
       
        return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (error) {
       
        return NextResponse.json({ error: "Failed to create user: " + error }, { status: 500 });
    }
}