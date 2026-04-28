import { useState } from 'react'
import FilterBar from '../components/FilterBar'
// (keep your existing imports like SearchBar, CountryCard, etc.)

function Home({ countries }) {

  // 1. state
  const [region, setRegion] = useState('All')
  const [sortBy, setSortBy] = useState('')

  // 3. derived data (IMPORTANT: not stored in state)
  const displayed = countries
    .filter((country) => {
      // show all OR match region
      return region === 'All' || country.region === region
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.common.localeCompare(b.name.common)
      }
      if (sortBy === 'population') {
        return b.population - a.population
      }
      return 0 // default (no sorting)
    })

  return (
    <div>

      {/* your existing SearchBar */}
      
      {/* 2. FilterBar */}
      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* 4. render displayed instead of countries */}
      <div className="cards-grid">
        {displayed.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

    </div>
  )
}

export default Home