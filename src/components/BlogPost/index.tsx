import Image from 'next/image'
import React from 'react'
import blog from '../../../public/images/hero3.png'
import aside from '../../../public/images/aside.png'
import aside2 from '../../../public/images/aside2.png'
import last from '../../../public/images/last.png'
import article from '../../../public/images/img (1).png'
import article2 from '../../../public/images/img (2).png'
import article3 from '../../../public/images/article3.png'
import { IArticle } from '@/src/Helpers/types'
import Articles from '../Cards/Articles'

const BlogPost = () => {
  const articleData: IArticle[] = [
    {
      img: article,
      title: '2023 Holiday Gift Guide',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat!',
      date: '23rd May, 2023'
    },
    {
      img: article2,
      title: '2023 Holiday Gift Guide',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat!',
      date: '27th August, 2021'
    },
    {
      img: article3,
      title: '2023 Holiday Gift Guide',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat!',
      date: '10th May, 2018'
    }
  ]
  return (
    <main className="max-w-7xl mx-auto bg-[#fafafa]">
      <div className="text-gray-500 flex gap-x-3 items-center mt-7 mx-auto w-[95%]">
        <span>Home</span><span className='fa-angle-right fa'></span><span>Blog</span><span className='fa-angle-right fa'></span><span>How to make a busy bathroom a place to relax</span>
      </div>
      <div className="mt-7 mx-auto w-[95%]">
        <h2 className="font-semibold text-3xl md:text-4xl my-4 lg:w-[80%]">
          How to make a busy bathroom a place to relax
        </h2>
        <div className="flex gap-x-12">
          <div className='flex gap-x-3 text-gray-500 items-center'>
            <i className='fa-solid fa-user'></i>
            <span>Moses Nwigberi</span>
          </div>
          <div className='flex gap-x-3 text-gray-500 items-center'>
            <i className='fa-solid fa-calendar'></i>
            <span>October 16, 2024</span>
          </div>
        </div>
      </div>

      <div className='mx-auto my-10 w-[95%] flex flex-col gap-y-7'>
        <Image
          src={blog}
          alt="winterman"
          quality={100}
          sizes={'100vw'}
          className="object-cover w-full h-auto"
        />
        <p className=''>Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation.
          A cleaning hub with built-in ventilation
          Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>
        <aside>
          <p className='font-semibold text-2xl pb-4'>A cleaning hub with built-in ventilation</p>
          <blockquote>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</blockquote>
        </aside>

        <div className='flex justify-start w-full h-auto flex-col gap-y-8 md:flex-row md:justify-between items-center'>
          <div className='basis-[100%] flex flex-col gap-y-6 md:basis-[48.5%] md:gap-x-2 mb-10'>
            <Image
              src={aside}
              alt="aside image"
              quality={100}
              sizes={'100vw'}
              className="object-cover w-full h-auto"
            />
            <aside className='md:hidden'>
              <p className='font-semibold text-2xl pb-4'>Storage with a calming effect</p>
              <blockquote>
                Having a lot to store {`doesn’t`} mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and {`they’ll`} thrive in the humid air).
              </blockquote>
            </aside>
          </div>
          <div className='basis-[100%] flex flex-col gap-y-6 md:basis-[48.5%] md:gap-x-2 mb-10'>
            <Image
              src={aside2}
              alt="aside image"
              quality={100}
              sizes={'100vw'}
              className="object-cover w-full h-auto"
            />
            <aside className='md:hidden'>
              <p className='font-semibold text-2xl pb-4'>Kit your clutter for easy access</p>
              <blockquote>
                Even if you have a cabinet ready to swallow the clutter, it&#39;s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment&#39;s notice.
              </blockquote>
            </aside>
          </div>


        </div>


        <div className='flex-col gap-y-8 hidden md:flex'>
          <aside className=''>
            <p className='font-semibold text-2xl pb-4'>Storage with a calming effect</p>
            <blockquote>
              Having a lot to store {`doesn’t`} mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and {`they’ll`} thrive in the humid air).
            </blockquote>
          </aside>
          <aside className=''>
            <p className='font-semibold text-2xl pb-4'>Kit your clutter for easy access</p>
            <blockquote>
              Even if you have a cabinet ready to swallow the clutter, it&#39;s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment&#39;s notice.
            </blockquote>
          </aside>
        </div>

        <div className='flex md:flex-row gap-7 flex-col'>
          <div className='basis-full md:basis-[48%]'>
            <Image
              src={last}
              alt="aside image"
              quality={100}
              sizes={'100vw'}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className='basis-full flex flex-col gap-y-7 md:basis-[48%]'>
            <aside className=''>
              <p className='font-semibold text-2xl pb-4'>Storage with a calming effect</p>
              <blockquote>
                Having a lot to store {`doesn’t`} mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and {`they’ll`} thrive in the humid air).
              </blockquote>
            </aside>
            <aside className=''>
              <p className='font-semibold text-2xl pb-4'>Kit your clutter for easy access</p>
              <blockquote>
                Even if you have a cabinet ready to swallow the clutter, it&#39;s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment&#39;s notice.
              </blockquote>
            </aside>
          </div>
        </div>

        <div className='flex justify-between h-fit flex-row items-center px-0 w-full md:mt-[158px]'>
          <h2 className='text-3xl font-[500] md:w-full w-1/4'>You might also like</h2>
          <div className='flex justify-center w-fit items-center'>
            <button className='underline whitespace-nowrap underline-offset-4 w-fit text-xl'>
              More articles &rarr;
            </button>
          </div>
        </div>

        <div className='w-full flex-wrap mx-auto flex gap-y-7 flex-col md:flex-row justify-between mb-16'>
          {
            articleData.map((article, index) => (
              <Articles key={index} title={article.title} desc={article.desc} img={article.img} date={article.date} />
            ))
          }
        </div>

      </div>
    </main>
  )
}

export default BlogPost