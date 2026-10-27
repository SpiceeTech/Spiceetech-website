type PlayStoreButtonProps = {
  packageName: string
  appName: string
}

export function PlayStoreButton({ packageName, appName }: PlayStoreButtonProps) {
  return (
    <a
      href={`https://play.google.com/store/apps/details?id=${packageName}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Get ${appName} on Google Play`}
      className="inline-flex items-center gap-3 rounded-full bg-sky px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1zm13.3 13.3-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1 0zm.1-.1L13.6 12 3.6 22c.4.4 1 .4 1.7.1L17 15m0-6L5.3 2.3c-.7-.4-1.3-.3-1.7.1l10 9.6L17 9z" />
      </svg>
      Get it on Google Play
    </a>
  )
}
