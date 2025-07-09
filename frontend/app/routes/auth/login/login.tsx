import logo from '../../../images/logo.png';
import bg from '../../../images/login-bg.jpg'
import { Navigate, useNavigate } from "react-router";
import { useState } from 'react';

export default function LoginPage() {
    const navigate = useNavigate();
    const handleRedirecttoSignUp = () => {
        navigate("/signup")
    };
    const handleRedirecttoHomeTemp = () => {
        navigate("/home")
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <main className="w-screen h-screen relative overflow-hidden">
            <div className="absolute inset-0 blur-xl scale-110 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
            <div className="relative z-10 flex items-center justify-center h-screen">
                <div className="bg-white py-8 px-15 rounded-2xl flex flex-col shadow-lg shadow-black">
                    <div className='flex justify-center'>
                        <img src={logo} alt="Logo" className="h-40 w-50" />
                    </div>
                    <h1 className='text-[#74CFDE] text-center font-bold text-3xl'>SubPiece</h1>
                    <p className='text-[#9DCD5A] font-semibold text-xs mb-8 text-center'>Your subs, perfectly placed.</p>
                    <h1 className="text-black text-xl font-bold mb-2 ml-2">Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="mb-3 text-black w-full bg-gray-300 mt-1 pl-4 pr-10 py-2 placeholder-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            className="w-full text-black bg-gray-300 mt-1 pl-4 pr-10 py-2 placeholder-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-3 flex items-center"
                        >
                            <img
                                src={showPassword
                                    ? "https://www.svgrepo.com/show/436161/hide-close-eye-eye.svg"
                                    : "https://www.svgrepo.com/show/511132/show.svg"}
                                alt="Toggle password visibility"
                                className="h-5 w-5"
                            />
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <button className='cursor-pointer bg-[#74CFDE] rounded-3xl w-60 py-2 mt-4 px-5 hover:bg-[#5fb6c8] hover:shadow-lg transition duration-300 ease-in-out'
                        onClick={handleRedirecttoHomeTemp}>Login</button>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            className="cursor-pointer flex items-center justify-center gap-2 w-60 mt-4 px-5 bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded-3xl hover:bg-gray-100 hover:shadow-lg duration-300 ease-in-out transition"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google logo"
                                className="h-5 w-5"
                            />
                            <span>Login with Google</span>
                        </button>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <p className='text-[#9DCD5A] text-sm font-semibold hover:underline hover:text-[#7FBF3E] cursor-pointer'>Forgot your password?</p>
                    </div>
                    <div className='flex flex-row items-center justify-center mt-6'>
                        <span className='text-black text-sm font-bold'>Don't have an account?</span>
                        <span className='text-[#9DCD5A] text-sm font-semibold ml-1 hover:underline hover:text-[#7FBF3E] cursor-pointer'
                            onClick={handleRedirecttoSignUp}>Sign Up!</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
