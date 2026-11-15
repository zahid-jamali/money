import { PageContent } from '../types';

export const bruttenNeteMaasTr: PageContent = {
  metaTitle: 'Brütten Nete Maaş Hesaplama 2026 | Bordro & Kesintiler',
  metaDescription:
    '2026 brütten nete maaş hesaplama aracı. SGK primi, işsizlik kesintisi, gelir vergisi dilimleri, asgari ücret vergi istisnası ve net bordro hesabı.',
  h1: 'Brütten Nete Maaş Hesaplama 2026 (Güncel Bordro Parametreleri)',
  quickAnswer:
    'Brüt maaştan öncelikle %14 SGK işçi hissesi ve %1 işsizlik sigortası primi kesilerek gelir vergisi matrahı bulunur. Kümülatif matraha göre %15 ile %40 arasındaki gelir vergisi ve binde 7,59 damga vergisi hesaplanır. 7349 sayılı Kanun gereğince asgari ücrete denk gelen gelir vergisi ve damga vergisi istisnaları düşülerek çalışanın eline geçen net maaş belirlenir.',
  howItWorks: [
    {
      label: 'SGK ve İşsizlik Primi Kesintilerinin Düşülmesi (%15)',
      formula: 'SGK İşçi (%14) = Brüt × 0,14 | İşsizlik İşçi (%1) = Brüt × 0,01',
      ruleCitation: '5510 sayılı Sosyal Sigortalar ve GSS Kanunu Madde 80-82',
      effectiveDate: 'Brüt ücrete SGK tavanına kadar uygulanır (2026 tavanı asgari ücretin 7,5 katıdır).',
    },
    {
      label: 'Gelir Vergisi Matrahının ve Diliminin Tespiti',
      formula: 'Aylık GV Matrahı = Brüt Maaş - SGK İşçi Payı (%14) - İşsizlik Payı (%1)',
      ruleCitation: '193 sayılı Gelir Vergisi Kanunu Madde 103 (2026 Ücret Tarifesi)',
      effectiveDate: 'Yıl içi kümülatif matraha göre sırasıyla %15, %20, %27, %35 ve %40 dilimleri uygulanır.',
    },
    {
      label: 'Asgari Ücret Vergi İstisnalarının Uygulanması (GVK m.23/18)',
      formula: 'Ödenecek GV = Max(0, Hesaplanan GV - Asgari Ücret GV İstisnası)',
      ruleCitation: '7349 sayılı Kanun ve GVK Madde 23 Fıkra 18',
      effectiveDate: 'Tüm çalışanların brüt asgari ücrete kadar olan kazançları gelir ve damga vergisinden muaftır.',
    },
    {
      label: 'Damga Vergisi ve Net Ele Geçen Maaş Hesabı',
      formula: 'Net Maaş = Brüt - SGK - İşsizlik - Ödenecek GV - Ödenecek Damga Vergisi',
      ruleCitation: '488 sayılı Damga Vergisi Kanunu ve 4857 SK',
      effectiveDate: 'Damga vergisi istisnası sonrası kalan net tutar çalışanın banka hesabına ödenir.',
    },
  ],
  articleSections: [
    {
      id: 'maas-kesintileri-ve-yasal-oranlar',
      title: 'Brüt Maaştan Yapılan Yasal Kesintiler ve 2026 Oranları',
      level: 2,
      content: `Türkiye'de çalışan bir personelin sözleşmesinde yazılı olan brüt maaş ile banka hesabına yatan net ücret arasında kanunen yapılması zorunlu yasal kesintiler bulunmaktadır. İşveren, 5510 sayılı Sosyal Sigortalar Kanunu ve 193 sayılı Gelir Vergisi Kanunu gereğince vergi ve prim sorumlusu sıfatıyla bu kesintileri doğrudan bordrodan yaparak devlete aktarır.

Bir çalışanın bordrosundan yapılan ana kesinti kalemleri şunlardır:

1. **SGK İşçi Primi (%14)**: Çalışanın emeklilik, malullük, iş kazası ve genel sağlık sigortası haklarının karşılanması için brüt ücret üzerinden kesilir. SGK primine esas kazançta yasal alt sınır brüt asgari ücret (26.005,50 TL), üst sınır ise bunun 7,5 katıdır.
2. **İşsizlik Sigortası Fonu İşçi Payı (%1)**: 4447 sayılı İşsizlik Sigortası Kanunu uyarınca, olası iş kaybı durumunda işsizlik ödeneğinden faydalanılabilmesi için kesilen primdir.
3. **Gelir Vergisi (%15 - %40)**: Brüt ücretten %15 toplam prim (%14 SGK + %1 İşsizlik) düşüldükten sonra kalan net vergi matrahı üzerinden artan oranlı gelir vergisi dilimleri doğrultusunda hesaplanır.
4. **Damga Vergisi (Binde 7,59 - %0,759)**: Bordrodaki brüt kazanç tutarı üzerinden alınan harç niteliğindeki vergidir.

2022 yılından itibaren yürürlüğe giren ve 2026 yılında da devam eden asgari ücret istisnası sayesinde, tüm çalışanların brüt ücretlerinin asgari ücrete kadar olan kısmından gelir ve damga vergisi alınmamaktadır.`,
    },
    {
      id: 'asgari-ucret-vergi-istisnasi-ve-matrah-muafiyeti',
      title: 'Asgari Ücret Vergi İstisnası Sistemi Nasıl Çalışır?',
      level: 2,
      content: `1 Ocak 2022 tarihli 7349 sayılı Kanun ile Türk vergi sisteminde devrim niteliğinde bir düzenleme yapılmıştır: 193 sayılı Gelir Vergisi Kanunu'nun 23. maddesinin 18. fıkrası uyarınca, çalışanların asgari ücret tutarına kadar olan ücretleri Gelir Vergisi ve Damga Vergisinden istisna tutulmuştur.

Bu kural yalnızca asgari ücretliler için değil, 40.000 TL, 80.000 TL veya 200.000 TL brüt maaş alan **tüm ücretli çalışanlar** için istisnasız uygulanır.

İstisnanın bordro matematiği şu şekilde çalışır:
- İlgili ayın brüt asgari ücreti (2026 yılı için 26.005,50 TL) üzerinden %15 işçi hissesi (3.900,83 TL) düşülür ve aylık 22.104,67 TL asgari ücret vergi matrahı hesaplanır.
- Bu matraha yıl içindeki kümülatif asgari ücret dilimine göre gelir vergisi hesaplanır.
- Yüksek maaşlı çalışanın bordrosunda hesaplanan toplam gelir vergisinden, asgari ücrete denk gelen gelir vergisi tutarı mahsup edilir (çıkarılır).
- Aynı şekilde brüt asgari ücretin binde 7,59'u oranındaki damga vergisi (197,38 TL) de çalışanın hesaplanan damga vergisinden düşülür.
- Böylece her çalışan, asgari ücretlinin faydalandığı vergi muafiyeti miktarında her ay net bir vergi avantajı elde eder.`,
    },
    {
      id: 'kumulatif-vergi-dilimleri-ve-maas-erimesi',
      title: 'Kümülatif Vergi Dilimleri ve Yıl İçinde Net Maaşın Azalması',
      level: 2,
      content: `Türkiye'de brüt ücret anlaşmasıyla çalışan personellerin en sık şikayet ettiği durum, yılın ilk aylarında (Ocak, Şubat) yüksek olan net maaşın, yılın ortalarına ve sonlarına doğru (özellikle Temmuz, Eylül, Ekim aylarında) kademeli olarak düşmesidir. Bu duruma halk arasında "vergi dilimine girme" veya "maaş erimesi" denir.

Bu durumun sebebi, Gelir Vergisi Kanunu'nun **artan oranlı kümülatif dilim sistemi**dir. Her ay brüt ücretten SGK primi düşüldükten sonra kalan net vergi matrahı, bir önceki ayların matrahları ile toplanarak kümülatif matraha eklenir.

2026 Yılı Ücret Gelirleri İçin Gelir Vergisi Tarifesi:
- **158.000 TL'ye kadar**: %15
- **330.000 TL'nin 158.000 TL'si için 23.700 TL, fazlası**: %20
- **1.200.000 TL'nin 330.000 TL'si için 58.100 TL, fazlası**: %27
- **4.300.000 TL'nin 1.200.000 TL'si için 293.000 TL, fazlası**: %35
- **4.300.000 TL'den fazlası**: %40

Örneğin aylık brüt 50.000 TL kazanan bir çalışanın aylık vergi matrahı 42.500 TL'dir. 4. ayda kümülatif matrahı 170.000 TL'ye ulaşır ve 158.000 TL sınırını aştığı için bir kısmı %20 dilimine girer. Sonbahar aylarında ise %27 dilimine geçildiğinden kesilen vergi miktarı artar ve çalışanın eline geçen net ücret belirgin şekilde geriler.`,
    },
    {
      id: 'isveren-maliyeti-ve-tesvikler',
      title: 'İşveren Maliyeti: SGK İşveren Hissesi ve %5 Düzenli Ödeme Teşviki',
      level: 2,
      content: `Bir çalışanın şirkete olan toplam maliyeti brüt maaşından ibaret değildir. İşveren, brüt maaşa ilave olarak devlete işveren payı primleri ödemek zorundadır:

İşveren Maliyet Bileşenleri:
- **SGK İşveren Primi**: Normal şartlarda %20,5'tir. Ancak SGK prim borcu bulunmayan, bildirgelerini yasal süresinde veren işverenlere 5510 sayılı Kanun'un 81/ı maddesi uyarınca **%5 Hazine puan indirimi (teşviki)** uygulanır. Bu teşvikle oran **%15,5**'e iner.
- **İşsizlik Sigortası İşveren Hissesi**: %2 oranında sabit işveren katkısıdır.
- **Toplam İşveren Yükü**: %5 teşvikten yararlanan işyerlerinde işveren maliyet oranı toplamda %17,5 (15,5 + 2); teşviksiz işyerlerinde ise %22,5 (20,5 + 2) olarak hesaplanır.

Örneğin brüt asgari ücreti 26.005,50 TL olan bir çalışanın %5 Hazine indirimli işveren maliyeti:
$$26.005,50 + (26.005,50 \\times 0,175) = 30.556,46 \\text{ TL}$$
olarak gerçekleşir. Şayet işverenin prim borcu varsa ve teşvikten yararlanamıyorsa bu maliyet 31.856,74 TL'ye yükselmektedir.`,
    },
    {
      id: 'yemek-yol-ve-yan-haklarin-vergilendirilmesi',
      title: 'Yemek, Yol ve Ayni Yardımlarda Güncel Vergi ve SGK İstisnaları',
      level: 2,
      content: `Bordro hesaplamalarında çalışana sağlanan yan haklar (yemek, ulaşım, kreş, özel sağlık sigortası), yasal limitler dahilinde vergiden ve SGK priminden istisna tutularak net ele geçen geliri artırır:

1. **Yemek Yardımı İstisnası**: Gelir Vergisi Kanunu 23/8 maddesi gereğince, fiilen çalışılan günler için personele yemek kartı veya nakit olarak ödenen günlük yemek bedelinin Gelir İdaresi tarafından belirlenen tavan tutarı gelir vergisinden istisnadır. 5510 sayılı Kanun uyarınca da günlük brüt asgari ücretin belirli oranına denk gelen yemek yardımı SGK prim matrahına dahil edilmez.
2. **Yol ve Servis Yardımı**: Personele toplu taşıma kartı (İstanbulkart vb.) verilmesi veya servis imkanı sağlanması halinde bu menfaatler gelir vergisinden ve SGK priminden %100 istisnadır. Nakit yol yardımı ödenmesi halinde ise Gelir İdaresi günlük yol istisnası tutarı kadar muafiyet tanır; aşan kısım vergilendirilir.
3. **Bireysel Emeklilik (BES) ve Özel Sağlık Sigortası**: İşveren tarafından personelin şahsı, eşi ve çocukları için ödenen özel sağlık sigortası primleri, ödendiği ayda elde edilen brüt ücretin %15'ini ve yıllık olarak asgari ücretin yıllık tutarını aşmamak şartıyla gelir vergisi matrahından indirilebilir. Bu yan haklar hem çalışanın eline geçen net refahı yükseltir hem de işverenin bordro maliyetini optimize eder.`,
    },
    {
      id: 'sabit-net-maas-ve-vergi-dilimi-farki',
      title: 'Sabit Net Maaş Sözleşmeleri ve Vergi Dilimi Yansımaları',
      level: 2,
      content: `Türkiye'de özel sektör uygulamalarında çalışanlar ile işverenler arasında iki farklı ücret sözleşmesi tipi akdedilmektedir:

- **Brüt Ücret Sözleşmesi**: Çalışanın brüt maaşı 12 ay boyunca sabit kalır. Ancak yıl içinde kümülatif vergi matrahı arttıkça ve üst vergi dilimlerine (%20, %27, %35) girildikçe net maaş kademeli olarak düşer. Bu sistemde vergi dilimi artışının mali yükü doğrudan çalışan tarafından üstlenilir.
- **Sabit Net Ücret Sözleşmesi**: Çalışanın her ay eline geçen net ücret 12 ay boyunca birebir aynı kalır. Çalışan üst vergi dilimlerine girdikçe, işveren bordrodaki brüt maaşı otomatik olarak yukarı yönlü revize eder ve artan gelir vergisini şirket bütçesinden karşılar. Bu modelde çalışanın alım gücü yıl boyunca korunurken işverenin bordro maliyeti yıl sonuna doğru artış gösterir.
- **Bordro Kontrolleri ve Hak Arama**: Çalışanların her ay e-Devlet kapısı üzerinden SGK hizmet dökümlerini kontrol etmeleri ve bordrolarında yer alan SGK prime esas kazanç (PEK) tutarının gerçek çıplak brüt maaşlarıyla birebir örtüştüğünden emin olmaları yasal güvenceleri açısından hayati önem taşır.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Aylık 45.000 TL Brüt Maaş Alan Çalışanın Ocak Ayı Net Maaşı',
      scenario:
        'Özel bir şirkette çalışan ve sözleşmesi aylık 45.000 TL brüt ücret üzerinden düzenlenen personelin yılın ilk ayı olan Ocak ayı bordro kesintileri ve net ele geçen tutarı.',
      calculationType: 'custom',
      inputAmount: 45000.0,
      resultTotal: 37494.39,
      customFields: [
        { label: 'Brüt Ücret', value: '45.000,00 TL' },
        { label: 'SGK İşçi Payı (%14)', value: '6.300,00 TL' },
        { label: 'İşsizlik İşçi Payı (%1)', value: '450,00 TL' },
        { label: 'Aylık Gelir Vergisi Matrahı', value: '38.250,00 TL' },
        { label: 'Ödenecek Gelir Vergisi (İstisna Düşülmüş)', value: '614,25 TL' },
        { label: 'Ödenecek Damga Vergisi (İstisna Düşülmüş)', value: '144,17 TL' },
        { label: 'Net Ele Geçen Maaş', value: '37.491,58 TL', highlight: true },
      ],
      explanation:
        '45.000 TL brüt ücretten 6.750 TL (%15) toplam prim kesilerek 38.250 TL vergi matrahı bulunur. %15 diliminde 5.737,50 TL gelir vergisi hesaplanır; asgari ücret gelir vergisi istisnası (5.123,25 TL) düşülünce ödenecek vergi 614,25 TL olur. Damga vergisi istisnası da düşüldükten sonra net 37.491,58 TL işçinin eline geçer.',
    },
    {
      title: 'Örnek 2: Aylık 80.000 TL Brüt Maaş Alan Kıdemli Mühendisin Net Maaşı (%27 Dilimi)',
      scenario:
        'Ekim ayında kümülatif matrahı 330.000 TL sınırını aşarak %27 dilimine giren bir yazılım mühendisinin 80.000 TL brüt maaş bordrosu.',
      calculationType: 'custom',
      inputAmount: 80000.0,
      resultTotal: 58824.28,
      customFields: [
        { label: 'Brüt Ücret', value: '80.000,00 TL' },
        { label: 'SGK ve İşsizlik Kesintisi (%15)', value: '12.000,00 TL' },
        { label: 'Aylık Vergi Matrahı', value: '68.000,00 TL' },
        { label: 'Geçerli Vergi Dilimi', value: '%27 (Kümülatif 330.000 TL üzeri)' },
        { label: 'Asgari Ücret Vergi İstisnası', value: 'Düşüldü' },
        { label: 'Net Ele Geçen Maaş', value: '58.824,28 TL', highlight: true },
        { label: 'İşveren Toplam Maliyeti (%5 Teşvikli)', value: '94.000,00 TL' },
      ],
      explanation:
        '80.000 TL brüt ücretten 12.000 TL prim düşüldükten sonra kalan 68.000 TL matraha %27 diliminden vergi uygulanır. Asgari ücret istisnası düşüldükten sonra çalışanın eline net 58.824,28 TL geçer. Şirkete toplam işveren maliyeti ise %17,5 ilave ile 94.000,00 TL olmaktadır.',
    },
  ],
  faqs: [
    {
      q: 'Brüt maaştan hangi kesintiler yapılır?',
      a: 'Brüt ücretten %14 SGK işçi hissesi, %1 işsizlik sigortası payı, kümülatif dilime göre %15-%40 gelir vergisi ve binde 7,59 damga vergisi kesilir.',
    },
    {
      q: 'Asgari ücret vergi istisnası nedir ve kimlere uygulanır?',
      a: 'Tüm çalışanların maaşlarının brüt asgari ücrete denk gelen kısmı gelir vergisi ve damga vergisinden istisnadır. Bu hak yüksek maaş alan tüm bordrolu çalışanlara da aynen uygulanır.',
    },
    {
      q: 'Yıl içinde net maaş neden kademeli olarak azalır?',
      a: 'Gelir vergisinin artan oranlı kümülatif dilim sistemi nedeniyle, aylar ilerledikçe toplam kazanç matrahı 158.000 TL ve 330.000 TL barajlarını aşarak %20 ve %27 vergi dilimlerine geçer.',
    },
    {
      q: '2026 yılı gelir vergisi ilk dilim sınırı kaç TL\'dir?',
      a: '2026 takvim yılında ücretliler için %15 oranının uygulandığı ilk vergi dilimi sınırı 158.000 TL\'dir.',
    },
    {
      q: 'SGK tavanı nedir ve maaşı nasıl etkiler?',
      a: 'SGK tavanı brüt asgari ücretin 7,5 katıdır. Tavanı aşan kazançlardan SGK primi kesilmez, sadece gelir ve damga vergisi kesilir.',
    },
    {
      q: 'İşveren primi teşviki (%5 indirim) nasıl uygulanır?',
      a: 'SGK borcu olmayan ve bildirgelerini süresinde veren işverenlerin %20,5 olan SGK işveren payı Hazinece 5 puan karşılanarak %15,5 olarak tahsil edilir.',
    },
    {
      q: 'Bordroda gösterilen yemek ve yol parası vergiye tabi midir?',
      a: 'Gelir Vergisi Genel Tebliği ile belirlenen günlük yemek ve yol istisna tutarları dahilindeki nakdi veya kartlı ödemeler gelir vergisinden ve SGK priminden istisnadır.',
    },
    {
      q: 'Brüt maaş mı yoksa net maaş sözleşmesi mi daha avantajlıdır?',
      a: 'Net maaş sözleşmesinde yıl boyu çalışanın eline geçen tutar sabit kalır ve vergi dilimi farklarını işveren üstlenir; brüt anlaşmada ise vergi dilimi artışı net maaşı düşürür.',
    },
  ],
  sources: [
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) 2026 Ücret Gelir Vergisi Tarifesi',
      url: 'https://www.gib.gov.tr',
    },
    {
      label: 'Sosyal Güvenlik Kurumu (SGK) Prim ve Prime Esas Kazanç Parametreleri',
      url: 'https://www.sgk.gov.tr',
    },
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (193 Sayılı GVK ve 5510 Sayılı Kanun)',
      url: 'https://www.mevzuat.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'Netten Brüte Maaş Hesaplama',
      slug: 'tr/netten-brute-maas-hesaplama',
      description: 'Hedeflenen net maaşı yıl boyu korumak için gereken brüt ücreti hesaplayın.',
      category: 'Maaş & Bordro',
    },
    {
      title: '2026 Asgari Ücret ve İşveren Maliyeti',
      slug: 'tr/asgari-ucret',
      description: 'Güncel net ve brüt asgari ücret tutarları, kesintiler ve şirket maliyetleri.',
      category: 'Maaş & Bordro',
    },
  ],
  relatedGuides: [
    {
      title: '2026 Gelir Vergisi Dilimleri Rehberi',
      slug: 'tr/gelir-vergisi-dilimleri',
      description: 'Kümülatif matrah hesabı, dilim geçişleri ve bordroda vergi koruma stratejileri.',
      category: 'Vergi Rehberleri',
    },
    {
      title: 'Kıdem Tazminatı Hesaplama Rehberi',
      slug: 'tr/kidem-tazminati-hesaplama',
      description: '2026 güncel tavanına göre brüt ve giydirilmiş ücretle kıdem tazminatı kılavuzu.',
      category: 'Tazminat Hesaplama',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu sayfadaki hesaplamalar 193 sayılı GVK, 5510 sayılı Kanun ve 2026 vergi parametrelerine dayanmaktadır. Kesin bordrolar işyeri özel durumlarına göre değişebilir.',
};
