import { useParams, useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import "../styles/App.css";

function CountryPage() {
  // 1. Get code from URL
  const { code } = useParams();

  // 2. Navigate (for back button)
  const navigate = useNavigate();

  // 3. Custom hook
  const { country, loading, error } = useCountry(code);

  // 4. Loading state
  if (loading) {
    return <p className="home__status">Loading...</p>;
  }

  // 5. Error state
  if (error) {
    return <p className="home__status home__status--error">{error}</p>;
  }

  // 6. Null check
  if (!country) return null;

  // 7. Destructure data
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country;

  // 8. Languages → array
  const languageList = languages ? Object.values(languages) : [];

  // 9. Currencies → array
  const currencyList = currencies
    ? Object.values(currencies).map((c) => c.name)
    : [];

  return (
    <div className="country-page">
      
      {/* Back Button */}
      <button onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="country-page__layout">
        
        {/* Flag */}
        <img
          src={flags.svg}
          alt={name.common}
          className="country-page__flag"
        />

        <div className="country-page__info">
          
          {/* Names */}
          <h2>{name.common}</h2>
          <p><strong>Official:</strong> {name.official}</p>

          <div className="country-page__details">
            
            {/* Left Column */}
            <div>
              <p>
                <strong>Population:</strong> {population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {region}
              </p>
              <p>
                <strong>Subregion:</strong> {subregion}
              </p>
              <p>
                <strong>Capital:</strong> {capital?.[0] ?? "N/A"}
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p>
                <strong>Languages:</strong> {languageList.join(", ") || "N/A"}
              </p>
              <p>
                <strong>Currencies:</strong> {currencyList.join(", ") || "N/A"}
              </p>
            </div>

          </div>

          {/* Borders */}
          {borders && borders.length > 0 && (
            <div>
              <strong>Border Countries:</strong>
              <div>
                {borders.map((code) => (
                  <span key={code} className="border-badge">
                    {code}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default CountryPage;