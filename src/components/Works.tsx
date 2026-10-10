import manjitNaskar from '../assets/manjit-naskar.png'
import allCottonAndLinen from '../assets/works/all-cotton-and-linen.png'
import spaceMarvelAnalyze from '../assets/works/space-marvel-analyze.png'
import spaceMarvelProducts from '../assets/works/space-marvel-products.png'
import travelfika from '../assets/works/travelfika.png'
import { LiveSitePreview } from './LiveSitePreview'

const PROJECTS = [
  { name: 'Space Marvel — Everything Analyzes Here', image: spaceMarvelAnalyze },
  { name: 'Space Marvel — We Turn Ideas Into Products', image: spaceMarvelProducts },
  { name: 'Travelfika', image: travelfika },
  { name: 'All Cotton and Linen', image: allCottonAndLinen },
]

export function Works() {
  return (
    <section id="works" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <p className="text-sm text-neutral-400">Featured Works</p>
      <h2
        className="mt-2 text-4xl leading-none font-semibold tracking-normal text-white md:text-[48px]"
        style={{ fontFamily: "'Zalando Sans', sans-serif" }}
      >
        Live Projects
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[#111318] md:h-[320px]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111318] md:flex-row">
        <LiveSitePreview
          url="https://ahasahealth.com/"
          title="AHASA Health"
          className="h-64 w-full md:h-[460px] md:w-1/2"
        />
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
    </section>
  )
}
