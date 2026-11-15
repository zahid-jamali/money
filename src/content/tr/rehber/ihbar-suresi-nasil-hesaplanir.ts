import { GuideContent } from '../../types';

export const guideTrIhbarSuresi: GuideContent = {
  metaTitle: 'İhbar Süresi Nasıl Hesaplanır? | 2026 Bildirim Rehberi',
  metaDescription:
    'İhbar süresi nasıl hesaplanır? 4857 SK bildirim kademeleri (2, 4, 6, 8 hafta), yeni iş arama izni, yıllık izin çakışması ve ihbar tazminatı hesaplama rehberi.',
  h1: 'İhbar Süresi Nasıl Hesaplanır? (Bildirim Süreleri ve Yasal Haklar)',
  intro:
    'Belirsiz süreli iş sözleşmesiyle çalışan işçi veya işverenin, sözleşmeyi sonlandırmadan önce kanunen uymakla yükümlü olduğu en kritik yasal kural bildirim süresidir (ihbar öneli). 4857 sayılı İş Kanunu\'nun 17. maddesi ile düzenlenen bu süre, hem çalışana yeni bir iş arama fırsatı tanımakta hem de işverene kadro boşluğunu doldurma imkanı vermektedir. Bildirim süresine uyulmaması halinde ise devreye ihbar tazminatı girmektedir. Bu rehberde ihbar süresinin nasıl hesaplandığını, takvim günü sayımını, günde 2 saatlik iş arama iznini ve Yargıtay\'ın yerleşik kurallarını detaylarıyla ele alıyoruz.',
  readTimeMinutes: 10,
  articleSections: [
    {
      id: 'ihbar-suresi-nedir-ve-temel-ilkeler',
      title: 'İhbar Süresi (Bildirim Öneli) Nedir ve Hukuki Temeli?',
      level: 2,
      content: `4857 sayılı İş Kanunu'nun 17. maddesi uyarınca, belirsiz süreli iş sözleşmelerinin feshinden önce durumun diğer tarafa belirli bir süre önceden yazılı olarak bildirilmesi yasal bir zorunluluktur. Bu süreye iş hukukunda "ihbar süresi" veya "bildirim öneli" denir.

İhbar süresinin temel hukuki nitelikleri şunlardır:
- **Karşılıklı Yükümlülük**: İhbar süresine uyma zorunluluğu sadece işverene ait değildir. Kendi isteğiyle işten ayrılmak (istifa etmek) isteyen bir işçi de kıdemine denk gelen bildirim süresini işverene önceden bildirmek ve bu sürede çalışmakla yükümlüdür.
- **Yazılı Bildirim Şartı**: Fesih bildirimi mutlaka yazılı olarak ve imza karşılığı yapılmalıdır. WhatsApp mesajı, sözlü beyan veya telefon konuşması ile yapılan fesihler usulden geçersiz sayılabilir.
- **Sadece Belirsiz Süreli Sözleşmelerde Geçerlidir**: Belirli süreli iş sözleşmelerinde sözleşmenin biteceği tarih baştan belli olduğundan kural olarak ihbar süresi ve ihbar tazminatı uygulanmaz.
- **Nispi Emredici Hukuk Kuralı**: Kanunda belirlenen bildirim süreleri asgari sınırlardır. Bireysel iş sözleşmesi veya toplu iş sözleşmesi ile bu süreler sadece işçi lehine artırılabilir; kanuni asgari sürelerin altına indirilemez.`,
    },
    {
      id: 'kideme-gore-ihbar-sureleri-ve-gun-hesabi',
      title: 'Kıdeme Göre Bildirim Kademeleri ve Takvim Günü Hesabı',
      level: 2,
      content: `İşçinin işyerindeki hizmet süresi arttıkça kanunun öngördüğü bildirim süresi de kademeli olarak uzar. 4857 sayılı İş Kanunu m.17 uyarınca 4 farklı kıdem kademesi belirlenmiştir:

1. **6 Aydan Az Süren Çalışmalar İçin**: Bildirim süresi **2 haftadır** (14 takvim günü).
2. **6 Ay ile 1,5 Yıl Arası Çalışmalar İçin**: Bildirim süresi **4 haftadır** (28 takvim günü).
3. **1,5 Yıl ile 3 Yıl Arası Çalışmalar İçin**: Bildirim süresi **6 haftadır** (42 takvim günü).
4. **3 Yıldan Fazla Süren Çalışmalar İçin**: Bildirim süresi **8 haftadır** (56 takvim günü).

Süre Nasıl İşlemeye Başlar ve Nasıl Sayılır?
- **Tebliğ Günü Sayılmaz**: Bildirim süresi, fesih yazısının karşı tarafa tebliğ edildiği günün ertesi takvim gününden itibaren işlemeye başlar. Örneğin 1 Ekim Salı günü fesih yazısını tebliğ eden bir işçi için süre 2 Ekim Çarşamba sabahı başlar.
- **Takvim Günü Esastır**: İhbar süreleri "iş günü" değil, kesintisiz "takvim günü" olarak hesaplanır. Süre içerisindeki cumartesi, pazar günleri, resmi tatiller ve bayram tatilleri bildirim süresinin hesabına aynen dahil edilir.
- **Son Gün Mesai Bitimi**: Sürenin son gününün mesai saati bitimiyle birlikte iş sözleşmesi hukuken resmen sona erer.`,
    },
    {
      id: 'yeni-is-arama-izni-ve-kullanim-kurallari',
      title: 'Yeni İş Arama İzni: Günde 2 Saat ve Toplu Kullanım Esasları',
      level: 2,
      content: `İş Kanunu'nun 27. maddesi, bildirim süresi çalıştırılan işçiye çalışma saatleri içinde ve hiçbir ücret kesintisi yapılmaksızın günde en az **2 saat yeni iş arama izni** verilmesini zorunlu kılmıştır.

İş Arama İzninin Yasal Kuralları:
- **Ücret Kesintisi Kesinlikle Yapılamaz**: İşçi yeni iş arama iznini kullandığı saatlerde maaşından veya yan haklarından herhangi bir kesinti yapılamaz.
- **Toplu Kullanım Hakkı**: İşçi isterse iş arama izinlerini günlük 2'şer saat kullanmak yerine, işten ayrılacağı günden önceki günlere denk getirecek şekilde toplu olarak kullanabilir. Bunun için işverene önceden yazılı bildirimde bulunması yeterlidir. Örneğin 4 haftalık (28 takvim günü, 24 iş günü) ihbar süresinde günde 2 saatten toplam 48 saat iş arama izni doğar. Günlük 7,5 saatlik çalışma üzerinden hesaplandığında yaklaşık 6,5 işgünü toplu izin hakkı oluşur ve işçi son günlerde işe gelmeyebilir.
- **İşverenin İzni Vermemesinin Yaptırımı**: İşveren işçiye iş arama iznini vermez veya eksik kullandırırsa, o sürelere ait ücreti işçiye **%100 zamlı (iki katı)** olarak ödemekle yükümlüdür. İş arama izni saatlerinde işçi fiilen çalıştırılırsa, çalıştığı sürenin normal ücretine ek olarak %100 zamlı ilave ücret ödenir.`,
    },
    {
      id: 'ihbar-oneline-uyulmamasinin-sonuclari-ve-tazminat',
      title: 'İhbar Öneline Uyulmamasının Sonuçları: İhbar Tazminatı ve Kesintiler',
      level: 2,
      content: `İhbar süresine uymak istemeyen taraf, kanunun tanıdığı alternatif yolu seçerek bildirim süresine ait ücreti peşin ödeyip sözleşmeyi derhal feshedebilir. Buna "ihbar tazminatlı fesih" denir.

İhbar Tazminatının Özellikleri ve Vergilendirilmesi:
- **Çift Taraflı Tazminat**: Bildirim süresine uymadan işçiyi çıkaran işveren işçiye; aynı şekilde bildirim süresine uymadan aniden işi bırakan işçi işverene ihbar tazminatı ödemek zorundadır.
- **Giydirilmiş Ücret Üzerinden Hesaplanır**: İhbar tazminatı hesabında sadece çıplak maaş değil; yol, yemek, servis, düzenli prim ve ikramiyeler gibi tüm giydirilmiş menfaatler hesaba katılır.
- **Tavan Sınırı Yoktur**: Kıdem tazminatında uygulanan 2026 yılı 59.250 TL tavan sınırı ihbar tazminatında geçerli değildir. Maaş ne kadar yüksekse tazminat da o tutar üzerinden ödenir.
- **Vergi Kesintileri**: İhbar tazminatından Gelir Vergisi (%15 - %40 kümülatif dilim) ve Damga Vergisi (binde 7,59) kesilir. SGK primi kesilmez.`,
    },
    {
      id: 'ihbar-surecinde-sik-yapilan-hatalar-ve-yargitay-ilkeleri',
      title: 'İhbar Sürecinde En Sık Yapılan Hatalar ve Yargıtay İlkeleri',
      level: 2,
      content: `İhbar sürelerinin uygulanmasında hem işverenler hem de çalışanlar tarafından sıklıkla yapılan ve davalara konu olan kritik hatalar şunlardır:

1. **İhbar Süresi ile Yıllık İznin İç İçe Geçmesi Yasağı**:
Yargıtay 9. Hukuk Dairesi'nin yerleşik içtihatlarına göre, **ihbar süresi ile yıllık ücretli izin süreleri iç içe geçemez**. İşveren, "Sana 4 hafta ihbar süresi veriyorum, içeride kalan 2 haftalık yıllık iznini de bu sürede kullan" diyemez. Önce yıllık izin kullandırılmalı, izin bittikten sonra ihbar süresi başlatılmalıdır. Aksi halde ihbar tazminatı usulsüz sayılır.
2. **İhbar Süresinin Bölünemezliği İlkesi**:
İhbar süresi bir bütündür ve bölünemez. Örneğin 8 haftalık ihbar süresi olan bir personele işveren "4 hafta çalış, kalan 4 haftanın parasını ödeyeyim" diyemez. Böyle bir uygulamada fesih usulsüz hale gelir ve işveren 8 haftanın tamamının ihbar tazminatını ödemek zorunda kalır.
3. **İhbar Süresinde Alınan Raporun Etkisi**:
İşçi ihbar süresi içerisindeyken istirahat raporu alırsa, raporlu olunan günler kadar ihbar süresi ileriye doğru uzar. Bildirim süresi rapor bitiminde kaldığı yerden işlemeye devam eder.
4. **Zamanaşımı Süresi**:
İhbar tazminatı alacaklarında zamanaşımı süresi iş akdinin feshedildiği tarihten itibaren **5 yıldır**.`,
    },
    {
      id: 'ihbar-ve-yillik-izin-ic-ice-gecme-yasagi',
      title: 'İhbar Süresi ile Yıllık İznin İç İçe Geçme Yasağı ve Raporlu Günler',
      level: 2,
      content: `İş hukukunun en temel koruyucu ilkelerinden biri, işçinin dinlenme hakkı olan yıllık ücretli izin ile iş arama amacı taşıyan ihbar önelinin aynı anda kullanılamayacağı kuralıdır:

- **İç İçe Geçme Yasağı**: Yargıtay'ın yerleşik kararları uyarınca yıllık izin süresi ile ihbar öneli süresi asla çakıştırılamaz. İşveren işçiye hem ihbar süresi kullandırıp hem de "kalan 2 haftalık yıllık iznini de bu sürede kullan" diyemez. Öncelikli olarak yıllık ücretli izin kullandırılmalı, iznin bitimini takip eden günden itibaren ihbar süresi başlatılmalıdır. Çakışma durumunda kullandırılan süre ihbar süresinden sayılmaz ve işveren işçiye ihbar tazminatı ödemek zorunda kalır.
- **İhbar Süresinde İstirahat Raporu Alınması**: İhbar öneli çalışırken işçinin hekimden istirahat raporu alması durumunda, raporlu geçirilen günler ihbar süresini durdurur. Rapor süresi kadar ihbar öneli ileriye ötelenir ve iş akdi raporun bittiği günün ardından kalan günlerin tamamlanmasıyla sona erer.`,
    },
    {
      id: 'ihbar-surelerinin-sozlesmeyle-artirilmasi-ve-kotuniyet',
      title: 'İhbar Sürelerinin Sözleşmeyle Artırılması ve Kötüniyet Tazminatı',
      level: 2,
      content: `4857 sayılı İş Kanunu'nun 17. maddesinde belirtilen 2, 4, 6 ve 8 haftalık bildirim süreleri kanuni asgari (taban) sürelerdir:

1. **Sözleşmeyle Artırma**: Bireysel iş sözleşmesi veya toplu iş sözleşmesi (TİS) ile ihbar süreleri işçi lehine olmak üzere serbestçe artırılabilir (örneğin 3 yıl üstü için 12 haftaya çıkarılabilir). Ancak sözleşmeyle kanuni sürenin altına inilmesi kesin olarak geçersizdir. İhbar süreleri sözleşmeyle artırılmışsa, fesih anında ödenecek ihbar tazminatı da bu artırılmış haftalar üzerinden hesaplanmak zorundadır.
2. **Kötüniyet Tazminatı (İhbarın 3 Katı)**: İş güvencesi kapsamında olmayan (30'dan az işçi çalıştıran) işyerlerinde işveren iş sözleşmesini kötü niyetle feshederse (örneğin işçinin sendikaya üye olması, işvereni teftişe şikayet etmesi veya hakkını araması nedeniyle), işçiye bildirim süresine ait ihbar tazminatının **üç katı** tutarında kötüniyet tazminatı ödenir. Kötüniyet tazminatı ihbar tazminatına ek olarak ayrıca tahsil edilir.`,
    },
    {
      id: 'ihbar-sureclerinde-arabuluculuk-ve-faiz-kurallari',
      title: 'İhbar Tazminatında Temerrüt, Faiz Türü ve Zorunlu Arabuluculuk Usulü',
      level: 2,
      content: `İhbar tazminatı alacaklarının hukuki takibinde dikkat edilmesi gereken önemli usuli detaylar şunlardır:

- **Uygulanacak Yasal Faiz Türü**: Kıdem tazminatında kanun gereği mevduata uygulanan en yüksek banka faizi talep edilebilirken, ihbar tazminatı alacaklarında Yargıtay uygulamasına göre **yasal temerrüt faizi (kanuni faiz)** uygulanır. Faizin işlemeye başlayabilmesi için işverenin noter kanalıyla veya yazılı ihtarla temerrüde düşürülmesi ya da arabuluculuk/dava başvuru tarihinin esas alınması gerekir.
- **7036 Sayılı Kanun Uyarınca Arabuluculuk**: İhbar tazminatı talebiyle doğrudan iş mahkemesinde dava açılamaz. Öncelikle adliyelerdeki Arabuluculuk Bürosu'na başvurulması dava şartıdır. Taraflar arabulucu huzurunda ihbar tazminatının tutarı ve ödeme vadesi üzerinde serbestçe anlaşabilir; arabuluculuk tutanağı ilam (mahkeme kararı) niteliğinde belge sayılır. Anlaşma sağlanamaması halinde ise son tutanak ile 2 hafta içinde İş Mahkemesi'nde dava açılmalıdır.
- **Hukuki Süreçte Dikkat Edilecek Belgeler**: Arabuluculuk ve dava sürecinde çalışanın imzaladığı bordrolar, banka hesap dökümleri, fesih bildirim belgesi ve tebliğ-tebellüğ tutanakları davanın sonucunu doğrudan belirler. İşçi imzalamak istemediği fesih belgelerine çekince (ihtirazi kayıt) koyarak imzalamalıdır.`,
    },
  ],
  faqs: [
    {
      q: 'İhbar süresi hesaplanırken iş günleri mi takvim günleri mi sayılır?',
      a: 'İhbar süreleri takvim günü olarak hesaplanır. Süre içerisindeki hafta tatilleri, pazar günleri ve resmi tatiller ihbar süresine dahildir.',
    },
    {
      q: 'İhbar süresi tebliğ edildiği gün mü başlar?',
      a: 'Hayır. İhbar süresi fesih bildiriminin karşı tarafa yazılı olarak tebliğ edildiği günü takip eden takvim gününden itibaren başlar.',
    },
    {
      q: 'İstifa eden işçi de ihbar süresine uymak zorunda mıdır?',
      a: 'Evet. Belirsiz süreli iş sözleşmesini haklı bir neden olmaksızın kendi isteğiyle fesheden işçi de kıdemine göre 2 ile 8 hafta arasında ihbar süresine uymak zorundadır.',
    },
    {
      q: 'Yeni iş arama izni günde kaç saattir?',
      a: 'İş Kanunu m.27 gereğince yeni iş arama izni günde en az 2 saattir ve bu izin için işçinin ücretinden hiçbir kesinti yapılamaz.',
    },
    {
      q: 'İş arama izinleri toplu olarak kullanılabilir mi?',
      a: 'Evet. İşçi isterse günlük 2 saatlik izinlerini birleştirerek işten ayrılacağı günden önceki günlere denk gelecek şekilde toplu olarak kullanabilir.',
    },
    {
      q: 'İhbar süresinde iş arama izni kullandırılmazsa cezası nedir?',
      a: 'İşveren iş arama iznini vermez veya işçiyi çalıştırırsa, kullandırılmayan sürenin ücretini işçiye %100 zamlı (iki katı) olarak ödemekle yükümlüdür.',
    },
    {
      q: 'Yıllık izin ile ihbar süresi aynı anda kullanılabilir mi?',
      a: 'Hayır. Yargıtay kararlarına göre ihbar süresi ile yıllık izin süreleri iç içe geçemez. Önce yıllık izin kullandırılmalı, ardından ihbar süresi başlatılmalıdır.',
    },
    {
      q: 'İhbar tazminatında yasal tavan var mıdır?',
      a: 'Hayır. Kıdem tazminatında uygulanan tavan sınırı ihbar tazminatında yoktur; tazminat giydirilmiş brüt ücretin tamamı üzerinden ödenir.',
    },
  ],
  sources: [
    {
      label: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi (4857 Sayılı İş Kanunu m.17 ve m.27)',
      url: 'https://www.mevzuat.gov.tr',
    },
    {
      label: 'Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) Fesih ve Bildirim Esasları',
      url: 'https://www.csgb.gov.tr',
    },
    {
      label: 'Yargıtay 9. Hukuk Dairesi Emsal İhbar Tazminatı Kararları',
      url: 'https://www.yargitay.gov.tr',
    },
  ],
  cta: {
    title: 'İhbar Tazminatınızı Şimdi Hesaplayın',
    description: 'Hizmet sürenize göre bildirim haftanızı öğrenin ve vergi dilimlerinize göre net ihbar tazminatınızı anında hesaplayın.',
    buttonText: 'İhbar Tazminatı Hesapla',
    buttonHref: '/tr/ihbar-tazminati-hesaplama/',
    badge: '4857 SK Uyumlu',
  },
  relatedTools: [
    {
      title: 'İhbar Tazminatı Hesaplama',
      slug: 'tr/ihbar-tazminati-hesaplama',
      description: 'Çalışma sürenize göre bildirim süresi ve net ihbar tazminatı hesaplama aracı.',
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
      description: 'Hangi hallerde tazminat alınır? İşçi hakları ve yasal fesih koşulları.',
      category: 'İş Hukuku Rehberleri',
    },
    {
      title: 'İstifa Eden Kıdem Tazminatı Alabilir mi?',
      slug: 'tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi',
      description: 'Haklı fesih, 15 yıl 3600 gün ve istifa sonrası tazminat hakları rehberi.',
      category: 'İş Hukuku Rehberleri',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu rehberdeki bilgiler 4857 sayılı İş Kanunu ve yargı kararlarına dayanmaktadır. Somut hukuki uyuşmazlıklarda uzman bir avukata danışınız.',
};
