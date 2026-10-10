import karthikeyan from '../assets/karthikeyan-trimmed.png'
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
import { CountUp } from './CountUp'
import { Marquee } from './Marquee'
import { Reveal } from './Reveal'

const TOOLS = [
  { name: 'Figma', icon: figma },
  { name: 'Adobe XD', icon: adobeXd },
  { name: 'Photoshop', icon: photoshop },
  { name: 'Anima', icon: anima },
  { name: 'Canva', icon: canva },
  { name: 'CapCut', icon: capcut },
  { name: 'Claude', icon: claude },
  { name: 'Midjourney', icon: midjourney },
  { name: 'Adobe Firefly', icon: adobeFirefly },
]

export function About() {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-20 pb-16 md:grid-cols-2 md:px-10 md:pt-28">
        <div className="flex h-full flex-col items-center justify-end gap-6 md:items-start">
          <Reveal variant="scale">
            <div className="relative inline-block">
              <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/20 blur-[100px] md:h-[340px] md:w-[340px]" />
              <img
                src={karthikeyan}
                alt="Karthikeyan"
                className="h-[320px] w-auto object-contain md:h-[420px] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_58%,rgba(0,0,0,0.85)_70%,rgba(0,0,0,0.45)_82%,rgba(0,0,0,0.12)_93%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_0%,black_58%,rgba(0,0,0,0.85)_70%,rgba(0,0,0,0.45)_82%,rgba(0,0,0,0.12)_93%,transparent_100%)]"
              />
            </div>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <img
              src={myPhilosophy}
              alt="My Philosophy — is to tell a story through my work."
              className="w-[240px] md:w-[300px]"
            />
          </Reveal>
        </div>

        <div>
          <Reveal variant="up">
            <h2 className="text-5xl leading-[1.1] font-bold text-white md:text-6xl">
              Hello, I'm
              <br />
              Karthikeyan
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <p className="mt-6 max-w-lg leading-relaxed text-neutral-400">
              A Product Designer focused on creating digital products that are
              useful, intuitive, and a little different. I enjoy understanding
              the why behind a problem, shaping the right solution, and turning
              ideas into experiences people actually enjoy using.
            </p>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className="mt-10 flex gap-16">
              <div>
                <CountUp end={2} suffix="+ Yrs" className="text-2xl font-bold text-white" />
                <p className="text-sm text-neutral-400">Product designer</p>
              </div>
              <div>
                <CountUp end={15} suffix="+ Shipped" className="text-2xl font-bold text-white" />
                <p className="text-sm text-neutral-400">SaaS, Web and App</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-10 text-sm text-neutral-300">
              Tools &amp; Platforms that i use
            </p>
            <Marquee className="mt-4 max-w-lg [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {TOOLS.map((tool) => (
                <img
                  key={tool.name}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                  className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
                />
              ))}
            </Marquee>
          </Reveal>

          <Reveal variant="up" delay={100}>
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
