import checkoutNodeJssdk from '@paypal/checkout-server-sdk'

const configureEnvironment = function () {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!
    const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_SECRET!

    return process.env.NODE_ENV === 'production'
        ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
        : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret)
}

const client =  ()=> {
    return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default client