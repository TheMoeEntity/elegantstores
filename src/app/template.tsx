"use client";
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useScrollTop } from "../Helpers/Hooks";
import { scrollTopView } from "../Helpers/Views";
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const Header = dynamic(() => import("../components/Header"));


const Template = ({ children }: { children: ReactNode }) => {
    const { scrollBtn, scrollTop } = useScrollTop();


    return (
        <>
            <Header />
            {children}
            <Footer />
            <Script
                src="https://kit.fontawesome.com/4ef8c63dd7.js"
                crossOrigin="anonymous"
            />
            {
                scrollTopView(scrollBtn, scrollTop)
            }
        </>
    );

};

export default Template;
