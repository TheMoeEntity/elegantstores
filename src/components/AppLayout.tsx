'use client'
import React, { ReactNode, useContext, useEffect } from 'react'
import { useScrollTop } from '../Helpers/Hooks';
import { UserProvider, userContext } from '../Helpers/ContextAPI/usercontext';
import { SnackbarProvider } from 'notistack';
import Header from './Header';
import Footer from './Footer';
import Script from 'next/script';
import { scrollTopView } from '../Helpers/Views';
import { UserMetadata } from '@supabase/supabase-js';
import { Toaster } from 'react-hot-toast';
import { ISBProducts } from '../Helpers/types';


const AppLayout = ({ children, session, url, products }: { products: ISBProducts[], url: string, children: ReactNode, session: UserMetadata | null }) => {
    const { scrollBtn, scrollTop } = useScrollTop();
    const { setStore } = useContext(userContext)
    useEffect(() => {
        setStore(products)
    }, [])

    return (
        <UserProvider>
            <SnackbarProvider
                classes={{ containerRoot: "z-alert" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
                <Toaster
                    toastOptions={{
                        style: {
                            zIndex: '9999999999999999999999999999999999999999999999999',
                            background: 'white'
                        }
                    }}
                />
                <Header products={products} url={url} getSession={session} />
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
        </UserProvider>
    );
}

export default AppLayout