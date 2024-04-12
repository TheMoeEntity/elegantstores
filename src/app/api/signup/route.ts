import { Helpers } from "@/src/Helpers";
import { createSupabaseServerClient } from "@/src/Helpers/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

    const { fullName, userName, email, password } = await req.json()
    const supabase = await createSupabaseServerClient()
    const userExists = await Helpers.checkUserExists(email);
    if (userExists) return NextResponse.json({ error: "User already exists!", message:`User with email ${email} already exists!` }, { status: 409 });

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
            return NextResponse.json({ success: false, message:error.message }, { status: 400 });
        }

        const { error: error2 } = await supabase
            .from('users')
            .insert({ userName, fullName, wishlist: { items: [] }, recentlyViewed: { items: [] }, orders: { orders: [] }, address: null, coupons: null, userID: data.user?.id, avatar:null })

        if (error2) {
            return NextResponse.json({ error: "Failed to create user. " + error?.message, message:error2.message }, { status: 400 });
        }


        return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (error) {

        return NextResponse.json({ error: "Failed to create user: " + error }, { status: 500 });
    }
}