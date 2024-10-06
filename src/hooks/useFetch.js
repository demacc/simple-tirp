import { useEffect, useState } from "react";
function useFetch(url) {
  //fetch -> first render -> useEffect
  //fetch -> dynamic -> url
  //fetch -> api's data
  let [data, setData] = useState(null);
  //loading handling
  let [loading, setLoading] = useState(true);
  // error handling
  let [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => setError(e.message));
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
