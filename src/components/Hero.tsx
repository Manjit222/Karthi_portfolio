import ParticleText from './ParticleText'
import { TypingText } from './TypingText'

interface HeroProps {
  ready: boolean
}

export function Hero({ ready }: HeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <p className="text-xl text-neutral-300 md:text-2xl">
        <TypingText
          start={ready}
          segments={[
            { text: "HI, I'M " },
            { text: 'KARTHIK', className: 'font-semibold text-white' },
          ]}
        />
      </p>

      <ParticleText
        text="Product Designer"
        className="relative left-1/2 -ml-[50vw] mt-2 !h-[160px] !w-screen overflow-hidden bg-[#0a0a0d] md:!h-[260px] lg:!h-[320px]"
        particleSize={2.2}
        density={4}
        color="#f8fafc"
        highlightColor="#3B82F6"
        scatter={190}
        gatherDuration={1600}
        stagger={420}
        pointerRepel={42}
        repelRadius={120}
        idleDrift={0.8}
        trigger="mount"
        fontSize="clamp(5rem, 20vw, 18rem)"
        fontWeight={800}
        fontFamily="inherit"
        glow
      />

      <div className="mt-4 flex flex-col gap-10 md:mt-8 md:flex-row md:items-end md:justify-between">
        <h1
          className={`max-w-xl text-3xl leading-none font-semibold tracking-normal text-white transition-all duration-700 ease-out md:text-[48px] ${
            ready ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ fontFamily: "'Zalando Sans', sans-serif", transitionDelay: ready ? '150ms' : '0ms' }}
        >
          I DON'T JUST
          <br />
          DESIGN. I SOLVE.
        </h1>

        <div
          className={`flex items-start gap-3 transition-all duration-700 ease-out md:pb-1 ${
            ready ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: ready ? '300ms' : '0ms' }}
        >
          <p className="text-right text-sm leading-snug text-neutral-300 italic md:text-base">
            THE RULE OF DESIGN
            <br />
            DOESN'T MATTER TO ME
          </p>
          <span className="font-serif text-3xl leading-none text-white italic md:text-4xl">
            &amp;
          </span>
          <p className="text-sm leading-snug font-bold text-white md:text-base">
            I BREAK THEM BECAUSE
            <br />
            I KNOW THE RULE
          </p>
        </div>
      </div>
    </section>
  )
}
