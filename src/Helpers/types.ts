import { UserMetadata } from "@supabase/supabase-js";
import { StaticImageData } from "next/image";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type featuresContent = {
    index: number

}
export type userSession = {
    userData: UserMetadata
    isSignedIn: boolean
}
export type userContex = {
    user: userSession
    setUser: Dispatch<SetStateAction<userSession>>
    setStore: Dispatch<SetStateAction<ISBProducts[]>>
    store: ISBProducts[]
}
export type UserProviderType = {
    children: ReactNode
}
export interface FeaturesType {
    icon: StaticImageData;
    title: string;
    text: string
}[]
export type careerType = {
    title: string;
    text: string;
};
export type loremPicsum = {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}
export type teamType = {
    title: string;
    profile: string;
    image: StaticImageData;
};
export interface Countries {
    name: {
        common: string
    }
    flag: string
    population: number
    idd: {
        root: string,
        suffixes: string[]
    }
}
export type FAQType = {
    text: string
    isActive: boolean
    reply: string | TrustedHTML
}
export interface productType {
    title: string;
    id: string;
    price: number;
    description: string
    category: string
    image: string,
    rating: {
        rate: number,
        count: number
    }
}
export interface IProduct extends productType {
    images: string[]
    colors: string[]
    sizes: string[]
    slug: string
    dimensions: {
        width: number
        height: number
    }
    in_Stock: boolean
    reviews: {
        reviews: {
            name: string
            review: string
            rating: number
        }[]
    }
}

export interface fakeProductType extends productType {
    description: string
    images: string[]
}
export interface IArticle {
    title: string
    desc: string
    date: string
    img: StaticImageData
}
export interface ISession {

    email: string,
    email_verified: boolean,
    fullName: string,
    phone_verified: boolean,
    sub: string,
    userName: string

}
export interface IStore {
    cart: cartItem[];
    cartCount: number;
    updateItemQuantity: (id: string, action: 'add' | 'reduce') => void
    emptyCart: () => void,
    addToCart: (item: ISBProducts, quantity: number) => void
    removeFromCart: (id: string) => void
};
export type cartItem = {
    item: ISBProducts
    quantity: number
}
export interface ISBProducts {
    id: string
    title: string
    price: number
    description: string
    category: string
    rating: number
    images: string[]
    colors: string[]
    sizes: string[]
    slug: string
    count: number
    dimensions: {
        width: number
        height: number
    }
    in_Stock: boolean
    reviews: {
        reviews: reviewType[]
    }
}
export type reviewType = {
    name: string
    review: string
    rating: number
}
export type addressType = {
    shipping: {
        phone: string,
        address: string
    }
    billing: {
        phone: string,
        address: string
    }
}
export type wishList = {
    image: string,
    price: number
    title: string
}
export interface Countries {
    name: {
        common: string
    }
    flag: string
    population: number
    idd: {
        root: string,
        suffixes: string[]
    }
}
export interface PriceRange {
    min: number;
    max: number;
    isChecked: boolean
    id: number
}
export type OrderType = {
    created_at: string
    order_items: {
        product: {
            id: number
            title: string
            image: string
            price: number
            quantity: number
        }
    }
}