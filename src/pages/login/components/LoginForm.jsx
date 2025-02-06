const LoginForm = () => {
    return (
        <>
            <form className="flex flex-col space-y-4">
                <label className="block text-gray-700 font-medium mb-1">
                    Usuario:
                </label>
                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                <label className="block text-gray-700 font-medium mb-1">
                    Contraseña:
                </label>
                <input type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300">
                    Iniciar Sesión
                </button>
            </form>
        </>
    );
};

export default LoginForm;