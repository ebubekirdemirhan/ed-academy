import { aboutHero } from '../../data/aboutContent';
import { Button } from '../common/Button';

export function HomeAboutPreview() {
  return (
    <section className="border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Hakkımda
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {aboutHero.title}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{aboutHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{aboutHero.intro}</p>
            <Button to="/hakkimda" variant="ghost" className="mt-6">
              Detaylı Hakkımda
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '💻', label: 'Yazılım Geliştirme' },
                { icon: '📊', label: 'Veri Analizi' },
                { icon: '🤖', label: 'Yapay Zeka' },
                { icon: '📈', label: 'Trading & Finans' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
