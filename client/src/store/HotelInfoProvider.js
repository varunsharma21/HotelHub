import { createContext, useEffect } from "react";
import { useState } from "react";

export const hotelContext = createContext();

const HotelContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [hotelsInfo, setHotelsInfo] = useState();
  const [priceFilter, setPriceFilter] = useState(50000);
  const [locationFilter, setLocationFilter] = useState("");

  const fetchHotelData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5500/api/v1/hotels/");

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await response.json();
      // console.log(data);

      const transformedData = data.data.hotels.map((hotel) => {
        return {
          id: hotel._id,
          hotelName: hotel.hotelName,
          city: hotel.city,
          contactNumber: hotel.contactNumber,
          address: hotel.address,
          category: hotel.category,
          starRating: hotel.starRating,
          minPrice: hotel.minPrice,
          maxPrice: hotel.maxPrice,
          photo: hotel.photo,
        };
      });
      setHotelsInfo(transformedData);
    } catch (err) {
      console.log("hello");
      setError(err.message);
      console.log("Error hai: ", err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHotelData();
  }, []);

  useEffect(() => {
    // console.log(hotelsInfo);
  }, [hotelsInfo]);

  const initialValue = {
    isLoading,
    error,
    hotelsInfo,
    priceFilter,
    locationFilter,
    setHotelsInfo,
    setIsLoading,
    fetchHotelData,
    setPriceFilter,
    setLocationFilter,
  };

  return (
    <hotelContext.Provider value={initialValue}>
      {children}
    </hotelContext.Provider>
  );
};

export default HotelContextProvider;
