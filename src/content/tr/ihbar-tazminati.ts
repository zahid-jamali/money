import { PageContent } from '../types';

export const ihbarTazminatiTr: PageContent = {
  metaTitle: 'İhbar Tazminatı Hesaplama 2026 | Bildirim ve Kesintiler',
  metaDescription:
    '2026 güncel ihbar süresi ve tazminatı hesaplama aracı. 4857 sayılı İş Kanunu bildirim süreleri, gelir vergisi dilimleri ve net tazminat hesabı.',
  h1: 'İhbar Tazminatı Hesaplama 2026 (Brüt ve Net Hesaplama)',
  quickAnswer:
    '4857 sayılı İş Kanunu m.17 gereğince iş sözleşmesini fesheden taraf, kıdeme göre 2 ile 8 hafta arasında önceden bildirimde bulunmak zorundadır. Bildirim süresine uymayan taraf, karşı tarafa bu sürenin giydirilmiş brüt ücreti tutarında ihbar tazminatı öder. İhbar tazminatından çalışanın kümülatif gelir vergisi dilimine göre %15-%40 arası Gelir Vergisi ve %0,759 Damga Vergisi kesilir; SGK primi kesilmez.',
  howItWorks: [
    {
      label: 'Kıdeme Göre Bildirim Süresinin (Önel) Belirlenmesi',
      formula: '6 aya kadar: 2 hafta | 6 ay-1,5 yıl: 4 hafta | 1,5-3 yıl: 6 hafta | 3 yıl+: 8 hafta',
      ruleCitation: '4857 sayılı İş Kanunu Madde 17',
      effectiveDate: 'Hizmet süresi kesintisiz aynı işverene bağlı çalışmalar üzerinden esas alınır.',
    },
    {
      label: 'Günlük ve Haftalık Giydirilmiş Brüt Ücretin Tespiti',
      formula: 'Haftalık Ücret = (Aylık Giydirilmiş Brüt Ücret ÷ 30) × 7',
      ruleCitation: 'Yargıtay İçtihatları ve 4857 SK',
      effectiveDate: 'Yemek, servis, yakacak ve düzenli ikramiyeler aylık brüt ücrete dahil edilir.',
    },
    {
      label: 'Brüt İhbar Tazminatının Hesaplanması',
      formula: 'Brüt İhbar = Bildirim Haftası × Haftalık Giydirilmiş Brüt Ücret',
      ruleCitation: '4857 sayılı İş Kanunu Madde 17/4',
      effectiveDate: 'İhbar tazminatında kıdem tazminatındaki gibi bir yasal üst tavan bulunmamaktadır.',
    },
    {
      label: 'Gelir Vergisi ve Damga Vergisi Kesintisi',
      formula: 'Net İhbar = Brüt İhbar - (Brüt × Gelir Vergisi Oranı) - (Brüt × 0,00759)',
      ruleCitation: '193 sayılı Gelir Vergisi Kanunu ve 488 sayılı Damga Vergisi Kanunu',
      effectiveDate: 'SGK kesintisi yapılmaz; kümülatif vergi matrahına göre gelir vergisi ve damga vergisi düşülür.',
    },
  ],
  articleSections: [
    {
      id: 'ihbar-tazminati-nedir-ve-kimler-alir',
      title: 'İhbar Tazminatı Nedir ve Kimler Hak Kazanabilir?',
      level: 2,
      content: `İhbar tazminatı, belirsiz süreli iş sözleşmesiyle çalışan işçi veya işverenin, iş sözleşmesini tek taraflı olarak feshetmeden önce karşı tarafa kanunda belirlenen asgari süreler kadar önceden haber verme yükümlülüğünün (ihbar öneli) parasal karşılığıdır. İş Kanunu m.17 bu düzenlemeyle, işçiye yeni bir iş bulma; işverene ise ayrılan personelin yerine yeni bir eleman temin etme imkanı tanımayı amaçlamıştır.

İhbar tazminatının kıdem tazminatından en belirgin farkı, **çift taraflı bir hak ve sorumluluk** olmasıdır. İşveren, bildirim süresine uymadan işçiyi aniden işten çıkarırsa işçiye ihbar tazminatı ödemek zorundadır. Ancak aynı şekilde bir çalışan da bildirim süresine uymaksızın işi aniden bırakıp giderse (istifa ederse), işverene ihbar tazminatı ödemekle yükümlü tutulur.

İhbar tazminatı hakkının doğabilmesi için şu temel koşullar aranır:
- İş sözleşmesinin **belirsiz süreli** olması gerekir. Belirli süreli iş sözleşmelerinde sürenin bitimiyle sözleşme kendiliğinden sona erdiğinden kural olarak ihbar öneli ve ihbar tazminatı uygulanmaz.
- Deneme süresi içinde bulunulmamalıdır. Deneme süreli sözleşmelerde (kanunen en fazla 2 ay, toplu sözleşmeyle 4 ay) taraflar bildirim süresine gerek olmaksızın ve tazminatsız fesih yapabilirler.
- Feshin haklı bir nedene (4857 SK m.24 veya m.25) dayanmaması gerekir. Haklı nedenle derhal fesih hakkını kullanan taraf ihbar öneli vermek veya ihbar tazminatı ödemek zorunda değildir.`,
    },
    {
      id: 'yasal-ihbar-sureleri-tablosu',
      title: 'Yasal İhbar Süreleri ve Kıdeme Göre Bildirim Kademeleri',
      level: 2,
      content: `4857 sayılı İş Kanunu'nun 17. maddesi, işçinin işyerindeki kıdemine (hizmet süresine) göre 4 kademeli bildirim süresi belirlemiştir. Bu süreler nispi emredici olup, bireysel veya toplu iş sözleşmeleriyle yalnızca işçi lehine artırılabilir; kanuni sürelerin altına indirilemez:

1. **6 Aydan Az Süren Çalışmalar**: İşi 6 aydan az sürmüş olan işçi için bildirim süresi **2 hafta** (14 takvim günü) olarak uygulanır.
2. **6 Ay ile 1,5 Yıl Arası Çalışmalar**: İşi 6 aydan 1,5 yıla kadar sürmüş olan işçi için bildirim süresi **4 hafta** (28 takvim günü) olarak hesaplanır.
3. **1,5 Yıl ile 3 Yıl Arası Çalışmalar**: İşi 1,5 yıldan 3 yıla kadar sürmüş olan işçi için bildirim süresi **6 hafta** (42 takvim günü) süredir.
4. **3 Yıldan Fazla Süren Çalışmalar**: İşi 3 yıldan fazla sürmüş olan işçi için bildirim süresi **8 hafta** (56 takvim günü) olarak uygulanır.

Sürelerin Başlangıcı ve Hesaplanması:
Bildirim süresi, feshin karşı tarafa yazılı olarak tebliğ edildiği günü takip eden takvim gününden itibaren işlemeye başlar. Bildirim süreleri iş günü değil, kesintisiz takvim günü olarak hesaplanır. Örneğin 4 haftalık bildirim süresi 28 takvim günüdür ve aradaki hafta tatilleri ile genel tatiller süreye dahildir.`,
    },
    {
      id: 'ihbar-tazminatinda-vergi-kesintileri-ve-matrah',
      title: 'İhbar Tazminatında Vergi Kesintileri: Gelir Vergisi Dilimleri ve Damga Vergisi',
      level: 2,
      content: `Kıdem tazminatından farklı olarak ihbar tazminatı, Türk vergi mevzuatında "ücret" niteliğinde kabul edilen bir gelirdir. Bu nedenle ihbar tazminatı hesaplanırken iki önemli vergi kesintisi yapılır:

1. **Gelir Vergisi Kesintisi (%15 - %40)**:
İhbar tazminatı, 193 sayılı Gelir Vergisi Kanunu'nun 61, 94 ve 103. maddelerine tabidir. İşçinin işten ayrıldığı ay itibarıyla kümülatif gelir vergisi matrahı hangi vergi dilimine giriyorsa, ihbar tazminatına o dilimdeki oran uygulanır. Örneğin işçi yılın son aylarında ayrılıyorsa ve kümülatif matrahı %27 veya %35'lik dilime ulaşmışsa, brüt ihbar tazminatından doğrudan bu yüksek oranlarda gelir vergisi kesilir.
2. **Damga Vergisi Kesintisi (%0,759)**:
488 sayılı Damga Vergisi Kanunu gereğince, brüt ihbar tazminatı tutarı üzerinden binde 7,59 oranında damga vergisi kesintisi yapılır.
3. **SGK Prim Kesintisi (Yapılmaz)**:
5510 sayılı Kanun uyarınca ihbar tazminatı, işçinin fiili çalışması karşılığı ödenen bir bordro kazancı olmadığından SGK işçi ve işveren prim kesintisine tabi değildir.

İhbar Tazminatında Tavan Sınırı Var mıdır?
Hayır! Kıdem tazminatında uygulanan memur emekli ikramiyesi tavanı (2026 yılı ilk yarısında 59.250 TL), ihbar tazminatında geçerli değildir. İşçinin giydirilmiş brüt ücreti ne kadar yüksekse (örneğin aylık 150.000 TL), ihbar tazminatı da herhangi bir kesintiye veya sınırlamaya uğramadan doğrudan bu tutar üzerinden hesaplanır.`,
    },
    {
      id: 'yeni-is-arama-izni-ve-ihbar-surecinin-kullanimi',
      title: 'Yeni İş Arama İzni (Günde 2 Saat) ve İhbar Süresinde Haklar',
      level: 2,
      content: `İşveren ihbar tazminatını peşin ödeyip işçiyi derhal işten çıkarabileceği gibi (ihbar tazminatlı fesih), bildirim süresini çalıştırarak sözleşmeyi sürenin bitiminde de sonlandırabilir. Bildirim önelinin çalıştırıldığı durumlarda işçinin kanundan doğan en önemli hakkı **yeni iş arama izni**dir.

4857 sayılı İş Kanunu'nun 27. maddesi uyarınca işveren, bildirim süreleri içinde işçiye çalışma saatleri içinde ve ücret kesintisi yapmaksızın günde en az **2 saat** yeni iş arama izni vermek zorundadır.

İş Arama İzninin Temel Kuralları:
- **Ücret Kesintisi Yapılamaz**: İş arama izni kullanılan saatler için işçinin maaşından hiçbir kesinti yapılamaz; tam gün çalışılmış gibi ücret tahakkuk ettirilir.
- **Toplu Kullanım Hakkı**: İşçi isterse iş arama izin saatlerini birleştirerek toplu olarak kullanabilir. Ancak bunun için işten ayrılacağı günden önceki günlere denk getirmesi ve durumu işverene önceden yazılı olarak bildirmesi gerekir.
- **İznin Kullandırılmaması**: İşveren işçiye iş arama iznini vermez veya eksik kullandırırsa, o sürelere ilişkin ücreti işçiye %100 zamlı (iki katı) olarak ödemekle yükümlüdür. İş arama izni esnasında işçi çalıştırılırsa, çalıştığı sürenin normal ücretine ilaveten %100 zamlı ek ücret ödenir.`,
    },
    {
      id: 'ihbar-tazminatinda-yargitay-ictihatlari',
      title: 'İhbar Tazminatında Yargıtay İçtihatları ve Zamanaşımı',
      level: 2,
      content: `İş hukukunda ihbar tazminatına ilişkin açılan davalarda Yargıtay'ın benimsediği kritik içtihatlar şunlardır:

- **Bölünemezlik İlkesi**: İhbar öneli bölünemez. İşveren, 8 haftalık ihbar süresinin 4 haftasını çalıştırıp kalan 4 haftasının tazminatını ödeyerek fesih yapamaz. Böyle bir durumda fesih usulsüz sayılır ve işveren 8 haftanın tamamının ihbar tazminatını ödemek zorunda kalır.
- **Zamanaşımı Süresi**: İhbar tazminatında zamanaşımı süresi, 7036 sayılı Kanun uyarınca iş sözleşmesinin feshedildiği tarihten itibaren **5 yıldır**.
- **Faiz Türü ve Temerrüt Şartı**: Kıdem tazminatından farklı olarak, ihbar tazminatında mevduata uygulanan en yüksek faiz değil, **yasal faiz** yürütülür. Ayrıca faiz fesih tarihinde kendiliğinden işlemeye başlamaz; işverenin noter ihtarnamesiyle temerrüde düşürüldüğü veya dava/arabuluculuk açıldığı tarihten itibaren başlar.
- **Emeklilik ve Askerlik Durumu**: Emeklilik, askerlik veya kadının evlenmesi gibi nedenlerle işten ayrılan işçi kıdem tazminatını alabilse de, kendi isteğiyle ayrıldığı için işverenden ihbar tazminatı talep edemez.`,
    },
    {
      id: 'ihbar-ve-yillik-izin-iliskisi',
      title: 'İhbar Süresi ile Yıllık Ücretli İznin Çakışması ve Usulsüz Fesih Riskleri',
      level: 2,
      content: `İhbar süresinin kullandırılmasında insan kaynakları departmanlarının en çok düştüğü yanılgı, personelin içeride kalan kullanılmamış yıllık izinlerini ihbar süresi içine mahsup etmeye çalışmaktır.

Yargıtay Hukuk Genel Kurulu ve 9. Hukuk Dairesi'nin yerleşik kararları bu konuda emredici niteliktedir:
- **İç İçe Geçememe Kuralı**: Yıllık ücretli izin ile ihbar bildirim öneli farklı yasal amaçlara hizmet eder. İhbar süresi işçiye yeni iş arama fırsatı verirken, yıllık izin işçinin dinlenmesini amaçlar. Bu iki süre kesinlikle aynı döneme denk getirilemez.
- **Geçerli Sıralama Prosedürü**: Eğer işçinin kullanılmamış 20 gün yıllık izni ve 6 haftalık (42 gün) ihbar öneli varsa; işveren önce 20 günlük yıllık izni kullandırmalı, işçi izinden döndükten sonra 6 haftalık ihbar süresini başlatmalıdır. Ya da işveren ihbar süresini çalıştırıp sözleşmeyi feshettikten sonra, kullanılmayan 20 günlük yıllık izin ücretini son çıplak brüt maaş üzerinden nakden ve eksiksiz ödemelidir.
- **Raporlu Günlerin İhbarı Uzatması**: İhbar süresi içinde çalışırken sağlık raporu alan personelin bildirim süresi, raporlu olduğu gün kadar kendiliğinden ileriye doğru uzar. İşveren personeli raporlu olduğu tarihte işten çıkarırsa fesih usulsüz hale gelir.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: 2 Yıl Kıdemli Satış Uzmanının İhbar Tazminatı Hesabı',
      scenario:
        'Bir lojistik firmasında 2 yıl 3 ay çalışan satış uzmanının aylık giydirilmiş brüt ücreti 30.000 TL\'dir. İşveren bildirim süresi tanımaksızın iş akdini derhal feshetmiştir. Çalışanın kümülatif vergi matrahı %20 dilimindedir.',
      calculationType: 'custom',
      inputAmount: 30000.0,
      resultTotal: 33263.22,
      customFields: [
        { label: 'Hizmet Süresi', value: '2 yıl 3 ay (1,5 - 3 yıl arası)' },
        { label: 'Yasal Bildirim Süresi', value: '6 hafta (42 gün)' },
        { label: 'Giydirilmiş Brüt Ücret', value: '30.000,00 TL' },
        { label: 'Brüt İhbar Tazminatı', value: '42.000,00 TL' },
        { label: 'Gelir Vergisi Kesintisi (%20)', value: '8.400,00 TL' },
        { label: 'Damga Vergisi (%0,759)', value: '318,78 TL' },
        { label: 'Net İhbar Tazminatı', value: '33.281,22 TL', highlight: true },
      ],
      explanation:
        '1,5 ile 3 yıl arası çalışan için bildirim süresi 6 haftadır (42 gün). Günlük brüt ücret 30.000 / 30 = 1.000 TL; 42 günlük brüt ihbar 42.000 TL olur. %20 gelir vergisi (8.400 TL) ve %0,759 damga vergisi (318,78 TL) düşüldükten sonra net 33.281,22 TL tazminat ödenir.',
    },
    {
      title: 'Örnek 2: 5 Yıllık Şirket Müdürünün İhbar Tazminatı Hesabı (%27 Vergi Dilimi)',
      scenario:
        'Aynı şirkette 5 yıldır finans müdürü olarak görev yapan çalışanın aylık giydirilmiş brüt ücreti 75.000 TL\'dir. Fesih anında kümülatif gelir vergisi matrahı %27 dilimine ulaşmıştır.',
      calculationType: 'custom',
      inputAmount: 75000.0,
      resultTotal: 101862.60,
      customFields: [
        { label: 'Hizmet Süresi', value: '5 yıl (3 yıldan fazla)' },
        { label: 'Yasal Bildirim Süresi', value: '8 hafta (56 gün)' },
        { label: 'Giydirilmiş Brüt Ücret', value: '75.000,00 TL' },
        { label: 'Brüt İhbar Tazminatı', value: '140.000,00 TL' },
        { label: 'Gelir Vergisi Kesintisi (%27)', value: '37.800,00 TL' },
        { label: 'Damga Vergisi (%0,759)', value: '1.062,60 TL' },
        { label: 'Net İhbar Tazminatı', value: '101.137,40 TL', highlight: true },
      ],
      explanation:
        '3 yıldan fazla çalışan için bildirim süresi 8 haftadır (56 gün). Günlük brüt ücret 2.500 TL olup brüt ihbar 140.000 TL\'dir. İhbar tazminatında tavan bulunmadığından tutarın tamamına %27 gelir vergisi (37.800 TL) ve %0,759 damga vergisi (1.062,60 TL) uygulanarak net 101.137,40 TL hesaplanır.',
    },
  ],
  faqs: [
    {
      q: 'İhbar tazminatı nedir ve kıdem tazminatından farkı nedir?',
      a: 'İhbar tazminatı, fesih öncesi verilmesi gereken bildirim öneline uyulmaması nedeniyle ödenen tazminattır. Kıdemden farklı olarak hem işçi hem işveren tarafından ödenebilir; tavanı yoktur ve gelir vergisine tabidir.',
    },
    {
      q: 'İhbar tazminatından hangi vergiler kesilir?',
      a: 'İhbar tazminatından çalışanın kümülatif vergi matrahına göre Gelir Vergisi (%15, %20, %27, %35 veya %40) ve binde 7,59 Damga Vergisi kesilir. SGK primi kesilmez.',
    },
    {
      q: 'İstifa eden işçi ihbar tazminatı alabilir mi?',
      a: 'Hayır. Kendi isteğiyle istifa eden çalışan ihbar tazminatı alamaz. Hatta bildirim süresine uymadan aniden ayrılırsa işverene ihbar tazminatı ödemek zorunda kalabilir.',
    },
    {
      q: 'İhbar süreleri çalışma süresine göre nasıl belirlenir?',
      a: '4857 sayılı İş Kanunu m.17 uyarınca: 6 aya kadar 2 hafta; 6 ay-1,5 yıl arası 4 hafta; 1,5-3 yıl arası 6 hafta; 3 yıldan fazla kıdem için 8 hafta bildirim süresi uygulanır.',
    },
    {
      q: 'İhbar tazminatında tavan sınırı var mıdır?',
      a: 'Hayır. Kıdem tazminatında uygulanan yasal tavan sınırı ihbar tazminatında uygulanmaz; tazminat personelin giydirilmiş brüt ücretinin tamamı üzerinden hesaplanır.',
    },
    {
      q: 'Günde 2 saatlik yeni iş arama izni ne zaman kullanılır?',
      a: 'İşveren ihbar süresini çalıştırarak fesih yoluna gittiğinde, bildirim süresi boyunca işçiye günde en az 2 saat ücret kesintisi olmaksızın yeni iş arama izni vermek zorundadır.',
    },
    {
      q: 'İhbar süresinde iş arama izni kullandırılmazsa cezası nedir?',
      a: 'İşveren bu izni vermez veya çalıştırırsa, kullandırılmayan sürelerin ücretini işçiye %100 zamlı (iki katı) olarak ödemekle yükümlüdür.',
    },
    {
      q: 'İhbar tazminatı zamanaşımı süresi kaç yıldır?',
      a: 'İş Kanunu Ek Madde 3 gereğince ihbar tazminatında zamanaşımı süresi iş akdinin feshedildiği tarihten itibaren 5 yıldır.',
    },
  ],
  sources: [
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (4857 Sayılı İş Kanunu)',
      url: 'https://www.mevzuat.gov.tr',
    },
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) Ücret ve Tazminat Vergileme Rehberi',
      url: 'https://www.gib.gov.tr',
    },
    {
      label: 'Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) Fesih Bildirim Rehberi',
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
      title: 'Kıdem ve İhbar Birleşik Hesaplama',
      slug: 'tr/kidem-ve-ihbar-tazminati-hesaplama',
      description: 'İşten çıkarılan çalışanın hak ettiği kıdem ve ihbar tazminatını tek ekranda toplayın.',
      category: 'Tazminat Hesaplama',
    },
  ],
  relatedGuides: [
    {
      title: 'İhbar Süresi Nasıl Hesaplanır?',
      slug: 'tr/rehber/ihbar-suresi-nasil-hesaplanir',
      description: 'Bildirim önelleri, takvim günü hesabı ve iş arama izni kullanım esasları.',
      category: 'İş Hukuku Rehberleri',
    },
    {
      title: 'Kıdem Tazminatı Şartları Rehberi',
      slug: 'tr/rehber/kidem-tazminati-sartlari',
      description: 'Hangi hallerde tazminat alınır? İşçi hakları ve fesih detayları.',
      category: 'İş Hukuku Rehberleri',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu sayfadaki hesaplama ve açıklamalar 4857 sayılı İş Kanunu ve vergi mevzuatına dayanmaktadır. Uyuşmazlıklarda hukuki danışmanlık alınız.',
};
