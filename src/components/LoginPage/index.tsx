import Image from 'next/image'
import React from 'react'
import winterman from '../../../public/images/hero2.png'
import Link from 'next/link'


const LoginPage = () => {
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
                    <h1 className='text-4xl text-black md:text-[52px] w-full leading-tight'>Sign in</h1>
                    <div className='leading-loose '>
                        Don't have an account yet <Link href={'/signup'} className='text-[#377DFF]'>Sign up</Link>
                    </div>
                    <form className="mt-5 flex md:w-[90%] flex-col gap-[20px] pb-12">
                        <div className="">
                            <label htmlFor="" className=" block font-bold mb-2">Email</label>
                            <input placeholder="Your email address" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                        </div>
                        <div className="">
                            <label htmlFor="" className=" block font-bold mb-2">Password</label>
                            <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full border-gray-300 border-b-[1px]" />
                        </div>
                        <div className="flex justify-between">
                            <div className='flex gap-2'>
                                <input type="checkbox" name="" id="" />
                                <span>Remember me</span>
                            </div>
                            <Link href={'/forgot'}>
                                <button type="button" className="text-black">Forgot password?</button>
                            </Link>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-[#171D28] text-white rounded-md w-full h-[54px]">Log in</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage