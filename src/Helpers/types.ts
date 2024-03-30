import { StaticImageData } from "next/image";

export type featuresContent = {
    index: number

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
export interface productType  {
    title: string;
    id: number;
    image: string;
    price: number;
};
export interface fakeProductType extends productType  {
    description:string
    images:string[]
}
export interface IArticle {
    title:string
    desc:string
    date:string
    img:StaticImageData
}