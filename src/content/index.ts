import { SupportedLang } from '@/config/pages';
import { PageContent, GuideContent } from './types';

export type AnyPageContent = PageContent | GuideContent;

// Banking Tools
import { ibanCheckerEn } from './en/iban-checker';
import { bicCheckerEn } from './en/bic-checker';
import { ibanCheckerDe } from './de/iban-checker';
import { ibanRechnerDe } from './de/iban-rechner';
import { blzSucheDe } from './de/blz-suche';
import { bicCheckerDe } from './de/bic-checker';
import { ibanCheckerPl } from './pl/iban-checker';
import { ibanCheckerTr } from './tr/iban-checker';
import { ibanCheckerRo } from './ro/iban-checker';
import { ibanCheckerFr } from './fr/iban-checker';
import { ibanCheckerEs } from './es/iban-checker';
import { ibanCheckerIt } from './it/iban-checker';
import { ibanCheckerNl } from './nl/iban-checker';

// VAT Tools
import { vatCalculatorEn } from './en/vat-calculator';
import { vatCalculatorUkEn } from './en/vat-calculator-uk';
import { mwstRechnerDe } from './de/mwst-rechner';
import { kalkulatorVatPl } from './pl/kalkulator-vat';
import { kdvHesaplamaTr } from './tr/kdv-hesaplama';
import { calculatorTvaRo } from './ro/calculator-tva';

// Travel & Fuel Tools
import { schengenCalculatorEn } from './en/schengen-calculator';
import { schengenGunHesaplamaTr } from './tr/schengen-gun-hesaplama';
import { etiasEn } from './en/etias';
import { eesEntryExitEn } from './en/ees-entry-exit';
import { fuelCostUkEn } from './en/fuel-cost-uk';
import { fuelCostAustraliaEn } from './en/fuel-cost-australia';
import { fuelCostCanadaEn } from './en/fuel-cost-canada';
import { spritkostenrechnerDe } from './de/spritkostenrechner';
import { mpgConverterEn } from './en/mpg-converter';
import { evVsPetrolEn } from './en/ev-vs-petrol';

// Turkey Salary & Tax Tools
import { kidemTazminatiTr } from './tr/kidem-tazminati';
import { ihbarTazminatiTr } from './tr/ihbar-tazminati';
import { kidemVeIhbarTr } from './tr/kidem-ve-ihbar';
import { bruttenNeteMaasTr } from './tr/brutten-nete-maas';
import { nettenBruteMaasTr } from './tr/netten-brute-maas';
import { asgariUcretTr } from './tr/asgari-ucret';
import { kidemTazminatiTavaniTr } from './tr/kidem-tazminati-tavani';
import { gelirVergisiDilimleriTr } from './tr/gelir-vergisi-dilimleri';

// Guides
import { guideWhatIsAnIbanEn } from './en/guides/what-is-an-iban';
import { guideIbanVsSwiftBicEn } from './en/guides/iban-vs-swift-bic';
import { guideHowToFindYourIbanEn } from './en/guides/how-to-find-your-iban';
import { guideDeIbanAufbau } from './de/ratgeber/iban-aufbau';
import { guideDeBlzBic } from './de/ratgeber/blz-und-bic';
import { guideSchengenRuleExplainedEn } from './en/guides/schengen-90-180-rule-explained';
import { guideUkCitizensEuropeTravelEn } from './en/guides/uk-citizens-europe-travel-rules';
import { guideSchengenOverstayConsequencesEn } from './en/guides/schengen-overstay-consequences';
import { guideSchengenCountriesListEn } from './en/guides/schengen-countries-list';
import { guideTrSchengenVizeRehberi } from './tr/rehber/schengen-vizesi-90-180-kurali';

// Turkey Salary & Tax Guides
import { guideTrIstifaEdenKidem } from './tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi';
import { guideTrKidemTazminatiSartlari } from './tr/rehber/kidem-tazminati-sartlari';
import { guideTrIhbarSuresi } from './tr/rehber/ihbar-suresi-nasil-hesaplanir';
import { guideTrEvlilikKidemTazminati } from './tr/rehber/evlilik-nedeniyle-kidem-tazminati';

// Poland Salary & Tax Tools
import { contentPlKalkulatorWynagrodzen } from './pl/kalkulator-wynagrodzen';
import { contentPlKalkulatorB2b } from './pl/kalkulator-b2b';
import { contentPlPlacaMinimalna } from './pl/placa-minimalna';
import { contentPlSkladkiZus } from './pl/skladki-zus';
import { contentPlProgiPodatkowe } from './pl/progi-podatkowe';

// Poland Salary & Tax Guides
import { guidePlB2bCzyUop } from './pl/poradniki/b2b-czy-umowa-o-prace';
import { guidePlRyczaltCzyLiniowy } from './pl/poradniki/ryczalt-czy-liniowy';
import { guidePlUlgaDlaMlodych } from './pl/poradniki/ulga-dla-mlodych';
import { guidePlJakCzytacPasekWyplaty } from './pl/poradniki/jak-czytac-pasek-wyplaty';

// Romania Salary & Tax Tools
import { contentRoCalculatorSalariu } from './ro/calculator-salariu';
import { contentRoCalculatorPfaSrl } from './ro/calculator-pfa-srl';
import { contentRoSalariulMinim } from './ro/salariul-minim';
import { contentRoDeducerePersonala } from './ro/deducere-personala';

// Romania Salary & Tax Guides
import { guideRoPfaSauSrl } from './ro/ghiduri/pfa-sau-srl';
import { guideRoCumSeCalculeazaSalariulNet } from './ro/ghiduri/cum-se-calculeaza-salariul-net';
import { guideRoDeclaratiaUnicaPfa } from './ro/ghiduri/declaratia-unica-pfa';

const contentRegistry: Record<SupportedLang, Record<string, AnyPageContent>> = {
  en: {
    'vat-calculator': vatCalculatorEn,
    'vat-calculator/uk': vatCalculatorUkEn,
    'bic-swift-checker': bicCheckerEn,
    'iban-checker': ibanCheckerEn,
    'schengen-calculator': schengenCalculatorEn,
    'etias': etiasEn,
    'ees-entry-exit-system': eesEntryExitEn,
    'guides/what-is-an-iban': guideWhatIsAnIbanEn,
    'guides/iban-vs-swift-bic': guideIbanVsSwiftBicEn,
    'guides/how-to-find-your-iban': guideHowToFindYourIbanEn,
    'guides/schengen-90-180-rule-explained': guideSchengenRuleExplainedEn,
    'guides/uk-citizens-europe-travel-rules': guideUkCitizensEuropeTravelEn,
    'guides/schengen-overstay-consequences': guideSchengenOverstayConsequencesEn,
    'guides/schengen-countries-list': guideSchengenCountriesListEn,
    'fuel-cost-calculator/uk': fuelCostUkEn,
    'fuel-cost-calculator/australia': fuelCostAustraliaEn,
    'fuel-cost-calculator/canada': fuelCostCanadaEn,
    'mpg-to-litres-per-100km': mpgConverterEn,
    'fuel-cost-calculator/ev-vs-petrol': evVsPetrolEn,
  },
  de: {
    'spritkostenrechner': spritkostenrechnerDe,
    'de/spritkostenrechner': spritkostenrechnerDe,
    'mwst-rechner': mwstRechnerDe,
    'de/mwst-rechner': mwstRechnerDe,
    'iban-rechner': ibanRechnerDe,
    'de/iban-rechner': ibanRechnerDe,
    'blz-suche': blzSucheDe,
    'de/blz-suche': blzSucheDe,
    'bic-pruefen': bicCheckerDe,
    'de/bic-pruefen': bicCheckerDe,
    'iban-checker': ibanCheckerDe,
    'iban-pruefen': ibanCheckerDe,
    'de/iban-pruefen': ibanCheckerDe,
    'ratgeber/iban-aufbau': guideDeIbanAufbau,
    'de/ratgeber/iban-aufbau': guideDeIbanAufbau,
    'ratgeber/blz-und-bic': guideDeBlzBic,
    'de/ratgeber/blz-und-bic': guideDeBlzBic,
  },
  pl: {
    'iban-checker': ibanCheckerPl,
    'sprawdz-iban': ibanCheckerPl,
    'pl/sprawdz-iban': ibanCheckerPl,
    'kalkulator-vat': kalkulatorVatPl,
    'pl/kalkulator-vat': kalkulatorVatPl,
    // Poland Salary & Tax Tools
    'kalkulator-wynagrodzen': contentPlKalkulatorWynagrodzen,
    'pl/kalkulator-wynagrodzen': contentPlKalkulatorWynagrodzen,
    'kalkulator-b2b': contentPlKalkulatorB2b,
    'pl/kalkulator-b2b': contentPlKalkulatorB2b,
    'placa-minimalna': contentPlPlacaMinimalna,
    'pl/placa-minimalna': contentPlPlacaMinimalna,
    'skladki-zus': contentPlSkladkiZus,
    'pl/skladki-zus': contentPlSkladkiZus,
    'progi-podatkowe': contentPlProgiPodatkowe,
    'pl/progi-podatkowe': contentPlProgiPodatkowe,
    // Poland Salary & Tax Guides
    'poradniki/b2b-czy-umowa-o-prace': guidePlB2bCzyUop,
    'pl/poradniki/b2b-czy-umowa-o-prace': guidePlB2bCzyUop,
    'poradniki/ryczalt-czy-liniowy': guidePlRyczaltCzyLiniowy,
    'pl/poradniki/ryczalt-czy-liniowy': guidePlRyczaltCzyLiniowy,
    'poradniki/ulga-dla-mlodych': guidePlUlgaDlaMlodych,
    'pl/poradniki/ulga-dla-mlodych': guidePlUlgaDlaMlodych,
    'poradniki/jak-czytac-pasek-wyplaty': guidePlJakCzytacPasekWyplaty,
    'pl/poradniki/jak-czytac-pasek-wyplaty': guidePlJakCzytacPasekWyplaty,
  },
  tr: {
    'iban-checker': ibanCheckerTr,
    'iban-dogrulama': ibanCheckerTr,
    'tr/iban-dogrulama': ibanCheckerTr,
    'kdv-hesaplama': kdvHesaplamaTr,
    'tr/kdv-hesaplama': kdvHesaplamaTr,
    'schengen-gun-hesaplama': schengenGunHesaplamaTr,
    'tr/schengen-gun-hesaplama': schengenGunHesaplamaTr,
    'rehber/schengen-vizesi-90-180-kurali': guideTrSchengenVizeRehberi,
    'tr/rehber/schengen-vizesi-90-180-kurali': guideTrSchengenVizeRehberi,
    // Turkey Salary & Tax Tools
    'kidem-tazminati': kidemTazminatiTr,
    'tr/kidem-tazminati': kidemTazminatiTr,
    'kidem-tazminati-hesaplama': kidemTazminatiTr,
    'tr/kidem-tazminati-hesaplama': kidemTazminatiTr,
    'ihbar-tazminati': ihbarTazminatiTr,
    'tr/ihbar-tazminati': ihbarTazminatiTr,
    'ihbar-tazminati-hesaplama': ihbarTazminatiTr,
    'tr/ihbar-tazminati-hesaplama': ihbarTazminatiTr,
    'kidem-ve-ihbar': kidemVeIhbarTr,
    'tr/kidem-ve-ihbar': kidemVeIhbarTr,
    'kidem-ve-ihbar-tazminati-hesaplama': kidemVeIhbarTr,
    'tr/kidem-ve-ihbar-tazminati-hesaplama': kidemVeIhbarTr,
    'brutten-nete-maas': bruttenNeteMaasTr,
    'tr/brutten-nete-maas': bruttenNeteMaasTr,
    'brutten-nete-maas-hesaplama': bruttenNeteMaasTr,
    'tr/brutten-nete-maas-hesaplama': bruttenNeteMaasTr,
    'netten-brute-maas': nettenBruteMaasTr,
    'tr/netten-brute-maas': nettenBruteMaasTr,
    'netten-brute-maas-hesaplama': nettenBruteMaasTr,
    'tr/netten-brute-maas-hesaplama': nettenBruteMaasTr,
    'asgari-ucret': asgariUcretTr,
    'tr/asgari-ucret': asgariUcretTr,
    'kidem-tazminati-tavani': kidemTazminatiTavaniTr,
    'tr/kidem-tazminati-tavani': kidemTazminatiTavaniTr,
    'gelir-vergisi-dilimleri': gelirVergisiDilimleriTr,
    'tr/gelir-vergisi-dilimleri': gelirVergisiDilimleriTr,
    // Turkey Salary & Tax Guides
    'rehber/istifa-eden-kidem-tazminati-alabilir-mi': guideTrIstifaEdenKidem,
    'tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi': guideTrIstifaEdenKidem,
    'rehber/kidem-tazminati-sartlari': guideTrKidemTazminatiSartlari,
    'tr/rehber/kidem-tazminati-sartlari': guideTrKidemTazminatiSartlari,
    'rehber/ihbar-suresi-nasil-hesaplanir': guideTrIhbarSuresi,
    'tr/rehber/ihbar-suresi-nasil-hesaplanir': guideTrIhbarSuresi,
    'rehber/evlilik-nedeniyle-kidem-tazminati': guideTrEvlilikKidemTazminati,
    'tr/rehber/evlilik-nedeniyle-kidem-tazminati': guideTrEvlilikKidemTazminati,
  },
  ro: {
    'iban-checker': ibanCheckerRo,
    'verificare-iban': ibanCheckerRo,
    'ro/verificare-iban': ibanCheckerRo,
    'calculator-tva': calculatorTvaRo,
    'ro/calculator-tva': calculatorTvaRo,
    // Romanian Salary & Tax Tools
    'calculator-salariu': contentRoCalculatorSalariu,
    'ro/calculator-salariu': contentRoCalculatorSalariu,
    'calculator-pfa-srl': contentRoCalculatorPfaSrl,
    'ro/calculator-pfa-srl': contentRoCalculatorPfaSrl,
    'salariul-minim': contentRoSalariulMinim,
    'ro/salariul-minim': contentRoSalariulMinim,
    'deducere-personala': contentRoDeducerePersonala,
    'ro/deducere-personala': contentRoDeducerePersonala,
    // Romanian Salary & Tax Guides
    'ghiduri/pfa-sau-srl': guideRoPfaSauSrl,
    'ro/ghiduri/pfa-sau-srl': guideRoPfaSauSrl,
    'ghiduri/cum-se-calculeaza-salariul-net': guideRoCumSeCalculeazaSalariulNet,
    'ro/ghiduri/cum-se-calculeaza-salariul-net': guideRoCumSeCalculeazaSalariulNet,
    'ghiduri/declaratia-unica-pfa': guideRoDeclaratiaUnicaPfa,
    'ro/ghiduri/declaratia-unica-pfa': guideRoDeclaratiaUnicaPfa,
  },
  fr: {
    'iban-checker': ibanCheckerFr,
    'verifier-iban': ibanCheckerFr,
    'fr/verifier-iban': ibanCheckerFr,
  },
  es: {
    'iban-checker': ibanCheckerEs,
    'validar-iban': ibanCheckerEs,
    'es/validar-iban': ibanCheckerEs,
  },
  it: {
    'iban-checker': ibanCheckerIt,
    'verifica-iban': ibanCheckerIt,
    'it/verifica-iban': ibanCheckerIt,
  },
  nl: {
    'iban-checker': ibanCheckerNl,
    'iban-controleren': ibanCheckerNl,
    'nl/iban-controleren': ibanCheckerNl,
  },
};

export function getPageContent<T = AnyPageContent>(
  lang: SupportedLang,
  slug: string,
): T | null {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, '');
  return (contentRegistry[lang]?.[cleanSlug] as unknown as T) || null;
}

export * from './types';
export {
  // Tools
  vatCalculatorEn,
  vatCalculatorUkEn,
  bicCheckerEn,
  ibanCheckerEn,
  mwstRechnerDe,
  ibanRechnerDe,
  blzSucheDe,
  bicCheckerDe,
  ibanCheckerDe,
  ibanCheckerPl,
  ibanCheckerTr,
  ibanCheckerRo,
  ibanCheckerFr,
  ibanCheckerEs,
  ibanCheckerIt,
  ibanCheckerNl,
  kalkulatorVatPl,
  kdvHesaplamaTr,
  calculatorTvaRo,
  // Fuel & Travel Tools
  schengenCalculatorEn,
  schengenGunHesaplamaTr,
  etiasEn,
  eesEntryExitEn,
  fuelCostUkEn,
  fuelCostAustraliaEn,
  fuelCostCanadaEn,
  spritkostenrechnerDe,
  mpgConverterEn,
  evVsPetrolEn,
  // Guides
  guideWhatIsAnIbanEn,
  guideIbanVsSwiftBicEn,
  guideHowToFindYourIbanEn,
  guideDeIbanAufbau,
  guideDeBlzBic,
  guideSchengenRuleExplainedEn,
  guideUkCitizensEuropeTravelEn,
  guideSchengenOverstayConsequencesEn,
  guideSchengenCountriesListEn,
  guideTrSchengenVizeRehberi,
  // Turkey Salary & Tax Tools
  kidemTazminatiTr,
  ihbarTazminatiTr,
  kidemVeIhbarTr,
  bruttenNeteMaasTr,
  nettenBruteMaasTr,
  asgariUcretTr,
  kidemTazminatiTavaniTr,
  gelirVergisiDilimleriTr,
  // Turkey Salary & Tax Guides
  guideTrIstifaEdenKidem,
  guideTrKidemTazminatiSartlari,
  guideTrIhbarSuresi,
  guideTrEvlilikKidemTazminati,
  // Poland Salary & Tax Tools
  contentPlKalkulatorWynagrodzen,
  contentPlKalkulatorB2b,
  contentPlPlacaMinimalna,
  contentPlSkladkiZus,
  contentPlProgiPodatkowe,
  // Poland Salary & Tax Guides
  guidePlB2bCzyUop,
  guidePlRyczaltCzyLiniowy,
  guidePlUlgaDlaMlodych,
  guidePlJakCzytacPasekWyplaty,
  // Romania Salary & Tax Tools
  contentRoCalculatorSalariu,
  contentRoCalculatorPfaSrl,
  contentRoSalariulMinim,
  contentRoDeducerePersonala,
  // Romania Salary & Tax Guides
  guideRoPfaSauSrl,
  guideRoCumSeCalculeazaSalariulNet,
  guideRoDeclaratiaUnicaPfa,
};
