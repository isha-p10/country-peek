import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'

function CountryCard({ country }) {
  const { name, population, region, capital, flags, cca3 } = country

  // 2. get favourites + dispatch
  const { favourites, dispatch } = useFavourites()

  // 3. check if already saved
  const isSaved = favourites.some((f) => f.cca3 === cca3)

  const handleFavouriteClick = (e) => {
    e.stopPropagation() // prevent navigation
    e.preventDefault()  // extra safety (since inside Link)

    if (isSaved) {
      dispatch({ type: 'REMOVE_FAVOURITE', payload: cca3 })
    } else {
      dispatch({ type: 'ADD_FAVOURITE', payload: country })
    }
  }

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img src={flags.svg} alt={name.common} className="card__flag" />

      <div className="card__body">
        <h3 className="card__title">{name.common}</h3>
        <p><strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital?.[0]}</p>

        {/* 4. Favourite button */}
        <button
          onClick={handleFavouriteClick}
          className={`fav-btn ${isSaved ? 'fav-btn--saved' : ''}`}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </Link>
  )
}

export default CountryCard