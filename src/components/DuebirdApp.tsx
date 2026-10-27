import { motion } from 'framer-motion'
import { BellRing, CalendarClock, HardDriveDownload, ShieldCheck } from 'lucide-react'
import duebirdIcon from '../assets/apps/duebird-icon.png'
import { PlayStoreButton } from './PlayStoreButton'

const features = [
  {
    icon: CalendarClock,
    title: 'Bills & Subscriptions',
    description: 'Track recurring bills in any currency, with monthly and yearly totals.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranties & Receipts',
    description: 'Keep receipts and product photos with every warranty, and know when it expires.',
  },
  {
    icon: BellRing,
    title: 'Timely Reminders',
    description: 'Get a nudge on the day, or up to 30 days before, so nothing slips.',
  },
  {
    icon: HardDriveDownload,
    title: 'Private by Design',
    description: 'No account needed. Your data stays on your phone, with backups you control.',
  },
]

const upcoming = [
  { name: 'Rent', due: 'Due in 2 days', amount: 'R 8 500' },
  { name: 'Internet', due: 'Due in 5 days', amount: 'R 699' },
  { name: 'Streaming', due: 'Due in 9 days', amount: 'R 199' },
  { name: 'Insurance', due: 'Due in 12 days', amount: 'R 1 250' },
]

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.75rem] border-4 border-white/10 bg-navy/40 p-3 shadow-2xl shadow-amber-400/10 sm:w-[300px]">
      <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
      <div className="overflow-hidden rounded-[2rem] bg-ink">
        <div className="flex items-center justify-between px-4 pb-3 pt-6">
          <span className="font-display text-sm font-semibold text-white">Duebird</span>
          <img src={duebirdIcon} alt="" className="h-6 w-6 rounded-full" />
        </div>

        <div className="mx-4 rounded-xl bg-white/5 p-3">
          <span className="text-[10px] text-white/50">This month</span>
          <p className="font-display text-lg font-bold text-white">R 10 648</p>
        </div>

        <ul className="mt-3 flex flex-col gap-1.5 px-4 pb-6">
          {upcoming.map((bill) => (
            <li
              key={bill.name}
              className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
            >
              <div>
                <p className="text-[11px] font-medium text-white">{bill.name}</p>
                <p className="text-[9px] text-amber-300/80">{bill.due}</p>
              </div>
              <span className="text-[11px] font-semibold text-white/80">{bill.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function DuebirdApp() {
  return (
    <section id="duebird" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[420px] w-[420px] rounded-full bg-sky/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="animate-float">
            <PhoneMockup />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-xs font-semibold text-sky">
            <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulse" />
            Now available worldwide on Google Play
          </span>

          <div className="mt-5 flex items-center gap-4">
            <img src={duebirdIcon} alt="" className="h-14 w-14 rounded-2xl" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Duebird — Bills Tracker
            </h2>
          </div>
          <p className="mt-4 text-white/60">
            Your bills, subscriptions, and warranties in one simple place. Duebird
            reminds you before anything is due, so you never miss a payment or a
            warranty claim again.
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
            <PlayStoreButton packageName="com.spiceetech.duebird" appName="Duebird" />
            <span className="text-xs text-white/40">Android · available worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
