import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import RideCard from "./component/RideCard.jsx";
import Home from "./pages/Home.jsx";
import AddRide from "./pages/AddRide.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import JoinRide from "./pages/JoinRide.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-ride" element={<AddRide />} />
        <Route path="/JoinRide/:id" element={<JoinRide />} />
      </Routes>
    </Router>
  );
}

export default App;
