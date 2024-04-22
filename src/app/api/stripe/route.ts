import { payments } from "@paypal/checkout-server-sdk";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
    const { data } = await req.json();
    const { amount } = data;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.floor(Number(amount * 0.00086957)) * 100,
            currency: "USD",
        });
        const order = {
            secret: paymentIntent.client_secret,
            amount: Math.floor(Number(amount * 0.00086957)),
            id: paymentIntent.id,
            created_at: paymentIntent.created,
            currency: paymentIntent.currency,
            status: paymentIntent.status,
            payment_method_types: paymentIntent.payment_method_types,
            shipping:paymentIntent.shipping,
            description: paymentIntent.description,

        }
        return NextResponse.json({ success: true, data: order }, { status: 200 });
        
    } catch (error: any) {
        return new NextResponse(error, {
            status: 400,
        });
    }
}