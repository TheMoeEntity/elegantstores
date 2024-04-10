import { createSupabaseServerClient, readUserSession } from "@/src/Helpers/supabase";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, _res: NextResponse) {

    const { profile } = await req.json()

    const itemToUpdate = {
        profile
    }

    const supabase = await createSupabaseServerClient()
    try {
        const user = await readUserSession()

        const { error } = await supabase.auth.updateUser({
            data: { ...user.data.user?.user_metadata, ...itemToUpdate }
        })
        const errMessage = error?.message
        if (error) {
             return NextResponse.json({ error: "Error uploading image", message: `Failed to update user profile image. ${errMessage}` }, { status: error.status });
        }
        revalidatePath('/account')
        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {

        return NextResponse.json({ error: "Failed to upload image. " + error }, { status: 500 });
    }
}