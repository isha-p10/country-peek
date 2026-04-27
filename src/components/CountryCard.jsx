import { Link } from "react-router-dom";

function CountryCard({ country }) {
  // 1. Destructure required fields
  const { name, flags, population, region, capital, cca3 } = country;

  return (
    // 2. Wrap entire card in Link
    <Link to={`/country/${cca3}`} className="card">
      
      {/* 3. Flag Image */}
      <img
        src={flags.svg}
        alt={name.common}
        className="card__flag"
      />

      {/* 4. Card Body */}
      <div className="card__body">
        <h3 className="card__name">{name.common}</h3>

        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {region}
        </p>

        <p>
          <strong>Capital:</strong> {capital?.[0] ?? "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;