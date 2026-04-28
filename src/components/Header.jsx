import { useTheme } from '../context/ThemeContext'

function Header() {
  // 2. get theme + toggle function
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <h1 className="header__title">My App</h1>

      <nav className="header__nav">
        {/* 3. Theme toggle button */}
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </nav>
    </header>
  )
}

export default Header