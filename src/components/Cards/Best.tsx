import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import noimage from '../../../public/images/noimage.png'
import { Helpers } from '@/src/Helpers';

const Best = ({
    title,
    price,
    img,
    id
}: {
    title: string;
    price: number;
    img: string
    desc: string,
    id: string
}) => {
    return (
        <div className='flex shadow-md md:min-h-fit flex-col gap-3 h-auto min-w-full md:min-w-[10%] md:basis-[30%] lg:basis-[23%] pb-5 rounded-sm'>
            <div className='w-full relative min-h-[410px] md:min-h-[290px] max-h-[auto]'>
                <Image
                    src={Helpers.isValidUrl(img) ? img : noimage}
                    alt='Best sellers'
                    quality={100}
                    sizes='100vw'
                    fill
                    className='md:object-cover object-contain'
                />
            </div>
            <div className='px-4 gap-x-2 flex '>
                {[...Array(4)].map((_, i) => (
                    <span key={i} className={`fa fa-star`}></span>
                ))}
            </div>
            <Link href={'/products/' + id} className='font-semibold px-4'>
                <span className='hover:text-[#377DFF]'>
                    {title}
                </span>
            </Link>
            <div className='font-semibold px-4'>${price}</div>
        </div>
    )
}

export default Best