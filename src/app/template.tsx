"use client";
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useScrollTop } from "../Helpers/Hooks";
import { scrollTopView } from "../Helpers/Views";
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });
import Header from "../components/Header"
import { motion } from 'framer-motion'

const Template = ({ children }: { children: ReactNode }) => {
    const { scrollBtn, scrollTop } = useScrollTop();

    return (
        <>
            <Header />
            <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'anticipate', duration: 1 }}
            >
                {children}
                <Footer />
                <Script
                    src="https://kit.fontawesome.com/4ef8c63dd7.js"
                    crossOrigin="anonymous"
                />
                {
                    scrollTopView(scrollBtn, scrollTop)
                }
            </motion.div>
        </>

    );

};

export default Template;
