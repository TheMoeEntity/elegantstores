import Image from 'next/image'
import React from 'react'
import winterman from '../../../public/images/hero2.png'
import video from '../../../public/images/video.png'

const Extras = () => {
    return (
        <section className='flex flex-col gap-10'>
            <div className='w-full h-auto flex flex-col md:flex-row mb-7'>
                <Image
                    src={winterman}
                    alt="sales"
                    quality={100}
                    sizes={'100vw'}
                    className="object-cover w-full md:w-[50%]  md:flex-[50%] h-auto"
                />
                <div className="bg-[#F3F5F7] md:w-[50%]  md:flex-[50%] text-black px-6 py-12 md:px-12 flex flex-row justify-center items-center">
                    <div className='flex flex-col gap-5'>
                        <h2 className=' text-blue-600'>SALE UP TO 35% oFF</h2>
                        <h1 className='text-4xl md:text-[52px] w-[60%] md:w-[90%] leading-tight'>HUNDREDS of
                            New lower prices!.</h1>
                        <p className='leading-loose md:w-[70%]'>Hurry up!!! Winter is coming!</p>
                        <button className='rounded-lg text-black w-fit underline underline-offset-8 py-3 '>Shop now! &rarr;</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 mx-auto w-fit text-center'>
                <h3 className=' text-blue-600'>PROMOTION</h3>
                <h2 className='font-semibold text-3xl'>Winter Collections</h2>
                <p>Introducing the new winter jackets</p>
            </div>

            <div className='md:w-[90%]  w-[90%] mx-auto'>
                <Image
                    src={video}
                    alt="video"
                    quality={100}
                    sizes={'100vw'}
                    className="object-cover h-[400px] md:h-auto rounded-2xl w-full"
                />
            </div>
        </section>
    )
}

export default Extras