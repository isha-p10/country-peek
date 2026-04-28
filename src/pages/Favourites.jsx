import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  // 1. get favourites
  const { favourites } = useFavourites()

  // 2. empty state
  if (favourites.length === 0) {
    return (
      <div className="empty-state">
        <h2>No favourites yet 💔</h2>
        <p>You haven’t saved any countries. Start exploring!</p>
        <Link to="/" className="btn">
          Go to Home
        </Link>
      </div>
    )
  }

  // 3. render favourites
  return (
    <div className="cards-grid">
      {favourites.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}

export default Favourites