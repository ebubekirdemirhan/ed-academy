export interface Product {
  id: string;
  slug: string;
  title: string;
  summary: string;
  features: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    id: 'ed-ai-chatbot',
    slug: 'ed-ai-chatbot',
    title: 'ED AI Chatbot & Destek Asistanı',
    summary:
      'Web sitenize, WhatsApp veya iç sistemlerinize entegre olabilen, Türkçe odaklı yapay zeka destekli müşteri destek asistanı.',
    features: [
      '7/24 müşteri sorularını otomatik yanıtlama',
      'SSS ve doküman tabanlı akıllı arama',
      'Firma tonu ve stiline göre özelleştirilebilir cevaplar',
    ],
    useCases: [
      'Web sitenizde canlı destek yükünü azaltmak',
      'Satış öncesi sık sorulan soruları otomatikleştirmek',
      'İç dokümanlara dayalı çalışan destek asistanı oluşturmak',
    ],
  },
  {
    id: 'ed-ai-workflow',
    slug: 'ed-ai-workflow',
    title: 'ED AI Workflow Otomasyon Paketi',
    summary:
      'E-posta, CRM ve çeşitli iş uygulamalarınız arasında uçtan uca AI destekli iş akışları tasarlayın.',
    features: [
      'Duruma göre otomatik e-posta yanıtları',
      'CRM kayıt ve güncelleme otomasyonu',
      'Rapor oluşturma ve özetleme akışları',
    ],
    useCases: [
      'Satış pipeline sürecinde otomatik takip',
      'Destek taleplerinin sınıflandırılması ve yönlendirilmesi',
      'Yönetici özet raporlarının otomatik üretilmesi',
    ],
  },
];

