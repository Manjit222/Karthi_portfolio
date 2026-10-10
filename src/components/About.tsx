import karthikeyan from '../assets/karthikeyan.png'
import myPhilosophy from '../assets/my-philosophy.svg'
import adobeFirefly from '../assets/tools/adobe-firefly.svg'
import adobeXd from '../assets/tools/adobe-xd.svg'
import anima from '../assets/tools/anima.png'
import canva from '../assets/tools/canva.svg'
import capcut from '../assets/tools/capcut.jpg'
import claude from '../assets/tools/claude.svg'
import figma from '../assets/tools/figma.svg'
import midjourney from '../assets/tools/midjourney.svg'
import photoshop from '../assets/tools/photoshop.svg'

const TOOLS = [
  { name: 'Figma', icon: figma, padding: 'p-2.5' },
  { name: 'Adobe XD', icon: adobeXd, padding: 'p-1' },
  { name: 'Photoshop', icon: photoshop, padding: 'p-1' },
  { name: 'Anima', icon: anima, padding: 'p-1' },
  { name: 'Canva', icon: canva, padding: 'p-1' },
  { name: 'CapCut', icon: capcut, padding: 'p-1' },
  { name: 'Claude', icon: claude, padding: 'p-2.5' },
  { name: 'Midjourney', icon: midjourney, padding: 'p-2' },
  { name: 'Adobe Firefly', icon: adobeFirefly, padding: 'p-1' },
]

export function About() {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-20 pb-16 md:grid-cols-2 md:px-10 md:pt-28">
        <div className="flex h-full flex-col items-center justify-end gap-6 md:items-start">
          <img
            src={karthikeyan}
            alt="Karthikeyan"
            className="h-[320px] w-auto object-contain md:h-[420px]"
          />
          <img
            src={myPhilosophy}
            alt="My Philosophy — is to tell a story through my work."
            className="w-[240px] md:w-[300px]"
          />
        </div>

        <div>
          <h2 className="text-5xl leading-[1.1] font-bold text-white md:text-6xl">
            Hello, I'm
            <br />
            Karthikeyan
          </h2>

          <p className="mt-6 max-w-lg leading-relaxed text-neutral-400">
            A Product Designer focused on creating digital products that are
            useful, intuitive, and a little different. I enjoy understanding
            the why behind a problem, shaping the right solution, and turning
            ideas into experiences people actually enjoy using.
          </p>

          <div className="mt-10 flex gap-16">
            <div>
              <p className="text-2xl font-bold text-white">2+ Yrs</p>
              <p className="text-sm text-neutral-400">Product designer</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">15+ Shipped</p>
              <p className="text-sm text-neutral-400">SaaS, Web and App</p>
            </div>
          </div>

          <p className="mt-10 text-sm text-neutral-300">
            Tools &amp; Platforms that i use
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                title={tool.name}
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[#111318] ${tool.padding}`}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-full w-full rounded-md object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-sm text-neutral-400">
              I like to keep my designs
            </p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-2xl font-bold text-white">Clean</span>
              <span className="text-sm text-neutral-400">with a</span>
              <span className="text-xl font-bold text-white italic line-through decoration-2">
                SOMETHING
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-2xl font-bold text-white">&amp; Honest</span>
              <span className="text-sm text-neutral-400">mix of</span>
              <span className="text-xl font-bold text-white italic line-through decoration-2">
                DIFFERENT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
