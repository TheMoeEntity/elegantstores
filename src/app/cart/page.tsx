"use client"
import OrderComplete from '@/src/components/Cards/orderComplete'
import stool from '../../../public/images/showcase.png'
import Image from "next/image"
import { motion } from 'framer-motion'
import { useState } from "react"
import TextTransition, { presets } from 'react-text-transition';

const Cart = () => {
    const [quantity, setQuantity] = useState<number>(1)
    const [step, setStep] = useState<number>(0)
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <div className='mx-auto w-1/2 flex items-center justify-center'>
                <h1 className='text-center py-20 text-4xl font-semibold'>
                    <TextTransition springConfig={presets.wobbly}>
                        {
                            step === 0 ? "Cart" : step === 1 ? "Checkout" : "Complete"
                        }
                    </TextTransition>
                </h1>
            </div>

            <div className='mx-auto lg:w-[60%] md:w-[90%] md:pl-0 pl-5 flex flex-wrap md:overflow-x-visible overflow-x-scroll justify-center  no-scrollbar'>
                <div className='border-[#DEE1E6] text-xl whitespace-nowrap  pb-0.3 mb-[32px] w-full md:w-fit mx-auto flex '>
                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${step === 0 ? ' border-black ' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${step === 0 ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>1</span>
                        <button onClick={() => setStep(0)}>Shopping cart</button>
                    </div>

                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${step === 1 ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${step === 1 ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>2</span>
                        <button onClick={() => setStep(1)}>Checkout details</button>
                    </div>
                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${step === 2 ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${step === 2 ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>3</span>
                        <button onClick={() => setStep(2)}>Order complete</button>
                    </div>
                </div>
            </div>
            <div className="w-[85%] mx-auto mb-10">
                {
                    step === 0 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
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
                                    <span>₦0.00</span>
                                </div>
                                <div className='flex rounded-md justify-between items-center px-4 border-[1px] border-black'>
                                    <div className='flex gap-x-3 py-3'>
                                        <div></div>
                                        <div>Express Shipping</div>
                                    </div>
                                    <span>₦0.00</span>
                                </div>
                                <div className='flex rounded-md justify-between items-center px-4 border-[1px] border-black'>
                                    <div className='flex gap-x-3 py-3'>
                                        <div></div>
                                        <div>Pick up</div>
                                    </div>
                                    <span>₦0.00</span>
                                </div>
                                <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                                    <div className='flex gap-x-3 py-3'>
                                        Subtotal
                                    </div>
                                    <span>₦123.045</span>
                                </div>
                                <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                                    <h2 className='flex gap-x-3 py-3 text-xl font-semibold'>
                                        Total
                                    </h2>
                                    <span>₦1345.045</span>
                                </div>
                                <div>
                                    <button className='bg-black text-white w-full py-3 rounded-md'>Checkout</button>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
                {
                    step === 1 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
                            <div className='flex-grow-[1.7] md:min-w-[50%] lg:min-w-[60%] gap-y-10 flex flex-col'>
                                <div className='border-black border-[1px] rounded-md px-8 py-4'>
                                    <form className="mt-5 flex w-full flex-col gap-[20px] pb-12">
                                        <div className='relative w-full my-7 flex flex-col gap-y-12'>
                                            <h2 className='font-semibold text-2xl'>Contact information</h2>
                                            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">First name</label>
                                                    <input placeholder="Your first name" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">Surname</label>
                                                    <input placeholder="Your surname" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>

                                            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">First name</label>
                                                    <input placeholder="Your first name" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">Surname</label>
                                                    <input placeholder="Your surname" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Phone number</label>
                                                    <input placeholder="Your phone number" type="phone" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex justify-between">
                                            <div className='flex gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Remember me</span>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                                <div className='border-black border-[1px] rounded-md px-8 py-4'>
                                    <form className="mt-5 flex w-full flex-col gap-[20px] pb-12">
                                        <div className='relative w-full my-7 flex flex-col gap-y-12'>
                                            <h2 className='font-semibold text-2xl'>Shipping Address</h2>
                                            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">First name</label>
                                                    <input placeholder="Your first name" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">Surname</label>
                                                    <input placeholder="Your surname" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>

                                            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">First name</label>
                                                    <input placeholder="Your first name" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">Surname</label>
                                                    <input placeholder="Your surname" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Phone number</label>
                                                    <input placeholder="Your phone number" type="phone" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex justify-between">
                                            <div className='flex gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Remember me</span>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                                <div>

                                </div>
                            </div>
                            <div className='border-[1px] border-black h-fit rounded-md px-4 py-5 flex flex-col gap-y-5 md:min-w-[39%] lg:min-w-[30%]'>
                                <h2 className='font-semibold text-2xl'>Order summary</h2>
                                {
                                    [...Array(3)].map((_x, i) => (
                                        <div key={i} className='flex items-between'>
                                            <div>
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
                                            </div>
                                            <td className="whitespace-nowrap pl-8 py-4 text-xl table-cell text-center">
                                                <span className='text-right'>$19.00</span> <br />
                                                <span className='mt-5 block text-3xl'>&times;</span>
                                            </td>
                                        </div>
                                    ))
                                }

                                <div className='flex gap-x-3 w-full items-between justify-between'>
                                    <input placeholder='coupon code' type="text" className='py-2 border-[1px] rounded-md pl-2 w-[60%]' />
                                    <button className='bg-black text-white w-[35%] rounded-md py-2'>Apply</button>
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
                        </motion.div>
                    )
                }
                {
                    step === 2 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.35, ease: 'anticipate', }}
                            className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
                            <OrderComplete />
                        </motion.div>
                    )
                }

            </div>
        </main>
    )
}

export default Cart