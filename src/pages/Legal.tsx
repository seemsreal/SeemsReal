import type { ReactNode } from "react";
import { navigate } from "../nav";
import LanguageSwitch from "../i18n/LanguageSwitch";
import { useLanguage } from "../i18n/LanguageContext";
import LegalLinks from "../components/LegalLinks";
import "../components/LegalLinks.css";
import "./Legal.css";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

function LegalPage({ title, children }: LegalPageProps) {
  const { t } = useLanguage();

  return (
    <div className="legal">
      <header className="legal-nav">
        <button
          type="button"
          className="legal-brand"
          onClick={() => navigate("/")}
        >
          SEEMS REAL
        </button>
        <LanguageSwitch tone="dark" />
      </header>

      <main className="legal-main">
        <p className="legal-label">{t.legalLabel}</p>
        <h1>{title}</h1>
        <div className="legal-body">{children}</div>
      </main>

      <footer className="legal-footer">
        <LegalLinks />
      </footer>
    </div>
  );
}

const impressum = {
  brand: "SEEMS REAL Studio",
  name: "Alma Jamak",
  street: "Trollmannstraße 20",
  city: "4400 Steyr",
  country: "Austria",
  email: "seemsreal.studio@gmx.at",
  uid: "ATU81997617",
  iban: "DE84 1001 1001 2087 3083 22",
  bic: "NTSBDEB1XXX",
  bank: "N26 Bank",
};

export function Impressum() {
  return (
    <LegalPage title="Imprint">
      <p>
        <strong>Legal Disclosure / Imprint</strong>
      </p>

      <p>
        <strong>Website Owner and Publisher</strong>
        <br />
        {impressum.name} / {impressum.brand}
        <br />
        {impressum.street}
        <br />
        {impressum.city}
        <br />
        {impressum.country}
      </p>

      <p>
        Email:{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
      </p>

      <p>
        <strong>Business Information</strong>
        <br />
        Business Structure: Sole Proprietorship
        <br />
        Member of the Austrian Economic Chamber (WKO)
        <br />
        Supervisory Authority: Magistrate of the City of Steyr
        <br />
        Applicable Law: Austrian Trade Regulation Act (Gewerbeordnung)
        <br />
        VAT Identification Number (UID): {impressum.uid}
        <br />
        Company Registration Number: not required for unregistered sole
        proprietorships
      </p>

      <p>
        <strong>Bank Details</strong>
        <br />
        Account Holder: {impressum.name} / {impressum.brand}
        <br />
        Bank: {impressum.bank}
        <br />
        IBAN: {impressum.iban}
        <br />
        SWIFT/BIC: {impressum.bic}
        <br />
        <br />
        Note: This account is used exclusively for payment processing. The
        registered business address is in Austria.
      </p>

      <p>
        <strong>Business Address</strong>
        <br />
        {impressum.street}
        <br />
        {impressum.city}
        <br />
        {impressum.country}
      </p>

      <p>
        <strong>Disclaimer</strong>
        <br />
        All texts, images, videos, and information published on this website are
        protected by copyright, unless otherwise noted. Any reproduction,
        distribution, or public display of this content is only permitted with
        the explicit written consent of the provider.
        <br />
        <br />
        Despite careful content control, we accept no liability for the content
        of external links. The responsibility for linked pages lies solely with
        their respective operators. All external content was checked for legal
        violations at the time of linking, and no illegal content was
        identifiable.
      </p>

      <p>
        <strong>Online Dispute Resolution (ODR)</strong>
        <br />
        The European Commission provides an online platform for resolving
        consumer disputes out of court:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .
        <br />
        <br />
        We are neither obliged nor willing to participate in dispute resolution
        procedures before a consumer arbitration board.
      </p>

      <p>
        <strong>AI-Generated Content Notice</strong>
        <br />
        Visuals shown on this website may be AI-generated or AI-assisted and are
        created for illustrative and marketing purposes. Content created with AI
        is labeled accordingly. SEEMS REAL delivers AI-crafted fashion imagery
        for brands; project terms and AI transparency details are set out in our
        Terms and AI Transparency pages.
      </p>
    </LegalPage>
  );
}

function PrivacyNoticeEn() {
  return (
    <>
      <p>
        We take the protection of personal data seriously. This Privacy Notice
        explains what personal data we process when you use this website,
        contact us or work with SEEMS REAL Studio.
      </p>

      <p>
        <strong>Controller</strong>
        <br />
        {impressum.name} / {impressum.brand}
        <br />
        {impressum.street}
        <br />
        {impressum.city}
        <br />
        {impressum.country}
        <br />
        Email:{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
      </p>

      <p>
        <strong>Categories of data</strong>
        <br />
        Depending on how you interact with us, we may process your name, company
        name, email address, phone number, billing details, message content,
        briefing materials, product images and other files you provide to us, as
        well as technical website data such as IP address and browser
        information.
      </p>

      <p>
        <strong>Website hosting</strong>
        <br />
        This website is hosted by Vercel Inc. When you visit our website, Vercel
        may process technically necessary data, such as your IP address, browser
        information and server log data, in order to deliver, operate and secure
        the website.
        <br />
        <br />
        Vercel is based in the United States and data may be processed outside
        the European Economic Area. Where required, international data transfers
        are protected through appropriate safeguards, including the European
        Commission’s Standard Contractual Clauses.
      </p>

      <p>
        <strong>Cookies and website technologies</strong>
        <br />
        We currently do not use analytics, advertising trackers or non-essential
        cookies on this website.
        <br />
        <br />
        Your selected language is stored locally in your browser to remember
        your language preference. This information remains on your device and is
        not used for analytics, advertising, tracking or to create a user
        profile.
        <br />
        <br />
        If we introduce technologies in the future that require your consent, we
        will update this Privacy Notice and obtain your consent where required.
      </p>

      <p>
        <strong>Email communication</strong>
        <br />
        We use GMX, a service provided by 1&amp;1 Mail &amp; Media GmbH, for our
        email communication. When you contact us by email, the information you
        provide, including your email address and message content, is processed
        through this service for the purpose of handling your inquiry and
        communicating with you. GMX stores email data in data centres in
        Germany.
      </p>

      <p>
        <strong>Project communication and AI processing</strong>
        <br />
        If you contact us or commission work, we process the information
        necessary to handle your inquiry, prepare an offer, communicate with
        you, create and deliver commissioned visuals and prepare invoices.
        <br />
        <br />
        This may include product images, reference images, logos, moodboards and
        other briefing materials provided by you.
        <br />
        <br />
        Client materials are used solely for the purpose of creating and
        delivering the commissioned work. Where necessary for the creation of
        AI-assisted visuals, selected project materials may be uploaded to and
        processed through third-party generative AI services.
        <br />
        <br />
        Please do not provide materials that you are not authorised to share or
        allow us to process for this purpose. If any materials contain
        identifiable individuals, please inform us in advance so that we can
        assess whether and how they may be processed.
      </p>

      <div className="legal-block">
        <p>
          <strong>Legal bases</strong>
          <br />
          Where the GDPR applies, we process personal data on the following
          legal bases:
        </p>

        <div className="legal-block-items">
          <p>
            <span className="legal-subhead">
              Contract and pre-contractual steps (Art. 6(1)(b) GDPR)
            </span>
            To respond to project inquiries, prepare offers, communicate about
            potential or ongoing projects and provide our services.
          </p>

          <p>
            <span className="legal-subhead">
              Legitimate interests (Art. 6(1)(f) GDPR)
            </span>
            To operate and secure our website, maintain necessary technical logs
            and communicate efficiently with clients and prospective clients.
          </p>

          <p>
            <span className="legal-subhead">
              Legal obligations (Art. 6(1)(c) GDPR)
            </span>
            Where processing is necessary to comply with legal obligations
            applicable to our business, including accounting, tax and
            record-keeping requirements.
          </p>

          <p>
            <span className="legal-subhead">Consent (Art. 6(1)(a) GDPR)</span>
            Where processing is based on your consent, you may withdraw that
            consent at any time with effect for the future. The withdrawal does
            not affect the lawfulness of processing carried out before the
            withdrawal.
          </p>
        </div>
      </div>

      <p>
        <strong>Sharing of data</strong>
        <br />
        We do not sell personal data.
        <br />
        <br />
        Personal data may be processed by service providers that are necessary
        to operate our website, communicate with clients, fulfil legal and
        administrative obligations and deliver commissioned projects. These may
        include hosting, email, invoicing and generative AI service providers.
        <br />
        <br />
        We only share personal data where necessary for the relevant purpose and
        subject to appropriate data protection arrangements where required.
      </p>

      <p>
        <strong>International data transfers</strong>
        <br />
        Some third-party service providers we use may process personal data
        outside the European Economic Area (EEA).
        <br />
        <br />
        Where personal data is transferred internationally, we take appropriate
        measures to ensure that applicable data protection requirements are
        respected and that appropriate safeguards are used where required.
      </p>

      <p>
        <strong>Retention</strong>
        <br />
        We retain personal data only for as long as necessary for the purpose for
        which it was collected or for as long as required by applicable law.
        <br />
        <br />
        Project materials, including product images, reference images, logos and
        briefing materials, are normally deleted from our own storage and, where
        available to us, from the third-party AI tools used for the project once
        the commissioned project has been completed.
        <br />
        <br />
        If agreed with the client, project materials may instead be retained by
        us and within the relevant AI tools for future projects and continued
        collaboration. The client may request deletion of retained project
        materials at any time, subject to applicable legal retention
        obligations.
        <br />
        <br />
        Third-party service providers may be subject to their own technical
        retention periods, backup procedures and data-processing practices,
        which may continue to apply after deletion from our active account.
        <br />
        <br />
        Business, accounting and invoicing records are retained for the periods
        required under applicable Austrian law.
      </p>

      <p>
        <strong>Your rights</strong>
        <br />
        Subject to the conditions provided by the GDPR, you have the right to
        request access to your personal data, correction or deletion of your
        personal data, restriction of processing, to object to certain
        processing and to receive your data in a portable format where
        applicable.
        <br />
        <br />
        Where processing is based on your consent, you may withdraw your consent
        at any time with effect for the future.
        <br />
        <br />
        If you believe that the processing of your personal data infringes
        applicable data protection law, you have the right to lodge a complaint
        with the Austrian Data Protection Authority (Österreichische
        Datenschutzbehörde) or another competent supervisory authority.
        <br />
        <br />
        To exercise your rights or for any questions regarding your personal
        data, please contact us at{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>.
      </p>
    </>
  );
}

function PrivacyNoticeDe() {
  return (
    <>
      <p>
        Der Schutz personenbezogener Daten ist uns wichtig. Diese
        Datenschutzerklärung erläutert, welche personenbezogenen Daten wir
        verarbeiten, wenn Sie diese Website nutzen, mit uns Kontakt aufnehmen
        oder mit SEEMS REAL Studio zusammenarbeiten.
      </p>

      <p>
        <strong>Verantwortliche</strong>
        <br />
        {impressum.name} / {impressum.brand}
        <br />
        {impressum.street}
        <br />
        {impressum.city}
        <br />
        Österreich
        <br />
        E-Mail:{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
      </p>

      <p>
        <strong>Kategorien personenbezogener Daten</strong>
        <br />
        Je nachdem, wie Sie mit uns interagieren, können wir Ihren Namen,
        Firmennamen, Ihre E-Mail-Adresse, Telefonnummer, Rechnungsdaten,
        Nachrichteninhalte, Briefing-Unterlagen, Produktbilder und andere von
        Ihnen bereitgestellte Dateien sowie technische Website-Daten wie
        IP-Adresse und Browserinformationen verarbeiten.
      </p>

      <p>
        <strong>Website-Hosting</strong>
        <br />
        Diese Website wird von Vercel Inc. gehostet. Beim Besuch unserer Website
        kann Vercel technisch notwendige Daten wie Ihre IP-Adresse,
        Browserinformationen und Server-Log-Daten verarbeiten, um die Website
        bereitzustellen, zu betreiben und abzusichern.
        <br />
        <br />
        Vercel hat seinen Sitz in den Vereinigten Staaten und Daten können
        außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. Soweit
        erforderlich, werden internationale Datenübermittlungen durch geeignete
        Schutzmaßnahmen abgesichert, einschließlich der
        Standardvertragsklauseln der Europäischen Kommission.
      </p>

      <p>
        <strong>Cookies und Website-Technologien</strong>
        <br />
        Wir verwenden derzeit keine Analyse-Tools, Werbe-Tracker oder nicht
        notwendigen Cookies auf dieser Website.
        <br />
        <br />
        Ihre ausgewählte Sprache wird lokal in Ihrem Browser gespeichert, damit
        Ihre Spracheinstellung erhalten bleibt. Diese Information verbleibt auf
        Ihrem Gerät und wird weder für Analysen noch für Werbung, Tracking oder
        die Erstellung eines Nutzerprofils verwendet.
        <br />
        <br />
        Sollten wir zukünftig Technologien einsetzen, die Ihre Einwilligung
        erfordern, werden wir diese Datenschutzerklärung entsprechend
        aktualisieren und Ihre Einwilligung einholen, soweit dies erforderlich
        ist.
      </p>

      <p>
        <strong>E-Mail-Kommunikation</strong>
        <br />
        Für unsere E-Mail-Kommunikation nutzen wir GMX, einen Dienst der 1&amp;1
        Mail &amp; Media GmbH. Wenn Sie uns per E-Mail kontaktieren, werden die
        von Ihnen übermittelten Informationen, einschließlich Ihrer
        E-Mail-Adresse und des Nachrichteninhalts, über diesen Dienst
        verarbeitet, um Ihre Anfrage zu bearbeiten und mit Ihnen zu
        kommunizieren. GMX speichert E-Mail-Daten in Rechenzentren in
        Deutschland.
      </p>

      <p>
        <strong>Projektkommunikation und KI-Verarbeitung</strong>
        <br />
        Wenn Sie uns kontaktieren oder mit einem Projekt beauftragen,
        verarbeiten wir die Informationen, die erforderlich sind, um Ihre
        Anfrage zu bearbeiten, ein Angebot zu erstellen, mit Ihnen zu
        kommunizieren, die beauftragten Visuals zu erstellen und zu liefern
        sowie Rechnungen auszustellen.
        <br />
        <br />
        Dies kann Produktbilder, Referenzbilder, Logos, Moodboards und andere
        von Ihnen bereitgestellte Briefing-Unterlagen umfassen.
        <br />
        <br />
        Vom Kunden bereitgestellte Materialien werden ausschließlich zum Zweck
        der Erstellung und Lieferung der beauftragten Leistungen verwendet.
        Soweit dies für die Erstellung KI-gestützter Visuals erforderlich ist,
        können ausgewählte Projektmaterialien in generative KI-Dienste von
        Drittanbietern hochgeladen und dort verarbeitet werden.
        <br />
        <br />
        Bitte stellen Sie uns keine Materialien zur Verfügung, zu deren
        Weitergabe oder Verarbeitung für diesen Zweck Sie nicht berechtigt sind.
        Sollten Materialien identifizierbare Personen enthalten, informieren Sie
        uns bitte im Voraus, damit wir prüfen können, ob und in welcher Form
        diese verarbeitet werden können.
      </p>

      <div className="legal-block">
        <p>
          <strong>Rechtsgrundlagen</strong>
          <br />
          Soweit die DSGVO Anwendung findet, verarbeiten wir personenbezogene
          Daten auf Grundlage der folgenden Rechtsgrundlagen:
        </p>

        <div className="legal-block-items">
          <p>
            <span className="legal-subhead">
              Vertrag und vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO)
            </span>
            Zur Bearbeitung von Projektanfragen, Erstellung von Angeboten,
            Kommunikation über potenzielle oder laufende Projekte und Erbringung
            unserer Leistungen.
          </p>

          <p>
            <span className="legal-subhead">
              Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)
            </span>
            Zum Betrieb und zur Absicherung unserer Website, zur Führung
            notwendiger technischer Protokolle sowie zur effizienten
            Kommunikation mit Kunden und potenziellen Kunden.
          </p>

          <p>
            <span className="legal-subhead">
              Rechtliche Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO)
            </span>
            Soweit die Verarbeitung erforderlich ist, um für unser Unternehmen
            geltende gesetzliche Verpflichtungen zu erfüllen, insbesondere im
            Bereich Buchhaltung, Steuern und gesetzliche Aufbewahrungspflichten.
          </p>

          <p>
            <span className="legal-subhead">
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
            </span>
            Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie
            diese jederzeit mit Wirkung für die Zukunft widerrufen. Die
            Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt
            davon unberührt.
          </p>
        </div>
      </div>

      <p>
        <strong>Weitergabe von Daten</strong>
        <br />
        Wir verkaufen keine personenbezogenen Daten.
        <br />
        <br />
        Personenbezogene Daten können durch Dienstleister verarbeitet werden,
        die für den Betrieb unserer Website, die Kommunikation mit Kunden, die
        Erfüllung rechtlicher und administrativer Verpflichtungen sowie die
        Durchführung beauftragter Projekte erforderlich sind. Dazu können
        insbesondere Hosting-, E-Mail-, Rechnungs- und generative
        KI-Dienstleister gehören.
        <br />
        <br />
        Wir geben personenbezogene Daten nur weiter, soweit dies für den
        jeweiligen Zweck erforderlich ist und unter Einhaltung angemessener
        Datenschutzvorkehrungen, soweit diese erforderlich sind.
      </p>

      <p>
        <strong>Internationale Datenübermittlungen</strong>
        <br />
        Einige der von uns eingesetzten Drittanbieter können personenbezogene
        Daten außerhalb des Europäischen Wirtschaftsraums (EWR) verarbeiten.
        <br />
        <br />
        Werden personenbezogene Daten international übermittelt, treffen wir
        geeignete Maßnahmen, um sicherzustellen, dass die geltenden
        Datenschutzanforderungen eingehalten und, soweit erforderlich,
        angemessene Schutzmaßnahmen eingesetzt werden.
      </p>

      <p>
        <strong>Speicherdauer</strong>
        <br />
        Wir speichern personenbezogene Daten nur so lange, wie dies für den
        Zweck erforderlich ist, für den sie erhoben wurden, oder solange dies
        nach geltendem Recht erforderlich ist.
        <br />
        <br />
        Projektmaterialien, einschließlich Produktbildern, Referenzbildern,
        Logos und Briefing-Unterlagen, werden nach Abschluss des beauftragten
        Projekts grundsätzlich aus unseren eigenen Speichern und, soweit uns
        dies möglich ist, aus den für das Projekt verwendeten KI-Diensten von
        Drittanbietern gelöscht.
        <br />
        <br />
        Sofern mit dem Kunden vereinbart, können Projektmaterialien stattdessen
        für zukünftige Projekte und eine weitere Zusammenarbeit bei uns und
        innerhalb der relevanten KI-Dienste gespeichert werden. Der Kunde kann
        jederzeit die Löschung der weiterhin gespeicherten Projektmaterialien
        verlangen, vorbehaltlich etwaiger gesetzlicher Aufbewahrungspflichten.
        <br />
        <br />
        Für Drittanbieter können eigene technische Speicherfristen,
        Backup-Verfahren und Datenverarbeitungspraktiken gelten, die auch nach
        einer Löschung aus unserem aktiven Benutzerkonto weiterhin Anwendung
        finden können.
        <br />
        <br />
        Geschäfts-, Buchhaltungs- und Rechnungsunterlagen werden für die nach
        österreichischem Recht vorgeschriebenen Zeiträume aufbewahrt.
      </p>

      <p>
        <strong>Ihre Rechte</strong>
        <br />
        Unter den Voraussetzungen der DSGVO haben Sie insbesondere das Recht auf
        Auskunft über Ihre personenbezogenen Daten, Berichtigung oder Löschung
        Ihrer Daten, Einschränkung der Verarbeitung, Widerspruch gegen bestimmte
        Verarbeitungen sowie, soweit anwendbar, auf Datenübertragbarkeit.
        <br />
        <br />
        Soweit die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese
        jederzeit mit Wirkung für die Zukunft widerrufen.
        <br />
        <br />
        Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
        Daten gegen geltendes Datenschutzrecht verstößt, haben Sie das Recht,
        Beschwerde bei der Österreichischen Datenschutzbehörde oder einer
        anderen zuständigen Aufsichtsbehörde einzulegen.
        <br />
        <br />
        Zur Ausübung Ihrer Rechte oder bei Fragen zur Verarbeitung Ihrer
        personenbezogenen Daten kontaktieren Sie uns unter{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>.
      </p>
    </>
  );
}

export function Datenschutz() {
  const { lang } = useLanguage();
  const isDe = lang === "de";

  return (
    <LegalPage title={isDe ? "Datenschutzerklärung" : "Privacy"}>
      {isDe ? <PrivacyNoticeDe /> : <PrivacyNoticeEn />}
    </LegalPage>
  );
}

export function Terms() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These Terms apply to projects commissioned from SEEMS REAL Studio
        (“we”, “us”). Individual offers may add project-specific details. By
        confirming an order, the client (“you”) accepts these Terms.
      </p>

      <p>
        Our services are offered exclusively to businesses and professional
        clients acting in the course of their commercial or professional
        activity.
      </p>

      <p className="legal-callout">
        The Client is responsible for reviewing and approving all final visuals
        prior to publication, including the accuracy of products, colours,
        materials, logos, text and other brand-specific details.
      </p>

      <p>
        <strong>1. AI-generated content</strong>
        <br />
        You expressly acknowledge that visuals created by SEEMS REAL are
        generated wholly or partly with generative AI. Deliverables are not
        conventional photography unless expressly agreed otherwise in writing.
      </p>

      <p>
        <strong>2. Product representation</strong>
        <br />
        We take reasonable care to achieve a faithful representation of the
        Client’s product and creative brief. However, due to the nature of
        generative AI, exact reproduction of every product detail, colour,
        texture, proportion or material characteristic cannot be guaranteed.
      </p>

      <p>
        <strong>3. Nature of AI output</strong>
        <br />
        AI-generated outputs may contain unexpected similarities, inaccuracies,
        or artefacts inherent to generative technology. While reasonable care is
        taken during the creative process, no guarantee can be given that
        AI-generated output will be entirely free from third-party rights or
        unintended similarities.
      </p>

      <p>
        <strong>4. No performance guarantee</strong>
        <br />
        We do not guarantee any specific commercial, advertising, engagement,
        conversion, reach or sales results from the use of the deliverables.
      </p>

      <p>
        <strong>5. Final approval</strong>
        <br />
        You must review and approve final visuals before publication or other
        use, including product details, claims, prices, logos, trademarks, and
        any other legally relevant content. Publication or use after delivery
        without written objection within the agreed review window is deemed
        approval, unless otherwise agreed.
      </p>

      <p>
        <strong>6. Rights in client input</strong>
        <br />
        You confirm that you own or have all necessary rights in materials you
        provide (including product photos, logos, designs, moodboards, and
        reference images), and that you may supply them to us for the project.
        You are responsible for copyright, personality, trademark, and related
        rights in your input materials.
      </p>

      <p>
        <strong>7. Third-party references</strong>
        <br />
        Moodboards and references are for creative orientation only. We do not
        guarantee identical reproduction of any third-party work, campaign, or
        brand look.
      </p>

      <p>
        <strong>8. AI tools and confidentiality</strong>
        <br />
        To perform the services, we may use third-party software and generative
        AI tools. Materials you provide (including unpublished product imagery)
        may be processed in those tools solely as needed to create the
        deliverables, in line with our Privacy notice. We treat client materials
        as confidential and do not use them for unrelated purposes. Please do not
        share materials you are not permitted to provide for AI-assisted
        production.
      </p>

      <p>
        <strong>9. Usage rights in final visuals</strong>
        <br />
        Upon full payment, you receive a non-exclusive right to use the approved
        final visuals for your brand communication in the agreed scope. Unless
        otherwise stated in the offer, this includes website, social media, paid
        ads, newsletter, and print for your own brand. Any extended, exclusive,
        resale, or white-label use requires prior written agreement.
      </p>

      <p>
        <strong>10. No rights in drafts and process materials</strong>
        <br />
        Unused drafts, prompts, workflows, intermediate files, and process
        materials remain with SEEMS REAL and are not automatically transferred.
        Only approved final deliverables listed in the offer are licensed as
        above.
      </p>

      <p>
        <strong>11. Revisions</strong>
        <br />
        Package 01 (The Edit) includes 1 refinement round. Package 02 (The
        Campaign) includes 2 refinement rounds. Bespoke projects follow the
        offer. Additional changes are charged separately.
      </p>

      <p>
        <strong>12. Payment and cancellation</strong>
        <br />
        Unless otherwise agreed: Package 01 is payable in full before work
        starts. Package 02 and Bespoke projects may require a deposit stated in
        the offer, with the balance due before final delivery. If you cancel
        after work has begun, work already performed and costs incurred remain
        payable. Deposits are non-refundable once production has started, unless
        mandatory law provides otherwise.
      </p>

      <p>
        <strong>13. Delivery</strong>
        <br />
        Estimated delivery timelines are stated in the offer and begin once we
        have received payment (where required) and complete briefing materials.
        Delays in your materials, feedback, or approvals extend the timeline
        accordingly.
      </p>

      <p>
        <strong>14. AI disclosure and labeling</strong>
        <br />
        The Client expressly acknowledges that the deliverables are created
        wholly or partly using generative AI. Following delivery, the Client is
        solely responsible for determining and complying with any disclosure,
        labeling or transparency requirements applicable to the Client’s
        publication, advertising or other use of the deliverables, including
        requirements under applicable law and platform policies.
        <br />
        <br />
        SEEMS REAL is responsible for the creation and delivery of the agreed
        visuals and does not assume responsibility for the Client’s subsequent
        publication, distribution or use of the deliverables or for the Client’s
        downstream compliance obligations. Transparency rules under Article 50
        of the EU AI Act apply as of 2 August 2026; which concrete duties apply
        depends on the content and use case.
      </p>

      <p>
        <strong>15. Portfolio usage</strong>
        <br />
        Unless otherwise agreed, we may show approved project visuals in our
        portfolio (including website and social channels) as selected work.
        Portfolio publication will only take place after the Client has publicly
        released the relevant product or campaign, unless otherwise agreed. We
        will not disclose confidential business details.
      </p>

      <p>
        <strong>16. Liability</strong>
        <br />
        We are liable without limitation for intent and gross negligence, and for
        injury to life, body, or health. In cases of slight negligence, we are
        liable only for breach of essential contractual duties, and liability is
        limited to typical foreseeable damage. We are not liable for loss of
        profit or indirect damages to the extent permitted by law. Nothing in
        these Terms excludes liability that cannot legally be limited.
      </p>

      <p>
        <strong>17. Client compliance</strong>
        <br />
        You are responsible for ensuring your use of the deliverables complies
        with advertising, platform, consumer, intellectual property, and other
        applicable rules in the markets where the assets appear.
      </p>

      <p>
        <strong>18. Governing law</strong>
        <br />
        Austrian law applies, excluding conflict-of-law rules, unless mandatory
        consumer provisions require otherwise. Place of performance and
        jurisdiction follow applicable Austrian rules for B2B contracts where
        permitted.
      </p>

      <p className="legal-note">
        Draft terms for website and offers · have an Austrian lawyer or WKO
        review before launch (WKO agency T&amp;C templates are a useful
        reference). Not legal advice.
      </p>
    </LegalPage>
  );
}

export function AiTransparency() {
  return (
    <LegalPage title="AI Transparency">
      <p>
        SEEMS REAL creates brand imagery with generative AI. This page explains
        our working method in plain language.
      </p>

      <p>
        <strong>How we work</strong>
        <br />
        We combine your brief, product materials, and creative direction with
        AI-assisted image generation and careful review. Deliverables are created
        as AI-generated or AI-assisted visuals for digital brand use.
      </p>

      <p>
        <strong>What you should expect</strong>
        <br />
        Results are designed to feel campaign-ready and on-brand. Because
        generative systems are probabilistic, small deviations, artefacts, or
        unexpected similarities can occur. Final approval before publication
        remains with you.
      </p>

      <p>
        <strong>Your materials</strong>
        <br />
        Product photos, logos, and references you provide help us stay close to
        your brand. You must have the rights to share those materials with us
        for production.
      </p>

      <p>
        <strong>Transparency in use</strong>
        <br />
        EU AI Act transparency rules (Article 50) apply as of 2 August 2026.
        Whether a specific disclosure is required depends on the content and how
        it is published. Responsibility for required labeling in your channels
        sits with you as the brand using the assets. More detail is set out in
        our Terms.
      </p>

      <p>
        <strong>Questions</strong>
        <br />
        Email{" "}
        <a href="mailto:seemsreal.studio@gmx.at">seemsreal.studio@gmx.at</a>.
      </p>

      <p className="legal-note">
        Plain-language transparency page · align with final Terms after legal
        review. Not legal advice.
      </p>
    </LegalPage>
  );
}
