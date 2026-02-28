import { products } from '../../data/products';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export function HomeFeaturedProducts() {
  return (
    <section className="border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <SectionHeader
          eyebrow="Ürünler"
          title="Yapay Zeka Destekli Ürünler"
          description="İşletmelerin dijital dönüşümünü hızlandıran hazır ve özelleştirilebilir çözümler."
        />
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
      </div>
    </section>
  );
}
