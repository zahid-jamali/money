import { PageContent } from '../types';

export const kdvHesaplamaTr: PageContent = {
  metaTitle: 'KDV Hesaplama 2026 | KDV Dahil & Hariç Hesapla (%20, %10, %1)',
  metaDescription:
    'Anında KDV dahil ve KDV hariç hesaplama aracı. %20 genel, %10 indirimli ve %1 süper indirimli oranlar, KDV tevkifatı (9/10, 5/10) ve 2 No’lu KDV rehberi.',
  h1: 'KDV Hesaplama 2026 (KDV Dahil ve Hariç Hesaplama)',
  quickAnswer:
    'KDV hariç bir tutara %20 KDV eklemek için tutarı 1,20 ile çarpın (yalnızca KDV tutarı için 0,20 ile çarpın). KDV dahil bir tutardan KDV’yi ayırmak için toplam tutarı 1,20’ye bölün; aradaki fark net KDV tutarını verir. Tevkifatlı işlemlerde ise hesaplanan KDV belirlenen oran (örneğin 9/10 veya 5/10) doğrultusunda alıcı ve satıcı arasında paylaştırılır.',
  howItWorks: [
    {
      label: 'KDV Ekleme (KDV Hariç → KDV Dahil, %20 Genel Oran)',
      formula: 'KDV Dahil = KDV Hariç × 1,20 | Hesaplanan KDV = KDV Hariç × 0,20',
      ruleCitation: '3065 sayılı Katma Değer Vergisi Kanunu Madde 28 ve 7346 sayılı CBK',
      effectiveDate: '10 Temmuz 2023 tarihinden itibaren yürürlükte olan genel oran',
    },
    {
      label: 'KDV Ayırma (KDV Dahil → KDV Hariç, %20 Genel Oran)',
      formula: 'KDV Hariç = KDV Dahil ÷ 1,20 | Net KDV = KDV Dahil - KDV Hariç',
      ruleCitation: 'KDV Genel Uygulama Tebliği',
      effectiveDate: 'KDV hariç matrahı ayrıştırma katsayısı (1 / 1,20)',
    },
    {
      label: 'İndirimli Oran (%10) KDV Ekleme',
      formula: 'KDV Dahil = KDV Hariç × 1,10 | Hesaplanan KDV = KDV Hariç × 0,10',
      ruleCitation: '3065 sayılı KDV Kanununa ekli (II) sayılı liste',
      effectiveDate: 'Gıda ürünleri, konaklama, tekstil ve eğitim hizmetleri',
    },
    {
      label: 'Kısmi KDV Tevkifatı Hesaplama (Örn. 9/10 Oranı)',
      formula: 'Tevkif Edilen KDV = Hesaplanan KDV × (9 / 10) | Beyan Edilecek KDV = Hesaplanan KDV × (1 / 10)',
      ruleCitation: 'KDV Genel Uygulama Tebliği (I/C-2.1.3)',
      effectiveDate: 'Temizlik, çevre ve bahçe bakım, güvenlik hizmetleri',
    },
  ],
  articleSections: [
    {
      id: 'kdv-sistemi-nasil-calisir',
      title: 'Türkiye’de Katma Değer Vergisi (KDV) Sistemi ve İşleyişi',
      level: 2,
      content:
        'Katma Değer Vergisi (KDV), Türkiye’de mal ve hizmet teslimlerinde yaratılan katma değer üzerinden alınan dolaylı bir tüketim vergisidir. 3065 sayılı Katma Değer Vergisi Kanunu ile düzenlenen bu sistemde, verginin nihai yüklenicisi son tüketicidir. Ticari işletmeler ve serbest meslek erbabı ise mal ve hizmet satışlarında alıcıdan KDV tahsil ederek (Hesaplanan KDV / 391) devlete aktarmakla yükümlü aracı kılınmıştır.\n\nİşletmeler, ticari faaliyetleri için yaptıkları mal ve hizmet alımlarında ödedikleri KDV’yi (İndirilecek KDV / 191), satışları üzerinden hesapladıkları KDV’den mahsup ederler. Hesaplanan KDV’nin İndirilecek KDV’den fazla olması durumunda aradaki fark 1 No’lu KDV Beyannamesi ile vergi dairesine ödenir. Aksi durumda aradaki fark Devreden KDV (190) olarak sonraki dönemlerde indirilmek üzere devredilir.',
    },
    {
      id: 'guncel-kdv-oranlari',
      title: '2026 Yılı Güncel KDV Oranları: %20, %10 ve %1',
      level: 2,
      content:
        'Türkiye’de mal teslimleri ve hizmet ifalarında üç farklı yasal KDV oranı uygulanmaktadır:\n\n- **Genel Oran (%20)**: Kanunda özel bir istisna veya indirimli liste kapsamına girmeyen tüm standart mal ve hizmet teslimlerine uygulanır. Beyaz eşya, otomotiv, akaryakıt, mobilya, bilişim ve yazılım hizmetleri, danışmanlık, mühendislik, avukatlık, elektronik aletler ve alkollü içecekler bu gruptadır.\n- **İndirimli Oran (%10)**: KDV Kanununa ekli (II) sayılı listede yer alan mal ve hizmetleri kapsar. Restoran ve kafelerde sunulan yeme-içme hizmetleri, otel ve konaklama tesisleri, sinema, tiyatro ve müze biletleri, eğitim-öğretim hizmetleri ile tekstil ve konfeksiyon ürünleri %10 oranında KDV’ye tabidir.\n- **Süper İndirimli Oran (%1)**: KDV Kanununa ekli (I) sayılı listede yer alan temel insani ve tarımsal ihtiyaçları kapsar. İşlenmemiş temel tarım ürünleri (buğday, arpa, tohumluk), ekmek, un, cenaze hizmetleri, toptan gazete ve dergi teslimleri ile finansal kiralama (leasing) yoluyla temin edilen bazı yatırım malları %1 KDV oranına tabidir.\n- **KDV’den İstisna Olan İşlemler (%0)**: İhracat teslimleri, serbest bölge işlemleri, uluslararası taşımacılık ve diplomatik misyonlara yapılan satışlar KDV’den tam istisnadır.',
    },
    {
      id: 'kdv-tevkifati-nedir-ve-nasil-uygulanir',
      title: 'KDV Tevkifatı Nedir? Kısmi Tevkifat Oranları ve Sorumlu Sıfatı',
      level: 2,
      content:
        'KDV tevkifatı, vergi alacağını güvence altına almak amacıyla faturada hesaplanan KDV’nin tamamının satıcıya ödenmeyip, kanunla belirlenen bir kısmının alıcı tarafından doğrudan kesilerek vergi dairesine yatırılması işlemidir.\n\nTevkifat iki ana gruba ayrılır:\n1. **Tam Tevkifat**: İşlem bedeli üzerinden hesaplanan KDV’nin tamamının (10/10) alıcı tarafından kesilerek beyan edilmesidir (örneğin ikametgahı Türkiye’de bulunmayan yabancı firmalardan alınan dijital ve serbest meslek hizmetleri).\n2. **Kısmi Tevkifat**: Hesaplanan KDV’nin Maliye Bakanlığı tarafından belirlenen oranlarda satıcı ile alıcı arasında bölüştürülmesidir.\n\nEn yaygın kısmi tevkifat oranları şunlardır:\n- **9/10 Tevkifat**: Temizlik, bahçe ve çevre bakım hizmetleri, özel güvenlik ve koruma hizmetleri.\n- **5/10 Tevkifat**: Etüt, plan-proje, danışmanlık, denetim, bağımsız muhasebeci mali müşavirlik ve yapı denetim hizmetleri.\n- **4/10 Tevkifat**: Makine, teçhizat, demirbaş ve taşıtlara ait tadilat, bakım ve onarım hizmetleri.\n- **2/10 Tevkifat**: Yük ve personel servis taşımacılığı hizmetleri.\n- **7/10 Tevkifat**: Demir-çelik ve alüminyum ürünlerinin teslimi ve işgücü temin hizmetleri.\n\nÖnemli Kural: KDV Genel Uygulama Tebliğine göre, KDV dahil toplam işlem tutarı **2.000 TL**’yi aşmayan faturalarda tevkifat uygulanmaz; fatura standart KDV ile düzenlenir.',
    },
    {
      id: '2-nolu-kdv-beyannamesi',
      title: '2 No’lu KDV Beyannamesi ile Beyan ve Ödeme Süreci',
      level: 2,
      content:
        'Tevkifat uygulayan alıcı kurum veya mükellef, satıcıdan kestiği vergi tutarını **2 No’lu KDV Beyannamesi** ile vergi dairesine sorumlu sıfatıyla beyan eder. 2024 ve sonrası vergi mevzuatı uyarınca, alıcı mükelleflerin tevkif ettikleri KDV’yi kendi 1 No’lu KDV beyannamelerinde indirim konusu yapabilmeleri için, bu verginin 2 No’lu KDV beyannamesi ile tahakkuk ettirilmiş ve fiilen ödenmiş olması şartı getirilmiştir.\n\nFatura üzerinde matrah, KDV oranı, hesaplanan KDV, tevkifat oranı, tevkif edilen KDV ve tahsil edilecek toplam tutar açıkça gösterilmelidir. Elektronik faturalarda (e-Fatura ve e-Arşiv) ilgili Gelir İdaresi Başkanlığı tevkifat kodunun (örn. 601, 602, 603 vb.) seçilmesi yasal zorunluluktur.',
    },
    {
      id: 'matematiksel-formuller-dahil-haric',
      title: 'Matematiksel Formüller: KDV Dahil ve KDV Hariç Hesaplama',
      level: 2,
      content:
        'Hatalı fatura düzenlenmesini engellemek için doğru hesaplama formüllerinin kullanılması şarttır:\n\n### 1. KDV Hariç Tutardan KDV Dahil Tutara Ulaşma\n$$\\text{Hesaplanan KDV} = \\text{Net Matrah} \\times \\left(\\frac{\\text{Oran}}{100}\\right)$$\n$$\\text{KDV Dahil Toplam} = \\text{Net Matrah} \\times \\left(1 + \\frac{\\text{Oran}}{100}\\right)$$\nÖrnek (%20 KDV): 10.000 TL matrah için $10.000 \\times 0,20 = 2.000$ TL KDV, toplam tutar $10.000 \\times 1,20 = 12.000$ TL.\n\n### 2. KDV Dahil Tutardan KDV Hariç Matrahı Ayırma (Tersine Formül)\nKDV dahil bir rakamdan doğrudan %20 eksiltmek en büyük muhasebe hatalarından biridir (12.000 TL’den %20 çıkarılırsa 9.600 TL kalır ki bu 400 TL eksik hesaplamadır). Doğru formül:\n$$\\text{KDV Hariç Matrah} = \\frac{\\text{KDV Dahil Toplam}}{1 + (\\text{Oran} / 100)}$$\n$$\\text{İç KDV Tutarı} = \\text{KDV Dahil Toplam} - \\text{KDV Hariç Matrah}$$\n%20 için bölen: $1,20$.\n%10 için bölen: $1,10$.\n%1 için bölen: $1,01$.',
    },
    {
      id: 'kdv-iadesi-ve-mahsup-islemleri',
      title: 'KDV İadesi ve İndirimli Orana Tabi İşlemlerde İade Prosedürü',
      level: 2,
      content:
        'İhracat teslimleri yapan veya indirimli orana (%1 veya %10) tabi mal ve hizmet satışı gerçekleştiren mükellefler, yüklendikleri KDV’yi satışları üzerinden tahsil edemedikleri için her ay yüklü miktarda devreden KDV ile karşı karşıya kalırlar. Kanun koyucu, bu işletmelerin finansman yükünü hafifletmek amacıyla **KDV İadesi** mekanizmasını ihdas etmiştir.\n\nKDV iadesi iki ana yöntemle talep edilebilir:\n1. **Mahsuben İade**: Mükellefin kendisine veya ortaklarına ait vergi borçlarına, SGK prim borçlarına veya gümrük vergisi borçlarına mahsup edilmesi talebidir. Belirli limitlere kadar Yeminli Mali Müşavir (YMM) KDV İadesi Tasdik Raporu veya vergi inceleme raporu aranmaksızın hızlıca yerine getirilir.\n2. **Nakden İade**: İade hakkı doğuran tutarın doğrudan mükellefin banka hesabına nakit olarak aktarılmasıdır. Nakden iade taleplerinde teminat mektubu verilmesi, YMM KDV iadesi raporunun ibrazı veya Vergi Denetim Kurulu müfettişlerince düzenlenen vergi inceleme raporu şart koşulur.\n\nİndirimli orana tabi teslimlerde KDV iade talebi yılı içinde mahsuben, izleyen yıl içinde ise hem mahsuben hem nakden yapılabilir.',
    },
    {
      id: 'e-fatura-ve-kdv-muhasebe-kayitlari',
      title: 'e-Dönüşüm Sisteminde KDV Uyumluluğu ve Muhasebe Kayıtları',
      level: 2,
      content:
        'Gelir İdaresi Başkanlığı\'nın e-Fatura, e-Arşiv ve e-Defter uygulamaları sayesinde Türkiye’de KDV denetimleri tamamen algoritmik hale gelmiştir. Düzenlenen her faturada matrah, KDV oranı, istisna veya tevkifat kodu Gelir İdaresi sistemleri tarafından anlık doğrulanır.\n\n Standart bir mal satışında yapılması gereken tekdüzen hesap planı muhasebe kaydı şöyledir:\n- **120 Alıcılar Hesabı (Borçlu)**: Faturanın KDV dahil toplam tutarı\n- **600 Yurtiçi Satışlar Hesabı (Alacaklı)**: Faturanın KDV hariç net matrahı\n- **391 Hesaplanan KDV Hesabı (Alacaklı)**: Müşteriden tahsil edilen KDV tutarı\n\nTevkifatlı satışlarda ise faturanın tevkif edilen KDV kısmı 120 Alıcılar hesabına değil, tahsil edilmeyeceği için arındırılarak sadece tahsil edilecek KDV tutarı 391 hesabının altında alt hesaplarda izlenir.',
    },
  ],
  examples: [
    {
      title: 'Örnek 1: Yazılım Danışmanlığı Hizmetinde %20 Standart KDV Ekleme',
      scenario:
        'İstanbul’da faaliyet gösteren bir yazılım şirketi, kurumsal bir müşterisine KDV hariç 35.000,00 TL tutarında sistem entegrasyonu faturası kesecektir.',
      calculationType: 'add',
      inputAmount: 35000.0,
      rate: 20,
      resultVat: 7000.0,
      resultTotal: 42000.0,
      explanation:
        'Şirket 35.000,00 TL net tutarı 0,20 ile çarparak 7.000,00 TL KDV hesaplar. Müşteriye kesilen KDV dahil nihai fatura bedeli 42.000,00 TL (35.000,00 TL matrah + 7.000,00 TL KDV) olur.',
    },
    {
      title: 'Örnek 2: 9/10 Tevkifatlı Güvenlik ve Temizlik Hizmeti Faturası',
      scenario:
        'Bir temizlik firması, bir fabrikaya KDV hariç 50.000,00 TL tutarında aylık endüstriyel temizlik hizmeti sağlamıştır. Hizmet 9/10 oranında KDV tevkifatına tabidir.',
      calculationType: 'add',
      inputAmount: 50000.0,
      rate: 20,
      resultVat: 10000.0,
      resultTotal: 60000.0,
      explanation:
        'Toplam hesaplanan KDV 10.000,00 TL’dir (%20). 9/10 tevkifat gereğince 9.000,00 TL alıcı fabrika tarafından kesilerek 2 No’lu KDV ile devlete ödenir. Satıcı temizlik şirketine ise 51.000,00 TL (50.000 TL matrah + 1.000 TL kalan KDV) ödenir.',
    },
  ],
  faqs: [
    {
      q: 'Türkiye’de genel standart KDV oranı kaç oldu?',
      a: 'Türkiye’de genel KDV oranı %20’dir. 7346 sayılı Cumhurbaşkanı Kararı ile 10 Temmuz 2023 tarihinden itibaren %18’den %20’ye yükseltilmiştir.',
    },
    {
      q: 'KDV dahil bir tutardan KDV nasıl çıkarılır?',
      a: 'KDV dahil tutarı, vergi oranı %20 ise 1,20’ye; %10 ise 1,10’a bölerek KDV hariç matrahı bulabilirsiniz. Toplam tutardan bulduğunuz matrahı çıkardığınızda içerideki net KDV tutarına ulaşırsınız.',
    },
    {
      q: 'Neden KDV dahil tutardan direkt %20 çıkarılmaz?',
      a: 'KDV dahil tutar matrahın %120’sini temsil eder. Doğrudan %20 düşüldüğünde %120 üzerinden hesaplama yapılmış olur ve bu durum net tutarı hatalı şekilde olması gerekenden daha düşük gösterir.',
    },
    {
      q: 'KDV Tevkifatı nedir ve kimler tevkifat yapmak zorundadır?',
      a: 'KDV tevkifatı, faturadaki verginin bir kısmının alıcı tarafından kesilerek satıcı yerine doğrudan vergi dairesine ödenmesidir. Kamu kurumları, bankalar, payları Borsa İstanbul’da işlem gören şirketler ve KDV mükellefleri tevkifat kapsamındaki işlemlerde tevkifat yapmak zorundadır.',
    },
    {
      q: 'Hangi hizmetlerde 9/10 tevkifat oranı uygulanır?',
      a: 'Temizlik, çevre ve bahçe bakım hizmetleri ile özel güvenlik ve koruma hizmeti alımlarında faturadaki KDV tutarına 9/10 tevkifat uygulanır.',
    },
    {
      q: '2026 yılı için KDV tevkifat uygulama alt sınırı ne kadardır?',
      a: 'KDV Genel Uygulama Tebliğine göre, KDV dahil işlem bedeli 2.000 TL’nin altında kalan teslim ve hizmetlerde kısmi tevkifat uygulanmaz; fatura normal KDV ile kesilir.',
    },
    {
      q: '2 No’lu KDV Beyannamesi nedir?',
      a: 'Tevkifat yapan alıcı mükelleflerin, satıcı adına kestikleri KDV tutarını sorumlu sıfatıyla vergi dairesine beyan edip ödedikleri resmi beyannamedir.',
    },
    {
      q: 'Lokanta ve kafelerde uygulanan KDV oranı kaçtır?',
      a: 'Yiyecek ve içecek sunulan lokanta, kafe, pastane gibi işletmelerde sunulan hizmetler kural olarak %10 oranında KDV’ye tabidir. Ancak bu mekanlarda sunulan alkollü içecekler için %20 oran uygulanır.',
    },
  ],
  sources: [
    {
      label: 'Gelir İdaresi Başkanlığı (GİB): Güncel KDV Rehberleri',
      url: 'https://www.gib.gov.tr',
    },
    {
      label: '3065 sayılı Katma Değer Vergisi Kanunu (Mevzuat)',
      url: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=3065&MevzuatTur=1&MevzuatTertip=5',
    },
    {
      label: 'Resmi Gazete: KDV Genel Uygulama Tebliği',
      url: 'https://www.resmigazete.gov.tr',
    },
    {
      label: 'Türkiye Cumhuriyet Merkez Bankası (TCMB)',
      url: 'https://www.tcmb.gov.tr',
    },
  ],
  relatedTools: [
    {
      title: 'IBAN Doğrulama ve Banka Bulucu',
      slug: 'tr/iban-dogrulama',
      description: 'Türk bankalarına ait TR IBAN numaralarını MOD-97 algoritması ile kontrol edin.',
      category: 'Bankacılık',
    },
    {
      title: 'Avrupa KDV Oranları Karşılaştırma Aracı',
      slug: 'vat-calculator',
      description: 'Avrupa Birliği genelindeki KDV oranlarını ve sınır ötesi kuralları inceleyin.',
      category: 'Vergi & KDV',
    },
  ],
  relatedGuides: [
    {
      title: 'IBAN Nedir ve Nasıl Oluşturulur?',
      slug: 'guides/what-is-an-iban',
      description: 'Uluslararası banka hesap numarası yapısı ve güvenli transfer rehberi.',
      category: 'Bankacılık Rehberleri',
    },
    {
      title: 'IBAN ile SWIFT/BIC Kodu Arasındaki Farklar',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Yurt dışı para transferlerinde doğru kodları kullanma kılavuzu.',
      category: 'Bankacılık Rehberleri',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Bu hesaplama aracı bilgilendirme amaçlıdır. Nihai ticari ve mali işlemleriniz için yeminli mali müşavir veya serbest muhasebeci mali müşavirinize danışınız.',
};
