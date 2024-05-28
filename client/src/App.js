import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import AddHotel from "./../src/components/AddHotel/AddHotel";
import HotelContextProvider from "./store/HotelInfoProvider";
import HomePage from "./components/HomePage/HomePage";
import Details from "./components/Details/Details";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const domain = "dev-in6i2drjvkgc1c7b.us.auth0.com";
  const clientId = "9WhWXefbTOm9E3dubwe0oNxcVu9l6bcA";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        // You MUST add the endpoint to which you want redirection after sign-in("/hotels").
        redirect_uri: window.location.origin + "/hotels",
      }}
    >
      <HotelContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/hotels" element={<HomePage />} />
            <Route path="/add-hotel" element={<AddHotel />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </HotelContextProvider>
    </Auth0Provider>
  );
}

export default App;
