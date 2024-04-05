import { readUserSession } from "@/src/Helpers/supabase";
import dynamic from "next/dynamic";
const Cart_Section = dynamic(() => import("../../components/Cards/Cart_Section"));

const Cart = async () => {
    const user = await readUserSession()

    let notAuth: boolean = true
    if (user.data.user) {
        notAuth = false
    }
    
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <Cart_Section notAuth={notAuth} />
        </main>
    )
}

export default Cart