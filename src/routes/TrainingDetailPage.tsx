import { useParams, Link } from 'react-router-dom';
import { trainings } from '../data/trainings';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

const levelMap = { baslangic: 'Başlangıç', orta: 'Orta', ileri: 'İleri' };

export function TrainingDetailPage() {
  const { slug } = useParams();
  const training = trainings.find((t) => t.slug === slug);

  if (!training) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Eğitim bulunamadı</h1>
        <Link to="/egitimler" className="mt-4 inline-block text-sm text-sky-400">
          Tüm eğitimlere dön
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-4xl px-4 pb-8 pt-16 md:pt-24">
          <Link
            to="/egitimler"
            className="mb-4 inline-block text-xs text-slate-500 hover:text-sky-400"
          >
            ← Tüm Eğitimler
          </Link>
          <span className="mb-3 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-400">
            {levelMap[training.level]}
          </span>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {training.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{training.summary}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
            <span>{training.duration}</span>
            <span>·</span>
            <span>{training.format}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-4">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h2 className="text-sm font-semibold">Öne Çıkanlar</h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {training.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-400">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-sm font-semibold">Müfredat</h2>
            <ol className="mt-3 space-y-2 text-xs text-slate-300">
              {training.curriculum.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
          </Card>
        </div>

        <div className="mt-10 rounded-xl border border-sky-500/20 bg-sky-500/5 p-6 text-center">
          <h2 className="text-lg font-semibold">Bu programa katılmak ister misiniz?</h2>
          <p className="mx-auto mt-2 max-w-md text-xs text-slate-400">
            Bilgi almak veya kayıt yaptırmak için bizimle iletişime geçin.
          </p>
          <Button to="/iletisim" className="mt-5">
            Bilgi Al / Kayıt Ol
          </Button>
        </div>
      </section>
    </>
  );
}
