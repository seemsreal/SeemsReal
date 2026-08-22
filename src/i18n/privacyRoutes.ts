import type { Lang } from "./dictionaries";

export const privacyPaths: Record<Lang, string> = {
  en: "/privacy",
  de: "/datenschutz",
  fr: "/confidentialite",
  es: "/privacidad",
  it: "/informativa-privacy",
};

export const privacyTitles: Record<Lang, string> = {
  en: "Privacy",
  de: "Datenschutzerklärung",
  fr: "Politique de confidentialité",
  es: "Política de Privacidad",
  it: "Informativa sulla Privacy",
};

export function isPrivacyPath(path: string): boolean {
  return Object.values(privacyPaths).includes(path);
}

export function langFromPrivacyPath(path: string): Lang | null {
  const entry = Object.entries(privacyPaths).find(([, p]) => p === path);
  return entry ? (entry[0] as Lang) : null;
}

export function privacyPathFor(lang: Lang): string {
  return privacyPaths[lang];
}
