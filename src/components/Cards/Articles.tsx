import { IArticle } from '@/src/Helpers/types'
import Image from 'next/image'
// import catimg4 from '../../../public/images/best.png'

const Articles = (props: IArticle) => {
    return (
        <div className='flex justify-center md:min-h-fit flex-col gap-3 h-fit min-w-full md:min-w-[20%] md:basis-[32%]'>
            <div className='w-full my-5 relative'>
                <Image
                    src={props.img}
                    alt='Article image'
                    quality={100}
                    sizes='100vw'
                    className='object-contain w-full h-auto'
                />
            </div>
            <div className='text-2xl font-semibold'>{props.title}</div>
            <div className='text-xs'>{props.desc.slice(0, 20)}</div>
            <div className='flex justify-between md:flex-col lg:flex-row md:gap-7'>
                <button className='underline underline-offset-4 md:w-fit'>READ MORE &rarr;</button>
                <span>{props.date}</span>
            </div>
        </div>
    )
}

export default Articles