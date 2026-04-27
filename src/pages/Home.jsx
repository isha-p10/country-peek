import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");

  // 1. State
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. If query is empty → reset everything
    if (!query.trim()) {
      setCountries([]);
      setError(null);
      return;
    }

    // 3. Debounce (400ms)
    const timer = setTimeout(() => {
      const fetchCountries = async () => {
        try {
          setLoading(true);

          const res = await fetch(
            `https://restcountries.com/v3.1/name/${query}`
          );

          if (!res.ok) {
            throw new Error("No countries found");
          }

          const data = await res.json();

          setCountries(data);
          setError(null);
        } catch (err) {
          setCountries([]);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchCountries();
    }, 400);

    // 4. Cleanup (important)
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="home">
      <SearchBar query={query} onQueryChange={setQuery} />

      {/* 5. Loading */}
      {loading && <p>Loading...</p>}

      {/* 6. Error */}
      {error && <p>{error}</p>}

      {/* 7. Show countries */}
      {!loading && !error && countries.length > 0 && (
        <div className="cards-grid">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}

      {/* 8. Empty state */}
      {!loading && !error && countries.length === 0 && !query && (
        <p>Start searching to explore countries.</p>
      )}
    </div>
  );
}

export default Home;