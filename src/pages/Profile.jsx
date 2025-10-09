import { useParams } from "react-router-dom";

const dummyDrivers = {
  Moreno: { name: "Moreno M.", faculty: "Fasilkom", rating: 4.8, vehicle: "Honda Jazz" },
  Mia: { name: "Mia K.", faculty: "FEB", rating: 4.6, vehicle: "Yamaha NMAX" },
  Bintang: { name: "Bintang M.", faculty: "FT", rating: 4.9, vehicle: "Toyota Avanza" },
};

export default function Profile() {
  const { id } = useParams();
  const driver = dummyDrivers[id];

  if (!driver) {
    return <p className="p-6 text-red-500">Driver tidak ditemukan.</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">{driver.name}</h1>
      <p><span className="font-semibold">Fakultas:</span> {driver.faculty}</p>
      <p><span className="font-semibold">Kendaraan:</span> {driver.vehicle}</p>
      <p><span className="font-semibold">Rating:</span> ⭐ {driver.rating}</p>
    </div>
  );
}
