import logo from '../../images/logo.png'
import notifIcon from '../../icons/notif.png'
import dashIcon from '../../icons/dash.png'
import gearIcon from '../../icons/gear.png'
import { Navigate, useNavigate } from "react-router";

export function Welcome() {
  const navigate = useNavigate();
  const handleRedirecttoLogin = () => {
    navigate("./login");
  };
  const handleRedirecttoSignUp = () => {
    navigate("./signup");
  };
  return (
    <main className="w-screen h-screen bg-gradient-to-b from-white to-[#FFE485] relative overflow-hidden">
      <div className="w-full h-20 fixed flex items-center top-0 left-0 bg-white text-[#74CFDE] shadow-md z-50">
        <div className="max-w-7xl ml-5 mr-auto flex items-center justify-between px-2 py-3">
          <div className='flex items-center space-x-3'>
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className='text-3xl font-semibold'>SubPiece</span>
          </div>
          <div className='text-sm sm:text-base lg:text-xl ml-340 whitespace-nowrap font-semibold text-black'>Track Your Subscriptions Seamlessly</div>
        </div>
      </div>
      <div className='mt-30 px-6 flex flex-col'>
        <h1 className='text-5xl font-bold text-gray-800 text-center'>Welcome to SubPiece!</h1>
        <p className='text-xl mt-5 text-black text-center'>Your one stop solution to manage all your subscriptions with ease and protection</p>
        <div className='ml-75 mt-15 flex gap-x-8 flex-row'>
          <div className='w-100 py-5 flex flex-col bg-gray-50 border border-black rounded-md'> 
              <img src={notifIcon} className='w-40 h-40 self-center'></img>
              <span className='text-lg font-bold text-center text-black mt-2'>Never forget a subscription again.</span>
          </div>
          <div className='w-100 py-5 flex flex-col bg-gray-50 border border-black rounded-md'> 
              <img src={dashIcon} className='w-40 h-40 self-center'></img>
              <span className='text-lg font-bold text-center text-black mt-2'>One dashboard. All your subscriptions.</span>
          </div>
          <div className='w-100 py-5 flex flex-col bg-gray-50 border border-black rounded-md'> 
              <img src={gearIcon} className='w-40 h-40 self-center'></img>
              <span className='text-lg font-bold text-center text-black mt-2'>Take control of your recurring expenses.</span>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center mt-20'>
          <button className='w-40 bg-[#74CFDE] text-white px-10 py-2 rounded-2xl hover:bg-[#5fb6c8] hover:shadow-lg 
               transition duration-300 ease-in-out cursor-pointer'
            onClick={handleRedirecttoLogin}
          >Login</button>
          <button className='w-40 bg-transparent text-black ml-10 border px-10 py-2 rounded-2xl border-[#74CFDE] hover:bg-white hover:shadow-lg 
               transition duration-300 ease-in-out cursor-pointer'
            onClick={handleRedirecttoSignUp}>Sign Up</button>
        </div>
      </div>
    </main>
  );
}


