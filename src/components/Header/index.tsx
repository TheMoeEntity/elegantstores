import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const { push } = useRouter()
    return (
        <header className='flex flex-col'>
            <div className='w-full bg-[#377DFF] py-3 text-white gap-4 flex justify-center items-center px-4'>
                <span>30% off storewide - limited time!</span>
                <span className='text-2xl'>&times;</span>
            </div>
            <div className='bg-[#fafafa] flex justify-between lg:justify-around px-7 py-5'>
                <div className='flex gap-4 items-center'>
                    <div className='md:hidden'>
                        <i className='fa-solid fa-bars text-2xl block '></i>
                    </div>
                    <b className='font-extrabold'>3legant.</b>
                </div>
                <div className='md:flex lg:flex gap-8 hidden'>
                    <button onClick={() => push('/#services')}>Services</button>
                    <div className='relative group'>
                        <button>
                            Our Products <i className='group-hover:rotate-180 transition duration-200 fa-solid fa-angle-down ml-2'></i>
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
                            Company <i className='transition duration-200 group-hover:rotate-180 rotate-0 fa-solid fa-angle-down ml-2'></i>
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
                </div>
                <div className='flex gap-4 flex-row items-center'>
                    <div className='md:flex hidden gap-4'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <i className='fa-solid fa-user'></i>
                    </div>
                    <i className='fa-solid fa-shopping-bag text-2xl'></i>
                    <b className='font-extrabold h-6 w-6 flex flex-col items-center justify-center rounded-full bg-black text-white text-sm'>2</b>
                </div>
            </div>
        </header>
    )
}

export default Header