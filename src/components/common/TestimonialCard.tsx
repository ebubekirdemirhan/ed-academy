import { FiStar } from 'react-icons/fi';
import { Card } from './Card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  stars?: number;
}

export function TestimonialCard({ quote, name, stars = 5 }: TestimonialCardProps) {
  return (
    <Card>
      <div className="mb-3 flex gap-0.5 text-sky-400">
        {Array.from({ length: stars }).map((_, i) => (
          <FiStar key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-300">"{quote}"</p>
      <p className="mt-4 text-xs font-semibold text-slate-400">{name}</p>
    </Card>
  );
}
