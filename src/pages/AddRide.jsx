import { useState } from "react";

export default function AddRide() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: 1,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ride submitted:", formData);
    alert("Ride berhasil ditambahkan (dummy, belum ke backend)");
    setFormData({ from: "", to: "", date: "", time: "", seats: 1, notes: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Add Ride</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* From */}
        <div>
          <label className="block text-sm font-medium text-gray-700">From</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: Stasiun UI"
            required
          />
        </div>

        {/* To */}
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: VOKASI"
            required
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Seats */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Seats</label>
          <input
            type="number"
            name="seats"
            min="1"
            max="6"
            value={formData.seats}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Catatan tambahan (misal: no smoking, bawa helm cadangan)"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2.5 rounded-xl font-medium hover:shadow-lg hover:from-blue-700 hover:to-cyan-600 transition"
        >
          Add Ride
        </button>
      </form>
    </div>
  );
}
