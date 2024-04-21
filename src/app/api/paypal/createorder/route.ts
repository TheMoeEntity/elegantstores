import client from "@/src/Helpers/paypal";
import { NextRequest, NextResponse } from "next/server";
import paypal from '@paypal/checkout-server-sdk'

export async function POST(req: NextRequest, _res: NextResponse) {
    const { order_price, user_id } = await req.json()
    if (order_price || !user_id) return NextResponse.json({ error: "Invalid user id and order_price!", message: `Please Provide order_price And User ID` }, { status: 400 });

    try {
        const PaypalClient = client()
        const request = new paypal.orders.OrdersCreateRequest()
        request.headers['Prefer'] = 'return=representation'
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'NGN',
                        value: order_price + "",
                    },
                },
            ],
        })
        const response = await PaypalClient.execute(request)
        if (response.statusCode !== 201) {
            console.log("RES: ", response)
            return NextResponse.json({ message: "Some Error Occured at backend " + response, success: false }, { status: 500 });
        }


        const order = {}
        // Your Custom Code for doing something with order
        // Usually Store an order in the database like MongoDB

        return NextResponse.json({ success: true, data: { order } }, { status: 200 });
    }
    catch (err) {
        console.log("Err at Create Order: ", err)
        return NextResponse.json({ message: "Could not find user" + err, success: false }, { status: 500 });
    }
}