import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-col'>
            <div className='w-full bg-[#377DFF] py-3 text-white gap-4 flex justify-center items-center px-4'>
                <span>30% off storewide - limited time!</span>
                <span className='text-2xl'>&times;</span>
            </div>
            <div className='bg-[#fafafa] flex justify-between px-7 py-5'>
                <div className='flex gap-4 items-center'>
                    <i className='fa-solid fa-bars text-2xl'></i>
                    <b className='font-extrabold'>3legant.</b>
                </div>
                <div className='flex gap-4 items-center'>
                    <i className='fa-solid fa-shopping-bag text-2xl'></i>
                    <b className='font-extrabold h-5 w-5 flex flex-col items-center justify-center rounded-full bg-black text-white text-sm'>2</b>
                </div>
            </div>
        </header>
    )
}

export default Header