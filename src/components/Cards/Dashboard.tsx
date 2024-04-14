'use client'
import stool from '../../../public/images/showcase.png'
import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { UserMetadata, createClient } from '@supabase/supabase-js'
import avatar from '../../../public/images/avatar.png'
import { useSearchParams } from 'next/navigation'
import { Helpers } from '@/src/Helpers'
import { useSnackbar } from 'notistack'
import toast from 'react-hot-toast';
import { addressType, wishList } from '@/src/Helpers/types'
import { createSupabaseServerClientCSR } from '@/src/Helpers/supabase/superbaseCSR'

const Dashboard = ({ getSession, email, getAddress, wishlist, uid, url }: { url: string, uid: string | null, getSession: UserMetadata | null, email: string | null, getAddress: addressType, wishlist: wishList[] }) => {

    const { enqueueSnackbar } = useSnackbar()
    const [didSave, setDidSave] = useState(false)
    const [isEditingBilling, setIsEditingBilling] = useState(false)
    const [isEditingShipping, setIsEditingShipping] = useState(false)
    const searchParams = useSearchParams()
    const [step, setStep] = useState(0)
    const [status, setStatus] = useState('Upload image')
    const [currProfile, setCurrProfile] = useState<any>(avatar)
    const [quantity, setQuantity] = useState<number>(1)
    const link = searchParams.get('link')
    const [userFile, setUserFile] = useState<File | null>(null);
    const [address, setAddress] = useState<addressType>({
        billing: {
            phone: '',
            address: ''
        },
        shipping: {
            phone: '',
            address: ''
        }
    })

    useEffect(() => {
        Helpers.handleImageChange(userFile, setCurrProfile)
    }, [userFile])
    // useEffect(() => {

    //     let isSubscribed = true;

    //     // declare the async data fetching function
    //     const fetchAddress = async () => {
    //         const data = await Helpers.fetchSupabaseUsers()
    //         if (isSubscribed) {
    //             setAddress(data.addresss);
    //         }

    //     }


    //     fetchAddress()
    //         // make sure to catch any error
    //         .catch(console.error);;

    //     return () => { isSubscribed = false; }
    // }, [getSession])

    useEffect(() => {
        switch (link) {
            case 'wishlist':
                setStep(3)
                break;

            case 'order':
                setStep(2)
                break;
            default:
                setStep(0)
        }
        if (getAddress) {
            setAddress(getAddress)
        }
        if (!getSession?.profile) {
            setCurrProfile(avatar)
        } else {
            setCurrProfile(decodeURIComponent(getSession?.profile))
        }
    }, [])

    const [currFile, setCurrFile] = useState<string>("No file selected*");
    const [size, setSize] = useState("");

    const inputFile = useRef<HTMLInputElement | null>(null);
    const openFiles = () => {
        if (inputFile.current) inputFile.current.click();
    };

    useEffect(() => {
        if (currFile !== "No file selected*") {
            const isFile = !userFile ? "Selected file size:" : `${userFile.name}, `;
            setCurrFile(isFile + ` ${size}`);
        }
    }, [size]);
    const uploadImage = async () => {
        setStatus('Uploading...')
        const supabase = await createSupabaseServerClientCSR()
        try {
            setDidSave(true)
            await deleteProfilePicture(url, supabase)
            const file = userFile
            const fileExt = userFile?.name.split('.').pop()
            const filePath = `${uid}-${Math.random()}.${fileExt}`
            if (file) {
                const { error: uploadError, data } = await supabase.storage.from('avatars').upload(filePath, file)
                if (data) {
                    const imageUrl = supabase.storage.from('avatars').getPublicUrl(filePath);
                    console.log(imageUrl.data.publicUrl)
                    await Helpers.uploadProfile(toast, imageUrl.data.publicUrl)
                }
                if (uploadError) {
                    throw uploadError
                }
                toast.success("Image uploaded successully")
            }

            // onUpload(filePath)
        } catch (error) {
            toast.error('Error uploading avatar! ' + error)
        } finally {
            setStatus('Upload image')
            setDidSave(false)
        }
    }
    const saveAddress = async () => {
        if (
            address.billing.address === '',
            address.billing.phone === '',
            address.shipping.address === '',
            address.shipping.phone === ''
        ) {
            toast.error('Address cannot be empty fool.')
            return
        }
        await Helpers.updateAddress(toast, address, setDidSave)
    }
    const deleteProfilePicture = async (oldAvatarUrl: string, supabase: any) => {
        try {
            // Extract the key from the old avatar URL
            const key = oldAvatarUrl.substring(oldAvatarUrl.lastIndexOf('/') + 1);

            // Remove the old profile picture from the storage bucket
            await supabase.storage.from('avatars').remove([key]);

            console.log('Old profile picture deleted successfully');
        } catch (error) {
            console.error('Error deleting old profile picture:', error);
        }
    }

    useEffect(() => {
        if (url && url !== '') {
            setCurrProfile(url)
        }
    }, [url])
    return (
        <div className='flex my-8 flex-row gap-3 gap-x-7 md:gap-x-3 lg:gap-x-7 flex-wrap mx-auto w-[90%] md:w-[97%] lg:w-[85%]'>
            {
                didSave && (
                    <div className="fixed flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.7)] z-[100] top-0 left-0">
                        <div role="status">
                            <svg aria-hidden className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
            <div className='flex basis-[100%] md:basis-[30%] px-5 py-10 h-auto gap-y-9 flex-col bg-[#F3F5F7]'>
                <div className='text-xl'>
                    <button onClick={() => setStep(0)} className='text-2xl font-semibold'>ACCOUNT</button>
                </div>
                <div className="w-24 h-24 relative text-white flex justify-center items-center">
                    <Image
                        src={currProfile}
                        alt="avatar"
                        quality={100}
                        fill
                        sizes={'100vw'}
                        className="object-cover rounded-full w-full h-auto"
                    />
                    <input onChange={(e) =>
                        Helpers.handleFileSelected(
                            e,
                            enqueueSnackbar,
                            setSize,
                            setUserFile,
                            setCurrFile,
                            size,
                        )
                    } type="file" className="hidden" ref={inputFile} id="" />
                    <button onClick={() => openFiles()} className="absolute flex justify-center items-center z-[1] bg-[#FAFAFA] rounded-full w-10 h-10 -right-1 bottom-0">
                        <div className="bg-black w-9 h-9 rounded-full flex justify-center items-center">
                            <i className='fa-solid fa-camera'></i>
                        </div>
                    </button>
                </div>
                <div>
                    <div className='mb-5'>
                        {currFile} <br />
                    </div>
                    {
                        currFile !== 'No file selected*' && (<button onClick={() => uploadImage()} className='bg-black text-white px-3 py-2 text-sm rounded-md'>{status}</button>)
                    }
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-5 flex-col flex'>
                        <li className='text-black underline'>Account details</li>
                        <li>Update Password</li>
                        <li>Save changes</li>
                    </ul>
                </div>
                <div className='text-xl'>
                    <button onClick={() => setStep(1)} className='text-2xl font-semibold'>ADDRESS</button>
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-4 flex-col flex'>
                        <li className='w-full flex justify-between items-center'>
                            <span>Change Address</span>
                        </li>
                        <li className='w-full flex justify-between items-center'>
                            <button onClick={() => saveAddress()}>Save Address</button>
                        </li>
                    </ul>
                </div>
                <div className='text-xl'>
                    <button onClick={() => setStep(2)} className='text-2xl font-semibold'>ORDER</button >
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-4 flex-col flex'>
                        <li className='w-full flex justify-between items-center'>
                            <span>Order history</span>
                        </li>
                    </ul>
                </div>
                <div className='text-xl'>
                    <button onClick={() => setStep(3)} className='text-2xl font-semibold'>WISHLIST</button>
                </div>
                <div>
                    <ul className='text-gray-600 gap-y-4 flex-col flex'>
                        <li className='w-full flex justify-between items-center'>
                            <span>Edit wishlist</span>
                        </li>
                        <li className='w-full flex justify-between items-center'>
                            <span>Save changes</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:basis-[65%] max-w-[100%] md:max-w-[65%] flex-grow-[1.5] basis-[100%] py-7'>
                {
                    step === 0 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className="px-7 ">
                            <h2 className="font-bold text-xl">Account details:</h2>
                            <form className="mt-5 flex md:w-[90%] flex-col gap-[20px] pr-5 pb-12">
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Your Name</label>
                                    <input placeholder="Enter full name" disabled defaultValue={getSession?.fullName} type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Username</label>
                                    <input placeholder="Username" defaultValue={getSession?.userName} type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Email</label>
                                    <input disabled placeholder="Your email address" defaultValue={email ?? ''} type="email" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Password</label>
                                    <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full bg-transparent border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">New password</label>
                                    <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full bg-transparent border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className=" block font-bold mb-2">Confirm new password</label>
                                    <input placeholder="*****" type="password" className="py-[10px] px-[10px] w-full bg-transparent border-gray-300 border-b-[1px]" />
                                </div>
                                <div className="flex flex-col gap-y-8 lg:flex-row justify-between">
                                    <div className='flex gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span>Remember me</span>
                                    </div>
                                    <Link href={'/forgot'}>
                                        <button type="button" className="text-black">Forgot password?</button>
                                    </Link>
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-[#171D28] text-white rounded-md w-full h-[54px]">Save changes</button>
                                </div>

                            </form>
                        </motion.div>
                    )
                }
                {
                    step === 1 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className="px-7 ">
                            <h2 className="text-2xl font-semibold mb-7">Address</h2>
                            <div className="flex flex-col gap-5  md:flex-row">
                                <div className="min-w-[46%] border-[1px] border-black justify-start items-start rounded-md px-4 py-4 flex flex-col gap-y-5 flex-between">
                                    <div className='flex justify-between w-full'>
                                        <strong className="text-xl font-semibold">Billing address</strong>
                                        <button onClick={() => setIsEditingBilling(!isEditingBilling)} className={isEditingBilling ? "black" : "text-gray-400"}>
                                            <i className="fas fa-edit mr-2"></i>
                                            {isEditingBilling ? "Save" : "Edit"}
                                        </button>
                                    </div>
                                    <form className="flex flex-col gap-y-4 w-[85%]">
                                        <input type="text" readOnly className='border-b-[1px] px-2 bg-transparent py-1 outline-none' name="" defaultValue={getSession?.fullName} id="" />
                                        <input type="tel"
                                            readOnly={!isEditingBilling ? true : false}
                                            value={address.billing.phone}
                                            onChange={e => setAddress(state => {
                                                return {
                                                    shipping: {
                                                        ...state?.shipping
                                                    },
                                                    billing: {
                                                        phone: e.target.value,
                                                        address: state?.billing.address
                                                    }
                                                }
                                            })}
                                            className='border-b-[1px] outline-none px-2 bg-transparent py-1' placeholder='phone number' name="" id="" />
                                        <input
                                            value={address.billing.address}
                                            readOnly={!isEditingBilling ? true : false}
                                            onChange={e => setAddress(state => {
                                                return {
                                                    shipping: {
                                                        ...state?.shipping
                                                    },
                                                    billing: {
                                                        address: e.target.value,
                                                        phone: state?.billing.phone
                                                    }
                                                }
                                            })}
                                            type="text" className='border-b-[1px] outline-none px-2 bg-transparent py-1' placeholder='Billing adddress' name="" id="" />
                                    </form>

                                </div>
                                <div className="min-w-[46%] border-[1px] border-black justify-start items-start rounded-md px-4 py-4 flex flex-col gap-y-5 flex-between">
                                    <div className='flex justify-between w-full'>
                                        <strong className="text-xl font-semibold">Shipping address</strong>
                                        <button onClick={() => setIsEditingShipping(!isEditingShipping)} className={isEditingShipping ? "black" : "text-gray-400"}>
                                            <i className="fas fa-edit mr-2"></i>
                                            {isEditingShipping ? "Save" : "Edit"}
                                        </button>
                                    </div>
                                    <form className="flex flex-col gap-y-4 w-[85%]">

                                        <input readOnly type="text" className='border-b-[1px] px-2 bg-transparent py-1' name="" defaultValue={getSession?.fullName} id="" />
                                        <input type="tel"
                                            readOnly={!isEditingShipping ? true : false}
                                            value={address.shipping.phone}
                                            onChange={e => setAddress(state => {
                                                return {
                                                    billing: {
                                                        ...state?.billing
                                                    },
                                                    shipping: {
                                                        phone: e.target.value,
                                                        address: state?.shipping.address
                                                    }
                                                }
                                            })}
                                            className='border-b-[1px] outline-none px-2 bg-transparent py-1' placeholder='phone number' name="" id="" />
                                        <input type="text" readOnly={!isEditingShipping ? true : false}
                                            value={address.shipping.address}
                                            onChange={e => setAddress(state => {
                                                return {
                                                    billing: {
                                                        ...state?.billing
                                                    },
                                                    shipping: {
                                                        address: e.target.value,
                                                        phone: state?.shipping.phone
                                                    }
                                                }
                                            })}
                                            className='border-b-[1px] outline-none px-2 bg-transparent py-1' placeholder='Billing adddress' name="" id="" />
                                    </form>

                                </div>
                            </div>
                        </motion.div>
                    )
                }
                {
                    step === 2 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className="w-full overflow-x-scroll max-w-full">
                            <h2 className="text-2xl font-semibold mb-7">Orders history</h2>
                            <div className="flex flex-col w-full overflow-x-scroll h-[300px]">

                                <table
                                    className="min-w-full text-left overflow-x-scroll text-sm   max-w-full font-light text-surface">
                                    <thead
                                        className="border-b border-neutral-200 font-medium ">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">NUMBER ID</th>
                                            <th scope="col" className="px-6 py-4">Dates</th>
                                            <th scope="col" className="px-6 py-4">Status</th>
                                            <th scope="col" className="px-6 py-4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">#3456_78w4dkpew</td>
                                            <td className="whitespace-nowrap px-6 py-4">October 23, 2024</td>
                                            <td className="whitespace-nowrap px-6 py-4">Delivered</td>
                                            <td className="whitespace-nowrap px-6 py-4">$123.45</td>
                                        </tr>
                                        <tr
                                            className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">#3456_78w4dkpew</td>
                                            <td className="whitespace-nowrap px-6 py-4">October 23, 2024</td>
                                            <td className="whitespace-nowrap px-6 py-4">Delivered</td>
                                            <td className="whitespace-nowrap px-6 py-4">$123.45</td>
                                        </tr>
                                        <tr
                                            className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">#3456_78w4dkpew</td>
                                            <td className="whitespace-nowrap px-6 py-4">October 23, 2024</td>
                                            <td className="whitespace-nowrap px-6 py-4">Delivered</td>
                                            <td className="whitespace-nowrap px-6 py-4">$123.45</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </motion.div>

                    )
                }
                {
                    step === 3 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
                            <div className='flex-1 flex-grow-[1.85] w-[100%]'>
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div className="overflow-hidden">
                                                <table
                                                    className="min-w-full text-left text-sm font-light text-surface border-spacing-5">
                                                    <thead
                                                        className="border-b border-neutral-200 bg-white font-semibold">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-4 w-[55%]" colSpan={2}>Product</th>
                                                            <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Action</th>
                                                            <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Price</th>
                                                            <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Subtotal</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            wishlist.map((x) => (
                                                                <tr key={x.price} className="border-b border-neutral-200 border-b-gray-200 h-auto">
                                                                    <td className="px-0 min-w-[65%] md:min-w-[55%] md:max-w-[55%] py-0 font-medium align-top" colSpan={2}>
                                                                        <div className="w-full h-[190px] md:min-w-[auto] md:min-h-[160px] flex items-center gap-x-4 md:gap-x-6">
                                                                            <div className="md:basis-[40%] w-full md:min-w-[80px] min-h-[160px] relative">
                                                                                <Image
                                                                                    src={x.image}
                                                                                    alt="product main image"
                                                                                    quality={100}
                                                                                    sizes={'100vw'}
                                                                                    fill
                                                                                    className="object-contain w-full h-auto"
                                                                                />
                                                                            </div>
                                                                            <div className='flex flex-col gap-y-4 justify-center basis-[40%] max-w-[45%]'>
                                                                                <h2 className='font-semibold md:text-xl text-left'>{x.title.slice(0, 15)}...</h2>
                                                                                <div className='md:flex items-center hidden'>
                                                                                    <span className='text-xl mr-3'>&times;</span>
                                                                                    Remove
                                                                                </div>
                                                                                <div className='flex items-center md:hidden rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-3 shadow-md'>
                                                                                    <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button><span className='font-extrabold'>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-6 py-5  flex-col text-xl h-[160px] max-w-[100%] items-center justify-center hidden md:table-cell">
                                                                        <div className='flex items-center gap-x-4 border-[1px] justify-between shadow-md w-[120px]'>
                                                                            <button className='w-full bg-black text-white rounded-lg text-sm px-2 py-2'>Add to cart</button>
                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">${x.price.toLocaleString()}</td>
                                                                    <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">$0</td>
                                                                    <td className="whitespace-nowrap pl-8 py-4 text-xl table-cell md:hidden text-center">
                                                                        <span className='text-right'>${x.price.toLocaleString()}</span> <br />
                                                                        <span className='mt-5 block text-3xl'>&times;</span>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    )
                }

            </div>
        </div>
    )
}

export default Dashboard