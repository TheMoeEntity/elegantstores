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

}
export type UserProviderType = {
    children:ReactNode
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
    author:string,
    width: number,
    height: number,
    url: string,
    download_url:string
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
    cartTotalPrice:number
    cartCount: number;
    updateTotal:()=>void
    addToCart: (item: ISBProducts, quantity:number) => void
    removeFromCart:(id:string) => void
};
export type cartItem = {
    item:ISBProducts
    quantity:number
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
        reviews: {
            name: string
            review: string
            rating: number
        }[]
    }
}