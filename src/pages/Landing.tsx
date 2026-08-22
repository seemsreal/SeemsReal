import { navigate } from "../nav";
import LanguageSwitch from "../i18n/LanguageSwitch";
import { useLanguage } from "../i18n/LanguageContext";
import LegalLinks from "../components/LegalLinks";
import "../components/LegalLinks.css";
import "./Landing.css";

export default function Landing() {
  const { t } = useLanguage();

  return (
    <div className="landing">
      <div className="landing-lang">
        <LanguageSwitch tone="dark" />
      </div>

      <section className="landing-hero" aria-label="SEEMS REAL Studio">
        <h1 className="landing-brand">SEEMS REAL</h1>
        <p className="landing-sub">Studio</p>
        <button
          type="button"
          className="landing-enter"
          onClick={() => navigate("/studio")}
        >
          {t.landingCta}
        </button>
      </section>

      <footer className="landing-legal">
        <LegalLinks />
      </footer>
    </div>
  );
}
