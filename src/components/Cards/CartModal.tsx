"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./cards.module.css";
import cap from "../../public/images/cap.jpeg";
import { CartView } from "@/src/Helpers/Views";
;

const CartModals = () => {
    const [currView, setCurrView] = useState<JSX.Element>(
        CartView(
            styles.active,
            styles.counter,
            styles.cartGrid,
            styles.cartTitle,
            Image,
            styles.cartDetail,
            cap
        )
    );

    return (
        {
            currView
        }
    );
};

export default CartModals
