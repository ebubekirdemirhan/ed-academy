import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hakkimda', label: 'Hakkımda' },
  { to: '/egitimler', label: 'Eğitimler' },
  { to: '/urunler', label: 'Ürünler' },
  { to: '/cozumler', label: 'Yapay Zeka Çözümleri' },
  { to: '/blog', label: 'Blog' },
  { to: '/iletisim', label: 'İletişim' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="rounded bg-sky-500 px-2 py-1 text-xs font-bold text-slate-950">
            ED
          </span>
          <span className="text-sm md:text-base">ED Academy</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-sky-400 ${
                  isActive ? 'text-sky-400' : 'text-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-xs font-medium text-slate-200 hover:border-sky-500 md:text-sm"
        >
          TR / EN
        </button>
        <button
          type="button"
          className="ml-2 inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 hover:border-sky-500 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menüyü aç/kapat"
        >
          <span className="h-4 w-4 border-y border-slate-200" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 transition-colors hover:text-sky-400 ${
                    isActive ? 'text-sky-400' : 'text-slate-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

