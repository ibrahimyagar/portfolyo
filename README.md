# İbrahim Yağar — Portföy

Kişisel portföy sitesinin kaynak kodu. Canlı: [ibrahimyagar.com](https://www.ibrahimyagar.com/)

React ile geliştirilmiştir. Özgeçmiş, projeler, eğitim ve sertifika içerikleri `src/portfolio.js` üzerinden yönetilir.

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

Site Netlify üzerinde yayınlanır.

- Build: `npm run build`
- Publish dizini: `build`
- Domain: `ibrahimyagar.com`

## Lisans

Bu depo İbrahim Yağar’ın kişisel portföyü içindir.