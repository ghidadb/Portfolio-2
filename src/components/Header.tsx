import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion' 

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Left: Avatar */}
        <Link to="/" className="brand" aria-label="Home">
          <img src="/propic.jpg" alt="Ghida Diab" className="brand-avatar" />
        </Link>

        {/* Center: Anchors to sections on Home */}
        <nav className="nav" aria-label="Primary">
          <a className="nav-link" href="/#welcome">Welcome</a>
          <a className="nav-link" href="/#projects">Projects</a>
          <a className="nav-link" href="/#contact">Contact Me</a>
        </nav>

        {/* Right: View Profile + Theme toggle */}
        <div className="header-cta">
          <a
            className="btn btn-pill"
            href="https://github.com/ghidadb"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </motion.button>
        </div>
      </div>
    </header>
  )
}
