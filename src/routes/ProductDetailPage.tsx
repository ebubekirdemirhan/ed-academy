import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Ürün bulunamadı</h1>
        <Link to="/urunler" className="mt-4 inline-block text-sm text-sky-400">
          Tüm ürünlere dön
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
            to="/urunler"
            className="mb-4 inline-block text-xs text-slate-500 hover:text-sky-400"
          >
            ← Tüm Ürünler
          </Link>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {product.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{product.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-4">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h2 className="text-sm font-semibold">Temel Özellikler</h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-400">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-sm font-semibold">Kullanım Senaryoları</h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {product.useCases.map((u) => (
                <li key={u} className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-400">→</span>
                  {u}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-10 rounded-xl border border-sky-500/20 bg-sky-500/5 p-6 text-center">
          <h2 className="text-lg font-semibold">Bu ürünle ilgileniyor musunuz?</h2>
          <p className="mx-auto mt-2 max-w-md text-xs text-slate-400">
            Fiyat bilgisi ve demo talebi için bizimle iletişime geçin.
          </p>
          <Button to="/iletisim" className="mt-5">
            Teklif Al
          </Button>
        </div>
      </section>
    </>
  );
}
