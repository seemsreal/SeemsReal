import { useEffect, useState, useSyncExternalStore } from "react";
import Landing from "./pages/Landing";
import Studio from "./pages/Studio";
import {
  AiTransparency,
  Datenschutz,
  Impressum,
  Terms,
} from "./pages/Legal";
import { isPrivacyPath } from "./i18n/privacyRoutes";
import { isTermsPath } from "./i18n/termsRoutes";
import { isAiTransparencyPath } from "./i18n/aiTransparencyRoutes";
import { isImpressumPath } from "./i18n/impressumRoutes";
import {
  applyPreviewFromUrl,
  hasPreviewAccess,
  PREVIEW_KEY,
} from "./preview";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getPath() {
  return window.location.pathname;
}

export default function App() {
  const path = useSyncExternalStore(subscribe, getPath, () => "/");
  const [unlocked, setUnlocked] = useState(hasPreviewAccess);

  useEffect(() => {
    setUnlocked(applyPreviewFromUrl());
  }, [path]);

  if (isImpressumPath(path)) {
    return <Impressum />;
  }

  if (isPrivacyPath(path)) {
    return <Datenschutz />;
  }

  if (isTermsPath(path)) {
    return <Terms />;
  }

  if (isAiTransparencyPath(path)) {
    return <AiTransparency />;
  }

  const previewQuery =
    new URLSearchParams(window.location.search).get("preview") === PREVIEW_KEY;

  if (unlocked && (path === "/studio" || previewQuery)) {
    return <Studio />;
  }

  return <Landing hasAccess={unlocked} />;
}
