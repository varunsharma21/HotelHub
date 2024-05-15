import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddHotel from "./components/AddHotel";
import HotelContextProvider from "./store/HotelInfoProvider";
import HomePage from "./components/HomePage/HomePage";
import Details from "./components/Details/Details";

function App() {
  return (
    <HotelContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<p>404 bhai!</p>} />
        </Routes>
      </Router>
    </HotelContextProvider>
  );
}

export default App;
