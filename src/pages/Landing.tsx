import { navigate } from "../nav";
import LanguageSwitch from "../i18n/LanguageSwitch";
import { useLanguage } from "../i18n/LanguageContext";
import LegalLinks from "../components/LegalLinks";
import "../components/LegalLinks.css";
import "./Landing.css";

const INSTAGRAM_URL = "https://www.instagram.com/seemsreal.studio/";

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
        <a
          className="landing-instagram"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
            />
          </svg>
        </a>
      </section>

      <footer className="landing-legal">
        <LegalLinks />
      </footer>
    </div>
  );
}
