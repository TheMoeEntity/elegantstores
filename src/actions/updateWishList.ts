'use server'
import { wishList } from "../Helpers/types";
import { createSupabaseServerClient, readUserSession } from "../Helpers/supabase";
import { Helpers } from "../Helpers";
import { revalidatePath } from "next/cache";

export async function update(wishList: wishList, setDidReview: (bool: boolean) => void) {
    const supabase = await createSupabaseServerClient()
    try {
        const user = await readUserSession()
        const oldwishlist = await Helpers.fetchSupabaseUsers().then(x => x.wishlist.items) as wishList[]

        const { error } = await supabase.from("users").
            update({
                wishlist: {
                    items: [...oldwishlist || [], wishList]
                }
            })
            .eq("userID", user.data.user?.id)
        const errMessage = error?.message
        if (error) {
            // toast.error("Error adding item to wishlist." + errMessage)
            setDidReview(false)
        }
        // toast.success('Item added to wishlist')
        setDidReview(false)
    } catch (error) {
        setDidReview(false)
        // toast.error("Error adding item to wishlist." + error)
        throw new Error('Failed to create task')
    }
    console.log("hello")
    revalidatePath('/account')
    return { success: true }
}