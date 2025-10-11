import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo + Brand di kiri */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/img/logo.png"
            alt="Nebengs Logo"
            className="h-12 w-auto"
          />
          <span className="text-3xl font-bold tracking-wide">Nebengs</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/add" className="hover:text-yellow-300">Add Ride</Link>
          <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-5 py-2 rounded-lg transition"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-6 pb-4 space-y-3 text-lg">
          <Link to="/" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/add" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Add Ride</Link>
          <Link to="/profile" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Profile</Link>
          <Link
            to="/login"
            className="block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-5 py-2 rounded-lg text-center transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
