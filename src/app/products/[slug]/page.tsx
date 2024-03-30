import dynamic from "next/dynamic";
const ShopPage = dynamic(() => import("../../../components/ProductsPage"));

const Products = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <ShopPage />
        </main>
    )
}

export default Products