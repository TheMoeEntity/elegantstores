import { Helpers } from "@/src/Helpers";
import { ISBProducts } from "@/src/Helpers/types";
import dynamic from "next/dynamic";
const ShopPage = dynamic(() => import("../../components/Shop"));

const Shop = async () => {
    const products = await Helpers.getProducts(
        "https://api.escuelajs.co/api/v1/categories/2/products" ?? []
    );
    const items = await Helpers.fetchSupabaseProducts() as ISBProducts[]
  
    return (
        <main className="max-w-7xl mx-auto">
            <ShopPage products={items} />
        </main>
    )
}

export default Shop