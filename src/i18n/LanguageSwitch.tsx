import { languages } from "./dictionaries";
import { useLanguage } from "./LanguageContext";
import { navigate } from "../nav";
import {
  isPrivacyPath,
  privacyPathFor,
} from "./privacyRoutes";
import "./LanguageSwitch.css";

type LanguageSwitchProps = {
  tone?: "light" | "dark";
};

export default function LanguageSwitch({ tone = "light" }: LanguageSwitchProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={
        tone === "dark" ? "lang-switch lang-switch-dark" : "lang-switch"
      }
      role="group"
      aria-label="Language"
    >
      {languages.map((item, index) => (
        <span key={item.id} className="lang-switch-item">
          {index > 0 ? <span className="lang-switch-sep" aria-hidden="true">·</span> : null}
          <button
            type="button"
            className={lang === item.id ? "is-active" : undefined}
            onClick={() => {
              setLang(item.id);
              if (isPrivacyPath(window.location.pathname)) {
                navigate(privacyPathFor(item.id));
              }
            }}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}
