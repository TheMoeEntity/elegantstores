import { Helpers } from "@/src/Helpers";
import { formatProductWithDimensions } from "@/src/Helpers/Hooks/getImageDimensions";
import { IProduct, ISBProducts, productType } from "@/src/Helpers/types";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const ShopPage = dynamic(() => import("../../../components/ProductsPage"));

const Products = async ({ params }: { params: { slug: string } }) => {

    const justIn = await Helpers.getProducts('https://fakestoreapi.com/products') ?? []
    let single: ISBProducts | IProduct | productType | undefined = (await Helpers.getSingleProduct(params.slug as string))
    if (!single) {
        let single2: any = await Helpers.getSingle(params.slug).then(async prod => {
            if (prod) {
                let formatted = Helpers.formatPlaceHolder(prod)
                return (await formatProductWithDimensions(formatted))
            }

        })
        single = single2
        if (!single2) {
            notFound()
        }
    } else if (single) {
        const formatted = (await formatProductWithDimensions(single as ISBProducts))
        single = formatted
    }


    return (
        <main className="max-w-7xl mx-auto">
            <ShopPage item={single} justIn={justIn} />
        </main>
    )
}

export default Products
