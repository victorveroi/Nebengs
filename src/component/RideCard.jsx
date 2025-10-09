import { Link } from "react-router-dom";

export default function RideCard({ name, from, to, date, time, driverId }) {
  return (
    <div className="bg-white/90 border rounded-2xl shadow-sm hover:shadow-xl transition p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
        <span className="text-sm text-gray-500">{date} · {time}</span>
      </div>

      <p className="text-gray-700 mb-4">
        <span className="font-semibold text-blue-600">{from}</span>
        <span className="mx-2 text-gray-400">→</span>
        <span className="font-semibold text-blue-600">{to}</span>
      </p>

      <Link
        to={`/JoinRide/${driverId}`}
        className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2.5 rounded-xl font-medium hover:shadow-lg hover:from-blue-700 hover:to-cyan-600 transition"
      >
        Join Ride
      </Link>
    </div>
  );
}
