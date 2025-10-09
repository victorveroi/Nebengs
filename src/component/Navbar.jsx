import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
<Link to="/" className="flex items-center space-x-3">
        <img src="/img/logo.png" alt="Nebengs Logo" className="h-[35px] w-auto mt-2" />
        <span className="text-3xl font-bold tracking-wide">Nebengs</span>
          </Link>
        {/* Menu */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/add" className="hover:text-yellow-300">Add Ride</Link>
          <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
