import { motion } from 'framer-motion'
import { Gauge, MessageCircle, ShieldCheck, Smartphone } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Privacy by default',
    description:
      'Your data belongs to you. We design for privacy first, not as an afterthought bolted on later.',
  },
  {
    icon: Gauge,
    title: 'Lean & fast',
    description:
      'A small studio means fewer layers and faster iteration — features ship when they are ready, not when a roadmap says so.',
  },
  {
    icon: Smartphone,
    title: 'Cross-platform from day one',
    description:
      'Every product is built to work well on iOS and Android alike, without compromising on feel.',
  },
  {
    icon: MessageCircle,
    title: 'Direct line to the makers',
    description:
      "No support tickets vanishing into a queue — when you reach out, you're talking to the people who built it.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sky">
            How we work
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Small studio. High standards.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ink p-8"
            >
              <div className="inline-flex rounded-xl bg-maroon/20 p-3">
                <value.icon size={20} className="text-[#e8a9bb]" />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
