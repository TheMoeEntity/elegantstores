import dynamic from "next/dynamic";
const ContactPage = dynamic(() => import("../../components/ContactPage"));

const Contact = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <ContactPage />
        </main>
    )
}

export default Contact