import { Helpers } from "@/src/Helpers";
import dynamic from "next/dynamic";
const ShopPage = dynamic(() => import("../../../components/ProductsPage"));

const Products = async () => {
    const justIn = await Helpers.getProducts('https://fakestoreapi.com/products') ?? []
    return (
        <main className="max-w-7xl mx-auto">
            <ShopPage justIn={justIn}  />
        </main>
    )
}

export default Products