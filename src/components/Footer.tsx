import behance from '../assets/social/behance.svg'
import instagram from '../assets/social/instagram.svg'
import linkedin from '../assets/social/linkedin.svg'
import { ProcessDiagram } from './ProcessDiagram'
import { Reveal } from './Reveal'
import TechText from './TechText'

const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/karthik1803/', icon: linkedin },
  { name: 'Behance', href: 'https://www.behance.net/karthikeyan1803', icon: behance },
  { name: 'Instagram', href: 'https://www.instagram.com/str_karthi18/?hl=en', icon: instagram },
]

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0d] px-6 py-16 md:px-10 md:py-20"
    >
      <ProcessDiagram className="pointer-events-none absolute top-1/2 right-6 hidden h-[65%] max-h-[360px] -translate-y-1/2 md:right-10 md:block lg:right-24" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center md:pr-[280px] lg:pr-[360px]">
        <div
          className="h-[140px] w-full sm:h-[160px] md:h-[200px] lg:h-[260px]"
          style={{ fontFamily: "'Zalando Sans', sans-serif" }}
        >
          <TechText
            text="KARTHIKEYAN"
            fontWeight={600}
            fontSize={150}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            fontFamily=""
            color="#ffffff"
            accentColor="#ffffff"
            letterSpacing={-0.05}
            reach={200}
            softness={0.7}
            strokeWidth={1.5}
            speed={1}
            lineStyle="dashed"
            selection
            labels
            draggable
            sweep
          />
        </div>

        <Reveal variant="up" delay={150}>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16161b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222228]"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="h-4 w-4"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 text-sm text-neutral-300 sm:items-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rkarthikeyan141@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <MailIcon />
                rkarthikeyan141@gmail.com
              </a>
              <a
                href="tel:+919150585719"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <PhoneIcon />
                +(91) 9150585719
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="relative z-10 mt-20 text-center text-xs text-neutral-500 md:absolute md:bottom-10 md:left-10 md:mt-0 md:text-left">
        © 2026 Karthik. All rights reserved.
      </p>
    </footer>
  )
}
