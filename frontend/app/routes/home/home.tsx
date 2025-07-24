import logo from '../../images/logo.png'

export default function HomePage() {
    return (
        <main className="w-screen h-screen bg-gradient-to-b from-[#6DB1C9] to-white relative overflow-hidden">
            <div className="w-full h-20 fixed flex items-center top-0 left-0 bg-white text-[#74CFDE] shadow-md z-50">
                <div className="max-w-7xl ml-5 mr-auto flex items-center justify-between px-2 py-3">
          <div className='flex items-center space-x-3'>
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className='text-3xl font-semibold'>SubPiece</span>
          </div>
        </div>
            </div>
        </main>
    )
}