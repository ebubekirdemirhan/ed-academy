export type TrainingCategory = 'yapay-zeka' | 'veri-analizi' | 'trading' | 'profesyonel';

export type TrainingLevel = 'baslangic' | 'orta' | 'ileri';

export interface Training {
  id: string;
  slug: string;
  title: string;
  category: TrainingCategory;
  level: TrainingLevel;
  duration: string;
  format: string;
  summary: string;
  highlights: string[];
  curriculum: string[];
}

export const trainings: Training[] = [
  {
    id: 'ai-entegrasyon-101',
    slug: 'ai-entegrasyon-101',
    title: 'AI Entegrasyon 101: İş Süreçlerine Yapay Zeka',
    category: 'yapay-zeka',
    level: 'orta',
    duration: '4 hafta',
    format: 'Online / Canlı',
    summary:
      'Kurumsal iş akışlarınıza LLM tabanlı çözümler ve otomasyon sistemleri entegre etmeyi öğrenin.',
    highlights: [
      'Gerçek şirket senaryoları üzerinden uygulamalı dersler',
      'API, webhook ve entegrasyon mimarisi',
      'Prompt engineering ve LLM kullanım kalıpları',
    ],
    curriculum: [
      '1. Hafta – Yapay zeka entegrasyon temel kavramları',
      '2. Hafta – REST API, webhook ve entegrasyon desenleri',
      '3. Hafta – LLM ve chatbot mimarisi',
      '4. Hafta – Proje tasarımı ve sunum',
    ],
  },
  {
    id: 'trading-sistemleri',
    slug: 'trading-sistemleri',
    title: 'Trading Sistemleri ve Pine Script ile İndikatör Geliştirme',
    category: 'trading',
    level: 'ileri',
    duration: '5 hafta',
    format: 'Online / Kayıtlı + Canlı Soru-Cevap',
    summary:
      'TradingView üzerinde algoritmik indikatör ve strateji geliştirmek isteyenler için uçtan uca bir program.',
    highlights: [
      'Pine Script temelleri ve ileri seviye özellikler',
      'Risk yönetimi ve strateji optimizasyonu',
      'Gerçek indikatör örnekleri: MAGIC LINES MATRIX PRO, SNIPER DEDE SYSTEM',
    ],
    curriculum: [
      '1. Hafta – Pine Script temelleri',
      '2. Hafta – İndikatör tasarımı ve backtest',
      '3. Hafta – Gelişmiş sinyal üretimi',
      '4. Hafta – Strateji geliştirme',
      '5. Hafta – Portföy ve risk yönetimi',
    ],
  },
  {
    id: 'veri-analizi-pratik',
    slug: 'veri-analizi-pratik',
    title: 'Veri Analizi Pratik Atölyesi (SQL & Power BI)',
    category: 'veri-analizi',
    level: 'baslangic',
    duration: '3 hafta',
    format: 'Online / Canlı',
    summary:
      'SQL ve Power BI kullanarak gerçek hayattaki iş problemlerini veri analizi ile çözmeyi öğrenin.',
    highlights: [
      'SQL ile veri modelleme ve sorgulama',
      'Power BI ile dashboard tasarımı',
      'İş problemleri üzerinden uçtan uca senaryolar',
    ],
    curriculum: [
      '1. Hafta – SQL temelleri ve sorgulama',
      '2. Hafta – Veri modelleme ve raporlama',
      '3. Hafta – Power BI ile dashboard geliştirme',
    ],
  },
];

