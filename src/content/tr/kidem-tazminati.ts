import { PageContent } from '../types';

export const kidemTazminatiTr: PageContent = {
  metaTitle: 'Kıdem Tazminatı Hesaplama 2026 | Tavan & Fesih Rehberi',
  metaDescription:
    '2026 güncel tavanına göre brüt ve giydirilmiş ücretle net kıdem tazminatı hesaplama aracı. İstifa, emeklilik, askerlik ve evlilik şartları.',
  h1: 'Kıdem Tazminatı Hesaplama 2026 (Brüt ve Net Hesaplama)',
  quickAnswer:
    "1475 sayılı İş Kanunu'nun 14. maddesine göre aynı işverene bağlı en az 1 yıl çalışan işçiye her tam yıl için 30 günlük giydirilmiş brüt ücreti tutarında kıdem tazminatı ödenir. 2026 yılı ilk yarısında kıdem tazminatı tavanı 59.250,00 TL olup, tazminattan sadece %0,759 (binde 7,59) damga vergisi kesilir; gelir vergisi veya SGK kesintisi yapılmaz.",
  howItWorks: [
    {
      label: 'Hizmet Süresinin ve Gün Kesirlerinin Hesaplanması',
      formula: 'Toplam Gün = (İşten Ayrılış Tarihi - İşe Başlama Tarihi) + 1 Gün',
      ruleCitation: '1475 sayılı İş Kanunu Madde 14',
      effectiveDate: 'En az 1 tam yıl (365 gün) çalışma şartı aranır; artan aylar ve günler oranlanır.',
    },
    {
      label: 'Giydirilmiş Brüt Ücretin Tespiti',
      formula: 'Giydirilmiş Ücret = Çıplak Brüt Ücret + (Yıllık Düzenli Yan Haklar ÷ 12)',
      ruleCitation: 'Yargıtay 9. Hukuk Dairesi İçtihatları ve 4857 SK',
      effectiveDate: 'Yol, yemek, ikramiye, prim ve yakacak gibi para veya parayla ölçülen düzenli haklar eklenir.',
    },
    {
      label: 'Kıdem Tazminatı Tavan Kontrolü',
      formula: 'Esas Ücret = Min(Giydirilmiş Brüt Ücret, 59.250,00 TL)',
      ruleCitation: 'Hazine ve Maliye Bakanlığı 2026 Yılı Genelgesi',
      effectiveDate: '2026 yılı ilk yarısı tavan tutarı 59.250,00 TL olarak uygulanır.',
    },
    {
      label: 'Damga Vergisi Kesintisi ve Net Tutarın Belirlenmesi',
      formula: 'Net Tazminat = Brüt Kıdem Tazminatı × (1 - 0,00759)',
      ruleCitation: '488 sayılı Damga Vergisi Kanunu (1 Sayılı Tablo IV)',
      effectiveDate: 'Kıdem tazminatından SGK primi veya Gelir Vergisi kesilmez; yalnızca binde 7,59 damga vergisi kesilir.',
    },
  ],
  articleSections: [
    {
      id: 'giydirilmis-brut-ucret-nedir',
      title: 'Giydirilmiş Brüt Ücret Nedir ve Neleri Kapsar?',
      level: 2,
      content: `Kıdem tazminatı hesaplamasında yapılan en yaygın hata, işçinin bordrosunda görünen çıplak brüt maaş üzerinden işlem yapılmasıdır. Oysa 1475 sayılı Kanun'un 14. maddesi açıkça "asıl ücrete ek olarak işçiye sağlanan para veya para ile ölçülmesi mümkün sözleşmeden ve kanundan doğan menfaatlerin de göz önünde tutulacağını" hükme bağlamıştır. Bu kavrama iş hukuku uygulamasında "giydirilmiş brüt ücret" denir.

Giydirilmiş ücrete dahil edilen kalemlerin temel niteliği; devamlılık arz etmesi, arızi olmaması ve belirli periyotlarla düzenli ödenmesidir. İşçiye sağlanan aşağıdaki ayni ve nakdi menfaatlerin son bir yıllık brüt toplamı 365'e bölünerek günlük tutara ulaşılır veya 12'ye bölünerek aylık giydirilmiş ücrete eklenir:

- **Düzenli İkramiyeler ve Primler**: Yılda 1, 2 veya 4 kez ödenen bayram ikramiyeleri, performans primleri veya 13. maaş ödemeleri.
- **Yemek Yardımı**: İşyerinde yemek verilmesi (ayni) veya ticket/sodexo/nakit yemek yardımı (nakdi) brüt maliyeti üzerinden hesaba katılır.
- **Yol ve Servis Yardımı**: Personele tahsis edilen servis aracı maliyeti veya sağlanan aylık toplu taşıma / akbil yardımı.
- **Yakacak, Kira ve Giyim Yardımları**: İşverence karşılanan konut kirası, kışlık yakacak yardımı veya işyeri kıyafeti dışındaki giyim çekleri.
- **Özel Sağlık Sigortası ve Hayat Sigortası**: İşveren tarafından personelin şahsına ödenen prim tutarları.

Giydirilmiş ücrete dahil edilmeyen kalemler ise arızi ve şarta bağlı ödemelerdir: Fazla mesai ücretleri, hafta tatili ve genel tatil (UBGT) ücretleri, harcırah ve yolluklar, bir defaya mahsus evlenme veya doğum yardımları ve yıllık izin ücreti kıdem hesabında dikkate alınmaz.`,
    },
    {
      id: 'kidem-tazminati-tavani-uygulamasi',
      title: '2026 Yılı Kıdem Tazminatı Tavanı ve Hukuki Sınır',
      level: 2,
      content: `Kıdem tazminatı tavanı, işçinin giydirilmiş brüt ücreti ne kadar yüksek olursa olsun, bir yıllık çalışma karşılığında ödenebilecek yasal azami tutarı ifade eder. Kanun koyucu, kıdem tazminatı tavanını 657 sayılı Devlet Memurları Kanunu'na tabi en yüksek devlet memuruna (Cumhurbaşkanlığı İdari İşler Başkanı) bir hizmet yılı için ödenecek azami emeklilik ikramiyesi tutarına endekslemiştir.

Hazine ve Maliye Bakanlığı tarafından yayımlanan 2026 Yılı Mali ve Sosyal Haklar Genelgesi uyarınca, 1 Ocak 2026 - 30 Haziran 2026 döneminde geçerli olan kıdem tazminatı tavanı **59.250,00 TL** olarak belirlenmiştir.

Tavan uygulamasında işleyiş prensipleri şu şekildedir:
1. **Maaşı Tavanın Altında Kalanlar**: İşçinin giydirilmiş brüt ücreti (örneğin 40.000 TL), tavan olan 59.250,00 TL'nin altında ise hesaplama doğrudan işçinin kendi fiili giydirilmiş ücreti üzerinden yapılır.
2. **Maaşı Tavanı Aşanlar**: İşçinin aylık giydirilmiş brüt ücreti örneğin 90.000 TL dahi olsa, yasal kıdem tazminatı hesabında yıllık baz alınacak azami tutar 59.250,00 TL ile sınırlandırılır.
3. **Tavanı Aşan Kısmın Ödenmesi**: İş sözleşmesinde veya toplu iş sözleşmesinde aksi kararlaştırılabilir mi? İşveren, tavanı aşan tutarı kendi rızasıyla ödeyebilir. Ancak bu durumda tavanı aşan kısım kıdem tazminatı istisnasından yararlanamaz; Gelir Vergisi ve SGK prim kesintisine tabi tutulur. Yasal tavan dahilindeki kısım ise yalnızca binde 7,59 damga vergisine tabidir.`,
    },
    {
      id: 'fesih-gerekcelerine-gore-hak-kazanma',
      title: 'Fesih Gerekçelerine Göre Kıdem Tazminatına Hak Kazanma Şartları',
      level: 2,
      content: `Kıdem tazminatına hak kazanabilmek için birinci şart, işçinin aynı işverenin bir veya birden fazla işyerinde aralıksız veya aralıklı olarak en az 1 tam yıl (365 gün) fiilen çalışmış olmasıdır. İkinci temel şart ise iş akdinin kanunun öngördüğü haklı veya geçerli nedenlerle sona ermesidir.

Hangi durumlarda kıdem tazminatı ödenir?
- **İşverenin Haksız Feshi**: İşverenin, İş Kanunu 25/II maddesindeki (ahlak ve iyi niyet kurallarına aykırılık) haller dışında, performans düşüklüğü, ekonomik daralma veya herhangi bir geçerli nedenle işçiyi işten çıkarması durumunda kıdem tazminatı eksiksiz ödenir.
- **İşçinin Haklı Nedenle Feshi (Madde 24)**: Ücretin zamanında veya tam yatırılmaması, maaşın bir kısmının elden ödenmesi, SGK primlerinin gerçek ücret üzerinden yatırılmaması, mobbing (psikolojik taciz), fazla mesai ücretlerinin ödenmemesi veya sağlık nedenleriyle işçinin işi bırakması halinde işçi istifa etse dahi kıdem tazminatını tam alır.
- **Emeklilik ve Yaş Dışındaki Şartları Tamamlama (15 Yıl 3600 Gün)**: 08.09.1999 öncesi sigorta girişi olanlar 15 yıl sigortalılık ve 3600 prim gününü; bu tarihten sonrakiler ise kademeli olarak 4500 gün / 25 yıl veya 7000 prim gününü doldurduklarında SGK'dan "Kıdem Tazminatı Alabilir" yazısı alarak istifa ettiklerinde tazminata hak kazanırlar.
- **Askerlik Görevi (Muvazzaf Askerlik)**: Zorunlu askerlik görevini yerine getirmek için işten ayrılan erkek çalışanlar kıdem tazminatını alır.
- **Kadın İşçinin Evlenmesi**: Kadın çalışanlar, resmi nikah tarihinden itibaren 1 yıl içinde evlilik gerekçesiyle iş sözleşmesini feshederlerse kıdem tazminatını eksiksiz alırlar.
- **İşçinin Vefatı**: İşçinin ölümü halinde kıdem tazminatı yasal mirasçılarına veraset ilamı doğrultusunda ödenir.`,
    },
    {
      id: 'yargitay-ictihatlari-ve-uyusmazliklar',
      title: 'Yargıtay İçtihatları ve Kıdem Tazminatında Zamanaşımı',
      level: 2,
      content: `Kıdem tazminatı hesaplamalarında ve ödemelerinde taraflar arasında çıkan uyuşmazlıklarda Yargıtay Hukuk Genel Kurulu ve 9. Hukuk Dairesi'nin yerleşik içtihatları belirleyicidir.

Önemli yargı kararları ve yasal ilkeler:
1. **Zamanaşımı Süresi (5 Yıl)**: 7036 sayılı İş Mahkemeleri Kanunu ile 4857 sayılı İş Kanunu Ek Madde 3 uyarınca, 25.10.2017 tarihinden sonra sona eren iş sözleşmelerinde kıdem tazminatının zamanaşımı süresi iş akdinin fesih tarihinden itibaren 5 yıldır. Bu süre geçtikten sonra açılan davalarda işverenin zamanaşımı def'i ileri sürmesi halinde alacak düşer.
2. **Faiz Türü ve Başlangıcı**: Kıdem tazminatında yasal faiz değil, mevduata uygulanan en yüksek faiz oranı işletilir. Faiz başlangıç tarihi ise feshin gerçekleştiği tarihtir. İşverenin temerrüde düşürülmesine gerek olmaksızın fesih gününden itibaren en yüksek banka mevduat faizi talep edilebilir.
3. **Kıdemin Hesabında Askı Halleri ve Raporlu Günler**: İşçinin istirahat raporu aldığı süreler, ihbar süresini 6 hafta aşan kısım haricinde kıdem süresine dahil edilir. Ücretsiz izin süreleri ise tarafların açık mutabakatı yoksa kıdem süresinden düşülür.
4. **Arabuluculuk Dava Şartı**: Kıdem tazminatı alacağı için doğrudan iş mahkemesinde dava açılamaz. Dava açmadan önce zorunlu arabuluculuk sürecinin tüketilmesi kanuni zorunluluktur. Arabuluculukta varılan anlaşmalar ilam niteliğindedir.`,
    },
    {
      id: 'tazminatin-odenme-usulu-ve-gecikme-faizi',
      title: 'Kıdem Tazminatının Ödenme Usulü, Taksit Yasağı ve Banka Zorunluluğu',
      level: 2,
      content: `Kıdem tazminatının ne zaman, nasıl ve hangi yöntemle ödeneceği hususunda mevzuat ve Yargıtay son derece net kurallar koymuştur:

- **Peşin ve Defaten Ödeme İlkesi**: Kıdem tazminatı kural olarak iş sözleşmesinin feshedildiği tarihte derhal, peşin ve tek seferde (defaten) ödenmelidir. İşverenin nakit sıkıntısı, ekonomik darboğaz veya şirket prosedürlerini bahane ederek tazminatı tek taraflı olarak aylara veya taksitlere bölme yetkisi kesinlikle yoktur. Taksitlendirme ancak işçinin özgür iradesiyle yazılı muvafakat vermesi durumunda geçerli olabilir.
- **Banka Aracılığıyla Ödeme Zorunluluğu**: Ücret, Prim, İkramiye ve Bu Nitelikteki Her Türlü İstihkakın Bankalar Aracılığıyla Ödenmesine Dair Yönetmelik uyarınca, kıdem tazminatı elden nakit olarak ödenemez. Ödemenin mutlaka işçinin adına açılmış banka hesabına açıklaması "Kıdem Tazminatı" olarak belirtilerek yatırılması şarttır. Elden yapılan ve banka kaydı bulunmayan ödemeler yargı nezdinde geçersiz sayılma riski taşır.
- **En Yüksek Mevduat Faizi Uygulaması**: 1475 sayılı Kanun'un 14. maddesinin 11. fıkrası gereğince, kıdem tazminatının gününde ödenmemesi halinde, ödenmeyen süreye göre mevduata uygulanan en yüksek banka faizi işletilir. Bu faiz türü yasal faizden (%9 veya güncel yasal faiz) katbekat yüksektir ve kamu bankaları ile özel bankaların fiilen uyguladığı en yüksek mevduat faiz oranları esas alınarak mahkemece hesaplanır.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Kıdem Tavanının Altında Kalan Çalışan (5 Yıl Hizmet)',
      scenario:
        'Aynı şirkette 5 yıl 4 ay 15 gün çalışan bir mühendisin çıplak brüt maaşı 36.000 TL, aylık yol ve yemek yan hakları brüt 6.000 TL\'dir (Toplam Giydirilmiş Brüt: 42.000 TL). İşveren tarafından işten çıkarılmıştır.',
      calculationType: 'custom',
      inputAmount: 42000.0,
      resultTotal: 223847.41,
      customFields: [
        { label: 'Hizmet Süresi', value: '5 yıl 4 ay 15 gün' },
        { label: 'Giydirilmiş Brüt Ücret', value: '42.000,00 TL' },
        { label: 'Uygulanan Kıdem Tavanı', value: '59.250,00 TL (Aşılmadı)' },
        { label: 'Brüt Kıdem Tazminatı', value: '225.558,90 TL' },
        { label: 'Damga Vergisi (%0,759)', value: '1.711,49 TL' },
        { label: 'Ödenecek Net Kıdem Tazminatı', value: '223.847,41 TL', highlight: true },
      ],
      explanation:
        'Giydirilmiş ücret (42.000 TL) 2026 yılı tavanı olan 59.250 TL\'nin altında kaldığından hesaplama 42.000 TL üzerinden yapılır. 5 tam yıl için 210.000 TL; 4 ay için 14.000 TL; 15 gün için 1.750 TL olmak üzere brüt 225.750 TL kıdem hesaplanır. Binde 7,59 damga vergisi kesildikten sonra net 223.847,41 TL işçinin hesabına yatırılır.',
    },
    {
      title: 'Örnek 2: Kıdem Tavanına Takılan Üst Düzey Yönetici (8 Yıl Hizmet)',
      scenario:
        'Bir perakende zincirinde 8 tam yıl mağaza koordinatörü olarak görev yapan çalışanın brüt maaşı yan haklarla birlikte 85.000 TL\'dir. İş akdi geçerli nedenle feshedilmiştir.',
      calculationType: 'custom',
      inputAmount: 85000.0,
      resultTotal: 470395.15,
      customFields: [
        { label: 'Hizmet Süresi', value: '8 tam yıl' },
        { label: 'Fiili Giydirilmiş Brüt Ücret', value: '85.000,00 TL' },
        { label: 'Uygulanan 2026 Yarıyıl Tavanı', value: '59.250,00 TL (Tavan Uygulandı)' },
        { label: 'Brüt Kıdem Tazminatı', value: '474.000,00 TL' },
        { label: 'Damga Vergisi (%0,759)', value: '3.604,85 TL' },
        { label: 'Ödenecek Net Kıdem Tazminatı', value: '470.395,15 TL', highlight: true },
      ],
      explanation:
        'Çalışanın fiili ücreti 85.000 TL olmasına karşın, 2026 yılı ilk yarısındaki yasal tavan olan 59.250,00 TL esas alınmıştır. 8 yıl × 59.250,00 TL = 474.000,00 TL brüt kıdem tazminatı oluşur. %0,759 oranındaki 3.604,85 TL damga vergisi kesildikten sonra ödenecek net tazminat 470.395,15 TL olmaktadır.',
    },
  ],
  faqs: [
    {
      q: 'Kıdem tazminatı hesaplanırken hangi vergi kesintileri yapılır?',
      a: 'Kıdem tazminatı Gelir Vergisi ve SGK prim kesintilerinden tamamen muaftır. Yasal kıdem tavanı dahilindeki ödemelerden yalnızca %0,759 (binde 7,59) oranında Damga Vergisi kesilir.',
    },
    {
      q: '2026 yılı kıdem tazminatı tavanı ne kadardır?',
      a: '2026 yılının ilk 6 aylık dönemi (Ocak - Haziran) için geçerli kıdem tazminatı tavanı 59.250,00 TL\'dir.',
    },
    {
      q: 'İstifa eden bir çalışan kıdem tazminatı alabilir mi?',
      a: 'Kural olarak kendi isteğiyle gerekçesiz istifa eden işçi kıdem alamaz. Ancak askerlik, kadın işçinin evlenmesi, emeklilik hakkının kazanılması veya İş Kanunu 24. maddedeki haklı fesih nedenleriyle (ücretin ödenmemesi, mobbing vb.) istifa edilirse kıdem tazminatı alınır.',
    },
    {
      q: 'Kıdem tazminatı için asgari çalışma süresi nedir?',
      a: 'Aynı işverenin işyerlerinde en az 1 tam yıl (365 gün) fiilen çalışmış olmak şarttır. 1 yıldan az süren çalışmalarda hiçbir şekilde kıdem tazminatı ödenmez.',
    },
    {
      q: 'Giydirilmiş brüt ücrete yol ve yemek yardımı dahil edilir mi?',
      a: 'Evet. Personele nakden veya aynen sağlanan düzenli yol, servis, yemek, erzak, yakacak ve düzenli ikramiye ödemeleri giydirilmiş brüt ücrete eklenerek hesaplanır.',
    },
    {
      q: 'Kıdem tazminatı zamanaşımı süresi ne kadardır?',
      a: 'İş Kanunu Ek Madde 3 uyarınca kıdem tazminatında zamanaşımı süresi iş akdinin fesih tarihinden itibaren 5 yıldır.',
    },
    {
      q: 'İşveren kıdem tazminatını taksitle ödeyebilir mi?',
      a: 'Kıdem tazminatının fesih anında defaten (tek seferde ve peşin) ödenmesi esastır. İşverenin işçinin yazılı ve açık rızasını almaksızın tek taraflı olarak tazminatı taksite bağlama yetkisi yoktur.',
    },
    {
      q: 'Kıdem tazminatı gecikirse hangi faiz uygulanır?',
      a: '1475 sayılı Kanun m.14 uyarınca ödenmeyen kıdem tazminatı için bankalarca mevduata uygulanan en yüksek mevduat faizi fesih tarihinden itibaren işletilir.',
    },
  ],
  sources: [
    {
      label: 'Gelir İdaresi Başkanlığı (GİB) Vergi ve Damga Vergisi Mevzuatı',
      url: 'https://www.gib.gov.tr',
    },
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (1475 ve 4857 Sayılı Kanunlar)',
      url: 'https://www.mevzuat.gov.tr',
    },
    {
      label: 'Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) Kıdem ve İşçi Hakları Rehberi',
      url: 'https://www.csgb.gov.tr',
    },
    {
      label: 'Sosyal Güvenlik Kurumu (SGK) Emeklilik ve Kıdem Yazısı Portalı',
      url: 'https://www.sgk.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'İhbar Tazminatı Hesaplama',
      slug: 'tr/ihbar-tazminati-hesaplama',
      description: 'Çalışma süresine göre bildirim öneli ve vergi dilimli net ihbar tazminatı hesaplayın.',
      category: 'Tazminat Hesaplama',
    },
    {
      title: 'Kıdem ve İhbar Birleşik Hesaplama',
      slug: 'tr/kidem-ve-ihbar-tazminati-hesaplama',
      description: 'İşten ayrılışta alacağınız toplam kıdem ve ihbar tazminatını tek ekranda görün.',
      category: 'Tazminat Hesaplama',
    },
  ],
  relatedGuides: [
    {
      title: 'Kıdem Tazminatı Alma Şartları Rehberi',
      slug: 'tr/rehber/kidem-tazminati-sartlari',
      description: 'Hangi hallerde kıdem tazminatı ödenir? Madde madde yasal fesih koşulları.',
      category: 'İş Hukuku Rehberleri',
    },
    {
      title: 'İstifa Eden İşçi Kıdem Tazminatı Alabilir mi?',
      slug: 'tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi',
      description: 'Haklı fesih, 15 yıl 3600 gün ve istifa sonrası tazminat hakları kılavuzu.',
      category: 'İş Hukuku Rehberleri',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu sayfadaki hesaplamalar 1475 sayılı Kanun m.14 ve 2026 yılı kıdem tavanı genelgesine dayalı bilgilendirme amaçlıdır. Bireysel uyuşmazlıklarda bir iş hukuku avukatına başvurunuz.',
};
