import Image from 'next/image'
import React from 'react'
import winterman from '../../../public/images/hero2.png'
import video from '../../../public/images/video.png'
import article from '../../../public/images/article.png'
import article2 from '../../../public/images/article2.png'
import article3 from '../../../public/images/article3.png'
import { IArticle, fakeProductType } from '@/src/Helpers/types'
import Articles from '../Cards/Articles'

const Extras = ({ insta }: { insta: string[] }) => {
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

            <div className='md:w-[90%]  w-[90%] mx-auto mb-7'>
                <Image
                    src={video}
                    alt="video"
                    quality={100}
                    sizes={'100vw'}
                    className="object-cover h-[400px] md:h-auto rounded-2xl w-full"
                />
            </div>
            <div className='flex justify-between h-fit flex-row items-center px-5 md:px-7 w-full'>
                <h2 className='text-3xl font-[500] md:w-full w-1/4'>Latest Articles</h2>
                <div className='flex justify-center h-full items-center'>
                    <button className='underline underline-offset-4 w-[100px] text-xl'>
                        View all
                    </button>
                </div>
            </div>
            <div className='w-[90%] flex-wrap mx-auto flex gap-y-7 flex-col md:flex-row justify-between mb-16'>
                {
                    articleData.map((article, index) => (
                        <Articles key={index} title={article.title} desc={article.desc} img={article.img} date={article.date} />
                    ))
                }
            </div>
            <div className='flex flex-col gap-6 mx-auto w-fit text-center'>
                <h3 className='text-gray-600'>NEWSFEED</h3>
                <h2 className='font-semibold text-3xl'>Instagram</h2>
                <p>Follow us on social media for more discount & promotions</p>
                <p className=' text-gray-600'>@3legant_collection</p>
            </div>

            <div className='flex flex-row md:flex-row md:gap-5 gap-0 justify-center flex-wrap mb-7 w-[90%] md:w-[95%] mx-auto'>
                {
                    insta.slice(0, 4).map((x, i) => (
                        <div key={i} className='flex basis-full w-auto md:min-h-fit flex-col gap-3 h-fit min-w-full md:min-w-[10%] md:basis-[20%] lg:basis-[23%]'>
                            <div className='w-full my-5 relative min-h-[262px] md:min-h-[262px] max-h-[auto]'>
                                <Image
                                    fill
                                    src={x}
                                    alt='Instagram'
                                    quality={100}
                                    sizes='100vw'
                                    className='object-cover md:object-contain h-auto'
                                />

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Extras