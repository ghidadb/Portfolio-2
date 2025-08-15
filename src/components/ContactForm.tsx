import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    // demo success
    setStatus('success')
    e.currentTarget.reset()
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="contact-section container">
      {/* Watermark-safe content wrapper */}
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows={5} required />
          <motion.button whileTap={{ scale: 0.98 }} type="submit" className="btn">
            Send
          </motion.button>
        </form>
        {status === 'success' && <p className="success">Thanks! I’ll get back to you soon.</p>}
        {status === 'error' && <p className="error">Oops! Try again.</p>}
      </div>
    </section>
  )
}
