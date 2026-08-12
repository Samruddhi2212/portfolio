import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { skills } from '../data/content'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <SectionTitle index="02" title="Skills" />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card skill-card"
            >
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
