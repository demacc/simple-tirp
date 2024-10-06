import React, { useState } from "react";
import "./index.css";
import useFetch from "../../hooks/useFetch";

export default function TirpList() {
  let [url, setUrl] = useState("http://localhost:3001/tirp");
  let { data: trips, loading, error } = useFetch(url);

  return (
    <div className="container">
      {error && <h3>{error}</h3>}
      {!error && (
        <div className="flex-container">
          <h1>Ready to go?</h1>
          {loading && <p>wait a movement</p>}
          <div>
            <button onClick={() => setUrl("http://localhost:3001/tirp")}>
              All trips
            </button>
            <button
              onClick={() =>
                setUrl("http://localhost:3001/tirp?location=Myanmar")
              }
            >
              Tirp to Myanmar
            </button>
          </div>
          <ul className="trips-list">
            {trips &&
              trips.map((trip) => (
                <li key={trip.id} className="trip">
                  <h3>{trip.name}</h3>
                  <p>Price - {trip.price} mkk</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
