import { IconMark } from './Logo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#pause', label: 'Pause' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <a href="#top" className="inline-flex items-center gap-2">
            <IconMark className="h-6 w-auto" />
            <span className="font-display text-sm font-semibold text-white">
              Spiceetech
            </span>
          </a>
          <p className="text-xs text-white/40">Ideas Without Boundaries.</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Spiceetech. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
