import { Mail } from 'lucide-react'
import { LinkedInIcon, WhatsAppIcon } from './icons'
import { Logo } from './Logo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#pause', label: 'Pause' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { icon: Mail, href: 'mailto:admin@spiceetech.co.za', label: 'Email' },
  { icon: WhatsAppIcon, href: 'https://wa.me/27671211032', label: 'WhatsApp' },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/spiceetech',
    label: 'LinkedIn',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <a href="#top">
            <Logo size="sm" />
          </a>
          <p className="text-xs text-white/40">Ideas Without Boundaries.</p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                className="text-white/50 transition-colors hover:text-sky"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
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
