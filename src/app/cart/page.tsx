import { Helpers } from "@/src/Helpers";
import { readUserSession } from "@/src/Helpers/supabase";
import dynamic from "next/dynamic";
const Cart_Section = dynamic(() => import("../../components/Cards/Cart_Section"));

const Cart = async () => {
    const user = await readUserSession()
   
    let notAuth: boolean = true
    if (user.data.user) {
        notAuth = false
    }
    const countries = await Helpers.getCountries('https://restcountries.com/v3.1/all') as { name: string; nameAndSymbol: string; population: number; idd: { root: string, suffixes: string[] } }[] | []
    const email = user.data.user?.email
    const getAddress = await Helpers.fetchSupabaseUsers().then(x => x.address).catch(() => '')

    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <Cart_Section email={email || ''} address={getAddress} countries={countries} notAuth={notAuth} />
        </main>
    )
}

export default Cart