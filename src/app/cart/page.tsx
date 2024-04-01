import React from 'react'

const Cart = () => {
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <h1 className='text-center py-20 text-4xl font-semibold'>Cart</h1>
            <div className='mx-auto w-[60%] flex justify-center'>
                <div>
                    <div className='border-[#DEE1E6] pb-0.3 mb-[32px] w-full flex '>
                        <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${true ? ' border-black ' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                            <span className='w-6 h-6 bg-black text-white items-center justify-center flex rounded-full'>1</span>
                            <button>Shopping cart</button>
                        </div>

                        <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${false ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                            <span className={`w-6 h-6 text-white ${false ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full`}>2</span>
                            <button>Checkout details</button>
                        </div>
                        <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${false ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                            <span className={`w-6 h-6 text-white ${false ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full`}>3</span>
                            <button>Order complete</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-[90%] mx-auto">
                
                <div>

                </div>

            </div>
        </main>
    )
}

export default Cart