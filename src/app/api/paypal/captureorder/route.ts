import client from "@/src/Helpers/paypal";
import { NextRequest, NextResponse } from "next/server";
import paypal from '@paypal/checkout-server-sdk'
import { RequestData } from "next/dist/server/web/types";

export async function POST(req: NextRequest, _res: NextResponse) {
    const { order_ID } = await req.json()
    if (order_ID) return NextResponse.json({ error: "Invalid order_id!", message: `Please Provide order_price And User ID` }, { status: 400 });

    try {

        const PaypalClient = client()
        const request = new paypal.orders.OrdersCaptureRequest(order_ID)
        // request.requestBody({

        //     url:''
        // })
        const response = await PaypalClient.execute(request)
        if (!response) {
            return NextResponse.json({ message: "Some Error Occured at backend " + response, success: false }, { status: 500 });
        }
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