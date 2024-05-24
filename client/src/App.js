import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddHotel from "./../src/components/AddHotel/AddHotel";
import HotelContextProvider from "./store/HotelInfoProvider";
import HomePage from "./components/HomePage/HomePage";
import Details from "./components/Details/Details";
import ImageUploader from "./components/Test";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <HotelContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </HotelContextProvider>
  );
}

export default App;
