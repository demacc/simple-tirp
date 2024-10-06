import React, { useEffect, useState } from "react";

export default function TirpList() {
  let [trips, setTrips] = useState([]);

  let [url, setUrl] = useState("http://localhost:3001/tirp");
  //useEffect api fetch yin infinty loop ma pyit ag use ya
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, [url]); //depency arr ka tt chr ka ny url ko update loke tae ah kr components mout pyn pyit aug loke py

  return (
    <div>
      <h1>Ready to go?</h1>
      <button onClick={() => setUrl("http://localhost:3001/tirp")}>
        All trips
      </button>
      <button
        onClick={() => setUrl("http://localhost:3001/tirp?location=Myanmar")}
      >
        Tirp to Myanmar
      </button>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h2>{trip.name}</h2>
            <p>Price - {trip.price} mkk</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
