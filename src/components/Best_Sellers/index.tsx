import React from 'react'
import Best from '../Cards/Best'

const Best_Sellers = () => {
    return (
        <div className='px-5 py-12 flex flex-col gap-10 w-full h-fit md:w-[100%] mx-auto'>
            <div>
                <h2 className='text-4xl font-[500] text-center leading-tight'>Best Sellers</h2>
            </div>
            <div className="flex flex-row md:flex-row gap-5 justify-center flex-wrap">
                {
                    [...Array(8)].map((_x, i) => (
                        <Best key={i} title='Some random good shit' price={220} />
                    ))
                }
            </div>
        </div>
    )
}

export default Best_Sellers