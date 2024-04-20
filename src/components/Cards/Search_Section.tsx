'use client'
import { ISBProducts, fakeProductType } from '@/src/Helpers/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Helpers } from '@/src/Helpers'
import noimage from '../../../public/images/noimage.png'
import { useStore } from '@/src/Helpers/zustand'
import toast from 'react-hot-toast'

const Search_Section = ({ products, searchTerm }: { searchTerm: string, products: ISBProducts[] }) => {
    const [search, setSearch] = useState<boolean>(false)
    const [active, setActive] = useState<string>("all")
    const [currSearchTerm, setCurrSearch] = useState<string>(searchTerm)
    const [loading, setLoading] = useState<boolean>(false)
    const { addToCart } = useStore()
    const [items, setItems] = useState(products)
    const addAction = (item: ISBProducts, quantity: number = 1) => {
        addToCart(item, quantity)
        toast.success("Item has been added to cart")

    }
    useEffect(() => {

    }, [])
    useEffect(() => {
        if (searchTerm.trim() !== '') {
            const filteredResults = items.filter(
                result =>
                    result.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setItems(filteredResults);
        } else {
            setItems([]);
        }
    }, [searchTerm]);
    const categoryFilter = (category: string) => {
        setActive(category)
        setLoading(true)
        setTimeout(() => {
            setItems(searchAction(category ?? "all"))
        }, 2500);
    }
    const searchAction = (categoryy: string) => {
        let filtered: any = items
        filtered = Helpers.filterCategory(categoryy, products)
        setLoading(false)

        return filtered
    }
    return (
        <>
            <div className='md:px-5 py-0 md:py-12 flex flex-col gap-10 w-full h-fit md:w-[100%] mx-auto'>
                <div className='flex my-8 flex-row gap-3 flex-wrap mx-auto w-[95%]'>
                    <div className='hidden md:flex basis-[23%] h-[800px] gap-y-9 flex-col'>
                        <div className='text-xl'>
                            <i className='fa-solid fa-filter mr-3'></i>
                            Filter
                        </div>
                        <div className='text-xl'>
                            <h2 className='text-2xl font-semibold'>CATEGORIES</h2>
                        </div>
                        <div>
                            <ul className='text-gray-600 gap-y-5 flex-col flex w-fit'>
                                <button className={`w-fit ${active === 'all' && 'text-black underline'}`} onClick={() => categoryFilter(('all'))}>All Products</button>
                                <button className={`w-fit ${active === 'shoes' && 'text-black underline'}`} onClick={() => categoryFilter('shoes')}>Shoes</button>
                                <button className={`w-fit ${active === 'shirts' && 'text-black underline'}`} onClick={() => categoryFilter(('shirts'))}>Shirts</button>
                                <button className={`w-fit ${active === 'pants' && 'text-black underline'}`} onClick={() => categoryFilter(('pants'))}>Pants</button>
                                <button className={`w-fit ${active === 'jackets' && 'text-black underline'}`} onClick={() => categoryFilter(('jackets'))}>Jackets</button>
                                <button className={`w-fit ${active === 'hoodies' && 'text-black underline'}`} onClick={() => categoryFilter(('hoodies'))}>Hoodies</button>
                            </ul>
                        </div>
                        <div className='text-xl'>
                            <h2 className='text-2xl font-semibold'>PRICE</h2>
                        </div>
                        <div>
                            <form className='text-gray-600 gap-y-5 flex-col flex'>
                                <li className='w-full flex justify-between items-center'>
                                    <span>All Prices</span>
                                    <span>
                                        <input className='w-6 h-6' defaultChecked type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>₦5,000.00 - ₦10,000</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>₦10,000.00 - ₦15,000</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>₦15,000.00 - ₦20,000</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>₦20,000.00 - ₦30,000</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>₦30,000.00 - ₦50,000</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>₦30,000.00 and above</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                            </form>
                        </div>
                    </div>
                    <div className='md:basis-[72%]'>
                        <div className='my-8 flex md:hidden justify-between border-b-[1px] border-t-[1px] border-gray-300 py-6 mx-auto w-[90%]'>
                            <div className='text-xl'>
                                <i className='fas fa-list-alt mr-3'></i>
                                <button onClick={() => setSearch(true)}>
                                    Filter
                                </button>
                            </div>

                            <div>

                            </div>
                        </div>

                        <div className='md:px-5 py-12 flex flex-col gap-10 w-full h-fit md:w-[100%] mx-auto'>
                            <div className='md:px-5 py-12 max-w-full flex flex-col gap-10 w-full h-fit md:w-[100%] mx-auto'>
                                {
                                    loading ? (
                                        <div className="flex flex-row gap-2 gap-y-7 md:gap-y-5 md:gap-4 justify-center flex-wrap mb-7">
                                            {
                                                [...Array(4)].map((_x, i) => (
                                                    <div key={i} className='md:basis-[22%] basis-[43%] animate-pulse'>
                                                        <div className="flex items-center justify-center w-full h-48 md:h-[400px] bg-gray-200 rounded sm:w-full">
                                                            <svg className="w-10 h-10 md:h-[400px] text-gray-200" aria-hidden xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                        <div className="flex flex-row gap-2 gap-y-7 md:gap-y-5 md:gap-4 md:justify-start justify-start flex-wrap mb-7">
                                            {
                                                (items).map((x) => (
                                                    <div key={x.id} className='flex group overflow-y-hidden pb-4 md:min-h-auto shadow-md rounded-md flex-col gap-y-2 gap-x-0 h-fit md:min-w-[10%] basis-[47%] md:basis-[30%] lg:basis-[23%]'>
                                                        <div className='w-full mt-0 mb-3 relative max-h-[auto]'>
                                                            <Image
                                                                src={x.images[0]}
                                                                alt='Our product'
                                                                quality={100}
                                                                sizes='100vw'
                                                                width={200}
                                                                height={300}
                                                                className='object-cover'
                                                            />
                                                        </div>
                                                        <div className='px-3 flex gap-2 mt-1'>
                                                            {[...Array(x.rating)].map((_, i) => (
                                                                <span key={i} className={`fa fa-star`}></span>
                                                            ))}
                                                        </div>
                                                        <Link href={'/products/' + x.slug} className='font-semibold px-4 mt-1'>
                                                            <span className='hover:text-[#377DFF]'>
                                                                {x.title}
                                                            </span>
                                                        </Link>
                                                        <div className='px-3 font-semibold mt-1'>₦{x.price.toLocaleString()}</div>
                                                        <div className='w-[90%] mt-1 transition-transform duration-[0.55s] ease mx-auto group-hover:translate-y-0 translate-y-20'>
                                                            <button onClick={() => addAction(x)} className='w-full px-3 py-2 bg-black text-white rounded-lg'>Add to cart</button>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='mx-auto w-fit mt-10'>
                            <button className='rounded-full border-[1px] border-black px-6 py-2 text-xl'>Load more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Search_Section