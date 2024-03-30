import styles from "./cart.module.css";
import Image from "next/image";
import Link from "next/link";
import noimage from '../../../public/images/noimage.png'

const CartModal = ({ cartOpen, closeCart, forceClose }: { cartOpen: boolean, closeCart: () => void, forceClose: () => void }) => {
    const cart = [
        {
            images: ['/images/boy.jpeg'],
            name: "Big Hoodie",
            price: 45400
        }
    ]
    return (
        <div
            style={{
                top: cartOpen ? "130px" : "-500px",
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
                                            src={x.images[0] ?? noimage}
                                            alt="product image"
                                            fill
                                            quality={100}
                                            style={{objectFit:'cover'}}
                                            priority={true}
                                            sizes="100vw"
                                        />
                                    </div>
                                </div>
                                <div className={styles.desc}>
                                    <h4>{x.name}</h4>
                                    <h5>Natural | XL</h5>
                                </div>
                                <div className={styles.cost}>
                                    <button>
                                        Remove
                                    </button>
                                    <span className={styles.itempri}>
                                        ₦{x.price.toLocaleString()}
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
                    <h4>₦{20000}</h4>
                </div>
                <p>shipping total calculated at checkout</p>
                <div className={styles.bottomControls}>
                    <Link href={"/cart"}>
                        <button onClick={closeCart}>View cart</button>
                    </Link>
                    <button className={styles.checkBtn}>Check out</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
