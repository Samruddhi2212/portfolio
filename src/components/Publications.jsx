import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { publications } from '../data/content'

export default function Publications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (!publications.length) return null

  return (
    <section id="publications" ref={ref}>
      <div className="container">
        <SectionTitle index="05" title="Publications" />
        <div className="publications-list">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card publication-item"
            >
              <div>
                <h3>{pub.title}</h3>
                <span className="venue">{pub.venue} · {pub.year}</span>
              </div>
              {pub.url && (
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="mono" style={{ color: 'var(--cyan)', textDecoration: 'none', fontSize: '0.85rem' }}>
                  Read →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
