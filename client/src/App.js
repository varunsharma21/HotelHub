import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddHotel from "./../src/components/AddHotel/AddHotel";
import HotelContextProvider from "./store/HotelInfoProvider";
import HomePage from "./components/HomePage/HomePage";
import Details from "./components/Details/Details";
import ImageUploader from "./components/Test";

function App() {
  return (
    <HotelContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/details" element={<Details />} />
          <Route path="/test" element={<ImageUploader />} />
          <Route path="*" element={<p>404 bhai!</p>} />
        </Routes>
      </Router>
    </HotelContextProvider>
  );
}

export default App;
