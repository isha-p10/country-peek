import { useState, useEffect } from "react";

function useCountry(code) {
  // 1. State
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. If no code → do nothing
    if (!code) return;

    const fetchCountry = async () => {
      try {
        // 3. Reset states
        setLoading(true);
        setError(null);

        // 4. Fetch data
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );

        if (!res.ok) {
          throw new Error("Country not found");
        }

        const data = await res.json();

        // API returns array → take first item
        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
        setCountry(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  // 5. Return values
  return { country, loading, error };
}

export default useCountry;