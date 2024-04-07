
import { motion } from 'framer-motion'

const CategoryModal = ({ search, setSearch, active, categoryFilter }: { categoryFilter: (category:string) => void, search: boolean, active: string, setSearch: () => void }) => {
    return (
        <section className={`pt-20 md:hidden  w-[100%] h-full shadow-2xl fixed duration-500 ease-in z-[99999999999] bg-[rgba(0,0,0,0.6)] left-0 ${search == !true ? 'bottom-[-100%]' : 'bottom-0'} no-scrollbar`}>
            <motion.div
                initial={{ y: search ? '50%' : '-50%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: 'anticipate' }}
                className='w-fit h-full bg-[#FFFFFF] mx-auto rounded-tl-full rounded-tr-full'
            >
                <div className='bg-white  overflow-y-scroll shadow-2xl w-[95vw] mx-auto h-full min-w-[95vw] rounded-tl-2xl rounded-tr-2xl'>
                    <div className="w-[95vw] h-fit py-7 min-w-[95vw] bg-[#F9F9F9] flex justify-between items-center px-4 rounded-tl-[48px] rounded-tr-[48px]">
                        <button onClick={() => setSearch()} className='text-4xl'>
                            &times;
                        </button>
                        <button className='text-xl font-extrabold'>
                            Apply Filter
                        </button>
                    </div>
                    <div className='md:flex basis-[23%] h-[800px] gap-y-9 flex-col px-7 pt-3'>
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
                        <div className='text-xl mt-8'>
                            <h2 className='text-2xl font-semibold'>PRICE</h2>
                        </div>
                        <div>
                            <ul className='text-gray-600 gap-y-5 flex-col flex'>
                                <li className='w-full flex justify-between items-center'>
                                    <span>All Prices</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>$100.00 - 199.99</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>$200.00 - 299.99</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>$300.00 - 399.99</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                                    </span>
                                </li>
                                <li className='w-full flex justify-between items-center'>
                                    <span>$400.00+</span>
                                    <span>
                                        <input className='w-6 h-6' type="checkbox" defaultChecked name="" id="" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default CategoryModal