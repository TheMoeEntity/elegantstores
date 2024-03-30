'use client'
import Image from 'next/image'
import React from 'react'
import showcase from '../../../public/images/boy.jpeg'
import stool from '../../../public/images/showcase.png'
import showcase2 from '../../../public/images/showcase2.webp'
import showcase4 from '../../../public/images/showcase4.webp'
import Link from 'next/link'
import { useState } from 'react'

const ProductsPage = () => {
  const [additional, setAdditional] = useState<boolean>(true)
  const [question, setQuestion] = useState<boolean>(false)
  return (
    <div className='w-full min-h-screen'>
      <div className="text-gray-500 flex gap-x-3 items-center mt-7 mx-auto w-[90%]">
        <span>Home</span><span className='fa-angle-right fa'></span><span>Shop</span>
        <span className='fa-angle-right fa'></span><span>Puffers</span>
        <span className='fa-angle-right fa'></span><span className='text-black'>Leather Puffers</span>
      </div>
      <div className="flex flex-col md:flex-row mt-7 mx-auto w-[90%] mb-8">
        <div className='basis-full flex flex-col gap-y-4 md:basis-[50%]'>
          <div className="w-full">
            <Image
              src={showcase}
              alt="product main image"
              quality={100}
              sizes={'100vw'}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className='w-full flex flex-row justify-between'>
            <div className='flex basis-[32%] w-[32%] '>
              <Image
                src={showcase2}
                alt="product main image"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className='flex basis-[32%] w-[32%] '>
              <Image
                src={showcase4}
                alt="product main image"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className='flex basis-[32%] w-[32%] '>
              <Image
                src={stool}
                alt="product main image"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className='basis-full md:basis-[50%] gap-y-8 py-8 md:py-0 flex flex-col px-2 md:px-5'>
          <div className='flex gap-x-3 items-center'>
            {[...Array(4)].map((_, i) => (
              <span key={i} className={`fa fa-star`}></span>
            ))}
            <span className='font-extrabold'>3 reviews</span>
          </div>
          <div><h1 className='font-extrabold text-3xl md:text-5xl'>Tray table</h1></div>
          <div className='text-gray-500 pb-5 border-b-[1px] border-slate-200 flex flex-col gap-y-3'>
            <span>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</span>
            <span className='font-extrabold text-3xl md:text-4xl text-black'>$89.99</span> <span>In stock</span>
          </div>
          <div className='text-gray-500'>
            Offer expires in:
            <div className='flex flex-wrap gap-y-4 gap-x-4 mt-5'>
              <div className='w-16 px-3 h-16 rounded-md bg-gray-100 flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>02</span><span className='text-sm'>days</span>
              </div>
              <div className='w-16 px-3 h-16 rounded-md bg-gray-100 flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>12</span><span className='text-sm'>hours</span>
              </div>
              <div className='w-16 px-3 h-16 rounded-md bg-gray-100 flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>45</span><span className='text-sm'>minutes</span>
              </div>
              <div className='w-16 px-3 h-16 rounded-md bg-gray-100 flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>05</span><span className='text-sm'>seconds</span>
              </div>
            </div>
          </div>
          <div className='text-gray-500'>
            Sizes:
            <div className='flex flex-wrap gap-y-1 gap-x-4 mt-0'>
              <div className='w-16 px-3 h-16 rounded-md flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>XXL</span>
              </div>
              <div className='w-16 px-3 h-16 rounded-md flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>L</span>
              </div>
              <div className='w-16 px-3 h-16 rounded-md flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>M</span>
              </div>
              <div className='w-16 px-3 h-16 rounded-md flex flex-col items-center justify-center text-black'>
                <span className='text-lg font-bold'>XS</span>
              </div>
            </div>
          </div>

          <div className='flex gap-x-4 mt-5 w-full'>
            <div className='w-[28%] md:w-[20%] h-auto bg-gray-100 flex items-center rounded-lg justify-evenly'>
              <span>-</span><span className='font-extrabold'>1</span><span>+</span>
            </div>
            <button className='border-[1px] border-black rounded-lg w-[70%] py-2 text-black'><i className='fa-solid fa-heart mr-3'></i>Wishlist</button>
          </div>
          <button className='w-full py-3 rounded-lg bg-black text-white'>Add to cart</button>

          <div className='mt-5'>
            <div className=''>
              <button className='font-extrabold border-b-[1px] py-3 flex w-full justify-between items-center' onClick={() => setAdditional(!additional)}>
                Additional info <i className={`transition duration-200 fa-solid fa-angle-down ml-2 text-xs ${additional === true ? `rotate-180` : `rotate-0`}`}></i>
              </button>
              <div style={{ transition: '0.5s ease' }} className={`px-3 flex transition duration-200 overflow-hidden flex-col gap-7 ${additional === true ? `overflow-auto py-6 max-h-fit` : `max-h-0`}`}>
                <div className='border-b-[1px] pb-2 border-[#fafafa] font-extralight'>
                  Packaging <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo, similique maxime eum beatae quibusdam culpa. <br /> <br />
                  Details <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit accusamus ipsum id? Odit illum et recusandae ex! Qui dolorum illo, sint non ea amet eveniet.
                </div>
              </div>
            </div>
            <div className=''>
              <button className='font-extrabold border-b-[1px] py-3 flex w-full justify-between items-center' onClick={() => setQuestion(!question)}>
                Questions <i className={`transition duration-200 fa-solid fa-angle-down ml-2 text-xs ${question === true ? `rotate-180` : `rotate-0`}`}></i>
              </button>
              <div style={{ transition: '0.5s ease' }} className={`px-3 flex transition duration-200 overflow-hidden flex-col gap-7 ${question === true ? `overflow-auto py-6 max-h-fit` : `max-h-0`}`}>
                <div className='border-b-[1px] pb-2 border-[#fafafa] font-extralight'>
                  Packaging <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo, similique maxime eum beatae quibusdam culpa. <br /> <br />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductsPage