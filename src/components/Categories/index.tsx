import Image, { StaticImageData } from 'next/image'
import winterman from '../../../public/images/winterman.png'
import catimg from '../../../public/images/catimg.png'
import catimg2 from '../../../public/images/catimg2.png'
import catimg3 from '../../../public/images/catimg3.png'
import catimg4 from '../../../public/images/catimg4.png'
import img from '../../../public/images/img.png'
import img2 from '../../../public/images/img2.png'
import img3 from '../../../public/images/img3.png'
import img4 from '../../../public/images/img4.png'
import img5 from '../../../public/images/img5.png'
import img6 from '../../../public/images/img6.png'

const assets: { img: StaticImageData, text: string }[] = [
    {
        img: img,
        text: "Puffers"
    },
    {
        img: img2,
        text: "Bombers"
    },
    {
        img: img3,
        text: "Jackets"
    },
    {
        img: img4,
        text: "Gilets"
    },
    {
        img: img5,
        text: "Coats"
    },
    {
        img: img6,
        text: "Rainwears"
    }
]
const Catgories = () => {
    return (
        <div className='py-12 flex flex-col px-5 gap-10 bg-white'>
            <div>
                <h2 className='text-4xl font-[500] text-center leading-tight'>Shop by Categories</h2>
            </div>
            <div className='flex gap-4 md:flex-row w-full md:w-[90%] justify-center mx-auto mb-7 flex-wrap'>
                {
                    assets.map((x, i) => (
                        <div key={i} className='w-full flex md:justify-center gap-7 justify-center flex-[40%] basis-[40%] md:basis-[10%]'>
                            <div className='gap-4 max:h-[160px]  flex flex-col justify-center md:w-auto md:min-w-[auto] rounded-full'>
                                <Image
                                    src={x.img}
                                    alt="category"
                                    quality={100}
                                    sizes={'100vw'}
                                    className="object-cover rounded-full w-full h-auto"
                                />
                                <span className='text-center md:text-sm'>{x.text}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col md:flex-row md:gap-5 gap-7 justify-center mx-auto md:w-[95%] w-full flex-wrap'>
                <div className='relative h-auto md:max-w-[43%] w-[100%]'>
                    <Image
                        src={catimg}
                        alt='bigger categories'
                        quality={100}
                        sizes='100vw'
                        className='relative object-cover w-full h-auto'
                    />
                    <div className="absolute bottom-[40px] left-7 text-white z-10 flex flex-col gap-5">
                        <span className='text-3xl'>November Outfits</span>
                        <button className='text-sm underline underline-offset-4 md:text-left'>Shopp now! &rarr;</button>
                    </div>
                </div>
                <div className='h-auto relative md:max-w-[43%] w-[100%]'>
                    <Image
                        src={catimg2}
                        alt='bigger categories'
                        quality={100}
                        sizes='100vw'
                        className=' object-cover w-full h-auto'
                    />
                    <div className="absolute bottom-[40px] left-7 text-white z-10 flex flex-col gap-5">
                        <span className='text-3xl'>Cashmere Sets</span>
                        <button className='text-sm underline underline-offset-4 md:text-left'>Shopp now! &rarr;</button>
                    </div>
                </div>
                <div className='h-auto relative md:max-w-[43%] w-[100%]'>
                    <Image
                        src={catimg3}
                        alt='bigger categories'
                        quality={100}
                        sizes='100vw'
                        className=' object-cover w-full h-auto'
                    />
                    <div className="absolute bottom-[40px] left-7 text-white z-10 flex flex-col gap-5">
                        <span className='text-3xl'>The New Nordic</span>
                        <button className='text-sm underline underline-offset-4 md:text-left'>Shopp now! &rarr;</button>
                    </div>
                </div>
                <div className='h-auto relative md:max-w-[43%] w-[100%]'>
                    <Image
                        src={catimg4}
                        alt='bigger categories'
                        quality={100}
                        sizes='100vw'
                        className=' object-cover w-full h-auto'
                    />
                    <div className="absolute bottom-[40px] left-7 text-white z-10 flex flex-col gap-5">
                        <span className='text-3xl'>The {`men's`} leather</span>
                        <button className='text-sm underline underline-offset-4 md:text-left'>Shopp now! &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catgories