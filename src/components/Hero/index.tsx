import Image from 'next/image'
import React from 'react'
import winterman from '../../../public/images/winterman.png'


const Hero = () => {
    return (
        <section className='w-full h-auto flex flex-col md:flex-row'>
            <Image
                src={winterman}
                alt="winterman"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full md:w-[50%]  md:flex-[50%] h-auto"
            />
            <div className="bg-[#171D28] md:w-[50%]  md:flex-[50%] text-white px-6 py-12 md:px-12 flex flex-row justify-center items-center">
                <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-[52px] w-[60%] md:w-[90%] leading-tight'>Bring the warmth.</h1>
                    <p className='leading-loose md:w-[70%]'>Everyone needs a good winter jacket. Find yours with our collection and more.</p>
                    <button className='rounded-lg bg-[#377DFF] text-white w-fit px-12 py-3 '>Shop now!</button>
                </div>
            </div>
        </section>
    )
}

export default Hero