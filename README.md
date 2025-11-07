# İbrahim Yağar Portfolio

Bu depo, İbrahim Yağar'ın kişisel portföy sitesinin kaynak kodlarını içerir. Proje React tabanlıdır ve özgeçmiş, projeler, sertifikalar gibi bölümleri dinamik olarak `src/portfolio.js` dosyasından yönetir.

## Başlarken

```bash
npm install
npm start
```

- `npm start` komutu yerel geliştirme sunucusunu `http://localhost:3000` adresinde başlatır.
- `npm run build` komutu üretim için optimizasyonlu derleme oluşturur.

## Yapı

- `src/portfolio.js`: Tüm içerik verileri burada tanımlanır.
- `public/`: Meta etiketleri, manifest ve statik dosyalar.
- `src/containers/`: Sayfa bölümlerini oluşturan React bileşenleri.
- `src/assets/`: Görseller ve animasyonlar.

## Dağıtım

Depo GitHub'a push edildikten sonra Netlify ile otomatik olarak dağıtılabilir.

1. Netlify hesabında "Add new site" → "Import an existing project" adımları izlenir.
2. Build komutu `npm run build`, publish klasörü `build` olarak ayarlanır.
3. `ibrahimyagar.com` alan adı Netlify üzerinden yönlendirilerek ücretsiz SSL sertifikasıyla servise alınabilir.

## Lisans

Bu proje İbrahim Yağar için özelleştirilmiştir. Template olarak DeveloperFolio kullanılmış, fakat içeriği ve yapılandırması kişiselleştirilmiştir.
