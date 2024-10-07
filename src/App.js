import { useState } from "react";
import "./App.css";
import TirpList from "./components/tripList";

function App() {
  let [close, setClose] = useState(true);
  return (
    <>
      <button onClick={() => setClose(false)}>Close Trips</button>
      {close && <TirpList />}
    </>
  );
}

export default App;
