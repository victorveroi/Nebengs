import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      {/* Profile Card */}
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src="/img/Moreno.jpg" 
            alt="User Avatar"
            className="h-24 w-24 rounded-full border-4 border-blue-600 shadow-sm mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-800">Moreno Likas Sembiring</h2>
          <p className="text-gray-500">Nebengs@example.com</p>
        </div>

        {/* Info Section */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Phone</span>
            <span className="font-medium text-gray-800">+62 812 3456 7890</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Joined</span>
            <span className="font-medium text-gray-800">Oct 2025</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col space-y-3">
          <Link
            to="/edit-profile"
            className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Edit Profile
          </Link>
          <button className="w-full text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
