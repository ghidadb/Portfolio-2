import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import WeatherApp from '../components/WeatherApp'
import ContactForm from '../components/ContactForm'

const fadeUp = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
}

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero */}
      <motion.section
        id="welcome"
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }}>
          Hi, I'm Ghida Diab
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }}>
          Junior Developer | Passionate Learner | Lifelong Explorer
        </motion.p>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <ProjectCard
            title="Compound Component Pattern"
            description="A flexible counter built from reusable subcomponents that share state via the Compound Component pattern."
            to="/project1"
          />
          <ProjectCard
            title="Render Props & HOC — Products & Makers"
            description="Two lists with shared toggle logic, implemented once and reused via Render Props and a Higher-Order Component."
            to="/project2"
          />
        </motion.div>
      </section>

      {/* Weather */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <WeatherApp />
      </motion.div>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <ContactForm />
      </motion.section>
    </div>
  )
}
