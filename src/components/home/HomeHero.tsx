import { homeHero } from '../../data/homeContent';
import { Button } from '../common/Button';
import { StatItem } from '../common/StatItem';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-20 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          {homeHero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {homeHero.title}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          {homeHero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {homeHero.ctas.map((cta) => (
            <Button key={cta.to} to={cta.to} variant={cta.variant}>
              {cta.label}
            </Button>
          ))}
        </div>
        <div className="mt-14 flex gap-10">
          {homeHero.stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
