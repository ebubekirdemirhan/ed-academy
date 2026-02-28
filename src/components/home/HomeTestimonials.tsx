import { SectionHeader } from '../common/SectionHeader';
import { TestimonialCard } from '../common/TestimonialCard';

const testimonials = [
  {
    quote:
      'ED Academy\'nin AI entegrasyon eğitimi sayesinde iş süreçlerimizi çok daha verimli hale getirdik.',
    name: 'Ayşe Y.',
  },
  {
    quote:
      'Trading sistemleri eğitimi, Pine Script konusunda tamamen yeni bir bakış açısı kazandırdı.',
    name: 'Mehmet K.',
  },
  {
    quote:
      'Kurumsal danışmanlık sürecinde çok profesyonel ve sonuç odaklı bir yaklaşım.',
    name: 'Zeynep D.',
  },
];

export function HomeTestimonials() {
  return (
    <section className="border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <SectionHeader
          eyebrow="Referanslar"
          title="Katılımcı Yorumları"
          description="Eğitim ve danışmanlık hizmetlerimizden faydalananların deneyimleri."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} quote={t.quote} name={t.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
