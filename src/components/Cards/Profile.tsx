"use client";
import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";
import boy from "../../../public/images/avatar.png";
import { useContext, useEffect, useState } from "react";
import { userContext } from "@/src/Helpers/ContextAPI/usercontext";
import { createBrowserClient } from "@supabase/ssr";
import { useSnackbar } from "notistack";
import { Clock, Heart, Receipt, User } from "lucide-react";

const Profile = ({
  profileOpen = false,
  forceClose,
  url,
}: {
  url: string;
  profileOpen: boolean;
  forceClose: () => void;
}) => {
  const { user } = useContext(userContext);
  const [showModal, setModal] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const [currProfile, setCurrProfile] = useState<any>(boy);
  useEffect(() => {
    if (url && url !== "") {
      setCurrProfile(url);
    }
  }, [user]);
  const signOutAction = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
    );
    await supabase.auth
      .signOut()
      .then(() => {
        enqueueSnackbar({
          message: "You have been signed out",
          variant: "info",
        });
        location.href = "/";
      })
      .catch((err) => {
        enqueueSnackbar({
          message: "Error signing out user: " + err,
          variant: "error",
        });
      });
  };

  return (
    <div
      style={{
        top: profileOpen === true ? "130px" : "-380px",
        visibility: !profileOpen ? "hidden" : "visible",
        zIndex: "99999999999",
      }}
      className={styles.profile}
    >
      {showModal && (
        <div className="fixed">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999999999] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Signout {user.userData.userName}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Hey {user.userData.fullName}, do you really want to sign
                    out?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t gap-x-3 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-[#171D28] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#377DFF] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => signOutAction()}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
      <div className={styles.userheader}>
        <div className="">
          <Image
            src={currProfile}
            alt="user image"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            sizes={"100vw"}
          />
        </div>
        <div className={styles.details}>
          <div>
            <b>{user.userData.userName ?? ""}</b>
          </div>
          {/* <div>location</div> */}
        </div>
      </div>
      <nav>
        <ul>
          {!user.isSignedIn && (
            <>
              <li>
                <Link href={`/login`}>
                  <div>
                    <User /> Log in
                  </div>
                </Link>
              </li>
              <li>
                <Link href={`/signup`}>
                  <div>
                    <User /> Create account
                  </div>
                </Link>
              </li>
            </>
          )}
          <li>
            <Link href={`/account`}>
              <div className="flex items-center gap-3">
                <User />
                My Account
              </div>
            </Link>
          </li>
          <li>
            <Link href={`/account?link=order`}>
              <div className="flex items-center gap-3">
                <Receipt /> My Order
              </div>
            </Link>
          </li>
          <li>
            <Link href={`/account?link=wishlist`}>
              <div className="flex items-center gap-3">
                <Heart />
                Wishlist
              </div>
            </Link>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <Clock /> Recently Viewed
            </div>
          </li>
        </ul>
      </nav>
      <div className="">
        <ul>
          <li>
            <div className="flex items-center gap-3">
              <Clock /> Dark mode
            </div>
          </li>
          {user.isSignedIn && (
            <li>
              <button
                onClick={() => setModal(true)}
                className="flex items-center gap-3"
              >
                <User /> Log out
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
