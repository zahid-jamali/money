import { GuideContent } from '../../types';

export const guideTrSchengenVizeRehberi: GuideContent = {
  metaTitle: 'Schengen Vizesi 90/180 Kuralı Nedir? Hesaplama ve Rehber',
  metaDescription:
    'Schengen 90/180 gün kuralı nedir? C tipi çok girişli vize süreleri, hareketli pencere mantığı, pasaport kaşeleri, overstay cezaları ve EES biyometrik kayıt rehberi.',
  h1: 'Schengen Vizesi 90/180 Kuralı: Kapsamlı Hesaplama ve Kullanım Rehberi',
  intro:
    'Avrupa ülkelerine seyahat eden Türkiye Cumhuriyeti vatandaşlarının vize kullanımında en çok hata yaptığı ve bu sebeple pasaport kontrolünde para cezası ya da sınır dışı (deport) riskiyle karşılaştığı konu Schengen 90/180 gün kuralıdır. Pasaportunuzda 1 yıllık, 2 yıllık hatta 5 yıllık çok girişli (multi) vizeniz bulunsa dahi, bu vize Avrupa\'da dilediğiniz kadar kalabileceğiniz anlamına gelmez. Bu kapsamlı rehberde, hareketli pencere (rolling window) matematiğini, kaşe kurallarını, Bulgaristan ve Romanya\'nın tam üyeliğini ve yasal haklarınızı ayrıntılarıyla inceliyoruz.',
  readTimeMinutes: 10,
  articleSections: [
    {
      id: 'temel-hukuki-cerceve',
      title: 'Schengen 90/180 Kuralının Hukuki Temeli ve Amacı',
      level: 2,
      content: `Avrupa Birliği\'nin 2016/399 sayılı Schengen Sınır Kanunu (Schengen Borders Code) 6. maddesi uyarınca, Schengen üyesi olmayan üçüncü ülke vatandaşları, 29 ülkenin oluşturduğu ortak alanda herhangi bir 180 günlük dönem içerisinde en fazla 90 gün kalabilirler. Bu düzenleme yalnızca turistik amaçlı seyahat eden bordo pasaportlu Türk vatandaşları için değil; vizeden muaf olan yeşil (hususi) ve gri (hizmet) pasaport sahipleri için de harfiyen geçerlidir.

Geçmiş yıllarda kural "ilk giriş tarihinden itibaren 6 ay içinde 90 gün" şeklinde yorumlanmaktaydı. Ancak bu eski tanım suiistimallere ve kafa karışıklıklarına yol açtığı için, Avrupa Birliği 18 Ekim 2013 tarihinde tüzüğü kökten değiştirerek "hareketli pencere" (rolling window) sistemini yürürlüğe koymuştur.

Günümüzdeki standart uyarınca, seyahatinizin yasal olup olmadığını belirleyen sabit bir takvim yılı veya 6 aylık blok bulunmamaktadır. Schengen bölgesinde bulunduğunuz her bir günde, sınır polisi ve bilgisayar sistemleri geriye dönük tam 180 günü inceler. Bu 180 günlük zaman zarfındaki toplam kalış gününüz 90\'ı aşıyorsa, vize ihlali (overstay) yapmış sayılırsınız.`,
    },
    {
      id: 'vize-suresi-ile-kalis-hakki-farki',
      title: 'Vize Geçerlilik Süresi ile Kalış Hakkı Arasındaki Hayati Fark',
      level: 2,
      content: `Konsolosluktan pasaportunuza yapıştırılan vize etiketini incelerken iki kritik veriyi birbirinden kesin çizgilerle ayırmanız şarttır:

1. Vizenin Geçerlilik Süresi (From... Until...):
Örneğin, etiketinizde "01-01-2026 / 31-12-2026" yazıyorsa, bu vizenizin 1 yıl boyunca yürürlükte olduğunu ve bu tarihler arasında Schengen bölgesine giriş-çıkış yapabileceğinizi belirtir.

2. İzin Verilen Kalış Süresi (Duration of Stay):
Çok girişli (MULT) uzun süreli vizelerde bu hanede genellikle "90" yazar. İşte en kritik yanılgı burada başlar: Birçok kişi bu 90 günün tek bir seferde kullanılabileceğini ve sonraki girişlerde yeni bir 90 gün verileceğini zanneder. Oysa bu ibare, vizenin geçerli olduğu 1 yıl boyunca "herhangi bir 180 günde azami 90 gün" kalabileceğinizi ifade eder.

Şayet pasaportunuzdaki vize tek girişli (01) ise, üzerinde yazan süre kadar (örneğin 15 gün) kalıp bölgeyi terk etmeniz gerekir; bu durumda 90 günün tamamını kullanamazsınız. Ancak çok girişli vizeniz olsa dahi 90 günü aralıksız doldurduğunuz takdirde derhal Schengen bölgesini terk etmek zorundasınızdır.`,
    },
    {
      id: 'hareketli-pencere-nasil-calisir',
      title: 'Hareketli Pencere (Rolling Window) Matematiği ve Gün Sayımı',
      level: 2,
      content: `Hareketli pencere kuralını anlamanın en pratik yolu, zaman çizgisi üzerinde her gün bir gün ileriye kayan 180 günlük bir çerçeve hayal etmektir. Kontrol ettiğiniz gün T ise, yasal inceleme aralığı [T - 179 gün, T] formülüyle hesaplanır. Bu aralık tam 180 takvim gününü kapsar.

Bu matematiksel modelin temel kuralları şunlardır:
- Giriş ve Çıkış Günleri Tam Gün Sayılır: Uçağınız Roma veya Münih havalimanına gece 23:45\'te inse dahi o takvim günü 1 tam gün sayılır. Aynı şekilde sabah 00:20\'de kalkan bir uçakla ayrıldığınızda, gece yarısını sadece 20 dakika geçmiş olsanız bile yeni bir tam gün harcamış olursunuz.
- Eski Günlerin Sistemden Düşmesi: Pencere her gün bir gün sağa kaydıkça, tam 181 gün önceki seyahatinizin ilk günü pencerenin dışına çıkar ve size 1 günlük yeni kullanım hakkı açılır.
- Aralıksız 90 Gün Kalış Durumu: Eğer 1 Ocak\'tan 31 Mart\'a kadar aralıksız 90 gün Schengen\'de kalmışsanız, 1 Nisan günü hakkınız sıfırlanmış olur. Yeniden 90 günlük tam bir blok hak kazanabilmek için, bölge dışında tam 90 gün (yani ilk girişinizden itibaren 180 gün) beklemeniz şarttır.
- Kısa ve Sık Seyahatler: Yıl içine yayılmış 3-4 günlük hafta sonu tatilleri veya haftalık iş gezileri yapanlar için günler tek bir blok halinde değil, geçmişteki her bir seyahatin 180 günü doldukça parça parça geri yüklenir.`,
    },
    {
      id: '2026-schengen-ulkeleri-bulgaristan-romanya',
      title: 'Bulgaristan ve Romanya\'nın Tam Üyeliği: Kapıkule\'de Yeni Dönem',
      level: 2,
      content: `1 Ocak 2025 tarihi, Türkiye\'den karayoluyla Avrupa\'ya seyahat eden tüm vatandaşlarımız için tarihi bir dönüm noktası olmuştur. Bulgaristan ve Romanya, hava ve deniz sınırlarının ardından kara sınır kontrollerini de resmen kaldırarak Schengen bölgesinin 29. ve tam yetkili üyeleri haline gelmiştir.

Bu durumun Türkiye Cumhuriyeti vatandaşları için doğurduğu sonuçlar:
- Kapıkule veya Hamzabeyli\'den Çıkış: Türk sınır kapısından geçip Bulgaristan sınır polisinden giriş kaşesi aldığınız anda (veya EES biyometrik kaydınız yapıldığında), Schengen 90 günlük sayacınız işlemeye başlar.
- Artık Ara Durak Olarak Kullanılamaz: Eski yıllarda Schengen vize gününü dolduran Türk vatandaşları, gün hakkını eritmemek için Bulgaristan veya Romanya\'da bekleyebiliyordu. 1 Ocak 2025 itibarıyla bu iki ülkede geçirdiğiniz her gün doğrudan ortak 90 günlük Schengen kotanızdan düşmektedir.
- Bulgaristan-Yunanistan ve Romanya-Macaristan Kara Sınırları: Bu sınırlar arasındaki gümrük ve pasaport kulübeleri kaldırılmıştır; durmaksızın kesintisiz transit geçiş yapılabilmektedir.

Schengen Alanı Dışında Kalan Avrupa Ülkeleri:
İrlanda Cumhuriyeti ve Güney Kıbrıs AB üyesi olmalarına rağmen Schengen dışındadır. Birleşik Krallık (İngiltere), Sırbistan, Bosna-Hersek, Karadağ, Arnavutluk, Kuzey Makedonya ve Gürcistan da Schengen dışındadır. Schengen gününü dolduran seyahatseverler 180 günlük sürenin dolmasını beklerken bu ülkeleri yasal mola yeri olarak tercih etmektedir.`,
    },
    {
      id: 'yeni-biyometrik-sinir-sistemi-ees',
      title: 'Biyometrik Devrim: Giriş/Çıkış Sistemi (EES) ve Pasaport Kaşeleri',
      level: 2,
      content: `Yıllardır sınır kapılarında pasaport sayfalarının çevrilerek mürekkep kaşelerin tarihinin elle hesaplanması devri artık kapanmaktadır. Avrupa Birliği\'nin yürürlüğe koyduğu Giriş/Çıkış Sistemi (EES - Entry/Exit System), pasaporta fiziksel kaşe basılması uygulamasını tamamen kaldırmaktadır.

EES Nasıl Çalışır?
- İlk Kayıt: Schengen dış sınırındaki bir havalimanı veya kara sınırına vardığınızda, elektronik self-servis kiosklarda pasaportunuz taranır, yüz fotoğrafınız çekilir ve sağ elinizin 4 parmağının izi alınır.
- Otomatik Gün Hesabı: Sistem, giriş ve çıkış anınızı merkezi AB veritabanına dijital olarak kaydeder. 90/180 gün hesabı bilgisayar algoritması tarafından anlık olarak yapılır.
- İhlallerin Anında Tespiti: Eskiden okunaksız kaşeler veya gözden kaçan memur hataları sayesinde fark edilmeyen 1-2 günlük ihlaller dahi, EES sisteminde pasaportunuzu okuttuğunuz saniyede ekranda kırmızı ihlal alarmı verecektir.

ETIAS Hakkında Önemli Not:
2027 yılında faaliyete geçmesi beklenen ETIAS (Elektronik Seyahat Yetkilendirmesi), sadece AB\'ye vizesiz seyahat hakkı olan ülkelerin (örneğin İngiltere, ABD) vatandaşları içindir. Bordo pasaportlu Türk vatandaşları konsolosluktan C tipi vize almaya devam edecekleri için ETIAS\'a tabi değildirler.`,
    },
    {
      id: 'cok-yillik-vize-kullanim-stratejisi',
      title: 'Çok Yıllık Vizelerde Gün Planlama Stratejisi ve Kademeli Vize (Kaskad) Kuralı',
      level: 2,
      content: `Konsoloslukların Türk vatandaşlarına 2 yıllık, 3 yıllık veya 5 yıllık uzun süreli Schengen vizesi vermesinde en belirleyici kriter, başvuru sahibinin önceki vizelerindeki 90/180 kuralına sadakatidir. AB Vize Kodu 24. maddesinde düzenlenen "kademeli vize" (kaskad) sistemine göre, son 2 yıl içinde almış olduğu vizeleri yasal kurallara uygun olarak kullanan ve hiçbir gün aşımı yapmayan seyahatseverlere kademeli olarak daha uzun süreli vizeler verilir.

Uzun süreli vizenizi korumak ve bir sonraki başvuruda 5 yıllık vize alabilmek için şu stratejilere dikkat etmelisiniz:
1. İlk Giriş Kuralı (Visa Shopping Riski): Vizenizi hangi ülkenin konsolosluğundan aldıysanız, ilk seyahatinizi o ülkeye gerçekleştirmeye veya seyahatinizin ana merkezinin (en çok konaklanan ülke) o ülke olduğunu otel rezervasyonlarıyla ispatlamaya özen gösterin. Örneğin İtalya'dan alınan vizeyle doğrudan Almanya'ya uçulduğunda, sınır polisi vizenin kötüye kullanıldığını değerlendirerek kapıda iptal edebilir.
2. Yılda İki Ayrı 90 Gün Kalış İmkanı: 180 günlük hareketli pencere mantığı sayesinde, bir takvim yılı içerisinde iki ayrı 90 günlük dönemi yasal olarak Avrupa'da geçirebilirsiniz. Örneğin Ocak-Şubat-Mart aylarında 90 gün kaldıktan sonra, Nisan-Mayıs-Haziran aylarında Türkiye'de bekleyip, ardından Temmuz-Ağustos-Eylül aylarında tekrar 90 gün kalabilirsiniz.
3. 183 Gün Vergi Mukimliği Tuzağı: Bir takvim yılında herhangi bir AB ülkesinde 183 günden fazla kalırsanız, o ülkenin yerel vergi yasalarına göre otomatik olarak "vergi mükellefi" (vergi mukimi) durumuna düşebilirsiniz. Turist statüsünde seyahat ederken vergi ihtilaflarıyla karşılaşmamak için toplam gün sayınızı dikkatle izlemelisiniz.
4. Sınır Kontrolünde Hazır Bulundurulacak Evraklar: Pasaport kontrolünde polisin dönüş biletinizi, seyahat sağlık sigortanızı ve kalacağınız gün başına yaklaşık 50-70 Avro nakit veya kredi kartı bakiyenizi sorma hakkı bulunmaktadır. Bu belgeleri her zaman el bagajınızda hazır bulundurmalısınız.`,
    },
    {
      id: 'overstay-ve-yasal-cozumler',
      title: 'Vize İhlali (Overstay) Yaptırımları ve Acil Durum Hakları',
      level: 2,
      content: `90/180 gün kuralını aşmanın cezaları oldukça ağırdır ve şakaya gelmez:
- Para Cezaları: Ülkeden çıkarken sınır polisi tarafından kesilen cezalar genellikle 150 Avro\'dan başlar; ihlal süresine göre Almanya ve İsviçre\'de 1.500 - 3.000 Avro\'ya kadar tırmanabilir.
- SIS Giriş Yasağı (Deport): Schengen Bilgi Sistemi\'ne (SIS II) adınıza 1 yıldan 5 yıla kadar giriş yasağı konulabilir. Bu yasak 29 üye ülkenin tamamında geçerlidir.
- Gelecek Vize Başvurularının Yanması: Pasaportunuzda veya EES kaydınızda overstay tespiti bulunması, gelecekte yapacağınız tüm Schengen vizesi başvurularının otomatikman doğrudan reddedilmesine yol açar.

Acil Durumda Ne Yapmalı? (Vize Kodu Madde 33)
Şayet hastaneye kaldırılma, ağır hastalık, doğal afet veya uçuşların hava sahası kapanması nedeniyle iptal edilmesi gibi elde olmayan mücbir sebeplerle 90 gün dolmadan Avrupa\'dan ayrılamayacak durumdaysanız:
- Kesinlikle gününüzün dolmasını beklemeden, vizeniz bitmeden önce bulunduğunuz ülkedeki Yabancılar Polisi İdaresine (Almanya\'da Ausländerbehörde, Fransa\'da Préfecture, İtalya\'da Questura) şahsen başvurun.
- Hastane raporu, doktor heyet belgesi veya havayolu iptal yazısını ibraz edin.
- AB Vize Kodu 33. maddesi uyarınca yetkililer size yasal vize uzatma etiketi veya geçici izin belgesi vererek ülkeyi cezasız ve yasaksız terk etmenizi sağlar.`,
    },
  ],
  faqs: [
    {
      q: 'Pasaporttaki giriş ve çıkış kaşeleri tam gün mü sayılır?',
      a: 'Evet. Schengen Sınır Kanunu uyarınca giriş ve çıkış yapılan saatler dikkate alınmaksızın her iki gün de tam bir takvim günü olarak hesaba katılır.',
    },
    {
      q: 'Yeşil (hususi) pasaport sahipleri 90/180 kuralına tabi midir?',
      a: 'Evet. Yeşil pasaport vizeden muaftır ancak 90/180 gün kuralından muaf değildir. Yeşil pasaportlular da herhangi bir 180 günde en fazla 90 gün Schengen bölgesinde kalabilirler.',
    },
    {
      q: 'Bulgaristan ve Romanya seyahatleri artık Schengen 90 gününe dahil mi?',
      a: 'Evet, tamamen dahildir. 1 Ocak 2025\'te kara sınır kontrollerinin de kalkmasıyla birlikte Bulgaristan ve Romanya\'da geçirilen tüm günler 90 günlük ortak Schengen havuzundan harcanır.',
    },
    {
      q: '1 yıllık vizenin tamamını kesintisiz Avrupa\'da geçirebilir miyim?',
      a: 'Hayır. 1 yıllık çok girişli vize ile herhangi bir 180 günlük zaman diliminde en fazla 90 gün kalabilirsiniz. 90 günü doldurduğunuzda bölgeyi terk etmeniz zorunludur.',
    },
    {
      q: '90 gün dolunca Sırbistan veya Karadağ\'a geçip hemen geri dönsem süre sıfırlanır mı?',
      a: 'Hayır. Schengen bölgesinden çıkmak süreyi sıfırlamaz, sadece sayacın ilerlemesini durdurur. Yeniden 90 gün kalabilmek için eski seyahatlerinizin üzerinden 180 gün geçmesi gerekir.',
    },
    {
      q: 'Kıbrıs veya İrlanda seyahati Schengen günlerimi tüketir mi?',
      a: 'Hayır. Güney Kıbrıs ve İrlanda Cumhuriyeti Schengen bölgesine dahil değildir. Buralarda geçirdiğiniz süreler 90 günlük Schengen kotanızdan düşmez.',
    },
    {
      q: 'Vize ihlali (overstay) yaparsam ne kadar para cezası öderim?',
      a: 'Cezalar çıkış yaptığınız ülkeye ve ihlal gün sayısına göre 150 Avro ile 2.000 Avro arasında değişir. Ayrıca pasaportunuza 1-5 yıl arası Schengen giriş yasağı konulabilir.',
    },
    {
      q: 'Uçuşum son gün iptal edilirse ne yapmalıyım?',
      a: 'Havalimanı pasaport polisine derhal giderek havayolundan aldığınız iptal belgesini gösterin. Polis acil durum kapsamında çıkışınıza izin verecek geçici belge düzenleyebilir.',
    },
  ],
  sources: [
    {
      label: 'Avrupa Komisyonu Göç ve İçişleri Genel Müdürlüğü - Schengen Kuralı',
      url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en',
    },
    {
      label: 'EUR-Lex: AB 2016/399 Sayılı Schengen Sınır Kanunu Tüzüğü Metni',
      url: 'https://eur-lex.europa.eu/eli/reg/2016/399/oj',
    },
    {
      label: 'Avrupa Birliği Resmi Seyahat Portalı (ETIAS ve EES)',
      url: 'https://travel-europe.europa.eu/',
    },
    {
      label: 'Dışişleri Bakanlığı: Schengen Vizesi ve Seyahat Bilgilendirmesi',
      url: 'https://www.mfa.gov.tr/',
    },
  ],
  cta: {
    title: 'Kalan Schengen Gününüzü Hemen Hesaplayın',
    description: 'Ücretsiz Türkçe Schengen gün hesaplama aracımızla pasaport kaşelerinizi girin, hareketli pencere cetvelinde kalan sürenizi görün ve ihlallerden korunun.',
    buttonText: 'Schengen Gün Hesaplayıcıyı Aç',
    buttonHref: '/tr/schengen-gun-hesaplama/',
    badge: 'Güncel 2026 Kuralları',
  },
  relatedTools: [
    {
      title: 'Schengen Vize Gün Hesaplama',
      slug: 'tr/schengen-gun-hesaplama',
      description: 'Türkçe 90/180 gün hareketli pencere ve vize süresi takip aracı.',
      category: 'travel',
    },
    {
      title: 'Schengen 90/180 Day Calculator (English)',
      slug: 'schengen-calculator',
      description: 'Official European travel calculator for international travelers.',
      category: 'travel',
    },
  ],
  relatedGuides: [
    {
      title: 'Schengen Ülkeleri Listesi 2026',
      slug: 'guides/schengen-countries-list',
      description: 'Bulgaristan ve Romanya dahil 29 üye ülkenin tam listesi.',
      category: 'travel',
    },
    {
      title: 'Schengen Overstay Cezaları ve Sonuçları',
      slug: 'guides/schengen-overstay-consequences',
      description: 'Vize süresini aşmanın idari para cezaları ve SIS giriş yasakları.',
      category: 'travel',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu rehber AB 2016/399 sayılı tüzüğü çerçevesinde genel bilgilendirme amacıyla hazırlanmıştır. Sınır giriş ve kalış izinleri ilgili üye devlet makamlarının yetkisindedir.',
};
