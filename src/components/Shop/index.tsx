import Image from 'next/image'
import hero from '../../../public/images/furniture-2.jpeg'
import { fakeProductType } from '@/src/Helpers/types'
import Link from 'next/link'

const ShopPage = ({ products }: { products: fakeProductType[] }) => {
    return (
        <section className='min-h-screen'>
            <div className="hero w-full relative h-[300px] md:h-[500px]">
                <div className='absolute left-0 top-0 z-10 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center'></div>
                <Image
                    src={hero}
                    fill
                    alt="big hero image"
                    quality={100}
                    sizes={'100vw'}
                    priority
                    className="object-cover w-full h-full"
                />
                <div className='absolute text-center flex flex-col gap-y-10 z-20 text-white w-[90%] h-[70%] md:h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-center text-xl'> Home <i className='fa-solid fa-angle-right mx-3'></i> <b className='text-[#377DFF]'>Shop</b></h1>
                    <h1 className='text-center font-semibold text-3xl md:text-5xl underline underline-offset-8'>Shop Page</h1>
                    <p>{`Let’s`} design the place you always imagined.</p>
                </div>
            </div>

            <div className='flex my-8 flex-row gap-3 flex-wrap mx-auto w-[95%]'>
                <div className='hidden md:flex basis-[23%] h-[800px] gap-y-9 flex-col'>
                    <div className='text-xl'>
                        <i className='fa-solid fa-filter mr-3'></i>
                        Filter
                    </div>
                    <div className='text-xl'>
                        <h2 className='text-2xl font-semibold'>CATEGORIES</h2>
                    </div>
                    <div>
                        <ul className='text-gray-600 gap-y-5 flex-col flex'>
                            <li>All Products</li>
                            <li className='text-black underline'>Shoes</li>
                            <li>Miscellaneous</li>
                            <li>Outdoor</li>
                            <li>{`Men's`} Bags</li>
                            <li>Leather wears</li>
                        </ul>
                    </div>
                    <div className='text-xl'>
                        <h2 className='text-2xl font-semibold'>PRICE</h2>
                    </div>
                    <div>
                        <ul className='text-gray-600 gap-y-5 flex-col flex'>
                            <li className='w-full flex justify-between items-center'>
                                <span>All Prices</span>
                                <span>
                                    <input className='w-6 h-6' type="checkbox" name="" id="" />
                                </span>
                            </li>
                            <li className='w-full flex justify-between items-center'>
                                <span>$100.00 - 199.99</span>
                                <span>
                                    <input className='w-6 h-6' type="checkbox" name="" id="" />
                                </span>
                            </li>
                            <li className='w-full flex justify-between items-center'>
                                <span>$200.00 - 299.99</span>
                                <span>
                                    <input className='w-6 h-6' type="checkbox" name="" id="" />
                                </span>
                            </li>
                            <li className='w-full flex justify-between items-center'>
                                <span>$300.00 - 399.99</span>
                                <span>
                                    <input className='w-6 h-6' type="checkbox" name="" id="" />
                                </span>
                            </li>
                            <li className='w-full flex justify-between items-center'>
                                <span>$400.00+</span>
                                <span>
                                    <input className='w-6 h-6' type="checkbox" checked name="" id="" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='md:basis-[72%]'>
                    <div className='my-8 flex md:hidden justify-between border-b-[1px] border-t-[1px] border-gray-300 py-6 mx-auto w-[90%]'>
                        <div className='text-xl'>
                            <i className='fa-solid fa-filter mr-3'></i>
                            Filter
                        </div>

                        <div>

                        </div>
                    </div>

                    <div className='text-xl mx-auto my-7 w-[90%] flex justify-between '>
                        <div className='text-xl font-semibold'>
                            Shop
                        </div>
                        <div>
                            Sort by
                            <i className='fa-solid fa-angle-down ml-3'></i>
                        </div>
                    </div>
                    <div className='md:px-5 py-12 flex flex-col gap-10 w-full h-fit md:w-[100%] mx-auto'>
                        <div className="flex flex-row gap-2 gap-y-7 md:gap-y-5 md:gap-4 justify-center flex-wrap mb-7">
                            {
                                (products).slice(0, 8).map((x) => (
                                    <div key={x.id} className='flex group overflow-y-hidden pb-4 md:min-h-auto shadow-md rounded-md flex-col gap-y-2 gap-x-0 h-fit md:min-w-[10%] basis-[47%] md:basis-[30%] lg:basis-[23%]'>
                                        <Link href={'/products/'+x.title} className='w-full mt-0 mb-3 relative min-h-[250px] md:min-h-[200px] max-h-[auto]'>
                                            <Image
                                                src={x.images[0]}
                                                alt='Best sellers'
                                                quality={100}
                                                sizes='100vw'
                                                fill
                                                className='object-cover'
                                            />
                                        </Link>
                                        <div className='px-3 flex gap-2'>
                                            {[...Array(4)].map((_, i) => (
                                                <span key={i} className={`fa fa-star`}></span>
                                            ))}
                                        </div>
                                        <div className='px-3 font-semibold'>{x.title}</div>
                                        <div className='px-3 font-semibold'>${x.price}</div>
                                        <div className='w-[90%] transition-transform duration-[0.55s] ease mx-auto group-hover:translate-y-0 translate-y-20'>
                                            <button className='w-full px-3 py-2 bg-black text-white rounded-lg'>Add to cart</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mx-auto w-fit mt-10'>
                        <button className='rounded-full border-[1px] border-black px-6 py-2 text-xl'>Load more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopPage