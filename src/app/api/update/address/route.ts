import { createSupabaseServerClient, readUserSession } from "@/src/Helpers/supabase";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, _res: NextResponse) {

    const { address } = await req.json()

    const itemToUpdate = {
        address
    }

    const supabase = await createSupabaseServerClient()
    try {
        const user = await readUserSession()

        const { error } = await supabase.from("users").
            update({
                address: itemToUpdate
            })
            .eq("userID", user.data.user?.id)
        const errMessage = error?.message
        if (error) {
            return NextResponse.json({ error: "Error updating address", message: `Failed to update address. ${errMessage}` }, { status: error.code as unknown as number });
        }
        revalidatePath('/account')
        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {

        return NextResponse.json({ error: "Error updating address " + error }, { status: 500 });
    }
}