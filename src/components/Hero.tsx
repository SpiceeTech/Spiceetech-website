import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { IconMark } from './Logo'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky/20 blur-[120px] animate-glow"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70"
        >
          <Sparkles size={14} className="text-sky" />
          Indie studio for mobile apps, tools &amp; SaaS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 animate-float"
        >
          <IconMark className="h-20 w-auto sm:h-24" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl"
        >
          Ideas without <span className="text-sky">boundaries.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-balance text-lg text-white/60"
        >
          Spiceetech is a small, independent studio building mobile apps, tools, and
          SaaS products designed to feel simple, private, and genuinely useful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pause"
            className="group inline-flex items-center gap-2 rounded-full bg-sky px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-105"
          >
            See our apps
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
