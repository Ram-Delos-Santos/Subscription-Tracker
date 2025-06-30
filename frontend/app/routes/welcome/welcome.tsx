export function Welcome() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full w-full flex">
        <div className="hidden md:flex w-1/2 items-center justify-center p-10 text-white">
          <div>
            <h1 className="text-7xl font-bold mb-4">Track Your Subscriptions</h1>
            <p className="text-2xl">Simple. Clean. Efficient.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 ml-auto flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl min-h-[85vh] flex flex-col justify-center">

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Welcome Back!</h2>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              />
              <button
                type="submit"
                className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-900 transition duration-300"
              >
                Login
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-black text-black py-3 rounded-lg bg-white hover:bg-gray-400 transition duration-300"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Login with Google
              </button>
              <p className="mt-6 text-center text-base text-gray-800">
              No account yet?{" "}
              <a href="/signup" className="text-blue-600 hover:underline text-base">
                Sign Up here
              </a>
            </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}


