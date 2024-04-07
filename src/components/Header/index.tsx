'use state'
import Link from 'next/link'
import Profile from '../Cards/Profile'
import CartModal from '../Cards/Cart'
import Sidebar from '../Cards/Sidebar'
import { useHeaderState } from '@/src/Helpers/Hooks'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { userContext } from '@/src/Helpers/ContextAPI/usercontext'
import { UserMetadata } from '@supabase/supabase-js'
import { useStore } from '@/src/Helpers/zustand'

const Header = ({ getSession }: { getSession: UserMetadata | null }) => {
    const { setUser } = useContext(userContext)
    const {cartCount} = useStore()
    useEffect(() => {
        if (getSession) {
            setUser({
                userData: getSession ?? {},
                isSignedIn: true
            })
        }

    }, [])
    const { isOpen, setOpen,
        product, setProduct,
        company, setCompany,
        sales, setSales,
        cartOpen, setCartOpen,
        profileOpen, setProfileOpen,
        push, search, setSearch
    } = useHeaderState()

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
            <Sidebar profileOpen={profileOpen} setProfileOpen={setProfileOpen} cartOpen={cartOpen} setCartOpen={setCartOpen} isOpen={isOpen} setOpen={setOpen} product={product} setProduct={setProduct} company={company} setCompany={setCompany} />

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


                {
                    search && (
                        <motion.div
                            initial={{ x: search ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className='w-fit flex items-center mx-auto'
                        >
                            <input placeholder='Enter keywords' type="search" className='text-sm min-w-[300px] h-full rounded-tl-full rounded-bl-full outline-none px-4 bg-transparent border-[1px] py-1' name="" id="" />
                            <button><i className='fa-solid fa-magnifying-glass bg-[#171D28] text-white px-5 py-[9px] rounded-tr-md rounded-br-md'></i></button>
                        </motion.div>
                    )
                }

                {
                    !search && (
                        <div className='z-[999999999]'>
                            <motion.div
                                initial={{ x: search ? '50%' : '-50%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.75, ease: 'anticipate' }}
                                className='md:flex lg:flex gap-8 hidden items-center'>
                                <button onClick={() => push('/')}>Home</button>
                                <div className='relative'>
                                    <button onClick={() => push('/shop')}>
                                        Shop
                                    </button>
                                </div>
                                <div className='relative group'>
                                    <button>
                                        Product <i className='transition duration-200 group-hover:rotate-180 rotate-0 fa-solid fa-angle-down ml-2'></i>
                                    </button>
                                    <div
                                        className="invisible absolute -translate-x-5  z-[999999999] flex w-auto flex-col bg-white py-1 px-10 text-gray-800 shadow-xl group-hover:visible whitespace-nowrap overflow-hidden ">

                                        <Link href={'/shop?category=shoes'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                            Shoes
                                        </Link>

                                        <Link href={'/shop?category=hoodies'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                            Hoodie
                                        </Link>
                                        <Link href={'/shop?category=jackets'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                            Jackets
                                        </Link>
                                        <Link href={'/shop?category=shirts'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                            Shirt
                                        </Link>
                                        <Link href={'/shop?category=pants'} className="my-2  block border-gray-100 py-1 text-gray-500 hover:text-[#ffd16a] md:mx-2">
                                            Pants
                                        </Link>
                                    </div>
                                </div>
                                <button onClick={() => push('/contact')}>Contact us</button>
                            </motion.div>
                        </div>
                    )
                }


                <div className='flex gap-3 flex-row items-center'>
                    <div className='flex gap-4'>
                        <div className='hidden md:flex items-center'>
                            <button onClick={() => setSearch(!search)} className={`fa-solid text-xl md:text-xl ${!search && 'fa-magnifying-glass'}`}>
                                {
                                    search && <span className='text-2xl'>&times;</span>
                                }
                            </button>
                        </div>
                        <button onClick={() =>
                            cartOpen ? setProfileOpen(false) : setProfileOpen(!profileOpen)
                        } className='fa-solid fa-user text-xl md:text-xl'></button>
                    </div>
                    <button
                        onClick={() =>
                            profileOpen ? setCartOpen(false) : setCartOpen(!cartOpen)
                        }
                        className='fa-solid fa-shopping-bag text-xl md:text-xl'></button>
                    <b className='font-extrabold h-5 w-5 flex flex-col items-center justify-center rounded-full bg-black text-white text-xs'>{cartCount}</b>
                </div>

            </div>
        </header>
    )
}

export default Header