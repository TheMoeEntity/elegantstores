'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import winterman from '../../../public/images/hero2.png'
import Link from 'next/link'
import { Helpers } from '@/src/Helpers'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';


const SignupPage = () => {
    const { enqueueSnackbar } = useSnackbar()
    const {push} = useRouter()
    const [status, setStatus] = useState<string>("Sign up")
    return (
        <section className='w-full h-auto flex flex-col md:flex-row'>
            <Image
                src={winterman}
                alt="winterman"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full md:w-[50%]  md:flex-[50%] h-auto"
            />
            <div className="bg-[#ffff] md:w-[50%]  md:flex-[50%] text-gray-700 px-6 py-12 md:px-12 flex flex-row items-center">
                <div className='flex flex-col gap-5 w-full'>
                    <h1 className='text-4xl text-black md:text-[52px] w-full leading-tight'>Create Account</h1>
                    <div className='leading-loose '>
                        Already have an account? <Link href={'/login'} className='text-[#377DFF]'>Login</Link>
                    </div>
                    <form onSubmit={e => Helpers.validateSignUpForm(e, setStatus, toast, push)} className="mt-5 flex md:w-[90%] flex-col gap-[20px] pb-12">
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
                            <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full border-gray-300 border-b-[1px]" />
                        </div>
                        <div className="">
                            <label htmlFor="" className=" block font-bold mb-2">Confirm Password</label>
                            <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full border-gray-300 border-b-[1px]" />
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
                            <button className="bg-[#171D28] text-center text-white rounded-md w-full h-[54px]">
                                {
                                    status === "Sign up" ? status :
                                        (
                                            <span className='flex items-center justify-center'>
                                                <svg aria-hidden className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                                <span className="ml-4 sr-ony">{status}</span>
                                            </span>
                                        )
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignupPage