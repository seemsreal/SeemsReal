import { useSyncExternalStore } from "react";
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

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getPath() {
  return window.location.pathname;
}

export default function App() {
  const path = useSyncExternalStore(subscribe, getPath, () => "/");

  if (path === "/studio") {
    return <Studio />;
  }

  if (path === "/impressum") {
    return <Impressum />;
  }

  if (isPrivacyPath(path)) {
    return <Datenschutz />;
  }

  if (isTermsPath(path)) {
    return <Terms />;
  }

  if (path === "/ai-transparency") {
    return <AiTransparency />;
  }

  return <Landing />;
}
