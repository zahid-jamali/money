import { PageContent } from '../types';

export const nettenBruteMaasTr: PageContent = {
  metaTitle: 'Netten Brüte Maaş Hesaplama 2026 | Brüt Ücret Bulucu',
  metaDescription:
    '2026 netten brüte maaş hesaplama aracı. Hedeflenen net maaşı korumak için gereken aylık brüt tutar, vergi dilimleri ve işveren maliyet tablosu.',
  h1: 'Netten Brüte Maaş Hesaplama 2026 (Tersine Bordro Hesaplama)',
  quickAnswer:
    'Netten brüte maaş hesabı, çalışanın eline geçmesi hedeflenen net tutardan yola çıkılarak SGK işçi hissesi (%14), işsizlik sigortası (%1), artan oranlı gelir vergisi (%15-%40) ve damga vergisi kesintilerini tersine simüle eden bordro yöntemidir. 7349 sayılı Kanun asgari ücret vergi istisnası düşülerek her ay için gereken brüt ücret ve işveren maliyeti belirlenir.',
  howItWorks: [
    {
      label: 'Hedef Net Tutar ve Geçerli Vergi Diliminin Ayrıştırılması',
      formula: 'Brüt = (Net - İstisna Tutarları) ÷ [1 - (SGK + İşsizlik + GV + DV)]',
      ruleCitation: '193 sayılı Gelir Vergisi Kanunu Madde 103 ve 5510 SK',
      effectiveDate: 'Yıl içi kümülatif matraha göre tersine matematiksel algoritma çalıştırılır.',
    },
    {
      label: 'SGK Primi ve Prime Esas Kazanç Tavan Sınırı',
      formula: 'SGK Matrahı = Min(Hesaplanan Brüt, 26.005,50 TL × 7,5)',
      ruleCitation: '5510 sayılı Sosyal Sigortalar Kanunu Madde 82',
      effectiveDate: 'Brüt ücret SGK tavanını aşarsa prim sadece tavan üzerinden (%15) kesilir.',
    },
    {
      label: 'Asgari Ücret Vergi Muafiyetinin Eklenmesi (GVK m.23/18)',
      formula: 'Vergi İndirimi = Asgari Ücret Gelir Vergisi + Damga Vergisi Muafiyeti',
      ruleCitation: '7349 sayılı Kanun ve GVK Genel Tebliği (Seri No: 319)',
      effectiveDate: 'Tersine hesapta muafiyet çalışanın brüt yükünü azaltıcı yönde etki eder.',
    },
    {
      label: 'Toplam İşveren Maliyetinin Çıkarılması',
      formula: 'İşveren Maliyeti = Bulunan Brüt Ücret × 1,175 (%5 Hazine Teşvikli)',
      ruleCitation: '5510 sayılı Kanun Madde 81 Fıkra (ı)',
      effectiveDate: 'İşverenin ödemesi gereken SGK (%15,5) ve işsizlik (%2) payları dahil edilir.',
    },
  ],
  articleSections: [
    {
      id: 'netten-brute-hesaplama-neden-yapilir',
      title: 'Netten Brüte Hesaplama Neden Yapılır ve Nerede Kullanılır?',
      level: 2,
      content: `Türkiye'de iş piyasasında iş görüşmeleri ve iş teklifleri çoğunlukla "ele geçen net maaş" üzerinden konuşulur. Çalışanlar aylık sabit bir tutarın (örneğin net 45.000 TL) banka hesaplarına yatmasını isterler. Ancak Türkiye'de yasal bordrolar, SGK bildirgeleri ve Muhtasar Beyannameler kanun gereği **yalnızca brüt tutarlar** üzerinden düzenlenmek zorundadır.

Bu noktada devreye "Netten Brüte Hesaplama" (tersine bordro) girer:
- **Sabit Net Maaş Sözleşmeleri**: İş sözleşmesinde maaş net olarak taahhüt edilmişse, işveren yıl içinde çalışanın vergi dilimi yükselse (%15'ten %20, %27 veya %35'e çıksa) dahi çalışana aynı net tutarı ödemekle yükümlüdür. Bu durumda aradaki vergi artışını işveren karşılar ve çalışanın brüt bordrosu yıl içinde aydan aya yukarı doğru tırmanır.
- **İşe Alım ve Bütçeleme Planlaması**: İnsan kaynakları ve finans departmanları, bir adaya teklif edilecek net rakamın şirkete toplam brüt bordro ve SGK maliyetini önceden hesaplamak için bu yöntemi kullanır.
- **Yönetici ve Uzman Ücret Politikaları**: Kalifiye personelin yıl sonuna doğru vergi dilimleri nedeniyle maaş kaybı yaşamasını istemeyen kurumsal firmalar, sabit net ücret garantisi vererek tüm vergi riskini kendi üzerlerine alırlar.`,
    },
    {
      id: 'tersine-bordro-matematigi-ve-algoritmasi',
      title: 'Tersine Bordro Matematiği: Netten Brüte Ulaşma Formülü',
      level: 2,
      content: `Brütten nete giderken yapılan kesintiler doğrusal bir şekilde düşülür. Fakat netten brüte giderken kümülatif vergi matrahı, asgari ücret istisnası ve SGK tavanı gibi değişkenler birbirine bağlı olduğundan ardışık bir iterasyon veya matematiksel çarpan formülü kullanılır.

Temel mantık şöyledir:
$$100 \\text{ TL Brüt Ücretin Dağılımı:}$$
- SGK İşçi Payı: $14 \\text{ TL}$
- İşsizlik İşçi Payı: $1 \\text{ TL}$
- Kalan Vergi Matrahı: $85 \\text{ TL}$
- %15 Vergi Diliminde Gelir Vergisi: $85 \\times 0,15 = 12,75 \\text{ TL}$
- Damga Vergisi: $100 \\times 0,00759 = 0,759 \\text{ TL}$
- Toplam Kesinti: $14 + 1 + 12,75 + 0,759 = 28,509 \\text{ TL}$
- Kalan Net: $71,491 \\text{ TL}$

İstisnasız bir modelde neti brüte çevirmek için Net Tutar $0,71491$'e bölünür. Ancak gerçek bordroda **GVK m.23/18 asgari ücret istisnası** devreye girdiğinde, her ay 22.104,67 TL'lik asgari ücret matrahının vergisi kadar tutar işçinin cebine iade edilir. Bu durum brüt maliyeti aşağı çeker.

Vergi dilimi %20'ye çıktığında bölen katsayısı $0,67259$'a; %27 diliminde $0,61309$'a düşer. Bu da sabit net maaşı korumak için gereken brüt tutarın yılın ikinci yarısında neden dramatik biçimde yükseldiğini açıklar.`,
    },
    {
      id: 'sabit-net-ve-sabit-brut-karsilastirmasi',
      title: 'Sabit Net Maaş ile Sabit Brüt Maaş Arasındaki Farklar',
      level: 2,
      content: `İş sözleşmesi imzalanırken maaş tipinin net mi yoksa brüt mü belirlendiği hem işçi hem işveren için büyük sonuçlar doğurur:

| Kriter | Sabit Net Sözleşme | Sabit Brüt Sözleşme |
| :--- | :--- | :--- |
| **İşçinin Eline Geçen** | 12 ay boyunca kuruşu kuruşuna aynı kalır | Vergi dilimi arttıkça aydan aya düşer |
| **Vergi Dilimi Riski** | Tamamen işverene aittir | Çalışana aittir |
| **İşverenin Bordro Maliyeti** | Yılın sonlarına doğru her ay artar | Yıl boyunca neredeyse sabit kalır |
| **Kıdem Tazminatına Esas Ücret** | Son ayın yükselmiş brüt ücreti esas alınır | Sabit brüt sözleşmedeki brüt esas alınır |
| **İş Piyasası Tercihi** | Çalışanlar tarafından tercih edilir | Kurumsal şirketler ve KOBİ'ler tercih eder |

Önemli Hukuki Not: Yargıtay yerleşik içtihatlarına göre, iş sözleşmesinde ücretin net veya brüt olduğu açıkça yazmıyorsa ve işyeri uygulamasında çalışanın banka hesabına her ay kuruşu kuruşuna aynı net rakam yatırılmışsa, sözleşmenin "net ücret sözleşmesi" olduğu kabul edilir ve işveren geriye dönük vergi kesintisi yapamaz.`,
    },
    {
      id: 'sgk-tavani-asildiginda-tersine-hesap',
      title: 'SGK Tavanı Aşıldığında Netten Brüte Geçiş Dinamikleri',
      level: 2,
      content: `Yüksek maaşlı yöneticiler, kıdemli mühendisler ve üst düzey uzmanlarda net maaş belirli bir eşiği aştığında SGK tavan kuralı devreye girer.

5510 sayılı Kanun'un 82. maddesi uyarınca günlük prime esas kazanç üst sınırı (SGK tavanı), günlük asgari ücretin 7,5 katıdır. Aylık bazda SGK tavanı:
$$\\text{SGK Tavanı (2026)} = 26.005,50 \\times 7,5 = 195.041,25 \\text{ TL}$$
olarak uygulanır.

Bu tavanın tersine hesaplamadaki etkisi şudur:
- Çalışanın brüt maaşı 195.041,25 TL'nin altında kaldığı sürece brütün tamamından %15 SGK ve işsizlik kesilir.
- Brüt maaş 195.041,25 TL'yi aştığında ise tavanı aşan kısım için SGK ve işsizlik primi alınmaz (%0 prim); sadece kümülatif dilime göre gelir vergisi ve damga vergisi kesilir.
- Bu durum, çok yüksek net maaşlarda (örneğin net 160.000 TL üzeri) gereken brüt artış hızını bir miktar yavaşlatır.`,
    },
    {
      id: 'net-ucret-sozlesmesinde-kidem-ve-ihbar-riski',
      title: 'Net Ücret Anlaşmalarında Kıdem Tazminatı ve İhbar Riski',
      level: 2,
      content: `Net ücret kararlaştırılan iş sözleşmelerinde fesih anında kıdem tazminatının nasıl hesaplanacağı iş hukuku davalarının en önemli tartışma konularından biridir:

- **Fesih Tarihindeki Brüt Karşılık Esastır**: Yargıtay İçtihatları Birleştirme Kararları uyarınca, kıdem ve ihbar tazminatı hesabı yasa gereği "brüt ücret" üzerinden yapılmak zorundadır. Net ücretle çalışan bir işçinin kıdem tazminatı hesaplanırken, iş akdinin feshedildiği andaki net ücretinin yasal kesintiler eklenerek bulunacak giydirilmiş brüt karşılığı esas alınır.
- **Yıl Sonu Brütü Avantajı**: Net maaşı 50.000 TL olan bir çalışan yılın son aylarında %27 veya %35 dilimine ulaştığında, net 50.000 TL'nin karşılığı olan brüt rakam örneğin 75.000 TL'ye çıkmış olabilir. Fesih bu dönemde gerçekleşirse, kıdem tazminatı tavanı dahilinde olmak kaydıyla bu yüksek brüt ücret esas alınır.
- **İşveren Açısından Maliyet Belirsizliği**: Net ücret anlaşması yapan işverenler, yılın ilerleyen aylarında hem aylık bordro maliyetlerinin hem de olası işten çıkarma tazminatlarının brüt bazda kontrolsüz yükselmesi riskiyle karşılaşırlar. Bu nedenle kurumsal şirketler iş sözleşmelerini brüt maaş esasına göre düzenlemeyi tercih etmektedir.`,
    },
    {
      id: 'tersine-bordro-hesaplama-matematigi',
      title: 'Tersine Bordro Hesaplama Matematiği ve İteratif Çözüm Mantığı',
      level: 2,
      content: `Netten brüte maaş hesaplaması, basit bir bölme veya çarpma işlemiyle doğrudan çözülemez. Bunun temel nedeni, Türk vergi sistemindeki çok katmanlı ve birbirine bağlı değişkenlerdir:

1. **Artan Oranlı Vergi Dilimleri**: Gelir vergisi oranı sabit olmayıp kümülatif matraha bağlı olarak %15'ten başlayıp %40'a kadar kademeli artar.
2. **Asgari Ücret İstisnası Dinamiği**: 7349 sayılı Kanun ile getirilen asgari ücret istisnası, çalışanın brüt maaşı ne olursa olsun o ayki asgari ücretin gelir vergisi kadar indirim sağlar. İstisnanın kendisi de asgari ücretin kümülatif matrahına göre yıl içinde %15'ten %20'ye geçiş yapar.
3. **SGK Tavan Sınırı**: Brüt kazanç 195.041,25 TL tavanını aştığında SGK primi sabitlenirken vergi matrahı doğrusal artmaya devam eder.
4. **İteratif Yakınsama Yöntemi**: Hesaplama motorumuz, hedef net tutarı girdiğinizde ikili arama (binary search) ve Newton-Raphson sayısal analiz yöntemlerini kullanarak kuruşu kuruşuna doğru brüt tutara 0,01 TL hassasiyetle ulaşır. Bu sayede insan kaynakları ve muhasebe uzmanlarının bordro programlarında aldıkları sonuçlarla birebir örtüşen güvenilir rakamlar elde edilir.`,
    },
    {
      id: 'is-gorusmelerinde-net-brut-pazarligi',
      title: 'İş Görüşmelerinde Net ve Brüt Maaş Pazarlığı Taktikleri',
      level: 2,
      content: `Yeni bir iş teklifi değerlendirirken veya yıllık maaş zammı görüşmelerinde yapılan en büyük hatalardan biri, teklif edilen rakamın net mi yoksa brüt mü olduğunu netleştirmemektir:

- **Net Teklif Alan Adaylar**: Yıl boyu elinize geçecek tutar sabittir. Ancak işvereninize olan maliyetiniz yıl sonuna doğru artacağı için ara zam dönemlerinde veya prim dağıtımlarında dezavantaj yaşayabilirsiniz.
- **Brüt Teklif Alan Adaylar**: İlk aylarda (Ocak-Nisan) elinize geçen net maaş yüksek olurken, sonbahara doğru net maaşınızın %10 ila %20 oranında eriyeceğini peşinen bilmeli ve yıllık toplam net gelirinizi 12 aya bölerek bütçenizi planlamalısınız.
- **Yıllık Toplam Paket Analizi**: Şirketlerle görüşürken aylık maaş yerine 12 aylık toplam brüt, yıllık toplam net ve yan hakların nakit değerini gösteren "Toplam Yıllık Kazanç Paketi" (Total Compensation) üzerinden pazarlık yapmak her iki taraf için de en şeffaf yaklaşımdır.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Net 35.000 TL Maaş Almak İçin Gereken Ocak Ayı Brüt Tutarı',
      scenario:
        'Bir pazarlama uzmanı şirketiyle aylık net 35.000 TL üzerinden el sıkışmıştır. Ocak ayında (%15 dilimi) bu net ücretin sağlanabilmesi için bordroda gösterilmesi gereken brüt tutar ve şirket maliyeti.',
      calculationType: 'custom',
      inputAmount: 35000.0,
      resultTotal: 41935.25,
      customFields: [
        { label: 'Hedef Net Maaş', value: '35.000,00 TL' },
        { label: 'Gereken Brüt Maaş (Ocak)', value: '41.935,25 TL' },
        { label: 'SGK ve İşsizlik Kesintisi (%15)', value: '6.290,29 TL' },
        { label: 'Vergi Matrahı', value: '35.644,96 TL' },
        { label: 'Asgari Ücret Vergi İstisnası', value: 'Uygulandı' },
        { label: 'İşveren Toplam Maliyeti (%5 Teşvikli)', value: '49.273,92 TL', highlight: true },
      ],
      explanation:
        'Yılın ilk ayında %15 vergi dilimi ve asgari ücret istisnası ile birlikte net 35.000 TL elde edebilmek için gereken brüt ücret 41.935,25 TL\'dir. %17,5 işveren payı eklendiğinde şirkete aylık toplam maliyeti 49.273,92 TL olmaktadır.',
    },
    {
      title: 'Örnek 2: Net 60.000 TL Maaşı Yıl Sonunda (%27 Diliminde) Korumak İçin Gereken Brüt',
      scenario:
        'Bir yazılım mimarına sözleşmesinde net 60.000 TL sabit ücret garantisi verilmiştir. Eylül ayında kümülatif matrah %27 vergi dilimine ulaştığında gereken brüt maaş.',
      calculationType: 'custom',
      inputAmount: 60000.0,
      resultTotal: 83450.60,
      customFields: [
        { label: 'Garantilenen Net Maaş', value: '60.000,00 TL' },
        { label: 'Geçerli Vergi Dilimi', value: '%27 Dilimi' },
        { label: 'Gereken Brüt Maaş (Eylül)', value: '83.450,60 TL' },
        { label: 'Ocak Ayı Brütüyle Farkı', value: '+10.250,00 TL Ek Brüt Yükü' },
        { label: 'İşveren Toplam Maliyeti (%5 Teşvikli)', value: '98.059,46 TL', highlight: true },
      ],
      explanation:
        'Vergi dilimi %15\'ten %27\'ye yükseldiğinde net 60.000 TL\'yi sabit tutabilmek için işverenin bordroda göstermesi gereken brüt maaş 83.450,60 TL\'ye fırlar. İşverenin üstlendiği maliyet yıl başına kıyasla belirgin şekilde artar.',
    },
  ],
  faqs: [
    {
      q: 'Netten brüte maaş hesaplama nasıl yapılır?',
      a: 'Çalışanın net maaşına SGK işçi hissesi (%14), işsizlik primi (%1), gelir vergisi dilimi (%15-%40) ve damga vergisi ters orantı formülüyle eklenir; asgari ücret istisnası düşülerek brüt tutara ulaşılır.',
    },
    {
      q: 'Neden netten brüte hesaplama yıl içinde aydan aya değişir?',
      a: 'Çalışanın kümülatif gelir vergisi matrahı arttıkça vergi oranı %15\'ten %20, %27 ve %35 dilimlerine geçer. Sabit neti korumak için işverenin bordroda gösterdiği brüt maaş yükselmek zorundadır.',
    },
    {
      q: 'İşveren sabit net maaş ödemek zorunda mıdır?',
      a: 'İş sözleşmesinde ücret "net" olarak kararlaştırılmışsa işveren vergi dilimlerindeki artışları karşılamak ve çalışanın hesabına her ay aynı net tutarı yatırmak zorundadır.',
    },
    {
      q: 'SGK tavanı netten brüte hesaplamayı nasıl etkiler?',
      a: 'Brüt maaş SGK tavanı olan 195.041,25 TL\'yi aştığında, aşan kısımdan SGK primi kesilmez. Bu durum çok yüksek maaşlarda brüt artış hızını dengeler.',
    },
    {
      q: 'Asgari ücret istisnası netten brüte hesabı nasıl etkiler?',
      a: 'Asgari ücrete denk gelen gelir ve damga vergisi tutarı çalışana muafiyet sağladığı için, hedeflenen nete ulaşmak için gereken brüt ücret miktarını düşürür.',
    },
    {
      q: 'Net maaş anlaşması kıdem tazminatını nasıl etkiler?',
      a: 'Yargıtay kararlarına göre, iş sözleşmesi net maaş üzerinden yapılmışsa, fesihteki kıdem tazminatı feshin yapıldığı tarihteki brüt karşılık üzerinden hesaplanır.',
    },
    {
      q: 'İşveren maliyeti brüt maaşın ne kadar üstündedir?',
      a: '%5 SGK Hazine teşviki olan işletmelerde işveren maliyeti brüt maaşın yaklaşık %17,5 fazlasıdır; teşviksiz işyerlerinde ise %22,5 fazlasıdır.',
    },
    {
      q: 'Netten brüte çevirirken hangi vergiler hesaba katılır?',
      a: 'Hesaplamada 193 sayılı GVK gereği Gelir Vergisi ve 488 sayılı DVK gereği Damga Vergisi (binde 7,59) dikkate alınır.',
    },
  ],
  sources: [
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) Muhtasar ve Prim Hizmet Beyannamesi Kılavuzu',
      url: 'https://www.gib.gov.tr',
    },
    {
      label: 'Sosyal Güvenlik Kurumu (SGK) Prime Esas Kazanç ve Tavan Tebliği',
      url: 'https://www.sgk.gov.tr',
    },
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (İş Kanunu ve GVK)',
      url: 'https://www.mevzuat.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'Brütten Nete Maaş Hesaplama',
      slug: 'tr/brutten-nete-maas-hesaplama',
      description: 'Mevcut brüt maaşınızdan kesilen SGK ve vergi tutarlarını ay ay inceleyin.',
      category: 'Maaş & Bordro',
    },
    {
      title: '2026 Asgari Ücret ve İşveren Maliyeti',
      slug: 'tr/asgari-ucret',
      description: 'Güncel net ve brüt asgari ücret parametreleri ve işveren toplam maliyetleri.',
      category: 'Maaş & Bordro',
    },
  ],
  relatedGuides: [
    {
      title: '2026 Gelir Vergisi Dilimleri Rehberi',
      slug: 'tr/gelir-vergisi-dilimleri',
      description: 'Artan oranlı vergi tarifesi ve kümülatif matrah işleyiş kılavuzu.',
      category: 'Vergi Rehberleri',
    },
    {
      title: 'Kıdem Tazminatı Tavanı ve Uygulaması',
      slug: 'tr/kidem-tazminati-tavani',
      description: 'Yıllara göre kıdem tavanı geçmişi ve memur maaş katsayısı hesabı.',
      category: 'Tazminat Hesaplama',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu hesaplama aracı genel parametrelerle hazırlanmış bilgilendirme amaçlı bir simülasyondur. Şirketinizin özel vergi ve teşvik durumlarına göre mali müşavirinize danışınız.',
};
