import styles from "./cart.module.css";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/src/Helpers/zustand";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Helpers } from "@/src/Helpers";

const CartModal = ({ cartOpen, closeCart, forceClose }: { cartOpen: boolean, closeCart: () => void, forceClose: () => void }) => {
    const { cart, removeFromCart } = useStore()
    const removeAction = (id: string) => {
        removeFromCart(id);
    }
    const total = useMemo(
        () => {
            return Helpers.CalculateTotal(cart)
        },
        [cart],
    )


    return (
        <div
            style={{
                top: cartOpen ? "130px" : "-500px",
                visibility: !cartOpen ? 'hidden' : 'visible'
            }}
            className={styles.cartModal}
        >
            <h2 className="font-extrabold">Shopping Cart</h2>
            {cart.length == 0 ? (
                <div className={styles.nocart}>
                    <h4>You have no items in your cart</h4>
                </div>
            ) : (
                <ul>
                    {cart.map((x, i) => (
                        <li key={i}>
                            <div>
                                <div className={styles.image}>
                                    <div>
                                        <Image
                                            src={x.item.images[0]}
                                            alt="product image"
                                            fill
                                            quality={100}
                                            style={{ objectFit: 'contain' }}
                                            sizes="100vw"
                                        />
                                    </div>
                                </div>
                                <div className={styles.desc}>
                                    <h4>{x.item.title}</h4>
                                    <h5>{x.quantity}</h5>
                                </div>
                                <div className={styles.cost}>
                                    <button onClick={() => removeAction(x.item.id)}>
                                        Remove
                                    </button>
                                    <span className={styles.itempri}>
                                        ₦{x.item.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div
                style={{
                    position: cart.length < 3 ? "absolute" : "sticky",
                }}
                className={styles.bottom}
            >
                <div className={styles.prices}>
                    <h3>Cart total</h3>
                    <h4>₦{Helpers.CalculateTotal(cart).toLocaleString()}</h4>
                </div>
                <p>shipping total calculated at checkout</p>
                <div className={styles.bottomControls}>
                    <Link href={"/cart"}>
                        <button onClick={closeCart}>View cart</button>
                    </Link>
                    <Link href={'/cart?checkout=true'}>
                        <button onClick={closeCart} className={styles.checkBtn}>Check out</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CartModal;
