import { StaticImageData } from "next/image";

export type featuresContent = {
    index: number

}
export interface FeaturesType  {
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
        suffixes:string[]
    }
}
export type FAQType = {
    text: string
    isActive: boolean
    reply: string|TrustedHTML
}