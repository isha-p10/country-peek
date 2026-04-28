import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import Favourites from "./pages/Favourites"; // ✅ add this
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Country Detail Page */}
        <Route path="/country/:code" element={<CountryPage />} />

        {/* Favourites Page */}
        <Route path="/favourites" element={<Favourites />} /> {/* ✅ add this */}
      </Routes>
    </Router>
  );
}

export default App;