"use client";
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useScrollTop } from "../Helpers/Hooks";
import { scrollTopView } from "../Helpers/Views";
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });
import Header from "../components/Header"
import { SnackbarProvider } from "notistack";

const Template = ({ children }: { children: ReactNode }) => {
    const { scrollBtn, scrollTop } = useScrollTop();

    return (
        <SnackbarProvider
            classes={{ containerRoot: "z-alert" }}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
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
        </SnackbarProvider>

    );

};

export default Template;
