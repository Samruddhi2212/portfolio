import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { contact, profile } from '../data/content'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref}>
      <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SectionTitle index="06" title="Get In Touch" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 48, fontSize: '0.98rem' }}
        >
          {contact.message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card contact-links"
          style={{ padding: 24, background: 'none', border: 'none', backdropFilter: 'none' }}
        >
          {contact.links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="glass-card contact-link"
            >
              <span className="label">{l.label}</span>
              <span className="value">{l.value}</span>
            </a>
          ))}
        </motion.div>

        <motion.a
          href={`mailto:${contact.email}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="btn"
        >
          Say Hello
        </motion.a>
      </div>

      <div className="footer">
        Designed & Built by {profile.name}
      </div>
    </section>
  )
}
