'use client'
import Image from 'next/image'
import hero from '../../../public/images/furniture-2.jpeg'
import { ISBProducts, PriceRange } from '@/src/Helpers/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useStore } from '@/src/Helpers/zustand'
import { useSnackbar } from 'notistack'
import { Helpers } from '@/src/Helpers'
import { useSearchParams } from 'next/navigation'
import { useClientMediaQuery } from '@/src/Helpers/Hooks'

const ShopPage = ({ products }: { products: ISBProducts[] }) => {
    const { enqueueSnackbar } = useSnackbar()
    const [priceRanges, setPriceRanges] = useState([
        { min: 5000, max: 300000, isChecked: true, id: 7 },
        { min: 10000, max: 15000, isChecked: false, id: 1 },
        { min: 15000, max: 20000, isChecked: false, id: 6 },
        { min: 20000, max: 30000, isChecked: false, id: 2 },
        { min: 30000, max: 50000, isChecked: false, id: 3 },
        { min: 50000, max: 300000, isChecked: false, id: 4 },
    ])
    const isMD = useClientMediaQuery('(min-width: 768px)');
    useEffect(() => {
        if (isMD) {
            setHideSideBar(false)
        }
    }, [isMD])
    const searchParams = useSearchParams()
    const [active, setActive] = useState<string>("all")
    let category = searchParams.get('category')
    const [items, setItems] = useState<ISBProducts[]>([])
    const { addToCart } = useStore()
    const [hideSideBar, setHideSideBar] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const addAction = (item: ISBProducts, quantity: number = 1) => {
        addToCart(item, quantity)
        enqueueSnackbar({
            message: "Item has been added to cart",
            variant: 'success'
        })

    }
    useEffect(() => {
        if (category) {
            setLoading(true)
            setActive(category ?? "all")
            setTimeout(() => {
                setItems(searchAction(category ?? "all"))
            }, 2500);
        }
    }, [category])
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setItems(searchAction(active ?? "all"))
        }, 2500);
    }, [active])
    const categoryFilter = (categoryyyyyy: string) => {
        setActive(categoryyyyyy)
        setLoading(true)
        setTimeout(() => {
            setItems(searchAction(categoryyyyyy ?? "all"))
        }, 2500);
    }
    const priceFilterAction = () => {
        let filtered: any = items
        filtered = Helpers.filterProductsByPrice(products, selectedPriceRanges?.min, selectedPriceRanges.max).filter(item => active === 'all' ? item : item.category === active)
        setLoading(false)
        return filtered
    }
    const searchAction = (categoryy: string) => {
        let filtered: any = items
        filtered = Helpers.filterCategory(categoryy, products).filter(item => item.price >= selectedPriceRanges.min && item.price <= selectedPriceRanges.max)
        setLoading(false)
        return filtered
    }
    const [selectedPriceRanges, setSelectedPriceRanges] = useState<{ max: number, min: number }>({ min: 5000, max: 300000 });

    const handleCheckboxChange = (min: number, max: number, id: number) => {
        setSelectedPriceRanges({ min, max })
        setPriceRanges(state => {
            const newRange = state.map(range => range.id === id ? { ...range, isChecked: true } : { ...range, isChecked: false })
            return newRange
        })
        console.log(selectedPriceRanges)
    };
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setItems(priceFilterAction())
        }, 2500);
    }, [selectedPriceRanges])
    return (
        <section>
            <div className="hero w-full relative h-[300px] md:h-[500px]">
                <div className='absolute left-0 top-0 z-10 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center'></div>
                <Image
                    src={hero}
                    fill
                    alt="big hero image"
                    quality={100}
                    sizes={'100vw'}
                    priority
                    className="object-cover w-full h-full"
                />
                <div className='absolute text-center flex flex-col gap-y-10 z-20 text-white w-[90%] h-[70%] md:h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-center text-xl'> Home <i className='fa-solid fa-angle-right mx-3'></i> <b className='text-[#377DFF]'>Shop</b></h1>
                    <h1 className='text-center font-semibold text-3xl md:text-5xl underline underline-offset-8'>Shop Page</h1>
                    <p>{`Let’s`} design the place you always imagined.</p>
                </div>
            </div>

            <div className='flex my-8 flex-row gap-3 flex-wrap mx-auto w-[95%]'>
                <div className={(hideSideBar ? '-translate-x-[100%]' : 'translate-x-0') + ' trans shadow-2xl top-0 w-[250px] px-5 md:px-0 md:w-auto h-full flex pt-10 md:pt-0 overflow-y-scroll left-0 bg-[#F9FBFD] md:bg-transparent md:shadow-none z-[10000] fixed md:static md:flex basis-[23%] md:h-[800px] gap-y-9 flex-col'}>
                    <button onClick={() => setHideSideBar(true)} className='md:hidden text-4xl absolute top-5 right-5'>
                        &times;
                    </button>
                    <div className='text-xl'>
                        <i className='fas fa-list mr-3'></i>
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
                            {priceRanges.map((range, index) => index === 0 ? (
                                <label className='w-full md:text-sm lg:text-[18px] flex justify-between' key={index}>
                                    All Prices
                                    <input
                                        className='w-4 h-4'
                                        type="checkbox"
                                        checked={range.isChecked}
                                        onChange={() => handleCheckboxChange(range.min, range.max, range.id)}
                                    />
                                </label>
                            ) : (
                                <label className='w-full md:text-sm lg:text-[18px] flex justify-between' key={index}>
                                    {` ₦ ${range.min.toLocaleString()} - ₦ ${range.max.toLocaleString()}`}
                                    <input
                                        className='w-4 h-4'
                                        type="checkbox"
                                        checked={range.isChecked}
                                        onChange={() => handleCheckboxChange(range.min, range.max, range.id)}
                                    />
                                </label>
                            ))}
                        </form>
                    </div>
                </div>
                <div className='md:basis-[72%] basis-full'>
                    <div className='my-8 flex md:hidden justify-between border-b-[1px] border-t-[1px] border-gray-300 py-6 mx-auto w-[90%]'>
                        <div className='text-xl'>
                            <i className='fa-solid fa-list mr-3'></i>
                            <button onClick={() => setHideSideBar(false)}>
                                Filter
                            </button>
                        </div>

                        <div>

                        </div>
                    </div>

                    <div className='text-xl mx-auto my-7 w-[90%] flex justify-between '>
                        <div className='text-xl font-semibold'>
                            Shop
                        </div>
                        <div>
                            <select
                                className="custom-select text-sm outline-none w-full px-2 py-2 text-[black] font-semiold border-[1px] border-[#eef5ff]"
                            >
                                <option>--Sort By--</option>
                                <option>Newest</option>
                                <option>Older</option>
                            </select>
                        </div>
                    </div>
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
                                <div className="flex flex-row gap-2 gap-y-7 md:gap-y-5 md:gap-4 md:justify-center justify-start flex-wrap mb-7">
                                    {
                                        items.length === 0 ? (
                                            <div className='text-4xl text-center min-h-[400px] flex items-center justify-center font-semibold'>
                                                No items match this filter
                                            </div>) : (items).map((x) => (
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
                    {/* <div className='mx-auto w-fit mt-10'>
                        <button className='rounded-full border-[1px] border-black px-6 py-2 text-xl'>Load more</button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default ShopPage