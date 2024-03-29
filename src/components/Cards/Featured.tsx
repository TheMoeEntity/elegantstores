import styles from "./cards.module.css";
import man5 from "../../public/images/man5.jpeg";
import Image, { StaticImageData } from "next/image";

const FeaturedCard = ({
  title,
  price,
  img,
}: {
  title: string;
  price: number;
  img: StaticImageData;
}) => {
  return (
    <div className={styles.featured}>
      <div className={styles.img}>
        <Image
          alt="Card Picture"
          style={{ objectFit: "cover" }}
          src={img}
          fill
          quality={100}
          priority={true}
          sizes="100vw"
        />
        <div className={styles.cart}>Add to cart</div>
        <div className={styles.hot}>NEW</div>
      </div>
      <div className={styles.deets}>
        <div>
          {[...Array(4)].map((_, i) => (
            <span key={i} className={`fa fa-star mx-1 my-1`}></span>
          ))}
        </div>
        <div>{title}</div>
        <div>${price}</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
