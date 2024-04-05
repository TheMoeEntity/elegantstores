'use client'
import Image from "next/image";
import styles from "./index.module.css";
import furniture from "../../../public/images/furniture-2.jpeg";
import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/src/Helpers/constants";

const ContactPage = () => {
  const [faq, setFaqs] = useState(faqs)
  const FaqAction = (text: string) => {
    setFaqs(state =>
      state.map((item) => item.text === text ? { ...item, isActive: !item.isActive } : { ...item, isActive: false }))
  }
  return (
    <div className={styles.contact}>
      <div>
        <div className="text-gray-500 flex gap-x-3 items-center mt-7 mx-auto w-[95%]">
          <span>Home</span><span className='fa-angle-right fa'></span><span>Contact us</span>
        </div>
        <div className="mt-7 mx-auto w-[95%]">
          <h2 className="font-semibold text-2xl md:text-4xl my-4 lg:w-[80%]">
            We beleive in sustainable Sports Collection. {`We're`} passionate{" "}
            about your sports lifestyle.
          </h2>
          <p className="lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ratione dolore nihil sequi, consectetur asperiores reprehenderit at
            officiis fugiat voluptatibus.
          </p>
        </div>
        <div className={styles.sales}>
          <div>
            <Image
              alt="Sales Picture"
              style={{ objectFit: "cover" }}
              src={furniture}
              fill
              quality={100}
              priority={true}
            //   sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
            />
          </div>
          <div>
            <div className="mx-6">
              <h2 className="my-3 text-2xl font-semibold">About Us</h2>
              <p className="my-3">
                Steppas collection is an online store collection of the best
                sports brands Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Delectus architecto veritatis saepe omnis ullam numquam
                deserunt nemo repellat!
              </p>
              <Link href='/shop' className="my-5 underline underline-offset-4">Shop Now &rarr;</Link>
            </div>
          </div>
        </div>
        <div className="text-center font-semibold text-2xl md:text-4xl my-12">Contact Us</div>
        <div className={styles.categories}>
          <div>
            <div>
              <i className="fa-solid fa-house"></i>
            </div>
            <div>
              <h5 className="font-light my-3">Address</h5>
            </div>
            <div className="text-center">
              <p>Co-op villas, Badore, Lagos.</p>
              <p>District 1, HMC</p>
              <p>Abakaliki </p> <p>Ebonyi, Nigeria</p>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-phone"></i>
            </div>
            <div>
              <h5 className="fw-light text-dark my-3">Contact Us</h5>
            </div>
            <div className="text-center">
              <p>(+234) 807 548 9362</p>
              {/* <p>(+234) 806 111 4643</p> */}
              <div>
                <h5 className="fw-light my-3">Home</h5>
              </div>
              <p>(+234) 801 234 0890</p>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-envelope"></i>
            </div>
            <div>
              <h5 className="fw-light text-dark my-3">Email</h5>
            </div>
            <div className="text-center">
              <p>mosesnwigberi@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.maps}>
          <div>
            <form action="">
              <div className={styles.formGroup}>
                <label htmlFor="">FULL NAME</label>
                <input type="text" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">EMAIL ADDRESS</label>
                <input type="text" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">MESSAGE</label>
                <textarea name="" id="" rows={10}></textarea>
              </div>
            </form>
          </div>
          <div>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ikoyi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
             
              tabIndex={0}
            ></iframe>
          </div>
        </div>

        <div className="py-[100px]" id="faq">
          <h1 className='text-center font-semibold text-4xl leading-[60px] mb-[90px]'>
            Frequently <br />
            Asked Questions
          </h1>

          <div className='mx-auto md:w-[80%] px-3 flex flex-col gap-[20px]'>
            {
              faq.map((x, i) => (
                <div className='w-full' key={i}>
                  <button
                    onClick={() => FaqAction(x.text)}
                    className='bg-[white] shadow-md py-5 px-5 rounded-md flex items-center justify-between w-full'>
                    <span className='text-left'>{x.text}</span>
                    <i className={`transition duration-200 fa-solid fa-angle-down ${x.isActive === true ? `rotate-180` : `rotate-0`}`}></i>
                  </button>
                  <div dangerouslySetInnerHTML={{ __html: x.reply }} className={`bg-[#f3f4f5] transition-all duration-200 ease rounded-md px-5 overflow-hidden shadow-md ${x.isActive === true ? `overflow-auto py-5 max-h-fit` : `max-h-0`} ${styles.faqButton}`} />
                </div>

              ))
            }
          </div>
        </div>


        <div className="mt-12">
          <div className={`${styles.guarantee}`}>
            <div>
              <div>
                <i className="fa-solid fa-truck"></i>
              </div>
              <div>
                <h5 className="fw-light my-3">Free Shipping</h5>
              </div>
              <div className="text-center">
                <p>Orders above $40.00</p>
              </div>
            </div>

            <div>
              <div>
                <i className="fa fa-money"></i>
              </div>
              <div>
                <h5 className="fw-light my-3">Money back</h5>
              </div>
              <div className="text-center">
                <p>30 days guarantee</p>
              </div>
            </div>

            <div>
              <div>
                <i className="fa fa-credit-card" aria-hidden></i>
              </div>
              <div>
                <h5 className="fw-light my-3">Secure Payments</h5>
              </div>
              <div className="text-center">
                <p>Secured by Stripe</p>
              </div>
            </div>

            <div>
              <div>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h5 className="fw-light my-3">24/7 Assitance</h5>
              </div>
              <div className="text-center">
                <p>Phone and email support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
