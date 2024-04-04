'use client'
import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";
import boy from "../../../public/images/noimage.png";
import { useEffect, useState } from "react";
import { readUserSessionCLient } from "@/src/Helpers/supabase";


const Profile = ({ profileOpen = false, forceClose }: { profileOpen: boolean, forceClose: () => void }) => {
    const getData = async ()=> {
        const user = await readUserSessionCLient()
        console.log(user)
        return user
    }
    const [user, setUser] = useState("");
    useEffect(()=> {
        getData().then((user)=> {
            console.log(user)
            // setUser(user.data)
        })
    
    },[])

    return (
        <div
            style={{
                top: profileOpen === true ? "130px" : "-380px",
                visibility: !profileOpen ? 'hidden' : 'visible'
            }}
            className={styles.profile}
        >
            <div className={styles.userheader}>
                <div className="">
                    <Image
                        src={boy}
                        alt="user image"
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={100}
                        sizes={'100vw'}
                    />
                </div>
                <div className={styles.details}>
                    <div>
                        <b>{user ?? "Username"}</b>
                    </div>
                    <div>location</div>
                </div>
            </div>
            <div className="">
                <ul>
                    <li>
                        <Link href={`/login`}>
                            <div>
                                <i className="fas fa-sign-in-alt"></i> Log in
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/signup`}>
                            <div>
                                <i className="fas fa-user-plus"></i>Create account
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/account`}>
                            <div>
                                <i className="fa-solid fa-user"></i> My Account
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/account?link=order`}>
                            <div>
                                <i className="fas fa-tasks"></i> My Order
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/account?link=wishlist`}>
                            <div>
                                <i className="fas fa-heart"></i> Wishlist
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div>
                            <i className="fa-solid fa-clock"></i> Recently Viewed
                        </div>
                    </li>
                </ul>
            </div>
            <div className="">
                <ul>
                    <li>
                        <div>
                            <i className="fa-solid fa-circle-half-stroke"></i>Dark mode
                        </div>
                    </li>

                    <li>
                        <div>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;