import { PageContent } from '../types';

export const ibanCheckerTr: PageContent = {
  metaTitle: 'IBAN Doğrulama 2026 | Online IBAN ve Banka Kontrolü',
  metaDescription:
    'IBAN doğrulaması yapın. ISO 13616 Mod-97 algoritması, banka kodu, şube ve hesap kontrolü ile Türkiye ve uluslararası IBAN numaralarını ücretsiz test edin.',
  h1: 'IBAN Doğrulama ve Banka Sorgulama 2026',
  quickAnswer:
    'IBAN (Uluslararası Banka Hesap Numarası) doğrulaması üç aşamada gerçekleştirilir: ülkeye özgü karakter uzunluğunun kontrolü, ilk 4 karakterin dizinin sonuna taşınması, harflerin sayısal değerlere dönüştürülmesi (A=10 ila Z=35) ve ISO 13616 standardına göre modulo-97 kalanının hesaplanması. Geçerli bir IBAN numarasında 97’ye bölümünden kalan kesinlikle 1 olmalıdır.',
  howItWorks: [
    {
      label: 'Format ve Karakter Uzunluğu Kontrolü',
      formula: 'Uzunluk(IBAN) == 26 (TR için) && Regex(Alfanumerik)',
      ruleCitation: 'TCMB IBAN Tebliği / ISO 13616-1 Uluslararası Standardı',
      effectiveDate: 'Türkiye genelinde 1 Ocak 2010 tarihinden itibaren zorunlu',
    },
    {
      label: 'Karakterlerin Sona Taşınması (Permütasyon)',
      formula: 'Dönüştürülmüş = BBAN + "TR" + 2_Hane_KontrolKodu',
      ruleCitation: 'ISO 13616 Madde 5.2 Standart Algoritması',
      effectiveDate: 'Tüm uluslararası bankacılık sistemlerinde geçerli kural',
    },
    {
      label: 'ISO 7064 Mod-97-10 Kalan Hesabı',
      formula: 'SayısalDizi mod 97 == 1 (T=29, R=27)',
      ruleCitation: 'ISO/IEC 7064:2003 Kontrol Karakter Sistemleri Standardı',
      effectiveDate: 'Hatalı para transferlerini engelleyen kalıcı matematiksel algoritma',
    },
    {
      label: 'TCMB Banka ve Şube Kodu Eşleştirmesi',
      formula: 'BankaKodu(5 Hane) TCMB Kayıtları ile Doğrulanır',
      ruleCitation: 'Türkiye Cumhuriyet Merkez Bankası Banka Kod Listesi',
      effectiveDate: 'Merkez Bankası EFT/FAST sisteminde tanımlı güncel bankalar',
    },
  ],
  articleSections: [
    {
      id: 'iban-nedir-ve-nasil-kullanilir',
      title: 'IBAN Nedir ve Türkiye Bankacılık Sistemindeki Yeri',
      level: 2,
      content:
        'Uluslararası Banka Hesap Numarası (IBAN – International Bank Account Number), banka hesaplarının hatasız ve hızlı bir şekilde tanımlanmasını sağlamak amacıyla Avrupa Bankacılık Standartları Komitesi (ECBS) ve Uluslararası Standardizasyon Örgütü (ISO 13616) tarafından geliştirilmiş uluslararası bir hesap numarası standardıdır.\n\nTürkiye’de IBAN kullanımı, Türkiye Cumhuriyet Merkez Bankası (TCMB) tarafından yayımlanan tebliğler doğrultusunda 1 Ocak 2010 tarihinden itibaren tüm yurt içi ve yurt dışı para transferlerinde zorunlu hale getirilmiştir. IBAN kullanılmaya başlanmadan önce para transferlerinde banka adı, şube kodu ve müşteri hesap numarasının ayrı ayrı girilmesi gerekiyordu. Bu durum klavye ve aktarım hatalarına, paranın yanlış hesaba gitmesine ve iade süreçlerinde yüksek masraflara yol açmaktaydı. IBAN sistemi ile her hesap için benzersiz bir kod üretilmiş ve giriş anında matematiksel kontrol basamakları ile hatalar sıfıra indirilmiştir. Günümüzde kurumsal maaş ödemelerinden e-ticaret tahsilatlarına, bireysel harçlıklardan konut kirası ödemelerine kadar tüm finansal akış TR IBAN altyapısı üzerinden güvenle gerçekleştirilmektedir.',
    },
    {
      id: 'mod-97-algoritmasi-nasil-calisir',
      title: 'ISO 7064 Mod-97 Algoritması Nasıl Çalışır? (Adım Adım Hesaplama)',
      level: 2,
      content:
        'IBAN doğrulamada kullanılan temel matematiksel mekanizma ISO 7064 Modulo 97-10 algoritmasıdır. Bu yöntem, rakamların yanlış girilmesi veya yan yana basılması (örneğin 12 yerine 21 yazılması) gibi kullanıcı kaynaklı tipik yazım hatalarını %99,99’un üzerinde bir doğruluk payıyla yakalar:\n\n1. **Karakter Sayısı Kontrolü**: İlk olarak IBAN uzunluğunun ilgili ülke normuna uygunluğu denetlenir. Türkiye için IBAN tam olarak 26 karakterden oluşur. 25 veya 27 karakter girildiğinde sistem anında geçersiz uyarısı verir ve transferi engeller.\n\n2. **İlk Dört Karakteri Sona Alma**: Ülke kodu (TR) ve 2 haneli kontrol basamağı kopyalanıp numaranın sonuna eklenir. Örneğin `TR33 0001 0000 0000 0000 1234 56` numarası `0001000000000000123456TR33` haline getirilir.\n\n3. **Harfleri Sayılara Dönüştürme**: Dizide bulunan harfler ASCII alfabesindeki karşılıklarına göre (A=10, B=11 ... Z=35) sayılara çevrilir. Türk lirasını temsil eden `T` harfi `29`, `R` harfi ise `27` değerini alır. Bu işlem sonucunda `TR` ifadesi `2927` sayısına dönüşerek 28 haneli devasa bir tamsayı oluşturur.\n\n4. **Modulo 97 Bölümü**: Elde edilen dev tamsayı 97’ye bölünür. Büyük sayılar yazılımda bloklar halinde işlenir. Eğer bölme işleminden kalan sayı tam olarak 1 ise, IBAN numarası hatasızdır ve doğrulanmış kabul edilir.\n\n5. **Matematiksel Sağlama Kuralı**: Orijinal IBAN üzerinde sonradan hesaplanan kontrol basamağı formülü `98 - (Dizi mod 97)` esasına dayanır. Bu çift yönlü kontrol sayesinde tek bir rakamın dahi yanlış yazılması transferin anında durdurulmasını sağlar.',
    },
    {
      id: 'turkiyedeki-iban-yapisi',
      title: 'Türkiye’deki IBAN Numarasının Anatomisi (26 Karakterin Açılımı)',
      level: 2,
      content:
        'Türkiye’de kullanılan bir IBAN numarası 26 haneli olup katı bir kural dizilimine sahiptir:\n\n- **1–2. Karakterler (Ülke Kodu)**: Türkiye Cumhuriyeti için ISO 3166 standardında belirlenen `TR` harfleridir.\n- **3–4. Karakterler (Kontrol Basamakları)**: Mod-97 algoritması ile türetilen 2 haneli doğrulama sayısıdır.\n- **5–9. Karakterler (Banka Kodu - 5 Hane)**: Hesabın ait olduğu bankayı gösteren resmi TCMB kodudur. Örneğin kamu ve özel mevduat bankaları için Ziraat Bankası `00010`, Türkiye İş Bankası `00064`, Garanti BBVA `00062`, Akbank `00046`, Yapı Kredi `00067`, QNB Türkiye `00111`, DenizBank `00134`, TEB `00032`, Halkbank `00012`, VakıfBank `00015` kodlarını kullanır. Katılım bankaları (Kuveyt Türk `00205`, Albaraka Türk `00203`, Türkiye Finans `00206`, Vakıf Katılım `00210`, Ziraat Katılım `00209`) ile yeni nesil dijital bankalar da bu 5 haneli resmi TCMB kurumsal kodlamasına tabidir.\n- **10. Karakter (Rezerv Alanı)**: Standart gereği `0` (sıfır) olarak belirlenmiş tek haneli rezerv alandır.\n- **11–26. Karakterler (Hesap Numarası - 16 Hane)**: İlgili bankanın şube kodunu ve müşteri hesap numarasını içeren 16 haneli kısımdır. Hesap numarası 16 haneden kısa ise sol tarafı sıfırlarla tamamlanır.',
    },
    {
      id: 'fast-eft-ve-havale-farklari',
      title: 'IBAN ile Para Transferi: FAST, EFT, Havale, QR Kod ve Yurt Dışı SWIFT',
      level: 2,
      content:
        'Türkiye bankacılık altyapısında IBAN ile gerçekleştirilen işlemler ulusal ve uluslararası kanallardan yürütülür:\n\n- **Havale**: Aynı bankanın farklı hesapları veya şubeleri arasında yapılan para transferidir. 7/24 anında gerçekleşir ve banka kodu değişmez.\n- **EFT (Elektronik Fon Transferi)**: Farklı bankalar arasındaki para aktarımıdır. TCMB EFT takas sistemi üzerinden mesai saatleri içerisinde (hafta içi 08:30 - 17:30) gerçekleştirilir.\n- **FAST (Fonların Anlık ve Sürekli Transferi)**: TCMB ve Bankalararası Kart Merkezi (BKM) tarafından devreye alınan 7/24 anlık para transferi sistemidir. Belirlenen FAST işlem limiti dahilinde farklı bankalardaki IBAN’lara saniyeler içerisinde para gönderilebilir. Kolay Adresleme Sistemi (KOLAS) sayesinde cep telefonu veya TC kimlik numarası da IBAN yerine eşleştirilebilmektedir.\n- **Yurt Dışı SWIFT Transferleri**: Türkiye\'den yurt dışına veya yurt dışından Türkiye\'deki bir TR IBAN\'a döviz (USD, EUR, GBP) gönderilirken IBAN\'ın yanı sıra bankanın 8 veya 11 haneli SWIFT/BIC kodu gereklidir. Bu transferler muhabir banka ağları üzerinden işlenir.\n- **Karekod (QR Kod) ile Ödeme**: BKM standartlarındaki TR Karekod entegrasyonu sayesinde fiziki mağazalarda ve e-ticaret ödemelerinde IBAN bilgisi dinamik karekoda gömülerek mobil bankacılık uygulamalarından saniyeler içinde hatasız onaylanabilir.\n- **Mobil Bildirimler ve Anlık Takip**: İşlem gerçekleştikten hemen sonra gönderici ve alıcı tarafa iletilen SMS ve anlık uygulama bildirimleri ile transfer süreci şeffaf biçimde izlenir.',
    },
    {
      id: 'guvenlik-ve-onemli-ipuclari',
      title: 'IBAN Güvenliği, MASAK Mevzuatı ve Para Gönderirken Dikkat Edilmesi Gerekenler',
      level: 2,
      content:
        'Online bankacılık veya mobil uygulama üzerinden para transferi yaparken mağduriyet yaşamamak için şu noktalara özen gösterilmelidir:\n\n- **Matematiksel Geçerlilik vs. Hesap Durumu**: Bu sorgulama aracı, IBAN numarasının algoritma olarak hatasız olduğunu ve banka kodunu doğrular. Ancak hesabın açık mı yoksa kapalı mı olduğunu veya hesap sahibinin adını doğrulayamaz. Para göndermeden önce banka ekranında çıkan alıcı adı ile faturadaki adın uyuştuğunu mutlaka teyit edin.\n- **Pano Kopyalama Virüsleri**: Bazı zararlı yazılımlar kopyaladığınız IBAN numarasını panoda fark ettirmeden dolandırıcının IBAN’ı ile değiştirir. Kopyala-yapıştır yaptıktan sonra IBAN’ın ilk 4 ve son 4 hanesini orijinal kaynakla karşılaştırın.\n- **Açıklama Kısmına Dikkat ve MASAK Denetimi**: Kira, araç alımı, konut kapora ödemesi veya ticari mal alımlarında EFT/FAST açıklamasına mutlaka ilgili sözleşme, fatura numarası veya işlem türünü açıkça yazın. Mali Suçları Araştırma Kurulu (MASAK) mevzuatı gereğince açıklaması belirsiz yüksek tutarlı transferler bankaların uyum birimleri tarafından incelemeye alınabilir.\n- **Hatalı Gönderilen Transferlerin İadesi**: Paranın yanlış hesaba gönderilmesi durumunda bankanız üzerinden derhal EFT/FAST iade talebi (iptal/iade mesajı) başlatılmalıdır. Karşı tarafın onayı olmadan tutar re\'sen geri çekilemez; bu sebeple işlem öncesi IBAN teyidi kritik öneme sahiptir.\n- **Güvenli Kayıt ve Rehber**: Sık transfer yaptığınız IBAN bilgilerini mobil bankacılığınızdaki kayıtlı alıcılar listesine ekleyerek her defasında yeniden manuel numara girme riskinden kurtulabilirsiniz.',
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Ziraat Bankası IBAN Doğrulama',
      scenario:
        'Bir tedarikçiye ödeme yapmak isteyen kullanıcı TR33 0001 0000 0000 0000 1234 56 numaralı IBAN’ın doğruluğunu teyit etmek istiyor.',
      calculationType: 'custom',
      customFields: [
        { label: 'Girilen IBAN', value: 'TR33 0001 0000 0000 0000 1234 56' },
        { label: 'Ülke ve Uzunluk', value: 'Türkiye (TR) — 26 Karakter' },
        { label: 'Banka Kodu', value: '00010 (T.C. Ziraat Bankası A.Ş.)' },
        { label: 'Hesap Numarası', value: '00000000123456' },
        { label: 'Kaydırılmış Dizi', value: '0001000000000000123456TR33' },
        { label: 'Sayısal Dönüşüm (T=29, R=27)', value: '0001000000000000123456292733' },
        { label: 'Mod-97 Bölüm Kalanı', value: '1 (Geçerli ve Doğrulanmış)', highlight: true },
        { label: 'Ödeme Kanalı', value: 'EFT, Havale ve FAST Uyumlu' },
      ],
      explanation:
        'TR33 sona taşınmış, T ve R harfleri 29 ve 27 sayılarına çevrilmiştir. 97’ye bölümünden kalan tam olarak 1 çıktığı için IBAN hatasızdır ve Ziraat Bankası sisteminde tanımlıdır.',
    },
    {
      title: 'Örnek 2: Türkiye İş Bankası IBAN Doğrulama',
      scenario:
        'TR64 0006 4000 0012 3456 7890 12 numaralı İş Bankası hesabının geçerliliği sorgulanmaktadır.',
      calculationType: 'custom',
      customFields: [
        { label: 'Girilen IBAN', value: 'TR64 0006 4000 0012 3456 7890 12' },
        { label: 'Ülke ve Uzunluk', value: 'Türkiye (TR) — 26 Karakter' },
        { label: 'Banka Kodu', value: '00064 (Türkiye İş Bankası A.Ş.)' },
        { label: 'Kontrol Hanesi', value: '64' },
        { label: 'Hesap Numarası', value: '0000123456789012' },
        { label: 'Mod-97 Sonucu', value: '1 (Doğrulandı)', highlight: true },
        { label: 'SWIFT / BIC', value: 'ISBKTRIS' },
      ],
      explanation:
        'Doğrulayıcı 26 karakter uzunluğunu onaylar, 00064 kodunun Türkiye İş Bankası olduğunu tespit eder ve 64 kontrol basamağının matematiksel sağlamasını onaylar.',
    },
  ],
  faqs: [
    {
      q: 'IBAN nedir ve ne işe yarar?',
      a: 'IBAN (International Bank Account Number), banka hesap numaralarını standart hale getiren ve para transferlerinde oluşabilecek hata ve gecikmeleri önleyen uluslararası hesap tanımlama kodudur.',
    },
    {
      q: 'Türkiye’de IBAN kaç hanelidir?',
      a: 'Türkiye’deki IBAN numaraları istisnasız tam olarak 26 karakterden oluşur. Başında "TR" ülke kodu bulunur ve bunu 24 rakam takip eder.',
    },
    {
      q: 'Bu sitede IBAN sorgulamak güvenli midir?',
      a: 'Evet, tamamen güvenlidir. IBAN doğrulama işlemi sunucuya veri göndermeksizin yalnızca web tarayıcınızda JavaScript ile çalışır. Hesap numaranız hiçbir yerde saklanmaz veya kaydedilmez.',
    },
    {
      q: 'IBAN numarasından banka adı nasıl anlaşılır?',
      a: 'Türkiye IBAN’ında 5. karakterden başlayan 5 haneli kod bankayı belirtir. Örneğin 00010 Ziraat Bankası, 00064 İş Bankası, 00062 Garanti BBVA, 00046 Akbank, 00067 Yapı Kredi’dir.',
    },
    {
      q: 'Doğrulanan bir IBAN hesabın açık olduğunu garanti eder mi?',
      a: 'Hayır. Mod-97 matematiksel algoritması IBAN’ın biçimsel ve algoritmik olarak doğru olduğunu gösterir. Ancak hesabın aktif olup olmadığını veya kime ait olduğunu yalnızca ilgili banka doğrulayabilir.',
    },
    {
      q: 'FAST ile para gönderirken IBAN zorunlu mu?',
      a: 'FAST sisteminde IBAN ile gönderim yapabileceğiniz gibi, alıcının Kolay Adres (KOLAS) sistemine tanımladığı telefon numarası, e-posta veya T.C. kimlik numarası ile de gönderim yapabilirsiniz.',
    },
    {
      q: 'IBAN ile hesap numarası arasındaki fark nedir?',
      a: 'Hesap numarası yalnızca ilgili bankanın müşterisini tanımlar. IBAN ise ülke kodu, kontrol haneleri, banka kodu ve hesap numarasını içeren uluslararası tam entegre koddur.',
    },
    {
      q: 'Yurt dışından Türkiye’ye para transferi için IBAN yeterli mi?',
      a: 'Yurt dışından Türkiye’deki bir hesaba para gönderilirken alıcının IBAN numarasına ek olarak bankanın uluslararası SWIFT/BIC kodunun da girilmesi gerekir.',
    },
    {
      q: 'Aynı anda birden fazla IBAN sorgulayabilir miyim?',
      a: 'Evet. Aracımız tek seferde 50 adede kadar toplu IBAN doğrulamasını desteklemektedir. Her satıra bir IBAN gelecek şekilde yapıştırarak anında sonuç alabilirsiniz.',
    },
  ],
  sources: [
    {
      label: 'TCMB: Uluslararası Banka Hesap Numarası (IBAN) Tebliği',
      url: 'https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+menu/mevzuat/odeme+sistemleri/iban+tebligi',
    },
    {
      label: 'TCMB: Fonların Anlık ve Sürekli Transferi (FAST) Sistemi',
      url: 'https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+menu/temel+faaliyetler/odeme+sistemleri/fast',
    },
    {
      label: 'Bankacılık Düzenleme ve Denetleme Kurumu (BDDK)',
      url: 'https://www.bddk.org.tr',
    },
    {
      label: 'SWIFT Resmi Uluslararası IBAN Sicili',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
  ],
  relatedTools: [
    {
      title: 'KDV Hesaplama 2026',
      slug: 'tr/kdv-hesaplama',
      description: '%20, %10 ve %1 oranlarında KDV dahil ve KDV hariç hesaplama ve tevkifat robotu.',
      category: 'Vergi & KDV',
    },
    {
      title: 'BIC / SWIFT Kodu Doğrulama',
      slug: 'bic-swift-checker',
      description: '8 ve 11 haneli uluslararası banka BIC/SWIFT kodlarını anında kontrol edin.',
      category: 'Bankacılık',
    },
    {
      title: 'AB KDV Oranları ve Karşılaştırma',
      slug: 'vat-calculator',
      description: 'Avrupa Birliği ülkelerindeki standart ve indirimli KDV oranlarını inceleyin.',
      category: 'Vergi & KDV',
    },
  ],
  relatedGuides: [
    {
      title: 'IBAN Nedir? Uluslararası Banka Hesap Numaraları Rehberi',
      slug: 'guides/what-is-an-iban',
      description: 'IBAN yapısı, tarihçesi ve küresel bankacılıktaki kuralları hakkında kapsamlı rehber.',
      category: 'Bankacılık',
    },
    {
      title: 'IBAN ve SWIFT / BIC Farkı: Hangisi Ne Zaman Kullanılır?',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Yurt dışı para transferlerinde hesap numarası ve banka kodu ayrımı.',
      category: 'Bankacılık',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu IBAN kontrol ve doğrulama aracı yalnızca genel bilgilendirme ve ön biçimsel kontrol amacıyla sunulmaktadır. Algoritmik doğrulama işlemi ISO 13616 ve TCMB standartlarına göre gerçekleştirilmekle birlikte, hesabın aktifliği veya hesap sahibinin kimlik doğrulaması garanti edilemez. Yüksek tutarlı para transferlerinden önce alıcı banka teyidi almanız önemle tavsiye olunur.',
};
