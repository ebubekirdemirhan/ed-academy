import { products } from '../data/products';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 md:pt-24">
          <SectionHeader
            eyebrow="Portföy"
            title="Ürünler"
            description="Yapay zeka destekli, işletmelerin dijital dönüşümünü hızlandıran hazır ve özelleştirilebilir çözümler."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-2">
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <Card key={p.id}>
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{p.summary}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-sky-400">•</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button to={`/urunler/${p.slug}`} variant="ghost" className="mt-5 text-xs">
                Detayları Gör
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
