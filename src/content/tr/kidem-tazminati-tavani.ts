import { PageContent } from '../types';

export const kidemTazminatiTavaniTr: PageContent = {
  metaTitle: 'Kıdem Tazminatı Tavanı 2026 | Güncel ve Geçmiş Tavanlar',
  metaDescription:
    '2026 güncel kıdem tazminatı tavanı tutarı, memur maaş katsayısı formülü, 2018-2026 yarıyıllık geçmiş tavan tablosu ve tavan aşımında vergi kuralları.',
  h1: 'Kıdem Tazminatı Tavanı 2026 (Güncel Tavan ve Yıllık Tablo)',
  quickAnswer:
    "2026 yılının ilk 6 aylık dönemi (1 Ocak - 30 Haziran 2026) için kıdem tazminatı tavanı 59.250,00 TL'dir. Tavan tutarı, 657 sayılı Devlet Memurları Kanunu uyarınca en yüksek devlet memuruna bir hizmet yılı için ödenecek emeklilik ikramiyesine endekslidir. Çalışanın giydirilmiş brüt ücreti bu rakamın üzerinde olsa dahi, yasal kıdem tazminatı her yıl için azami 59.250,00 TL üzerinden hesaplanır.",
  howItWorks: [
    {
      label: 'Memur Maaş Katsayısı ve Tavanın Belirlenmesi',
      formula: 'Tavan = Gösterge × Memur Aylık Katsayısı + Ek Gösterge İkramiyesi',
      ruleCitation: '1475 sayılı İş Kanunu Madde 14 ve 657 sayılı DMK',
      effectiveDate: 'Hazine ve Maliye Bakanlığı tarafından her yıl Ocak ve Temmuz aylarında genelgeyle ilan edilir.',
    },
    {
      label: 'Fesih Tarihindeki Geçerli Tavanın Esas Alınması',
      formula: 'Uygulanan Tavan = Fesih Bildiriminin Hüküm Doğurduğu Tarihteki Tavan',
      ruleCitation: 'Yargıtay Hukuk Genel Kurulu Kararları',
      effectiveDate: 'Çalışmanın geçtiği geçmiş yıllar değil, sözleşmenin fiilen feshedildiği tarihteki tavan geçerlidir.',
    },
    {
      label: 'Tavan Üzeri Ücretlerde Kıdem Hesabı',
      formula: 'Brüt Yıllık Kıdem = Min(Giydirilmiş Brüt Ücret, 59.250,00 TL)',
      ruleCitation: '1475 sayılı Kanun Madde 14 Fıkra 13',
      effectiveDate: 'Giydirilmiş ücret tavanı aştığında aşan kısım yasal zorunlu kıdem hesabında dikkate alınmaz.',
    },
    {
      label: 'Tavan İçi ve Tavan Dışı Vergilendirme Ayrımı',
      formula: 'Tavan İçi: Sadece Damga Vergisi (%0,759) | Tavan Üstü: Gelir Vergisi + SGK',
      ruleCitation: '193 sayılı Gelir Vergisi Kanunu Madde 25 Fıkra 7',
      effectiveDate: 'İşveren tavanı aşan rızai ödeme yaparsa aşan kısım normal ücret gibi tam vergilendirilir.',
    },
  ],
  articleSections: [
    {
      id: 'kidem-tavani-nedir-ve-nasil-belirlenir',
      title: 'Kıdem Tazminatı Tavanı Nedir ve Nasıl Belirlenir?',
      level: 2,
      content: `Kıdem tazminatı tavanı, işçinin iş sözleşmesinin sona ermesi halinde, işverence ödenebilecek yasal kıdem tazminatının bir tam yıl için uygulanabilecek üst sınırını ifade eder. 1475 sayılı İş Kanunu'nun halen yürürlükte olan 14. maddesinde tavan şöyle tanımlanmıştır: "Toplu sözleşmelerle ve hizmet akitleriyle belirlenen kıdem tazminatlarının yıllık miktarı, Devlet Memurları Kanununa tabi en yüksek Devlet memuruna bir hizmet yılı için ödenecek azami emeklilik ikramiyesini geçemez."

En yüksek devlet memuru Cumhurbaşkanlığı İdari İşler Başkanı (eski adıyla Başbakanlık Müsteşarı) olup, bu unvanın taban aylığı, kıdem aylığı, ek göstergesi (8400) ve kıdem katsayıları toplanarak bir hizmet yılına düşen azami emeklilik ikramiyesi hesaplanır.

Hazine ve Maliye Bakanlığı, her yıl Ocak ve Temmuz aylarında yayımladığı **Mali ve Sosyal Haklar Genelgesi** ile memur maaş katsayılarını ve buna bağlı olarak resmi kıdem tazminatı tavanını kamuoyuna duyurur. Dolayısıyla kıdem tazminatı tavanı yılda iki kez (Ocak-Haziran ve Temmuz-Aralık) güncellenmektedir. 2026 yılı ilk yarısı tavanı **59.250,00 TL**'dir.`,
    },
    {
      id: 'gecmis-yillar-kidem-tavani-tablosu',
      title: 'Yıllara Göre Kıdem Tazminatı Tavanı Gelişimi (2018 - 2026)',
      level: 2,
      content: `Kıdem tazminatı tavanı memur maaş zamlarına paralel olarak sürekli revize edilmektedir. Aşağıdaki tabloda 2018 yılından itibaren uygulanan tüm yarıyıllık tavan tutarları gösterilmiştir:

| Yıl ve Dönem | Geçerlilik Tarihleri | Kıdem Tazminatı Tavanı (TL) |
| :--- | :--- | :--- |
| **2018 (1. Dönem)** | 01.01.2018 - 30.06.2018 | 5.001,76 TL |
| **2018 (2. Dönem)** | 01.07.2018 - 31.12.2018 | 5.434,58 TL |
| **2019 (1. Dönem)** | 01.01.2019 - 30.06.2019 | 6.017,60 TL |
| **2019 (2. Dönem)** | 01.07.2019 - 31.12.2019 | 6.379,86 TL |
| **2020 (1. Dönem)** | 01.01.2020 - 30.06.2020 | 6.730,15 TL |
| **2020 (2. Dönem)** | 01.07.2020 - 31.12.2020 | 7.117,17 TL |
| **2021 (1. Dönem)** | 01.01.2021 - 30.06.2021 | 7.638,96 TL |
| **2021 (2. Dönem)** | 01.07.2021 - 31.12.2021 | 8.284,51 TL |
| **2022 (1. Dönem)** | 01.01.2022 - 30.06.2022 | 10.848,59 TL |
| **2022 (2. Dönem)** | 01.07.2022 - 31.12.2022 | 15.371,40 TL |
| **2023 (1. Dönem)** | 01.01.2023 - 30.06.2023 | 19.982,83 TL |
| **2023 (2. Dönem)** | 01.07.2023 - 31.12.2023 | 23.489,83 TL |
| **2024 (1. Dönem)** | 01.01.2024 - 30.06.2024 | 35.058,58 TL |
| **2024 (2. Dönem)** | 01.07.2024 - 31.12.2024 | 41.828,42 TL |
| **2025 (1. Dönem)** | 01.01.2025 - 30.06.2025 | 46.550,00 TL |
| **2025 (2. Dönem)** | 01.07.2025 - 31.12.2025 | 53.120,00 TL |
| **2026 (1. Dönem)** | **01.01.2026 - 30.06.2026** | **59.250,00 TL** |

Bu tablodan anlaşılacağı üzere, fesih tarihi kıdem tazminatı tutarını dramatik ölçüde etkileyebilmektedir. Örneğin 30 Haziran'da işten ayrılmak ile 1 Temmuz'da ayrılmak arasında yeni tavan artışından kaynaklanan çok ciddi tazminat farkları doğabilmektedir.`,
    },
    {
      id: 'fesih-tarihi-ve-tavan-uygulama-kurali',
      title: 'Fesih Tarihindeki Tavan Kuralı ve Yargıtay İçtihatları',
      level: 2,
      content: `Kıdem tazminatında en çok yanılgıya düşülen konulardan biri, geçmiş yıllardaki hizmetlerin o yılların tavanı üzerinden hesaplanacağı zannıdır. Bu kesinlikle yanlıştır!

Yargıtay Hukuk Genel Kurulu'nun yerleşik içtihatlarına göre:
- **Tek Tavan İlkesi**: Çalışanın 10 yıl, 15 yıl hatta 25 yıllık hizmeti bulunsa dahi, tüm çalışma süresi için **iş sözleşmesinin fiilen sona erdiği tarihteki güncel tavan** esas alınır. Geçmiş yıllara dönük ayrı ayrı tavan hesaplaması yapılamaz.
- **İhbar Öneli Süresi ve Tavan**: Şayet işveren işçiye ihbar öneli kullandırmışsa, tavan tarihi ihbar bildiriminin tebliğ edildiği gün değil, ihbar önelinin bittiği ve iş akdinin fiilen sonlandığı gündeki tavan olur. Örneğin 15 Mayıs'ta 8 haftalık ihbar öneli verilen bir işçinin fesih tarihi Temmuz ayına sarkarsa, Temmuz ayında yürürlüğe giren yeni ve daha yüksek tavan üzerinden kıdem tazminatı ödenmelidir.
- **Tavan Mutlak Emredici midir?**: Kanundaki tavan kamu düzenine ilişkindir. İş sözleşmesine "Kıdem tazminatı tavansız olarak tam brüt maaş üzerinden ödenir" maddesi konsa dahi işveren yasal tavanı aşan kısmı zorunlu kıdem tazminatı olarak ödemekle yükümlü tutulamaz.`,
    },
    {
      id: 'tavani-asan-odemelerin-vergilendirilmesi',
      title: 'Tavanı Aşan Kıdem Ödemelerinin Vergi ve SGK Boyutu',
      level: 2,
      content: `İş Kanunu m.14 işvereni tavanın üzerinde ödeme yapmaya zorlayamaz. Ancak işveren kendi isteğiyle veya şirket ikale (karşılıklı fesih anlaşması) politikaları gereğince çalışanına tavanın üzerinde kıdem tazminatı veya ek tazminat ödeyebilir.

Bu durumda uygulanacak vergi kuralları şöyledir:
1. **Yasal Tavan Dahilindeki Kısım (59.250 TL/Yıl)**:
193 sayılı Gelir Vergisi Kanunu 25/7 maddesi uyarınca gelir vergisinden ve 5510 sayılı Kanun uyarınca SGK priminden tamamen müstesnadır. Bu kısımdan yalnızca binde 7,59 damga vergisi kesilir.
2. **Yasal Tavanı Aşan Kısım**:
Tavanı aşan tutarlar kıdem tazminatı istisnasından faydalanamaz. 303 Seri No'lu Gelir Vergisi Genel Tebliği uyarınca, aşan kısım çalışana ödenen "ek ücret/ikramiye" niteliğinde kabul edilir.
- Çalışanın kümülatif vergi matrahına eklenerek **%15 ile %40 arasında Gelir Vergisi** kesilir.
- SGK prime esas kazanç tavanına kadar olan kısmı üzerinden **%14 SGK işçi hissesi ve %1 işsizlik primi** kesintisi yapılır.
- Tutarın tamamından binde 7,59 Damga Vergisi kesilir.

Dolayısıyla tavan üstü ödemelerde işçinin eline geçen net rakam, vergi ve SGK kesintileri nedeniyle tavan içi ödemeye göre oransal olarak daha düşüktür.`,
    },
    {
      id: 'tavan-degisim-donemlerinde-stratejik-istifa-ve-fesih',
      title: 'Tavan Değişim Dönemlerinde (Haziran/Temmuz) Fesih Tarihi Planlaması',
      level: 2,
      content: `Kıdem tazminatı tavanı memur maaş katsayılarına endeksli olarak her yılın 1 Ocak ve 1 Temmuz tarihlerinde güncellenir. Özellikle yüksek brüt maaş alan ve uzun yıllardır aynı şirkette çalışan personeller için fesih tarihinin zamanlaması çok büyük meblağlar ifade edebilir:

Zamanlama Stratejileri ve Yargıtay İlkeleri:
- **Haziran Sonu ile Temmuz Başı Ayrımı**: Örneğin 10 yıllık kıdemi olan ve brüt maaşı 80.000 TL olan bir çalışan, 30 Haziran tarihinde emeklilik veya evlilik gerekçesiyle ayrıldığında 59.250 TL tavan üzerinden toplam 592.500 TL brüt kıdem alır. Ancak fesih tarihini sadece 1 gün erteleyip 1 Temmuz gününe bıraktığında, Temmuz ayında yürürlüğe girecek yeni ve zamlı memur katsayısı üzerinden (örneğin %15-20 artışla) 680.000 - 710.000 TL civarında kıdem tazminatına hak kazanabilir.
- **İhbar Öneli Sayesinde Yeni Tavana Ulaşma**: İşverenin Mayıs veya Haziran ayında fesih bildiriminde bulunduğu durumlarda, 8 haftalık ihbar öneli Temmuz ayına sarkarsa, feshin hüküm doğurduğu tarihteki Temmuz tavanı uygulanır. İşçinin bu hakka sahip olması için ihbar süresinin son gününün yeni döneme geçmiş olması kafidir.
- **Toplu Sözleşmeli İşyerlerinde Tavan**: Sendikalı işyerlerinde imzalanan Toplu İş Sözleşmelerinde (TİS) kıdem tazminatı gün sayısı 30 günden 40 veya 45 güne çıkarılsa dahi, yıllık ödenebilecek yasal üst tutar kanuni tavanı aşamaz; aşan kısımlar gelir vergisine tabi ek menfaat olarak değerlendirilir.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Brüt Maaşı 50.000 TL Olan Çalışanın Kıdem Hesabı (Tavan Aşılmadı)',
      scenario:
        'Aynı işyerinde 6 tam yıl çalışan bir uzmanın giydirilmiş brüt ücreti 50.000 TL\'dir. 2026 Mart ayında iş akdi feshedilmiştir.',
      calculationType: 'custom',
      inputAmount: 50000.0,
      resultTotal: 297723.00,
      customFields: [
        { label: 'Hizmet Süresi', value: '6 tam yıl' },
        { label: 'Giydirilmiş Brüt Ücret', value: '50.000,00 TL' },
        { label: '2026 Yarıyıl Tavanı', value: '59.250,00 TL (Tavan Altında)' },
        { label: 'Brüt Kıdem Tazminatı', value: '300.000,00 TL' },
        { label: 'Damga Vergisi (%0,759)', value: '2.277,00 TL' },
        { label: 'Ödenecek Net Kıdem', value: '297.723,00 TL', highlight: true },
      ],
      explanation:
        'Çalışanın ücreti 50.000 TL olup 59.250 TL tavanın altında kaldığından hesaplama doğrudan 50.000 TL üzerinden yapılır. 6 yıl × 50.000 = 300.000 TL brüt kıdem bulunur. Binde 7,59 damga vergisi düşüldükten sonra net 297.723,00 TL ödenir.',
    },
    {
      title: 'Örnek 2: Brüt Maaşı 95.000 TL Olan Üst Düzey Yöneticinin Kıdem Hesabı (Tavan Uygulamalı)',
      scenario:
        '10 yıl hizmeti bulunan bir genel müdür yardımcısının aylık brüt ücreti 95.000 TL\'dir. 2026 Nisan ayında emeklilik nedeniyle ayrılmıştır.',
      calculationType: 'custom',
      inputAmount: 95000.0,
      resultTotal: 588002.93,
      customFields: [
        { label: 'Hizmet Süresi', value: '10 tam yıl' },
        { label: 'Fiili Giydirilmiş Maaş', value: '95.000,00 TL' },
        { label: 'Hesaba Esas Alınan Tavan', value: '59.250,00 TL' },
        { label: 'Yasal Brüt Kıdem Tazminatı', value: '592.500,00 TL' },
        { label: 'Damga Vergisi (%0,759)', value: '4.497,07 TL' },
        { label: 'Ödenecek Net Kıdem', value: '588.002,93 TL', highlight: true },
      ],
      explanation:
        'Yöneticinin fiili maaşı 95.000 TL olmasına rağmen yasal kıdem tavanı olan 59.250,00 TL uygulanır. 10 yıl × 59.250,00 TL = 592.500,00 TL yasal brüt kıdem oluşur. Binde 7,59 damga vergisi (4.497,07 TL) kesildikten sonra net 588.002,93 TL ödenir.',
    },
  ],
  faqs: [
    {
      q: '2026 yılı kıdem tazminatı tavanı ne kadardır?',
      a: '2026 yılının 1 Ocak - 30 Haziran döneminde geçerli olan kıdem tazminatı tavanı 59.250,00 TL\'dir.',
    },
    {
      q: 'Kıdem tazminatı tavanı yılda kaç kez değişir?',
      a: 'Kıdem tavanı memur maaş katsayısına bağlı olarak yılda iki kez; Ocak ve Temmuz aylarında Hazine ve Maliye Bakanlığı genelgesiyle güncellenir.',
    },
    {
      q: 'Maaşım tavanın üzerindeyse ne kadar kıdem alırım?',
      a: 'Maaşınız tavanın üzerinde olsa dahi her tam çalışma yılı için en fazla yasal tavan tutarı (2026 ilk yarı için 59.250 TL) üzerinden kıdem tazminatı alabilirsiniz.',
    },
    {
      q: 'İşveren tavanın üzerinde kıdem tazminatı ödeyebilir mi?',
      a: 'Evet, işveren kendi rızasıyla tavanı aşan tutarı ödeyebilir. Ancak tavanı aşan bu kısım kıdem istisnasından faydalanamaz; Gelir Vergisi ve SGK kesintisine tabi tutulur.',
    },
    {
      q: 'Eski yıllardaki çalışmalar eski tavanlardan mı hesaplanır?',
      a: 'Hayır. Yargıtay içtihatları uyarınca çalışma süresi kaç yıl olursa olsun, kıdem tazminatının tamamı işten ayrılış tarihindeki güncel tavan üzerinden tek seferde hesaplanır.',
    },
    {
      q: 'Kıdem tazminatı tavanından hangi vergi kesilir?',
      a: 'Yasal tavan tutarı dahilindeki kıdem tazminatından sadece binde 7,59 (%0,759) damga vergisi kesilir. Gelir vergisi ve SGK primi kesilmez.',
    },
    {
      q: 'İhbar tazminatında da tavan var mıdır?',
      a: 'Hayır. Kıdem tazminatındaki tavan uygulaması ihbar tazminatında geçerli değildir; ihbar tazminatı maaşın tamamı üzerinden hesaplanır.',
    },
    {
      q: 'Kıdem tazminatı tavanı kimin maaşına göre belirlenir?',
      a: '657 sayılı Kanuna tabi en yüksek devlet memuru olan T.C. Cumhurbaşkanlığı İdari İşler Başkanı\'nın bir hizmet yılı emeklilik ikramiyesine göre belirlenir.',
    },
  ],
  sources: [
    {
      label: 'T.C. Hazine ve Maliye Bakanlığı (HMB) Mali ve Sosyal Haklar Genelgeleri',
      url: 'https://www.hmb.gov.tr',
    },
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (1475 Sayılı İş Kanunu m.14)',
      url: 'https://www.mevzuat.gov.tr',
    },
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) Tazminat İstisnaları Genel Tebliğleri',
      url: 'https://www.gib.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'Kıdem Tazminatı Hesaplama',
      slug: 'tr/kidem-tazminati-hesaplama',
      description: '2026 tavanı ve giydirilmiş brüt ücretle net kıdem tazminatınızı hesaplayın.',
      category: 'Tazminat Hesaplama',
    },
    {
      title: 'Kıdem ve İhbar Birleşik Hesaplama',
      slug: 'tr/kidem-ve-ihbar-tazminati-hesaplama',
      description: 'İşten çıkarılma durumunda hak ettiğiniz toplam fesih alacağını hesaplayın.',
      category: 'Tazminat Hesaplama',
    },
  ],
  relatedGuides: [
    {
      title: 'Kıdem Tazminatı Şartları Rehberi',
      slug: 'tr/rehber/kidem-tazminati-sartlari',
      description: 'Hangi hallerde kıdem tazminatı ödenir? Madde madde yasal şartlar.',
      category: 'İş Hukuku Rehberleri',
    },
    {
      title: '2026 Gelir Vergisi Dilimleri Rehberi',
      slug: 'tr/gelir-vergisi-dilimleri',
      description: 'Ücret gelirleri vergi tarifesi ve kümülatif dilim hesaplama kuralları.',
      category: 'Vergi Rehberleri',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu sayfadaki veriler Hazine ve Maliye Bakanlığı 2026 yılı Mali ve Sosyal Haklar Genelgesi ve 1475 sayılı Kanun m.14 hükümlerine dayanmaktadır.',
};
