import { navigate } from "../nav";
import { useLanguage } from "../i18n/LanguageContext";
import { privacyPathFor } from "../i18n/privacyRoutes";
import { termsPathFor } from "../i18n/termsRoutes";
import { aiTransparencyPathFor } from "../i18n/aiTransparencyRoutes";
import { impressumPathFor } from "../i18n/impressumRoutes";

type LegalLinksProps = {
  className?: string;
};

export default function LegalLinks({ className }: LegalLinksProps) {
  const { t, lang } = useLanguage();

  return (
    <div className={className ?? "legal-links"}>
      <button type="button" onClick={() => navigate(impressumPathFor(lang))}>
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
      <button
        type="button"
        onClick={() => navigate(aiTransparencyPathFor(lang))}
      >
        {t.aiTransparency}
      </button>
    </div>
  );
}
