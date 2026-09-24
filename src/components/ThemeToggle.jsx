import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

// Light by default (matches the reference); the choice is remembered.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark')
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    const value = next ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', value)
    try {
      localStorage.setItem('theme', value)
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={toggle}
      className="relative h-7 w-[3.25rem] shrink-0 rounded-full border border-line bg-tint transition-colors"
    >
      <span
        className={`absolute top-0.5 grid size-[1.4rem] place-items-center rounded-full bg-primary text-white shadow transition-transform duration-300 ${
          dark ? 'translate-x-[1.55rem]' : 'translate-x-0.5'
        }`}
      >
        {dark ? <Moon className="size-3.5" aria-hidden="true" /> : <Sun className="size-3.5" aria-hidden="true" />}
      </span>
    </button>
  )
}
