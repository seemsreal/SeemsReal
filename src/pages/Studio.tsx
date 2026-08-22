import { useState } from "react";
import { navigate } from "../nav";
import LanguageSwitch from "../i18n/LanguageSwitch";
import { useLanguage } from "../i18n/LanguageContext";
import type { Dictionary } from "../i18n/dictionaries";
import "./Studio.css";

type CategoryId = "all" | "swimwear" | "beauty" | "jewelry" | "fashion";

type WorkItem = {
  id: string;
  category: Exclude<CategoryId, "all">;
  image: string;
  aiModel?: boolean;
  titleKey: "catSwimwear" | "catBeauty" | "catJewelry" | "catFashion";
  metaKey: "metaFilm" | "metaIoni" | "metaEditorial" | "metaProduct" | "metaAi" | "metaStillLife";
};

const categoryIds: { id: CategoryId; labelKey: keyof Dictionary }[] = [
  { id: "all", labelKey: "catAll" },
  { id: "fashion", labelKey: "catFashion" },
  { id: "swimwear", labelKey: "catSwimwear" },
  { id: "beauty", labelKey: "catBeauty" },
  { id: "jewelry", labelKey: "catJewelry" },
];

const work: WorkItem[] = [
  {
    id: "fashion-1",
    category: "fashion",
    image: "/work/fashion-01.png",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "fashion-2",
    category: "fashion",
    image: "/work/fashion-02.png",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "fashion-3",
    category: "fashion",
    image: "/work/fashion-03.png?v=2",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "fashion-4",
    category: "fashion",
    image: "/work/fashion-04.png",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "fashion-7",
    category: "fashion",
    image: "/work/fashion-07.png",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "fashion-8",
    category: "fashion",
    image: "/work/fashion-08.png",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "fashion-9",
    category: "fashion",
    image: "/work/fashion-09.png",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "fashion-10",
    category: "fashion",
    image: "/work/fashion-10.png",
    aiModel: true,
    titleKey: "catFashion",
    metaKey: "metaEditorial",
  },
  {
    id: "swimwear-1",
    category: "swimwear",
    image: "/work/swimwear-01.png",
    aiModel: true,
    titleKey: "catSwimwear",
    metaKey: "metaIoni",
  },
  {
    id: "swimwear-2",
    category: "swimwear",
    image: "/work/swimwear-02.png?v=2",
    aiModel: true,
    titleKey: "catSwimwear",
    metaKey: "metaEditorial",
  },
  {
    id: "swimwear-3",
    category: "swimwear",
    image: "/work/swimwear-03.png",
    aiModel: true,
    titleKey: "catSwimwear",
    metaKey: "metaEditorial",
  },
  {
    id: "swimwear-4",
    category: "swimwear",
    image: "/work/swimwear-04.png",
    aiModel: true,
    titleKey: "catSwimwear",
    metaKey: "metaEditorial",
  },
  {
    id: "swimwear-5",
    category: "swimwear",
    image: "/work/swimwear-05.png",
    aiModel: true,
    titleKey: "catSwimwear",
    metaKey: "metaEditorial",
  },
  {
    id: "swimwear-6",
    category: "swimwear",
    image: "/work/swimwear-06.png",
    aiModel: true,
    titleKey: "catSwimwear",
    metaKey: "metaEditorial",
  },
  {
    id: "beauty-1",
    category: "beauty",
    image: "/work/verdelie-jar.png",
    aiModel: true,
    titleKey: "catBeauty",
    metaKey: "metaStillLife",
  },
  {
    id: "beauty-2",
    category: "beauty",
    image: "/work/beauty-02.png",
    aiModel: true,
    titleKey: "catBeauty",
    metaKey: "metaEditorial",
  },
  {
    id: "beauty-3",
    category: "beauty",
    image: "/work/beauty-03.png",
    aiModel: true,
    titleKey: "catBeauty",
    metaKey: "metaEditorial",
  },
  {
    id: "beauty-4",
    category: "beauty",
    image: "/work/beauty-04.png",
    aiModel: true,
    titleKey: "catBeauty",
    metaKey: "metaStillLife",
  },
  {
    id: "beauty-5",
    category: "beauty",
    image: "/work/beauty-05.png",
    aiModel: true,
    titleKey: "catBeauty",
    metaKey: "metaEditorial",
  },
  {
    id: "beauty-6",
    category: "beauty",
    image: "/work/beauty-06.png",
    aiModel: true,
    titleKey: "catBeauty",
    metaKey: "metaEditorial",
  },
  {
    id: "jewelry-1",
    category: "jewelry",
    image: "/work/jewelry-01b.png?v=3",
    aiModel: true,
    titleKey: "catJewelry",
    metaKey: "metaProduct",
  },
  {
    id: "jewelry-2",
    category: "jewelry",
    image: "/work/jewelry-02.png",
    aiModel: true,
    titleKey: "catJewelry",
    metaKey: "metaProduct",
  },
  {
    id: "jewelry-3",
    category: "jewelry",
    image: "/work/fashion-jewelry-01.png",
    aiModel: true,
    titleKey: "catJewelry",
    metaKey: "metaProduct",
  },
  {
    id: "jewelry-4",
    category: "jewelry",
    image: "/work/jewelry-04.png",
    aiModel: true,
    titleKey: "catJewelry",
    metaKey: "metaStillLife",
  },
];

export default function Studio() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<CategoryId>("all");

  const visible =
    category === "all"
      ? (["swimwear", "beauty", "jewelry"] as const)
          .map((cat) => work.find((item) => item.category === cat))
          .filter((item): item is WorkItem => Boolean(item))
      : work.filter((item) => item.category === category);

  const gridClass =
    category === "all" ? "studio-grid studio-grid-all" : "studio-grid";

  return (
    <div className="studio">
      <header className="studio-nav">
        <div className="studio-nav-left">
          <LanguageSwitch tone="dark" />
        </div>
        <button
          type="button"
          className="studio-brand"
          onClick={() => navigate("/")}
        >
          SEEMS REAL
        </button>
        <nav className="studio-links" aria-label="Primary">
          <a href="#work">{t.navWork}</a>
          <a href="#offer">{t.navOffer}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
      </header>

      <main>
        <section className="studio-intro">
          <p className="studio-label">{t.whatWeDo}</p>
          <h1>
            <span className="studio-headline-a">{t.headlineLine1}</span>
            <span className="studio-headline-b">{t.headlineLine2}</span>
          </h1>
          <p className="studio-lede">
            <span className="studio-lede-a">{t.ledeLead}</span>
            <span className="studio-lede-b">{t.ledeRest}</span>
            <span className="studio-lede-c">{t.ledeClose}</span>
          </p>
        </section>

        <section id="work" className="studio-work">
          <div className="studio-work-head">
            <p className="studio-label">{t.selectedWork}</p>
            <div
              className="studio-filters"
              role="tablist"
              aria-label="Work categories"
            >
              {categoryIds.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={category === item.id}
                  className={
                    category === item.id
                      ? "studio-filter is-active"
                      : "studio-filter"
                  }
                  onClick={() => setCategory(item.id)}
                >
                  {t[item.labelKey]}
                </button>
              ))}
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="studio-work-empty">{t.workEmpty}</p>
          ) : (
            <div className={gridClass}>
              {visible.map((item) => (
                <article
                  key={item.id}
                  className={
                    category === "all"
                      ? "studio-item studio-item-link"
                      : "studio-item"
                  }
                >
                  {category === "all" ? (
                    <button
                      type="button"
                      className="studio-item-hit"
                      onClick={() => setCategory(item.category)}
                      aria-label={t[item.titleKey]}
                    >
                      <div className="studio-image">
                        <img src={item.image} alt={t[item.titleKey]} />
                        {item.aiModel ? (
                          <span className="studio-ai-tag">
                            {item.category === "swimwear" ? t.aiTag : t.metaAi}
                          </span>
                        ) : null}
                      </div>
                      <div className="studio-meta">
                        <h2>{t[item.titleKey]}</h2>
                        {item.metaKey === "metaIoni" ? (
                          <div className="studio-meta-stack">
                            <span>{t.metaIoniClient}</span>
                            <span>{t.metaIoniDirection}</span>
                          </div>
                        ) : item.metaKey !== "metaAi" ? (
                          <span>
                            {t[
                              item.metaKey as
                                | "metaFilm"
                                | "metaEditorial"
                                | "metaProduct"
                                | "metaStillLife"
                            ]}
                          </span>
                        ) : null}
                      </div>
                    </button>
                  ) : (
                    <>
                      <div className="studio-image">
                        <img src={item.image} alt={t[item.titleKey]} />
                        {item.aiModel ? (
                          <span className="studio-ai-tag">
                            {item.category === "swimwear" ? t.aiTag : t.metaAi}
                          </span>
                        ) : null}
                      </div>
                      <div className="studio-meta">
                        <h2>{t[item.titleKey]}</h2>
                        {item.metaKey === "metaIoni" ? (
                          <div className="studio-meta-stack">
                            <span>{t.metaIoniClient}</span>
                            <span>{t.metaIoniDirection}</span>
                          </div>
                        ) : item.metaKey !== "metaAi" ? (
                          <span>
                            {t[
                              item.metaKey as
                                | "metaFilm"
                                | "metaEditorial"
                                | "metaProduct"
                                | "metaStillLife"
                            ]}
                          </span>
                        ) : null}
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="offer" className="studio-offer">
          <p className="studio-label">{t.offer}</p>
          <div className="studio-packages">
            <article className="studio-package">
              <p className="studio-package-num">{t.pkg1Num}</p>
              <h2>{t.pkg1Title}</h2>
              <p className="studio-package-price">{t.pkg1Price}</p>
              <p className="studio-package-lead">{t.pkg1Lead}</p>
              <p className="studio-package-body">{t.pkg1Body}</p>
              <ul className="studio-package-includes">
                {t.pkg1Includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>

            <article className="studio-package">
              <p className="studio-package-num">{t.pkg2Num}</p>
              <h2>{t.pkg2Title}</h2>
              <p className="studio-package-price">{t.pkg2Price}</p>
              <p className="studio-package-lead">{t.pkg2Lead}</p>
              <p className="studio-package-body">{t.pkg2Body}</p>
              <ul className="studio-package-includes">
                {t.pkg2Includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>

            <article className="studio-package">
              <p className="studio-package-num">{t.pkg3Num}</p>
              <h2>{t.pkg3Title}</h2>
              <p className="studio-package-price">{t.pkg3Price}</p>
              <p className="studio-package-lead">{t.pkg3Lead}</p>
              {t.pkg3Body.split("\n\n").map((para) => (
                <p key={para.slice(0, 32)} className="studio-package-body">
                  {para}
                </p>
              ))}
              <a className="studio-package-cta" href="#contact">
                {t.pkg3Cta}
              </a>
            </article>
          </div>
        </section>

        <section className="studio-process">
          <p className="studio-label">{t.process}</p>
          <div className="studio-process-blocks">
            <article className="studio-process-block">
              <p className="studio-process-kicker">{t.processKicker}</p>
              <h2>{t.processTitle}</h2>
              <div className="studio-process-copy">
                <p>{t.processP1}</p>
                <p>{t.processP2}</p>
                <p>{t.processP3}</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="studio-contact">
          <p className="studio-label">{t.contactLabel}</p>
          <a href="mailto:seemsreal.studio@gmx.at">seemsreal.studio@gmx.at</a>
          <p className="studio-contact-note">
            {t.contactNote.split("\n\n").map((line) => (
              <span key={line.slice(0, 28)} className="studio-contact-note-line">
                {line}
              </span>
            ))}
          </p>
        </section>
      </main>

      <footer className="studio-footer">
        <span>SEEMS REAL</span>
        <div className="studio-footer-links">
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
      </footer>
    </div>
  );
}
