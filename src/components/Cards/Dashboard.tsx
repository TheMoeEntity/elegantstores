'use client'
import stool from '../../../public/images/showcase.png'
import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"
import { useEffect, useState } from "react"
import { UserMetadata } from '@supabase/supabase-js'
import avatar from '../../../public/images/avatar.png'
import { userContext } from '@/src/Helpers/ContextAPI/usercontext'
import { useContext } from 'react'
import { useSearchParams } from 'next/navigation'

const Dashboard = ({ getSession }: { getSession: UserMetadata | null }) => {
    const searchParams = useSearchParams()
    const [step, setStep] = useState(0)
    const [quantity, setQuantity] = useState<number>(1)
    const link = searchParams.get('link')
    useEffect(() => {
        switch (link) {
            case 'wishlist':
                setStep(3)
                break;

            case 'order':
                setStep(2)
                break;
            default:
                setStep(0)
        }
    }, [])
    return (
        <div className='flex my-8 flex-row gap-3 gap-x-7 md:gap-x-3 lg:gap-x-7 flex-wrap mx-auto w-[90%] md:w-[97%] lg:w-[85%]'>
            <div className='flex basis-[100%] md:basis-[30%] px-5 py-10 h-auto gap-y-9 flex-col bg-[#F3F5F7]'>
                <div className='text-xl'>
                    <button onClick={() => setStep(0)} className='text-2xl font-semibold'>ACCOUNT</button>
                </div>
                <div className="w-24 h-24 relative text-white flex justify-center items-center">
                    <Image
                        src={avatar}
                        alt="avatar"
                        quality={100}
                        sizes={'100vw'}
                        className="object-cover rounded-full w-full h-auto"
                    />
                    <button className="absolute flex justify-center items-center z-[9999] bg-[#FAFAFA] rounded-full w-10 h-10 -right-1 bottom-0">
                        <div className="bg-black w-9 h-9 rounded-full flex justify-center items-center">
                            <i className='fa-solid fa-camera'></i>
                        </div>
                    </button>
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-5 flex-col flex'>
                        <li className='text-black underline'>Account details</li>
                        <li>Update Password</li>
                        <li>Save changes</li>
                    </ul>
                </div>
                <div className='text-xl'>
                    <button onClick={() => setStep(1)} className='text-2xl font-semibold'>ADDRESS</button>
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-4 flex-col flex'>
                        <li className='w-full flex justify-between items-center'>
                            <span>Change Address</span>
                        </li>
                        <li className='w-full flex justify-between items-center'>
                            <span>Save Address</span>
                        </li>
                    </ul>
                </div>
                <div className='text-xl'>
                    <button onClick={() => setStep(2)} className='text-2xl font-semibold'>ORDER</button >
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-4 flex-col flex'>
                        <li className='w-full flex justify-between items-center'>
                            <span>Order history</span>
                        </li>
                        <li className='w-full flex justify-between items-center'>
                            <span>Save Address</span>
                        </li>
                    </ul>
                </div>
                <div className='text-xl'>
                    <button onClick={() => setStep(3)} className='text-2xl font-semibold'>WISHLIST</button>
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-4 flex-col flex'>
                        <li className='w-full flex justify-between items-center'>
                            <span>Edit wishlist</span>
                        </li>
                        <li className='w-full flex justify-between items-center'>
                            <span>Save changes</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:basis-[65%] max-w-[100%] md:max-w-[65%] flex-grow-[1.5] basis-[100%] py-7'>
                {
                    step === 0 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className="px-7 ">
                            <h2 className="font-bold text-xl">Account details:</h2>
                            <form className="mt-5 flex md:w-[90%] flex-col gap-[20px] pr-5 pb-12">
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Your Name</label>
                                    <input placeholder="Enter full name" defaultValue={getSession?.fullName} type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Username</label>
                                    <input placeholder="Username" defaultValue={getSession?.userName} type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Email</label>
                                    <input placeholder="Your email address" type="email" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Password</label>
                                    <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full bg-transparent border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">New password</label>
                                    <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full bg-transparent border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Confirm new password</label>
                                    <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full bg-transparent border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="flex flex-col gap-y-8 lg:flex-row justify-between">
                                    <div className='flex gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span>Remember me</span>
                                    </div>
                                    <Link href={'/forgot'}>
                                        <button type="button" className="text-black">Forgot password?</button>
                                    </Link>
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-[#171D28] text-white rounded-md w-full h-[54px]">Save changes</button>
                                </div>

                            </form>
                        </motion.div>
                    )
                }
                {
                    step === 1 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className="px-7 ">
                            <h2 className="text-2xl font-semibold mb-7">Address</h2>
                            <div className="flex flex-col gap-5  md:flex-row">
                                <div className="min-w-[46%] border-[1px] border-black justify-start items-start rounded-md px-4 py-4 flex flex-between">
                                    <div className="flex flex-col gap-y-4">
                                        <strong className="text-xl font-semibold">Billing address</strong>
                                        <span>Sofia Havertz</span>
                                        <span>(+234) 807 548 9362</span>
                                        <span>no 27 alo street, abakaliki</span>
                                    </div>
                                    <button className="text-gray-400">
                                        <i className="fas fa-edit mr-2"></i>
                                        Edit
                                    </button>
                                </div>
                                <div className="min-w-[46%] border-[1px] border-black justify-start items-start rounded-md px-4 py-4 flex flex-between">
                                    <div className="flex flex-col gap-y-4">
                                        <strong className="text-xl font-semibold">Shipping address</strong>
                                        <span>Sofia Havertz</span>
                                        <span>(+234) 807 548 9362</span>
                                        <span>no 27 alo street, abakaliki</span>
                                    </div>
                                    <button className="text-gray-400">
                                        <i className="fas fa-edit mr-2"></i>
                                        Edit
                                    </button>
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
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className="w-full overflow-x-scroll max-w-full">
                            <h2 className="text-2xl font-semibold mb-7">Orders history</h2>
                            <div className="flex flex-col w-full overflow-x-scroll h-[300px]">

                                <table
                                    className="min-w-full text-left overflow-x-scroll text-sm   max-w-full font-light text-surface">
                                    <thead
                                        className="border-b border-neutral-200 font-medium ">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">NUMBER ID</th>
                                            <th scope="col" className="px-6 py-4">Dates</th>
                                            <th scope="col" className="px-6 py-4">Status</th>
                                            <th scope="col" className="px-6 py-4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">#3456_78w4dkpew</td>
                                            <td className="whitespace-nowrap px-6 py-4">October 23, 2024</td>
                                            <td className="whitespace-nowrap px-6 py-4">Delivered</td>
                                            <td className="whitespace-nowrap px-6 py-4">$123.45</td>
                                        </tr>
                                        <tr
                                            className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">#3456_78w4dkpew</td>
                                            <td className="whitespace-nowrap px-6 py-4">October 23, 2024</td>
                                            <td className="whitespace-nowrap px-6 py-4">Delivered</td>
                                            <td className="whitespace-nowrap px-6 py-4">$123.45</td>
                                        </tr>
                                        <tr
                                            className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">#3456_78w4dkpew</td>
                                            <td className="whitespace-nowrap px-6 py-4">October 23, 2024</td>
                                            <td className="whitespace-nowrap px-6 py-4">Delivered</td>
                                            <td className="whitespace-nowrap px-6 py-4">$123.45</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </motion.div>

                    )
                }
                {
                    step === 3 && (
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
                                                            <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Action</th>
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
                                                                <div className='flex items-center gap-x-4 border-[1px] justify-between shadow-md w-[120px]'>
                                                                    <button className='w-full bg-black text-white rounded-lg text-sm px-2 py-2'>Add to cart</button>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">$1332.00</td>
                                                            <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">$0</td>
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
                                                                <div className='flex items-center gap-x-4 border-[1px] justify-between shadow-md w-[120px]'>
                                                                    <button className='w-full bg-black text-white rounded-lg text-sm px-2 py-2'>Add to cart</button>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">$1332.00</td>
                                                            <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">$0</td>
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
                                                                <div className='flex items-center gap-x-4 border-[1px] justify-between shadow-md w-[120px]'>
                                                                    <button className='w-full bg-black text-white rounded-lg text-sm px-2 py-2'>Add to cart</button>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">$1332.00</td>
                                                            <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">$0</td>
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
                        </motion.div>

                    )
                }

            </div>
        </div>
    )
}

export default Dashboard