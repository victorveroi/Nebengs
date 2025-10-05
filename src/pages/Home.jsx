import RideCard from "../component/RideCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const rides = [
  { id: 1, driverId: "jonathan", name: "Jonathan M.", from: "San Francisco, CA", to: "San Jose, CA", date: "Mar 25, 2025", time: "08:00 AM" },
  { id: 2, driverId: "diane", name: "Diane W.", from: "Los Angeles, CA", to: "Santa Barbara, CA", date: "Mar 26, 2025", time: "09:00 AM" },
  { id: 3, driverId: "carlos", name: "Carlos P.", from: "Palo Alto, CA", to: "Mountain View, CA", date: "Mar 27, 2025", time: "07:30 AM" },
];

  const filteredRides = rides.filter(
    (r) =>
      r.from.toLowerCase().includes(search.toLowerCase()) ||
      r.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 tracking-tight mb-4 md:mb-0">
            Find Your Perfect Ride 🚗
          </h1>
          <input
            type="text"
            placeholder="Search by location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {filteredRides.length > 0 ? (
              filteredRides.map((ride, index) => <RideCard key={index} {...ride} />)
            ) : (
              <p className="text-gray-500 italic">No rides found for that route.</p>
            )}
          </div>

          <aside className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-3">✨ Featured Networks</h3>
            <ul className="space-y-2 text-blue-600 font-medium">
              <li><a href="#" className="hover:underline">FASILKOM</a></li>
              <li><a href="#" className="hover:underline">VOKASI</a></li>
              <li><a href="#" className="hover:underline">FAKULTAS TEKNIK</a></li>
              <li><a href="#" className="hover:underline">FEB</a></li>
              <li><a href="#" className="hover:underline">STASIUN UI</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
