import { createSupabaseServerClient, readUserSession } from "@/src/Helpers/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, _res: NextResponse) {

    const { avatar_URI } = await req.json()
    const supabase = await createSupabaseServerClient()
    try {
        const user = await readUserSession()

        const { error, data } = await supabase.from("users").
            update({
                avatar: avatar_URI
            })
            .eq("userID", user.data.user?.id)
        const errMessage = error?.message
        if (error) {
            return NextResponse.json({ error: "Error uploading avatar", message: `Failed to update avatar. ${errMessage}` }, { status: error.code as unknown as number });
        }

        return NextResponse.json({ success: true, data }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "Error uploading avatar" + error }, { status: 500 });
    }
}