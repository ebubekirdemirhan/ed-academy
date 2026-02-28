import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-800">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-slate-200 transition hover:text-sky-400"
      >
        {question}
        <FiChevronDown
          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && <p className="pb-4 text-sm leading-relaxed text-slate-400">{answer}</p>}
    </div>
  );
}
