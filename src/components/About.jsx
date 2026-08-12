import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { about } from '../data/content'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <SectionTitle index="01" title="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about-grid"
        >
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="glass-card facts-list">
            {about.facts.map(f => (
              <div key={f.label} className="fact-row">
                <span className="fact-label">{f.label}</span>
                <span className="fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
