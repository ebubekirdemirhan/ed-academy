import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 ${className}`}
    >
      {children}
    </div>
  );
}
