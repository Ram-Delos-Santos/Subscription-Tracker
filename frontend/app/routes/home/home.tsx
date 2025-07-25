import logo from '../../images/logo.png'
import profilePicTempBlue from '../../icons/profileBlue.png'
import profilePicTempWhite from '../../icons/profileWhite.png'
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    useEffect(() => {
    document.title = "Dashboard";
    }, []);

    return (
        <main className="w-screen h-screen bg-gradient-to-b from-[#74CFDE] to-white relative overflow-hidden">
            <div className="w-full h-20 fixed flex items-center top-0 left-0 bg-white text-[#74CFDE] shadow-md z-50">
                <div className="max-w-7xl ml-5 mr-auto flex items-center justify-between px-2 py-3">
                    <div className='flex items-center space-x-3'>
                        <img src={logo} alt="Logo" className="h-10 w-10" />
                        <span className='text-3xl font-semibold cursor-pointer'
                            onClick={() => window.location.reload}>SubPiece</span>
                        <div className='ml-375 px-10 border border-grey-200 py-2 rounded-lg flex justify-center items-center space-x-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#74CFDE] hover:text-white hover:scale-105"'
                            onMouseEnter={() => setIsProfileHovered(true)}
                            onMouseLeave={() => setIsProfileHovered(false)}>
                            <img src={isProfileHovered ? profilePicTempWhite : profilePicTempBlue} alt='Profile Picture' className='h-10 w-10'></img>
                            <span className='font-semibold'>Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}