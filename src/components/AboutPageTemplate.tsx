import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Cpu, EyeOff, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { getSitePageLink } from '@/config/site-pages';

export interface AboutPageTemplateProps {
  lang: SupportedLang;
}

interface AboutContent {
  title: string;
  subtitle: string;
  missionHeading: string;
  missionText: string[];
  networkHeading: string;
  networkText: string;
  accuracyHeading: string;
  accuracyPoints: { title: string; desc: string }[];
  errorReportingHeading: string;
  errorReportingText: string;
}

const ABOUT_CONTENT_MAP: Record<SupportedLang, AboutContent> = {
  en: {
    title: 'About Zetawala Money',
    subtitle: 'Free, transparent, and high-precision financial calculators for Europe, the UK, Australia, and Canada.',
    missionHeading: 'Why Zetawala Money Exists',
    missionText: [
      'Financial decisions—whether checking an international IBAN, planning a trip across Schengen borders, calculating take-home salary, or tracking household electricity costs—demand absolute accuracy and immediate clarity.',
      'Most financial websites are bloated with intrusive popups, require unnecessary user accounts, or quietly transmit sensitive financial entries to advertising servers. Zetawala Money was built to be the antidote: fast, clean, completely free, and engineered to run 100% locally in your web browser.',
    ],
    networkHeading: 'Part of the Zetawala Network',
    networkText:
      'Zetawala Money is a proud member of the Zetawala family of free online tools (zetawala.com). Our parent network is committed to providing modern, lightning-fast utilities with zero paywalls, zero subscriptions, and an uncompromising respect for user privacy.',
    accuracyHeading: 'How Numbers and Legal Rules Are Verified',
    accuracyPoints: [
      {
        title: 'Statutory Primary Sources Only',
        desc: 'We never guess or rely on secondary blog summaries. Every tax bracket, currency ceiling, and formula is verified directly from official gazette acts, central banks (like Deutsche Bundesbank), revenue agencies (HMRC, ZUS, GİB, ANAF), and EU directives.',
      },
      {
        title: 'Rigorous Automated Test Suites',
        desc: 'Over 800 automated unit and end-to-end tests run on every code update. Calculation engines are tested against edge cases, leap years, maximum thresholds, and official government worked examples.',
      },
      {
        title: 'Zero Server Storage (Complete Privacy)',
        desc: 'When you enter a salary, an IBAN, or travel dates, that data never leaves your device. Calculations run purely client-side in your browser using modern Web Standards.',
      },
      {
        title: 'Dated Rules & Prompt Updating',
        desc: 'Our rules files store explicit validFrom timestamps. As soon as quarterly price caps or annual tax revisions are enacted, our team updates the underlying parameters.',
      },
    ],
    errorReportingHeading: 'How to Report an Error or Suggest an Improvement',
    errorReportingText:
      'If you notice a legislative change, an impending regulatory amendment, or an unexpected calculation edge case, we want to know immediately. Please contact our engineering team via our contact form with the specific numbers, country, and official source link.',
  },
  de: {
    title: 'Über Zetawala Money',
    subtitle: 'Kostenlose, transparente und hochpräzise Finanz- und Steuerrechner für Deutschland und Europa.',
    missionHeading: 'Warum es Zetawala Money gibt',
    missionText: [
      'Ob es um die Prüfung einer internationalen IBAN, die Berechnung der Mehrwertsteuer nach § 12 UStG oder den Stromverbrauch im Haushalt geht: Finanzentscheidungen verlangen absolute Verlässlichkeit.',
      'Zetawala Money wurde geschaffen, um schnelle, werbefreundliche und 100 % werbefreie Rechner bereitzustellen, die vollständig im Browser des Nutzers arbeiten – ohne lästige Registrierung und ohne Weiterleitung sensibler Daten.',
    ],
    networkHeading: 'Teil des Zetawala-Netzwerks',
    networkText:
      'Zetawala Money gehört zum Zetawala-Netzwerk kostenloser Online-Werkzeuge (zetawala.com). Wir stehen für werteorientierte Werkzeuge ohne Abo-Fallen und mit höchstem Datenschutzanspruch.',
    accuracyHeading: 'Wie unsere Zahlen und Gesetzesregeln geprüft werden',
    accuracyPoints: [
      {
        title: 'Ausschließlich offizielle Primärquellen',
        desc: 'Wir nutzen offizielle Datenbestände wie die Bankleitzahlendatei der Deutschen Bundesbank, Bundesgesetzblätter und Vorgaben des BDEW.',
      },
      {
        title: 'Umfassende automatisierte Testabdeckung',
        desc: 'Hunderte automatisierte Tests prüfen Grenzfälle, kaufmännische Rundungen und Prüfziffern-Algorithmen.',
      },
      {
        title: 'Keine Speicherung auf Servern',
        desc: 'Ihre Kontodaten und Beträge bleiben zu 100 % auf Ihrem Endgerät und werden niemals übertragen.',
      },
      {
        title: 'Kontinuierliche Aktualisierung',
        desc: 'Änderungen an Steuergesetzen oder Bankleitzahlen werden quartalsweise und jährlich eingepflegt.',
      },
    ],
    errorReportingHeading: 'Fehler melden oder Korrektur vorschlagen',
    errorReportingText:
      'Haben Sie eine Unstimmigkeit festgestellt oder hat sich eine rechtliche Vorgabe geändert? Bitte schreiben Sie uns über unser Kontaktformular unter Angabe der offiziellen Quelle.',
  },
  pl: {
    title: 'O serwisie Zetawala Money',
    subtitle: 'Bezpłatne, dokładne i bezpieczne kalkulatory wynagrodzeń, podatków i bankowości.',
    missionHeading: 'Dlaczego powstał Zetawala Money?',
    missionText: [
      'Wybór między umową o pracę a B2B, obliczenie podatku VAT czy weryfikacja rachunku bankowego wymagają precyzji i aktualnej wiedzy prawno-podatkowej.',
      'Zetawala Money dostarcza niezależne narzędzia działające w 100% w przeglądarce użytkownika. Żadne kwoty, numery kont ani dane osobowe nie są przesyłane na serwery ani gromadzone.',
    ],
    networkHeading: 'Część sieci bezpłatnych narzędzi Zetawala',
    networkText:
      'Serwis Zetawala Money jest częścią globalnej sieci darmowych narzędzi Zetawala (zetawala.com), promującej szybkie i pozbawione opłat usługi cyfrowe.',
    accuracyHeading: 'Jak weryfikujemy wskaźniki i przepisy?',
    accuracyPoints: [
      {
        title: 'Tylko oficjalne źródła (Dziennik Ustaw, ZUS, MF)',
        desc: 'Wszystkie stawki wynikają z aktualnych ustaw, rozporządzeń Rady Ministrów i oficjalnych interpretacji.',
      },
      {
        title: 'Setki automatycznych testów jednostkowych',
        desc: 'Formuły są regularnie weryfikowane z oficjalnymi kalkulatorami rządowymi i arkuszami płacowymi.',
      },
      {
        title: '100% prywatności w przeglądarce',
        desc: 'Obliczenia wykonują się lokalnie bez zapisu po stronie serwera.',
      },
      {
        title: 'Bieżące aktualizacje progów podatkowych',
        desc: 'Uwzględniamy nowe stawki płacy minimalnej i limity ZUS natychmiast po ich uchwaleniu.',
      },
    ],
    errorReportingHeading: 'Zgłaszanie uwag i propozycji',
    errorReportingText:
      'Jeśli zauważyłeś błąd w wyliczeniu lub zmianę przepisów, skontaktuj się z naszym zespołem za pomocą formularza kontaktowego.',
  },
  tr: {
    title: 'Zetawala Money Hakkında',
    subtitle: 'Türkiye ve Avrupa için ücretsiz, şeffaf ve yüksek hassasiyetli finans hesaplama motorları.',
    missionHeading: 'Zetawala Money Neden Kuruldu?',
    missionText: [
      'Kıdem ve ihbar tazminatı hesaplama, brütten nete maaş bordrosu veya Schengen vize günü takibi gibi kritik konularda çalışanların ve işletmelerin doğru ve hızlı bilgiye erişmesi gerekir.',
      'Zetawala Money; üyelik şartı koşmayan, reklamlara boğulmamış ve tüm hesaplamaları kullanıcının kendi cihazında güvenle yapan modern bir hesaplama merkezidir.',
    ],
    networkHeading: 'Zetawala Ağının Bir Parçası',
    networkText:
      'Zetawala Money, dünya çapında ücretsiz dijital araçlar sunan Zetawala ağının (zetawala.com) tescilli bir üyesidir.',
    accuracyHeading: 'Yasal Kurallar ve Hesaplama Doğrulaması',
    accuracyPoints: [
      {
        title: 'Resmî Mevzuat ve Bakanlık Tebliğleri',
        desc: 'İş Kanunu maddeleri, HMB kıdem tavanı genelgeleri ve GİB gelir vergisi dilimleri birebir uygulanır.',
      },
      {
        title: 'Otomatik Doğrulama Testleri',
        desc: 'Yüzlerce farklı kıdem yılı, maaş ve vergi matrahı senaryosu otomatik testlerle denetlenir.',
      },
      {
        title: 'Sıfır Sunucu Kaydı (Tam Gizlilik)',
        desc: 'Yazdığınız maaş, tazminat ve seyahat tarihleri hiçbir zaman bir sunucuya kaydedilmez.',
      },
      {
        title: 'Dönemsel Güncellemeler',
        desc: 'Ocak ve Temmuz aylarında yenilenen kıdem tavanları ve yıllık asgari ücretler anında sisteme işlenir.',
      },
    ],
    errorReportingHeading: 'Hata Bildirimi ve İletişim',
    errorReportingText:
      'Mevzuattaki yeni bir değişikliği bildirmek veya geliştirme önerisinde bulunmak için iletişim sayfamızdan bize ulaşabilirsiniz.',
  },
  ro: {
    title: 'Despre Zetawala Money',
    subtitle: 'Calculatoare financiare și salariale gratuite, sigure și exacte pentru România și Europa.',
    missionHeading: 'Misiunea Noastră',
    missionText: [
      'Fie că calculați salariul net din brut, evaluați opțiunea optimă între PFA și SRL sau verificați un cont bancar IBAN, aveți nevoie de rezultate certe, conforme cu Codul Fiscal 2026.',
      'Zetawala Money elimină formularele complicate și abonamentele plătite. Oferim instrumente rapide, transparente, care rulează exclusiv în browserul dumneavoastră.',
    ],
    networkHeading: 'Parte din Rețeaua Zetawala',
    networkText:
      'Zetawala Money face parte din familia de platforme utile și gratuite Zetawala (zetawala.com).',
    accuracyHeading: 'Cum Sunt Verificate Cifrele și Legislația?',
    accuracyPoints: [
      {
        title: 'Surse Primare din Monitorul Oficial',
        desc: 'Utilizăm exclusiv acte normative: Legea 227/2015, HG 141/2025 și ordonanțele de urgență în vigoare.',
      },
      {
        title: 'Testare Automată Riguroasă',
        desc: 'Fiecare algoritm de salarizare este verificat prin zeci de teste automate cu cazuri reale.',
      },
      {
        title: 'Confidențialitate Totală (Fără Server)',
        desc: 'Datele introduse nu părăsesc niciodată dispozitivul dumneavoastră.',
      },
      {
        title: 'Actualizări Legislative Imediate',
        desc: 'Plafoanele PFA, deducerile personale și sumele neimpozabile sunt actualizate la zi.',
      },
    ],
    errorReportingHeading: 'Cum Puteți Raporta o Eroză sau Propune o Îmbunătățire?',
    errorReportingText:
      'Dacă identificați o modificare legislativă recentă, vă rugăm să ne trimiteți un mesaj prin pagina de contact indicând sursa oficială.',
  },
  fr: {
    title: 'À Propos de Zetawala Money',
    subtitle: 'Calculateurs bancaires et financiers gratuits pour la France et l’Europe.',
    missionHeading: 'Notre Mission',
    missionText: [
      'Zetawala Money a été conçu pour offrir des outils financiers fiables, rapides et 100% confidentiels sans inscription.',
    ],
    networkHeading: 'Réseau Zetawala',
    networkText: 'Zetawala Money fait partie du réseau d’outils gratuits Zetawala (zetawala.com).',
    accuracyHeading: 'Fiabilité et Normes',
    accuracyPoints: [
      { title: 'Normes ISO Certifiées', desc: 'Conforme aux algorithmes MOD-97 et aux normes SEPA.' },
      { title: 'Exécution Locale', desc: 'Vos coordonnées bancaires ne sont jamais transmises à des serveurs.' },
    ],
    errorReportingHeading: 'Contact et Retours',
    errorReportingText: 'Pour toute remarque ou suggestion, contactez notre équipe via la page contact.',
  },
  es: {
    title: 'Sobre Zetawala Money',
    subtitle: 'Calculadoras bancarias y financieras gratuitas para España y Europa.',
    missionHeading: 'Nuestra Misión',
    missionText: [
      'Zetawala Money ofrece herramientas financieras rápidas, precisas y respetuosas con la privacidad sin registro.',
    ],
    networkHeading: 'Red Zetawala',
    networkText: 'Zetawala Money forma parte de la red de herramientas gratuitas Zetawala (zetawala.com).',
    accuracyHeading: 'Precisión y Cumplimiento',
    accuracyPoints: [
      { title: 'Estándares ISO Oficiales', desc: 'Algoritmo MOD-97 y normativas bancarias europeas.' },
      { title: 'Privacidad Total', desc: 'Los cálculos se realizan exclusivamente en su navegador.' },
    ],
    errorReportingHeading: 'Contacto',
    errorReportingText: 'Para cualquier consulta o sugerencia, póngase en contacto a través de nuestro formulario.',
  },
  it: {
    title: 'Informazioni su Zetawala Money',
    subtitle: 'Calcolatori bancari e finanziari gratuiti per l’Italia e l’Europa.',
    missionHeading: 'La Nostra Missione',
    missionText: [
      'Zetawala Money offre strumenti di calcolo veloci, accurati e completamente gratuiti, senza bisogno di registrazione.',
    ],
    networkHeading: 'Rete Zetawala',
    networkText: 'Zetawala Money fa parte della rete di utilità online gratuite Zetawala (zetawala.com).',
    accuracyHeading: 'Standard e Affidabilità',
    accuracyPoints: [
      { title: 'Standard ISO Ufficiali', desc: 'Validazione bancaria conforme a ISO 13616 e SEPA.' },
      { title: 'Zero Registrazione Dati', desc: 'Tutti i controlli avvengono localmente sul dispositivo.' },
    ],
    errorReportingHeading: 'Contatti',
    errorReportingText: 'Per suggerimenti o chiarimenti, utilizzate la nostra pagina di contatto.',
  },
  nl: {
    title: 'Over Zetawala Money',
    subtitle: 'Gratis financiële en bankrekening calculators voor Nederland en Europa.',
    missionHeading: 'Waarom Zetawala Money?',
    missionText: [
      'Zetawala Money biedt betrouwbare, snelle en privacyvriendelijke rekentools zonder registratie of kosten.',
    ],
    networkHeading: 'Onderdeel van Zetawala',
    networkText: 'Zetawala Money maakt deel uit van het gratis online netwerk Zetawala (zetawala.com).',
    accuracyHeading: 'Kwaliteit en Betrouwbaarheid',
    accuracyPoints: [
      { title: 'Officiële ISO-normen', desc: 'Wiskundige verificatie conform ISO 13616 en SEPA-regels.' },
      { title: 'Privacy voorop', desc: 'Berekeningen draaien lokaal zonder gegevensopslag op servers.' },
    ],
    errorReportingHeading: 'Contact',
    errorReportingText: 'Neem contact met ons op via de contactpagina voor vragen of opmerkingen.',
  },
};

export function AboutPageTemplate({ lang }: AboutPageTemplateProps) {
  const content = ABOUT_CONTENT_MAP[lang] || ABOUT_CONTENT_MAP.en;
  const currentSlug = lang === 'en' ? 'about' : `${lang}/about`;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="about"
        slug={currentSlug}
        type="site"
        title={content.title}
        description={content.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Independent • Privacy-First • Free Public Utility</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {content.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {content.subtitle}
          </p>
        </header>

        {/* Section 1: Why it exists */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
            {content.missionHeading}
          </h2>
          {content.missionText.map((p, idx) => (
            <p key={idx} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {p}
            </p>
          ))}
        </section>

        {/* Section 2: Parent Network */}
        <section className="mb-12 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.parentBrand.logo}
                alt={siteConfig.parentBrand.name}
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {content.networkHeading}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {content.networkText}
            </p>
          </div>
          <a
            href={siteConfig.parentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all shrink-0"
          >
            <span>Visit zetawala.com</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </section>

        {/* Section 3: Verification */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
            {content.accuracyHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.accuracyPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Error reporting */}
        <section className="p-6 sm:p-8 rounded-3xl bg-teal-50/50 dark:bg-slate-900/60 border border-teal-200/60 dark:border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {content.errorReportingHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {content.errorReportingText}
          </p>
          <div className="pt-2">
            <Link
              href={getSitePageLink('contact', lang)}
              className="inline-flex items-center text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline"
            >
              <span>Submit a Correction or Feedback</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPageTemplate;
