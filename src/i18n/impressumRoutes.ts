import type { Lang } from "./dictionaries";

export const impressumPaths: Record<Lang, string> = {
  en: "/imprint",
  de: "/impressum",
  fr: "/imprint",
  es: "/imprint",
  it: "/imprint",
};

export const impressumTitles: Record<Lang, string> = {
  en: "Imprint",
  de: "Impressum",
  fr: "Imprint",
  es: "Imprint",
  it: "Imprint",
};

export function isImpressumPath(path: string): boolean {
  return Object.values(impressumPaths).includes(path);
}

export function langFromImpressumPath(path: string): Lang | null {
  const matches = Object.entries(impressumPaths).filter(([, p]) => p === path);
  if (matches.length !== 1) return null;
  return matches[0][0] as Lang;
}

export function impressumPathFor(lang: Lang): string {
  return impressumPaths[lang];
}
