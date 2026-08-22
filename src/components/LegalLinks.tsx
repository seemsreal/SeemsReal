import { navigate } from "../nav";
import { useLanguage } from "../i18n/LanguageContext";
import { privacyPathFor } from "../i18n/privacyRoutes";
import { termsPathFor } from "../i18n/termsRoutes";

type LegalLinksProps = {
  className?: string;
};

export default function LegalLinks({ className }: LegalLinksProps) {
  const { t, lang } = useLanguage();

  return (
    <div className={className ?? "legal-links"}>
      <button type="button" onClick={() => navigate("/impressum")}>
        {t.imprint}
      </button>
      <span aria-hidden="true">·</span>
      <button type="button" onClick={() => navigate(privacyPathFor(lang))}>
        {t.privacy}
      </button>
      <span aria-hidden="true">·</span>
      <button type="button" onClick={() => navigate(termsPathFor(lang))}>
        {t.terms}
      </button>
      <span aria-hidden="true">·</span>
      <button type="button" onClick={() => navigate("/ai-transparency")}>
        {t.aiTransparency}
      </button>
    </div>
  );
}
