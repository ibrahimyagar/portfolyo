/* Portfolio content — İbrahim Yağar */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "ℑ𝔟𝔯𝔞𝔥𝔦𝔪 𝔜𝔞𝔤𝔞𝔯",
  title: "Merhaba ben İbrahim Yağar",
  subTitle: emoji(
    "Full-stack geliştirici olarak Java Spring Boot, .NET Core ve React ile ölçeklenebilir çözümler geliştiriyorum."
  ),
  resumeLink: "",
  displayGreeting: true
};

// About Section

const aboutSection = {
  display: true,
  title: "Hakkımda",
  description: [
    "Merhaba, ben İbrahim Yağar. Bilgisayar Mühendisliği mezunuyum ve full-stack geliştirme alanında çalışmalar yapıyorum. Özellikle Java Spring Boot ve .NET Core ile backend geliştirme; React ile kullanıcı arayüzü geliştirme konularında deneyim sahibiyim. PostgreSQL, MySQL ve MS SQL veritabanlarıyla çalıştım. Projelerimde Docker, Git ve Jenkins kullanarak CI/CD süreçlerini kurguladım; mikroservis ve katmanlı mimari yaklaşımlarıyla ölçeklenebilir uygulamalar tasarladım. Yazılım geliştirme sürecinde Clean Code yaklaşımına ve SOLID prensiplerine dikkat etmeye özen gösteriyorum.",
    "Kariyer hedefim; güncel teknolojileri takip eden, sorumluluk alan, yenilikçi projelerde aktif rol oynayan ve bulunduğum ekibe değer katan bir yazılım geliştirici olarak kendimi sürekli geliştirmektir."
  ],
  downloadGroups: [
    {
      locale: "tr",
      flag: "🇹🇷",
      label: "Türkçe",
      items: [
        {
          text: "Özgeçmiş",
          href: "/downloads/TR_CV.pdf"
        },
        {
          text: "Niyet Mektubu",
          href: "/downloads/niyet-mektubu.pdf"
        }
      ]
    },
    {
      locale: "en",
      flag: "🇬🇧",
      label: "English",
      items: [
        {
          text: "CV",
          href: "/downloads/Eng_CV.pdf"
        },
        {
          text: "Cover Letter",
          href: "/downloads/cover-letter-en.pdf"
        }
      ]
    }
  ]
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ibrahimyagar",
  linkedin: "https://linkedin.com/in/ibrahim-ya%C4%9Far-09580918b",
  gmail: "ibrahimyagar.mh@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true
};

// Skills Section

const skillsSection = {
  title: "Deneyimlediğim Teknolojiler",
  subTitle:
    "Projeler geliştirirken deneyimlediğim teknolojileri inceleyebilirsiniz.",
  skills: [],

  /* Categorized skills by technology type */
  categorizedSkills: [
    {
      categoryName: "Backend",
      gridArea: "backend",
      skills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "fab fa-microsoft"
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "fab fa-microsoft"
        },
        {
          skillName: "ASP.NET",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      categoryName: "Frontend",
      gridArea: "frontend",
      skills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "React",
          fontAwesomeClassname: "fab fa-react"
        }
      ]
    },
    {
      categoryName: "Database",
      gridArea: "database",
      skills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "MSSQL",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "fas fa-database"
        }
      ]
    },
    {
      categoryName: "Tools",
      gridArea: "tools",
      skills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "fab fa-git-alt"
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "fab fa-jenkins"
        }
      ]
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bandırma Onyedi Eylül Üniversitesi",
      logo: require("./assets/images/bandirma-logo.png"),
      subHeader: "Bilgisayar Mühendisliği",
      duration: "Ağustos 2021 - Haziran 2025",
      desc: "Full-stack development, veri yapıları, algoritmalar ve yazılım mühendisliği alanlarında eğitim aldım.",
      descBullets: []
    },
    {
      schoolName: "Erciyes Üniversitesi",
      logo: require("./assets/images/eru-logo.png"),
      subHeader: "Makine Mühendisliği",
      duration: "Ağustos 2019 - Temmuz 2021",
      desc: "Mühendislik temelleri, teknik düşünme ve problem çözme becerileri kazandım.",
      descBullets: []
    }
  ]
};

// Tech proficiency bars

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Veri Analizi",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Yazılım Stajyeri",
      company: "Arnavutköy Belediyesi Bilişim Akademisi",
      companylogo: require("./assets/images/arnavutkoy-bilisim-akademisi.png"),
      date: "Temmuz 2024 – Ağustos 2024",
      desc: "Java, Spring Boot ve React kullanarak Kütüphane Otomasyon Sistemi geliştirdim. Sistem; kitap yönetimi, kullanıcı yönetimi ve ödünç–iade işlemlerinin dijital ortamda takip edilmesini sağlamaktadır.",
      descBullets: [
        "Rol bazlı yetkilendirme, JWT kimlik doğrulama ve PostgreSQL veritabanı entegrasyonu ile güvenli ve ölçeklenebilir bir yapı oluşturuldu.",
        "Kullanıcıların kayıt, giriş ve profil yönetimi",
        "Kitap ekleme, düzenleme, silme ve stok takibi",
        "Ödünç/iade süreç takibi ve gecikme kontrolü",
        "Rol bazlı erişim (Kullanıcı / Yönetici)",
        "React arayüzü ile kitap arama ve filtreleme",
        "Teknolojiler: Spring Boot, Spring Security, JWT, PostgreSQL, JPA/Hibernate, React, Axios, Git/GitHub"
      ]
    },
    {
      role: "Yazılım Stajyeri",
      company: "Arnavutköy Belediyesi Bilişim Akademisi",
      companylogo: require("./assets/images/arnavutkoy-bilisim-akademisi.png"),
      date: "Ağustos 2024 – Eylül 2024",
      desc: "ASP.NET Core MVC kullanılarak Eğitim Yönetim Platformu geliştirdim. Platformun amacı, öğretmen ve öğrencilerin çevrim içi sınıf ortamında etkileşim kurabilmelerini sağlamaktır.",
      descBullets: [
        "Öğretmenler sınıf oluşturabilir, ödev ekleyebilir ve duyuru paylaşabilir; öğrenciler ise sınıfa katılabilir, ödevleri görüntüleyebilir ve teslim edebilir.",
        "Rol Yönetimi: Öğretmen ve öğrenci rolleri Identity üzerinden yapılandırılmıştır.",
        "Sınıf Yönetimi: Öğretmenler sınıf oluşturabilir ve sınıfa öğrencilerin katılması için kod paylaşabilir.",
        "Ödev Sistemi: Öğretmen ödev yükleyebilir, öğrenci ödev teslim edebilir ve son teslim tarihleri görüntülenebilir.",
        "Duyuru Akışı: Sınıf genelinde duyurular görüntülenebilir.",
        "Materyal Yönetimi: Öğretmen ders materyalleri yükleyebilir ve öğrenciler bunları görüntüleyebilir.",
        "Teknolojiler: C#, ASP.NET Core MVC, Identity Framework, Entity Framework Core, MSSQL, HTML/CSS, Bootstrap, JavaScript"
      ]
    }
  ]
};

/* GitHub pinned projects (optional) */

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projeler",
  subtitle: "",
  projects: [
{
      image: require("./assets/images/arnavutkoy-showcase.png"),
      projectName: "Arnavutköy Dijital Hizmetler",
      projectDesc:
        "Vatandaş portalı, e-belediye, ulaşım ve personel ekranlarını birleştiren dijital hizmetler platformu",
      technologies: [
        "ASP.NET Core 8",
        ".NET 8",
        "PostgreSQL",
        "Entity Framework Core",
        "React 19",
        "TypeScript",
        "Vite",
        "Docker",
        "JWT"
      ],
      detailedDesc:
        "Kamu dijital hizmet akışlarını modelleyen monorepo: vatandaş portalı, e-belediye modülleri, ulaşım bilgi sistemi ve personel operasyon ekranları. Clean Architecture + CQRS ile .NET 8 API ve React 19 SPA.\n\nTemel Özellikler:\n✅ Kimlik ve hesap: Kayıt, e-posta doğrulama, JWT access/refresh, şifre sıfırlama\n✅ E-hizmetler: Borç sorgulama/ödeme, belge başvurusu, randevu, talep/öneri\n✅ Ulaşım: Hat kataloğu, güzergâh/sefer, harita, ulaşım kartı\n✅ Kurumsal içerik: Haber, duyuru, etkinlik, birim dizini\n✅ Personel panelleri: Görevli ve yönetici operasyon ekranları\n\nTeknoloji ve Mimari:\n- Backend: ASP.NET Core 8, Clean Architecture, CQRS (MediatR)\n- Veri: EF Core 8 + PostgreSQL\n- Frontend: Vite, React 19, TypeScript\n- Dağıtım: Docker Compose, Cloudflare Pages + Render",
      screenshots: [
        {
          image: require("./assets/images/arnavutkoy-ana-sayfa.png"),
          name: "Ana Sayfa"
        },
        {
          image: require("./assets/images/arnavutkoy-giris.png"),
          name: "Giriş"
        },
        {
          image: require("./assets/images/arnavutkoy-e-belediye.png"),
          name: "E-Belediye"
        },
        {
          image: require("./assets/images/arnavutkoy-panel.png"),
          name: "Vatandaş Paneli"
        },
        {
          image: require("./assets/images/arnavutkoy-ulasim.png"),
          name: "Ulaşım Ağı"
        }
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ibrahimyagar/arnavutkoy-digital-services-platform"
        },
        {
          name: "Canlı Demo",
          url: "https://arnavutkoydijitalhizmetler.com.tr"
        }
      ]
    },
{
      image: require("./assets/images/eduhub-logo-photoroom.png"),
      projectName: "EduHub",
      projectDesc: "Eğitim Platformu - Online Öğrenme ve Canlı Ders Sistemi",
      technologies: [
        "ASP.NET Core MVC",
        ".NET 8.0",
        "Entity Framework Core",
        "SQL Server",
        "Bootstrap 5",
        "jQuery",
        "Jitsi Meet",
        "StackBlitz",
        "iyzico"
      ],
      detailedDesc:
        "YouTube benzeri, eğitmen ve öğrencileri aynı platformda buluşturan kapsamlı bir online eğitim ve canlı ders deneyimi geliştirdim. Platform, eğitmenlerin içeriklerini ücretli veya ücretsiz yayınlamasını, öğrencilerin yorum ve puanlara göre eğitmen seçmesini ve kullanıcıların eş zamanlı olarak hem öğrenci hem eğitmen rolü üstlenmesini sağlar.\n\nTemel Özellikler:\n✅ Kullanıcı Yönetimi: ASP.NET Core Identity ile güvenli kimlik doğrulama ve yetkilendirme.\n✅ Sınıf Yönetimi: Öğretmenler sınıf oluşturabilir, öğrenciler benzersiz kod ile katılabilir.\n✅ Ödev Sistemi: Ödev oluşturma, dosya yükleme, puanlama ve teslim takibi.\n✅ Duyuru Sistemi: Sınıf içi duyuru paylaşımı ve yorum akışı.\n✅ Öğretmen Değerlendirme: Öğrenciler eğitmenleri puanlayıp yorum yazabilir.\n✅ Dosya Yönetimi: Ödev ve proje dosyaları için güvenli yükleme/saklama.\n✅ Arşivleme: Sınıfları arşivleme ve geri getirme özelliği.\n✅ Rol Yönetimi: Eğitmen ve öğrenci rolleriyle kapsamlı yetkilendirme.\n✅ Esnek Fiyatlandırma: Eğitimler ücretsiz başlayıp geri bildirimlere göre ücretliye dönebilir.\n✅ Proje İndirme: Öğrenciler çalışmalarını VSCode gibi editörlerde açılacak biçimde indirebilir.\n\nİleri Seviye Özellikler:\n🎥 Canlı Ders Desteği: Jitsi Meet entegrasyonu ile gerçek zamanlı video konferans.\n💻 Online Kod Editörü: StackBlitz entegrasyonu ile tarayıcıda kod yazma ve çalıştırma.\n💳 Ödeme Sistemi: iyzico entegrasyonu ile güvenli kurs satın alma.\n📚 Kurs Kataloğu: Açık katılımlı kurs listesi ve detay sayfaları.\n⭐ Eğitmen Puanlama: Şeffaf değerlendirme sistemi ile eğitmen kalitesi.\n🔐 Email doğrulama ve şifre sıfırlama akışları.\n🔒 Yetkilendirme kontrolleri ile güvenli erişim.\n📱 Responsive tasarım ile mobil uyumluluk.\n🎨 Bootstrap 5 ile modern ve sade arayüz tasarımı.\n\nTeknoloji ve Mimari:\n- Backend: ASP.NET Core 8.0 (MVC)\n- Veritabanı: Microsoft SQL Server & Entity Framework Core\n- Kimlik Doğrulama: ASP.NET Core Identity\n- Real-time İletişim: Jitsi Meet & SignalR\n- Frontend: Razor Views, Bootstrap 5, jQuery, JavaScript\n- Dosya Yönetimi: Çoklu dosya yükleme ve indirme altyapısı\n- Mimari: MVC katmanlı yapı, role-based authorization, Docker ile containerization",
      screenshots: [
        {
          image: require("./assets/images/eduhub-homepage.png"),
          name: "Ana Sayfa"
        },
        {
          image: require("./assets/images/eduhub-dashboard.png"),
          name: "Kontrol Paneli"
        },
        {
          image: require("./assets/images/eduhub-course-detail.png"),
          name: "Kurs Detayı"
        },
        {
          image: require("./assets/images/eduhub-live-lesson.png"),
          name: "Canlı Ders"
        }
      ],
      footerLink: [
        {name: "GitHub", url: "https://github.com/ibrahimyagar/EduHub"},
        {name: "Canlı Demo", url: ""}
      ]
    },
{
      image: require("./assets/images/kutuphane-logo.png"),
      projectName: "Kütüphane Yönetim Sistemi",
      projectDesc:
        "ASP.NET Core MVC ile geliştirilmiş profesyonel kütüphane yönetim sistemi",
      technologies: [
        "ASP.NET Core MVC",
        ".NET 7.0",
        "Entity Framework Core",
        "SQL Server",
        "ASP.NET Core Identity",
        "Bootstrap 5",
        "jQuery",
        "Razor Pages"
      ],
      detailedDesc:
        "ASP.NET Core MVC ile geliştirilmiş profesyonel bir kütüphane yönetim sistemidir. Bu sistem, kütüphanelerin kitap envanterini, kullanıcı işlemlerini ve kiralama süreçlerini dijitalleştirmek için tasarlanmıştır.\n\nTemel Özellikler:\n\nKitap Yönetimi: Kitap ekleme, güncelleme ve silme işlemleri, kitap bilgileri (ad, yazar, fiyat, tanım), kitap görsel yükleme desteği, kitap türüne göre kategorilendirme\n\nKitap Türü Yönetimi: Kitap türü ekleme ve düzenleme, kitap türü listeleme ve silme, kategorilere göre filtreleme\n\nKiralama İşlemleri: Kitap kiralama kayıtları, öğrenci-kitap eşleştirmesi, kiralama geçmişi takibi\n\nGüvenlik ve Yetkilendirme: ASP.NET Core Identity ile kullanıcı yönetimi, rol tabanlı yetkilendirme (Admin, Öğrenci), güvenli oturum yönetimi",
      screenshots: [
        {
          image: require("./assets/images/library-kitaplar.png"),
          name: "Kitaplar"
        },
        {
          image: require("./assets/images/library-kitap-turleri.png"),
          name: "Kitap Türleri"
        },
        {
          image: require("./assets/images/library-kitap-ekle.png"),
          name: "Kitap Ekle"
        },
        {
          image: require("./assets/images/library-kitap-kirala.png"),
          name: "Kitap Kirala"
        }
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ibrahimyagar/Kutuphane-Sistemi"
        },
        {name: "Canlı Demo", url: ""}
      ]
    },
{
      image: require("./assets/images/teachflow-logo.png"),
      projectName: "TeachFlow",
      projectDesc:
        "Öğretmenler ve öğrenciler için geliştirilmiş modern bir sınıf yönetim sistemi",
      technologies: [
        "ASP.NET Core MVC",
        ".NET 8.0",
        "Entity Framework Core",
        "SQL Server",
        "ASP.NET Core Identity",
        "Bootstrap",
        "jQuery"
      ],
      detailedDesc:
        "TeachFlow, öğretmenler ve öğrenciler için geliştirilmiş modern bir sınıf yönetim sistemidir. Bu platform, sınıf oluşturma, ödev yönetimi, duyuru sistemi ve öğrenci takibi gibi özellikler sunar.\n\nÖzellikler:\n\nSınıf Yönetimi:\nSınıf oluşturma ve benzersiz kod ile paylaşım\nSınıfa katılma (kod ile)\nSınıf arşivleme ve geri alma\nÖğretmen/Öğrenci rol yönetimi\n\nÖdev Yönetimi:\nÖdev oluşturma ve teslim tarihi belirleme\nÖdev gönderme ve puanlama sistemi\nÖdev listesi görüntüleme\nTeslim tarihi kontrolü\n\nDuyuru Sistemi:\nDuyuru ekleme ve yönetme\nDuyurulara yorum yapma\nDuyuru silme\n\nKullanıcı Yönetimi:\nASP.NET Core Identity ile kimlik doğrulama\nÖğrenci-Öğretmen rol ayrımı\nSınıf üyeleri yönetimi",
      screenshots: [
        {
          image: require("./assets/images/teachflow-anasayfa.png"),
          name: "Ana Sayfa"
        },
        {image: require("./assets/images/teachflow-login.png"), name: "Giriş"},
        {
          image: require("./assets/images/teachflow-dashboard.png"),
          name: "Kontrol Paneli"
        },
        {image: require("./assets/images/teachflow-panel.png"), name: "Panel"}
      ],
      footerLink: [
        {name: "GitHub", url: "https://github.com/ibrahimyagar/TeachFlow"},
        {name: "Canlı Demo", url: ""}
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Sertifikalar 🏆 "),
  subtitle:
    "Aldığım sertifikalar, tamamladığım kurslar ve katıldığım eğitimler !",

  achievementsCards: [
    {
      title: "Web Development with ASP.NET Core MVC 7.0",
      subtitle:
        "Tarih: Ağu 2024. ASP.NET Core MVC 7.0 ile modern web uygulamaları geliştirme konusunda kapsamlı bir eğitim aldım. Backend: ASP.NET Core MVC, C#, Entity Framework Core, SQL Server. Frontend: HTML, CSS, JavaScript, Bootstrap. Güvenlik: ASP.NET Core Identity, Authentication, Authorization.",
      image: require("./assets/images/udemy-logo1.png"),
      imageAlt: "Udemy Certificate",
      footerLink: [
        {name: "Sertifika", url: "/udemy-aspnet-core-mvc-7.0-certificate.pdf"}
      ]
    },
    {
      title: "Workintech Fullstack Bootcamp",
      subtitle:
        "960 saati aşkın yoğun eğitim sürecinde, 75 farklı proje ve 24 değerlendirme ile 10 ay boyunca hem frontend hem de backend alanında sağlam bir temel kazandım. Web & Temeller: HTML, CSS, JavaScript. Web Uygulama Geliştirme: React, Cypress.io. İleri Web Geliştirme: Redux, TanStack Query, TailwindCSS, OpenAI. Back-end: Java, Spring Boot, PostgreSQL, Hibernate.",
      image: require("./assets/images/workintech.jpeg"),
      imageAlt: "Bootcamp Logo",
      footerLink: [{name: "Sertifika", url: ""}]
    },
    {
      title: "Web Programlama Kursu",
      subtitle:
        "Tarih: Haz 2023. Arnavutköy Bilişim Akademisi'nde web programlama temelleri ve modern web geliştirme teknolojileri üzerine kapsamlı bir eğitim aldım. Temel Web Teknolojileri: HTML5, CSS3, JavaScript. Web Geliştirme: Responsive Tasarım, Bootstrap, DOM Manipülasyonu. Proje Yönetimi: Git, GitHub, Proje Geliştirme Süreçleri.",
      image: require("./assets/images/arnavutkoy-bilisim-akademisi.png"),
      imageAlt: "Web Programming Logo",
      footerLink: [{name: "Sertifika", url: ""}]
    },

    {
      title: "NFT Tasarımı ve Metaverse Kursu",
      subtitle:
        "Tarih: Haz 2023. Arnavutköy Bilişim Akademisi'nde NFT tasarımı, blockchain teknolojisi ve metaverse dünyası hakkında kapsamlı bir eğitim aldım. NFT Tasarımı: Dijital Sanat, Koleksiyon Tasarımı, NFT Pazaryerleri. Blockchain Teknolojisi: Blockchain Temelleri, Akıllı Kontratlar, Kripto Para Birimleri. Metaverse: Sanal Dünya Platformları, 3D Tasarım, VR/AR Teknolojileri.",
      image: require("./assets/images/arnavutkoy-bilisim-akademisi.png"),
      imageAlt: "NFT and Metaverse Logo",
      footerLink: [{name: "Sertifika", url: ""}]
    },
    {
      title: "Bilgisayar ve Yabancı Dil Sertifikası",
      subtitle:
        "Tarih: Nis 2017. Özçaba Bilgisayar ve Yabancı Dil Kursu'nda temel bilgisayar becerileri ve yabancı dil eğitimi aldım. Bilgisayar Becerileri: Microsoft Office, Windows İşletim Sistemi, Temel Bilgisayar Kullanımı. Yabancı Dil: İngilizce Dil Eğitimi, Okuma, Yazma, Konuşma Becerileri.",
      image: require("./assets/images/ozcaba-logo.png"),
      imageAlt: "Computer and Language Certificate",
      footerLink: [{name: "Sertifika", url: ""}]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle: "Yazılım ve teknoloji üzerine notlar.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Konuşmalar",
  subtitle: emoji("Bilgi paylaşmayı seviyorum."),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Kendimden ve teknolojiden konuşmayı seviyorum.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Özgeçmiş",
  subtitle: "Özgeçmişimi indirmekten çekinmeyin",
  display: true
};

const contactInfo = {
  title: emoji("İletişime Geçin ☎️"),
  subtitle:
    "Bir proje hakkında konuşmak veya merhaba demek ister misiniz? Gelen kutum herkese açık.",
  number: "+90 505 326 75 44",
  email_address: "ibrahimyagar.mh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  aboutSection,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
