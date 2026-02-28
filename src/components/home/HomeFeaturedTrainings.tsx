import { trainings } from '../../data/trainings';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

const levelMap = { baslangic: 'Başlangıç', orta: 'Orta', ileri: 'İleri' };

export function HomeFeaturedTrainings() {
  return (
    <section className="border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <SectionHeader
          eyebrow="Eğitimler"
          title="Eğitim Programları"
          description="Yapay zeka, veri analizi ve trading alanlarında uygulamalı eğitim programları."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((t) => (
            <Card key={t.id}>
              <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-400">
                {levelMap[t.level]}
              </span>
              <h3 className="mt-3 text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{t.summary}</p>
              <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-500">
                <span>{t.duration}</span>
                <span>·</span>
                <span>{t.format}</span>
              </div>
              <Button to={`/egitimler/${t.slug}`} variant="ghost" className="mt-5 w-full text-xs">
                Detayları Gör
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
