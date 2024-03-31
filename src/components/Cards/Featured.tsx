import styles from "./cards.module.css";
import man5 from "../../public/images/man5.jpeg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const FeaturedCard = ({
  title,
  price,
  img,
}: {
  title: string;
  price: number;
  img: string;
}) => {
  return (
    <div className={styles.featured}>
      <div className={`${styles.img} bg-[#F3F5F7]`}>
        <Image
          alt="Card Picture"
          style={{ objectFit: "cover" }}
          src={img}
          fill
          quality={100}
          priority={true}
          sizes="100vw"
        />
        <button className={styles.cart}>Add to cart</button>
        <div className={`shadow-lg rounded-sm ${styles.hot}`}>NEW</div>
      </div>
      <div className={styles.deets}>
        <div>
          {[...Array(4)].map((_, i) => (
            <span key={i} className={`fa fa-star mx-1 my-1`}></span>
          ))}
        </div>
        <div className="w-full flex-col flex-wrap">
          <Link href={'/products/'+title} className="text-sm font-bold">{title}</Link>
        </div>
        <div>${price}</div>
      </div> 
    </div>
  );
};

export default FeaturedCard;
