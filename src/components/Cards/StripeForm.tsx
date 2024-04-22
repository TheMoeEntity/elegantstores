import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

const StripeForm = ({ total, toast, setOrderPlaced, setStep }: { setOrderPlaced: (bool: boolean) => void, setStep: (step: number) => void, toast: any, total: number }) => {
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
        } catch (error) {
            toast.error(error)
            console.log(error);
        }
        const body = {
            data: { amount: total },
        }
        // try {
        //     const data = await axios.post("/api/stripe", body)

        //     if (data.data.success) {
        //         toast.success("Payment successful")
        //         setOrderPlaced(true)
        //         setStep(2)
        //         const clientSecret = data.data.data.secret;
        //         await stripe?.confirmCardPayment(clientSecret, {
        //             payment_method: { card: cardElement! },
        //         });
        //     }
        // } catch (error) {
        //     console.log(error)
        //     // toast.error(error)
        // }

        await fetch(('/api/stripe'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(async res => {
                const isJson = res.headers.get('content-type')?.includes('application/json')
                const data = isJson ? await res.json() : null

                if (!res.ok) {
                    const error = (data && data.message) || res.status;
                    toast.error(
                        error
                    );
                    return Promise.reject(error)

                } else if (res.ok) {
                    toast.success("Payment successful")
                    setOrderPlaced(true)
                    setStep(2)
                    const clientSecret = data.data.data.secret;
                    await stripe?.confirmCardPayment(clientSecret, {
                        payment_method: { card: cardElement! },
                    });
                    return data
                }
            })
            .catch(err => {
                // toast.error(err)
                console.log(err)
            })




    }
    return (
        <form onSubmit={async (e) => await onSubmit(e)}>
            <CardElement />
            <button type="submit" className="w-full text-black border-[1px] border-black py-2 my-5 rounded-lg">Pay with creditcard</button>
        </form>
    )
}

export default StripeForm