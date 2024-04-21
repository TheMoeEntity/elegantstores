"use client"
import { usePathname, } from "next/navigation";
import { useEffect, useRef } from "react";
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export const useHeaderState = () => {
    const { push } = useRouter()
    const [isOpen, setOpen] = useState<boolean>(false)
    const [product, setProduct] = useState<boolean>(false)
    const [company, setCompany] = useState<boolean>(false)
    const [sales, setSales] = useState<boolean>(true)
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [search, setSearch] = useState(false)
    return { isOpen, push, search, setSearch, setOpen, product, setProduct, company, setCompany, sales, setSales, cartOpen, setCartOpen, profileOpen, setProfileOpen }
}
export function useClientMediaQuery(query: string) {
    const [matches, setMatches] = useState<null | boolean>(null);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const handleMatchChange = (e: any) => {
            setMatches(e.matches);
        };

        mediaQueryList.addEventListener('change', handleMatchChange);
        setMatches(mediaQueryList.matches);

        return () => {
            mediaQueryList.removeEventListener('change', handleMatchChange);
        };
        // const isMobile = useClientMediaQuery('(max-width: 600px)');
    }, [query]);

    return matches;
}

export const useScrollTop = () => {
    const pathname = usePathname();
    const scrollBtn = useRef<HTMLDivElement | null>(null);
    const isBrowser = () => typeof window !== "undefined";
    useEffect(() => {
        window.addEventListener("scroll", animateIn);
        return () => {
            window.removeEventListener("scroll", animateIn);
        };
    }, []);
    const animateIn = () => {
        if (!isBrowser()) return;
        if (scrollBtn.current) {
            if (
                document.body.scrollTop > 120 ||
                document.documentElement.scrollTop > 120
            ) {
                scrollBtn.current.style.bottom = "30px";
                scrollBtn.current.style.opacity = "1";
            } else {
                scrollBtn.current.style.bottom = "-20px";
                scrollBtn.current.style.opacity = "0";
            }
        }
    };
    const scrollTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return { scrollTop, scrollBtn, pathname };
};


export const useCouponCode = ()=> {
    
}