import Image from 'next/image'
import catimg4 from '../../../public/images/best.png'

const Best = ({
    title,
    price,
}: {
    title: string;
    price: number;
}) => {
    return (
        <div className='flex md:min-h-fit flex-col gap-3 h-fit min-w-full md:min-w-[10%] lg:basis-[23%]'>
            <div className='w-full my-5'>
                <Image
                    src={catimg4}
                    alt='Best sellers'
                    quality={100}
                    sizes='100vw'
                    className='object-cover w-full h-auto'
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