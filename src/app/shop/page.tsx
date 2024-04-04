import { Helpers } from "@/src/Helpers";
import dynamic from "next/dynamic";
const ShopPage = dynamic(() => import("../../components/Shop"));

const Shop = async () => {
    const products = await Helpers.getProducts(
        "https://api.escuelajs.co/api/v1/categories/4/products" ?? []
    );
    
    return (
        <main className="max-w-7xl mx-auto">
            <ShopPage products={products} />
        </main>
    )
}

export default Shop