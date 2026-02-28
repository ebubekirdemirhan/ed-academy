# ED Academy

Yapay zeka entegrasyon, eğitim programları ve kurumsal danışmanlık çözümleri sunan kişisel marka + akademi web sitesi.

## Teknoloji Yığını

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- React Router v7
- Framer Motion
- React Icons

## Sayfalar

| Route | Sayfa |
|---|---|
| `/` | Ana Sayfa |
| `/hakkimda` | Hakkımda |
| `/egitimler` | Eğitim Programları |
| `/egitimler/:slug` | Eğitim Detayı |
| `/urunler` | Ürünler |
| `/urunler/:slug` | Ürün Detayı |
| `/cozumler` | Yapay Zeka Çözümleri (Toreops tarzı landing) |
| `/blog` | Blog |
| `/blog/:slug` | Blog Yazısı |
| `/iletisim` | İletişim |

## Geliştirme

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## İletişim Formu E-posta Entegrasyonu

İletişim formu iki modda çalışır:

- **Profesyonel mod (önerilen)**: Form verilerini bir HTTP endpoint'ine POST eder.
- **Fallback mod**: Eğer endpoint tanımlı değilse, varsayılan e-posta istemcisini açarak\
  `ebubekirdemirhaniletisim@gmail.com` adresine `mailto:` ile yönlendirir.

### Profesyonel mod için öneri (örnek: Formspree)

1. Form backend servisi seç (örn. Formspree, Getform vb.) ve\
   `POST` isteği kabul eden bir endpoint oluştur.
2. GitHub repo ayarlarında `Settings → Secrets and variables → Actions` bölümünde\
   yeni bir **Repository secret** ekle:
   - Name: `CONTACT_FORM_ENDPOINT`
   - Value: oluşturduğun form endpoint URL'si
3. Workflow zaten bu secret'ı `VITE_CONTACT_ENDPOINT` olarak build'e geçiriyor;\
   yeni push sonrası yayınlanan sürüm, form verilerini bu endpoint'e POST edecektir.

## Lisans

MIT
