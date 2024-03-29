import { StaticImageData } from "next/image"
import Image from "next/image"
import TextTransition, { presets } from 'react-text-transition';
import { AnimatePresence } from "framer-motion";

const GridView = ({ styles, container, h1Text, h2Text }: { styles: any, container: string, h1Text: string, h2Text: string }) => {
    return (
        <div className={`${styles.grid}`}>
            <div className='flex flex-col gap-[40px]'>
                <div className="flex flex-col gap-10">
                    <h2 className=' text-2xl'>
                        {h1Text}
                    </h2>
                    <div className=' text-sm'>
                        <TextTransition springConfig={presets.wobbly}>
                            {h2Text}
                        </TextTransition>
                    </div>
                </div>
                <button className='px-6 w-[190px] h-[45px] rounded-[8px] bg-[#0053cc] text-white'>Learn More</button>
            </div>
            <div style={{ backgroundImage: `url('/images/${container}')`, }} className={styles.phoneCover}>
            </div>
        </div>
    )
}
export const scrollTopView = (scrollBtn: React.MutableRefObject<HTMLDivElement | null>, scrollTop: () => void): JSX.Element => {
    return (
        <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
            <i className="fa-solid fa-angle-up"></i>
        </div>
    )
}
export default GridView