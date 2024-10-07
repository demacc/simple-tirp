import { useEffect, useRef, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    setLoading(false);
    fetch(url, {
      signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went Wrong");
        }
        setLoading(true);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((e) => setError(e.message));
    //cleanup function
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
