import React from 'react'

const Loading = () => {
    return (
        <div role="status" className="animate-pulse px-10 flex flex-col">
            <div className="w-full px-10 py-10">
                <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-5 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                <div className="h-5 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className="flex px-10 mt-10 items-center gap-8 justify-between w-full h-96 bg-gray-300 rounded sm:w-96">
                    <div className='bg-gray-200 w-[70px]'>
                    </div>
                    <div className='bg-gray-200 w-[50%]'>
                    </div>
                </div>

                <div className="w-full px-10 py-10">
                    <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[360px] mb-40"></div>

                    <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading