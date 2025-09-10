import React, { useEffect, useState } from "react";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation on mount
  }, []);

  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div
        className={`bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md transform transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline text-center sm:text-right"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;