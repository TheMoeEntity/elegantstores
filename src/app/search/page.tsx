import React from 'react'

const Search = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <div className='w-[90%] mx-auto py-10'>
                <div className="text-gray-500 flex gap-x-3 items-center my-7 mx-auto w-[95%]">
                    <span>Home</span><span className='fa-angle-right fa'></span><span className='text-[#377DFF]'>Search results</span>
                </div>
                <div className='text-xl mx-auto my-7 w-[90%] flex justify-between '>
                    <div className='text-xl font-semibold'>
                        Shop
                    </div>
                    <div>
                        Sort by
                        <i className='fa-solid fa-angle-down ml-3'></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Search