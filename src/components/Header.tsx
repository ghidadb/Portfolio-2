import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const avatarSrc = `${import.meta.env.BASE_URL}propic.jpg` // expects public/propic.jpg

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Left */}
        <Link to="/" className="brand" aria-label="Home">
          <img
            src={avatarSrc}
            alt="Ghida Diab"
            className="brand-avatar"
            loading="lazy"
          />
        </Link>

        {/* Center */}
        <nav className="nav" aria-label="Primary">
          {/* remove leading "/" so anchors work under any base path */}
          <a className="nav-link" href="#welcome">Welcome</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact Me</a>
        </nav>

        {/* Right */}
        <div className="header-cta">
          <a
            className="btn btn-pill"
            href="https://github.com/ghidadb"
            target="_blank"
            rel="noopener noreferrer"
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
