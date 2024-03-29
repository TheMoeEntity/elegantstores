import Image, { StaticImageData } from 'next/image'
// import catimg4 from '../../../public/images/best.png'

const Best = ({
    title,
    price,
    img
}: {
    title: string;
    price: number;
    img: string
}) => {
    return (
        <div className='flex md:min-h-fit flex-col gap-3 h-fit min-w-full md:min-w-[10%] md:basis-[30%] lg:basis-[23%]'>
            <div className='w-full my-5 relative min-h-[410px] max-h-[auto]'>
                <Image
                    src={img}
                    alt='Best sellers'
                    quality={100}
                    sizes='100vw'
                    fill
                    className='object-contain'
                />
            </div>
            <div>
                {[...Array(4)].map((_, i) => (
                    <span key={i} className={`fa fa-star mx-1 my-1`}></span>
                ))}
            </div>
            <div className='text-2xl font-semibold'>{title}</div>
            <div className='text-xl font-semibold'>${price}</div>
        </div>
    )
}

export default Best