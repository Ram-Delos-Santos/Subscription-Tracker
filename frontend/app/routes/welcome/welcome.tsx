import logo from './logo.png'
import { Navigate, useNavigate } from "react-router";

export function Welcome() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("./login" );
  };
  return (
    <main className="w-screen h-screen bg-gradient-to-b from-white to-[#FFE485] relative overflow-hidden">
      <div className="w-full fixed top-0 left-0 bg-white text-[#74CFDE] shadow-md z-50">
        <div className="max-w-7xl ml-5 mr-auto flex items-center justify-between px-2 py-3">
          <div className='flex items-center space-x-3'>
            <img src={logo} alt="Logo" className="h-10 w-10"/>
            <span className='text-3xl font-semibold'>SubPiece</span>
          </div>
          <div className='text-sm sm:text-base lg:text-xl ml-250 whitespace-nowrap text-black'>Track Your Subscriptions Seamlessly</div>
        </div> 
      </div>
      <div className='mt-30 px-6 flex flex-col'>
        <h1 className='text-3xl font-bold text-gray-800 text-center'>Welcome to Subpiece</h1>
        <p className='text-xl mt-5 text-black text-center'>Your one stop solution to manage all your subscriptions with ease and protection</p>
        <div className='ml-90 mt-15 flex flex-row'>
          <img src='https://plus.unsplash.com/premium_vector-1736944142257-97b07b0e44d3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Example Image" className="h-50 w-50 object-cover rounded-lg"/>
          <div className='flex flex-col'>
            <span className='text-lg text-black ml-50 mt-2'>Never forget a subscription again.</span>
            <span className='text-lg text-black ml-50 mt-2'>See where your money goes every month.</span>
            <span className='text-lg text-black ml-50 mt-2'>One dashboard. All your subscriptions.</span>
            <span className='text-lg text-black ml-50 mt-2'>Stay ahead of charges with smart reminders.</span>
            <span className='text-lg text-black ml-50 mt-2'>Take control of your recurring expenses.</span>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center mt-20'>
          <button className='w-40 bg-[#74CFDE] text-white px-10 py-2 rounded-2xl hover:bg-[#5fb6c8] hover:shadow-lg 
               transition duration-300 ease-in-out cursor-pointer'
          onClick={handleRedirect}
          >Login</button>
          <button className='w-40 bg-transparent text-black ml-10 border px-10 py-2 rounded-2xl border-[#74CFDE] hover:bg-white hover:shadow-lg 
               transition duration-300 ease-in-out cursor-pointer'>Sign Up</button>
        </div>
      </div>
    </main>
  );
}


