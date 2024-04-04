import { Helpers } from "@/src/Helpers";
import { formatProductWithDimensions } from "@/src/Helpers/Hooks/getImageDimensions";
import { ISBProducts, productType } from "@/src/Helpers/types";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const ShopPage = dynamic(() => import("../../../components/ProductsPage"));

const Products = async ({ params }: { params: { slug: string  } }) => {
    console.log(params.slug)
    const justIn = await Helpers.getProducts('https://fakestoreapi.com/products') ?? []
    const single = (await Helpers.getSingleProduct(params.slug))
    const formatted = (await formatProductWithDimensions(single as ISBProducts))
    if (!single) {
        notFound()
    }
    return (
        <main className="max-w-7xl mx-auto">
            <ShopPage item={formatted} justIn={justIn} />
        </main>
    )
}

export default Products
