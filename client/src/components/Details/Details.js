import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <div>
      <p>
        {state.id}, {state.hotelName}, {state.address}, {state.city},{" "}
        {state.category}, {state.contactNumber}, {state.starRating},{" "}
        {state.maxPrice}, {state.minPrice}
      </p>
    </div>
  );
};

export default Details;
