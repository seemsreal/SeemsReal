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

export function Datenschutz() {
  return (
    <LegalPage title="Privacy">
      <p>
        We take the protection of personal data seriously. This notice explains
        what personal data we process when you use this website or work with
        SEEMS REAL Studio.
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
        Depending on how you interact with us, we may process: name, company
        name, email address, phone number, billing details, message content,
        briefing materials, product images and other files you send us, and
        technical website data (for example IP address and browser information
        via hosting logs).
      </p>

      <p>
        <strong>Website use</strong>
        <br />
        When you visit the website, our hosting provider may process technically
        necessary server-log data to deliver and secure the site. We currently
        do not use non-essential cookies or third-party analytics. If that
        changes, we will update this notice and obtain consent where required.
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
        <strong>Language preference</strong>
        <br />
        Your selected language may be stored locally in your browser. This stays
        on your device and is not processed by us as a user profile.
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
        <strong>Project communication and files</strong>
        <br />
        If you contact us or commission work, we process the information needed
        to handle your inquiry, create visuals, manage delivery, and prepare
        invoices. This may include product photos, logos, moodboards, reference
        images, and related briefing materials.
      </p>

      <p>
        <strong>Use of AI tools</strong>
        <br />
        To create AI-assisted visuals, we may use third-party generative AI
        services. Where necessary for production, briefing materials or product
        images you provide may be processed by those tools according to their
        terms and privacy practices. Please do not send us materials you are not
        allowed to share for this purpose. If files contain identifiable people,
        please tell us in advance so we can assess whether and how they may be
        used.
      </p>

      <p>
        <strong>Project files and AI processing</strong>
        <br />
        Files and materials provided by the client, including product images,
        reference images, logos and briefing materials, are used solely for the
        purpose of creating and delivering the commissioned work.
        <br />
        <br />
        During the collaboration, these materials may be stored by us and
        uploaded to third-party generative AI services where necessary to create
        the commissioned visuals.
        <br />
        <br />
        Once the project has been completed, we delete the client’s project
        materials from our own storage and, where available to us, from the
        third-party AI tools used for the project, unless otherwise agreed with
        the client.
        <br />
        <br />
        At the client’s request, project materials may be retained by us and
        within the relevant AI tools for future projects and continued
        collaboration. The client may request deletion at any time.
        <br />
        <br />
        Third-party services may be subject to their own technical retention
        periods, backup procedures and data-processing practices, which may
        continue to apply after deletion from our active account.
      </p>

      <p>
        <strong>Legal bases</strong>
        <br />
        Where the GDPR applies, we process personal data on the following legal
        bases:
      </p>

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
        To operate and secure our website, maintain necessary technical logs and
        communicate efficiently with clients and prospective clients.
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
        Where processing is based on your consent, you may withdraw that consent
        at any time with effect for the future. The withdrawal does not affect
        the lawfulness of processing carried out before the withdrawal.
      </p>

      <p>
        <strong>Sharing of data</strong>
        <br />
        We do not sell personal data. Data may be processed by service providers
        needed to run the website and deliver projects (for example hosting,
        email, invoicing, or AI production tools), under appropriate arrangements
        where required.
      </p>

      <p>
        <strong>International data transfers</strong>
        <br />
        Some of the third-party services we use may process data outside the
        European Economic Area (EEA). Where personal data is transferred
        internationally, we take appropriate measures to ensure that applicable
        data protection requirements are respected.
      </p>

      <p>
        <strong>Retention</strong>
        <br />
        We retain personal data only for as long as necessary for the purpose for
        which it was collected or for as long as required by applicable law.
        <br />
        <br />
        Project materials, including product images, reference images, logos and
        briefing materials, are deleted after the project has been completed,
        unless the client asks us to retain them for future projects. In this
        case, the materials are retained until they are no longer required or
        until the client requests their deletion.
        <br />
        <br />
        Business, accounting and invoicing records are retained for the periods
        required under applicable Austrian law.
        <br />
        <br />
        Where data is processed through third-party service providers, their own
        technical retention and backup periods may also apply.
      </p>

      <p>
        <strong>Your rights</strong>
        <br />
        Depending on applicable law, you may have the right to access, rectify,
        erase, restrict, or object to processing of your personal data, and the
        right to data portability. You may also lodge a complaint with a
        supervisory authority.
      </p>

      <p>
        <strong>Contact for privacy requests</strong>
        <br />
        Email{" "}
        <a href="mailto:seemsreal.studio@gmx.at">seemsreal.studio@gmx.at</a>.
      </p>

      <p className="legal-note">
        Update once final hosting, AI vendors, and tools are confirmed. Have an
        Austrian lawyer or WKO review before launch. Not legal advice.
      </p>
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
