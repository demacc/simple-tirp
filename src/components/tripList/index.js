import React, { useEffect, useState } from "react";

export default function TirpList() {
  let [trips, setTrips] = useState([]);
  //useEffect api fetch yin infinty loop ma pyit ag use ya
  useEffect(() => {
    fetch("http://localhost:3001/tirp")
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, []);

  return (
    <div>
      <h1>Ready to go?</h1>
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
