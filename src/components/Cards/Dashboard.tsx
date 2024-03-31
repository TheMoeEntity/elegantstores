'use client'

import Link from "next/link"

const Dashboard = () => {
    return (
        <div className='flex my-8  flex-row gap-3 gap-x-7 md:gap-x-3 lg:gap-x-7 flex-wrap mx-auto w-[90%] md:w-[97%] lg:w-[85%]'>
            <div className='flex basis-[100%] md:basis-[26%] px-5 py-10 h-auto gap-y-9 flex-col bg-[#F3F5F7]'>
                <div className='text-xl'>
                    <h2 className='text-2xl font-semibold'>ACCOUNT</h2>
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-5 flex-col flex'>
                        <li className='text-black underline'>Account details</li>
                        <li>Update Password</li>
                        <li>Save changes</li>
                    </ul>
                </div>
                <div className='text-xl'>
                    <h2 className='text-2xl font-semibold'>ADDRESS</h2>
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
                    <h2 className='text-2xl font-semibold'>ORDER</h2>
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

            <div className='md:basis-[70%] basis-[100%]  px-7 py-7'>
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
        </div>
    )
}

export default Dashboard