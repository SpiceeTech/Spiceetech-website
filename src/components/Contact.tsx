import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

const CONTACT_EMAIL = 'admin@spiceetech.co.za'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Hello from ${name || 'the Spiceetech site'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sky">
            Get in touch
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Want early access, or just want to say hi?
          </h2>
          <p className="mt-4 text-white/60">
            Whether it's about Pause, a project idea, or a partnership — we'd love to
            hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mt-12 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-white/70">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-sky/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-white/70">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-sky/50"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-white/70">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-sky/50"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Send message
            <Send size={16} />
          </button>

          <p className="flex items-center gap-2 pt-2 text-sm text-white/40">
            <Mail size={14} />
            Or email us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  )
}
