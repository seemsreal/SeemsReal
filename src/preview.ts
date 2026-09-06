const STORAGE_KEY = "seemsreal-preview";
export const PREVIEW_KEY = "lookbook";

export function hasPreviewAccess(): boolean {
  if (typeof window === "undefined") return false;
  const given = new URLSearchParams(window.location.search).get("preview");
  if (given === PREVIEW_KEY) return true;
  if (given === "off") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "1";
}

/** Persist ?preview=… and strip it from the URL. Call from an effect. */
export function applyPreviewFromUrl(): boolean {
  const params = new URLSearchParams(window.location.search);
  const given = params.get("preview");
  if (!given) {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  }

  params.delete("preview");
  const suffix = params.toString() ? `?${params.toString()}` : "";

  if (given === PREVIEW_KEY) {
    window.localStorage.setItem(STORAGE_KEY, "1");
    window.history.replaceState({}, "", `/studio${suffix}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
    return true;
  }

  if (given === "off") {
    window.localStorage.removeItem(STORAGE_KEY);
    window.history.replaceState({}, "", `/${suffix}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
    return false;
  }

  return window.localStorage.getItem(STORAGE_KEY) === "1";
}
