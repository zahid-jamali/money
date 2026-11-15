import { PageContent } from '../types';

export const gelirVergisiDilimleriTr: PageContent = {
  metaTitle: 'Gelir Vergisi Dilimleri 2026 | Ücret Tarifesi ve Hesaplama',
  metaDescription:
    '2026 gelir vergisi dilimleri ve oranları. Ücretliler için 158.000 TL, 330.000 TL, 1.200.000 TL ve 4.300.000 TL tarifesi, kümülatif matrah ve istisna rehberi.',
  h1: 'Gelir Vergisi Dilimleri 2026 (Ücret Gelirleri Vergi Tarifesi)',
  quickAnswer:
    "2026 takvim yılında ücret gelirleri için uygulanan gelir vergisi dilimleri: 158.000 TL'ye kadar %15; 330.000 TL'ye kadar %20; 1.200.000 TL'ye kadar %27; 4.300.000 TL'ye kadar %35 ve 4.300.000 TL'den fazlası için %40'tır. 7349 sayılı Kanun uyarınca tüm çalışanların brüt asgari ücrete denk gelen kazançları gelir vergisinden ve damga vergisinden tamamen istisnadır.",
  howItWorks: [
    {
      label: '1. Dilim (%15 Oranı)',
      formula: '158.000 TL\'ye kadar olan kümülatif matrah × 0,15',
      ruleCitation: '193 sayılı Gelir Vergisi Kanunu Madde 103 (Gelir Vergisi Genel Tebliği)',
      effectiveDate: '1 Ocak 2026 - 31 Aralık 2026 vergilendirme dönemi için geçerlidir.',
    },
    {
      label: '2. Dilim (%20 Oranı)',
      formula: '158.000 TL ile 330.000 TL arası: 23.700 TL + (Matrah - 158.000 TL) × 0,20',
      ruleCitation: '193 sayılı GVK Madde 103 Fıkra 1',
      effectiveDate: '158.000 TL\'yi aşan kısım için %20 artan oranlı vergilendirme uygulanır.',
    },
    {
      label: '3. Dilim (%27 Oranı - Ücretlilere Özel Sınır)',
      formula: '330.000 TL ile 1.200.000 TL arası: 58.100 TL + (Matrah - 330.000 TL) × 0,27',
      ruleCitation: '193 sayılı GVK Madde 103 (Ücret Geliri Dilim Avantajı)',
      effectiveDate: 'Ücret dışı gelirlerde sınır 800.000 TL iken ücretlilerde 1.200.000 TL olarak uygulanır.',
    },
    {
      label: '4. ve 5. Dilimler (%35 ve %40 Oranları)',
      formula: '1.200.000 - 4.300.000 TL arası %35 | 4.300.000 TL üzeri %40',
      ruleCitation: '193 sayılı GVK Madde 103',
      effectiveDate: 'Yüksek gelir grubundaki üst dilim ücret kazançları için azami oran %40\'tır.',
    },
  ],
  articleSections: [
    {
      id: '2026-ucret-gelir-vergisi-tarifesi',
      title: '2026 Yılı Ücret Gelirleri İçin Gelir Vergisi Tarifesi ve Dilimleri',
      level: 2,
      content: `Gelir İdaresi Başkanlığı tarafından yayımlanan Gelir Vergisi Genel Tebliği uyarınca, 193 sayılı Gelir Vergisi Kanunu'nun 103. maddesinde yer alan gelir vergisi tarifesi 2026 takvim yılı için yeniden değerleme oranına göre güncellenmiştir.

Türkiye'de vergi sistemi artan oranlı (kademeli) dilim esasına dayanır. Kazanç arttıkça uygulanan vergi oranı %15'ten başlayarak %40'a kadar kademe kademe yükselir.

2026 Takvim Yılı Ücret Gelirleri Tarifesi:
- **158.000 TL'ye kadar**: %15
- **330.000 TL'nin 158.000 TL'si için 23.700 TL, fazlası**: %20
- **1.200.000 TL'nin 330.000 TL'si için 58.100 TL, fazlası**: %27
- **4.300.000 TL'nin 1.200.000 TL'si için 293.000 TL, fazlası**: %35
- **4.300.000 TL'den fazlasının 4.300.000 TL'si için 1.378.000 TL, fazlası**: %40

Ücret Gelirlerinin Özel Durumu:
Kanun koyucu ücretlileri korumak amacıyla 3. vergi diliminde pozitif ayrımcılık yapmıştır. Ticari, zirai veya serbest meslek kazancı elde eden mükellefler için %27 diliminin üst sınırı daha düşük tutulurken, bordrolu ücretliler için %27 dilimi **1.200.000 TL**'ye kadar genişletilmiştir. Bu sayede ücretlilerin %35'lik yüksek dilime geçişi geciktirilmiştir.`,
    },
    {
      id: 'kumulatif-matrah-nedir-ve-nasil-hesaplanir',
      title: 'Kümülatif Vergi Matrahı Nedir ve Nasıl Hesaplanır?',
      level: 2,
      content: `Bordrolu çalışanların bordrolarında yer alan "Kümülatif Gelir Vergisi Matrahı", takvim yılı başından (1 Ocak) itibaren elde edilen tüm aylık net vergi matrahlarının üst üste toplanmasıyla oluşan birikimli tutardır.

Kümülatif Matrahın Hesaplanma Aşamaları:
1. **Aylık Safi Matrahın Bulunması**: Çalışanın aylık brüt kazancından %14 SGK işçi primi ve %1 işsizlik sigortası payı düşülür. Kalan tutar o ayın gelir vergisi safi matrahıdır.
2. **Kümülatif Matraha Ekleme**: İlgili ayın matrahı, bir önceki aydan devreden kümülatif matraha eklenir.
3. **Dilim Kontrolü**: Yeni kümülatif toplamın 158.000 TL, 330.000 TL veya 1.200.000 TL basamaklarını aşıp aşmadığı kontrol edilir.
4. **Dilim Geçişinde Orantılı Hesap**: Eğer o ayki kazanç bir dilimden diğerine taşıyorsa, sınırın altında kalan kısma alt dilim oranı (örn. %15), sınırı aşan kısma ise bir üst dilim oranı (örn. %20) uygulanır.

İş Değişikliğinde Kümülatif Matrah Devreder mi?
Aynı takvim yılı içinde iş değiştiren çalışanlar için kural: Yeni işveren kural olarak önceki işverendeki kümülatif matrahı sıfırdan başlatır. Ancak çalışan isterse önceki işyerinden alacağı kümülatif matrah yazısını yeni işverenine ibraz ederek matrahların birleştirilmesini talep edebilir. Bu durum yıl sonunda vergi dairesine beyanname verme yükümlülüğü doğmasını engeller.`,
    },
    {
      id: 'asgari-ucret-istisnasinin-hesaplamaya-etkisi',
      title: 'Asgari Ücret Vergi İstisnası ve Net Kazanca Katkısı',
      level: 2,
      content: `7349 sayılı Kanun ile Gelir Vergisi Kanunu m.23/18'e eklenen hüküm uyarınca, tüm bordrolu çalışanların maaşlarının brüt asgari ücrete denk gelen kısmı gelir vergisinden ve damga vergisinden tamamen müstesnadır.

Bu istisnanın temel kuralları şunlardır:
- **Her Ay İstisna Hesaplanır**: İlgili ayda brüt asgari ücretin (26.005,50 TL) %15 prim sonrası kalan vergi matrahı (22.104,67 TL) üzerinden asgari ücretin kümülatif dilimine göre istisna tutarı belirlenir.
- **Hesaplanan Vergiden Mahsup**: Çalışanın toplam brüt maaşı üzerinden hesaplanan gelir vergisinden, asgari ücret vergi istisnası tutarı düşülür. Kalan fark vergi dairesine ödenir.
- **Çalışanın Cebine Yansıması**: Bu sistem sayesinde asgari ücretten yüksek maaş alan bir uzman veya yönetici de tıpkı bir asgari ücretli gibi her ay binlerce liralık vergi muafiyeti avantajından yararlanır.
- **Damga Vergisi İstisnası**: Brüt asgari ücretin binde 7,59'u tutarındaki damga vergisi (197,38 TL) de her ay çalışanın bordrosundan düşülür.`,
    },
    {
      id: 'yillik-beyanname-verme-zorunlulugu',
      title: 'Ücret Gelirlerinde Yıllık Beyanname Verme Sınırları',
      level: 2,
      content: `Türkiye'de kural olarak bordrolu çalışanların vergileri işveren tarafından tevkif suretiyle (stopajla) kesilir ve çalışanların ayrıca vergi beyannamesi vermesine gerek kalmaz. Ancak Gelir Vergisi Kanunu 86. maddesi gereğince belirli yüksek gelir grupları için yıllık gelir vergisi beyannamesi verme zorunluluğu bulunmaktadır:

1. **Tek İşverenden Alınan Ücretlerde Sınır**:
Tek bir işverenden tevkifata tabi ücret alan personelin yıllık safi ücret gelirleri toplamı, 2026 yılı gelir vergisi tarifesinin 4. diliminde yer alan tutarı (**4.300.000 TL**) aşması halinde, yıllık gelir vergisi beyannamesi verilmesi zorunludur.
2. **Birden Fazla İşverenden Ücret Alınması Durumu**:
Aynı takvim yılında birden fazla işverenden ücret geliri elde eden çalışanlarda; birinci işverenden alınan ücret hariç, diğer işverenlerden alınan ücretlerin toplamı 2. dilim tutarını (**330.000 TL**) aşıyorsa, tüm işverenlerden elde edilen ücretler yıllık beyanname ile beyan edilmelidir.

Yıllık beyanname veren çalışanlar; eğitim, sağlık harcamaları, bağış ve yardımlar gibi yasal indirimleri beyannamede matrahtan düşerek yıl içinde kesilen vergilerin bir kısmını vergi dairesinden nakden veya mahsuben iade alabilmektedirler.`,
    },
    {
      id: 'vergi-dilimlerinin-belirlenmesi-ve-yeniden-degerleme',
      title: 'Gelir Vergisi Dilimleri Nasıl Belirlenir? Yeniden Değerleme Oranı',
      level: 2,
      content: `Gelir vergisi dilimleri, her yıl Vergi Usul Kanunu (VUK) hükümleri uyarınca Hazine ve Maliye Bakanlığı tarafından ilan edilen **Yeniden Değerleme Oranı (YDO)** esas alınarak güncellenir:

- **Otomatik Artış Mekanizması**: Gelir Vergisi Kanunu'nun mükerrer 123. maddesi uyarınca, tarifede yer alan maktu tutarlar ve dilim sınırları her takvim yılı başından geçerli olmak üzere yeniden değerleme oranında artırılır. Hesaplanan tutarların bin TL'ye kadar olan kesirleri dikkate alınmaz.
- **Cumhurbaşkanı Yetkisi**: Cumhurbaşkanı, Gelir Vergisi tarifesindeki dilim tutarlarını yeniden değerleme oranının %50 fazlasına kadar artırmaya veya %50'sine kadar indirmeye yasal olarak yetkilidir.
- **Vergi Dilimlerinin Çalışanlar Açısından Önemi**: Enflasyon ortamında dilim sınırlarının yeterince artırılmaması, çalışanların yılın daha erken aylarında üst vergi dilimlerine girmesine ve dolayısıyla "gizli vergi artışı" (bracket creep) yaşamasına neden olur. 2026 tarifesinde 1. dilimin 158.000 TL olarak belirlenmesi, çalışanların bahar aylarına kadar düşük vergi oranından faydalanmasını amaçlamaktadır.`,
    },
    {
      id: 'beyannamede-vergi-iadesi-saglayan-giderler',
      title: 'Ücret Gelirlerinde Vergi İadesi Sağlayan Yasal İndirimler',
      level: 2,
      content: `Yıllık gelir vergisi beyannamesi vermek zorunda olan veya ihtiyari olarak beyanname veren ücretliler, Gelir Vergisi Kanunu'nun 89. maddesi uyarınca belirli harcamalarını matrahtan indirebilirler:

1. **Eğitim ve Sağlık Harcamaları**: Mükellefin kendisi, eşi ve küçük çocuklarına ait eğitim ve sağlık harcamaları, beyan edilen yıllık gelirin %10'unu aşmaması ve Türkiye'de gelir veya kurumlar vergisi mükellefi olan kurumlardan fatura alınması şartıyla matrahtan düşülür.
2. **Şahıs Sigorta Primleri**: Bireysel emeklilik sistemi dışındaki hayat, kaza, hastalık ve sağlık sigortası primlerinin beyan edilen gelirin %15'ini ve yıllık asgari ücreti aşmayan kısmı indirilebilir.
3. **Bağış ve Yardımlar**: Kamu idarelerine, üniversitelere, kamu yararına çalışan derneklere ve vergi muafiyeti tanınan vakıflara yapılan makbuzlu bağışların belirli oranları gelirden indirilir.
Bu indirimler sayesinde yıl içinde işveren tarafından stopaj yoluyla kesilen fazla vergiler Gelir İdaresi Başkanlığı tarafından mükellefe nakit iade edilir.`,
    },
    {
      id: 'kumulatif-matrah-ve-isyeri-degisikligi-haklari',
      title: 'İşyeri Değişikliğinde Kümülatif Matrah Taşıma ve Yasal Haklar',
      level: 2,
      content: `Yıl içerisinde iş değiştiren personeller için en kritik konulardan biri önceki işverendeki kümülatif gelir vergisi matrahının yeni işyerine taşınıp taşınmayacağıdır. Gelir Vergisi Kanunu ve Gelir İdaresi Başkanlığı'nın yerleşik özelgelerine göre:

- **Çalışanın Seçimlik Hakkı**: Yeni işveren, personelin önceki işyerindeki kümülatif matrahını otomatik olarak devralmak zorunda değildir. Kural olarak yeni işyerinde matrah sıfırlanır ve personel yılın ilk dilimi olan %15'ten vergilendirilmeye baştan başlar.
- **Yıl Sonu Beyanname Riski**: Eğer personel matrahını sıfırlatarak ikinci işyerinde %15'ten vergilendirilirse, yıl sonunda iki işverenden elde ettiği toplam ücret geliri Gelir Vergisi Kanunu'nun 86/1-b maddesindeki ikinci dilim sınırını (2026 yılı için 330.000 TL) aştığı takdirde, takip eden yılın Mart ayında yıllık gelir vergisi beyannamesi vermek ve aradaki vergi farkını faiziyle ödemek zorundadır.
- **Kümülatif Matrah Taşıma Talebi**: Çalışan, önceki işyerinden alacağı kümülatif matrah yazısını yeni işverenin insan kaynakları birimine yazılı bir dilekçeyle sunarak matrahların birleştirilmesini talep edebilir. Bu sayede vergi kesintileri gerçek dilimden yapılır ve yıl sonunda beklenmedik beyanname borcu çıkması önlenmiş olur.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Yılın İlk Aylarında %15 Diliminde Kalan Personelin Vergi Hesabı',
      scenario:
        'Aylık brüt maaşı 40.000 TL olan bir ofis uzmanının Şubat ayı bordrosundaki vergi kesintisi ve istisna uygulaması. Kümülatif matrahı 68.000 TL olup 158.000 TL sınırının altındadır.',
      calculationType: 'custom',
      inputAmount: 40000.0,
      resultTotal: 34000.00,
      customFields: [
        { label: 'Brüt Ücret', value: '40.000,00 TL' },
        { label: 'SGK ve İşsizlik Kesintisi (%15)', value: '6.000,00 TL' },
        { label: 'Aylık Vergi Matrahı', value: '34.000,00 TL' },
        { label: 'Hesaplanan Gelir Vergisi (%15)', value: '5.100,00 TL' },
        { label: 'Asgari Ücret Vergi İstisnası', value: '-3.315,70 TL' },
        { label: 'Ödenecek Net Gelir Vergisi', value: '1.784,30 TL', highlight: true },
      ],
      explanation:
        '34.000 TL matraha %15 uygulandığında 5.100 TL vergi hesaplanır. Asgari ücret matrahının %15 vergisi olan 3.315,70 TL istisna mahsup edilir. Bordroda tahakkuk eden net gelir vergisi yalnızca 1.784,30 TL olur.',
    },
    {
      title: 'Örnek 2: Eylül Ayında %27 Dilimine Geçen Kıdemli Personelin Vergi Hesabı',
      scenario:
        'Aylık brüt maaşı 70.000 TL olan bir yöneticinin kümülatif matrahı 330.000 TL sınırını aşarak %27 dilimine geçmiştir. Aylık matrah 59.500 TL\'dir.',
      calculationType: 'custom',
      inputAmount: 70000.0,
      resultTotal: 59500.00,
      customFields: [
        { label: 'Aylık Brüt Ücret', value: '70.000,00 TL' },
        { label: 'SGK ve İşsizlik Payı (%15)', value: '10.500,00 TL' },
        { label: 'Aylık Vergi Matrahı', value: '59.500,00 TL' },
        { label: 'Geçerli Vergi Dilimi', value: '%27 Dilimi (330.000 TL üzeri)' },
        { label: 'Hesaplanan Vergi Tutarı', value: '16.065,00 TL' },
        { label: 'Asgari Ücret Vergi İstisnası', value: '-4.420,93 TL' },
        { label: 'Ödenecek Net Gelir Vergisi', value: '11.644,07 TL', highlight: true },
      ],
      explanation:
        'Kümülatif matrah 330.000 TL\'yi aştığı için matrahın tamamına %27 oranı uygulanarak 16.065 TL vergi bulunur. Asgari ücret istisnası düşüldükten sonra çalışanın bordrosundan 11.644,07 TL gelir vergisi kesilir.',
    },
  ],
  faqs: [
    {
      q: '2026 yılı gelir vergisi dilimleri kaça kadardır?',
      a: '2026 yılı ücretliler tarifesinde: %15 dilimi 158.000 TL\'ye kadar; %20 dilimi 330.000 TL\'ye kadar; %27 dilimi 1.200.000 TL\'ye kadar; %35 dilimi 4.300.000 TL\'ye kadar ve %40 dilimi 4.300.000 TL üzeri için geçerlidir.',
    },
    {
      q: 'Vergi dilimi ne zaman sıfırlanır?',
      a: 'Kümülatif gelir vergisi matrahı her takvim yılı başında (1 Ocak tarihinde) sıfırlanır. Tüm çalışanlar Ocak ayında yeniden %15 olan ilk dilimden vergilendirilmeye başlar.',
    },
    {
      q: 'Asgari ücret vergi istisnası nasıl uygulanır?',
      a: 'Tüm çalışanların brüt ücretlerinin asgari ücrete denk gelen kısmı gelir ve damga vergisinden istisnadır. Bu tutar bordroda hesaplanan vergiden mahsup edilerek düşülür.',
    },
    {
      q: 'Yıl içinde iş değiştiren personelin vergi dilimi ne olur?',
      a: 'Yeni işveren kural olarak matrahı sıfırdan başlatır. Ancak çalışan isterse eski işyerindeki kümülatif matrah belgesini yeni işyerine vererek dilim birleştirmesi yaptırabilir.',
    },
    {
      q: 'Ücretliler için %27 dilimi neden daha geniştir?',
      a: 'Gelir Vergisi Kanunu m.103 gereğince ücret dışı gelirlerde %27 sınırı 800.000 TL iken, ücretlileri korumak amacıyla bu sınır 1.200.000 TL olarak uygulanmaktadır.',
    },
    {
      q: 'Bordrolu çalışan ne zaman yıllık vergi beyannamesi verir?',
      a: 'Tek işverenden yıllık ücreti 4.300.000 TL\'yi aşanlar veya birden fazla işverenden ücret alıp ikinciden sonraki ücretleri 330.000 TL\'yi aşanlar yıllık beyanname vermek zorundadır.',
    },
    {
      q: 'Beyanname veren çalışan vergi iadesi alabilir mi?',
      a: 'Evet. Yıllık beyanname veren çalışanlar eğitim, sağlık giderleri, hayat sigortası primleri ve bağışları matrahtan indirerek yıl içinde kesilen fazla vergileri iade alabilir.',
    },
    {
      q: 'Damga vergisi oranı nedir?',
      a: 'Bordroda brüt ücretler üzerinden alınan damga vergisi oranı binde 7,59\'dur (%0,759). Brüt asgari ücrete denk gelen kısım damga vergisinden muaftır.',
    },
  ],
  sources: [
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) 2026 Gelir Vergisi Genel Tebliği',
      url: 'https://www.gib.gov.tr',
    },
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (193 Sayılı Gelir Vergisi Kanunu)',
      url: 'https://www.mevzuat.gov.tr',
    },
    {
      label: 'T.C. Resmi Gazete Vergi Mevzuatı Kararları',
      url: 'https://www.resmigazete.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'Brütten Nete Maaş Hesaplama',
      slug: 'tr/brutten-nete-maas-hesaplama',
      description: 'Vergi dilimlerine göre 12 aylık net maaş bordronuzu ve kesintileri simüle edin.',
      category: 'Maaş & Bordro',
    },
    {
      title: 'Netten Brüte Maaş Hesaplama',
      slug: 'tr/netten-brute-maas-hesaplama',
      description: 'Sabit net maaşı korumak için gereken brüt ücret ve işveren maliyet hesabı.',
      category: 'Maaş & Bordro',
    },
  ],
  relatedGuides: [
    {
      title: '2026 Asgari Ücret ve İşveren Maliyeti',
      slug: 'tr/asgari-ucret',
      description: 'Güncel net ve brüt asgari ücret verileri, işçi kesintileri ve şirket maliyetleri.',
      category: 'Maaş & Bordro',
    },
    {
      title: 'Kıdem Tazminatı Tavanı Rehberi',
      slug: 'tr/kidem-tazminati-tavani',
      description: '2026 yarıyıl kıdem tazminatı tavanı ve geçmiş yıllar tablosu.',
      category: 'Tazminat Hesaplama',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu sayfadaki veriler 193 sayılı Gelir Vergisi Kanunu Madde 103 ve ilgili Gelir Vergisi Genel Tebliği uyarınca bilgilendirme amaçlı sunulmuştur.',
};
