import { fakeProductType } from "./types";

export class Helpers {
    static async formatProducts() {
        const insta = await this.getProducts('https://api.escuelajs.co/api/v1/products/?categoryId=1') as fakeProductType[]
        return insta.map(prod => prod.images[0])
    }
    static async getProducts(url: string) {
        const products = await fetch(url)
            .then(async (res) => {
                const isJson = res.headers
                    .get("content-type")
                    ?.includes("application/json");
                const data = isJson ? await res.json() : null;
                if (res.ok || res.status === 200) {
                    return data;
                }
                if (!res.ok) {
                    const error = (data && data.message) || res.status;
                    return Promise.reject(error);
                }
            })
            .catch((err) => {
                return JSON.stringify(err);
            });
        return products;
    }
}