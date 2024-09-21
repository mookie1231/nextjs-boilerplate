import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-blue-50">
      <header className="flex justify-between items-center">
        <Image
          src="/logo.svg" // Replace with your logo
          alt="HealthTech Logo"
          width={180}
          height={38}
          priority
        />
        <nav className="hidden sm:flex gap-6">
          <a href="#features" className="text-blue-600 hover:text-blue-800">Features</a>
          <a href="#about" className="text-blue-600 hover:text-blue-800">About Us</a>
          <a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col gap-12 items-center text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-900">
          Revolutionizing Healthcare with Technology
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl">
          Our innovative platform connects patients with healthcare providers, 
          streamlines medical records, and improves overall patient care.
        </p>

        {/* New search bar */}
        <div className="w-full max-w-2xl">
          <form className="relative">
            <input
              type="text"
              placeholder="Search your symptoms and find solutions..."
              className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full bg-blue-600 text-white px-8 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
            href="#demo"
          >
            Request a Demo
          </a>
          <a
            className="rounded-full border border-blue-600 text-blue-600 px-8 py-3 text-lg font-semibold hover:bg-blue-100 transition-colors"
            href="#learn-more"
          >
            Learn More
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 w-full max-w-4xl">
          {['Telemedicine', 'Electronic Health Records', 'AI Diagnostics'].map((feature) => (
            <div key={feature} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature}</h3>
              <p className="text-gray-600">Innovative solutions to improve healthcare delivery and patient outcomes.</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex justify-center items-center gap-6 text-sm text-gray-600">
        <a href="#privacy" className="hover:text-blue-600">Privacy Policy</a>
        <a href="#terms" className="hover:text-blue-600">Terms of Service</a>
        <a href="#contact" className="hover:text-blue-600">Contact Us</a>
      </footer>
    </div>
  );
}
