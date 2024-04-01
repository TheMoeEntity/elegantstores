'use client'
import Image from 'next/image'
import hero from '../../../public/images/blogsect.png'
import { IArticle } from '@/src/Helpers/types'
import article from '../../../public/images/article.png'
import article2 from '../../../public/images/article2.png'
import article3 from '../../../public/images/article3.png'
import Articles from '../Cards/Articles'

const Blog = () => {
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
        },
        {
            img: article2,
            title: '2023 Holiday Gift Guide',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat!',
            date: '27th August, 2021'
        },
        {
            img: article,
            title: '2023 Holiday Gift Guide',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat!',
            date: '23rd May, 2023'
        },
        {
            img: article3,
            title: '2023 Holiday Gift Guide',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat!',
            date: '10th May, 2018'
        },
    ]
    return (
        <section className='min-h-screen mx-auto'>
            <div className="hero w-full relative h-[300px] md:h-[500px]">
                <Image
                    src={hero}
                    fill
                    alt="big hero image"
                    quality={100}
                    sizes={'100vw'}
                    priority
                    className="object-cover w-full h-full"
                />
                <div className='absolute text-center flex flex-col gap-y-10 z-20 w-[90%] h-[70%] md:h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-center text-xl'> Home <i className='fa-solid fa-angle-right mx-3'></i> <b className='font-extrabold'>Blog</b></h1>
                    <h1 className='text-center font-semibold text-3xl md:text-5xl underline underline-offset-8'>Our Blog</h1>
                    <p>{`Let’s`} design the place you always imagined.</p>
                </div>
            </div>

            <div className='flex my-8 flex-row gap-3 flex-wrap mx-auto w-[95%]'>
                <div className='basis-full'>

                    <div className='flex justify-between h-fit w-full flex-row items-center px-0 mx-auto md:px-7 md:w-[95%]'>
                        <div className='flex gap-x-4'>
                            <h2 className='text md:w-full underline underline-offset-4 font-semibold'>All Blog</h2>
                            <h2 className='text font-[500] md:w-full'>Features</h2>
                        </div>
                        <div className='flex justify-center h-full items-center'>
                            <button className='underline underline-offset-4 w-[100px] text-xl'>
                                View all
                            </button>
                        </div>
                    </div>
                    <div className='w-[100%] px-3 md:px-0 flex-wrap mx-auto flex gap-y-7 flex-col md:flex-row justify-between mb-16'>
                        {
                            articleData.map((article, index) => (
                                <Articles key={index} title={article.title} desc={article.desc} img={article.img} date={article.date} />
                            ))
                        }
                    </div>
                    <div className='mx-auto w-fit mt-10'>
                        <button className='rounded-full border-[1px] border-black px-6 py-2 text-xl'>Load more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog