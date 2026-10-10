const NAV_LINKS = ['About', 'Works', 'Experience', 'Contact']

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0d]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <span className="text-lg font-extrabold tracking-tight text-white">
          Karthik
        </span>

        <ul className="hidden items-center gap-10 text-sm text-neutral-300 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition-colors hover:bg-white/10"
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}
