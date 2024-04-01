"use client"
import stool from '../../../public/images/showcase.png'
import Image from "next/image"
import { useState } from "react"

const Cart = () => {
    const [quantity, setQuantity] = useState<number>(1)
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <h1 className='text-center py-20 text-4xl font-semibold'>Cart</h1>
            <div className='mx-auto lg:w-[60%] md:w-[90%] md:pl-0 pl-5 flex flex-wrap md:overflow-x-visible overflow-x-scroll justify-center  no-scrollbar'>
                <div className='border-[#DEE1E6] text-xl whitespace-nowrap  pb-0.3 mb-[32px] w-full md:w-fit mx-auto flex '>
                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${true ? ' border-black ' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className='w-6 h-6 bg-black text-white items-center justify-center flex rounded-full text-xs'>1</span>
                        <button>Shopping cart</button>
                    </div>

                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${false ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${false ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>2</span>
                        <button>Checkout details</button>
                    </div>
                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${false ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${false ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>3</span>
                        <button>Order complete</button>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto mb-10">

                <div className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
                    <div className='flex-1 flex-grow-[1.75]'>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table
                                            className="min-w-full text-left text-sm font-light text-surface border-spacing-5">
                                            <thead
                                                className="border-b border-neutral-200 bg-white font-semibold">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4 w-[55%]" colSpan={2}>Product</th>
                                                    <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Quantity</th>
                                                    <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Price</th>
                                                    <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-neutral-200 border-b-gray-200 h-auto">
                                                    <td className="px-0 min-w-[65%] md:min-w-[55%] md:max-w-[55%] py-0 font-medium align-top" colSpan={2}>
                                                        <div className="w-full h-[190px] md:h-[160px] flex items-center gap-x-4 md:gap-x-6">
                                                            <div className="md:basis-[40%]">
                                                                <Image
                                                                    src={stool}
                                                                    alt="product main image"
                                                                    quality={100}
                                                                    sizes={'100vw'}
                                                                    className="object-cover w-full h-auto"
                                                                />
                                                            </div>
                                                            <div className='flex flex-col gap-y-4 justify-center basis-[40%] max-w-[45%]'>
                                                                <h2 className='font-semibold md:text-xl text-left'>Tray Table</h2>
                                                                <h2 className='text-sm text-gray-400 text-left whitespace-nowrap'>Color: green</h2>
                                                                <div className='md:flex items-center hidden'>
                                                                    <span className='text-xl mr-3'>&times;</span>
                                                                    Remove
                                                                </div>
                                                                <div className='flex items-center md:hidden rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-3 shadow-md'>
                                                                    <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5  flex-col text-xl h-[160px] max-w-[100%] items-center justify-center hidden md:table-cell">
                                                        <div className='flex items-center rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-6 shadow-md w-[120px]'>
                                                            <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">$1332.00</td>
                                                    <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">$38.40</td>
                                                    <td className="whitespace-nowrap pl-8 py-4 text-xl table-cell md:hidden text-center">
                                                        <span className='text-right'>$19.00</span> <br />
                                                        <span className='mt-5 block text-3xl'>&times;</span>
                                                    </td>
                                                </tr>

                                                <tr className="border-b bg-white border-neutral-200 border-b-gray-200 h-auto">
                                                    <td className="px-0 min-w-[65%] md:min-w-[55%] md:max-w-[55%] py-0 font-medium align-top" colSpan={2}>
                                                        <div className="w-full h-[190px] md:h-[160px] flex items-center gap-x-4 md:gap-x-6">
                                                            <div className="md:basis-[40%]">
                                                                <Image
                                                                    src={stool}
                                                                    alt="product main image"
                                                                    quality={100}
                                                                    sizes={'100vw'}
                                                                    className="object-cover w-full h-auto"
                                                                />
                                                            </div>
                                                            <div className='flex flex-col gap-y-4 justify-center basis-[40%] max-w-[45%]'>
                                                                <h2 className='font-semibold md:text-xl text-left'>Tray Table</h2>
                                                                <h2 className='text-sm text-gray-400 text-left whitespace-nowrap'>Color: green</h2>
                                                                <div className='md:flex items-center hidden'>
                                                                    <span className='text-xl mr-3'>&times;</span>
                                                                    Remove
                                                                </div>
                                                                <div className='flex items-center md:hidden rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-3 shadow-md'>
                                                                    <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5  flex-col text-xl h-[160px] max-w-[100%] items-center justify-center hidden md:table-cell">
                                                        <div className='flex items-center rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-6 shadow-md w-[120px]'>
                                                            <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">$1332.00</td>
                                                    <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">$38.40</td>
                                                    <td className="whitespace-nowrap pl-8 py-4 text-xl table-cell md:hidden text-center">
                                                        <span className='text-right'>$19.00</span> <br />
                                                        <span className='mt-5 block text-3xl'>&times;</span>
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-neutral-200 border-b-gray-200 h-auto">
                                                    <td className="px-0 min-w-[65%] md:min-w-[55%] md:max-w-[55%] py-0 font-medium align-top" colSpan={2}>
                                                        <div className="w-full h-[190px] md:h-[160px] flex items-center gap-x-4 md:gap-x-6">
                                                            <div className="md:basis-[40%]">
                                                                <Image
                                                                    src={stool}
                                                                    alt="product main image"
                                                                    quality={100}
                                                                    sizes={'100vw'}
                                                                    className="object-cover w-full h-auto"
                                                                />
                                                            </div>
                                                            <div className='flex flex-col gap-y-4 justify-center basis-[40%] max-w-[45%]'>
                                                                <h2 className='font-semibold md:text-xl text-left'>Tray Table</h2>
                                                                <h2 className='text-sm text-gray-400 text-left whitespace-nowrap'>Color: green</h2>
                                                                <div className='md:flex items-center hidden'>
                                                                    <span className='text-xl mr-3'>&times;</span>
                                                                    Remove
                                                                </div>
                                                                <div className='flex items-center md:hidden rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-3 shadow-md'>
                                                                    <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5  flex-col text-xl h-[160px] max-w-[100%] items-center justify-center hidden md:table-cell">
                                                        <div className='flex items-center rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-6 shadow-md w-[120px]'>
                                                            <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">$1332.00</td>
                                                    <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">$38.40</td>
                                                    <td className="whitespace-nowrap pl-8 py-4 text-xl table-cell md:hidden text-center">
                                                        <span className='text-right'>$19.00</span> <br />
                                                        <span className='mt-5 block text-3xl'>&times;</span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 border-[1px] md:w-[60%] max-w-full border-black rounded-md px-4 py-5 flex flex-col gap-y-5'>
                        <h2 className='font-semibold text-2xl'>Cart summary</h2>
                        <div className='flex rounded-md bg-[#F3F5F7] justify-between items-center px-4 border-[1px] border-black'>
                            <div className='flex gap-x-3 py-3'>
                                <div></div>
                                <div>Free Shipping</div>
                            </div>
                            <span>$0.00</span>
                        </div>
                        <div className='flex rounded-md justify-between items-center px-4 border-[1px] border-black'>
                            <div className='flex gap-x-3 py-3'>
                                <div></div>
                                <div>Express Shipping</div>
                            </div>
                            <span>$0.00</span>
                        </div>
                        <div className='flex rounded-md justify-between items-center px-4 border-[1px] border-black'>
                            <div className='flex gap-x-3 py-3'>
                                <div></div>
                                <div>Pick up</div>
                            </div>
                            <span>$0.00</span>
                        </div>
                        <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                            <div className='flex gap-x-3 py-3'>
                                Subtotal
                            </div>
                            <span>$123.045</span>
                        </div>
                        <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                            <h2 className='flex gap-x-3 py-3 text-xl font-semibold'>
                                Total
                            </h2>
                            <span>$1345.045</span>
                        </div>
                        <div>
                            <button className='bg-black text-white w-full py-3 rounded-md'>Checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Cart