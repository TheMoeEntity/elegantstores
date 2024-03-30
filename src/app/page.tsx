import styles from "./page.module.css";
import Hero from "../components/Hero";
import Arrivals from "../components/Arrivals";
import Catgories from "../components/Categories";
import Best_Sellers from "../components/Best_Sellers";
import { Helpers } from "../Helpers";
import Extras from "../components/Extras";

export default async function Home() {
  const products = await Helpers.getProducts(
    "https://api.escuelajs.co/api/v1/categories/2/products" ?? []
  );
  const insta = await Helpers.formatProducts() ?? []
  return (
    <main className={`${styles.main} min-h-screen max-w-7xl mx-auto`}>
      <Hero />
      <Arrivals />
      <Catgories />
      <Best_Sellers products={products} />
      <Extras insta={insta} />
    </main>
  );
}
