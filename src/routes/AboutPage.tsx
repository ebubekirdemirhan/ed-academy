import { aboutHero, aboutStory, aboutStats } from '../data/aboutContent';
import { SectionHeader } from '../components/common/SectionHeader';
import { StatItem } from '../components/common/StatItem';
import { Card } from '../components/common/Card';

const timeline = [
  { year: '2018', title: 'İlk Staj – Elektrik Mühendisi', place: 'Akım Metal' },
  { year: '2020', title: 'Ar-Ge Stajı & Otomasyon Mühendisi', place: 'Akım Metal' },
  { year: '2022', title: 'Yazılım Geliştirme Uzman Yardımcısı & Veri Analisti', place: 'Alternatif Yazılım & Danışmanlık' },
  { year: '2024', title: 'Marmara Üniversitesi Mezuniyet', place: 'Elektrik & Elektronik Mühendisliği (İngilizce)' },
  { year: '2025', title: '.NET Yazılım Geliştirme Uzmanlığı & Veri Analizi Okulu', place: 'BilgeAdam / Marmara Üniversitesi' },
  { year: '2026', title: 'ED Academy Kuruluşu', place: 'Yapay Zeka Entegrasyon & Eğitim' },
];

const skills = [
  { group: 'Programlama', items: ['C#', 'Python', 'SQL', 'Java', 'Pine Script'] },
  { group: 'Araçlar', items: ['Power BI', 'Jira', 'Postman', 'Figma', 'Git'] },
  { group: 'Otomasyon', items: ['PLC', 'SCADA', 'Endüstriyel Protokoller'] },
  { group: 'Diller', items: ['Türkçe', 'İngilizce', 'Almanca', 'İspanyolca'] },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Hakkımda
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {aboutHero.title}
          </h1>
          <p className="mt-2 text-sm text-slate-400 md:text-base">{aboutHero.subtitle}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            {aboutHero.intro}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-10 px-4 py-10">
          {aboutStats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <SectionHeader title={aboutStory.heading} />
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            {aboutStory.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <SectionHeader eyebrow="Kariyer" title="Zaman Çizelgesi" />
          <div className="relative space-y-6 border-l border-slate-800 pl-6">
            {timeline.map((t) => (
              <div key={t.year + t.title} className="relative">
                <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-sky-500 bg-slate-950" />
                <p className="text-xs font-semibold text-sky-400">{t.year}</p>
                <p className="text-sm font-medium">{t.title}</p>
                <p className="text-xs text-slate-500">{t.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <SectionHeader eyebrow="Yetkinlikler" title="Teknoloji & Beceriler" />
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((g) => (
              <Card key={g.group}>
                <h3 className="text-sm font-semibold">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 px-2.5 py-0.5 text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
