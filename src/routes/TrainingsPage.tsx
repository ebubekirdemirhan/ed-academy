import { useState } from 'react';
import { trainings, type TrainingCategory } from '../data/trainings';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

const categories: { value: TrainingCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 'yapay-zeka', label: 'Yapay Zeka' },
  { value: 'veri-analizi', label: 'Veri Analizi' },
  { value: 'trading', label: 'Trading' },
];

const levelMap = { baslangic: 'Başlangıç', orta: 'Orta', ileri: 'İleri' };

export function TrainingsPage() {
  const [active, setActive] = useState<TrainingCategory | 'all'>('all');

  const filtered =
    active === 'all' ? trainings : trainings.filter((t) => t.category === active);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 md:pt-24">
          <SectionHeader
            eyebrow="Akademi"
            title="Eğitim Programları"
            description="Geleceğin yetkinliklerini bugünden kazanmanız için tasarlanmış, uygulamalı ve sonuç odaklı programlar."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setActive(c.value)}
                className={`rounded-full border px-3.5 py-1 text-xs font-medium transition ${
                  active === c.value
                    ? 'border-sky-500 bg-sky-500/10 text-sky-400'
                    : 'border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <Card key={t.id}>
              <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-400">
                {levelMap[t.level]}
              </span>
              <h3 className="mt-3 text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{t.summary}</p>
              <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500">
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
      </section>
    </>
  );
}
