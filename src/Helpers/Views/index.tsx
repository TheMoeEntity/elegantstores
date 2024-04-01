import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
export const scrollTopView = (scrollBtn: React.MutableRefObject<HTMLDivElement | null>, scrollTop: () => void): JSX.Element => {
    return (
        <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
            <i className="fa-solid fa-angle-up"></i>
        </div>
    )
}

export const CartView = (
    active: string,
    counter: string,
    cartGrid: string,
    cartTitle: string,
    Image: any,
    cartDetail: string,
    cap: StaticImageData
): JSX.Element => {
    return (
        <div className={cartGrid}>
            <div>
                <div className={cartTitle}>
                    <div>
                        <b>Product</b>
                    </div>
                    <div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Subtotal</div>
                    </div>
                </div>
                {[...Array(3)].map((_x, i) => (
                    <div key={i} className={`${cartDetail} my-3`}>
                        <div>
                            <div>
                                <Image alt="Cart item picture" src={cap} fill quality={100} />
                            </div>
                            <div>
                                <span className="my-1">
                                    <b>Cart item 1</b>
                                </span>
                                <span className="my-1">
                                    <small>Color: black</small>
                                </span>
                                <span>
                                    <small>
                                        <strong>&times; &nbsp; Remove</strong>
                                    </small>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className={counter}>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </div>
                            <div>$26.00</div>
                            <div>
                                <strong>$30.00</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div>
                    <h4 className="h4 my-2">Cart Summary</h4>
                </div>
                <div>
                    <div className={active}>
                        <span>Free Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <div>
                        <span>Express Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <div>
                        <span>Pay on Delivery</span>
                        <span>$0.00</span>
                    </div>
                </div>
                <div>
                    <span>Subtotal</span>
                    <span>
                        <b>$1234.60</b>
                    </span>
                </div>
                <div style={{ borderBottom: "none" }}>
                    <span>
                        <b>TOTAL</b>
                    </span>
                    <span>
                        <b>$1234.60</b>
                    </span>
                </div>
                <div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
};