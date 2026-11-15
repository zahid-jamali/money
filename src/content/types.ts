export interface ArticleSection {
  id: string;
  title: string;
  level: 2 | 3;
  content: string;
}

export interface WorkedExampleField {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface WorkedExample {
  title: string;
  scenario: string;
  calculationType?: 'add' | 'remove' | 'verify' | 'custom';
  inputAmount?: number;
  rate?: number;
  resultVat?: number;
  resultTotal?: number;
  customFields?: WorkedExampleField[];
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SourceCitation {
  label: string;
  url: string;
}

export interface RelatedItem {
  title: string;
  slug: string;
  description: string;
  category: string;
}

export interface HowItCalculatedStep {
  label: string;
  formula: string;
  ruleCitation: string;
  effectiveDate: string;
}

export interface PageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quickAnswer: string;
  howItWorks: HowItCalculatedStep[];
  articleSections: ArticleSection[];
  examples: WorkedExample[];
  faqs: FaqItem[];
  sources: SourceCitation[];
  relatedTools: RelatedItem[];
  relatedGuides: RelatedItem[];
  updatedAt: string;
  disclaimer?: string;
}

export interface GuideCtaConfig {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  badge?: string;
}

export interface GuideContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  readTimeMinutes?: number;
  articleSections: ArticleSection[];
  faqs: FaqItem[];
  sources: SourceCitation[];
  cta: GuideCtaConfig;
  relatedTools: RelatedItem[];
  relatedGuides: RelatedItem[];
  updatedAt: string;
  disclaimer?: string;
}
