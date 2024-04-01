import styles from './cards.module.css'

const OrderComplete = () => {
    return (
        <div className={`${styles.receivedOrderContainer} text-center py-5`}>
            <p className="font-weight-bold h3 mb-0">
                Your Order Has Been Received! 🥳
            </p>
            <i className="fa-solid fa-check-mark" />
            <p className="mt-2">
                We&#39;ve recieved your order and will be shipping it to you as soon as
                possible.
            </p>

            <button
                className="bg-black text-white rounded-md mt-8"
                style={{ padding: "10px", fontSize: "small" }}
                onClick={() => {
                    window.location.href = "/myaccount";
                }}
            >
                Purchase History
            </button>
        </div>
    );
}

export default OrderComplete