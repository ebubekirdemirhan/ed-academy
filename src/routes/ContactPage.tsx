import { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-4xl px-4 pb-8 pt-16 md:pt-24">
          <SectionHeader
            eyebrow="İletişim"
            title="Hadi Konuşalım"
            description="Eğitim programları, kurumsal danışmanlık veya projeler hakkında bilgi almak için formu doldurun."
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-2">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <Card>
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-sky-400">Teşekkürler!</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Mesajınız alındı. En kısa sürede dönüş yapacağız.
                  </p>
                </div>
              </Card>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <label className="block text-xs font-medium text-slate-300">
                  Ad Soyad
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Adınız Soyadınız"
                  />
                </label>
                <label className="block text-xs font-medium text-slate-300">
                  E-posta
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="ornek@firma.com"
                  />
                </label>
                <label className="block text-xs font-medium text-slate-300">
                  Konu
                  <select className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40">
                    <option>Eğitim Programları Hakkında</option>
                    <option>Kurumsal Danışmanlık</option>
                    <option>Ürünler Hakkında</option>
                    <option>Diğer</option>
                  </select>
                </label>
                <label className="block text-xs font-medium text-slate-300">
                  Mesaj
                  <textarea
                    rows={5}
                    required
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Kısaca ihtiyacınızı anlatın..."
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/25 transition hover:bg-sky-400"
                >
                  Gönder
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-4 md:col-span-2">
            <Card>
              <h3 className="text-sm font-semibold">İletişim Bilgileri</h3>
              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <a
                  href="mailto:ebubekirdemirhaniletisim@gmail.com"
                  className="flex items-center gap-2 hover:text-sky-400"
                >
                  <FiMail className="h-4 w-4 text-sky-400" />
                  ebubekirdemirhaniletisim@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ebubekirdemirhan/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-sky-400"
                >
                  <FiLinkedin className="h-4 w-4 text-sky-400" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ebubekirdemirhan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-sky-400"
                >
                  <FiGithub className="h-4 w-4 text-sky-400" />
                  GitHub
                </a>
              </div>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold">Freelance Çalışmaya Açığım</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Proje bazlı işbirliği, danışmanlık ve eğitim talepleri için her zaman
                ulaşabilirsiniz.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
