import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

const StripeForm = ({ total }: { total: number }) => {
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
        const { data } = await axios.post("/api/stripe", {
            data: { amount: total },
        });
        const clientSecret = data;
        if (!cardElement) return
        await stripe?.confirmCardPayment(clientSecret, {
            payment_method: { card: cardElement },
        });
    }
    return (
        <form onSubmit={onSubmit}>
            <CardElement />
            <button type="submit">Submit</button>
        </form>
    )
}

export default StripeForm