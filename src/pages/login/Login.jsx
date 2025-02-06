import LoginForm from "./components/LoginForm";

const Login = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
                    <LoginForm></LoginForm>
                </div>
            </div>
        </>
    )
};

export default Login;