import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="rounded bg-sky-500 px-2 py-1 text-xs font-bold text-slate-950">
              ED
            </span>
            <span>ED Academy</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            Yapay zeka entegrasyonları, eğitim programları ve kurumsal danışmanlık ile
            işletmelerin dijital dönüşümünü hızlandırıyoruz.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-6 text-sm md:flex-row md:justify-end">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Hızlı Bağlantılar
            </h4>
            <div className="mt-2 flex flex-col gap-1 text-slate-300">
              <Link to="/egitimler">Eğitimler</Link>
              <Link to="/cozumler">Yapay Zeka Çözümleri</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/iletisim">İletişim</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              İletişim
            </h4>
            <div className="mt-2 flex flex-col gap-1 text-slate-300">
              <a href="mailto:ebubekirdemirhaniletisim@gmail.com">
                ebubekirdemirhaniletisim@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ebubekirdemirhan/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com/ebubekirdemirhan" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500">
          <span>© {year} ED Academy. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}

