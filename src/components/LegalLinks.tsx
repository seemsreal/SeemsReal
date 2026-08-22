import { navigate } from "../nav";
import { useLanguage } from "../i18n/LanguageContext";

type LegalLinksProps = {
  className?: string;
};

export default function LegalLinks({ className }: LegalLinksProps) {
  const { t } = useLanguage();

  return (
    <div className={className ?? "legal-links"}>
      <button type="button" onClick={() => navigate("/impressum")}>
        {t.imprint}
      </button>
      <span aria-hidden="true">·</span>
      <button type="button" onClick={() => navigate("/datenschutz")}>
        {t.privacy}
      </button>
      <span aria-hidden="true">·</span>
      <button type="button" onClick={() => navigate("/terms")}>
        {t.terms}
      </button>
      <span aria-hidden="true">·</span>
      <button type="button" onClick={() => navigate("/ai-transparency")}>
        {t.aiTransparency}
      </button>
    </div>
  );
}
