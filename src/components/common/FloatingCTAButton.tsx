import { Link } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';

export function FloatingCTAButton() {
  return (
    <Link
      to="/iletisim"
      className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
    >
      <FiMessageCircle className="h-4 w-4" />
      Görüşme Al
    </Link>
  );
}

