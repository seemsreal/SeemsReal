import type { Lang } from "./dictionaries";

export const termsPaths: Record<Lang, string> = {
  en: "/terms",
  de: "/agb",
  fr: "/conditions-generales",
  es: "/terminos",
  it: "/termini",
};

export const termsTitles: Record<Lang, string> = {
  en: "Terms & Conditions",
  de: "Allgemeine Geschäftsbedingungen",
  fr: "Conditions Générales",
  es: "Términos y Condiciones",
  it: "Termini e Condizioni",
};

export function isTermsPath(path: string): boolean {
  return Object.values(termsPaths).includes(path);
}

export function langFromTermsPath(path: string): Lang | null {
  const entry = Object.entries(termsPaths).find(([, p]) => p === path);
  return entry ? (entry[0] as Lang) : null;
}

export function termsPathFor(lang: Lang): string {
  return termsPaths[lang];
}
