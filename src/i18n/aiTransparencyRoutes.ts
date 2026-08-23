import type { Lang } from "./dictionaries";

export const aiTransparencyPaths: Record<Lang, string> = {
  en: "/ai-transparency",
  de: "/ki-transparenz",
  fr: "/ai-transparency",
  es: "/transparencia-ia",
  it: "/trasparenza-ia",
};

export const aiTransparencyTitles: Record<Lang, string> = {
  en: "AI Transparency",
  de: "KI-Transparenz",
  fr: "AI Transparency",
  es: "Transparencia sobre IA",
  it: "Trasparenza sull’IA",
};

export function isAiTransparencyPath(path: string): boolean {
  return Object.values(aiTransparencyPaths).includes(path);
}

export function langFromAiTransparencyPath(path: string): Lang | null {
  const matches = Object.entries(aiTransparencyPaths).filter(([, p]) => p === path);
  if (matches.length !== 1) return null;
  return matches[0][0] as Lang;
}

export function aiTransparencyPathFor(lang: Lang): string {
  return aiTransparencyPaths[lang];
}
