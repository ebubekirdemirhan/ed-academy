import {
  solutionsHero,
  solutionsStats,
  services,
  processSteps,
  caseStudies,
  solutionsFaq,
} from '../data/solutions';
import { SectionHeader } from '../components/common/SectionHeader';
import { StatItem } from '../components/common/StatItem';
import { Card } from '../components/common/Card';
import { FAQItem } from '../components/common/FAQItem';
import { Button } from '../components/common/Button';
import { FiZap, FiMessageSquare, FiShare2, FiLayout } from 'react-icons/fi';

const iconMap: Record<string, React.ReactNode> = {
  workflow: <FiZap className="h-5 w-5 text-sky-400" />,
  chatbot: <FiMessageSquare className="h-5 w-5 text-sky-400" />,
  social: <FiShare2 className="h-5 w-5 text-sky-400" />,
  'custom-web': <FiLayout className="h-5 w-5 text-sky-400" />,
};

export function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 md:pb-16 md:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            {solutionsHero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {solutionsHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            {solutionsHero.description}
          </p>
          <Button href={solutionsHero.primaryCta.href} className="mt-8">
            {solutionsHero.primaryCta.label} →
          </Button>
          <div className="mt-14 flex gap-10">
            {solutionsStats.map((s) => (
              <StatItem key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionHeader
            eyebrow="Hizmetler"
            title="Yapay Zeka Çözümlerimiz"
            description="İşinizi hızlandırmak için özelleştirilmiş otomasyon hizmetleri."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.id}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60">
                  {iconMap[s.id]}
                </div>
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{s.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <SectionHeader
            eyebrow="Süreç"
            title="Nasıl Çalışıyoruz"
            description="Yapay zeka çözümleri sunmak için kanıtlanmış 4 adımlı sürecimiz."
          />
          <div className="relative space-y-8 border-l border-slate-800 pl-8">
            {processSteps.map((step) => (
              <div key={step.id} className="relative">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-sky-500 bg-slate-950 text-[10px] font-bold text-sky-400">
                  {step.id}
                </span>
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionHeader
            eyebrow="Portföy"
            title="Vaka Çalışmaları"
            description="Farklı sektörlerde gerçekleştirdiğimiz yapay zeka entegrasyon projelerinden örnekler."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Card key={cs.title}>
                <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-400">
                  {cs.sector}
                </span>
                <h3 className="mt-3 text-sm font-semibold">{cs.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{cs.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-sky-500/20 bg-sky-500/5 px-3 py-1.5 text-xs font-medium text-sky-400">
                  📈 {cs.result}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <SectionHeader
            eyebrow="SSS"
            title="Sıkça Sorulan Sorular"
            description="Yapay zeka otomasyonu hakkında bilmeniz gereken her şey."
          />
          <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900/40 px-5">
            {solutionsFaq.map((f) => (
              <FAQItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800/60 bg-gradient-to-b from-sky-500/[0.03] to-transparent">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            İşinizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
            Yapay zekanın büyümenizi nasıl hızlandırabileceğini keşfetmek için ücretsiz bir
            danışma planlayın.
          </p>
          <Button href={solutionsHero.primaryCta.href} className="mt-8">
            Ücretsiz Keşif Görüşmesi Ayarlayın →
          </Button>
          <p className="mt-6 text-xs text-slate-500">
            ✉ ebubekirdemirhaniletisim@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}
