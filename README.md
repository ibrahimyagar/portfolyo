# İbrahim Yağar — Portföy

Kişisel portföy sitem. Canlı: [ibrahimyagar.com](https://www.ibrahimyagar.com/)

React ile geliştirdiğim site; özgeçmiş, projeler, eğitim ve sertifika içerikleri `src/portfolio.js` üzerinden yönetilir.

## Çalıştırma

```bash
npm install
npm start
```

| Komut | Açıklama |
|-------|---------|
| `npm start` | Geliştirme sunucusu (`http://localhost:3000`) |
| `npm run build` | Üretim derlemesi |

## Yapı

- `src/portfolio.js` — site içerik verileri
- `src/containers/` — sayfa bölümleri
- `src/components/` — yeniden kullanılan bileşenler
- `src/assets/` — görseller ve animasyonlar
- `public/` — statik dosyalar, CV ve meta

## Dağıtım

Site Vercel üzerinde yayınlanır.

- Build: `npm run build`
- Publish dizini: `build`
- Domain: `ibrahimyagar.com`

## Lisans

© İbrahim Yağar. Tüm hakları saklıdır.
