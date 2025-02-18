import React, { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate an API call
        try {
            // Replace with actual API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (email === 'user@example.com' && password === 'password') {
                setIsAuthenticated(true);
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 my-22 w-2xl max-w-4xl h-auto rounded-lg shadow-md bg-blue-200 text-black font-montserrat">
                <h2 className="text-4xl font-pacifico mb-8 text-center text-blue-400">Login</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F991%2F652%2Foriginal%2Fsign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg&f=1&nofb=1&ipt=620a122de2948ee9fd5d996719d7f04bd88c4660cde075304324834da6e29a0e&ipo=images"
                        alt="Login"
                        className="w-full md:w-1/2 h-auto rounded-2xl"
                    />
                    <form onSubmit={handleLogin} className="w-full md:w-1/2">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter registered Email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter your Password"
                                required
                            />
                        </div>
                        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
                        <div className="flex justify-center">

                        </div>
                    </form>

                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="my-6 mx-12 w-lg bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 disabled:bg-blue-300"
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </div>
        </div>
    );
};

export default Login;