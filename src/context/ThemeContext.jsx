import { createContext, useState, useContext } from 'react'

// 1. create the context
const ThemeContext = createContext()

// 2. ThemeProvider component
export function ThemeProvider({ children }) {
  // 3. theme state (default: light)
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    // 4. toggle theme
    if (theme === 'light') {
      setTheme('dark')
      // 5. set data-theme attribute
      document.body.setAttribute('data-theme', 'dark')
    } else {
      setTheme('light')
      // remove attribute for light mode
      document.body.removeAttribute('data-theme')
    }
  }

  // 6. return provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 7. custom hook
export function useTheme() {
  return useContext(ThemeContext)
}