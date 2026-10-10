import ParticleText from './ParticleText'

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <p className="text-xl text-neutral-300 md:text-2xl">
        HI, I'M <span className="font-semibold text-white">KARTHIK</span>
      </p>

      <div className="mt-8 h-[220px] overflow-hidden rounded-sm border border-white/10 bg-[#0d0d12] md:h-[300px]">
        <ParticleText
          text="Product Designer"
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
          fontSize="clamp(3.5rem, 13vw, 9rem)"
          fontWeight={800}
          fontFamily="inherit"
          glow
        />
      </div>

      <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
        <h1 className="max-w-xl text-4xl leading-[1.05] font-extrabold text-white md:text-6xl">
          I DON'T JUST
          <br />
          DESIGN. I SOLVE.
        </h1>

        <div className="flex items-start gap-3 md:pb-1">
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
