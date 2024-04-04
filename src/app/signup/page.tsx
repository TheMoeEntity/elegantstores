import dynamic from "next/dynamic";
const SignupPage = dynamic(() => import("../../components/SignupPage"));

const Signup =  async() => {

    return (
        <main className="max-w-7xl mx-auto">
            <SignupPage />
        </main>
    )
}
export default Signup