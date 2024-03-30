import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";
import boy from "../../../public/images/boy.jpeg";
import {useState } from "react";


const Profile = ({ profileOpen = false, forceClose }: { profileOpen: boolean, forceClose: () => void }) => {


    const [user, setUser] = useState("");
    let name;
    // useEffect(() => {
    //     const userinfo = read_cookie("userInfo");
    //     name = userinfo.name;
    //     setUser(name);
    // }, [user, router]);

    return (
        <div
            style={{
                top: profileOpen===true ? "130px" : "-380px", 
            }}
            className={styles.profile}
        >
            <div className={styles.userheader}>
                <div className="">
                    <Image
                        src={boy}
                        alt="user image"
                        fill
                        style={{objectFit:'cover'}}
                        quality={100}
                        sizes={'100vw'}
                    />
                </div>
                <div className={styles.details}>
                    <div>
                        <b>{user ?? "Username"}</b>
                    </div>
                    <div>Lagos, Nigeria</div>
                </div>
            </div>
            <div className="">
                <ul>
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
                            <i className="fa-solid fa-gear"></i>Settings
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