import manjitNaskar from '../assets/manjit-naskar.webp'
import ahasaHealth from '../assets/works/ahasa-health.webp'
import allCottonAndLinen from '../assets/works/all-cotton-and-linen.webp'
import spaceMarvelAnalyze from '../assets/works/space-marvel-analyze.webp'
import spaceMarvelProducts from '../assets/works/space-marvel-products.webp'
import travelfika from '../assets/works/travelfika.webp'
import { Reveal } from './Reveal'
import { RevealWords } from './RevealWords'

const PROJECTS = [
  {
    name: 'Space Marvel — Everything Analyzes Here',
    image: spaceMarvelAnalyze,
    url: 'https://spacemarvel.com/',
  },
  {
    name: 'Space Marvel — We Turn Ideas Into Products',
    image: spaceMarvelProducts,
    url: 'https://spacemarvel.com/services',
  },
  { name: 'Travelfika', image: travelfika, url: 'https://www.travelfika.com/' },
  {
    name: 'All Cotton and Linen',
    image: allCottonAndLinen,
    url: 'https://www.allcottonandlinen.com/',
  },
]

export function Works() {
  return (
    <section id="works" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <Reveal variant="up">
        <p className="text-sm text-neutral-400">Featured Works</p>
      </Reveal>
      <RevealWords
        text="Live Projects"
        className="mt-2 block text-4xl leading-none font-semibold tracking-normal text-white md:text-[48px]"
        style={{ fontFamily: "'Zalando Sans', sans-serif" }}
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.name} variant="up" delay={index * 100}>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noreferrer" className="block">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.name}
                className="w-full"
                loading="lazy"
                decoding="async"
              />
            )}
          </Reveal>
        ))}
      </div>

      <Reveal variant="up" delay={100}>
        <div className="mt-5 flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0F0F0F] md:h-[308px] md:flex-row">
          <div className="flex w-full p-4 md:w-auto md:shrink-0 md:p-6">
            <a
              href="https://ahasahealth.com/"
              target="_blank"
              rel="noreferrer"
              className="group block h-64 w-full overflow-hidden rounded-lg md:h-[252px] md:w-[429px] md:flex-none"
            >
              <img
                src={ahasaHealth}
                alt="AHASA Health"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-4 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              The Fastest I've <span className="text-emerald-400">Shipped.</span>
            </h3>
            <p className="text-sm text-neutral-400">72 Hours → Live</p>
            <p className="text-neutral-300">
              From understanding the brand to designing the experience and
              getting it live — AHASA Health became my fastest deployed
              project.
            </p>
            <p className="text-neutral-400 italic">
              "Great products are never built alone."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src={manjitNaskar}
                alt="Manjit Naskar"
                className="h-10 w-10 shrink-0 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  Manjit Naskar{' '}
                  <span className="font-normal text-neutral-400">
                    [Full Stack Developer]
                  </span>
                </p>
                <p className="text-xs text-neutral-500">Manjitfullstack.dev</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
