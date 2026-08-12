import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile, navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <a href="#hero" onClick={e => handleNav(e, 'hero')} className="navbar-logo">
        &lt;{profile.initials}/&gt;
      </a>

      <ul className="nav-links">
        {navLinks.map((l, i) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={e => handleNav(e, l)}>
              <span className="nav-number">0{i + 1}.</span>
              {l}
            </a>
          </li>
        ))}
        <li>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 18px' }}>
            Resume
          </a>
        </li>
      </ul>

      <button onClick={() => setOpen(o => !o)} className="nav-hamburger" aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu"
          >
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={e => handleNav(e, l)}>
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
