export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ed-academy-neden-var',
    title: 'ED Academy Neden Var?',
    summary:
      'Yapay zeka, eğitim ve kurumsal danışmanlık kesişiminde konumlanan ED Academy’nin arkasındaki vizyon.',
    date: '2026-02-28',
    content:
      'ED Academy, sahadaki yazılım geliştirme, veri analizi ve finansal piyasalar deneyimimi eğitim ve danışmanlık ile birleştirmek için kuruldu. Amaç; teknik kavramları somut iş çıktısına dönüştürmek ve şirketlerin yapay zeka dönüşümünü hızlandırmak.',
  },
  {
    slug: 'ai-entegrasyonuna-nereden-baslanir',
    title: 'AI Entegrasyonuna Nereden Başlanır?',
    summary:
      'Şirketinizde yapay zeka projelerine başlarken hangi adımları izlemeniz gerektiğine dair kısa bir rehber.',
    date: '2026-02-15',
    content:
      'İlk adım her zaman iş problemini netleştirmek olmalı. Teknoloji seçimi ve model detayları bundan sonra gelir. ED Academy’de, keşif oturumlarında önce süreci, kullanıcıyı ve hedef KPI’ları tanımlıyoruz.',
  },
];

