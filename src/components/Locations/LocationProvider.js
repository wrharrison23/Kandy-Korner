import React, { useState, createContext } from "react";

export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
      .then((r) => r.json())
      .then(setLocations);
  };

  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
