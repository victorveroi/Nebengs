import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Form */}
      <div className="flex flex-col justify-center items-center px-8 bg-white">
        <img src="/img/logo.png" className="h-14 mb-6" alt="Nebengs Logo" />
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Nebengs</h1>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>
      </div>

      {/* Right: Background Image */}
      <div
        className="hidden md:flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/login-bg.jpg')" }}
      >
        <h2 className="text-2xl font-semibold text-white /40 px-6 py-3 rounded-lg">
          Find Your Perfect Ride 🚗
        </h2>
      </div>
    </div>
  );
}
