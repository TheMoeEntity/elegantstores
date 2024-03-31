import React from 'react'

const Cart = () => {
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <h1 className='text-center py-20 text-4xl font-semibold'>Cart</h1>
            <div className='mx-auto w-[60%] flex justify-center'>
                <div>
                    <div className='border-[#DEE1E6] pb-0.3 mb-[32px] w-full'>
                        <button className={`mr-7 text-left px-5 ${true ? 'border-b-[2px] border-black pb-2' : 'text-[#0D141F99]'}  `}>Shopping cart</button>
                        <button className={`mr-7 px-5 ${false ? 'border-b-[2px] border-black pb-2' : 'text-[#0D141F99]'} `}>Questions</button>
                        <button className={` px-5 ${false ? 'border-b-[2px] border-black pb-2' : 'text-[#0D141F99]'} `}>Reviews</button>
                    </div>
                </div>

            </div>
            {/* <Dashboard /> */}
        </main>
    )
}

export default Cart