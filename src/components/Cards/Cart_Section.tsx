'use client'
import OrderComplete from '@/src/components/Cards/orderComplete'
import Image from "next/image"
import { motion } from 'framer-motion'
import { ChangeEvent, FormEvent, useContext, useEffect, useMemo, useState } from "react"
import TextTransition, { presets } from 'react-text-transition';
import Link from 'next/link'
import empty from '../../../public/images/empty-cart (1).png'
import { useSearchParams } from 'next/navigation'
import { useStore } from '@/src/Helpers/zustand'
import { Helpers } from '@/src/Helpers'
import { enqueueSnackbar } from 'notistack'
import { addressType } from '@/src/Helpers/types'
import { userContext } from '@/src/Helpers/ContextAPI/usercontext'
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from './StripeForm'
import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'
import getStripe from '@/src/Helpers/stripe'
import toast from 'react-hot-toast'
// import { PayPalButton } from 'react-paypal-button-v2'



const Cart_Section = ({ notAuth, countries, mainstripe, address, email }: { mainstripe: any, email: string, address: addressType, countries: { name: string; idd: { root: string, suffixes: string[] }; nameAndSymbol: string; population: number; }[] | [], notAuth: boolean }) => {
    const searchParams = useSearchParams()
    const { cart, removeFromCart, updateItemQuantity } = useStore()
    const { user } = useContext(userContext)
    const removeAction = (id: string) => {
        removeFromCart(id);
    }
    const produceExtraCost = (): number => {
        return shippingOptions == 0 ? 0 : shippingOptions == 1 ? 3200 : (total * 0.1730)
    }
    const total = useMemo(
        () => {
            return Helpers.CalculateTotal(cart)
        },
        [cart],
    )
    const [stripePromise, _setStripePromise] = useState(() => getStripe())
    const [couponStatus, setCouponStatus] = useState('')
    const [_quantity, setQuantity] = useState<number>(1)
    const [step, setStep] = useState<number>(0)
    const [shippingOptions, setShippingOptions] = useState<number>(0)
    const [withCoupon, setWithCoupon] = useState<number>(total)
    const checkout = searchParams.get('checkout')
    const [orderplaced, setOrderPlaced] = useState<boolean>(false)
    const [allCountries, setAllCountries] = useState(countries)
    const [loadError, setLoadError] = useState('')
    const [selectedOption, setSelectedOption] = useState<String>("");
    const [paymentOption, setPaymentOption] = useState<number>(0)

    const onOptionChangeHandler = (
        event: ChangeEvent<HTMLSelectElement>
    ): void => {
        const data = event.target.value
        console.log("User is from - ", event.target.value);
        setSelectedOption(data);
    };
    useEffect(() => {

    }, [selectedOption])
    useEffect(() => {
        setAllCountries(countries)
        if (allCountries.length === 0) {
            setLoadError("Error loading all countries")
        }
    }, [countries])

    useEffect(() => {
        if (checkout === 'true') {
            setStep(1)
        }
        // emptyCart()
    }, [])
    const couponAction = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (total != withCoupon) {
            setCouponStatus("Coupon has already been applied")
            enqueueSnackbar(`Coupons can only be used once ode!!`, {
                variant: "error"
            })
            return
        }
        setWithCoupon(Helpers.applyCouponCode(total, (e.target[0 as unknown as keyof typeof e.target] as unknown as HTMLInputElement
        ).value, setCouponStatus, enqueueSnackbar))
    }
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <div className='mx-auto w-1/2 flex items-center justify-center'>
                <h1 className='text-center py-20 text-4xl font-semibold'>
                    <TextTransition springConfig={presets.wobbly}>
                        {
                            step === 0 ? "Cart" : step === 1 ? "Checkout" : "Complete"
                        }
                    </TextTransition>
                </h1>
            </div>

            <div className='mx-auto lg:w-[60%] md:w-[90%] md:pl-0 pl-5 flex flex-wrap md:overflow-x-visible overflow-x-scroll justify-center  no-scrollbar'>
                <div className='border-[#DEE1E6] text-xl whitespace-nowrap  pb-0.3 mb-[32px] w-full md:w-fit mx-auto flex '>
                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${step === 0 ? ' border-black ' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${step === 0 ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>1</span>
                        <button onClick={() => setStep(0)}>Shopping cart</button>
                    </div>

                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${step === 1 ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${step === 1 ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>2</span>
                        <button onClick={() => setStep(1)}>Checkout details</button>
                    </div>
                    <div className={`gap-x-3 flex items-center mr-7 text-left px-2 border-b-[2px] pb-2 ${step === 2 ? 'border-black' : 'text-[#0D141F99] border-transparent'}  w-fit`}>
                        <span className={`w-6 h-6 text-white ${step === 2 ? 'bg-black' : 'bg-[#0D141F99]'} items-center justify-center flex rounded-full text-xs`}>3</span>
                        <button disabled={(notAuth) ? true : orderplaced ? true : false} onClick={() => setStep(2)}>Order complete</button>
                    </div>
                </div>
            </div>
            <div className="w-[85%] mx-auto mb-10">
                {
                    step === 0 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
                            <div className='flex-1 flex-grow-[1.75]'>
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div className="overflow-hidden">
                                                {
                                                    cart.length == 0 && (
                                                        <div className={'flex flex-col items-center mx-auto w-full lg:w-[70%]'}>
                                                            <div className="lg:w-[75%] w-full mx-auto flex items-center justify-center">
                                                                <Image
                                                                    src={empty}
                                                                    alt="Cart is empty"
                                                                    quality={100}
                                                                    sizes={'100vw'}
                                                                    className={`object-cover w-full h-auto`}
                                                                />
                                                            </div>
                                                            <h4 className='md:text-2xl font-semibold text-center'>Darn it, cart is empty. <Link className='underline md:text-xl text-[#377DFF]' href={'/shop'}>Keep shopping.</Link></h4>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    cart.length > 0 && (
                                                        <table
                                                            className="min-w-full text-left text-sm font-light text-surface border-spacing-5">
                                                            <thead
                                                                className="border-b border-neutral-200 bg-white font-semibold">
                                                                <tr>
                                                                    <th scope="col" className="px-6 py-4 w-[55%]" colSpan={2}>Product</th>
                                                                    <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Quantity</th>
                                                                    <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Price</th>
                                                                    <th scope="col" className="px-6 py-4 text-center hidden md:table-cell">Subtotal</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    cart.map((x) => (
                                                                        <tr key={x.item.id} className="border-b border-neutral-200 border-b-gray-200 h-auto">
                                                                            <td className="px-0 min-w-[65%] md:min-w-[55%] md:max-w-[55%] py-0 font-medium align-top" colSpan={2}>
                                                                                <div className="w-full h-[190px] md:min-h-[160px] flex items-center gap-x-4 md:gap-x-6">
                                                                                    <div className="md:basis-[40%] w-full md:min-w-[auto] min-h-[160px] relative">
                                                                                        <Image
                                                                                            src={x.item.images[0]}
                                                                                            alt="product main image"
                                                                                            quality={100}
                                                                                            sizes={'100vw'}
                                                                                            fill
                                                                                            className="object-contain w-full h-auto"
                                                                                        />
                                                                                    </div>
                                                                                    <div className='flex flex-col gap-y-4 justify-center basis-[40%] max-w-[45%]'>
                                                                                        <h2 className='font-extrabold text-left'>{x.item.title}</h2>
                                                                                        <h2 className='text-sm text-gray-400 text-left whitespace-nowrap'>Color: {x.item.colors[0]} | {x.item.sizes[0]}</h2>
                                                                                        <button onClick={() => removeAction(x.item.id)} className='md:flex items-center hidden'>
                                                                                            <span className='text-xl mr-3'>&times;</span>
                                                                                            Remove
                                                                                        </button>
                                                                                        <div className='flex items-center md:hidden rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-3 shadow-md'>
                                                                                            <button onClick={() => updateItemQuantity(x.item.id, 'reduce')}>-</button><span className='font-extrabold'>{x.quantity}</span><button onClick={() => updateItemQuantity(x.item.id, 'add')}>+</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="px-6 py-5  flex-col text-xl h-[160px] max-w-[100%] items-center justify-center hidden md:table-cell">
                                                                                <div className='flex items-center rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-6 shadow-md w-[120px]'>
                                                                                    <button onClick={() => updateItemQuantity(x.item.id, 'reduce')}>-</button><span className='font-extrabold'>{x.quantity}</span><button onClick={() => updateItemQuantity(x.item.id, 'add')}>+</button>
                                                                                </div>
                                                                            </td>
                                                                            <td className="whitespace-nowrap px-6 py-4 text-xl hidden md:table-cell">₦{(x.item.price * x.quantity).toLocaleString()}</td>
                                                                            <td className="whitespace-nowrap px-6 font-extrabold text-xl py-4 hidden md:table-cell">
                                                                                <TextTransition springConfig={presets.wobbly}>
                                                                                    ₦{(x.item.price * x.quantity).toLocaleString()}
                                                                                </TextTransition>

                                                                            </td>
                                                                            <td className="whitespace-nowrap pl-8 py-4 text-xl table-cell md:hidden text-center">
                                                                                <span className='text-right'>₦{(x.item.price * x.quantity).toLocaleString()}</span> <br />
                                                                                <span className='mt-5 block text-3xl'>
                                                                                    <button onClick={() => removeAction(x.item.id)}>
                                                                                        &times;
                                                                                    </button>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                cart.length > 0 && (
                                    <div className='flex-1 border-[1px] md:w-[60%] max-w-full border-black rounded-md px-4 py-5 flex flex-col gap-y-5'>
                                        <h2 className='font-semibold text-2xl'>Cart summary</h2>
                                        <div className={'flex rounded-md justify-between items-center px-4 border-[1px] border-black trans ' + (shippingOptions == 0 && 'bg-[#F3F5F7]')}>
                                            <div className='flex items-center gap-x-3 py-3'>
                                                <div className='w-4 h-4 flex items-center justify-center border-[1px] rounded-full border-black'>
                                                    <div className={'w-2 h-2 rounded-full trans ' + (shippingOptions === 0 ? 'bg-black' : 'bg-transparent')}>

                                                    </div>
                                                </div>
                                                <button onClick={() => setShippingOptions(0)}>Free Shipping</button>
                                            </div>
                                            <span>₦0.00</span>
                                        </div>
                                        <div className={'flex rounded-md justify-between items-center px-4 border-[1px] border-black trans ' + (shippingOptions == 1 && 'bg-[#F3F5F7]')}>
                                            <div className='flex items-center gap-x-3 py-3'>
                                                <div className='w-4 h-4 flex items-center justify-center border-[1px] rounded-full border-black'>
                                                    <div className={'w-2 h-2 rounded-full trans ' + (shippingOptions === 1 ? 'bg-black' : 'bg-transparent')}>

                                                    </div>
                                                </div>
                                                <button onClick={() => setShippingOptions(1)}>Express shipping</button>
                                            </div>
                                            <span className='text-red-500'>+ ₦3400</span>
                                        </div>
                                        <div className={'flex rounded-md justify-between items-center px-4 border-[1px] border-black trans ' + (shippingOptions == 2 && 'bg-[#F3F5F7]')}>
                                            <div className='flex items-center gap-x-3 py-3'>
                                                <div className='w-4 h-4 flex items-center justify-center border-[1px] rounded-full border-black'>
                                                    <div className={'w-2 h-2 rounded-full trans ' + (shippingOptions === 2 ? 'bg-black' : 'bg-transparent')}>

                                                    </div>
                                                </div>
                                                <button onClick={() => setShippingOptions(2)}>Pick up</button>
                                            </div>
                                            <span className='text-red-500'>+ 17.30%</span>
                                        </div>
                                        <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                                            <div className='flex gap-x-3 py-3'>
                                                Subtotal
                                            </div>

                                            <TextTransition springConfig={presets.wobbly}>
                                                ₦{total.toLocaleString()}
                                            </TextTransition>

                                        </div>
                                        <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                                            <h2 className='flex gap-x-3 py-3 text-xl font-semibold'>
                                                Total
                                            </h2>
                                            <TextTransition springConfig={presets.wobbly}>
                                                ₦{(total + produceExtraCost()).toLocaleString()}
                                            </TextTransition>
                                        </div>
                                        <div>
                                            <button onClick={() => setStep(1)} className='bg-black text-white w-full py-3 rounded-md'>Checkout</button>
                                        </div>
                                    </div>
                                )
                            }

                        </motion.div>
                    )
                }
                {
                    step === 1 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'anticipate' }}
                            className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
                            <div className='flex-grow-[1.7] md:min-w-[50%] lg:min-w-[60%] gap-y-10 flex flex-col'>
                                <div className='border-black border-[1px] rounded-md px-8 py-1'>
                                    <form className="mt-5 flex w-full flex-col gap-[20px] pb-12">
                                        <div className='relative w-full my-7 flex flex-col gap-y-12'>
                                            <h2 className='font-semibold text-2xl'>Contact information</h2>
                                            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">First name</label>
                                                    <input placeholder="Your first name" defaultValue={user.userData.fullName} type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">Surname</label>
                                                    <input placeholder="Your surname" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Phone number</label>
                                                    <input defaultValue={address?.billing?.phone || ''} placeholder="Your phone number" type="phone" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Email:</label>
                                                    <input defaultValue={email || ''} placeholder="Your Email address" type="email" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className='border-black border-[1px] rounded-md px-8 py-4'>
                                    <form className="mt-5 flex w-full flex-col gap-[20px] pb-12">
                                        <div className='relative w-full my-7 flex flex-col gap-y-12'>
                                            <h2 className='font-semibold text-2xl'>Shipping Address</h2>
                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Street address</label>
                                                    <input defaultValue={address?.shipping?.address || ''} placeholder="Your street address" type="address" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Country</label>
                                                    {/* <input placeholder="Your street address" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" /> */}
                                                    <select
                                                        onChange={e => onOptionChangeHandler(e)}
                                                        defaultValue={'Nigeria 🇳🇬'}
                                                        className="custom-select mt-5 outline-none bg-transparent border-gray-300 border-b-[1px]"
                                                        style={{ width: "100%", padding: '10px 10px', color: 'gray', border: '1px solid #eef5ff' }}
                                                    >
                                                        {
                                                            allCountries.map((country, i) => (<option key={i}>{country.nameAndSymbol}</option>))
                                                        }
                                                    </select>
                                                </div>
                                                <div>
                                                    <div className='w-full mt-3 pt-3 my-0 flex justify-end text-red-700'>{loadError}</div>
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Phone number</label>
                                                    <input defaultValue={address?.shipping?.phone || ''} placeholder="Your phone number" type="phone" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>

                                            </div>
                                            <div className=''>
                                                <div className='flex flex-col'>
                                                    <label htmlFor="block">Town / City</label>
                                                    <input placeholder="Your town" type="phone" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">State</label>
                                                    <input placeholder="state" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                                <div className='md:w-[48%] flex flex-col'>
                                                    <label htmlFor="block">Zip code</label>
                                                    <input placeholder="Your zipcode" type="text" className="py-[10px] bg-transparent px-[10px] w-full border-gray-300 border-b-[1px]" />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                                <div className='flex-1 border-[1px] max-w-full border-black rounded-md px-4 md:px-8 py-5 flex flex-col gap-y-5'>
                                    <h2 className='font-semibold text-2xl'>Payment method</h2>
                                    <div className='flex rounded-md bg-[#F3F5F7] justify-between flex-col px-4 border-[1px] border-black'>
                                        <div className='flex items-center gap-x-3 py-3'>
                                            <div className='w-4 h-4 flex items-center justify-center border-[1px] rounded-full border-black'>
                                                <div className={'w-2 h-2 rounded-full trans ' + (paymentOption === 1 ? 'bg-black' : 'bg-transparent')}>

                                                </div>
                                            </div>
                                            <button onClick={() => setPaymentOption(1)}>Stripe</button>
                                        </div>
                                        <div
                                            className={'overflow-hidden trans ' + (paymentOption === 1 ? 'max-h-fit py-1 h-fit' : 'max-h-0 h-0 py-0')}
                                        >
                                            <Elements stripe={stripePromise}>
                                                <StripeForm setStep={setStep} setOrderPlaced={setOrderPlaced} toast={toast} total={total} />
                                            </Elements>
                                            <div>
                                                {/* <PayPalButton
                                                amount={total}
                                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                onSuccess={(details: any, data: any) => {
                                                    alert("Transaction completed by " + details.payer.name.given_name);

                                                    // OPTIONAL: Call your server to save the transaction
                                                    return fetch("/paypal-transaction-complete", {
                                                        method: "post",
                                                        body: JSON.stringify({
                                                            orderId: data.orderID
                                                        })
                                                    });
                                                }}
                                                options={{
                                                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                                                    currency: "USD"
                                                }}
                                            /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex rounded-md bg-[#F3F5F7] justify-between items-center px-4 border-[1px] border-black'>
                                        <div className='flex gap-x-3 items-center py-3'>
                                            <div className='w-4 h-4 flex items-center justify-center border-[1px] border-black rounded-full'>
                                                {
                                                    false && (<div className='w-2 h-2 bg-black rounded-full'></div>)
                                                }
                                            </div>
                                            <div>PayStack</div>
                                        </div>
                                    </div>
                                    <div className='flex rounded-md bg-[#F3F5F7] justify-between items-center px-4 border-[1px] border-black'>
                                        <div className='flex gap-x-3 items-center py-3'>
                                            <div className='w-4 h-4 flex items-center justify-center border-[1px] border-black rounded-full'>
                                                {
                                                    false && (<div className='w-2 h-2 bg-black rounded-full'></div>)
                                                }
                                            </div>
                                            <div>Pay with credit card</div>
                                        </div>
                                    </div>
                                    <div className='flex rounded-md bg-[#F3F5F7] justify-between items-center px-4 border-[1px] border-black'>
                                        <div className='flex items-center gap-x-3 py-3'>
                                            <div className='w-4 h-4 flex items-center justify-center border-[1px] rounded-full border-black'>
                                                <div className={'w-2 h-2 rounded-full trans ' + (paymentOption === 3 ? 'bg-black' : 'bg-transparent')}>
                                                </div>
                                            </div>
                                            <button onClick={() => setPaymentOption(3)}>Flutterwave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-[1px] border-black h-fit rounded-md px-4 py-5 flex flex-col gap-y-5 md:min-w-[39%] lg:min-w-[30%]'>
                                <h2 className='font-semibold text-2xl'>Order summary</h2>
                                {
                                    cart.map((x, i) => (
                                        <div key={i} className='flex items-between'>
                                            <div>
                                                <div className="w-full h-[190px] md:h-[160px] flex items-center gap-x-4 md:gap-x-6">
                                                    <div className="md:basis-[40%] min-w-[90px] sm:min-w-[70px] md:min-w-[120px] min-h-[120px] relative">
                                                        <Image
                                                            src={x.item.images[0]}
                                                            alt="product main image"
                                                            quality={100}
                                                            fill
                                                            sizes={'100vw'}
                                                            className="object-contain w-full h-auto"
                                                        />
                                                    </div>
                                                    <div className='flex flex-col gap-y-4 justify-center basis-[40%] max-w-[45%]'>
                                                        <h2 className='font-semibold text-left'>{x.item.title.slice(0, 13) + "..."}</h2>
                                                        <h2 className='text-sm text-gray-400 text-left whitespace-nowrap'>Color: {x.item.colors[0]}</h2>
                                                        <h2 className='text-sm text-gray-400 text-left whitespace-nowrap'>Size: {x.item.sizes[0]}</h2>
                                                        <div className='md:flex items-center hidden'>
                                                            <span className='text-xl mr-3'>&times;</span>
                                                            <button onClick={() => removeAction(x.item.id)}>Remove</button>
                                                        </div>
                                                        <div className='flex items-center md:hidden rounded-lg gap-x-4 border-[1px] border-black justify-between py-1 px-3 shadow-md'>
                                                            <button onClick={() => updateItemQuantity(x.item.id, 'reduce')}>-</button><span className='font-extrabold'>{x.quantity}</span><button onClick={() => updateItemQuantity(x.item.id, 'add')}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="whitespace-nowrap align-middle pl-8 pt-10 text-xl table-cell text-center">
                                                <span className='text-right '>₦{x.item.price.toLocaleString()}</span> <br />
                                                <span className='mt-5 md:hidden text-3xl block'>&times;</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                <hr />
                                <form onSubmit={e => couponAction(e)} className='flex gap-x-3 w-full items-between justify-between'>
                                    <input placeholder='coupon code' type="text" readOnly={notAuth ? true : cart.length === 0 ? true : false} className='py-2 border-[1px] outline-none rounded-md pl-2 w-[60%]' />
                                    <button type='submit' className='bg-black text-white w-[35%] rounded-md py-2 disabled:bg-slate-300' disabled={notAuth ? true : cart.length === 0 ? true : false} >Apply</button>
                                </form>
                                <div className='pl-2 text-sm py-2'>
                                    <TextTransition springConfig={presets.wobbly}>
                                        {couponStatus}
                                    </TextTransition>
                                </div>
                                <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                                    <div className='flex gap-x-3 py-3'>
                                        Subtotal
                                    </div>
                                    <span>₦{withCoupon.toLocaleString()}</span>
                                </div>
                                <div className='flex rounded-md justify-between items-center px-4 border-b-[1px] border-gray-200'>
                                    <h2 className='flex gap-x-3 py-3 text-xl font-semibold'>
                                        Total
                                    </h2>
                                    <span>
                                        ₦{(total + produceExtraCost()).toLocaleString()}
                                    </span>
                                </div>
                                <div>
                                    <button disabled={notAuth ? true : cart.length === 0 ? true : false} className='bg-black text-white w-full py-3 rounded-md disabled:bg-slate-300'>Place order</button>
                                </div>
                                {
                                    notAuth === true && (
                                        <div>
                                            You need to be signed in to checkout <Link href='/login?redirect=checkout' className='underline font-semibold text-blue-900'>sign in</Link>
                                        </div>
                                    )
                                }
                            </div>
                        </motion.div>
                    )
                }
                {
                    step === 2 && (
                        <motion.div
                            initial={{ x: step >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.35, ease: 'anticipate', }}
                            className='flex flex-col gap-x-5 lg:flex-row md:items-center lg:items-start gap-y-7'>
                            <OrderComplete cart={cart} />
                        </motion.div>
                    )
                }

            </div>
        </main>
    )
}

export default Cart_Section