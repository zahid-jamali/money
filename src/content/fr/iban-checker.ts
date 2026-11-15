import { PageContent } from '../types';

export const ibanCheckerFr: PageContent = {
  metaTitle: 'Vérificateur IBAN 2026 | Valider un compte bancaire',
  metaDescription:
    'Vérifiez la validité d\'un IBAN français ou international. Calcul de clé Mod-97 ISO 13616, clé RIB Banque de France, identification de banque et SEPA.',
  h1: 'Vérificateur IBAN et Compte Bancaire 2026',
  quickAnswer:
    'La validation d\'un IBAN (International Bank Account Number) s\'effectue en trois étapes : le contrôle de la longueur nationale (27 caractères pour la France), le déplacement des quatre premiers caractères en fin de chaîne, la conversion des lettres en chiffres (A=10 à Z=35) et le calcul du reste modulo 97 selon la norme ISO 13616. Un IBAN valide produit obligatoirement un reste égal à 1.',
  howItWorks: [
    {
      label: 'Contrôle du format et de la longueur',
      formula: 'Longueur(IBAN) == 27 (pour FR) && Regex(FormatNational)',
      ruleCitation: 'Norme ISO 13616-1:2020 / Règles CFONB Banque de France',
      effectiveDate: 'Standard bancaire harmonisé en vigueur en 2026',
    },
    {
      label: 'Transposition des caractères d\'en-tête',
      formula: 'ChaîneTransposée = BBAN + "FR" + CléIBAN',
      ruleCitation: 'ISO 13616-1 Clause 5.2 (Transformation de permutation)',
      effectiveDate: 'Règle stricte appliquée sur tous les réseaux de compensation',
    },
    {
      label: 'Calcul du checksum ISO 7064 Mod-97-10',
      formula: 'NombreEntier mod 97 == 1 (F=15, R=27)',
      ruleCitation: 'ISO/IEC 7064:2003 (Systèmes de caractères de contrôle)',
      effectiveDate: 'Algorithme mathématique garantissant la détection des fautes de frappe',
    },
    {
      label: 'Validation de la clé RIB nationale',
      formula: 'CléRIB = 97 - ((89·Banque + 15·Guichet + 3·Compte) mod 97)',
      ruleCitation: 'Comité français d\'organisation et de normalisation bancaires (CFONB)',
      effectiveDate: 'Double contrôle algorithmique propre aux comptes bancaires français',
    },
  ],
  articleSections: [
    {
      id: 'quest-ce-que-iban-en-france',
      title: 'Qu’est-ce qu’un IBAN et comment a-t-il succédé au RIB en France ?',
      level: 2,
      content:
        'L’IBAN (International Bank Account Number) est une norme internationale créée par l’Organisation internationale de normalisation (ISO 13616) et le Comité européen des standards bancaires pour harmoniser l’identification des comptes à l’échelle mondiale et sécuriser les transferts de fonds.\n\nEn France, l’IBAN a progressivement remplacé le Relevé d’Identité Bancaire (RIB) traditionnel lors du passage à l’espace unique de paiement en euros (SEPA). Auparavant, les transferts nationaux s’appuyaient sur le RIB, qui comportait 23 caractères (code banque à 5 chiffres, code guichet à 5 chiffres, numéro de compte à 11 caractères et clé RIB à 2 chiffres). L’IBAN français intègre exactement l’intégralité de cet ancien RIB national, en y ajoutant simplement le préfixe international composé du code pays `FR` et d’une clé de contrôle à 2 chiffres, portant ainsi la longueur totale à 27 caractères. Cette structure normalisée permet un traitement automatisé de bout en bout (STP – Straight-Through Processing) sur l’ensemble des réseaux interbancaires européens, garantissant la distribution sans faille des salaires, prélèvements et prestations sociales.',
    },
    {
      id: 'fonctionnement-algorithme-mod-97',
      title: 'Le fonctionnement de l’algorithme Mod-97 (ISO 7064) étape par étape',
      level: 2,
      content:
        'La robustesse de la validation de l’IBAN repose sur l’algorithme mathématique ISO 7064 Modulo 97-10, capable de détecter plus de 99,99 % des erreurs humaines, notamment les inversions de chiffres ou les frappes erronées :\n\n1. **Contrôle de la longueur** : Le validateur s’assure que l’IBAN saisi respecte rigoureusement la taille officielle du pays (exactement 27 caractères en France et à Monaco, 22 en Allemagne, 20 en Autriche et 22 au Royaume-Uni).\n\n2. **Permutation des 4 premiers caractères** : Les quatre premiers caractères (le code pays `FR` et la clé de contrôle, par exemple `FR76`) sont basculés à la toute fin de la séquence. L’IBAN `FR76 3000 6000 0112 3456 7890 189` devient `30006000011234567890189FR76`.\n\n3. **Conversion des lettres en nombres** : Chaque caractère alphabétique est transformé en valeur numérique selon son rang (A=10, B=11 ... Z=35). Pour la France, la lettre `F` devient `15` et la lettre `R` devient `27`. La séquence devient un entier gigantesque de plus de 30 chiffres.\n\n4. **Division modulo 97** : Ce très grand nombre est divisé par 97 selon les règles de l’arithmétique modulaire. Si et seulement si le reste final de la division est strictement égal à 1, l’IBAN est considéré comme valide et intègre.',
    },
    {
      id: 'structure-iban-francais',
      title: 'Structure détaillée de l’IBAN français : Du code banque à la clé RIB',
      level: 2,
      content:
        'L’IBAN d’un compte bancaire domicilié en France comprend obligatoirement 27 caractères organisés comme suit :\n\n- **Caractères 1–2 (Code pays)** : `FR` conformément à la norme ISO 3166-1 alpha-2.\n- **Caractères 3–4 (Clé de contrôle IBAN)** : 2 chiffres calculés par la formule Mod-97.\n- **Caractères 5–9 (Code établissement / banque - 5 chiffres)** : Identifie la banque auprès de la Banque de France. Par exemple : `30003` pour Société Générale, `30004` pour BNP Paribas, `30002` pour Crédit Lyonnais (LCL), `10278` pour La Banque Postale, `30066` pour Crédit Mutuel, `10107` pour la Banque Populaire, `11475` pour la Caisse d’Épargne, ou `17515` pour BoursoBank.\n- **Caractères 10–14 (Code guichet - 5 chiffres)** : Identifie l’agence ou la succursale locale tenant le compte.\n- **Caractères 15–25 (Numéro de compte - 11 chiffres ou lettres)** : Le numéro propre du titulaire, complété si nécessaire par des zéros à gauche. Si des lettres figurent dans le numéro de compte, elles sont converties selon la table officielle française de l’AFB.\n- **Caractères 26–27 (Clé RIB nationale - 2 chiffres)** : Clé de sécurité pondérée historique française calculée selon la formule `97 - ((89·Banque + 15·Guichet + 3·Compte) mod 97)`.\n\nCette double sécurité (clé RIB nationale + clé internationale Mod-97) fait de l’IBAN français l’un des plus sécurisés au monde.',
    },
    {
      id: 'virements-sepa-vs-swift',
      title: 'Virements SEPA (classique et instantané) versus virements internationaux SWIFT',
      level: 2,
      content:
        'Dans le cadre de vos paiements, l’utilisation de l’IBAN varie selon la destination géographique des fonds :\n\n- **Espace SEPA (Single Euro Payments Area)** : Regroupant 36 pays européens, la zone SEPA permet d’effectuer des virements bancaires en euros sous les mêmes conditions tarifaires et juridiques qu’un virement domestique. Grâce à la règle européenne « IBAN Only » issue du règlement (UE) n° 260/2012, les banques ont l’interdiction formelle d’exiger le code BIC/SWIFT pour les virements en euros au sein du réseau SEPA.\n- **Virement instantané SEPA (Instant Payment)** : Ce service permet de transférer des fonds d’un compte à un autre en moins de 10 secondes, disponible 24h/24 et 7j/7, au tarif standard sans surcoût abusif.\n- **Virements internationaux hors zone SEPA** : Pour des transferts en devises étrangères (dollars USD, livres GBP, etc.) ou hors d’Europe, le code BIC (Bank Identifier Code) ou code SWIFT reste indispensable en complément de l’IBAN pour acheminer les fonds via le réseau de correspondants internationaux.',
    },
    {
      id: 'erreurs-et-prevention-des-fraudes',
      title: 'Erreurs de saisie courantes, vérification du bénéficiaire et protection contre la fraude au RIB',
      level: 2,
      content:
        'Pour éviter les rejets de virement ou les escroqueries aux faux ordres de virement (FOVI) :\n\n- **Attention à la confusion entre O et 0** : Seules les lettres `FR` apparaissent au début, les deux caractères suivants étant toujours des chiffres.\n- **Vérification du nom du bénéficiaire (Verification of Payee)** : La réglementation bancaire européenne généralise le contrôle automatisé de concordance entre le titulaire du compte et l’IBAN lors de la saisie d’un nouvel ordre, alertant immédiatement l’utilisateur en cas de disparité.\n- **La fraude au faux RIB** : Avant d’exécuter un paiement d’un montant significatif suite à la réception d’un RIB par e-mail, effectuez systématiquement une confirmation téléphonique auprès de votre fournisseur habituel en utilisant son numéro de téléphone officiel.\n- **Prélèvements SEPA et contestation** : En cas de prélèvement direct contesté sur votre IBAN, vous disposez d’un délai légal de 8 semaines pour demander le remboursement sans justification à votre banque.\n- **Vérification en temps réel** : Utilisez toujours un outil de validation automatique avant d’enregistrer un nouveau RIB dans votre espace bancaire pour éliminer toute faute de frappe.',
    },
  ],
  examples: [
    {
      title: 'Exemple 1 : Validation d’un compte BNP Paribas',
      scenario:
        'Une entreprise contrôle l’IBAN FR76 3000 4000 0112 3456 7890 143 figurant sur une facture de prestation informatique.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN analysé', value: 'FR76 3000 4000 0112 3456 7890 143' },
        { label: 'Pays et longueur', value: 'France (FR) — 27 caractères' },
        { label: 'Établissement bancaire', value: '30004 (BNP Paribas SA)' },
        { label: 'Code guichet', value: '00001' },
        { label: 'Numéro de compte', value: '12345678901' },
        { label: 'Clé RIB nationale', value: '43 (Vérifiée par algorithme CFONB)' },
        { label: 'Clé internationale Mod-97', value: '76 (Reste égal à 1)', highlight: true },
        { label: 'Statut SEPA', value: 'Éligible virements SEPA et virements instantanés' },
      ],
      explanation:
        'Le système extrait le code banque 30004 (BNP Paribas), valide la clé RIB 43 et confirme que la clé 76 produit un reste de 1 lors de la division modulaire par 97.',
    },
    {
      title: 'Exemple 2 : Validation d’un compte Société Générale',
      scenario:
        'Vérification des coordonnées bancaires d’un compte Société Générale avec l’IBAN FR14 3000 3000 2001 2345 6789 058.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN analysé', value: 'FR14 3000 3000 2001 2345 6789 058' },
        { label: 'Pays et longueur', value: 'France (FR) — 27 caractères' },
        { label: 'Établissement', value: '30003 (Société Générale)' },
        { label: 'Code guichet', value: '00020' },
        { label: 'Clé RIB', value: '58' },
        { label: 'Résultat Modulo 97', value: '1 (Algorithme validé avec succès)', highlight: true },
        { label: 'Code BIC / SWIFT', value: 'SOGEFRPP' },
      ],
      explanation:
        'Le validateur reconnaît la banque Société Générale via le code 30003 et certifie la conformité de l’intégralité des 27 caractères aux spécifications ISO 13616.',
    },
  ],
  faqs: [
    {
      q: 'Que signifie le sigle IBAN ?',
      a: 'IBAN signifie « International Bank Account Number » (numéro de compte bancaire international). Il s\'agit d\'une norme internationale conçue pour sécuriser et accélérer les transactions financières entre banques.',
    },
    {
      q: 'Combien de caractères comporte un IBAN français ?',
      a: 'Un IBAN français comporte obligatoirement et sans exception 27 caractères : les lettres FR, 2 chiffres de contrôle international, puis les 23 caractères du RIB national.',
    },
    {
      q: 'Est-il dangereux de communiquer son IBAN ?',
      a: 'Communiquer son IBAN comporte peu de risques pour recevoir un paiement. Toutefois, il est recommandé de surveiller ses relevés bancaires pour éviter les prélèvements frauduleux et de ne jamais transmettre ses identifiants de connexion.',
    },
    {
      q: 'Cet outil de vérification d’IBAN est-il sécurisé ?',
      a: 'Oui, totalement. Les vérifications s\'exécutent exclusivement dans votre navigateur via JavaScript. Aucun numéro de compte n\'est transmis sur un réseau ni enregistré sur un serveur.',
    },
    {
      q: 'Comment retrouver sa banque à partir de son IBAN ?',
      a: 'En France, les caractères 5 à 9 de l\'IBAN correspondent au code banque officiel à 5 chiffres. Par exemple, 30004 correspond à BNP Paribas et 30003 à la Société Générale.',
    },
    {
      q: 'Quelle est la différence entre un IBAN et un code SWIFT / BIC ?',
      a: 'L\'IBAN identifie de manière unique le compte d\'un particulier ou d\'une entreprise, tandis que le code BIC/SWIFT identifie l\'établissement financier au sein du réseau bancaire international.',
    },
    {
      q: 'Un IBAN valide garantit-il que le compte est actif ?',
      a: 'Non. La vérification confirme la validité mathématique et structurelle du numéro selon les normes bancaires, mais elle ne permet pas d\'interroger le registre interne de la banque pour certifier que le compte est ouvert.',
    },
    {
      q: 'Peut-on tester plusieurs numéros IBAN en même temps ?',
      a: 'Oui. Notre vérificateur prend en charge le traitement par lot jusqu\'à 50 IBAN simultanément. Collez simplement votre liste avec un IBAN par ligne pour obtenir un bilan complet.',
    },
    {
      q: 'Qu’est-ce que la règle « IBAN Only » dans la zone SEPA ?',
      a: 'Selon le règlement européen n° 260/2012, les banques de l\'espace SEPA ne peuvent plus exiger de code BIC pour les virements en euros. L\'IBAN est le seul identifiant requis.',
    },
  ],
  sources: [
    {
      label: 'Banque de France : Systèmes de paiement et normes SEPA',
      url: 'https://www.banque-france.fr/stabilite-financiere/securite-des-moyens-de-paiement',
    },
    {
      label: 'CFONB : Comité français d\'organisation et de normalisation bancaires',
      url: 'https://www.cfonb.org',
    },
    {
      label: 'Banque centrale européenne (BCE) : Réglementation SEPA',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.fr.html',
    },
    {
      label: 'SWIFT : Registre officiel des structures IBAN internationales',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
  ],
  relatedTools: [
    {
      title: 'Vérificateur BIC / SWIFT',
      slug: 'bic-swift-checker',
      description: 'Validez les identifiants bancaires internationaux de 8 et 11 caractères selon l\'ISO 9362.',
      category: 'Banque',
    },
    {
      title: 'Calculateur de TVA Européenne',
      slug: 'vat-calculator',
      description: 'Calculer la TVA à 20 %, 10 % et 5,5 % pour vos factures d\'entreprises et freelances.',
      category: 'Taxes & TVA',
    },
    {
      title: 'Calculateur MwSt Allemagne',
      slug: 'de/mwst-rechner',
      description: 'Calcul de la taxe sur la valeur ajoutée allemande à 19 % et 7 % pour vos échanges transfrontaliers.',
      category: 'Taxes & TVA',
    },
  ],
  relatedGuides: [
    {
      title: 'Tout savoir sur l’IBAN : Histoire, structure et utilisation',
      slug: 'guides/what-is-an-iban',
      description: 'Guide complet pour comprendre la composition et la sécurisation des coordonnées bancaires.',
      category: 'Banque',
    },
    {
      title: 'Différence entre IBAN et BIC : Quand les utiliser ?',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Comprendre les spécificités des virements SEPA et des virements internationaux SWIFT.',
      category: 'Banque',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Cet outil de validation d\'IBAN est fourni à titre indicatif et pour un contrôle formel préalable. Bien qu\'il applique l\'ensemble des contrôles ISO 13616 et CFONB, il ne peut garantir l\'état actif du compte bancaire ni l\'identité de son titulaire. Vérifiez toujours vos coordonnées auprès de votre agence bancaire ou du destinataire avant de valider un virement d\'un montant significatif.',
};
