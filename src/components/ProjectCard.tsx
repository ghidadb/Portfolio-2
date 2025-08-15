import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  to: string
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
}

export default function ProjectCard({ title, description, to }: Props) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="project-card card-gradient"
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={to} className="btn btn-outline">View Project</Link>
    </motion.div>
  )
}
