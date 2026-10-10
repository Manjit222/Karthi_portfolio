import { Reveal } from './Reveal'
import { RevealWords } from './RevealWords'

const EXPERIENCE = [
  {
    period: 'Sep 2025 - Till now',
    type: 'FULL TIME',
    role: 'PRODUCT DESIGNER',
    company: 'SpaceMarvel',
    description:
      'Designing end-to-end digital experiences across SaaS products, mobile applications, web applications, and marketing websites. Working across product design, visual design, and brand communication.',
    bullets: [
      'Designed and contributed to multiple SaaS products and AI-powered platforms',
      'Designed mobile apps, web apps, dashboards, and responsive websites',
      'Created pitch decks, product documents, presentations, and marketing creatives',
      'Managed and designed social media content to support product and brand communication',
      'Worked closely with product and development teams to turn ideas into functional digital experiences',
    ],
  },
  {
    period: '2024 – 2025',
    type: 'FULL TIME',
    role: 'UX & UI Designer',
    company: 'DatadesQ',
    description:
      "Designed user-focused digital experiences across websites and mobile applications, while also supporting the company's visual communication and social media presence.",
    bullets: [
      'Designed and improved responsive websites and mobile applications',
      'Created intuitive interfaces with a focus on usability and visual consistency',
      'Worked on UI/UX flows, layouts, and interactive experiences',
      'Designed and managed social media creatives and content',
      'Collaborated with teams to translate requirements into practical design solutions',
    ],
  },
  {
    period: '2023 – 2024',
    type: 'INTERN',
    role: 'UI DESIGNER · INTERN',
    company: 'Ambivert Technologies Private Limited',
    description:
      'Started my professional design journey by working on interface design and visual communication, gaining hands-on experience across digital and graphic design projects.',
    bullets: [
      'Created UI designs and visual layouts for digital products',
      'Designed graphic assets and promotional visuals',
      'Worked on visual content for an E-book',
      'Explored typography, composition, and visual hierarchy',
      'Developed a strong foundation in UI design and graphic design through real-world projects',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <RevealWords
        text="Where I've Been"
        className="block text-4xl leading-none font-semibold tracking-normal text-white md:text-[48px]"
        style={{ fontFamily: "'Zalando Sans', sans-serif" }}
      />
      <Reveal variant="up" delay={100}>
        <p
          className="mt-3 max-w-md text-sm leading-5 font-normal tracking-normal text-neutral-400"
          style={{ fontFamily: "'Zalando Sans', sans-serif" }}
        >
          My Professional journey through different roles and environments
        </p>
      </Reveal>

      <div className="mt-16">
        {EXPERIENCE.map((item, index) => (
          <Reveal key={item.company} variant="up" delay={index * 100}>
            <div
              className={`grid grid-cols-1 gap-6 py-12 md:grid-cols-4 md:gap-10 ${
                index !== 0 ? 'border-t border-white/10' : ''
              }`}
            >
              <div>
                <p className="text-sm text-white">{item.period}</p>
                <p className="mt-1 text-sm font-medium text-[#3B82F6]">{item.type}</p>
              </div>

              <div className="md:col-span-3">
                <h3
                  className="align-middle text-[32px] leading-none font-normal tracking-normal text-white"
                  style={{ fontFamily: "'Oleo Script', cursive" }}
                >
                  {item.role}
                </h3>
                <p
                  className="mt-2 align-middle text-xl leading-7 font-medium tracking-normal text-white"
                  style={{ fontFamily: "'Zalando Sans', sans-serif" }}
                >
                  {item.company}
                </p>
                <p
                  className="mt-4 max-w-2xl text-base leading-8 font-normal tracking-normal text-neutral-400"
                  style={{ fontFamily: "'Zalando Sans', sans-serif" }}
                >
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-neutral-300">
                      <span className="text-neutral-500">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
