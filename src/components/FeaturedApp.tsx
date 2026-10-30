import { motion } from 'framer-motion'
import { Album, Images, Lock, Users } from 'lucide-react'
import pauseIcon from '../assets/apps/pause-icon.png'
import { PlayStoreButton } from './PlayStoreButton'

const features = [
  {
    icon: Users,
    title: "Couple's & Family Vaults",
    description: 'Create a private vault for two, or a family vault for up to five people.',
  },
  {
    icon: Images,
    title: 'Shared Feeds',
    description: 'Post photos straight to your vault feed for everyone inside it to see.',
  },
  {
    icon: Album,
    title: 'Albums',
    description: 'Organize memories into albums within each vault, together.',
  },
  {
    icon: Lock,
    title: 'Unlimited Private Vaults',
    description: 'Create as many vaults as you want and invite exactly the people you choose.',
  },
]

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.75rem] border-4 border-white/10 bg-navy/40 p-3 shadow-2xl shadow-sky/10 sm:w-[300px]">
      <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
      <div className="overflow-hidden rounded-[2rem] bg-ink">
        <div className="flex items-center justify-between px-4 pb-3 pt-6">
          <span className="font-display text-sm font-semibold text-white">Pause</span>
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky to-maroon" />
        </div>

        <div className="flex gap-2 px-4">
          {['Feeds', 'Albums', 'Vaults'].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                i === 0 ? 'bg-sky text-navy' : 'bg-white/10 text-white/50'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-1 px-4 pb-6">
          {[
            'from-sky/70 to-navy-light',
            'from-maroon/70 to-navy-light',
            'from-navy-light to-sky/40',
            'from-sky/40 to-maroon/50',
            'from-navy-light to-maroon/40',
            'from-sky/60 to-navy-light',
            'from-maroon/50 to-sky/30',
            'from-navy-light to-sky/50',
            'from-sky/50 to-navy-light',
          ].map((gradient, i) => (
            <div key={i} className={`aspect-square rounded-md bg-gradient-to-br ${gradient}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function FeaturedApp() {
  return (
    <section id="pause" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-maroon/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-xs font-semibold text-sky">
            <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulse" />
            Now available worldwide on Google Play
          </span>

          <div className="mt-5 flex items-center gap-4">
            <img src={pauseIcon} alt="" className="h-14 w-14 rounded-2xl" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Pause: Shared Gallery App
            </h2>
          </div>
          <p className="mt-4 text-white/60">
            A private, shared photo gallery for the people who matter most. Create a
            vault, invite your people, and post your memories together, all in one
            place, all together privately.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <div className="mt-0.5 h-fit shrink-0 rounded-lg bg-sky/10 p-2">
                  <feature.icon size={16} className="text-sky" />
                </div>
                <div>
                  <dt className="text-sm font-semibold text-white">{feature.title}</dt>
                  <dd className="mt-1 text-sm text-white/55">{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PlayStoreButton packageName="com.spiceetech.pause" appName="Pause" />
            <span className="text-xs text-white/40">Android · available worldwide</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="animate-float">
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
