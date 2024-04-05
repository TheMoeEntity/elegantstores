'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect } from 'react'
import noImage from '../../../public/images/noimage.png'
import { useState } from 'react'
import FeaturedCard from '../Cards/Featured'
import { ISBProducts, productType } from '@/src/Helpers/types'
import profile from '../../../public/images/cat4.png'
import avatar from '../../../public/images/avatar.png'

const ProductsPage = ({ justIn, item }: { justIn: productType[], item: ISBProducts }) => {

  const [additional, setAdditional] = useState<boolean>(true)
  const [question, setQuestion] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(1)
  const [index, setIndex] = useState<number>(0)
  const [currImage, setCurrImage] = useState<string | StaticImageData>(item.images[0] ?? noImage)
  const mdWidth = `md:w-[calc(0.45*${item.dimensions?.width}px)]`

  return (
    <div className='w-full min-h-screen'>
      <div className="text-gray-500 flex gap-x-3 items-center mt-7 mx-auto w-[90%]">
        <span>Home</span><span className='fa-angle-right fa'></span><span>Shop</span>
        <span className='fa-angle-right fa'></span><span>{item.category}</span>
        <span className='fa-angle-right fa'></span><span className='text-black'>{item.title}</span>
      </div>
      <div className="flex flex-col lg:flex-row mt-7 mx-auto w-[90%] mb-8">
        <div className='basis-full flex flex-col gap-y-4 md:basis-[50%]'>
          <div className="w-full relative">
            <Image
              src={currImage}
              alt="product main image"
              quality={100}
              sizes={'100vw'}
              height={item.dimensions?.height}
              width={item.dimensions?.width}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className='w-full flex flex-row justify-between'>
            <div onClick={() => setCurrImage(item.images[1] ?? noImage)} className='flex basis-[32%] w-[32%] '>
              <Image
                src={item.images[1] ?? noImage}
                alt="product auxillary image"
                quality={100}
                sizes={'100vw'}
                height={(0.38 * item.dimensions.height)}
                width={0.38 * item.dimensions.width}
                className={`object-cover w-full h-auto ${mdWidth}`}
              />
            </div>
            <div onClick={() => setCurrImage(item.images[2] ?? noImage)} className='flex basis-[32%] w-[32%] '>
              <Image
                src={item.images[2] ?? noImage}
                alt="product auxillary image"
                quality={100}
                sizes={'100vw'}
                height={0.38 * item.dimensions?.height}
                width={0.38 * item.dimensions?.width}
                className={`object-cover w-full h-auto ${mdWidth}`}
              />
            </div>
            <div onClick={() => setCurrImage(item.images[0] ?? noImage)} className='flex basis-[32%] w-[32%] '>
              <Image
                src={item.images[0] ?? noImage}
                alt="product main image"
                quality={100}
                height={0.38 * item.dimensions?.height}
                width={0.38 * item.dimensions?.width}
                sizes={'100vw'}
                className={`object-cover w-full h-auto ${mdWidth}`}
              />
            </div>
          </div>
        </div>

        <div className='basis-full md:basis-[50%] gap-y-8 py-8 lg:py-0 flex flex-col px-2 md:px-5'>
          <div className='flex gap-x-3 items-center'>
            {[...Array((Math.floor(item.rating)))].map((_, i) => (
              <span key={i} className={`fa fa-star`}></span>
            ))}
            <span className='font-extrabold'>{item.reviews?.reviews.length ?? "no"} reviews</span>
          </div>
          <div><h1 className='font-extrabold text-4xl md:text-5xl'>{item.title}</h1></div>
          <div className='text-gray-500 pb-5 border-b-[1px] border-slate-200 flex flex-col gap-y-3'>
            <span>{item.description}.</span>
            <span className='font-extrabold text-3xl md:text-4xl text-black'>₦ {item.price.toLocaleString()}</span> <span>{item.in_Stock? "In stock":"Out of stock"}</span>
          </div>
          <div className='text-gray-500 border-b-[1px] pb-5'>
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
              {
                item.sizes.map((x, i) => (
                  <div key={i} className='w-16 px-3 h-16 rounded-md flex flex-col items-center justify-center text-black'>
                    <span className='text-lg font-bold'>{x}</span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='flex gap-x-4 mt-5 w-full'>
            <div className='w-[28%] md:w-[20%] h-auto bg-gray-100 flex items-center rounded-lg justify-evenly'>
              <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
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

      <div className='mx-auto w-[90%] flex flex-col gap-y-5'>
        <div className='border-b-[1px] border-[#DEE1E6] pb-0.3 mb-[32px] w-full'>
          <button onClick={() => setIndex(0)} className={`mr-7 ${index == 0 ? 'border-b-[2px] border-black pb-2' : 'text-[#0D141F99]'}  `}>Additional Info</button>
          <button onClick={() => setIndex(1)} className={`mr-7 ${index == 1 ? 'border-b-[2px] border-black pb-2' : 'text-[#0D141F99]'} `}>Questions</button>
          <button onClick={() => setIndex(2)} className={`${index == 2 ? 'border-b-[2px] border-black pb-2' : 'text-[#0D141F99]'} `}>Reviews</button>
        </div>
        <h1 className='font-semibold text-3xl'>Customer Reviews</h1>
        <div className='flex gap-x-3 items-center'>
          {[...Array((Math.floor(item.rating)))].map((_, i) => (
            <span key={i} className={`fa fa-star`}></span>
          ))}
          <span className='font-extrabold'>{item.reviews?.reviews.length ?? "no"} reviews</span>
        </div>

        <div className="w-full">
          <form className="w-full md:w-[65%] my-5">
            <h4 className="mb-4">Write a review</h4>

            <div className='flex flex-col md:flex-row gap-4 mb-5 justify-between'>
              <div className="form-group w-full md:basis-[48%]">
                <input className="w-full border-[1px] px-4 py-3 rounded-md" type="text" name="name" id="name" placeholder="Name:" />
              </div>

              <div className="form-group md:basis-[48%]">
                <input className="w-full border-[1px] px-4 py-3 rounded-md" type="email" name="mail" id="mail" placeholder="Email:" />
              </div>
            </div>



            <textarea className="mb-4 w-full px-4 py-3 border-[1px]" name="comment" id="comment" cols={30} rows={5} placeholder="Comment"></textarea>

            <button className="rounded-md bg-black text-white py-3 px-4" type="submit">Submit review </button>
          </form>
        </div>

        {
          item.reviews?.reviews && (
            <div className='flex justify-between md:flex-row flex-col gap-y-5'>
              <h2 className='text-3xl font-semibold'>11 Reviews</h2>
              <div id='service' className={`md:w-[40%] lg:w-[20%]`}>
                <select
                  className="custom-select outline-none w-full px-2 py-2 text-[black] font-semiold border-[1px] border-[#eef5ff]"
                >
                  <option>Newest</option>
                  <option>Older</option>
                </select>
              </div>
            </div>
          )
        }
        <div className='flex w-full flex-col'>
          {
            item.reviews?.reviews && item.reviews?.reviews.map((x, i) => (
              <div key={i} className='flex border-b-[1px] flex-col pb-5 pt-3 gap-y-7 '>
                <div className='flex gap-x-3 items-center'>
                  <div className='items-center'>
                    <Image
                      src={avatar}
                      alt='profile'
                      quality={100}
                      sizes='100vw'
                      className='object-cover w-[calc(0.1*499px)] md:w-[calc(0.1*499px)] md:h-[calc(0.1*499px)] lg:w-[calc(0.15*499px)] rounded-full h-[calc(0.1*499px)] lg:h-full'
                    />
                  </div>
                  <div className='lg:pl-7'>
                    <div>{x.name}</div>
                    {[...Array(x.rating+1)].map((_, i) => (
                      <span key={i} className={`fa fa-star text-[8px] md:text-[13px]`}></span>
                    ))}
                  </div>

                </div>
                <p className='text-gray-500 md:pl-20 lg:pl-36'>
                  {x.review}
                </p>
              </div>
            ))
          }
        </div>
        <div className='mx-auto w-fit mt-10'>
          <button className='rounded-full border-[1px] border-black px-6 py-2 text-xl'>Load more</button>
        </div>
      </div>


      <div className="flex flex-col m-auto no-scrollbar p-auto mt-7 md:w-[90%]">
        <div className='flex justify-between py-7 items-center px-5'>
          <strong className='font-[500] text-4xl'>Products you may like</strong>
        </div>
        <div
          className="flex overflow-x-scroll no-scrollbar pb-10 no-scrollbar"
        >
          <div
            className="flex gap-5 flex-nowrap lg:ml-[60px] md:ml-0 ml-8 mr-10 whitespace-nowrap"
          >
            {
              [...justIn.slice(0, 4)].map((x) => (
                <FeaturedCard img={x.image} key={x.id} id={x.id} title={x.title} price={x.price} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage