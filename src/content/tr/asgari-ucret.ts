import { PageContent } from '../types';

export const asgariUcretTr: PageContent = {
  metaTitle: 'Asgari Ücret 2026 | Net, Brüt ve İşveren Maliyeti',
  metaDescription:
    '2026 net ve brüt asgari ücret tutarları, işçi SGK kesintileri, %5 teşvikli işveren maliyeti, geçmiş yıllar karşılaştırma tablosu ve yasal analiz.',
  h1: 'Asgari Ücret 2026 (Net, Brüt ve İşveren Maliyeti Hesaplama)',
  quickAnswer:
    "2026 yılı için belirlenen brüt asgari ücret 26.005,50 TL, çalışanın eline geçen net asgari ücret ise 22.104,67 TL'dir. Brüt ücretten %14 SGK işçi hissesi (3.640,77 TL) ve %1 işsizlik primi (260,06 TL) olmak üzere toplam 3.900,83 TL kesinti yapılır. Gelir vergisi ve damga vergisi tamamen istisnadır. %5 Hazine teşvikli işveren maliyeti 30.556,46 TL'dir.",
  howItWorks: [
    {
      label: 'Brüt Ücretten SGK İşçi Hisselerinin Kesilmesi (%15)',
      formula: 'SGK (%14) = 3.640,77 TL | İşsizlik (%1) = 260,06 TL | Toplam = 3.900,83 TL',
      ruleCitation: '5510 sayılı Kanun ve Asgari Ücret Tespit Komisyonu Kararı',
      effectiveDate: '1 Ocak 2026 tarihinden itibaren geçerli yasal işçi prim kesintileridir.',
    },
    {
      label: 'Vergi İstisnaları ve Net Ele Geçen Ücretin Tespiti',
      formula: 'Net Asgari Ücret = 26.005,50 TL - 3.900,83 TL = 22.104,67 TL',
      ruleCitation: '193 sayılı Gelir Vergisi Kanunu Madde 23/18 (7349 sayılı Kanun)',
      effectiveDate: 'Gelir Vergisi ve Damga Vergisi %100 oranında istisna tutulmuştur; vergi kesintisi sıfırdır.',
    },
    {
      label: 'SGK İşveren Primi ve Teşvik Hesabı (%15,5 veya %20,5)',
      formula: 'Teşvikli SGK İşveren (%15,5) = 26.005,50 × 0,155 = 4.030,85 TL',
      ruleCitation: '5510 sayılı Kanun Madde 81/ı (5 Puanlık Hazine İndirimi)',
      effectiveDate: 'Borcu bulunmayan ve bildirgelerini süresinde veren işverenlere 5 puan indirim uygulanır.',
    },
    {
      label: 'İşsizlik İşveren Primi ve Toplam Şirket Maliyeti',
      formula: 'Toplam Maliyet = 26.005,50 + 4.030,85 (SGK) + 520,11 (İşsizlik) = 30.556,46 TL',
      ruleCitation: '4447 sayılı İşsizlik Sigortası Kanunu ve 5510 SK',
      effectiveDate: 'İşveren işsizlik payı %2 (520,11 TL) eklenerek 30.556,46 TL toplam maliyete ulaşılır.',
    },
  ],
  articleSections: [
    {
      id: '2026-asgari-ucret-net-ve-brut-ayrintilari',
      title: '2026 Yılı Net ve Brüt Asgari Ücret Bordro Ayrıntıları',
      level: 2,
      content: `Çalışma ve Sosyal Güvenlik Bakanlığı bünyesinde toplanan Asgari Ücret Tespit Komisyonu kararı doğrultusunda 2026 yılı için geçerli olacak asgari ücret rakamları resmiyet kazanmıştır. Türkiye genelinde tüm sektörlerde tek bir asgari ücret uygulanmakta olup yaş, cinsiyet veya coğrafi bölge ayrımı bulunmamaktadır.

2026 Yılı Aylık Asgari Ücret Tablosu:
- **Brüt Asgari Ücret**: 26.005,50 TL
- **SGK İşçi Primi (%14)**: 3.640,77 TL
- **İşsizlik Sigortası İşçi Primi (%1)**: 260,06 TL
- **Toplam İşçi Kesintileri**: 3.900,83 TL
- **Net Asgari Ücret**: 22.104,67 TL
- **Gelir Vergisi Tutarı**: 0,00 TL (Tamamen İstisna)
- **Damga Vergisi Tutarı**: 0,00 TL (Tamamen İstisna)

Günlük ve Saatlik Asgari Ücret:
Ay 30 gün kabul edildiğinde günlük brüt asgari ücret **866,85 TL**, günlük net asgari ücret ise **736,82 TL**'dir. Haftalık 45 saatlik yasal çalışma süresi üzerinden hesaplanan saatlik brüt asgari ücret tutarı ise **115,58 TL** olarak uygulanmaktadır.`,
    },
    {
      id: 'isveren-maliyeti-ve-5-puan-hazine-tesviki',
      title: 'İşveren Maliyeti: %5 Hazine Teşviki ve SGK Destekleri',
      level: 2,
      content: `Bir asgari ücretli işçinin işverene toplam maliyeti, çalışanın eline geçen net ücretin oldukça üzerindedir. İşveren, brüt maaşın yanı sıra SGK işveren primini ve işveren işsizlik sigortası payını doğrudan devlete öder.

Maliyetin Kalem Kalem Dağılımı:
1. **Brüt Maaş**: 26.005,50 TL
2. **SGK İşveren Hissesi (%15,5 - Teşvikli)**: 4.030,85 TL
3. **İşsizlik Sigortası İşveren Hissesi (%2)**: 520,11 TL
4. **Toplam İşveren Maliyeti (%5 Teşvikli)**: **30.556,46 TL**

Şayet işverenin geçmiş dönemlerden vadesi geçmiş SGK prim borcu varsa veya aylık prim ve hizmet belgelerini yasal süresinde Kuruma vermemişse, 5510 sayılı Kanun 81/ı maddesindeki 5 puanlık Hazine indirimi hakkını kaybeder. Bu durumda SGK işveren payı %20,5 olarak uygulanır (5.331,13 TL) ve teşviksiz toplam maliyet **31.856,74 TL**'ye yükselir. Aradaki 1.300,28 TL'lik fark, işverenlerin primlerini düzenli ödemesi için önemli bir finansal teşvik unsuru oluşturmaktadır.`,
    },
    {
      id: 'gecmis-yillar-asgari-ucret-karsilastirmasi',
      title: 'Geçmiş Yıllar Asgari Ücret Gelişimi (2018 - 2026 Tablosu)',
      level: 2,
      content: `Türkiye'de son yıllarda yaşanan enflasyonist süreç ve ekonomik dinamikler asgari ücret seviyelerinde belirgin artışlara yol açmıştır. Aşağıdaki tabloda 2018 yılından 2026 yılına kadar uygulanan brüt, net ve işveren maliyetleri özetlenmiştir:

| Yıl / Dönem | Brüt Asgari Ücret (TL) | Net Asgari Ücret (TL) | İşveren Maliyeti (TL) |
| :--- | :--- | :--- | :--- |
| **2018** | 2.029,50 | 1.603,12 | 2.384,66 |
| **2019** | 2.558,40 | 2.020,90 | 3.006,12 |
| **2020** | 2.943,00 | 2.324,70 | 3.458,03 |
| **2021** | 3.577,50 | 2.825,90 | 4.203,56 |
| **2022 (Ocak)** | 5.004,00 | 4.253,40 | 5.879,70 |
| **2022 (Temmuz)** | 6.471,00 | 5.500,35 | 7.603,43 |
| **2023 (Ocak)** | 10.008,00 | 8.506,80 | 11.759,40 |
| **2023 (Temmuz)** | 13.414,50 | 11.402,32 | 15.762,04 |
| **2024** | 20.002,50 | 17.002,12 | 23.502,94 |
| **2025** | 22.104,00 | 18.788,40 | 25.972,20 |
| **2026** | **26.005,50** | **22.104,67** | **30.556,46** |

2022 yılına kadar uygulanan Asgari Geçim İndirimi (AGİ) sistemi, 2022 yılı başından itibaren kaldırılarak yerine doğrudan vergi istisnası getirilmiştir. Bu sayede bekar veya evli ayrımı olmaksızın tüm asgari ücretliler net 22.104,67 TL almaktadır.`,
    },
    {
      id: 'asgari-ucretin-etkiledigi-diger-parametreler',
      title: 'Asgari Ücret Artışının Etkilediği Yasal Parametreler',
      level: 2,
      content: `Brüt asgari ücret yalnızca asgari ücretlilerin maaşını belirlemekle kalmaz; Türk sosyal güvenlik ve iş hukuku sistemindeki onlarca yasal kalemi doğrudan değiştirir:

1. **İşsizlik Maaşı Üst ve Alt Sınırı**: En düşük işsizlik maaşı son 4 aylık brüt asgari ücret ortalamasının %40'ı (10.402,20 TL), en yüksek işsizlik maaşı ise brüt asgari ücretin %80'i (20.804,40 TL) olarak belirlenir.
2. **SGK Taban ve Tavan Primi**: SGK primine esas kazanç tabanı brüt asgari ücret olan 26.005,50 TL; tavanı ise 7,5 katı olan **195.041,25 TL**'dir.
3. **Genel Sağlık Sigortası (GSS) Primi**: Gelir testi yaptırmayan veya geliri asgari ücretin üçte birinin üzerinde çıkan vatandaşların ödeyeceği aylık GSS primi, brüt asgari ücretin %3'ü oranındadır.
4. **Doğum ve Askerlik Borçlanması**: 1 günlük hizmet borçlanması tutarı günlük brüt asgari ücretin %32'si (277,39 TL) üzerinden hesaplanır.
5. **İsteğe Bağlı Sigorta Primi**: Aylık isteğe bağlı Bağ-Kur sigorta primi, brüt asgari ücretin %32'si oranında olup 8.321,76 TL'dir.
6. **Kıdem Tazminatı Tabanı**: 1 yıllık çalışma karşılığında ödenecek en düşük kıdem tazminatı brüt asgari ücret olan 26.005,50 TL'nin altına inemez.`,
    },
    {
      id: 'asgari-ucret-tespit-komisyonu-ve-yasal-surec',
      title: 'Asgari Ücret Tespit Komisyonunun Yapısı ve Yasal Belirlenme Süreci',
      level: 2,
      content: `4857 sayılı İş Kanunu'nun 39. maddesi uyarınca asgari ücret, en geç iki yılda bir olmak üzere Çalışma ve Sosyal Güvenlik Bakanlığı koordinasyonunda toplanan Asgari Ücret Tespit Komisyonu tarafından belirlenir.

Komisyonun Yapısı ve Karar Mekanizması:
- **Üçlü Temsil Modeli**: Komisyon; hükümet kanadını temsilen 5 temsilci, en çok üyeye sahip işçi konfederasyonunu (TÜRK-İŞ) temsilen 5 temsilci ve en çok üyeye sahip işveren konfederasyonunu (TİSK) temsilen 5 temsilci olmak üzere toplam 15 üyeden oluşur.
- **Toplantı ve Karar Yeter Sayısı**: Komisyon en az 10 üyenin katılımıyla toplanır ve oy çokluğuyla karar alır. Oyların eşitliği halinde Komisyon Başkanı'nın bulunduğu taraf çoğunluğu sağlamış kabul edilir.
- **Dikkate Alınan Ekonomik Kriterler**: Komisyon kararını verirken TÜİK enflasyon verilerini, ülkenin genel ekonomik durumunu, geçim endekslerini ve iş kollarının reel dinamiklerini değerlendirir.
- **Resmi Gazete'de Yayımlanma ve Yürürlük**: Alınan karar Resmi Gazete'de yayımlandığı tarihten itibaren veya kararda belirtilen takvim ayı başından itibaren tüm işyerleri için bağlayıcı olarak yürürlüğe girer. İşverenlerin kanunen belirlenen asgari ücretin altında maaş ödemesi kesinlikle yasaktır ve her bir işçi için ağır idari para cezaları uygulanır.`,
    },
    {
      id: 'asgari-ucret-destegi-ve-istihdam-tesvikleri',
      title: 'Devlet Asgari Ücret Desteği ve İstihdam Teşvik Uygulamaları',
      level: 2,
      content: `İşverenlerin istihdam maliyetlerini hafifletmek ve kayıt dışı istihdamı önlemek amacıyla hükümet her yıl bütçe kanunu ve torba kanunlarla işverenlere doğrudan "Asgari Ücret Desteği" sağlamaktadır:

- **Doğrudan Prim Mahsubu**: İşsizlik Sigortası Fonu'ndan karşılanan asgari ücret desteği, işverenlerin her ay SGK'ya ödeyeceği sigorta primlerinden doğrudan mahsup edilir. İşveren nakit ödeme almak yerine faturasını daha düşük tutarla öder.
- **Yararlanma Koşulları**: Desteğin temel şartı, işverenin SGK bildirgelerini yasal süresi içinde vermesi, geçmiş dönem prim borçlarını yapılandırmış veya düzenli ödüyor olması ve bildirdiği sigortalıları fiilen çalıştırmasıdır.
- **İlave İstihdam Teşvikleri**: Asgari ücretli gençlerin (18-29 yaş) ve kadınların istihdam edilmesi halinde 6111 sayılı Kanun teşviki kapsamında işveren hissesi primlerinin tamamı 24 ila 54 ay boyunca İŞKUR fonundan karşılanabilmektedir. Bu teşvikler işletmelerin yeni personel istihdam ederken maliyetlerini önemli ölçüde aşağı çekmektedir.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Tek Bir Asgari Ücretli İstihdam Eden Küçük İşletmenin Aylık Maliyeti',
      scenario:
        'Bir mahalle eczanesi 2026 yılında bir satış personeli istihdam etmektedir. Eczanenin SGK prim borcu bulunmamaktadır (%5 indirim geçerlidir).',
      calculationType: 'custom',
      inputAmount: 26005.5,
      resultTotal: 30556.46,
      customFields: [
        { label: 'Brüt Asgari Ücret', value: '26.005,50 TL' },
        { label: 'Çalışana Ödenen Net Maaş', value: '22.104,67 TL' },
        { label: 'Toplam İşçi Kesintileri (%15)', value: '3.900,83 TL' },
        { label: 'SGK İşveren Primi (%15,5)', value: '4.030,85 TL' },
        { label: 'İşsizlik İşveren Primi (%2)', value: '520,11 TL' },
        { label: 'Toplam İşveren Maliyeti', value: '30.556,46 TL', highlight: true },
      ],
      explanation:
        'İşveren personeline net 22.104,67 TL maaş öder. Ayrıca SGK ve vergi dairesine 3.900,83 TL işçi primi ile 4.550,96 TL işveren payı olmak üzere toplam 8.451,79 TL prim aktarır. Toplam nakit çıkışı 30.556,46 TL olur.',
    },
    {
      title: 'Örnek 2: 10 Kişilik İmalathanede Asgari Ücret Bordrosu ve Teşvik Kaybı Kıyaslaması',
      scenario:
        '10 asgari ücretli personel çalıştıran bir tekstil atölyesinin primlerini düzenli ödemesi durumundaki maliyet ile borçlu olması durumundaki maliyet farkı.',
      calculationType: 'custom',
      inputAmount: 260055.0,
      resultTotal: 305564.60,
      customFields: [
        { label: 'Toplam 10 Kişi Brüt Bordro', value: '260.055,00 TL' },
        { label: 'Personele Ödenen Toplam Net', value: '221.046,70 TL' },
        { label: '10 Kişi Maliyeti (%5 Teşvikli)', value: '305.564,60 TL' },
        { label: '10 Kişi Maliyeti (Teşviksiz)', value: '318.567,40 TL' },
        { label: 'Aylık Hazine Teşviki Kazancı', value: '13.002,80 TL Tasarruf', highlight: true },
      ],
      explanation:
        '10 personeli olan firma primlerini aksatmadığı takdirde ayda 13.002,80 TL, yılda ise 156.033,60 TL Hazine teşvik avantajı elde etmektedir. Bu nedenle teşvik şartlarını korumak şirketler için hayati önemdedir.',
    },
  ],
  faqs: [
    {
      q: '2026 yılı net asgari ücret ne kadar oldu?',
      a: '2026 yılı için belirlenen aylık net asgari ücret 22.104,67 TL\'dir.',
    },
    {
      q: '2026 yılı brüt asgari ücret tutarı nedir?',
      a: '2026 yılı için aylık brüt asgari ücret 26.005,50 TL olarak tespit edilmiştir.',
    },
    {
      q: 'Asgari ücretten gelir vergisi kesilir mi?',
      a: 'Hayır. 7349 sayılı Kanun uyarınca asgari ücretten Gelir Vergisi ve Damga Vergisi tamamen kaldırılmıştır; vergi kesintisi sıfırdır.',
    },
    {
      q: 'Bir asgari ücretlinin işverene toplam maliyeti ne kadardır?',
      a: '%5 SGK Hazine prim teşviki olan işletmeler için toplam maliyet 30.556,46 TL; teşviksiz işyerleri için ise 31.856,74 TL\'dir.',
    },
    {
      q: 'Asgari ücrette AGİ (Asgari Geçim İndirimi) ödeniyor mu?',
      a: 'Hayır. 2022 yılı başından itibaren AGİ uygulaması tamamen kaldırılmış, yerine vergi istisnası getirilmiştir.',
    },
    {
      q: '2026 yılı günlük ve saatlik asgari ücret ne kadardır?',
      a: 'Günlük brüt asgari ücret 866,85 TL, günlük net asgari ücret 736,82 TL; saatlik brüt ücret ise 115,58 TL\'dir.',
    },
    {
      q: 'En düşük işsizlik maaşı ne kadar oldu?',
      a: '2026 yılında en düşük işsizlik ödeneği brüt asgari ücretin %40\'ı olan 10.402,20 TL; en yüksek işsizlik ödeneği ise %80\'i olan 20.804,40 TL\'dir.',
    },
    {
      q: 'Asgari ücretten yapılan toplam işçi kesintisi ne kadardır?',
      a: '%14 SGK işçi hissesi (3.640,77 TL) ve %1 işsizlik sigortası payı (260,06 TL) olmak üzere toplam kesinti 3.900,83 TL\'dir.',
    },
  ],
  sources: [
    {
      label: 'T.C. Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) Asgari Ücret Kararları',
      url: 'https://www.csgb.gov.tr',
    },
    {
      label: 'Sosyal Güvenlik Kurumu (SGK) Asgari Ücret ve Prim Parametreleri',
      url: 'https://www.sgk.gov.tr',
    },
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) Asgari Ücret Vergi İstisnası Genel Tebliği',
      url: 'https://www.gib.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'Brütten Nete Maaş Hesaplama',
      slug: 'tr/brutten-nete-maas-hesaplama',
      description: 'Maaşınızdan kesilen SGK ve vergi dilimlerini tüm aylar için hesaplayın.',
      category: 'Maaş & Bordro',
    },
    {
      title: 'Netten Brüte Maaş Hesaplama',
      slug: 'tr/netten-brute-maas-hesaplama',
      description: 'Hedef net ücreti garantilemek için gereken brüt tutar ve şirket maliyeti.',
      category: 'Maaş & Bordro',
    },
  ],
  relatedGuides: [
    {
      title: '2026 Gelir Vergisi Dilimleri Rehberi',
      slug: 'tr/gelir-vergisi-dilimleri',
      description: 'Vergi dilimleri, kümülatif matrah ve asgari ücret istisnası açıklaması.',
      category: 'Vergi Rehberleri',
    },
    {
      title: 'Kıdem Tazminatı Tavanı ve Hesaplaması',
      slug: 'tr/kidem-tazminati-tavani',
      description: 'Kıdem tavanı geçmişi ve tavan aşımında vergilendirme kuralları.',
      category: 'Tazminat Hesaplama',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu sayfadaki veriler Asgari Ücret Tespit Komisyonu kararı ve ilgili mevzuata dayanmaktadır. Resmi bildirgelerde yasal mevzuat esastır.',
};
