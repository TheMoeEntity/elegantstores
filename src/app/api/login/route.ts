import { createSupabaseServerClient } from "@/src/Helpers/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

    const { email, password } = await req.json()
    const supabase = await createSupabaseServerClient()
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error?.message) {
            return NextResponse.json({ success: false, error }, { status: 400 });
        }
        console.log(data)
        return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (error) {
        // console.log(error)
        return NextResponse.json({ error: "Failed to Login user: " + error }, { status: 500 });
    }
}