import React from 'react'
import Best from '../Cards/Best'
import { productType } from '@/src/Helpers/types'

const Best_Sellers = ({ products }: { products: productType[] }) => {
    return (
        <div className='px-5 py-12 flex flex-col gap-10 w-full h-fit md:w-[100%] mx-auto'>
            <div>
                <h2 className='text-4xl font-[500] text-center leading-tight'>Best Sellers</h2>
            </div>
            <div className="flex flex-row md:flex-row gap-5 justify-center flex-wrap mb-7">
                {
                    (products).slice(0, 8).map((x) => (
                        <Best img={x.image} key={x.id} title={x.title} price={x.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default Best_Sellers