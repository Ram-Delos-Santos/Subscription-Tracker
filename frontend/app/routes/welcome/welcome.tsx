import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground: Two columns */}
      <div className="relative z-10 h-full w-full flex">
        {/* LEFT: Optional text or leave empty */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10 text-white">
          <div>
            <h1 className="text-4xl font-bold mb-4">Track Your Subscriptions</h1>
            <p className="text-lg">Simple. Clean. Efficient.</p>
          </div>
        </div>

        {/* RIGHT: Login Panel */}
        <div className="w-full md:w-1/2 ml-auto flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-xl min-h-[85vh] flex flex-col justify-center">

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Welcome Back</h2>

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
                className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

  );
}


