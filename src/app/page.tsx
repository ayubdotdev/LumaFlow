import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col overflow-hidden"
      style={{ backgroundImage: 'url("/bgfinal.png")' }}
    >
      {/* Navbar */}
      <nav className="grid grid-cols-[1fr_auto_1fr] items-center max-w-7xl mx-auto px-8 py-6 w-full">
        <div className="flex justify-start pl-31">
          <div className="text-white font-bold text-xl tracking-tight">
            LumaFlow
          </div>
        </div>

        {/* Centered Nav Links */}
        <ul className="flex justify-center space-x-10 text-white/80 font-medium">
          <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Workflows</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
        </ul>

        <div className="flex justify-end pr-31">
          <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold px-3 py-1 rounded-lg shadow-lg  ring-2 ring-blue-500/50 shadow-blue-500/40 transition-all duration-300">
            Get started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-8">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
          Unlock Speed<br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Automate with LumaFlow
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
          LumaFlow empowers teams to automate tasks and streamline workflows —
          enhancing collaboration through automation.
        </p>
        <button className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-blue-800 font-semibold px-7 py-3 rounded-xl shadow-md ring-1 ring-blue-300 transition-all duration-300 transform hover:scale-105 mb-12">
          Book a Demo
        </button>

        <div className="relative bottom-4 w-[550px] h-[730px] overflow-hidden bg-transparent rounded-2xl shadow-2xl">
          <Image
            src="/iphonemockup.png"
            alt="iPhone Mockup showing LumaFlow automation dashboard"
            width={550}
            height={1000}
            className="absolute top-0 left-0 rounded-2xl"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}