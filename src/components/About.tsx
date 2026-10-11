import { lazy, Suspense } from 'react'
import karthikeyanBack from '../assets/karthikeyan-card-back.webp'
import karthikeyan from '../assets/karthikeyan-card-front.webp'
import designPrinciples from '../assets/design-principles.svg'
import myPhilosophy from '../assets/my-philosophy.svg'
import adobeExpress from '../assets/tools/adobe-express.svg'
import adobeXd from '../assets/tools/adobe-xd.svg'
import canva from '../assets/tools/canva.svg'
import capcut from '../assets/tools/capcut.webp'
import claude from '../assets/tools/claude.svg'
import figma from '../assets/tools/figma.svg'
import googleStitch from '../assets/tools/google-stitch.webp'
import lovable from '../assets/tools/lovable.webp'
import photoshop from '../assets/tools/photoshop.svg'
import { CountUp } from './CountUp'
import { Marquee } from './Marquee'
import { Reveal } from './Reveal'

const Lanyard = lazy(() => import('./Lanyard'))

const TOOLS = [
  { name: 'Figma', icon: figma },
  { name: 'Adobe XD', icon: adobeXd },
  { name: 'Photoshop', icon: photoshop },
  { name: 'Adobe Express', icon: adobeExpress },
  { name: 'Canva', icon: canva },
  { name: 'CapCut', icon: capcut },
  { name: 'Claude', icon: claude },
  { name: 'Google Stitch', icon: googleStitch },
  { name: 'Lovable', icon: lovable },
]

export function About() {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-20 pb-16 md:grid-cols-2 md:px-10 md:pt-28">
        <div className="flex h-full flex-col justify-end">
          <div className="relative -ml-6 w-[calc(100%+1.5rem)] md:-ml-10 md:w-[calc(100%+2.5rem)]">
            <div className="flex flex-col items-center gap-6">
              <Reveal variant="scale">
                <div className="relative h-[430px] w-full md:h-[500px]">
                  <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/20 blur-[100px] md:h-[340px] md:w-[340px]" />
                  <Suspense fallback={null}>
                    <Lanyard
                      frontImage={karthikeyan}
                      backImage={karthikeyanBack}
                      imageFit="contain"
                      cardColor="#e4e2e2"
                      orientation="portrait"
                      finish="matte"
                      cornerRadius={0.3}
                      size={0.62}
                      anchor="center"
                      strapLength={0.3}
                      strapColor="#111111"
                      strapWidth={0.85}
                      metal="silver"
                      gravity={1}
                      damping={0.5}
                      elasticity={0.5}
                      breeze={0.75}
                      interactive
                      intro
                    />
                  </Suspense>
                </div>
              </Reveal>
              <Reveal variant="up" delay={150}>
                <img
                  src={myPhilosophy}
                  alt="My Philosophy — is to tell a story through my work."
                  className="w-[240px] md:w-[300px]"
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            </div>
          </div>
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
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </Marquee>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <img
              src={designPrinciples}
              alt="I like to keep my designs Clean with a SOMETHING & Honest mix of DIFFERENT"
              className="mt-10 w-[362px] max-w-full"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
