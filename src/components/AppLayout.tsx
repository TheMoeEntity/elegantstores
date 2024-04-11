'use client'
import React, { ReactNode } from 'react'
import { useScrollTop } from '../Helpers/Hooks';
import { UserProvider } from '../Helpers/ContextAPI/usercontext';
import { SnackbarProvider } from 'notistack';
import Header from './Header';
import Footer from './Footer';
import Script from 'next/script';
import { scrollTopView } from '../Helpers/Views';
import { UserMetadata } from '@supabase/supabase-js';
import { Toaster } from 'react-hot-toast';


const AppLayout = ({ children, session }: { children: ReactNode, session: UserMetadata | null }) => {
    const { scrollBtn, scrollTop } = useScrollTop();

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
                <Header getSession={session} />
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