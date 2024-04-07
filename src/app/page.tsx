import styles from "./page.module.css";
import Hero from "../components/Hero";
import Arrivals from "../components/Arrivals";
import Catgories from "../components/Categories";
import Best_Sellers from "../components/Best_Sellers";
import { Helpers } from "../Helpers";
import Extras from "../components/Extras";
import { readUserSession } from "../Helpers/supabase";

export default async function Home() {
  const products = await Helpers.getProducts(
    "https://api.escuelajs.co/api/v1/categories/3/products" ?? []
  );
  const justIn = await Helpers.getProducts('https://fakestoreapi.com/products') ?? []
  const insta = await Helpers.formatProducts() || []
  const user = await readUserSession()
  const getSession = user.data.user?.user_metadata ?? null
  return (
    <main className={`${styles.main} min-h-screen max-w-7xl mx-auto`}>
      <Hero />
      <Arrivals justIn={justIn} signedIn={getSession} />
      <Catgories />
      <Best_Sellers products={products} />
      <Extras insta={insta} />
    </main>
  );
}
