'use client'

import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa' 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="p-2 text-xl">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
