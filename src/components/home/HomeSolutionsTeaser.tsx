import { solutionsHero, services } from '../../data/solutions';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export function HomeSolutionsTeaser() {
  return (
    <section className="border-t border-slate-800/60 bg-gradient-to-b from-sky-500/[0.03] to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <SectionHeader
          eyebrow={solutionsHero.eyebrow}
          title="İşletmenizi Yapay Zeka ile Güçlendiriyoruz"
          description={solutionsHero.description}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.id}>
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{s.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/cozumler">Tüm Çözümleri Keşfet</Button>
        </div>
      </div>
    </section>
  );
}
