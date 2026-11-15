import { PageContent } from '../types';

export const schengenGunHesaplamaTr: PageContent = {
  metaTitle: 'Schengen Vize Gün Hesaplama | 90/180 Kuralı Takip Aracı',
  metaDescription:
    'Ücretsiz Schengen vize gün hesaplama aracı. 90/180 günlük hareketli pencere kuralına göre kalan sürenizi öğrenin, vize ihlali ve cezalardan korunun.',
  h1: 'Schengen Vize Gün Hesaplama (90/180 Kuralı)',
  quickAnswer:
    'Schengen 90/180 kuralı, C tipi kısa süreli vize sahiplerinin ve vizeden muaf pasaport hamillerinin herhangi bir 180 günlük hareketli pencere içerisinde en fazla 90 gün Schengen bölgesinde kalabilmesine izin verir. Giriş ve çıkış yaptığınız günler tam gün sayılır. Kontrol edilen tarihten geriye doğru tam 180 gün taranır; bu süre içindeki kalış günlerinin toplamı 90 günü geçemez.',
  howItWorks: [
    {
      label: '180 Günlük Hareketli Pencere',
      formula: 'İnceleme Aralığı = [Kontrol Tarihi - 179 Gün, Kontrol Tarihi]',
      ruleCitation: 'AB 2016/399 Sayılı Schengen Sınır Kanunu (Madde 6)',
      effectiveDate: '18 Ekim 2013 (Güncel standart)',
    },
    {
      label: 'Schengen Kalış Günlerinin Toplanması',
      formula: 'Kullanılan Gün = 180 günlük aralıkta Schengen bölgesinde bulunulan takvim günlerinin adedi',
      ruleCitation: 'Avrupa Komisyonu Kısa Süreli Kalış Hesaplama Kılavuzu',
      effectiveDate: 'Yürürlükte',
    },
    {
      label: 'Kalan Yasal Süre',
      formula: 'Kalan Gün = En Yüksek(0, 90 - Kullanılan Gün)',
      ruleCitation: 'AB Vize Kodu Yönetmeliği',
      effectiveDate: 'Yürürlükte',
    },
    {
      label: 'Vize İhlali (Overstay) Tespiti',
      formula: 'İhlal = Herhangi bir günde 180 günlük penceredeki toplam gün sayısının 90\'ı aşması',
      ruleCitation: 'Schengen Bilgi Sistemi (SIS II) & Ulusal Yabancılar Hukuku',
      effectiveDate: 'Katı Sınır Denetimi',
    },
  ],
  articleSections: [
    {
      id: '90-180-kurali-nedir',
      title: 'Schengen 90/180 Gün Kuralı Nedir ve Nasıl Çalışır?',
      level: 2,
      content: `Schengen 90/180 kuralı, Avrupa Birliği üyesi ve Schengen anlaşmasına taraf 29 ülkeye kısa süreli seyahat eden tüm üçüncü ülke vatandaşları için geçerli olan temel kalış sınırlamasıdır. Türkiye Cumhuriyeti umuma mahsus (bordo) pasaport hamili olarak aldığınız çok girişli (multi) C tipi vizenin süresi 1 yıl, 2 yıl veya 5 yıl olsa dahi, bu vize size Avrupa'da aralıksız kalma hakkı tanımaz. Tek seferde veya parça parça seyahatlerde, herhangi bir 180 günlük süre zarfında kalabileceğiniz azami süre 90 gün ile sınırlandırılmıştır.

Bu kuralda en sık yapılan hata, 180 günün vizenin başlangıç tarihinden itibaren sabit bir blok olarak işlediğini zannetmektir. Schengen kuralı "hareketli bir pencere" (rolling window) mantığıyla çalışır. Her gün bir adım ileriye akar. Pasaport kontrol polisi veya yeni devreye giren biyometrik Giriş/Çıkış Sistemi (EES) kapısından geçtiğiniz gün, geriye doğru tam 180 gün sayılır. Bu 180 günlük dilim içerisinde Schengen topraklarında geçirdiğiniz günlerin toplamı 90'ı geçmişse, yasal ihlal (overstay) yapmış sayılırsınız.

Üstelik pasaportunuza vurulan giriş ve çıkış kaşelerindeki saat dikkate alınmaz. Örneğin, Schengen bölgesine gece saat 23:45'te iniş yapsanız dahi o takvim günü 1 tam gün sayılır. Benzer şekilde sabah 00:15'te kalkan bir uçakla ayrıldığınızda, gece yarısını 15 dakika geçmiş olsanız bile yeni bir tam gün harcamış olursunuz.`,
    },
    {
      id: 'hareketli-pencere-matematigi',
      title: 'Hareketli Pencere (Rolling Window) Mantığı ve Günlerin Silinmesi',
      level: 2,
      content: `Hareketli pencere matematiğini kavramanın en kolay yolu, takvim üzerinde ileriye doğru kayan 180 günlük bir cetvel hayal etmektir. Kontrol ettiğiniz gün T ise, cetvelin kapsadığı alan [T - 179 gün, T] aralığıdır.

Cetvel her gün sağa doğru bir gün kaydıkça, tam 181 gün önce yaptığınız eski bir seyahatin ilk günü cetvelin sol tarafından dışarı düşer. Bu durum şu anlama gelir:
1. 90 günlük hakkınızın tamamını aralıksız kullandıysanız, yasal olarak Schengen bölgesini terk etmek zorundasınızdır.
2. Bölge dışına çıktıktan sonra ertesi gün yeniden 90 günlük hak kazanmazsınız.
3. Haklarınız, geçmişte yaptığınız seyahat günleri 180 günü doldurup pencereden çıktıkça günbegün damla damla geri yüklenir.
4. Tam 90 günlük hakkın sıfırdan yeniden eksiksiz açılabilmesi için, son Schengen çıkış tarihinizden itibaren kesintisiz 90 gün (toplam 180 günlük döngü) boyunca bölge dışında beklemeniz gerekir.

Türkiye'den sıklıkla iş veya tatil amacıyla Almanya, İtalya, Yunanistan ya da Fransa'ya giden seyahatseverlerin pasaport kontrolünde sürpriz para cezaları veya sınır dışı (deport) kararlarıyla karşılaşmamaları için her uçuş öncesinde bu hareketli pencereyi simüle etmeleri hayati öneme sahiptir.`,
    },
    {
      id: '2026-schengen-ulkeleri-ve-romanya-bulgaristan',
      title: '2026 Yılında Hangi Ülkeler Schengen Bölgesindedir?',
      level: 2,
      content: `1 Ocak 2025 tarihi itibarıyla Schengen bölgesinde tarihi bir genişleme yaşanmıştır. Bulgaristan ve Romanya, hava ve deniz sınırlarının ardından kara sınır kontrollerini de tamamen kaldırarak 29. ve tam yetkili Schengen üyeleri olmuştur. Bu tarihten itibaren Türkiye'den Kapıkule veya Hamzabeyli sınır kapılarından Bulgaristan'a girdiğiniz anda Schengen 90 günlük sayacınız işlemeye başlar.

Güncel 29 Schengen Ülkesi:
- 25 AB Üyesi: Almanya, Avusturya, Belçika, Bulgaristan, Çekya, Danimarka, Estonya, Finlandiya, Fransa, Hırvatistan, Hollanda, İspanya, İsveç, İtalya, Letonya, Litvanya, Lüksemburg, Macaristan, Malta, Polonya, Portekiz, Romanya, Slovakya, Slovenya ve Yunanistan.
- 4 AB Dışı EFTA Ülkesi: İsviçre, Norveç, İzlanda ve Lihtenştayn.

Schengen Bölgesinde Olmayan AB Ülkeleri:
- İrlanda Cumhuriyeti: AB üyesidir fakat Birleşik Krallık ile olan Ortak Seyahat Alanı (CTA) anlaşması ve özel protokolleri nedeniyle Schengen'e dahil değildir. İrlanda'da geçirilen günler Schengen 90 günlük kotanızı etkilemez.
- Güney Kıbrıs Rum Yönetimi: AB üyesidir ancak bölünmüşlük ve teknik değerlendirme süreci tamamlanmadığı için Schengen dışındadır.

Ayrıca Birleşik Krallık (İngiltere), Sırbistan, Bosna-Hersek, Karadağ, Arnavutluk, Kuzey Makedonya ve Gürcistan gibi Avrupa ülkeleri de Schengen dışındadır. Birçok gezgin, 180 günlük sürenin dolmasını beklerken vize hakkını dinlendirmek amacıyla bu ülkelerde vakit geçirmektedir.`,
    },
    {
      id: 'yeni-sinir-sistemleri-ees-ve-etias',
      title: 'Yeni Dijital Sınır Sistemleri: EES Biyometri ve ETIAS 2027',
      level: 2,
      content: `Avrupa Birliği, sınır kapılarındaki manuel pasaport kaşeleme devrini kapatarak tamamen dijital ve biyometrik sistemlere geçiş yapmaktadır:

1. Giriş/Çıkış Sistemi (EES - Entry/Exit System):
AB'nin 2017/2226 sayılı tüzüğü uyarınca kurulan EES, Schengen dış sınırlarında pasaporta mürekkep kaşe basılması uygulamasını sonlandırmaktadır. Sınır kapılarına kurulan elektronik kiosklar; yüz taraması ve 4 parmak izi alarak dijital kayıt oluşturur. Sistem, giriş ve çıkış tarihlerini merkezi veritabanında saklayarak 90/180 gün hesabını saniyesine kadar otomatik yapar. Bir günlük ihlal bile anında tüm AB ülkelerinin polis sistemlerine kırmızı alarm olarak düşer.

2. ETIAS (Avrupa Seyahat Bilgi ve Yetkilendirme Sistemi):
ETIAS, vizeden muaf ülke vatandaşlarının (örneğin İngiltere, ABD, Kanada vatandaşları) Avrupa'ya seyahat etmeden önce internetten alması gereken elektronik seyahat iznidir. EES sisteminin oturmasının ardından 2027 yılında faaliyete geçmesi planlanmaktadır. Standart başvuru ücreti 7 Avro olup (18 yaş altı ve 70 yaş üstüne ücretsiz), 3 yıl geçerlidir. Türk bordo pasaport sahipleri halihazırda C tipi vizeye tabi oldukları için ETIAS almazlar, doğrudan konsolosluk vizesiyle seyahat ederler.`,
    },
    {
      id: 'karayolu-ve-kapikule-uygulamalari',
      title: 'Karayoluyla Avrupa Seyahati: Kapıkule, İpsala ve Transit Kuralları',
      level: 2,
      content: `Türkiye'den kendi aracıyla veya otobüs turlarıyla Avrupa'ya seyahat eden vatandaşlarımız için sınır kapılarındaki gün sayımı özel bir dikkat gerektirmektedir. Kapıkule veya Hamzabeyli kapısından Bulgaristan'a ya da İpsala sınır kapısından Yunanistan'a giriş yaptığınız an, pasaportunuza giriş kaşesi basıldığı (veya EES biyometrik kaydınız alındığı) dakika itibarıyla ilk gününüz resmen başlamış olur.

Özellikle Batı Avrupa'ya karayoluyla gitmek isteyen gurbetçilerimiz veya tatilcilerimiz için önemli hususlar:
1. Bulgaristan ve Romanya Transit Geçişi: Eskiden Bulgaristan ve Romanya ulusal transit vizesi veya muafiyeti sağlarken, 1 Ocak 2025'ten itibaren bu iki ülke tam Schengen üyesi olduğundan, Bulgaristan'dan geçip Sırbistan'a ulaşana kadar geçirdiğiniz süre doğrudan Schengen 90 günlük hakkınızdan harcanır.
2. Sırbistan ve Macaristan Güzergahı: Sırbistan Schengen üyesi değildir. Dolayısıyla Bulgaristan'dan çıkıp Sırbistan'a girdiğinizde Schengen sayacınız durur; ardından Macaristan sınırındaki Röszke kapısından yeniden Schengen'e girdiğinizde yeni bir giriş günü kayda geçer.
3. Araçla Seyahat Belgeleri: Sınır kapısında pasaport ve vizenin yanı sıra aracınız için Uluslararası Motorlu Taşıt Sigorta Kartı (Yeşil Kart) ve uluslararası geçerli yeni tip sürücü belgesi ibraz edilmelidir.`,
    },
    {
      id: 'vize-ihlali-ve-cezalar',
      title: 'Schengen Gün İhlali (Overstay) Cezaları ve Sonuçları',
      level: 2,
      content: `90/180 gün sınırını aşmak, Avrupa Birliği yasalarına göre ciddi bir idari suçtur. İhlalin boyutuna ve çıkış yaptığınız ülkeye bağlı olarak şu yaptırımlarla karşılaşabilirsiniz:

- Yüksek Para Cezaları: Havalimanında veya sınır kapısında pasaport polisi tarafından anında tahsil edilen cezalar 150 Avro ile 2.000 Avro arasında değişmektedir. Özellikle Almanya, İsviçre ve Hollanda sınır kontrollerinde cezalar en üst sınırdan uygulanmaktadır.
- Schengen Giriş Yasağı (SIS Tahdidi): İhlal yapan yolcular hakkında Schengen Bilgi Sistemi'ne (SIS II) giriş yasağı kaydı girilir. Bu yasak genellikle 1 yıl ile 5 yıl arasında sürmektedir ve bu süre boyunca 29 ülkenin hiçbirine adım atamazsınız.
- Gelecek Vize Başvurularının Otomatik Reddi: Pasaportunuzda veya EES dijital kaydında vize ihlali bulunması, gelecekte yapacağınız tüm Schengen vizesi başvurularında dosyanızın doğrudan "güvenilmez yolcu" ve "yasa dışı göç riski" olarak değerlendirilmesine ve ret (red) damgası vurulmasına neden olur.
- Sınır Dışı ve Mahkeme Masrafları: Şayet ihlal Schengen içinde rastgele bir kimlik kontrolünde tespit edilirse, kişi geri gönderme merkezine (GGM) sevk edilir ve sınır dışı masrafları şahsına fatura edilir.`,
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Kapıkule\'den Bulgaristan ve Yunanistan Seyahati',
      scenario: 'Bordo pasaportlu bir Türk vatandaşı, 1 Şubat 2026 tarihinde Kapıkule sınırından Bulgaristan\'a girip 25 gün sonra dönmüştür.',
      calculationType: 'verify',
      inputAmount: 25,
      rate: 180,
      resultVat: 65,
      resultTotal: 25,
      customFields: [
        { label: 'Giriş Tarihi', value: '01.02.2026' },
        { label: 'Çıkış Tarihi', value: '25.02.2026' },
        { label: 'Kullanılan Süre', value: '25 gün' },
        { label: 'Kalan Schengen Gün Hakkı', value: '65 gün' },
        { label: '90 Günün Tam Sıfırlanma Tarihi', value: '24 Ağustos 2026' },
      ],
      explanation: 'Bulgaristan 1 Ocak 2025 itibarıyla tam Schengen üyesi olduğundan, Kapıkule\'den çıkış yapıldığı anda 25 günlük Schengen hakkı kullanılmıştır. Yolcunun 180 günlük penceresinde 65 gün yasal hakkı kalmıştır. Bu kişi ilkbaharda İtalya veya Almanya\'ya 65 güne kadar seyahat edebilir.',
    },
    {
      title: 'Örnek 2: Aralıklı İş Gezileri ve Hafta Sonu Tatilleri',
      scenario: 'Bir ihracat uzmanı Mart, Nisan ve Mayıs 2026 aylarında Almanya ve Fransa\'ya 3 ayrı iş gezisi yapmıştır.',
      calculationType: 'verify',
      inputAmount: 34,
      rate: 180,
      resultVat: 56,
      resultTotal: 34,
      customFields: [
        { label: '1. Gezi (1-10 Mart)', value: '10 gün' },
        { label: '2. Gezi (1-12 Nisan)', value: '12 gün' },
        { label: '3. Gezi (10-21 Mayıs)', value: '12 gün' },
        { label: '1 Haziran 2026 İtibarıyla Toplam', value: '34 gün' },
        { label: 'Yaz Tatili İçin Kalan Gün', value: '56 gün' },
      ],
      explanation: '1 Haziran 2026 tarihinde geriye doğru 180 gün tarandığında üç gezinin tamamı (10 + 12 + 12 = 34 gün) pencere içine düşmektedir. İhracatçının yaz tatili için geriye tam 56 gün hakkı kalmaktadır.',
    },
  ],
  faqs: [
    {
      q: 'Pasaporttaki giriş ve çıkış günleri tam gün olarak mı sayılır?',
      a: 'Evet. Schengen Sınır Yasası\'na göre giriş ve çıkış günlerinin saatine bakılmaksızın her iki gün de tam bir takvim günü olarak hesaba dahil edilir. Gece 23:55 girişi ile ertesi sabah 00:05 çıkışı toplam 2 tam gün olarak hesaplanır.',
    },
    {
      q: 'Bulgaristan ve Romanya seyahatleri artık Schengen 90 gününe dahil mi?',
      a: 'Evet, kesinlikle dahildir. 1 Ocak 2025 tarihinde kara sınır kontrollerinin de kalkmasıyla Bulgaristan ve Romanya tam Schengen üyesi olmuştur. Buralarda geçirdiğiniz her gün 90 günlük genel Schengen hakkınızdan düşer.',
    },
    {
      q: 'Vize sürem 1 yıllık multi vize ise aralıksız 1 yıl kalabilir miyim?',
      a: 'Hayır, kesinlikle kalamazsınız. Vizenizin 1, 2 veya 5 yıllık olması sadece o süre boyunca tekrar tekrar giriş çıkış yapabileceğinizi gösterir. Kalış süreniz her zaman herhangi bir 180 günde azami 90 gün ile sınırlıdır.',
    },
    {
      q: '90 gün dolduktan sonra Gürcistan veya İngiltere\'ye geçip ertesi gün dönsem süre sıfırlanır mı?',
      a: 'Hayır, sıfırlanmaz. Schengen dışına çıkıp geri dönmek süreyi sıfırlamaz, sadece sayacı durdurur. 90 günün tamamını doldurduysanız, geçmişteki günleriniz 180 günü doldurup sistemden düşene kadar Schengen bölgesine giremezsiniz.',
    },
    {
      q: 'Yeşil (hususi) veya gri (hizmet) pasaport sahipleri için de 90/180 kuralı geçerli midir?',
      a: 'Evet. Yeşil ve gri pasaport sahipleri Schengen vizesinden muaftır ancak 90/180 günlük kalış sınırlamasından muaf değillerdir. Onlar da herhangi bir 180 günlük dönemde en fazla 90 gün kalabilirler.',
    },
    {
      q: 'Kıbrıs veya İrlanda\'ya gidersem Schengen günüm azalır mı?',
      a: 'Hayır, azalmaz. Güney Kıbrıs ve İrlanda Cumhuriyeti AB üyesi olmalarına karşın Schengen bölgesinde yer almazlar. Buralarda geçirdiğiniz günler 90 günlük Schengen kotanızı harcamaz.',
    },
    {
      q: 'Schengen gün ihlali (overstay) yaparsam ne kadar para cezası öderim?',
      a: 'Cezalar ülkeden ülkeye değişmekle birlikte genellikle 150 Avro\'dan başlar, ihlal süresine göre 2.000 Avro\'ya kadar çıkabilir. Ayrıca 1 ila 5 yıl arası SIS giriş yasağı konulması yaygın bir uygulamadır.',
    },
    {
      q: 'Acil bir sağlık sorunu veya uçuş iptali nedeniyle günümü aşarsam ne yapmalıyım?',
      a: 'Mücbir bir sebeple vizenizin veya 90 gününüzün bitiminden önce ülkeden ayrılamayacak durumdaysanız, derhal en yakın yabancılar polisine (Ausländerbehörde vb.) başvurarak Vize Kodu 33. maddesi uyarınca resmi vize uzatması talep etmelisiniz.',
    },
    {
      q: 'EES (Giriş/Çıkış Sistemi) pasaport kontrolünü nasıl değiştirecek?',
      a: 'EES ile birlikte pasaporta fiziksel mürekkep damga basılması son bulacaktır. Parmak izi ve yüz biyometrisi ile giriş-çıkışlar saniyesi saniyesine merkezi AB sistemine kaydedilecek ve ihlaller bilgisayar tarafından anında tespit edilecektir.',
    },
  ],
  sources: [
    {
      label: 'Avrupa Komisyonu Göç ve İçişleri - Schengen Alanı ve Sınır Kodu',
      url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en',
    },
    {
      label: 'Avrupa Birliği Resmi ETIAS Portalı',
      url: 'https://travel-europe.europa.eu/etias_en',
    },
    {
      label: 'EUR-Lex: AB 2016/399 Sayılı Schengen Sınır Kanunu Tüzüğü',
      url: 'https://eur-lex.europa.eu/eli/reg/2016/399/oj',
    },
  ],
  relatedTools: [
    {
      title: 'Schengen 90/180 Day Calculator (English)',
      slug: 'schengen-calculator',
      description: 'Official rolling window travel calculator for English-speaking travelers.',
      category: 'travel',
    },
    {
      title: 'ETIAS Vize Muafiyeti Rehberi',
      slug: 'etias',
      description: 'Avrupa Birliği ETIAS elektronik seyahat izni ve ücret detayları.',
      category: 'travel',
    },
    {
      title: 'EES Biyometrik Giriş Çıkış Sistemi',
      slug: 'ees-entry-exit-system',
      description: 'AB biyometrik pasaport kontrol sistemi ve parmak izi uygulaması.',
      category: 'travel',
    },
  ],
  relatedGuides: [
    {
      title: 'Schengen Vizesi 90/180 Kuralı Detaylı Rehberi',
      slug: 'tr/rehber/schengen-vizesi-90-180-kurali',
      description: 'Türk vatandaşları için Schengen vize süresi ve hareketli pencere kapsamlı rehberi.',
      category: 'travel',
    },
    {
      title: 'Schengen Ülkeleri Listesi 2026',
      slug: 'guides/schengen-countries-list',
      description: 'Bulgaristan ve Romanya dahil 29 üye ülke ve katılma tarihleri.',
      category: 'travel',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu Schengen gün hesaplama aracı AB 2016/399 sayılı yönetmeliği uyarınca bilgilendirme amacıyla hazırlanmıştır. Nihai giriş-çıkış ve kalış değerlendirme yetkisi sınır kontrol memurlarına ve ilgili üye devletlerin göç idarelerine aittir.',
};
