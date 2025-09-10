import React from "react";

function HomePage() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-600">MyApp</h1>

          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Welcome to <span className="text-blue-600">MyApp</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            A modern responsive app built with React & TailwindCSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg shadow hover:border-blue-600 hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hero"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {["Fast", "Responsive", "Modern"].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec velit vel lacus porta malesuada.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center sm:flex sm:justify-between sm:items-center">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
