import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Country Detail Page */}
        <Route path="/country/:code" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;