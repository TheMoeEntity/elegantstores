'use state'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Profile from '../Cards/Profile'
import CartModal from '../Cards/Cart'

const Header = () => {
    const { push } = useRouter()
    const [isOpen, setOpen] = useState<boolean>(false)
    const [product, setProduct] = useState<boolean>(false)
    const [company, setCompany] = useState<boolean>(false)
    const [sales, setSales] = useState<boolean>(true)
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const [profileOpen, setProfileOpen] = useState(false);
    return (
        <header className='flex flex-col relative'>
            <CartModal
                forceClose={() => setCartOpen(false)}
                closeCart={() => setCartOpen(false)}
                cartOpen={cartOpen}
            />
            <Profile
                forceClose={() => setProfileOpen(false)}
                profileOpen={profileOpen}
            />
            <div className={`md:hidden shadow-2xl w-[80%] h-full fixed duration-500 ease z-[99999999999] bg-white top-0 ${isOpen == !true ? 'left-[-100%]' : 'left-0'} no-scrollbar`}>
                <div className="w-full flex-col flex justify-between top-[10px] left-[10px] px-5 py-5 items-center text-4xl text-[#171D28] gap-8">
                    <div className='flex justify-between items-center w-full'>
                        <Link href={'/'} className='text-2xl font-extrabold'>3Legant.</Link>
                        <button onClick={() => setOpen(!isOpen)} >
                            &times;
                        </button>
                    </div>

                    <input type="search" name="" id="" className='w-full text-xl outline-none rounded-xl border-[1px] px-3 py-2' placeholder='Search' />

                </div>

                <div className='mt-5 flex flex-col h-full'>

                    <div className='flex flex-col gap-9 mx-auto px-9 mb-10 w-full'>
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

                    <div className='flex flex-col gap-9 mx-auto px-7 mt-10 w-full'>
                        <div className='flex justify-between items-center'>
                            <button>
                                Cart
                            </button>

                            <div className='flex gap-3 flex-row items-center'>
                                <button
                                    onClick={() =>
                                        profileOpen ? setCartOpen(false) : setCartOpen(!cartOpen)
                                    }
                                    className='fa-solid fa-shopping-bag text-xl md:text-xl'></button>
                                <b className='font-extrabold h-5 w-5 flex flex-col items-center justify-center rounded-full bg-black text-white text-xs'>0</b>
                            </div>

                        </div>
                        <div className='flex justify-between items-center'>
                            <button>
                                Wishlist
                            </button>

                            <div className='flex gap-3 flex-row items-center'>
                                <button
                                    onClick={() =>
                                        profileOpen ? setCartOpen(false) : setCartOpen(!cartOpen)
                                    }
                                    className='fa-solid fa-heart text-xl md:text-xl'></button>
                                <b className='font-extrabold h-5 w-5 flex flex-col items-center justify-center rounded-full bg-black text-white text-xs'>0</b>
                            </div>

                        </div>
                        <div className='flex justify-between items-center'>
                            <button>
                                Profile
                            </button>

                            <div className='flex gap-3 flex-row items-center'>
                                <button
                                    onClick={() =>
                                        profileOpen ? setCartOpen(false) : setCartOpen(!cartOpen)
                                    }
                                    className='fa-solid fa-user text-xl md:text-xl'></button>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
            <div className={`transition-all ease-in duration-1000 w-full bg-[#377DFF]  text-white gap-x-4 flex overflow-hidden justify-center items-center px-4 ${sales === true ? 'overflow-auto max-h-fit py-3' : 'max-h-0'} sales`}>
                <span>30% off storewide - limited time!</span>
                <button onClick={() => setSales(false)} className='text-2xl'>&times;</button>
            </div>
            <div className='bg-[#fafafa] flex justify-between lg:justify-around px-7 py-5 shadow-md'>
                <div className='flex gap-4 items-center'>
                    <button className='md:hidden' onClick={() => setOpen(true)}>
                        <i className='fa-solid fa-bars text-2xl block '></i>
                    </button>
                    <Link href={'/'} className='text-2xl font-extrabold'>3Legant.</Link>
                </div>
                <div className='md:flex lg:flex gap-8 hidden items-center'>
                    <button onClick={() => push('/')}>Home</button>
                    <div className='relative group'>
                        <button onClick={() => push('/shop')}>
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
                <div className='flex gap-3 flex-row items-center'>
                    <div className='flex gap-4'>
                        <button className='fa-solid fa-magnifying-glass text-xl md:text-xl'></button>
                        <button onClick={() =>
                            cartOpen ? setProfileOpen(false) : setProfileOpen(!profileOpen)
                        } className='fa-solid fa-user text-xl md:text-xl'></button>
                    </div>
                    <button
                        onClick={() =>
                            profileOpen ? setCartOpen(false) : setCartOpen(!cartOpen)
                        }
                        className='fa-solid fa-shopping-bag text-xl md:text-xl'></button>
                    <b className='font-extrabold h-5 w-5 flex flex-col items-center justify-center rounded-full bg-black text-white text-xs'>0</b>
                </div>
            </div>
        </header>
    )
}

export default Header