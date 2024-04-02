'use client'

import Link from "next/link"
import { useState } from "react"

const Dashboard = () => {
    const [step, setStep] = useState(0)
    return (
        <div className='flex my-8  flex-row gap-3 gap-x-7 md:gap-x-3 lg:gap-x-7 flex-wrap mx-auto w-[90%] md:w-[97%] lg:w-[85%]'>
            <div className='flex basis-[100%] md:basis-[30%] px-5 py-10 h-auto gap-y-9 flex-col bg-[#F3F5F7]'>
                <div className='text-xl'>
                    <button onClick={() => setStep(0)} className='text-2xl font-semibold'>ACCOUNT</button>
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
                    <h2 className='text-2xl font-semibold'>WISHLIST</h2>
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
                        <div className="px-7 ">
                            <h2 className="font-bold text-xl">Account details:</h2>
                            <form className="mt-5 flex md:w-[90%] flex-col gap-[20px] pr-5 pb-12">
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Your Name</label>
                                    <input placeholder="Enter full name" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Username</label>
                                    <input placeholder="Username" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
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
                        </div>
                    )
                }
                {
                    step === 1 && (
                        <div className="px-7 ">
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
                        </div>
                    )
                }
                {
                    step === 2 && (
                        <div className="w-full overflow-x-scroll max-w-full">
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
                        </div>

                    )
                }

            </div>
        </div>
    )
}

export default Dashboard