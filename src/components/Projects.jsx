import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { projects } from '../data/content'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <SectionTitle index="04" title="Projects" />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card project-card"
            >
              <div className="project-thumb">
                {p.image ? (
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} />
                ) : (
                  'Add a project image'
                )}
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
                {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">GitHub →</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
