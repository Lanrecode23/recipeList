import { useEffect, useState } from "react";

function Usefetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const optionData = (optData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(optData),
    });
  };

  

  useEffect(() => {
    const fetchData = async (fetchOptions) => {
      setLoading(true);
      try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch");
      }
    };

    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }
    fetchData();
  }, [url, method, options]);

  return { data, loading, error, optionData };
}

export default Usefetch;
