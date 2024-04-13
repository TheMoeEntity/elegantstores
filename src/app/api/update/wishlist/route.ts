import { Helpers } from "@/src/Helpers";
import { createSupabaseServerClient, readUserSession } from "@/src/Helpers/supabase";
import { wishList } from "@/src/Helpers/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, _res: NextResponse) {

    const { wishList } = await req.json()
    const supabase = await createSupabaseServerClient()
    try {
        const user = await readUserSession()
        const oldwishlist = await Helpers.fetchSupabaseUsers().then(x => x.wishlist.items) as wishList[]

        const { error, data } = await supabase.from("users").
            update({
                wishlist: {
                    items: [...oldwishlist || [], wishList]
                }
            })
            .eq("userID", user.data.user?.id)
        const errMessage = error?.message
        if (error) {
            return NextResponse.json({ error: "Error updating address", message: `Failed to update address. ${errMessage}` }, { status: error.code as unknown as number });
        }
        
        return NextResponse.json({ success: true, data }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "Error updating address " + error }, { status: 500 });
    }
}