import { cartItem } from '@/src/Helpers/types';
import styles from './cards.module.css'
import Image from 'next/image';
import Link from 'next/link';

const OrderComplete = ({ cart }: { cart: cartItem[] }) => {
    return (
        <div className={`${styles.receivedOrderContainer} text-center py-5`}>
            <p className="font-weight-bold text-2xl mb-0">
                Your Order Has Been Received! 🥳
            </p>
            <i className="fa-solid fa-check-mark" />
            <p className="mt-2">
                We&#39;ve recieved your order and will be shipping it to you as soon as
                possible.
            </p>

            <div className="flex flex-col m-auto no-scrollbar p-auto mt-7 w-full">
                <div
                    className="flex md:overflow-x-scroll no-scrollbar pb-10 no-scrollbar"
                >
                    <div
                        className="flex gap-5 flex-nowrap whitespace-nowrap"
                    >
                        {
                            cart.map((x) => (
                                <div key={x.item.title} className="w-[150px] h-[150px] relative mx-auto flex items-center justify-center">
                                    <Image
                                        src={x.item.images[0]}
                                        alt="picture of item purchased"
                                        quality={100}
                                        fill
                                        sizes={'100vw'}
                                        className={`object-contain w-full h-auto`}
                                    />
                                    <div className="absolute text-sm -top-0 right-3 z-10 rounded-full bg-black w-5 h-5 text-white items-center justify-center flex">
                                        {x.quantity}
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>

            <Link className='bg-black text-white text-sm p-2 rounded-md hover:text-white' href={'/account?link=order'}>
                Purchase History
            </Link>
        </div>
    );
}

export default OrderComplete