import "./App.css";
import Home from "./pages/Home";
import LokasiDonasi from "./pages/LokasiDonasi";
import DetailLokasi from "./pages/DetailLokasi";
import FormDonasi from './pages/FormDonasi';
import KonfirmasiPembayaran from './pages/KonfirmasiPembayaran';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donasi" element={<LokasiDonasi />} />
          <Route path="/lokasi/:nama" element={<DetailLokasi />} />
          <Route path="/formdonasi/:lokasi" element={<FormDonasi />} />
          <Route path="/KonfirmasiPembayaran/:lokasi" element={<KonfirmasiPembayaran />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
