import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { experience } from '../data/content'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <SectionTitle index="03" title="Experience" />
        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="timeline-item"
            >
              <h3>{job.role}</h3>
              <span className="company">{job.company}</span>
              <span className="period">{job.period}</span>
              <ul>
                {job.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
