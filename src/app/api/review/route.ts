import { createSupabaseServerClient } from "@/src/Helpers/supabase";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, _res: NextResponse) {

    const { review, itemToUpdate, id, slug } = await req.json()

    const newItem = [...itemToUpdate || [], review]


    const supabase = await createSupabaseServerClient()
    try {
        const { error } = await supabase.from("products").
            update({
                reviews: {
                    reviews: newItem
                }
            })
            .eq("id", id)
        if (error) {
            return NextResponse.json({ success: false, error }, { status: 400 });
        }
        revalidatePath('/products/' + slug)
        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {

        return NextResponse.json({ error: "Failed to send review: " + error }, { status: 500 });
    }
}