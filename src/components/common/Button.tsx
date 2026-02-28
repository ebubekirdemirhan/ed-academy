import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  className?: string;
}

export function Button({ to, href, variant = 'primary', children, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition';
  const variants = {
    primary:
      'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/25 hover:bg-sky-400',
    ghost:
      'border border-slate-700 text-slate-200 hover:border-sky-500 hover:text-sky-400',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  return <button className={classes}>{children}</button>;
}
