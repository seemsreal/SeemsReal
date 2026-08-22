import type { ReactNode } from "react";
import { useEffect } from "react";
import { navigate } from "../nav";
import LanguageSwitch from "../i18n/LanguageSwitch";
import { useLanguage } from "../i18n/LanguageContext";
import {
  langFromPrivacyPath,
  privacyTitles,
} from "../i18n/privacyRoutes";
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

function PrivacyNoticeIt() {
  return (
    <>
      <p>
        La protezione dei dati personali è importante per noi. La presente
        Informativa sulla Privacy spiega quali dati personali trattiamo quando
        utilizzi questo sito web, ci contatti o collabori con SEEMS REAL Studio.
      </p>

      <p>
        <strong>Titolare del trattamento</strong>
        <br />
        {impressum.name} / {impressum.brand}
        <br />
        {impressum.street}
        <br />
        {impressum.city}
        <br />
        Austria
        <br />
        E-mail:{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
      </p>

      <p>
        <strong>Categorie di dati personali</strong>
        <br />
        A seconda di come interagisci con noi, possiamo trattare il tuo nome, il
        nome della società, l’indirizzo e-mail, il numero di telefono, i dati di
        fatturazione, il contenuto dei messaggi, i materiali di briefing, le
        immagini dei prodotti e altri file che ci fornisci, nonché dati tecnici
        relativi al sito web, come l’indirizzo IP e le informazioni sul browser.
      </p>

      <p>
        <strong>Hosting del sito web</strong>
        <br />
        Questo sito web è ospitato da Vercel Inc. Quando visiti il nostro sito,
        Vercel può trattare dati tecnicamente necessari, come il tuo indirizzo
        IP, le informazioni sul browser e i dati dei log del server, al fine di
        fornire, gestire e proteggere il sito web.
        <br />
        <br />
        Vercel ha sede negli Stati Uniti e i dati possono essere trattati al di
        fuori dello Spazio Economico Europeo. Ove necessario, i trasferimenti
        internazionali di dati sono protetti mediante adeguate garanzie, incluse
        le Clausole Contrattuali Standard della Commissione Europea.
      </p>

      <p>
        <strong>Cookie e tecnologie del sito web</strong>
        <br />
        Attualmente non utilizziamo strumenti di analisi, tracker pubblicitari o
        cookie non essenziali su questo sito web.
        <br />
        <br />
        La lingua selezionata viene memorizzata localmente nel tuo browser per
        ricordare la tua preferenza linguistica. Questa informazione rimane sul
        tuo dispositivo e non viene utilizzata per analisi, pubblicità,
        tracciamento o per creare un profilo utente.
        <br />
        <br />
        Qualora in futuro introducessimo tecnologie che richiedono il tuo
        consenso, aggiorneremo la presente Informativa sulla Privacy e
        richiederemo il tuo consenso ove necessario.
      </p>

      <p>
        <strong>Comunicazione via e-mail</strong>
        <br />
        Utilizziamo GMX, un servizio fornito da 1&amp;1 Mail &amp; Media GmbH,
        per le nostre comunicazioni via e-mail. Quando ci contatti tramite
        e-mail, le informazioni che ci fornisci, incluso il tuo indirizzo e-mail
        e il contenuto del messaggio, vengono trattate tramite questo servizio
        allo scopo di gestire la tua richiesta e comunicare con te. GMX
        conserva i dati delle e-mail in centri dati situati in Germania.
      </p>

      <p>
        <strong>Comunicazione relativa ai progetti e trattamento tramite IA</strong>
        <br />
        Se ci contatti o ci affidi un progetto, trattiamo le informazioni
        necessarie per gestire la tua richiesta, preparare un’offerta,
        comunicare con te, creare e consegnare i contenuti visivi commissionati
        e predisporre le fatture.
        <br />
        <br />
        Ciò può includere immagini dei prodotti, immagini di riferimento, loghi,
        moodboard e altri materiali di briefing da te forniti.
        <br />
        <br />
        I materiali forniti dal cliente vengono utilizzati esclusivamente allo
        scopo di creare e consegnare il lavoro commissionato. Ove necessario per
        la creazione di contenuti visivi assistiti dall’intelligenza
        artificiale, determinati materiali del progetto possono essere caricati
        e trattati tramite servizi di IA generativa forniti da terze parti.
        <br />
        <br />
        Ti chiediamo di non fornirci materiali che non sei autorizzato a
        condividere o a far trattare per questo scopo. Qualora i materiali
        contengano persone identificabili, ti chiediamo di informarci
        preventivamente affinché possiamo valutare se e in quale modo possano
        essere trattati.
      </p>

      <div className="legal-block">
        <p>
          <strong>Basi giuridiche</strong>
          <br />
          Ove si applichi il GDPR, trattiamo i dati personali sulla base delle
          seguenti basi giuridiche:
        </p>

        <div className="legal-block-items">
          <p>
            <span className="legal-subhead">
              Contratto e misure precontrattuali (Art. 6(1)(b) GDPR)
            </span>
            Per rispondere alle richieste relative ai progetti, preparare
            offerte, comunicare in merito a progetti potenziali o in corso e
            fornire i nostri servizi.
          </p>

          <p>
            <span className="legal-subhead">
              Legittimi interessi (Art. 6(1)(f) GDPR)
            </span>
            Per gestire e proteggere il nostro sito web, mantenere i log tecnici
            necessari e comunicare in modo efficiente con clienti e potenziali
            clienti.
          </p>

          <p>
            <span className="legal-subhead">
              Obblighi legali (Art. 6(1)(c) GDPR)
            </span>
            Quando il trattamento è necessario per adempiere agli obblighi
            legali applicabili alla nostra attività, inclusi gli obblighi in
            materia di contabilità, fiscalità e conservazione dei documenti.
          </p>

          <p>
            <span className="legal-subhead">
              Consenso (Art. 6(1)(a) GDPR)
            </span>
            Quando il trattamento si basa sul tuo consenso, puoi revocarlo in
            qualsiasi momento con effetto per il futuro. La revoca non
            pregiudica la liceità del trattamento effettuato prima della
            revoca.
          </p>
        </div>
      </div>

      <p>
        <strong>Condivisione dei dati</strong>
        <br />
        Non vendiamo dati personali.
        <br />
        <br />
        I dati personali possono essere trattati da fornitori di servizi
        necessari per gestire il nostro sito web, comunicare con i clienti,
        adempiere agli obblighi legali e amministrativi e realizzare i progetti
        commissionati. Questi possono includere fornitori di servizi di hosting,
        e-mail, fatturazione e servizi di IA generativa.
        <br />
        <br />
        Condividiamo i dati personali esclusivamente nella misura necessaria per
        la relativa finalità e adottando adeguate misure di protezione dei dati
        ove richiesto.
      </p>

      <p>
        <strong>Trasferimenti internazionali di dati</strong>
        <br />
        Alcuni fornitori di servizi di terze parti da noi utilizzati possono
        trattare dati personali al di fuori dello Spazio Economico Europeo
        (SEE).
        <br />
        <br />
        Quando i dati personali vengono trasferiti a livello internazionale,
        adottiamo misure adeguate per garantire il rispetto dei requisiti
        applicabili in materia di protezione dei dati e l’utilizzo di adeguate
        garanzie ove richiesto.
      </p>

      <p>
        <strong>Periodo di conservazione</strong>
        <br />
        Conserviamo i dati personali solo per il tempo necessario allo scopo per
        il quale sono stati raccolti o per il periodo previsto dalla normativa
        applicabile.
        <br />
        <br />
        I materiali relativi ai progetti, comprese immagini dei prodotti,
        immagini di riferimento, loghi e materiali di briefing, vengono
        normalmente eliminati dai nostri sistemi e, ove possibile da parte
        nostra, dai servizi di IA di terze parti utilizzati per il progetto una
        volta completato il lavoro commissionato.
        <br />
        <br />
        Se concordato con il cliente, i materiali del progetto possono invece
        essere conservati da noi e all’interno dei relativi strumenti di IA per
        progetti futuri e per proseguire la collaborazione. Il cliente può
        richiedere in qualsiasi momento la cancellazione dei materiali
        conservati, fatti salvi eventuali obblighi legali di conservazione.
        <br />
        <br />
        I fornitori di servizi di terze parti possono essere soggetti a propri
        periodi tecnici di conservazione, procedure di backup e pratiche di
        trattamento dei dati, che possono continuare ad applicarsi anche dopo
        la cancellazione dal nostro account attivo.
        <br />
        <br />
        I documenti aziendali, contabili e di fatturazione vengono conservati
        per i periodi previsti dalla normativa austriaca applicabile.
      </p>

      <p>
        <strong>I tuoi diritti</strong>
        <br />
        Alle condizioni previste dal GDPR, hai il diritto di richiedere
        l’accesso ai tuoi dati personali, la rettifica o la cancellazione degli
        stessi, la limitazione del trattamento, di opporti a determinati
        trattamenti e, ove applicabile, di ricevere i tuoi dati in un formato
        portabile.
        <br />
        <br />
        Quando il trattamento si basa sul tuo consenso, puoi revocarlo in
        qualsiasi momento con effetto per il futuro.
        <br />
        <br />
        Se ritieni che il trattamento dei tuoi dati personali violi la normativa
        applicabile in materia di protezione dei dati, hai il diritto di
        presentare un reclamo all’Autorità austriaca per la protezione dei dati
        (Österreichische Datenschutzbehörde) o a un’altra autorità di controllo
        competente.
        <br />
        <br />
        Per esercitare i tuoi diritti o per qualsiasi domanda relativa al
        trattamento dei tuoi dati personali, puoi contattarci all’indirizzo{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>.
      </p>
    </>
  );
}

function PrivacyNoticeEs() {
  return (
    <>
      <p>
        La protección de los datos personales es importante para nosotros. Esta
        Política de Privacidad explica qué datos personales tratamos cuando
        utilizas este sitio web, te pones en contacto con nosotros o trabajas
        con SEEMS REAL Studio.
      </p>

      <p>
        <strong>Responsable del tratamiento</strong>
        <br />
        {impressum.name} / {impressum.brand}
        <br />
        {impressum.street}
        <br />
        {impressum.city}
        <br />
        Austria
        <br />
        Correo electrónico:{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
      </p>

      <p>
        <strong>Categorías de datos personales</strong>
        <br />
        Dependiendo de cómo interactúes con nosotros, podemos tratar tu nombre,
        nombre de la empresa, dirección de correo electrónico, número de
        teléfono, datos de facturación, contenido de los mensajes, materiales de
        briefing, imágenes de productos y otros archivos que nos proporciones,
        así como datos técnicos del sitio web, como la dirección IP y la
        información del navegador.
      </p>

      <p>
        <strong>Alojamiento del sitio web</strong>
        <br />
        Este sitio web está alojado por Vercel Inc. Cuando visitas nuestro sitio
        web, Vercel puede tratar datos técnicamente necesarios, como tu
        dirección IP, información del navegador y datos de registro del
        servidor, con el fin de proporcionar, operar y proteger el sitio web.
        <br />
        <br />
        Vercel tiene su sede en Estados Unidos y los datos pueden ser tratados
        fuera del Espacio Económico Europeo. Cuando sea necesario, las
        transferencias internacionales de datos estarán protegidas mediante
        garantías adecuadas, incluidas las Cláusulas Contractuales Tipo de la
        Comisión Europea.
      </p>

      <p>
        <strong>Cookies y tecnologías del sitio web</strong>
        <br />
        Actualmente no utilizamos herramientas de análisis, rastreadores
        publicitarios ni cookies no esenciales en este sitio web.
        <br />
        <br />
        El idioma seleccionado se almacena localmente en tu navegador para
        recordar tu preferencia de idioma. Esta información permanece en tu
        dispositivo y no se utiliza para análisis, publicidad, seguimiento ni
        para crear un perfil de usuario.
        <br />
        <br />
        Si en el futuro incorporamos tecnologías que requieran tu
        consentimiento, actualizaremos esta Política de Privacidad y
        solicitaremos tu consentimiento cuando sea necesario.
      </p>

      <p>
        <strong>Comunicación por correo electrónico</strong>
        <br />
        Utilizamos GMX, un servicio proporcionado por 1&amp;1 Mail &amp; Media
        GmbH, para nuestras comunicaciones por correo electrónico. Cuando te
        pones en contacto con nosotros por correo electrónico, la información
        que nos proporcionas, incluida tu dirección de correo electrónico y el
        contenido del mensaje, se trata a través de este servicio con el fin de
        gestionar tu consulta y comunicarnos contigo. GMX almacena los datos de
        correo electrónico en centros de datos ubicados en Alemania.
      </p>

      <p>
        <strong>Comunicación de proyectos y tratamiento mediante IA</strong>
        <br />
        Si te pones en contacto con nosotros o nos encargas un proyecto,
        tratamos la información necesaria para gestionar tu consulta, preparar
        una oferta, comunicarnos contigo, crear y entregar los contenidos
        visuales encargados y preparar las facturas.
        <br />
        <br />
        Esto puede incluir imágenes de productos, imágenes de referencia,
        logotipos, moodboards y otros materiales de briefing que nos
        proporciones.
        <br />
        <br />
        Los materiales proporcionados por el cliente se utilizan exclusivamente
        con el fin de crear y entregar el trabajo encargado. Cuando sea
        necesario para la creación de contenidos visuales asistidos por
        inteligencia artificial, determinados materiales del proyecto podrán
        cargarse y tratarse mediante servicios de IA generativa proporcionados
        por terceros.
        <br />
        <br />
        Por favor, no nos proporciones materiales que no estés autorizado a
        compartir o permitir que sean tratados para este fin. Si algún material
        contiene personas identificables, infórmanos previamente para que
        podamos evaluar si puede ser tratado y de qué manera.
      </p>

      <div className="legal-block">
        <p>
          <strong>Bases jurídicas</strong>
          <br />
          Cuando sea aplicable el RGPD, tratamos los datos personales sobre las
          siguientes bases jurídicas:
        </p>

        <div className="legal-block-items">
          <p>
            <span className="legal-subhead">
              Contrato y medidas precontractuales (Art. 6(1)(b) RGPD)
            </span>
            Para responder a consultas sobre proyectos, preparar ofertas,
            comunicarnos sobre proyectos potenciales o en curso y prestar
            nuestros servicios.
          </p>

          <p>
            <span className="legal-subhead">
              Intereses legítimos (Art. 6(1)(f) RGPD)
            </span>
            Para operar y proteger nuestro sitio web, mantener los registros
            técnicos necesarios y comunicarnos de manera eficiente con clientes
            y potenciales clientes.
          </p>

          <p>
            <span className="legal-subhead">
              Obligaciones legales (Art. 6(1)(c) RGPD)
            </span>
            Cuando el tratamiento sea necesario para cumplir las obligaciones
            legales aplicables a nuestra actividad, incluidas las obligaciones
            contables, fiscales y de conservación de documentos.
          </p>

          <p>
            <span className="legal-subhead">
              Consentimiento (Art. 6(1)(a) RGPD)
            </span>
            Cuando el tratamiento se base en tu consentimiento, podrás
            retirarlo en cualquier momento con efecto para el futuro. La
            retirada del consentimiento no afectará a la licitud del
            tratamiento realizado antes de dicha retirada.
          </p>
        </div>
      </div>

      <p>
        <strong>Comunicación de datos</strong>
        <br />
        No vendemos datos personales.
        <br />
        <br />
        Los datos personales pueden ser tratados por proveedores de servicios
        necesarios para operar nuestro sitio web, comunicarnos con los
        clientes, cumplir obligaciones legales y administrativas y llevar a cabo
        los proyectos encargados. Estos pueden incluir proveedores de servicios
        de alojamiento, correo electrónico, facturación e IA generativa.
        <br />
        <br />
        Solo compartimos datos personales en la medida necesaria para la
        finalidad correspondiente y con las garantías de protección de datos
        adecuadas cuando sean necesarias.
      </p>

      <p>
        <strong>Transferencias internacionales de datos</strong>
        <br />
        Algunos de los proveedores de servicios externos que utilizamos pueden
        tratar datos personales fuera del Espacio Económico Europeo (EEE).
        <br />
        <br />
        Cuando se transfieran datos personales internacionalmente, adoptaremos
        las medidas adecuadas para garantizar el cumplimiento de los requisitos
        aplicables en materia de protección de datos y la aplicación de las
        garantías adecuadas cuando sean necesarias.
      </p>

      <p>
        <strong>Conservación de los datos</strong>
        <br />
        Conservamos los datos personales únicamente durante el tiempo necesario
        para la finalidad para la que fueron recopilados o durante el período
        exigido por la legislación aplicable.
        <br />
        <br />
        Los materiales de los proyectos, incluidas las imágenes de productos,
        imágenes de referencia, logotipos y materiales de briefing, se eliminan
        normalmente de nuestros propios sistemas y, cuando nos sea posible, de
        los servicios de IA de terceros utilizados para el proyecto una vez
        finalizado el trabajo encargado.
        <br />
        <br />
        Si así se acuerda con el cliente, los materiales del proyecto podrán
        conservarse tanto por nosotros como dentro de las herramientas de IA
        correspondientes para futuros proyectos y para continuar la
        colaboración. El cliente podrá solicitar en cualquier momento la
        eliminación de los materiales conservados, sin perjuicio de las
        obligaciones legales de conservación aplicables.
        <br />
        <br />
        Los proveedores de servicios externos pueden estar sujetos a sus propios
        períodos técnicos de conservación, procedimientos de copia de seguridad
        y prácticas de tratamiento de datos, que pueden seguir siendo aplicables
        después de la eliminación de los datos de nuestra cuenta activa.
        <br />
        <br />
        Los registros empresariales, contables y de facturación se conservan
        durante los períodos exigidos por la legislación austriaca aplicable.
      </p>

      <p>
        <strong>Tus derechos</strong>
        <br />
        En las condiciones previstas por el RGPD, tienes derecho a solicitar el
        acceso a tus datos personales, su rectificación o eliminación, la
        limitación del tratamiento, a oponerte a determinados tratamientos y,
        cuando sea aplicable, a recibir tus datos en un formato portable.
        <br />
        <br />
        Cuando el tratamiento se base en tu consentimiento, podrás retirarlo en
        cualquier momento con efecto para el futuro.
        <br />
        <br />
        Si consideras que el tratamiento de tus datos personales infringe la
        legislación aplicable en materia de protección de datos, tienes derecho
        a presentar una reclamación ante la Autoridad Austriaca de Protección de
        Datos (Österreichische Datenschutzbehörde) o ante otra autoridad de
        control competente.
        <br />
        <br />
        Para ejercer tus derechos o realizar cualquier consulta relacionada con
        el tratamiento de tus datos personales, puedes ponerte en contacto con
        nosotros en{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>.
      </p>
    </>
  );
}

function PrivacyNoticeFr() {
  return (
    <>
      <p>
        La protection des données personnelles est importante pour nous. La
        présente Politique de confidentialité explique quelles données
        personnelles nous traitons lorsque vous utilisez ce site web, nous
        contactez ou travaillez avec SEEMS REAL Studio.
      </p>

      <p>
        <strong>Responsable du traitement</strong>
        <br />
        {impressum.name} / {impressum.brand}
        <br />
        {impressum.street}
        <br />
        {impressum.city}
        <br />
        Autriche
        <br />
        E-mail :{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
      </p>

      <p>
        <strong>Catégories de données personnelles</strong>
        <br />
        Selon la manière dont vous interagissez avec nous, nous pouvons traiter
        votre nom, le nom de votre entreprise, votre adresse e-mail, votre
        numéro de téléphone, vos informations de facturation, le contenu de vos
        messages, les éléments de briefing, les images de produits et autres
        fichiers que vous nous transmettez, ainsi que des données techniques
        liées au site web, telles que votre adresse IP et les informations
        relatives à votre navigateur.
      </p>

      <p>
        <strong>Hébergement du site web</strong>
        <br />
        Ce site web est hébergé par Vercel Inc. Lorsque vous visitez notre site
        web, Vercel peut traiter certaines données techniquement nécessaires,
        telles que votre adresse IP, les informations relatives à votre
        navigateur et les données des journaux du serveur, afin de fournir,
        exploiter et sécuriser le site web.
        <br />
        <br />
        Vercel est établi aux États-Unis et les données peuvent être traitées en
        dehors de l’Espace économique européen. Lorsque cela est nécessaire, les
        transferts internationaux de données sont protégés par des garanties
        appropriées, notamment les clauses contractuelles types de la Commission
        européenne.
      </p>

      <p>
        <strong>Cookies et technologies du site web</strong>
        <br />
        Nous n’utilisons actuellement aucun outil d’analyse, traceur
        publicitaire ou cookie non essentiel sur ce site web.
        <br />
        <br />
        La langue que vous sélectionnez est enregistrée localement dans votre
        navigateur afin de mémoriser votre préférence linguistique. Cette
        information reste sur votre appareil et n’est utilisée ni à des fins
        d’analyse, de publicité ou de suivi, ni pour créer un profil
        utilisateur.
        <br />
        <br />
        Si nous introduisons à l’avenir des technologies nécessitant votre
        consentement, nous mettrons à jour la présente Politique de
        confidentialité et recueillerons votre consentement lorsque cela sera
        requis.
      </p>

      <p>
        <strong>Communication par e-mail</strong>
        <br />
        Nous utilisons GMX, un service fourni par 1&amp;1 Mail &amp; Media GmbH,
        pour nos communications par e-mail. Lorsque vous nous contactez par
        e-mail, les informations que vous nous transmettez, notamment votre
        adresse e-mail et le contenu de votre message, sont traitées par
        l’intermédiaire de ce service afin de répondre à votre demande et de
        communiquer avec vous. GMX stocke les données relatives aux e-mails dans
        des centres de données situés en Allemagne.
      </p>

      <p>
        <strong>Communication relative aux projets et traitement par IA</strong>
        <br />
        Lorsque vous nous contactez ou nous confiez un projet, nous traitons les
        informations nécessaires pour répondre à votre demande, préparer une
        offre, communiquer avec vous, créer et livrer les visuels commandés et
        établir les factures.
        <br />
        <br />
        Cela peut inclure des images de produits, des images de référence, des
        logos, des moodboards et d’autres éléments de briefing que vous nous
        fournissez.
        <br />
        <br />
        Les éléments fournis par le client sont utilisés exclusivement dans le
        but de créer et de livrer le travail commandé. Lorsque cela est
        nécessaire à la création de visuels assistés par intelligence
        artificielle, certains éléments du projet peuvent être téléchargés et
        traités par des services tiers d’IA générative.
        <br />
        <br />
        Veuillez ne pas nous transmettre de contenus que vous n’êtes pas
        autorisé à partager ou à faire traiter à cette fin. Si certains contenus
        comportent des personnes identifiables, veuillez nous en informer au
        préalable afin que nous puissions déterminer si et de quelle manière
        ils peuvent être traités.
      </p>

      <div className="legal-block">
        <p>
          <strong>Bases juridiques</strong>
          <br />
          Lorsque le RGPD s’applique, nous traitons les données personnelles sur
          les bases juridiques suivantes :
        </p>

        <div className="legal-block-items">
          <p>
            <span className="legal-subhead">
              Contrat et mesures précontractuelles (Art. 6(1)(b) RGPD)
            </span>
            Pour répondre aux demandes relatives aux projets, préparer des
            offres, communiquer au sujet de projets potentiels ou en cours et
            fournir nos services.
          </p>

          <p>
            <span className="legal-subhead">
              Intérêts légitimes (Art. 6(1)(f) RGPD)
            </span>
            Pour exploiter et sécuriser notre site web, conserver les journaux
            techniques nécessaires et communiquer efficacement avec nos clients
            et clients potentiels.
          </p>

          <p>
            <span className="legal-subhead">
              Obligations légales (Art. 6(1)(c) RGPD)
            </span>
            Lorsque le traitement est nécessaire au respect des obligations
            légales applicables à notre activité, notamment en matière de
            comptabilité, de fiscalité et de conservation des documents.
          </p>

          <p>
            <span className="legal-subhead">
              Consentement (Art. 6(1)(a) RGPD)
            </span>
            Lorsque le traitement repose sur votre consentement, vous pouvez
            retirer celui-ci à tout moment avec effet pour l’avenir. Le retrait
            du consentement n’affecte pas la licéité du traitement effectué
            avant ce retrait.
          </p>
        </div>
      </div>

      <p>
        <strong>Partage des données</strong>
        <br />
        Nous ne vendons aucune donnée personnelle.
        <br />
        <br />
        Les données personnelles peuvent être traitées par des prestataires de
        services nécessaires à l’exploitation de notre site web, à la
        communication avec nos clients, au respect de nos obligations légales et
        administratives et à la réalisation des projets commandés. Il peut
        notamment s’agir de prestataires d’hébergement, de messagerie
        électronique, de facturation et de services d’IA générative.
        <br />
        <br />
        Nous ne partageons les données personnelles que dans la mesure
        nécessaire à la finalité concernée et avec des garanties appropriées en
        matière de protection des données lorsque celles-ci sont requises.
      </p>

      <p>
        <strong>Transferts internationaux de données</strong>
        <br />
        Certains prestataires tiers que nous utilisons peuvent traiter des
        données personnelles en dehors de l’Espace économique européen (EEE).
        <br />
        <br />
        Lorsque des données personnelles sont transférées à l’international,
        nous prenons les mesures appropriées afin de garantir le respect des
        exigences applicables en matière de protection des données et la mise
        en place de garanties appropriées lorsque celles-ci sont requises.
      </p>

      <p>
        <strong>Durée de conservation</strong>
        <br />
        Nous conservons les données personnelles uniquement pendant la durée
        nécessaire à la finalité pour laquelle elles ont été collectées ou
        pendant la durée requise par la législation applicable.
        <br />
        <br />
        Les éléments relatifs aux projets, notamment les images de produits, les
        images de référence, les logos et les éléments de briefing, sont
        normalement supprimés de nos propres systèmes et, lorsque cela nous est
        possible, des services tiers d’IA utilisés pour le projet une fois le
        travail commandé terminé.
        <br />
        <br />
        Si cela est convenu avec le client, les éléments du projet peuvent être
        conservés par nos soins ainsi que dans les outils d’IA concernés pour de
        futurs projets et la poursuite de notre collaboration. Le client peut
        demander à tout moment la suppression des éléments conservés, sous
        réserve des obligations légales de conservation applicables.
        <br />
        <br />
        Les prestataires de services tiers peuvent être soumis à leurs propres
        durées techniques de conservation, procédures de sauvegarde et pratiques
        de traitement des données, qui peuvent continuer à s’appliquer après la
        suppression des données de notre compte actif.
        <br />
        <br />
        Les documents commerciaux, comptables et de facturation sont conservés
        pendant les durées prévues par la législation autrichienne applicable.
      </p>

      <p>
        <strong>Vos droits</strong>
        <br />
        Sous réserve des conditions prévues par le RGPD, vous disposez
        notamment du droit de demander l’accès à vos données personnelles, leur
        rectification ou leur effacement, la limitation du traitement, de vous
        opposer à certains traitements et, lorsque cela est applicable, de
        recevoir vos données dans un format portable.
        <br />
        <br />
        Lorsque le traitement repose sur votre consentement, vous pouvez
        retirer celui-ci à tout moment avec effet pour l’avenir.
        <br />
        <br />
        Si vous estimez que le traitement de vos données personnelles enfreint
        la législation applicable en matière de protection des données, vous
        avez le droit d’introduire une réclamation auprès de l’Autorité
        autrichienne de protection des données (Österreichische
        Datenschutzbehörde) ou d’une autre autorité de contrôle compétente.
        <br />
        <br />
        Pour exercer vos droits ou pour toute question concernant le traitement
        de vos données personnelles, vous pouvez nous contacter à l’adresse{" "}
        <a href={`mailto:${impressum.email}`}>{impressum.email}</a>.
      </p>
    </>
  );
}

export function Datenschutz() {
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const fromPath = langFromPrivacyPath(window.location.pathname);
    if (fromPath && fromPath !== lang) {
      setLang(fromPath);
    }
  }, [setLang, lang]);

  useEffect(() => {
    const pageTitle = privacyTitles[lang];
    document.title = `${pageTitle} | SEEMS REAL Studio`;
    return () => {
      document.title =
        "SEEMS REAL Studio | Big Vision. Without the Big Production.";
    };
  }, [lang]);

  const body =
    lang === "de" ? (
      <PrivacyNoticeDe />
    ) : lang === "it" ? (
      <PrivacyNoticeIt />
    ) : lang === "es" ? (
      <PrivacyNoticeEs />
    ) : lang === "fr" ? (
      <PrivacyNoticeFr />
    ) : (
      <PrivacyNoticeEn />
    );

  return <LegalPage title={privacyTitles[lang]}>{body}</LegalPage>;
}

function TermsNoticeEn() {
  return (
    <>
      <p>
        These Terms apply to all projects commissioned from SEEMS REAL Studio
        (“we”, “us”). Individual offers may contain project-specific terms and
        details. In the event of any conflict between these Terms and an
        individual offer, the terms of the individual offer will prevail for the
        relevant project.
      </p>

      <p>
        By confirming an order or accepting an offer, the client (“you”) accepts
        these Terms.
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
        You expressly acknowledge that visuals created by SEEMS REAL Studio are
        created wholly or partly using generative AI and may incorporate,
        transform or build upon materials provided by you.
        <br />
        <br />
        Deliverables are AI-assisted or AI-generated visual content and do not
        constitute conventional photography unless expressly agreed otherwise in
        writing.
      </p>

      <p>
        <strong>2. Product representation</strong>
        <br />
        We take reasonable care to create a faithful visual representation of
        the Client’s product and creative brief. However, due to the nature of
        generative AI, variations in product details, colours, textures,
        materials, proportions or other visual characteristics may occur and
        exact reproduction cannot be guaranteed.
        <br />
        <br />
        The Client acknowledges that AI-generated imagery requires careful
        review and is responsible for confirming that the final representation
        of the product is suitable for its intended use before publication.
      </p>

      <p>
        <strong>3. Nature of AI output</strong>
        <br />
        Due to the nature of generative AI, outputs may occasionally contain
        unexpected elements, inaccuracies, artefacts or unintended similarities
        to existing content.
        <br />
        <br />
        We take reasonable care when selecting and refining final visuals.
        However, we cannot guarantee that AI-generated elements will be entirely
        unique or free from unintended similarities to third-party content.
      </p>

      <p>
        <strong>4. No performance guarantee</strong>
        <br />
        We do not guarantee any specific commercial, advertising, engagement,
        conversion, reach or sales results from the use of the deliverables.
        Performance may depend on numerous factors outside our control,
        including the Client’s product, pricing, audience, platform, advertising
        strategy and market conditions.
      </p>

      <p>
        <strong>5. Final approval</strong>
        <br />
        The Client is responsible for carefully reviewing all final visuals
        before publication or other use, including product representation,
        colours, materials, logos, trademarks, text, claims, prices and other
        brand-specific or legally relevant details.
        <br />
        <br />
        Any requested corrections must be communicated before the relevant
        visual is published or otherwise used.
        <br />
        <br />
        Publication, distribution or other use of a delivered visual by the
        Client constitutes approval of that visual.
      </p>

      <p>
        <strong>6. Rights in client input</strong>
        <br />
        The Client confirms that they own or have all necessary rights,
        permissions and authorisations to provide any materials submitted for
        the project, including product images, photographs, logos, designs,
        trademarks, moodboards, reference images and other content.
        <br />
        <br />
        The Client grants SEEMS REAL Studio the rights necessary to use,
        reproduce, adapt and process these materials solely for the purpose of
        performing the commissioned services, including processing through
        third-party software and generative AI tools where necessary for the
        project.
        <br />
        <br />
        The Client is responsible for ensuring that the materials they provide,
        and their authorised use for the project, do not infringe copyright,
        trademark, personality, privacy or other third-party rights.
      </p>

      <p>
        <strong>7. Third-party references</strong>
        <br />
        Moodboards, reference images and third-party creative materials provided
        by the Client are used solely for creative orientation, such as defining
        the desired mood, aesthetic, composition, lighting or overall visual
        direction.
        <br />
        <br />
        References are not intended to be reproduced identically, and SEEMS REAL
        Studio does not guarantee or undertake the exact replication of any
        third-party image, artwork, campaign, design or brand identity.
      </p>

      <p>
        <strong>8. AI tools and confidentiality</strong>
        <br />
        To perform the commissioned services, SEEMS REAL Studio may use
        third-party software and generative AI tools. Client materials,
        including product images, briefing materials and other project assets,
        may be processed through these services where necessary to create the
        agreed deliverables and in accordance with our Privacy Notice.
        <br />
        <br />
        We treat non-public Client materials and confidential project
        information with reasonable care and use them solely for the purpose of
        performing the commissioned services. We do not use confidential Client
        materials for unrelated projects or disclose them to third parties
        except where necessary to provide the services or where required by law.
        <br />
        <br />
        The Client acknowledges that the use of third-party tools may involve
        processing by the respective service providers in accordance with their
        applicable data-processing terms and practices.
      </p>

      <p>
        <strong>9. Usage rights in final visuals</strong>
        <br />
        Upon full payment, the Client receives a non-exclusive, worldwide and
        unlimited right to use the approved final visuals for the Client’s own
        brand and commercial communication within the agreed scope.
        <br />
        <br />
        Unless otherwise stated in the individual offer, this includes use on
        the Client’s website, e-commerce channels, social media, paid
        advertising, newsletters, presentations and print materials.
        <br />
        <br />
        The Client may crop, resize and add text, logos or other brand elements
        to the final visuals as reasonably required for these uses.
        <br />
        <br />
        The final visuals may not be resold, sublicensed, transferred to third
        parties for their independent use, or offered as stock or white-label
        creative work without prior written agreement with SEEMS REAL Studio.
        <br />
        <br />
        Exclusive usage rights or any usage beyond the agreed scope require a
        separate written agreement.
      </p>

      <p>
        <strong>10. Drafts, process materials and creative know-how</strong>
        <br />
        Only the approved final deliverables specified in the individual offer
        are included in the Client’s usage rights.
        <br />
        <br />
        Unused concepts, drafts, variations, prompts, workflows, intermediate
        files, working files, production methods and other process materials
        remain with SEEMS REAL Studio and are not transferred or provided to the
        Client unless expressly agreed otherwise in writing.
        <br />
        <br />
        The commissioning of final visuals does not grant the Client any right
        to access or receive SEEMS REAL Studio’s underlying prompts, workflows,
        tools, methods or creative processes.
      </p>

      <p>
        <strong>11. Revisions</strong>
        <br />
        Package 01 (The Edit) includes one refinement round. Package 02 (The
        Campaign) includes two refinement rounds. Bespoke projects include the
        number of refinement rounds stated in the individual offer.
        <br />
        <br />
        A refinement round covers reasonable adjustments to the agreed visual
        direction, such as minor changes to composition, styling, details or
        overall appearance.
        <br />
        <br />
        Requests for a substantially new concept, setting, creative direction or
        other changes outside the originally agreed brief are not considered a
        refinement and may be quoted separately.
        <br />
        <br />
        Additional refinement rounds or changes beyond the agreed scope may be
        charged separately. Any additional costs will be communicated before the
        additional work begins.
      </p>

      <p>
        <strong>12. Payment</strong>
        <br />
        Unless otherwise agreed in the individual offer, Package 01 (The Edit)
        is payable in full before work begins.
        <br />
        <br />
        Package 02 (The Campaign) and Bespoke projects may require a deposit as
        specified in the individual offer, with the remaining balance due before
        final delivery.
        <br />
        <br />
        Payments must be made using the payment method and payment details
        stated on the invoice or individual offer.
        <br />
        <br />
        Work begins once the required payment and complete briefing materials
        have been received, unless otherwise agreed.
        <br />
        <br />
        SEEMS REAL Studio may pause work or withhold final deliverables while an
        agreed payment is outstanding. Any resulting delay may extend the
        originally estimated delivery timeline.
        <br />
        <br />
        Usage rights in the final visuals are granted only upon full payment of
        the respective project.
      </p>

      <p>
        <strong>13. Cancellation</strong>
        <br />
        The Client may cancel a project by notifying SEEMS REAL Studio in
        writing.
        <br />
        <br />
        If a project is cancelled before production has started, any amounts
        paid will be handled in accordance with the individual offer.
        <br />
        <br />
        Once production has started, work already performed and any costs
        incurred up to the date of cancellation remain payable. Any deposit paid
        may be retained to cover work already performed and costs incurred.
        <br />
        <br />
        If the value of the work already performed exceeds the deposit or amount
        already paid, SEEMS REAL Studio may invoice the Client for the
        outstanding amount.
        <br />
        <br />
        Any mandatory rights that cannot legally be excluded remain unaffected.
      </p>

      <p>
        <strong>14. Client delays</strong>
        <br />
        The Client is responsible for providing all required materials,
        information, feedback and approvals in a timely manner.
        <br />
        <br />
        If materials, feedback or approvals are delayed, the estimated project
        timeline and delivery date may be adjusted accordingly.
        <br />
        <br />
        If a project is paused due to missing Client input for an extended
        period, SEEMS REAL Studio may reschedule the continuation of the project
        based on current availability.
      </p>

      <p>
        <strong>15. Delivery</strong>
        <br />
        Estimated delivery timelines are stated in the individual offer and
        begin once the required payment and complete briefing materials have
        been received, unless otherwise agreed.
        <br />
        <br />
        Final deliverables are provided digitally in the formats and scope
        specified in the individual offer.
        <br />
        <br />
        Delivery dates and timelines are estimates unless expressly agreed as
        binding in writing.
        <br />
        <br />
        Delays caused by late Client materials, feedback or approvals may
        extend the delivery timeline accordingly.
      </p>

      <p>
        <strong>16. AI disclosure and labeling</strong>
        <br />
        The Client expressly acknowledges that the deliverables are created
        wholly or partly using generative AI.
        <br />
        <br />
        Following delivery, the Client is responsible for determining and
        complying with any disclosure, labeling or transparency requirements
        applicable to the Client’s publication, advertising or other use of the
        deliverables, including requirements under applicable law, the EU AI Act
        and relevant platform policies.
        <br />
        <br />
        SEEMS REAL Studio is responsible for the creation and delivery of the
        agreed visuals but does not assume responsibility for the Client’s
        subsequent publication, distribution or use of the deliverables or for
        compliance obligations arising from such use.
      </p>

      <p>
        <strong>17. Portfolio usage</strong>
        <br />
        Unless otherwise agreed in writing, SEEMS REAL Studio may use approved
        final visuals created for the Client for its own portfolio, website,
        social media and self-promotional purposes.
        <br />
        <br />
        Where the project relates to an unreleased product, collection or
        campaign, SEEMS REAL Studio will not publicly share the relevant visuals
        before the Client has publicly released the respective product,
        collection or campaign, unless the Client has given prior permission.
        <br />
        <br />
        Confidential business information, internal materials and non-public
        project details will not be disclosed as part of such portfolio use.
      </p>

      <p>
        <strong>18. Third-party availability and force majeure</strong>
        <br />
        SEEMS REAL Studio may rely on third-party software, generative AI tools
        and other service providers to perform the commissioned services.
        <br />
        <br />
        We are not responsible for delays or temporary inability to perform the
        services caused by circumstances beyond our reasonable control,
        including significant outages or unavailability of third-party services,
        technical infrastructure failures, or other events that could not
        reasonably have been prevented.
        <br />
        <br />
        In such cases, we will make reasonable efforts to resume the project as
        soon as practicable and will inform the Client if the estimated delivery
        timeline is materially affected.
      </p>

      <p>
        <strong>19. Liability</strong>
        <br />
        SEEMS REAL Studio is liable without limitation for damage caused
        intentionally or by gross negligence, as well as for injury to life,
        body or health.
        <br />
        <br />
        In cases of slight negligence, SEEMS REAL Studio is liable only for the
        breach of essential contractual obligations. In such cases, liability is
        limited to damage that was reasonably foreseeable and typical for the
        nature of the commissioned services.
        <br />
        <br />
        To the extent permitted by applicable law, SEEMS REAL Studio is not
        liable for indirect or consequential damages, including loss of profit,
        resulting from the Client’s use of the deliverables.
        <br />
        <br />
        Nothing in these Terms excludes or limits liability where such exclusion
        or limitation is prohibited by applicable law.
      </p>

      <p>
        <strong>20. Client compliance</strong>
        <br />
        The Client is responsible for ensuring that the publication,
        advertising, distribution and other use of the final deliverables
        complies with the laws, regulations and platform requirements applicable
        to the Client, its products and the markets in which the deliverables
        are used.
        <br />
        <br />
        This includes, where applicable, requirements relating to advertising,
        product claims, consumer protection, intellectual property, AI
        transparency and platform-specific policies.
        <br />
        <br />
        SEEMS REAL Studio does not provide legal or regulatory advice regarding
        the Client’s products, advertising claims or specific use of the
        deliverables in individual markets.
      </p>

      <p>
        <strong>21. Governing law</strong>
        <br />
        These Terms and the contractual relationship between the Client and
        SEEMS REAL Studio are governed by Austrian law, excluding its
        conflict-of-law rules.
        <br />
        <br />
        For disputes arising out of or in connection with the contractual
        relationship, the competent courts in Austria shall have jurisdiction to
        the extent that such jurisdiction may validly be agreed under applicable
        law.
        <br />
        <br />
        Any mandatory provisions of applicable law remain unaffected.
      </p>

      <p className="legal-note">
        Draft terms for website and offers · have an Austrian lawyer or WKO
        review before launch (WKO agency T&amp;C templates are a useful
        reference). Not legal advice.
      </p>
    </>
  );
}

function TermsNoticeDe() {
  return (
    <>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Projekte, die bei
        SEEMS REAL Studio („wir“, „uns“) in Auftrag gegeben werden. Individuelle
        Angebote können projektspezifische Bedingungen und Details enthalten. Im
        Falle eines Widerspruchs zwischen diesen Allgemeinen
        Geschäftsbedingungen und einem individuellen Angebot haben die
        Bedingungen des individuellen Angebots für das jeweilige Projekt
        Vorrang.
      </p>

      <p>
        Mit der Bestätigung eines Auftrags oder der Annahme eines Angebots
        akzeptiert der Kunde („Sie“) diese Allgemeinen Geschäftsbedingungen.
      </p>

      <p>
        Unsere Dienstleistungen richten sich ausschließlich an Unternehmen und
        gewerbliche bzw. beruflich handelnde Kunden.
      </p>

      <p className="legal-callout">
        Der Kunde ist dafür verantwortlich, alle finalen Visuals vor der
        Veröffentlichung zu prüfen und freizugeben, insbesondere hinsichtlich
        der korrekten Darstellung von Produkten, Farben, Materialien, Logos,
        Texten und anderen markenspezifischen Details.
      </p>

      <p>
        <strong>1. KI-generierte Inhalte</strong>
        <br />
        Sie erkennen ausdrücklich an, dass die von SEEMS REAL Studio erstellten
        Visuals vollständig oder teilweise mithilfe generativer KI erstellt
        werden und dabei von Ihnen bereitgestellte Materialien einbezogen,
        verändert oder als Grundlage verwendet werden können.
        <br />
        <br />
        Die gelieferten Inhalte sind KI-gestützte oder KI-generierte visuelle
        Inhalte und stellen keine konventionelle Fotografie dar, sofern nicht
        ausdrücklich schriftlich etwas anderes vereinbart wurde.
      </p>

      <p>
        <strong>2. Produktdarstellung</strong>
        <br />
        Wir wenden angemessene Sorgfalt an, um eine möglichst originalgetreue
        visuelle Darstellung des Produkts und des kreativen Briefings des
        Kunden zu erstellen. Aufgrund der Funktionsweise generativer KI können
        jedoch Abweichungen bei Produktdetails, Farben, Texturen, Materialien,
        Proportionen oder anderen visuellen Merkmalen auftreten. Eine exakte
        Reproduktion kann daher nicht garantiert werden.
        <br />
        <br />
        Der Kunde erkennt an, dass KI-generierte Bilder einer sorgfältigen
        Prüfung bedürfen, und ist dafür verantwortlich, vor der Veröffentlichung
        zu bestätigen, dass die finale Produktdarstellung für den vorgesehenen
        Verwendungszweck geeignet ist.
      </p>

      <p>
        <strong>3. Beschaffenheit von KI-generierten Ergebnissen</strong>
        <br />
        Aufgrund der Funktionsweise generativer KI können Ergebnisse gelegentlich
        unerwartete Elemente, Ungenauigkeiten, Artefakte oder unbeabsichtigte
        Ähnlichkeiten mit bereits bestehenden Inhalten enthalten.
        <br />
        <br />
        Wir wenden bei der Auswahl und Überarbeitung der finalen Visuals
        angemessene Sorgfalt an. Wir können jedoch nicht garantieren, dass
        KI-generierte Elemente vollständig einzigartig oder frei von
        unbeabsichtigten Ähnlichkeiten mit Inhalten Dritter sind.
      </p>

      <p>
        <strong>4. Keine Erfolgsgarantie</strong>
        <br />
        Wir garantieren keine bestimmten wirtschaftlichen Ergebnisse oder
        bestimmte Werbe-, Engagement-, Conversion-, Reichweiten- oder
        Verkaufsergebnisse durch die Verwendung der gelieferten Inhalte.
        <br />
        <br />
        Der Erfolg kann von zahlreichen Faktoren außerhalb unseres
        Einflussbereichs abhängen, darunter das Produkt des Kunden,
        Preisgestaltung, Zielgruppe, Plattform, Werbestrategie und
        Marktbedingungen.
      </p>

      <p>
        <strong>5. Finale Freigabe</strong>
        <br />
        Der Kunde ist dafür verantwortlich, sämtliche finalen Visuals vor ihrer
        Veröffentlichung oder anderweitigen Verwendung sorgfältig zu prüfen.
        Dies umfasst insbesondere Produktdarstellung, Farben, Materialien,
        Logos, Marken, Texte, Werbeaussagen, Preise sowie sonstige
        markenspezifische oder rechtlich relevante Details.
        <br />
        <br />
        Gewünschte Korrekturen müssen mitgeteilt werden, bevor das betreffende
        Visual veröffentlicht oder anderweitig verwendet wird.
        <br />
        <br />
        Die Veröffentlichung, Verbreitung oder sonstige Verwendung eines
        gelieferten Visuals durch den Kunden gilt als Freigabe dieses Visuals.
      </p>

      <p>
        <strong>6. Rechte an vom Kunden bereitgestellten Materialien</strong>
        <br />
        Der Kunde bestätigt, dass er über sämtliche erforderlichen Rechte,
        Genehmigungen und Befugnisse verfügt, um die für das Projekt
        bereitgestellten Materialien zur Verfügung zu stellen. Dazu zählen
        insbesondere Produktbilder, Fotografien, Logos, Designs, Marken,
        Moodboards, Referenzbilder und sonstige Inhalte.
        <br />
        <br />
        Der Kunde räumt SEEMS REAL Studio die für die Durchführung der
        beauftragten Leistungen erforderlichen Rechte ein, diese Materialien
        ausschließlich für diesen Zweck zu verwenden, zu vervielfältigen,
        anzupassen und zu verarbeiten. Dies umfasst, soweit für das Projekt
        erforderlich, auch die Verarbeitung über Software und generative
        KI-Dienste von Drittanbietern.
        <br />
        <br />
        Der Kunde ist dafür verantwortlich sicherzustellen, dass die
        bereitgestellten Materialien und deren genehmigte Verwendung für das
        Projekt keine Urheberrechte, Markenrechte, Persönlichkeitsrechte,
        Datenschutzrechte oder sonstigen Rechte Dritter verletzen.
      </p>

      <p>
        <strong>7. Referenzen Dritter</strong>
        <br />
        Moodboards, Referenzbilder und sonstige kreative Materialien Dritter,
        die vom Kunden bereitgestellt werden, dienen ausschließlich der
        kreativen Orientierung, beispielsweise zur Definition der gewünschten
        Stimmung, Ästhetik, Komposition, Beleuchtung oder allgemeinen visuellen
        Richtung.
        <br />
        <br />
        Referenzen sind nicht zur identischen Reproduktion bestimmt. SEEMS REAL
        Studio garantiert oder übernimmt keine exakte Nachbildung von Bildern,
        Kunstwerken, Kampagnen, Designs oder Markenidentitäten Dritter.
      </p>

      <p>
        <strong>8. KI-Tools und Vertraulichkeit</strong>
        <br />
        Zur Erbringung der beauftragten Leistungen kann SEEMS REAL Studio
        Software und generative KI-Tools von Drittanbietern einsetzen.
        Kundenmaterialien, einschließlich Produktbildern, Briefing-Unterlagen
        und anderen Projektmaterialien, können über diese Dienste verarbeitet
        werden, soweit dies zur Erstellung der vereinbarten Leistungen
        erforderlich ist und im Einklang mit unserer Datenschutzerklärung
        erfolgt.
        <br />
        <br />
        Wir behandeln nicht öffentliche Kundenmaterialien und vertrauliche
        Projektinformationen mit angemessener Sorgfalt und verwenden sie
        ausschließlich zur Erbringung der beauftragten Leistungen. Wir verwenden
        vertrauliche Kundenmaterialien nicht für andere, nicht mit dem Auftrag
        zusammenhängende Projekte und geben sie nicht an Dritte weiter, außer
        soweit dies zur Erbringung unserer Leistungen erforderlich oder gesetzlich
        vorgeschrieben ist.
        <br />
        <br />
        Der Kunde erkennt an, dass der Einsatz von Drittanbieter-Tools eine
        Verarbeitung durch die jeweiligen Dienstleister gemäß deren geltenden
        Datenschutz- und Verarbeitungsbedingungen beinhalten kann.
      </p>

      <p>
        <strong>9. Nutzungsrechte an finalen Visuals</strong>
        <br />
        Nach vollständiger Bezahlung erhält der Kunde ein nicht ausschließliches,
        weltweites und zeitlich unbeschränktes Recht, die freigegebenen finalen
        Visuals für die eigene Marke und kommerzielle Kommunikation im
        vereinbarten Umfang zu verwenden.
        <br />
        <br />
        Sofern im individuellen Angebot nichts anderes vereinbart wurde, umfasst
        dies insbesondere die Nutzung auf der Website und in E-Commerce-Kanälen
        des Kunden, in sozialen Medien, bezahlter Werbung, Newslettern,
        Präsentationen und Printmaterialien.
        <br />
        <br />
        Der Kunde darf die finalen Visuals im für diese Verwendungszwecke
        angemessenen Umfang zuschneiden, in der Größe verändern sowie Texte,
        Logos oder andere Markenelemente hinzufügen.
        <br />
        <br />
        Die finalen Visuals dürfen ohne vorherige schriftliche Vereinbarung mit
        SEEMS REAL Studio nicht weiterverkauft, unterlizenziert, zur
        eigenständigen Nutzung an Dritte übertragen oder als Stock- bzw.
        White-Label-Kreativleistung angeboten werden.
        <br />
        <br />
        Exklusive Nutzungsrechte oder eine Nutzung außerhalb des vereinbarten
        Umfangs bedürfen einer gesonderten schriftlichen Vereinbarung.
      </p>

      <p>
        <strong>10. Entwürfe, Prozessmaterialien und kreatives Know-how</strong>
        <br />
        Nur die im individuellen Angebot festgelegten und freigegebenen finalen
        Leistungen sind von den dem Kunden eingeräumten Nutzungsrechten umfasst.
        <br />
        <br />
        Nicht verwendete Konzepte, Entwürfe, Varianten, Prompts, Workflows,
        Zwischen- und Arbeitsdateien, Produktionsmethoden sowie sonstige
        Prozessmaterialien verbleiben bei SEEMS REAL Studio und werden nicht an
        den Kunden übertragen oder herausgegeben, sofern nicht ausdrücklich
        schriftlich etwas anderes vereinbart wurde.
        <br />
        <br />
        Die Beauftragung finaler Visuals gewährt dem Kunden keinen Anspruch auf
        Zugang zu oder Herausgabe von zugrunde liegenden Prompts, Workflows,
        Tools, Methoden oder kreativen Prozessen von SEEMS REAL Studio.
      </p>

      <p>
        <strong>11. Überarbeitungen</strong>
        <br />
        Paket 01 (The Edit) umfasst eine Überarbeitungsrunde. Paket 02 (The
        Campaign) umfasst zwei Überarbeitungsrunden. Bei individuellen Projekten
        gilt die im jeweiligen Angebot angegebene Anzahl an
        Überarbeitungsrunden.
        <br />
        <br />
        Eine Überarbeitungsrunde umfasst angemessene Anpassungen innerhalb der
        vereinbarten visuellen Richtung, beispielsweise kleinere Änderungen an
        Komposition, Styling, Details oder dem allgemeinen Erscheinungsbild.
        <br />
        <br />
        Wünsche nach einem wesentlich neuen Konzept, Setting, einer neuen
        kreativen Richtung oder sonstigen Änderungen außerhalb des ursprünglich
        vereinbarten Briefings gelten nicht als Überarbeitung und können
        gesondert angeboten und berechnet werden.
        <br />
        <br />
        Zusätzliche Überarbeitungsrunden oder Änderungen außerhalb des
        vereinbarten Leistungsumfangs können gesondert berechnet werden. Etwaige
        zusätzliche Kosten werden dem Kunden mitgeteilt, bevor die zusätzlichen
        Arbeiten beginnen.
      </p>

      <p>
        <strong>12. Zahlung</strong>
        <br />
        Sofern im individuellen Angebot nichts anderes vereinbart wurde, ist
        Paket 01 (The Edit) vor Beginn der Arbeiten vollständig zu bezahlen.
        <br />
        <br />
        Für Paket 02 (The Campaign) und individuelle Projekte kann eine im
        jeweiligen Angebot festgelegte Anzahlung erforderlich sein. Der
        verbleibende Betrag ist vor der finalen Lieferung fällig.
        <br />
        <br />
        Zahlungen sind über die auf der Rechnung oder im individuellen Angebot
        angegebene Zahlungsmethode und unter Verwendung der dort angegebenen
        Zahlungsdaten vorzunehmen.
        <br />
        <br />
        Die Arbeiten beginnen nach Eingang der erforderlichen Zahlung und der
        vollständigen Briefing-Unterlagen, sofern nichts anderes vereinbart
        wurde.
        <br />
        <br />
        SEEMS REAL Studio ist berechtigt, die Arbeiten zu pausieren oder finale
        Leistungen zurückzuhalten, solange eine vereinbarte Zahlung aussteht.
        Dadurch entstehende Verzögerungen können den ursprünglich geschätzten
        Lieferzeitraum entsprechend verlängern.
        <br />
        <br />
        Nutzungsrechte an den finalen Visuals werden erst nach vollständiger
        Bezahlung des jeweiligen Projekts eingeräumt.
      </p>

      <p>
        <strong>13. Stornierung</strong>
        <br />
        Der Kunde kann ein Projekt durch schriftliche Mitteilung an SEEMS REAL
        Studio stornieren.
        <br />
        <br />
        Wird ein Projekt vor Produktionsbeginn storniert, werden bereits
        geleistete Zahlungen entsprechend den Bedingungen des individuellen
        Angebots behandelt.
        <br />
        <br />
        Nach Produktionsbeginn bleiben die bis zum Zeitpunkt der Stornierung
        bereits erbrachten Leistungen und entstandenen Kosten zahlbar. Eine
        bereits geleistete Anzahlung kann zur Deckung der bis dahin erbrachten
        Leistungen und entstandenen Kosten einbehalten werden.
        <br />
        <br />
        Übersteigt der Wert der bereits erbrachten Leistungen die geleistete
        Anzahlung bzw. den bereits gezahlten Betrag, kann SEEMS REAL Studio den
        ausstehenden Betrag in Rechnung stellen.
        <br />
        <br />
        Zwingende gesetzliche Rechte, die nicht ausgeschlossen werden können,
        bleiben unberührt.
      </p>

      <p>
        <strong>14. Verzögerungen durch den Kunden</strong>
        <br />
        Der Kunde ist dafür verantwortlich, alle erforderlichen Materialien,
        Informationen, Rückmeldungen und Freigaben rechtzeitig bereitzustellen.
        <br />
        <br />
        Verzögern sich Materialien, Rückmeldungen oder Freigaben, können der
        geschätzte Projektzeitplan und der Liefertermin entsprechend angepasst
        werden.
        <br />
        <br />
        Wird ein Projekt aufgrund fehlender Mitwirkung des Kunden für einen
        längeren Zeitraum pausiert, kann SEEMS REAL Studio die Fortsetzung des
        Projekts entsprechend der aktuellen Verfügbarkeit neu terminieren.
      </p>

      <p>
        <strong>15. Lieferung</strong>
        <br />
        Die geschätzten Lieferzeiten werden im individuellen Angebot angegeben
        und beginnen mit Eingang der erforderlichen Zahlung und der
        vollständigen Briefing-Unterlagen, sofern nichts anderes vereinbart
        wurde.
        <br />
        <br />
        Die finalen Leistungen werden digital in den im individuellen Angebot
        festgelegten Formaten und im vereinbarten Umfang bereitgestellt.
        <br />
        <br />
        Liefertermine und Zeitangaben sind Schätzungen, sofern sie nicht
        ausdrücklich schriftlich als verbindlich vereinbart wurden.
        <br />
        <br />
        Verzögerungen aufgrund verspätet bereitgestellter Materialien,
        Rückmeldungen oder Freigaben des Kunden können die Lieferzeit
        entsprechend verlängern.
      </p>

      <p>
        <strong>16. KI-Kennzeichnung und Transparenz</strong>
        <br />
        Der Kunde erkennt ausdrücklich an, dass die gelieferten Inhalte
        vollständig oder teilweise mithilfe generativer KI erstellt werden.
        <br />
        <br />
        Nach der Lieferung ist der Kunde dafür verantwortlich zu prüfen und
        einzuhalten, welche Offenlegungs-, Kennzeichnungs- oder
        Transparenzpflichten für seine Veröffentlichung, Werbung oder sonstige
        Verwendung der gelieferten Inhalte gelten. Dies umfasst insbesondere
        Anforderungen nach geltendem Recht, dem EU AI Act sowie den jeweils
        geltenden Richtlinien der verwendeten Plattformen.
        <br />
        <br />
        SEEMS REAL Studio ist für die Erstellung und Lieferung der vereinbarten
        Visuals verantwortlich, übernimmt jedoch keine Verantwortung für die
        anschließende Veröffentlichung, Verbreitung oder Verwendung der
        gelieferten Inhalte durch den Kunden oder für Compliance-Verpflichtungen,
        die sich aus dieser Verwendung ergeben.
      </p>

      <p>
        <strong>17. Portfolio-Nutzung</strong>
        <br />
        Sofern nicht schriftlich etwas anderes vereinbart wurde, darf SEEMS REAL
        Studio die für den Kunden erstellten und freigegebenen finalen Visuals
        für das eigene Portfolio, die eigene Website, Social-Media-Kanäle und
        Eigenwerbung verwenden.
        <br />
        <br />
        Bezieht sich das Projekt auf ein noch nicht veröffentlichtes Produkt,
        eine Kollektion oder Kampagne, wird SEEMS REAL Studio die entsprechenden
        Visuals nicht öffentlich teilen, bevor der Kunde das betreffende
        Produkt, die Kollektion oder Kampagne selbst veröffentlicht hat, sofern
        der Kunde nicht zuvor eine entsprechende Freigabe erteilt hat.
        <br />
        <br />
        Vertrauliche Geschäftsinformationen, interne Materialien und nicht
        öffentliche Projektdetails werden im Rahmen dieser Portfolio-Nutzung
        nicht veröffentlicht.
      </p>

      <p>
        <strong>18. Verfügbarkeit von Drittanbietern und höhere Gewalt</strong>
        <br />
        SEEMS REAL Studio kann zur Erbringung der beauftragten Leistungen auf
        Software, generative KI-Tools und andere Dienstleister von Drittanbietern
        angewiesen sein.
        <br />
        <br />
        Wir sind nicht verantwortlich für Verzögerungen oder eine vorübergehende
        Unmöglichkeit der Leistungserbringung, die durch Umstände außerhalb
        unseres zumutbaren Einflussbereichs verursacht werden. Dazu zählen
        insbesondere erhebliche Ausfälle oder die Nichtverfügbarkeit von
        Drittanbieterdiensten, technische Infrastrukturausfälle oder andere
        Ereignisse, die vernünftigerweise nicht hätten verhindert werden können.
        <br />
        <br />
        In solchen Fällen bemühen wir uns in angemessenem Umfang, das Projekt so
        bald wie möglich fortzusetzen, und informieren den Kunden, wenn der
        geschätzte Lieferzeitraum wesentlich beeinträchtigt wird.
      </p>

      <p>
        <strong>19. Haftung</strong>
        <br />
        SEEMS REAL Studio haftet unbeschränkt für vorsätzlich oder grob
        fahrlässig verursachte Schäden sowie für Schäden aus der Verletzung von
        Leben, Körper oder Gesundheit.
        <br />
        <br />
        Bei leichter Fahrlässigkeit haftet SEEMS REAL Studio nur bei Verletzung
        wesentlicher Vertragspflichten. In diesem Fall ist die Haftung auf
        Schäden beschränkt, die vernünftigerweise vorhersehbar und für die Art
        der beauftragten Leistung typisch sind.
        <br />
        <br />
        Soweit gesetzlich zulässig, haftet SEEMS REAL Studio nicht für indirekte
        Schäden oder Folgeschäden, einschließlich entgangenen Gewinns, die aus
        der Nutzung der gelieferten Inhalte durch den Kunden entstehen.
        <br />
        <br />
        Diese Bedingungen schließen keine Haftung aus und beschränken keine
        Haftung, soweit ein solcher Ausschluss oder eine solche Beschränkung
        nach geltendem Recht unzulässig ist.
      </p>

      <p>
        <strong>20. Einhaltung gesetzlicher Vorschriften durch den Kunden</strong>
        <br />
        Der Kunde ist dafür verantwortlich sicherzustellen, dass die
        Veröffentlichung, Werbung, Verbreitung und sonstige Verwendung der
        finalen Leistungen den für den Kunden, seine Produkte und die Märkte, in
        denen die Leistungen eingesetzt werden, geltenden Gesetzen, Vorschriften
        und Plattformanforderungen entspricht.
        <br />
        <br />
        Dies umfasst, soweit anwendbar, insbesondere Anforderungen in Bezug auf
        Werbung, Produktaussagen, Verbraucherschutz, geistiges Eigentum,
        KI-Transparenz und plattformspezifische Richtlinien.
        <br />
        <br />
        SEEMS REAL Studio erbringt keine Rechts- oder Regulierungsberatung
        hinsichtlich der Produkte des Kunden, seiner Werbeaussagen oder der
        konkreten Verwendung der gelieferten Leistungen in einzelnen Märkten.
      </p>

      <p>
        <strong>21. Anwendbares Recht und Gerichtsstand</strong>
        <br />
        Diese Allgemeinen Geschäftsbedingungen und das Vertragsverhältnis
        zwischen dem Kunden und SEEMS REAL Studio unterliegen österreichischem
        Recht unter Ausschluss der Kollisionsnormen.
        <br />
        <br />
        Für Streitigkeiten aus oder im Zusammenhang mit dem Vertragsverhältnis
        sind, soweit eine entsprechende Gerichtsstandsvereinbarung nach
        geltendem Recht wirksam getroffen werden kann, die zuständigen Gerichte
        in Österreich zuständig.
        <br />
        <br />
        Zwingende gesetzliche Bestimmungen bleiben unberührt.
      </p>
    </>
  );
}

function TermsNoticeIt() {
  return (
    <>
      <p>
        I presenti Termini e Condizioni si applicano a tutti i progetti
        commissionati a SEEMS REAL Studio (“noi”, “ci”). Le offerte individuali
        possono contenere condizioni e dettagli specifici relativi al progetto.
        In caso di conflitto tra i presenti Termini e Condizioni e un’offerta
        individuale, le condizioni dell’offerta individuale prevarranno per il
        relativo progetto.
      </p>

      <p>
        Confermando un ordine o accettando un’offerta, il cliente (“voi”, “il
        Cliente”) accetta i presenti Termini e Condizioni.
      </p>

      <p>
        I nostri servizi sono offerti esclusivamente a imprese e clienti
        professionali che agiscono nell’ambito della propria attività
        commerciale o professionale.
      </p>

      <p className="legal-callout">
        Il Cliente è responsabile della revisione e dell’approvazione di tutti i
        contenuti visivi finali prima della pubblicazione, inclusa la correttezza
        di prodotti, colori, materiali, loghi, testi e altri dettagli specifici
        del brand.
      </p>

      <p>
        <strong>1. Contenuti generati con IA</strong>
        <br />
        Il Cliente riconosce espressamente che i contenuti visivi creati da
        SEEMS REAL Studio sono realizzati interamente o parzialmente mediante
        intelligenza artificiale generativa e possono incorporare, trasformare o
        basarsi su materiali forniti dal Cliente.
        <br />
        <br />
        I contenuti forniti sono contenuti visivi assistiti o generati tramite
        IA e non costituiscono fotografia convenzionale, salvo diverso accordo
        espresso per iscritto.
      </p>

      <p>
        <strong>2. Rappresentazione del prodotto</strong>
        <br />
        Adottiamo ragionevole cura per creare una rappresentazione visiva fedele
        del prodotto e del briefing creativo del Cliente. Tuttavia, a causa
        della natura dell’intelligenza artificiale generativa, possono
        verificarsi variazioni nei dettagli del prodotto, nei colori, nelle
        texture, nei materiali, nelle proporzioni o in altre caratteristiche
        visive e non può essere garantita una riproduzione esatta.
        <br />
        <br />
        Il Cliente riconosce che le immagini generate tramite IA richiedono
        un’attenta verifica ed è responsabile di confermare, prima della
        pubblicazione, che la rappresentazione finale del prodotto sia adeguata
        all’uso previsto.
      </p>

      <p>
        <strong>3. Natura dei risultati generati tramite IA</strong>
        <br />
        A causa della natura dell’intelligenza artificiale generativa, i
        risultati possono occasionalmente contenere elementi inattesi,
        imprecisioni, artefatti o somiglianze involontarie con contenuti
        esistenti.
        <br />
        <br />
        Adottiamo ragionevole cura nella selezione e nel perfezionamento dei
        contenuti visivi finali. Tuttavia, non possiamo garantire che gli
        elementi generati tramite IA siano completamente unici o privi di
        somiglianze involontarie con contenuti di terzi.
      </p>

      <p>
        <strong>4. Nessuna garanzia di risultati</strong>
        <br />
        Non garantiamo risultati specifici di natura commerciale, pubblicitaria,
        di engagement, conversione, copertura o vendita derivanti dall’utilizzo
        dei contenuti forniti.
        <br />
        <br />
        I risultati possono dipendere da numerosi fattori al di fuori del nostro
        controllo, tra cui il prodotto del Cliente, i prezzi, il pubblico, la
        piattaforma, la strategia pubblicitaria e le condizioni di mercato.
      </p>

      <p>
        <strong>5. Approvazione finale</strong>
        <br />
        Il Cliente è responsabile della revisione accurata di tutti i contenuti
        visivi finali prima della pubblicazione o di qualsiasi altro utilizzo,
        inclusi la rappresentazione del prodotto, i colori, i materiali, i
        loghi, i marchi, i testi, le dichiarazioni pubblicitarie, i prezzi e
        altri dettagli specifici del brand o giuridicamente rilevanti.
        <br />
        <br />
        Eventuali correzioni richieste devono essere comunicate prima che il
        relativo contenuto visivo venga pubblicato o utilizzato in altro modo.
        <br />
        <br />
        La pubblicazione, distribuzione o altro utilizzo di un contenuto visivo
        consegnato da parte del Cliente costituisce approvazione dello stesso.
      </p>

      <p>
        <strong>6. Diritti sui materiali forniti dal Cliente</strong>
        <br />
        Il Cliente conferma di possedere o disporre di tutti i diritti, permessi
        e autorizzazioni necessari per fornire i materiali utilizzati nel
        progetto, inclusi immagini di prodotti, fotografie, loghi, design,
        marchi, moodboard, immagini di riferimento e altri contenuti.
        <br />
        <br />
        Il Cliente concede a SEEMS REAL Studio i diritti necessari per
        utilizzare, riprodurre, adattare e trattare tali materiali
        esclusivamente allo scopo di fornire i servizi commissionati. Ciò
        include, ove necessario per il progetto, il trattamento tramite software
        e strumenti di intelligenza artificiale generativa forniti da terzi.
        <br />
        <br />
        Il Cliente è responsabile di garantire che i materiali forniti e il loro
        utilizzo autorizzato nell’ambito del progetto non violino diritti
        d’autore, marchi, diritti della personalità, diritti alla privacy o
        altri diritti di terzi.
      </p>

      <p>
        <strong>7. Riferimenti di terzi</strong>
        <br />
        Moodboard, immagini di riferimento e altri materiali creativi di terzi
        forniti dal Cliente vengono utilizzati esclusivamente come orientamento
        creativo, ad esempio per definire l’atmosfera, l’estetica, la
        composizione, l’illuminazione o la direzione visiva generale desiderata.
        <br />
        <br />
        I riferimenti non sono destinati a essere riprodotti in modo identico e
        SEEMS REAL Studio non garantisce né si impegna a realizzare una
        riproduzione esatta di immagini, opere, campagne, design o identità di
        brand di terzi.
      </p>

      <p>
        <strong>8. Strumenti di IA e riservatezza</strong>
        <br />
        Per fornire i servizi commissionati, SEEMS REAL Studio può utilizzare
        software e strumenti di intelligenza artificiale generativa forniti da
        terzi. I materiali del Cliente, incluse immagini di prodotti, materiali
        di briefing e altre risorse relative al progetto, possono essere
        trattati tramite tali servizi ove necessario per creare i contenuti
        concordati e in conformità con la nostra Informativa sulla Privacy.
        <br />
        <br />
        Trattiamo con ragionevole cura i materiali non pubblici del Cliente e le
        informazioni riservate relative al progetto e li utilizziamo
        esclusivamente allo scopo di fornire i servizi commissionati. Non
        utilizziamo materiali riservati del Cliente per progetti non correlati e
        non li divulghiamo a terzi, salvo quando ciò sia necessario per fornire
        i servizi o richiesto dalla legge.
        <br />
        <br />
        Il Cliente riconosce che l’utilizzo di strumenti di terzi può comportare
        il trattamento dei dati da parte dei rispettivi fornitori in conformità
        con le loro condizioni e pratiche applicabili in materia di trattamento
        dei dati.
      </p>

      <p>
        <strong>9. Diritti di utilizzo dei contenuti visivi finali</strong>
        <br />
        A seguito del pagamento integrale, il Cliente riceve un diritto non
        esclusivo, mondiale e senza limiti di durata di utilizzare i contenuti
        visivi finali approvati per il proprio brand e per la propria
        comunicazione commerciale nell’ambito concordato.
        <br />
        <br />
        Salvo diversa indicazione nell’offerta individuale, ciò comprende
        l’utilizzo sul sito web del Cliente, nei canali e-commerce, sui social
        media, nella pubblicità a pagamento, nelle newsletter, nelle
        presentazioni e nei materiali stampati.
        <br />
        <br />
        Il Cliente può ritagliare e ridimensionare i contenuti visivi finali e
        aggiungere testi, loghi o altri elementi del brand nella misura
        ragionevolmente necessaria per tali utilizzi.
        <br />
        <br />
        I contenuti visivi finali non possono essere rivenduti, concessi in
        sublicenza, trasferiti a terzi per un loro utilizzo indipendente né
        offerti come contenuti stock o servizi creativi white-label senza previo
        accordo scritto con SEEMS REAL Studio.
        <br />
        <br />
        Diritti di utilizzo esclusivi o qualsiasi utilizzo oltre l’ambito
        concordato richiedono un accordo scritto separato.
      </p>

      <p>
        <strong>10. Bozze, materiali di processo e know-how creativo</strong>
        <br />
        Solo i contenuti finali approvati e specificati nell’offerta individuale
        sono inclusi nei diritti di utilizzo concessi al Cliente.
        <br />
        <br />
        Concetti non utilizzati, bozze, varianti, prompt, workflow, file
        intermedi, file di lavoro, metodi di produzione e altri materiali di
        processo rimangono di SEEMS REAL Studio e non vengono trasferiti o
        forniti al Cliente, salvo diverso accordo espresso per iscritto.
        <br />
        <br />
        La commissione dei contenuti visivi finali non conferisce al Cliente
        alcun diritto di accesso o di ricezione dei prompt, workflow, strumenti,
        metodi o processi creativi sottostanti di SEEMS REAL Studio.
      </p>

      <p>
        <strong>11. Revisioni</strong>
        <br />
        Il Pacchetto 01 (The Edit) include un ciclo di revisione. Il Pacchetto
        02 (The Campaign) include due cicli di revisione. I progetti Bespoke
        includono il numero di cicli di revisione indicato nell’offerta
        individuale.
        <br />
        <br />
        Un ciclo di revisione comprende modifiche ragionevoli nell’ambito della
        direzione visiva concordata, come piccoli cambiamenti alla composizione,
        allo styling, ai dettagli o all’aspetto generale.
        <br />
        <br />
        Le richieste relative a un concetto, un’ambientazione o una direzione
        creativa sostanzialmente nuovi, nonché altre modifiche al di fuori del
        briefing originariamente concordato, non sono considerate revisioni e
        possono essere oggetto di un preventivo separato.
        <br />
        <br />
        Ulteriori cicli di revisione o modifiche oltre l’ambito concordato
        possono essere addebitati separatamente. Eventuali costi aggiuntivi
        saranno comunicati prima dell’inizio del lavoro supplementare.
      </p>

      <p>
        <strong>12. Pagamento</strong>
        <br />
        Salvo diverso accordo nell’offerta individuale, il Pacchetto 01 (The
        Edit) deve essere pagato integralmente prima dell’inizio dei lavori.
        <br />
        <br />
        Il Pacchetto 02 (The Campaign) e i progetti Bespoke possono richiedere
        un acconto come specificato nell’offerta individuale, con il saldo
        dovuto prima della consegna finale.
        <br />
        <br />
        I pagamenti devono essere effettuati utilizzando il metodo e i dati di
        pagamento indicati nella fattura o nell’offerta individuale.
        <br />
        <br />
        I lavori iniziano una volta ricevuti il pagamento richiesto e tutti i
        materiali necessari per il briefing, salvo diverso accordo.
        <br />
        <br />
        SEEMS REAL Studio può sospendere i lavori o trattenere i contenuti
        finali finché un pagamento concordato risulta ancora dovuto. Eventuali
        ritardi conseguenti possono estendere la tempistica di consegna
        originariamente stimata.
        <br />
        <br />
        I diritti di utilizzo dei contenuti visivi finali vengono concessi solo
        dopo il pagamento integrale del relativo progetto.
      </p>

      <p>
        <strong>13. Cancellazione</strong>
        <br />
        Il Cliente può cancellare un progetto mediante comunicazione scritta a
        SEEMS REAL Studio.
        <br />
        <br />
        Se un progetto viene cancellato prima dell’inizio della produzione, gli
        importi già versati saranno gestiti in conformità con quanto previsto
        nell’offerta individuale.
        <br />
        <br />
        Una volta iniziata la produzione, il lavoro già svolto e gli eventuali
        costi sostenuti fino alla data della cancellazione rimangono dovuti.
        L’eventuale acconto già versato può essere trattenuto per coprire il
        lavoro già svolto e i costi sostenuti.
        <br />
        <br />
        Se il valore del lavoro già svolto supera l’acconto o l’importo già
        versato, SEEMS REAL Studio può fatturare al Cliente l’importo residuo.
        <br />
        <br />
        Restano impregiudicati eventuali diritti inderogabili previsti dalla
        legge.
      </p>

      <p>
        <strong>14. Ritardi da parte del Cliente</strong>
        <br />
        Il Cliente è responsabile di fornire tempestivamente tutti i materiali,
        le informazioni, i feedback e le approvazioni necessari.
        <br />
        <br />
        In caso di ritardo nella fornitura di materiali, feedback o
        approvazioni, la tempistica stimata del progetto e la data di consegna
        possono essere adeguate di conseguenza.
        <br />
        <br />
        Se un progetto viene sospeso per un periodo prolungato a causa della
        mancata collaborazione del Cliente, SEEMS REAL Studio può riprogrammare
        la prosecuzione del progetto in base alla disponibilità del momento.
      </p>

      <p>
        <strong>15. Consegna</strong>
        <br />
        Le tempistiche di consegna stimate sono indicate nell’offerta individuale
        e decorrono dal momento in cui sono stati ricevuti il pagamento
        richiesto e tutti i materiali necessari per il briefing, salvo diverso
        accordo.
        <br />
        <br />
        I contenuti finali vengono forniti in formato digitale nei formati e
        nell’ambito specificati nell’offerta individuale.
        <br />
        <br />
        Le date e le tempistiche di consegna sono stime, salvo che siano state
        espressamente concordate per iscritto come vincolanti.
        <br />
        <br />
        I ritardi causati dalla consegna tardiva di materiali, feedback o
        approvazioni da parte del Cliente possono prolungare di conseguenza la
        tempistica di consegna.
      </p>

      <p>
        <strong>16. Informativa e identificazione dei contenuti IA</strong>
        <br />
        Il Cliente riconosce espressamente che i contenuti forniti sono creati
        interamente o parzialmente mediante intelligenza artificiale generativa.
        <br />
        <br />
        Dopo la consegna, il Cliente è responsabile di determinare e rispettare
        eventuali obblighi di informazione, etichettatura o trasparenza
        applicabili alla pubblicazione, alla pubblicità o ad altro utilizzo dei
        contenuti forniti, inclusi i requisiti previsti dalla normativa
        applicabile, dall’EU AI Act e dalle politiche delle piattaforme
        pertinenti.
        <br />
        <br />
        SEEMS REAL Studio è responsabile della creazione e della consegna dei
        contenuti visivi concordati, ma non assume responsabilità per la
        successiva pubblicazione, distribuzione o utilizzo dei contenuti da
        parte del Cliente né per gli obblighi di conformità derivanti da tale
        utilizzo.
      </p>

      <p>
        <strong>17. Utilizzo nel portfolio</strong>
        <br />
        Salvo diverso accordo scritto, SEEMS REAL Studio può utilizzare i
        contenuti visivi finali approvati e creati per il Cliente nel proprio
        portfolio, sul proprio sito web, sui propri canali social media e per
        finalità di autopromozione.
        <br />
        <br />
        Qualora il progetto riguardi un prodotto, una collezione o una campagna
        non ancora pubblicati, SEEMS REAL Studio non renderà pubblici i relativi
        contenuti visivi prima che il Cliente abbia pubblicamente lanciato il
        rispettivo prodotto, collezione o campagna, salvo previa autorizzazione
        del Cliente.
        <br />
        <br />
        Informazioni commerciali riservate, materiali interni e dettagli non
        pubblici relativi al progetto non saranno divulgati nell’ambito di tale
        utilizzo nel portfolio.
      </p>

      <p>
        <strong>18. Disponibilità di servizi di terzi e forza maggiore</strong>
        <br />
        SEEMS REAL Studio può fare affidamento su software, strumenti di
        intelligenza artificiale generativa e altri fornitori di servizi terzi
        per eseguire i servizi commissionati.
        <br />
        <br />
        Non siamo responsabili per ritardi o per la temporanea impossibilità di
        fornire i servizi causati da circostanze al di fuori del nostro
        ragionevole controllo, inclusi gravi malfunzionamenti o indisponibilità
        di servizi di terzi, guasti dell’infrastruttura tecnica o altri eventi
        che non avrebbero potuto essere ragionevolmente evitati.
        <br />
        <br />
        In tali casi, faremo quanto ragionevolmente possibile per riprendere il
        progetto il prima possibile e informeremo il Cliente qualora la
        tempistica di consegna stimata venga significativamente compromessa.
      </p>

      <p>
        <strong>19. Responsabilità</strong>
        <br />
        SEEMS REAL Studio risponde senza limitazioni per danni causati
        intenzionalmente o per colpa grave, nonché per danni alla vita,
        all’integrità fisica o alla salute.
        <br />
        <br />
        In caso di colpa lieve, SEEMS REAL Studio risponde esclusivamente per la
        violazione di obblighi contrattuali essenziali. In tali casi, la
        responsabilità è limitata ai danni ragionevolmente prevedibili e tipici
        della natura dei servizi commissionati.
        <br />
        <br />
        Nella misura consentita dalla legge applicabile, SEEMS REAL Studio non
        risponde per danni indiretti o consequenziali, incluso il mancato
        guadagno, derivanti dall’utilizzo dei contenuti forniti da parte del
        Cliente.
        <br />
        <br />
        Nessuna disposizione dei presenti Termini esclude o limita la
        responsabilità nei casi in cui tale esclusione o limitazione non sia
        consentita dalla legge applicabile.
      </p>

      <p>
        <strong>20. Conformità del Cliente</strong>
        <br />
        Il Cliente è responsabile di garantire che la pubblicazione, la
        pubblicità, la distribuzione e qualsiasi altro utilizzo dei contenuti
        finali siano conformi alle leggi, ai regolamenti e ai requisiti delle
        piattaforme applicabili al Cliente, ai suoi prodotti e ai mercati nei
        quali i contenuti vengono utilizzati.
        <br />
        <br />
        Ciò include, ove applicabile, i requisiti relativi a pubblicità,
        dichiarazioni sui prodotti, tutela dei consumatori, proprietà
        intellettuale, trasparenza dell’IA e politiche specifiche delle
        piattaforme.
        <br />
        <br />
        SEEMS REAL Studio non fornisce consulenza legale o normativa relativa ai
        prodotti del Cliente, alle sue dichiarazioni pubblicitarie o allo
        specifico utilizzo dei contenuti forniti nei singoli mercati.
      </p>

      <p>
        <strong>21. Legge applicabile e foro competente</strong>
        <br />
        I presenti Termini e Condizioni e il rapporto contrattuale tra il
        Cliente e SEEMS REAL Studio sono disciplinati dalla legge austriaca, con
        esclusione delle norme sul conflitto di leggi.
        <br />
        <br />
        Per le controversie derivanti da o connesse al rapporto contrattuale,
        saranno competenti i tribunali austriaci nella misura in cui tale foro
        possa essere validamente concordato ai sensi della legge applicabile.
        <br />
        <br />
        Restano impregiudicate le disposizioni inderogabili della legge
        applicabile.
      </p>
    </>
  );
}

function TermsNoticeEs() {
  return (
    <>
      <p>
        Los presentes Términos y Condiciones se aplican a todos los proyectos
        encargados a SEEMS REAL Studio (“nosotros”). Las ofertas individuales
        pueden contener condiciones y detalles específicos del proyecto. En caso
        de conflicto entre estos Términos y Condiciones y una oferta individual,
        prevalecerán las condiciones de la oferta individual para el proyecto
        correspondiente.
      </p>

      <p>
        Al confirmar un pedido o aceptar una oferta, el cliente (“usted”, “el
        Cliente”) acepta estos Términos y Condiciones.
      </p>

      <p>
        Nuestros servicios se ofrecen exclusivamente a empresas y clientes
        profesionales que actúan en el marco de su actividad comercial o
        profesional.
      </p>

      <p className="legal-callout">
        El Cliente es responsable de revisar y aprobar todos los contenidos
        visuales finales antes de su publicación, incluida la exactitud de los
        productos, colores, materiales, logotipos, textos y demás detalles
        específicos de la marca.
      </p>

      <p>
        <strong>1. Contenido generado mediante IA</strong>
        <br />
        El Cliente reconoce expresamente que los contenidos visuales creados por
        SEEMS REAL Studio se realizan total o parcialmente mediante inteligencia
        artificial generativa y pueden incorporar, transformar o basarse en
        materiales proporcionados por el Cliente.
        <br />
        <br />
        Los contenidos entregados son contenidos visuales asistidos o generados
        mediante IA y no constituyen fotografía convencional, salvo que se
        acuerde expresamente lo contrario por escrito.
      </p>

      <p>
        <strong>2. Representación del producto</strong>
        <br />
        Tomamos las precauciones razonables para crear una representación visual
        fiel del producto y del briefing creativo del Cliente. Sin embargo,
        debido a la naturaleza de la inteligencia artificial generativa, pueden
        producirse variaciones en los detalles del producto, colores, texturas,
        materiales, proporciones u otras características visuales, por lo que no
        puede garantizarse una reproducción exacta.
        <br />
        <br />
        El Cliente reconoce que las imágenes generadas mediante IA requieren una
        revisión cuidadosa y es responsable de confirmar, antes de su
        publicación, que la representación final del producto sea adecuada para
        el uso previsto.
      </p>

      <p>
        <strong>3. Naturaleza de los resultados generados mediante IA</strong>
        <br />
        Debido a la naturaleza de la inteligencia artificial generativa, los
        resultados pueden contener ocasionalmente elementos inesperados,
        imprecisiones, artefactos o similitudes involuntarias con contenidos
        existentes.
        <br />
        <br />
        Tomamos las precauciones razonables al seleccionar y perfeccionar los
        contenidos visuales finales. Sin embargo, no podemos garantizar que los
        elementos generados mediante IA sean completamente únicos o estén libres
        de similitudes involuntarias con contenidos de terceros.
      </p>

      <p>
        <strong>4. Ausencia de garantía de resultados</strong>
        <br />
        No garantizamos resultados comerciales, publicitarios, de interacción,
        conversión, alcance o ventas específicos derivados del uso de los
        contenidos entregados.
        <br />
        <br />
        Los resultados pueden depender de numerosos factores fuera de nuestro
        control, incluidos el producto del Cliente, los precios, el público
        objetivo, la plataforma, la estrategia publicitaria y las condiciones
        del mercado.
      </p>

      <p>
        <strong>5. Aprobación final</strong>
        <br />
        El Cliente es responsable de revisar cuidadosamente todos los contenidos
        visuales finales antes de su publicación o cualquier otro uso, incluida
        la representación del producto, los colores, materiales, logotipos,
        marcas, textos, declaraciones publicitarias, precios y otros detalles
        específicos de la marca o jurídicamente relevantes.
        <br />
        <br />
        Cualquier corrección solicitada deberá comunicarse antes de que el
        contenido visual correspondiente sea publicado o utilizado de cualquier
        otra forma.
        <br />
        <br />
        La publicación, distribución o cualquier otro uso de un contenido visual
        entregado por parte del Cliente constituirá la aprobación de dicho
        contenido.
      </p>

      <p>
        <strong>6. Derechos sobre los materiales proporcionados por el Cliente</strong>
        <br />
        El Cliente confirma que posee o dispone de todos los derechos, permisos
        y autorizaciones necesarios para proporcionar los materiales presentados
        para el proyecto, incluidas imágenes de productos, fotografías,
        logotipos, diseños, marcas, moodboards, imágenes de referencia y otros
        contenidos.
        <br />
        <br />
        El Cliente concede a SEEMS REAL Studio los derechos necesarios para
        utilizar, reproducir, adaptar y tratar dichos materiales exclusivamente
        con el fin de prestar los servicios contratados, incluido, cuando sea
        necesario para el proyecto, su tratamiento mediante software y
        herramientas de inteligencia artificial generativa de terceros.
        <br />
        <br />
        El Cliente es responsable de garantizar que los materiales
        proporcionados y su uso autorizado para el proyecto no infrinjan derechos
        de autor, marcas, derechos de la personalidad, derechos de privacidad u
        otros derechos de terceros.
      </p>

      <p>
        <strong>7. Referencias de terceros</strong>
        <br />
        Los moodboards, imágenes de referencia y otros materiales creativos de
        terceros proporcionados por el Cliente se utilizan exclusivamente como
        orientación creativa, por ejemplo, para definir el ambiente, la
        estética, la composición, la iluminación o la dirección visual general
        deseada.
        <br />
        <br />
        Las referencias no están destinadas a ser reproducidas de forma idéntica
        y SEEMS REAL Studio no garantiza ni se compromete a realizar una
        reproducción exacta de imágenes, obras, campañas, diseños o identidades
        de marca de terceros.
      </p>

      <p>
        <strong>8. Herramientas de IA y confidencialidad</strong>
        <br />
        Para prestar los servicios contratados, SEEMS REAL Studio puede utilizar
        software y herramientas de inteligencia artificial generativa de
        terceros. Los materiales del Cliente, incluidas imágenes de productos,
        materiales de briefing y otros recursos del proyecto, podrán ser
        tratados mediante dichos servicios cuando sea necesario para crear los
        contenidos acordados y de conformidad con nuestra Política de
        Privacidad.
        <br />
        <br />
        Tratamos con el debido cuidado los materiales no públicos del Cliente y
        la información confidencial del proyecto y los utilizamos
        exclusivamente con el fin de prestar los servicios contratados. No
        utilizamos materiales confidenciales del Cliente para proyectos no
        relacionados ni los divulgamos a terceros, salvo cuando sea necesario
        para prestar los servicios o cuando así lo exija la ley.
        <br />
        <br />
        El Cliente reconoce que el uso de herramientas de terceros puede
        implicar el tratamiento de datos por parte de los respectivos
        proveedores de acuerdo con sus condiciones y prácticas aplicables en
        materia de tratamiento de datos.
      </p>

      <p>
        <strong>9. Derechos de uso sobre los contenidos visuales finales</strong>
        <br />
        Una vez efectuado el pago íntegro, el Cliente recibe un derecho no
        exclusivo, mundial y sin límite temporal para utilizar los contenidos
        visuales finales aprobados para su propia marca y comunicación comercial
        dentro del ámbito acordado.
        <br />
        <br />
        Salvo que se indique lo contrario en la oferta individual, esto incluye
        su uso en el sitio web del Cliente, canales de comercio electrónico,
        redes sociales, publicidad de pago, newsletters, presentaciones y
        materiales impresos.
        <br />
        <br />
        El Cliente podrá recortar y redimensionar los contenidos visuales
        finales y añadir textos, logotipos u otros elementos de marca en la
        medida razonablemente necesaria para dichos usos.
        <br />
        <br />
        Los contenidos visuales finales no podrán revenderse, sublicenciarse,
        transferirse a terceros para su uso independiente ni ofrecerse como
        contenido de stock o trabajo creativo white-label sin el consentimiento
        previo por escrito de SEEMS REAL Studio.
        <br />
        <br />
        Los derechos de uso exclusivos o cualquier utilización que exceda el
        ámbito acordado requerirán un acuerdo escrito separado.
      </p>

      <p>
        <strong>10. Borradores, materiales de proceso y know-how creativo</strong>
        <br />
        Únicamente los contenidos finales aprobados y especificados en la oferta
        individual están incluidos en los derechos de uso concedidos al Cliente.
        <br />
        <br />
        Los conceptos no utilizados, borradores, variantes, prompts, workflows,
        archivos intermedios, archivos de trabajo, métodos de producción y demás
        materiales de proceso permanecen en SEEMS REAL Studio y no se
        transfieren ni se proporcionan al Cliente, salvo que se acuerde
        expresamente lo contrario por escrito.
        <br />
        <br />
        El encargo de contenidos visuales finales no concede al Cliente ningún
        derecho de acceso o recepción de los prompts, workflows, herramientas,
        métodos o procesos creativos subyacentes de SEEMS REAL Studio.
      </p>

      <p>
        <strong>11. Revisiones</strong>
        <br />
        El Paquete 01 (The Edit) incluye una ronda de revisión. El Paquete 02
        (The Campaign) incluye dos rondas de revisión. Los proyectos Bespoke
        incluyen el número de rondas de revisión indicado en la oferta
        individual.
        <br />
        <br />
        Una ronda de revisión comprende ajustes razonables dentro de la
        dirección visual acordada, como pequeños cambios en la composición, el
        estilismo, los detalles o el aspecto general.
        <br />
        <br />
        Las solicitudes de un concepto, escenario o dirección creativa
        sustancialmente nuevos, así como otros cambios fuera del briefing
        originalmente acordado, no se consideran una revisión y podrán
        presupuestarse por separado.
        <br />
        <br />
        Las rondas de revisión adicionales o los cambios que excedan el alcance
        acordado podrán cobrarse por separado. Cualquier coste adicional será
        comunicado antes de comenzar el trabajo adicional.
      </p>

      <p>
        <strong>12. Pago</strong>
        <br />
        Salvo que se acuerde lo contrario en la oferta individual, el Paquete 01
        (The Edit) deberá abonarse íntegramente antes de comenzar el trabajo.
        <br />
        <br />
        El Paquete 02 (The Campaign) y los proyectos Bespoke podrán requerir un
        depósito según lo especificado en la oferta individual, debiendo
        abonarse el importe restante antes de la entrega final.
        <br />
        <br />
        Los pagos deberán realizarse utilizando el método y los datos de pago
        indicados en la factura o en la oferta individual.
        <br />
        <br />
        El trabajo comenzará una vez recibidos el pago requerido y todos los
        materiales necesarios para el briefing, salvo que se acuerde lo
        contrario.
        <br />
        <br />
        SEEMS REAL Studio podrá suspender el trabajo o retener los contenidos
        finales mientras permanezca pendiente un pago acordado. Cualquier retraso
        resultante podrá ampliar el plazo de entrega originalmente estimado.
        <br />
        <br />
        Los derechos de uso sobre los contenidos visuales finales se concederán
        únicamente una vez efectuado el pago íntegro del proyecto
        correspondiente.
      </p>

      <p>
        <strong>13. Cancelación</strong>
        <br />
        El Cliente podrá cancelar un proyecto mediante notificación por escrito
        a SEEMS REAL Studio.
        <br />
        <br />
        Si un proyecto se cancela antes de que haya comenzado la producción,
        cualquier importe ya abonado se gestionará de acuerdo con lo establecido
        en la oferta individual.
        <br />
        <br />
        Una vez iniciada la producción, el trabajo ya realizado y los costes
        incurridos hasta la fecha de cancelación seguirán siendo exigibles.
        Cualquier depósito ya abonado podrá retenerse para cubrir el trabajo
        realizado y los costes incurridos.
        <br />
        <br />
        Si el valor del trabajo ya realizado supera el depósito o el importe ya
        abonado, SEEMS REAL Studio podrá facturar al Cliente el importe
        pendiente.
        <br />
        <br />
        Cualquier derecho imperativo que no pueda excluirse legalmente
        permanecerá inalterado.
      </p>

      <p>
        <strong>14. Retrasos por parte del Cliente</strong>
        <br />
        El Cliente es responsable de proporcionar oportunamente todos los
        materiales, información, feedback y aprobaciones necesarios.
        <br />
        <br />
        Si se retrasan los materiales, el feedback o las aprobaciones, el
        calendario estimado del proyecto y la fecha de entrega podrán ajustarse
        en consecuencia.
        <br />
        <br />
        Si un proyecto queda suspendido durante un período prolongado debido a
        la falta de colaboración del Cliente, SEEMS REAL Studio podrá
        reprogramar la continuación del proyecto en función de la disponibilidad
        existente en ese momento.
      </p>

      <p>
        <strong>15. Entrega</strong>
        <br />
        Los plazos de entrega estimados se indican en la oferta individual y
        comienzan una vez recibidos el pago requerido y todos los materiales
        necesarios para el briefing, salvo que se acuerde lo contrario.
        <br />
        <br />
        Los contenidos finales se entregarán digitalmente en los formatos y
        dentro del alcance especificados en la oferta individual.
        <br />
        <br />
        Las fechas y los plazos de entrega son estimaciones, salvo que se hayan
        acordado expresamente por escrito como vinculantes.
        <br />
        <br />
        Los retrasos causados por la entrega tardía de materiales, feedback o
        aprobaciones por parte del Cliente podrán ampliar el plazo de entrega en
        consecuencia.
      </p>

      <p>
        <strong>16. Divulgación y etiquetado de contenidos de IA</strong>
        <br />
        El Cliente reconoce expresamente que los contenidos entregados se crean
        total o parcialmente mediante inteligencia artificial generativa.
        <br />
        <br />
        Tras la entrega, el Cliente es responsable de determinar y cumplir
        cualquier requisito de divulgación, etiquetado o transparencia aplicable
        a la publicación, publicidad u otro uso de los contenidos, incluidos los
        requisitos derivados de la legislación aplicable, el Reglamento de
        Inteligencia Artificial de la UE (EU AI Act) y las políticas pertinentes
        de las plataformas.
        <br />
        <br />
        SEEMS REAL Studio es responsable de la creación y entrega de los
        contenidos visuales acordados, pero no asume responsabilidad por su
        posterior publicación, distribución o utilización por parte del Cliente
        ni por las obligaciones de cumplimiento derivadas de dicho uso.
      </p>

      <p>
        <strong>17. Uso en el portfolio</strong>
        <br />
        Salvo que se acuerde lo contrario por escrito, SEEMS REAL Studio podrá
        utilizar los contenidos visuales finales aprobados y creados para el
        Cliente en su propio portfolio, sitio web, redes sociales y para fines
        de autopromoción.
        <br />
        <br />
        Cuando el proyecto se refiera a un producto, colección o campaña aún no
        publicados, SEEMS REAL Studio no compartirá públicamente los contenidos
        visuales correspondientes antes de que el Cliente haya publicado el
        respectivo producto, colección o campaña, salvo autorización previa del
        Cliente.
        <br />
        <br />
        La información comercial confidencial, los materiales internos y los
        detalles no públicos del proyecto no serán divulgados como parte de
        dicho uso en el portfolio.
      </p>

      <p>
        <strong>18. Disponibilidad de terceros y fuerza mayor</strong>
        <br />
        SEEMS REAL Studio puede depender de software, herramientas de
        inteligencia artificial generativa y otros proveedores de servicios
        externos para prestar los servicios contratados.
        <br />
        <br />
        No somos responsables de retrasos o de la imposibilidad temporal de
        prestar los servicios causados por circunstancias fuera de nuestro
        control razonable, incluidos fallos importantes o indisponibilidad de
        servicios de terceros, fallos de infraestructura técnica u otros
        acontecimientos que razonablemente no hubieran podido evitarse.
        <br />
        <br />
        En estos casos, realizaremos esfuerzos razonables para reanudar el
        proyecto lo antes posible e informaremos al Cliente si el plazo estimado
        de entrega se ve afectado de manera significativa.
      </p>

      <p>
        <strong>19. Responsabilidad</strong>
        <br />
        SEEMS REAL Studio responde sin limitación por los daños causados
        intencionadamente o por negligencia grave, así como por daños a la vida,
        la integridad física o la salud.
        <br />
        <br />
        En casos de negligencia leve, SEEMS REAL Studio responderá únicamente
        por el incumplimiento de obligaciones contractuales esenciales. En estos
        casos, la responsabilidad se limitará a los daños razonablemente
        previsibles y típicos de la naturaleza de los servicios contratados.
        <br />
        <br />
        En la medida permitida por la legislación aplicable, SEEMS REAL Studio
        no será responsable de daños indirectos o consecuenciales, incluida la
        pérdida de beneficios, derivados del uso de los contenidos entregados
        por parte del Cliente.
        <br />
        <br />
        Nada de lo dispuesto en estos Términos excluye o limita la
        responsabilidad cuando dicha exclusión o limitación esté prohibida por
        la legislación aplicable.
      </p>

      <p>
        <strong>20. Cumplimiento normativo por parte del Cliente</strong>
        <br />
        El Cliente es responsable de garantizar que la publicación, publicidad,
        distribución y cualquier otro uso de los contenidos finales cumplan con
        las leyes, normativas y requisitos de las plataformas aplicables al
        Cliente, a sus productos y a los mercados en los que se utilicen dichos
        contenidos.
        <br />
        <br />
        Esto incluye, cuando corresponda, los requisitos relativos a publicidad,
        declaraciones sobre productos, protección de los consumidores, propiedad
        intelectual, transparencia de la IA y políticas específicas de las
        plataformas.
        <br />
        <br />
        SEEMS REAL Studio no proporciona asesoramiento jurídico o regulatorio en
        relación con los productos del Cliente, sus declaraciones publicitarias
        o el uso específico de los contenidos entregados en mercados concretos.
      </p>

      <p>
        <strong>21. Legislación aplicable y jurisdicción</strong>
        <br />
        Los presentes Términos y Condiciones y la relación contractual entre el
        Cliente y SEEMS REAL Studio se regirán por la legislación austriaca, con
        exclusión de sus normas sobre conflicto de leyes.
        <br />
        <br />
        Para cualquier controversia derivada de o relacionada con la relación
        contractual, serán competentes los tribunales de Austria en la medida en
        que dicha jurisdicción pueda acordarse válidamente conforme a la
        legislación aplicable.
        <br />
        <br />
        Las disposiciones imperativas de la legislación aplicable permanecerán
        inalteradas.
      </p>
    </>
  );
}

const termsTitles = {
  en: "Terms & Conditions",
  de: "Allgemeine Geschäftsbedingungen",
  it: "Termini e Condizioni",
  es: "Términos y Condiciones",
  fr: "Terms & Conditions",
} as const;

export function Terms() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = `${termsTitles[lang]} | SEEMS REAL Studio`;
    return () => {
      document.title =
        "SEEMS REAL Studio | Big Vision. Without the Big Production.";
    };
  }, [lang]);

  const body =
    lang === "de" ? (
      <TermsNoticeDe />
    ) : lang === "it" ? (
      <TermsNoticeIt />
    ) : lang === "es" ? (
      <TermsNoticeEs />
    ) : (
      <TermsNoticeEn />
    );

  return <LegalPage title={termsTitles[lang]}>{body}</LegalPage>;
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
