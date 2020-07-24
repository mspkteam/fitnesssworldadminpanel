import { createContext } from 'react'

export const initialState = {
  darkMode: false,
  isAuthenticated: false,
  user: null,
}
const ThemeContext = createContext(initialState)
export default ThemeContext
