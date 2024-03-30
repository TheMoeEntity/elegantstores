import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("../../components/LoginPage"));

const Login = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <LoginPage />
        </main>
    )
}
export default Login