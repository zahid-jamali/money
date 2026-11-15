import { PageContent } from '../types';

export const kidemVeIhbarTr: PageContent = {
  metaTitle: 'Kıdem ve İhbar Tazminatı Hesaplama 2026 | Toplam Fesih',
  metaDescription:
    'İşten çıkarılan işçinin alacağı kıdem ve ihbar tazminatını birleşik hesaplayın. 2026 tavanı, vergi kesintileri ve net toplam alacak tablosu.',
  h1: 'Kıdem ve İhbar Tazminatı Hesaplama 2026 (Birleşik Hesaplama)',
  quickAnswer:
    'İş sözleşmesi haksız veya geçerli nedenle feshedilen bir işçinin toplam yasal fesih alacağı, kıdem tazminatı ile ihbar tazminatının toplamından oluşur. Kıdem tazminatı 2026 yılı 59.250,00 TL tavanı dahilinde yalnızca %0,759 damga vergisine tabi iken, ihbar tazminatında tavan uygulanmaz; ancak kümülatif dilime göre %15-%40 gelir vergisi ile %0,759 damga vergisi kesilerek net toplam tutar ödenir.',
  howItWorks: [
    {
      label: 'Kıdem ve İhbar Sürelerinin Ayrı Ayrı Tespiti',
      formula: 'Kıdem = Toplam Gün ÷ 365 Yıl | İhbar = 2, 4, 6 veya 8 Hafta',
      ruleCitation: '1475 SK Madde 14 ve 4857 SK Madde 17',
      effectiveDate: 'Kıdem için en az 1 yıl çalışma aranır; ihbar süresi hizmet süresi kademesine göre belirlenir.',
    },
    {
      label: 'Giydirilmiş Brüt Ücretin Hesaplanması',
      formula: 'Giydirilmiş Brüt = Aylık Çıplak Maaş + (Yıllık Düzenli Yan Haklar ÷ 12)',
      ruleCitation: 'Yargıtay İçtihatları Birleştirme Kararları',
      effectiveDate: 'Yol, yemek, ikramiye, prim ve yakacak gibi devamlı ödemelerin tamamı dahil edilir.',
    },
    {
      label: 'Brüt Tazminatların Hesaplanması ve Tavan Kontrolü',
      formula: 'Brüt Kıdem = Yıl × Min(Ücret, 59.250 TL) | Brüt İhbar = Hafta × Haftalık Ücret',
      ruleCitation: 'Hazine ve Maliye Bakanlığı 2026 Genelgesi',
      effectiveDate: 'Kıdem tazminatında 59.250,00 TL tavan uygulanır; ihbar tazminatında tavan yoktur.',
    },
    {
      label: 'Vergi Kesintileri ve Net Toplam Tazminatın Bulunması',
      formula: 'Toplam Net = (Brüt Kıdem - DV) + (Brüt İhbar - GV - DV)',
      ruleCitation: '193 sayılı GVK ve 488 sayılı DVK',
      effectiveDate: 'Kıdemden yalnız damga vergisi (%0,759); ihbardan gelir vergisi (%15-%40) ve damga vergisi kesilir.',
    },
  ],
  articleSections: [
    {
      id: 'birlesik-tazminat-nedir-ve-ne-zaman-odenir',
      title: 'Kıdem ve İhbar Tazminatı Birleşik Olarak Ne Zaman Hak Edilir?',
      level: 2,
      content: `İş Kanunu uygulamasında bir çalışanın hem kıdem hem de ihbar tazminatını aynı anda (birleşik olarak) almaya hak kazanabilmesi için iş sözleşmesinin işveren tarafından feshedilmiş olması ve bu feshin belirli yasal koşulları taşıması gerekir.

Birleşik tazminat ödenmesini gerektiren temel durumlar şunlardır:
1. **İşverenin Geçerli Nedenle Feshi**: Şirketin küçülmeye gitmesi, departmanın kapatılması, ekonomik kriz, teknolojik yenilikler veya çalışanın yeterliliğinden (performans düşüklüğü) kaynaklanan nedenlerle işverenin iş akdini feshetmesi.
2. **İşverenin Haksız Feshi**: İş Kanunu 25/II maddesindeki ahlak ve iyi niyet kurallarına aykırılık halleri bulunmadığı halde işverenin haklı sebep göstermeksizin işçiyi işten çıkarması.
3. **Bildirim Süresinin Peşin Ödenerek Feshi**: İşverenin, işçiyi bildirim süresi (2-8 hafta) kadar çalıştırmak yerine derhal işten çıkarmak istemesi durumunda, kıdem tazminatının yanı sıra ihbar tazminatını da peşin ödemesi zorunludur.

Hangi hallerde ikisi birden ödenmez?
- İşçi istifa ederse, kural olarak ihbar tazminatı alamaz. Hatta bildirim öneline uymazsa işverene ihbar öder.
- İşçi İş Kanunu 24. maddesi gereğince haklı nedenle istifa ederse kıdem tazminatını alır; fakat kendi feshettiği için ihbar tazminatı alamaz.
- Emeklilik, askerlik veya kadının evlenmesi durumunda çalışan kıdem tazminatını alır; ancak yine ihbar tazminatı talep edemez.`,
    },
    {
      id: 'kidem-ve-ihbar-arasindaki-temel-farklar',
      title: 'Kıdem ve İhbar Tazminatı Arasındaki Temel Farklar ve Vergi Ayrımı',
      level: 2,
      content: `Kıdem ve ihbar tazminatları sıklıkla bir arada anılsa da, yasal dayanakları, hesaplama yöntemleri ve vergilendirme rejimleri açısından kökten farklıdır:

| Kriter | Kıdem Tazminatı | İhbar Tazminatı |
| :--- | :--- | :--- |
| **Yasal Dayanak** | 1475 sayılı Kanun m. 14 | 4857 sayılı Kanun m. 17 |
| **Asgari Hizmet Şartı** | En az 1 tam yıl (365 gün) | Hizmet süresi şartı yok (1 gün çalışan dahi hak kazanabilir) |
| **Tavan Sınırı** | Var (2026 ilk yarı: 59.250 TL) | Yok (Tüm giydirilmiş brüt ücret üzerinden hesaplanır) |
| **Gelir Vergisi** | MUAFTIR (%0 kesinti) | TABİDİR (%15 - %40 kümülatif dilim uygulanır) |
| **Damga Vergisi** | Kesilir (%0,759 - Binde 7,59) | Kesilir (%0,759 - Binde 7,59) |
| **SGK Kesintisi** | Yoktur | Yoktur |
| **Taraflar** | Sadece işçi lehine doğar | Çift taraflıdır (işveren de işçiden talep edebilir) |
| **Uygulanan Faiz** | Mevduata en yüksek faiz (Fesih gününden başlar) | Yasal faiz (Temerrüt/dava gününden başlar) |

Bu tablodan görüleceği üzere, kıdem tazminatı vergi avantajına sahipken ihbar tazminatından çalışanın vergi dilimine göre ciddi bir gelir vergisi kesintisi yapılmaktadır. Bu nedenle iki tazminatın brüt ve net tutarları birbirinden tamamen ayrı hesaplanmalıdır.`,
    },
    {
      id: 'adim-adim-birlesik-hesaplama-yontemi',
      title: 'Adım Adım Birleşik Tazminat Hesaplama Metodolojisi',
      level: 2,
      content: `Doğru bir fesih bordrosu hazırlamak veya işçinin alacağını hatasız hesaplamak için şu adımlar izlenmelidir:

### 1. Adım: Giydirilmiş Brüt Ücretin Tespiti
İşçinin son ay bordrosundaki çıplak brüt ücretine; son 1 yılda ödenen düzenli ikramiyeler, primler, yemek yardımı, servis/yol bedeli, yakacak ve yakıt yardımlarının brüt aylık karşılığı ilave edilir. Elde edilen rakam hem kıdem hem ihbar hesabının temel matrahıdır.

### 2. Adım: Kıdem Tazminatının Hesaplanması
İşçinin hizmet süresi (yıl, ay, gün) tespit edilir. Giydirilmiş brüt ücret, 2026 tavanı olan 59.250,00 TL ile kıyaslanır. Küçük olan tutar esas alınarak her tam yıl için bir aylık, artan aylar ve günler için ise oranlama yapılarak brüt kıdem bulunur. Bu tutardan yalnızca binde 7,59 damga vergisi düşülür.

### 3. Adım: İhbar Tazminatının Hesaplanması
İşçinin kıdemine göre bildirim haftası (2, 4, 6 veya 8 hafta) belirlenir. Aylık giydirilmiş brüt ücret 30'a bölünüp 7 ile çarpılarak haftalık ücret bulunur. Bildirim haftasıyla çarpılarak brüt ihbar tazminatına ulaşılır.

### 4. Adım: İhbar Vergisinin Düşülmesi ve Toplama
Brüt ihbar tazminatı tutarından, işçinin mevcut kümülatif matrahına göre gelir vergisi (%15 - %40) ve binde 7,59 damga vergisi düşülür. Bulunan net ihbar ile net kıdem toplanarak işçinin banka hesabına yatırılacak nihai fesih alacağına ulaşılır.`,
    },
    {
      id: 'diger-fesih-alacaklari-ve-ibra-tuzaklari',
      title: 'Fesihte Ödenmesi Gereken Diğer Alacaklar ve İbranamenin Geçerliliği',
      level: 2,
      content: `İşten çıkarılan bir personele kıdem ve ihbar tazminatı ödenirken bordroya dahil edilmesi zorunlu diğer yasal alacak kalemleri de bulunmaktadır:

- **Kullanılmayan Yıllık İzin Ücretleri**: İş akdi feshedildiğinde işçinin hak edip de fiilen kullanmadığı tüm yıllık ücretli izin günleri, feshin gerçekleştiği tarihteki en son çıplak brüt ücret üzerinden nakde dönüştürülür. İzin ücretinden SGK primi, işsizlik sigortası primi, gelir vergisi ve damga vergisi tam olarak kesilir.
- **Ödenmemiş Fazla Mesai ve Tatil Ücretleri**: İşçinin haftalık 45 saati aşan çalışmaları için yüzde 50 zamlı fazla mesai ücreti, ulusal bayram ve genel tatil günlerinde (UBGT) çalışmışsa her tam gün için bir günlük ek yevmiyesi feshin kesinleştiği bordroya eklenmelidir.
- **İbraname ve Banka Kanalı Zorunluluğu**: 6098 sayılı Türk Borçlar Kanunu'nun 420. maddesi gereğince, iş akdinin feshinden itibaren en az bir ay geçmedikçe imzalanan ibranameler kesin olarak hükümsüzdür. Ayrıca ibranamede yer alan alacakların banka kanalıyla ödenmesi yasal zorunluluktur; elden nakit ödeme yapılan veya alacak kalemleri tek tek açıkça belirtilmeyen ibranameler iş mahkemeleri ve Yargıtay nezdinde geçersiz kabul edilir. İşçi aradaki farkı ve faizini yasal zamanaşımı süresi olan 5 yıl içerisinde iş mahkemesinde dava konusu yapabilir.`,
    },
    {
      id: 'fesih-tazminatlarinda-arabuluculuk-ve-dava-hakki',
      title: 'Fesih Tazminatlarında Zorunlu Arabuluculuk ve İş Mahkemesi Süreci',
      level: 2,
      content: `İş sözleşmesi feshedilen işçi ile işveren arasında kıdem ve ihbar tazminatının tutarı, giydirilmiş brüt ücrete dahil edilecek menfaatler veya feshin haklılığı konusunda ihtilaf çıkması durumunda izlenmesi gereken yasal aşamalar kanunla düzenlenmiştir:

1. **Zorunlu Dava Şartı Arabuluculuk**: 7036 sayılı İş Mahkemeleri Kanunu uyarınca, kıdem ve ihbar tazminatı alacakları için doğrudan iş mahkemesinde dava açılamaz. Öncelikle adliyelerdeki arabuluculuk bürosuna başvurularak tarafsız bir arabulucu huzurunda uzlaşma aranması dava şartıdır.
2. **Arabuluculuk Anlaşma Tutanağının Hukuki Niteliği**: Taraflar arabuluculuk görüşmesinde bir tutar üzerinde anlaşmaya varırsa, düzenlenen arabuluculuk anlaşma belgesi mahkeme ilamı niteliğindedir ve bu tutanak aleyhine sonradan dava açılamaz.
3. **İşe İade Davası Açma Süresi (1 Ay)**: İş güvencesi kapsamında olan (en az 30 işçi çalıştıran işyerlerinde en az 6 ay kıdemi bulunan) işçiler, iş sözleşmesinin haksız veya geçersiz feshedildiğini düşünüyorlarsa fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurarak işe iade davası açabilirler. İşe iade davası kazanan işçiye işe başlatılmaması halinde 4 ila 8 aylık ücreti tutarında işe başlatmama tazminatı ile 4 aya kadar boşta geçen süre ücreti ödenir.`,
    },
    {
      id: 'diger-fesih-alacaklari-ve-ibra-tuzaklari',
      title: 'Fesihte Ödenmesi Gereken Diğer Alacaklar ve İbranamenin Geçerliliği',
      level: 2,
      content: `İşten çıkarılan bir personele kıdem ve ihbar tazminatı ödenirken bordroya dahil edilmesi zorunlu diğer yasal alacak kalemleri de bulunmaktadır:

- **Kullanılmayan Yıllık İzin Ücretleri**: İş sözleşmesi sona erdiğinde kullanılmamış olan tüm yıllık ücretli izin günleri, son çıplak brüt ücret üzerinden hesaplanarak ödenir. Yıllık izin ücreti hem SGK hem gelir vergisi hem de damga vergisine tabidir.
- **Ödenmemiş Fazla Mesai ve Tatil Ücretleri**: Varsa ödenmemiş fazla çalışma saatleri (%50 zamlı) ile ulusal bayram ve genel tatil (UBGT) günleri çalışmaları bordroya yansıtılır.
- **İbraname ve İtirazı Kayıt Kuralı**: 6098 sayılı Türk Borçlar Kanunu'nun 420. maddesi uyarınca, iş akdinin feshinden itibaren **en az 1 ay geçmedikçe** düzenlenen ibraname kesin hükümsüzdür. Ayrıca ibranamede ödeme tutarlarının açıkça belirtilmesi ve ödemenin banka aracılığıyla yapılması yasal zorunluluktur.

Çalışanlar, hak ettiklerinden daha az bir tutar ödendiğini düşünüyorlarsa veya haklarının bir kısmını saklı tutmak istiyorlarsa, ibraname veya bordro üzerine "Fazlaya ilişkin haklarım saklı kalmak kaydıyla ihtirazi kayıtla imzalıyorum" şerhini düşmelidirler.`,
    },
    {
      id: 'fesih-bordrosu-ve-bankadan-odeme-proseduru',
      title: 'Fesih Bordrosunun Düzenlenmesi, Banka Kanalı ve Arabuluculuk Süreci',
      level: 2,
      content: `İşten ayrılış anında işveren tarafından tanzim edilen "Fesih Bordrosu" (veya Kıdem/İhbar Bordrosu) ileride doğabilecek hukuki uyuşmazlıklarda temel ispat belgesidir.

Bordroda ve Ödeme Sürecinde Bulunması Zorunlu Unsurlar:
1. **Kalemlerin Ayrıştırılması**: Kıdem tazminatı ile ihbar tazminatının brüt ve net tutarları, uygulanan damga vergisi ve gelir vergisi oranları bordroda ayrı satırlarda net biçimde gösterilmelidir.
2. **SGK İşten Ayrılış Kodu**: Feshin niteliğine göre doğru çıkış kodu bildirilmelidir (Örneğin İşveren Feshi için Kod 04, Belirli Süreli Sözleşme için Kod 05 vb.). Hatalı kod bildirimi işçinin İŞKUR'dan işsizlik maaşı almasını engelleyebilir.
3. **Banka Aracılığıyla Ödeme Zorunluluğu**: Yönetmelik gereğince kıdem ve ihbar tazminatı elden nakit ödenemez. Banka havalesinde "Kıdem ve İhbar Tazminatı Ödemesi" açıklaması yer almalıdır.
4. **Zorunlu Arabuluculuk**: Tazminat tutarında anlaşmazlık yaşanması durumunda, 7036 sayılı Kanun gereğince iş mahkemesinde dava açılmadan önce Adliye Arabuluculuk Bürosu'na başvurulması dava şartıdır. Taraflar arabuluculukta anlaşırsa düzenlenen arabuluculuk belgesi kesin ilam gücündedir.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: 3 Yıl 6 Ay Çalışan Uzmanın Birleşik Kıdem ve İhbar Tazminatı',
      scenario:
        'Bir çağrı merkezinde 3 yıl 6 ay çalışan personelin aylık giydirilmiş brüt ücreti 32.000 TL\'dir. İşveren tarafından bildirim öneli verilmeden işine son verilmiştir. Kümülatif vergi matrahı %20 dilimindedir.',
      calculationType: 'custom',
      inputAmount: 32000.0,
      resultTotal: 146197.88,
      customFields: [
        { label: 'Hizmet Süresi', value: '3 yıl 6 ay' },
        { label: 'İhbar Bildirim Süresi', value: '8 hafta (3 yıldan fazla)' },
        { label: 'Net Kıdem Tazminatı', value: '111.149,92 TL' },
        { label: 'Brüt İhbar Tazminatı', value: '44.800,00 TL' },
        { label: 'Net İhbar Tazminatı (%20 GV)', value: '35.498,08 TL' },
        { label: 'Toplam Ödenecek Net Fesih Alacağı', value: '146.648,00 TL', highlight: true },
      ],
      explanation:
        '3,5 yıl için brüt kıdem 112.000 TL olup binde 7,59 damga vergisi (850,08 TL) kesilerek net kıdem 111.149,92 TL bulunur. 8 haftalık ihbar için brüt 44.800 TL hesaplanır; %20 gelir vergisi (8.960 TL) ve damga vergisi (340,03 TL) kesilerek net 35.499,97 TL ihbar bulunur. İşçiye ödenecek toplam net tutar 146.649,89 TL olmaktadır.',
    },
    {
      title: 'Örnek 2: 7 Yıl Kıdemli Departman Müdürünün Birleşik Tazminatı (Tavan Uygulamalı)',
      scenario:
        'Aynı şirkette 7 yıl kıdemi olan ve giydirilmiş brüt ücreti 70.000 TL olan bölüm müdürü geçerli nedenle işten çıkarılmıştır. İhbar öneli verilmemiştir. Vergi dilimi %27\'dir.',
      calculationType: 'custom',
      inputAmount: 70000.0,
      resultTotal: 486715.42,
      customFields: [
        { label: 'Hizmet Süresi', value: '7 tam yıl' },
        { label: 'Kıdem Hesabı Esas Ücret', value: '59.250,00 TL (2026 Tavanı)' },
        { label: 'Net Kıdem Tazminatı', value: '411.597,94 TL' },
        { label: 'İhbar Bildirim Süresi', value: '8 hafta (Tavan uygulanmaz)' },
        { label: 'Brüt İhbar Tazminatı', value: '98.000,00 TL' },
        { label: 'Net İhbar Tazminatı (%27 GV)', value: '70.781,78 TL' },
        { label: 'Toplam Ödenecek Net Fesih Alacağı', value: '482.379,72 TL', highlight: true },
      ],
      explanation:
        'Kıdem hesabında 2026 ilk yarı tavanı olan 59.250 TL uygulanarak 7 yıl için brüt 414.750 TL kıdem, damga vergisi (3.147,95 TL) düşüldükten sonra net 411.602,05 TL bulunur. İhbar hesabında tavan olmadığından 70.000 TL üzerinden 8 hafta için brüt 98.000 TL hesaplanır; %27 vergi (26.460 TL) ve damga vergisi (743,82 TL) kesilerek net 70.796,18 TL ihbar bulunur. Toplam net alacak 482.398,23 TL\'dir.',
    },
  ],
  faqs: [
    {
      q: 'Kıdem ve ihbar tazminatı aynı anda hangi durumlarda ödenir?',
      a: 'İşveren tarafından İş Kanunu 25/II (ahlak ve iyi niyet kurallarına aykırılık) haricindeki herhangi bir geçerli veya haksız nedenle, bildirim süresi kullandırılmaksızın işten çıkarılan personele iki tazminat birlikte ödenir.',
    },
    {
      q: 'İstifa eden işçi kıdem ve ihbar tazminatı alabilir mi?',
      a: 'Kural olarak istifa eden işçi ne kıdem ne de ihbar alabilir. Ancak haklı nedenle istifa (ücretin ödenmemesi, mobbing) durumunda sadece kıdem alınır, ihbar alınamaz.',
    },
    {
      q: 'Kıdem ve ihbar tazminatlarının vergilendirilmesi neden farklıdır?',
      a: 'Kanun koyucu kıdem tazminatını işçinin geçmiş emeğinin ve sadakatinin bir yıpranma karşılığı kabul edip gelir vergisinden muaf tutmuştur; ihbar tazminatını ise doğrudan ücret geliri sayarak gelir vergisine tabi kılmıştır.',
    },
    {
      q: 'İhbar tazminatında da kıdem gibi tavan var mıdır?',
      a: 'Hayır. Kıdem tazminatında uygulanan memur maaş katsayısına bağlı tavan (2026 yılı için 59.250 TL), ihbar tazminatında geçerli değildir. İhbar, çalışanın giydirilmiş brüt maaşının tamamı üzerinden ödenir.',
    },
    {
      q: 'Kıdem ve ihbar tazminatından SGK primi kesilir mi?',
      a: 'Hayır. 5510 sayılı Kanun uyarınca hem kıdem tazminatı hem de ihbar tazminatı SGK işçi ve işveren prim kesintilerinden tamamen muaftır.',
    },
    {
      q: 'Fesih ödemeleri gecikirse işçinin hakları nelerdir?',
      a: 'Kıdem tazminatı için fesih gününden itibaren en yüksek banka mevduat faizi; ihbar tazminatı için ise temerrüt veya dava gününden itibaren yasal faiz talep edilebilir.',
    },
    {
      q: 'Kullanılmayan yıllık izinler ne zaman ödenir?',
      a: 'Fesih anında kullanılmamış tüm yıllık izin günleri, feshin gerçekleştiği tarihteki çıplak brüt maaş üzerinden kıdem ve ihbar tazminatıyla birlikte tek seferde ödenir.',
    },
    {
      q: 'İşten çıkarılırken imzalanan ibraname ne zaman geçerli olur?',
      a: 'TBK 420. maddeye göre iş sözleşmesinin feshinden itibaren en az 1 ay geçmeden imzalatılan ibranameler yasal olarak kesin hükümsüzdür.',
    },
  ],
  sources: [
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (1475 ve 4857 Sayılı İş Kanunları)',
      url: 'https://www.mevzuat.gov.tr',
    },
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) Tazminat ve Ücret Rehberleri',
      url: 'https://www.gib.gov.tr',
    },
    {
      label: 'Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) İş Müfettişliği Raporları',
      url: 'https://www.csgb.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'Kıdem Tazminatı Hesaplama',
      slug: 'tr/kidem-tazminati-hesaplama',
      description: '2026 güncel tavanına göre brüt ve giydirilmiş ücretle net kıdem tazminatı hesaplayın.',
      category: 'Tazminat Hesaplama',
    },
    {
      title: 'İhbar Tazminatı Hesaplama',
      slug: 'tr/ihbar-tazminati-hesaplama',
      description: 'Çalışma süresine göre bildirim öneli ve vergi dilimli net ihbar tazminatı hesaplayın.',
      category: 'Tazminat Hesaplama',
    },
  ],
  relatedGuides: [
    {
      title: 'Kıdem Tazminatı Şartları Rehberi',
      slug: 'tr/rehber/kidem-tazminati-sartlari',
      description: 'Hangi hallerde tazminat alınır? İşçi hakları ve fesih detayları.',
      category: 'İş Hukuku Rehberleri',
    },
    {
      title: 'İhbar Süresi Nasıl Hesaplanır?',
      slug: 'tr/rehber/ihbar-suresi-nasil-hesaplanir',
      description: 'Bildirim önelleri, takvim günü hesabı ve iş arama izni kullanım esasları.',
      category: 'İş Hukuku Rehberleri',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu sayfadaki hesaplama ve açıklamalar 1475 ve 4857 sayılı Kanunlara dayalı genel bilgilendirme amaçlıdır. Hukuki ve mali ihtilaflarda uzman desteği alınız.',
};
