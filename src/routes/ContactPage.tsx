import { useState } from 'react';
import type { FormEvent } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import {
  CONTACT_FORM_ENDPOINT,
  CONTACT_FALLBACK_EMAIL,
} from '../config/contact';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const initialForm: ContactFormState = {
  name: '',
  email: '',
  topic: 'Eğitim Programları Hakkında',
  message: '',
};

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const isSubmitting = status === 'submitting';

  const handleChange = (
    field: keyof ContactFormState,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    // Eğer profesyonel backend endpoint'i tanımlıysa oraya POST et
    if (CONTACT_FORM_ENDPOINT) {
      setStatus('submitting');
      try {
        const payload = {
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `[ED Academy] ${form.topic}`,
          Konu: form.topic,
        };

        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Form gönderimi başarısız oldu.');
        }

        setStatus('success');
        setForm(initialForm);
        return;
      } catch (err) {
        console.error(err);
        setStatus('error');
        setError(
          'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
        );
        return;
      }
    }

    // Henüz backend yapılandırılmamışsa güvenli fallback: mailto
    const params = new URLSearchParams({
      subject: `[ED Academy] ${form.topic}`,
      body: `Ad Soyad: ${form.name}\nE-posta: ${form.email}\nKonu: ${form.topic}\n\nMesaj:\n${form.message}`,
    });

    window.location.href = `mailto:${CONTACT_FALLBACK_EMAIL}?${params.toString()}`;
    setStatus('success');
  };

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
            {status === 'success' ? (
              <Card>
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-sky-400">Teşekkürler!</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Mesajınız alındı. En kısa sürede dönüş yapacağız.
                  </p>
                  {!CONTACT_FORM_ENDPOINT && (
                    <p className="mt-3 text-xs text-slate-500">
                      Mesajınız varsayılan e-posta istemciniz üzerinden{' '}
                      {CONTACT_FALLBACK_EMAIL} adresine yönlendirildi.
                    </p>
                  )}
                </div>
              </Card>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <label className="block text-xs font-medium text-slate-300">
                  Ad Soyad
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Adınız Soyadınız"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </label>
                <label className="block text-xs font-medium text-slate-300">
                  E-posta
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="ornek@firma.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </label>
                <label className="block text-xs font-medium text-slate-300">
                  Konu
                  <select
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    value={form.topic}
                    onChange={(e) => handleChange('topic', e.target.value)}
                  >
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
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </label>
                {error && (
                  <p className="text-xs text-red-400">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/25 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
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
