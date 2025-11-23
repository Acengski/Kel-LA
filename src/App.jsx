import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";

import SejarahPage from "./pages/SejarahPage";
import VisiMisiPage from "./pages/VisiMisiPage";
import GeografisPage from "./pages/GeografisPage";
import DataPendudukPage from "./pages/DataPendudukPage";
import BeritaPage from "./pages/BeritaPage"; // <-- PENTING

function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeSection />
            </>
          }
        />

        <Route path="/sejarah" element={<SejarahPage />} />
        <Route path="/visi-misi" element={<VisiMisiPage />} />
        <Route path="/geografis" element={<GeografisPage />} />
        <Route path="/data-penduduk" element={<DataPendudukPage />} />

        {/* INI YANG NGILANG: */}
        <Route path="/berita" element={<BeritaPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
