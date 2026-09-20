import { motion } from 'framer-motion'
import { Layers, Smartphone, Wrench } from 'lucide-react'

const pillars = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Focused, well-crafted apps that solve one problem well — built for iOS and Android from a single codebase.',
  },
  {
    icon: Wrench,
    title: 'Tools',
    description:
      'Small utilities and developer tools that remove friction from everyday workflows.',
  },
  {
    icon: Layers,
    title: 'SaaS',
    description:
      'Subscription products built for the long run — reliable, privacy-respecting, and built to grow with our users.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sky">
            What we do
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            One small studio, three kinds of products
          </h2>
          <p className="mt-4 text-white/60">
            We're an independent team building things we'd want to use ourselves —
            no bloat, no dark patterns, just useful software.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-sky/30 hover:bg-white/[0.05]"
            >
              <div className="inline-flex rounded-xl bg-sky/10 p-3">
                <pillar.icon size={22} className="text-sky" />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
