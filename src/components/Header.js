import { useState } from 'react'
import '../styles/header.css'
import { Link, NavLink } from "react-router-dom";
import { useContextValue } from '../context'

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const MoonIcon = () => (
  <svg {...iconProps}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
)

const SunIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

const MenuIcon = () => (
  <svg {...iconProps}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)

const CloseIcon = () => (
  <svg {...iconProps}><path d="M6 6l12 12M18 6L6 18" /></svg>
)

function Header() {

  const { isLight, setIsLight } = useContextValue()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const closeNav = () => setIsNavOpen(false)

  return (
    <>
      <header className={isNavOpen ? 'navOpened' : ''} >
        <Link to="/" className="header__brand">TammiBriggs</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="docs">Docs</NavLink>
          <NavLink to="blog">Articles</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
        <div className="header__actions">
          <button
            type="button"
            className="header__iconBtn"
            onClick={() => setIsLight(!isLight)}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            type="button"
            className="header__iconBtn header__menuBtn"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      <nav className={`mobileNav ${isNavOpen ? 'mobileNavOpen' : ''}`}>
        <NavLink to="/" end onClick={closeNav}>Home</NavLink>
        <NavLink to="docs" onClick={closeNav}>Docs</NavLink>
        <NavLink to="blog" onClick={closeNav}>Articles</NavLink>
        <NavLink to="contact" onClick={closeNav}>Contact</NavLink>
      </nav>
    </>
  )
}

export default Header
