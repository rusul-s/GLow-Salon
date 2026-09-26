import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Salons from "./pages/Salon";
import SalonDetails from "./pages/SalonDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Salons />} />
        <Route path="/salons" element={<Salons />} />
        <Route path="/salons/:id" element={<SalonDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;