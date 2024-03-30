'use state'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Header = () => {
    const { push } = useRouter()
    const [isOpen, setOpen] = useState<boolean>(false)
    const [product, setProduct] = useState<boolean>(false)
    const [company, setCompany] = useState<boolean>(false)
    return (
        <header className='flex flex-col'>
            <div className={`md:hidden shadow-2xl w-[70%] h-full fixed duration-500 ease z-[99999999999] bg-white top-0 ${isOpen == !true ? 'left-[-100%]' : 'left-0'}`}>
                <button onClick={() => setOpen(!isOpen)} className="absolute top-[10px] left-[10px] w-[40px] h-[40px] flex items-center justify-center text-4xl text-[#171D28]" >
                    &times;
                </button>
                <div className='mt-20  flex flex-col gap-9 mx-auto px-9'>
                    <div className='flex flex-col gap-4' >
                        <button onClick={() => push('/login')} className='px-12 py-2 border rounded-[8px] text-[#171D28] border-[#171D28]'>Login</button>
                        <button onClick={() => push('/signup')} className='px-6 py-2 rounded-[8px] bg-[#377DFF] text-white'>Create account</button>
                    </div>
                    <div>
                        <button onClick={() => push('/')}>Home</button>
                    </div>
                    <div>
                        <button onClick={() => setProduct(!product)}>
                            Shop <i className={`transition duration-200 fa-solid fa-angle-down ml-2 text-xs ${product === true ? `rotate-180` : `rotate-0`}`}></i>
                        </button>
                        <div style={{ transition: '0.5s ease' }} className={`px-3 flex transition duration-200 overflow-hidden flex-col gap-7 ${product === true ? `overflow-auto py-6 max-h-fit` : `max-h-0`}`}>
                            <div className='border-b-[1px] pb-2 border-[#fafafa]'>
                                <Link href='/products/smartx'>Smart X</Link>
                            </div>
                            <div className='border-b-[1px] pb-2 border-[#fafafa]'>
                                <Link href='/products/trackr360'>Trackr 360</Link>
                            </div>
                        </div>

                    </div>

                    <div>
                        <button onClick={() => setCompany(!company)}>
                            Product <i className={`transition duration-200 fa-solid fa-angle-down ml-2 text-xs ${company === true ? `rotate-180` : `rotate-0`}`}></i>
                        </button>
                        <div style={{ transition: '0.5s ease' }} className={`px-3 transition duration-500 flex overflow-hidden flex-col gap-7 ${company === true ? `overflow-auto py-6 max-h-fit` : `max-h-0`}`}>
                            <div className='border-b-[1px] pb-2 border-[#fafafa]'>
                                <Link href='/about'>About us</Link>
                            </div>
                            <div className='border-b-[1px] pb-2 border-[#fafafa]'>
                                <Link href='/careers'>Careers</Link>
                            </div>
                            <div className='border-b-[1px] pb-2 border-[#fafafa]'>
                                <Link href='/contact'>Contact us</Link>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button onClick={() => push('/contact')}>Contact us</button>
                    </div>

                </div>

            </div>
            <div className='w-full bg-[#377DFF] py-3 text-white gap-4 flex justify-center items-center px-4'>
                <span>30% off storewide - limited time!</span>
                <span className='text-2xl'>&times;</span>
            </div>
            <div className='bg-[#fafafa] flex justify-between lg:justify-around px-7 py-5'>
                <div className='flex gap-4 items-center'>
                    <button className='md:hidden' onClick={() => setOpen(true)}>
                        <i className='fa-solid fa-bars text-2xl block '></i>
                    </button>
                    <b className='font-extrabold'>3legant.</b>
                </div>
                <div className='md:flex lg:flex gap-8 hidden'>
                    <button onClick={() => push('/')}>Home</button>
                    <div className='relative group'>
                        <button>
                            Shop <i className='group-hover:rotate-180 transition duration-200 fa-solid fa-angle-down ml-2'></i>
                        </button>
                        <div
                            className="invisible absolute -translate-x-5 z-[999999999] flex w-auto flex-col bg-white py-1 px-10 text-gray-800 shadow-xl group-hover:visible">

                            <Link href={'/products/smartx'} className="my-2 block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                Smart X
                            </Link>

                            <Link href={'/products/trackr360'} className="my-2 whitespace-nowrap overflow-hidden block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                Trackr 360
                            </Link>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button>
                            Product <i className='transition duration-200 group-hover:rotate-180 rotate-0 fa-solid fa-angle-down ml-2'></i>
                        </button>
                        <div
                            className="invisible absolute -translate-x-5  z-[999999999] flex w-auto flex-col bg-white py-1 px-10 text-gray-800 shadow-xl group-hover:visible whitespace-nowrap overflow-hidden ">

                            <Link href={'/about'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                About us
                            </Link>

                            <Link href={'/careers'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                Careers
                            </Link>
                            <Link href={'/contact'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                Contact us
                            </Link>
                        </div>
                    </div>
                    <button onClick={() => push('/contact')}>Contact us</button>
                </div>
                <div className='flex gap-4 flex-row items-center'>
                    <div className='md:flex hidden gap-4'>
                        <i className='fa-solid fa-magnifying-glass text-2xl'></i>
                        <i className='fa-solid fa-user text-2xl'></i>
                    </div>
                    <i className='fa-solid fa-shopping-bag text-2xl'></i>
                    <b className='font-extrabold h-6 w-6 flex flex-col items-center justify-center rounded-full bg-black text-white text-sm'>2</b>
                </div>
            </div>
        </header>
    )
}

export default Header