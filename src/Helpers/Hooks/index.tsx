"use client"
import { usePathname, } from "next/navigation";
import { useEffect, useRef } from "react";
import { MutableRefObject } from "react";
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

export const useAnimation = (
    grid: MutableRefObject<HTMLDivElement | null> | HTMLCollectionOf<Element>,
    animation: string,
    shouldLoop: boolean,
    container?: MutableRefObject<HTMLDivElement | null>
) => {
    useEffect(() => {
        window.addEventListener("scroll", animateIn);
        return () => {
            window.removeEventListener("scroll", animateIn);
        };
    }, []);

    const animateIn = () => {
        let height = window.innerHeight;

        if (container) {
            if (container.current) {
                let width = container.current;
                let revealpoint = 120;
                let revealTop = width.getBoundingClientRect().top;
                if (revealTop < height - revealpoint) {
                    width.classList.add(animation);
                }
            }
        }
        let ref = (grid as MutableRefObject<HTMLDivElement | null>) ?? true;
        let getCurrent = ref.current ?? true;
        if (getCurrent) {
            let widthsRef;
            if (ref.current) {
                widthsRef = ref.current.children;
            } else {
                widthsRef = document.getElementsByClassName("anim");
            }

            let widthsClass = document.getElementsByClassName("anim");

            for (
                let index = 0;
                index < widthsRef.length ?? widthsClass.length;
                index++
            ) {
                const element = widthsRef[index] ?? widthsClass[index];
                let revealTop = element.getBoundingClientRect().top;
                let revealpoint = 120;
                if (revealTop < height - revealpoint) {
                    element.classList.add(animation);
                } else {
                    if (shouldLoop) {
                        element.classList.remove(animation);
                    }
                }
            }
        }
    };
};