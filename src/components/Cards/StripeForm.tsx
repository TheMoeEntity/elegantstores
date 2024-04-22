import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

const StripeForm = ({ total, toast, setOrderPlaced, setStep }: { setOrderPlaced: (bool:boolean) => void, setStep: (step:number) => void, toast: any, total: number }) => {
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
        } catch (error) {
            console.log(error);
        }
        const data = await axios.post("/api/stripe", {
            data: { amount: total },
        }).then(x => {
            console.log(x)
            toast.success("Payment successful")
            setOrderPlaced(true)
            setStep(2)
            return x
        });
        if (!data.data) {
            console.log(data.data)
        }
        const clientSecret = data.data.data.secret;
        await stripe?.confirmCardPayment(clientSecret, {
            payment_method: { card: cardElement! },
        });

    }
    return (
        <form onSubmit={async (e) => await onSubmit(e)}>
            <CardElement />
            <button type="submit" className="w-full text-black border-[1px] border-black py-2 my-5 rounded-lg">Pay with creditcard</button>
        </form>
    )
}

export default StripeForm