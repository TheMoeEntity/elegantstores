import React from 'react'

const Loading = () => {
    return (
        <div role="status" className="animate-pulse px-2 md:px-10 flex gap-y-5 flex-col">
            <div className="flex items-center justify-center w-full h-48 md:h-[500px] bg-gray-200 rounded sm:w-full">
                <svg className="w-10 h-10 md:h-[400px] text-gray-200" aria-hidden xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
            <div>
                <div className="w-full px-10 py-10">
                    <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-5 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>

                </div>
            </div>




            <div className='flex mb-20 flex-col md:flex-row gap-5 justify-between md:pl-40 overflow-x-hidden'>
                {
                    [...Array(4)].map((_x, i) => (
                        <div key={i} className="flex px-10 mt-10 items-center gap-8 justify-between w-full h-[270px] bg-gray-300 rounded sm:w-96">
                            <div className='bg-gray-200 w-[70px]'>
                            </div>
                            <div className='bg-gray-200 w-[50%]'>
                            </div>
                        </div>
                    ))
                }


                <span className="sr-only">Loading...</span>
            </div>

            <div className="flex items-center justify-center w-full h-48 md:h-[200px] bg-gray-200 rounded sm:w-full">
                <svg className="w-10 h-10 md:h-[400px] text-gray-200" aria-hidden xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
        </div>
    )
}

export default Loading