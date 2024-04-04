import { Helpers } from "@/src/Helpers";
import { productType } from "@/src/Helpers/types";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const ShopPage = dynamic(() => import("../../../components/ProductsPage"));

const Products = async ({ params }: { params: { slug: string } }) => {
    console.log(params.slug)
    const justIn = await Helpers.getProducts('https://fakestoreapi.com/products') ?? []
    const single = (await Helpers.getSingle(params.slug)) as productType
    if (!single) {
        notFound();
    }
    return (
        <main className="max-w-7xl mx-auto">
            <ShopPage item={single} justIn={justIn}  />
        </main>
    )
}

export default Products
