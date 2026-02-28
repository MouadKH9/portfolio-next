import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité | Darna",
  description: "Politique de confidentialité de l'application mobile Darna",
}

export default function DarnaPrivacyPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-foreground mb-2">Politique de confidentialité</h1>
      <p className="text-muted-foreground text-sm">Dernière mise à jour : février 2025</p>

      <section className="mt-8">
        <p className="text-muted-foreground">
          La présente politique de confidentialité décrit comment l&apos;application Darna (« nous », « notre »)
          collecte, utilise et protège les informations que vous nous fournissez lorsque vous utilisez notre
          application mobile.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">1. Données que nous collectons</h2>
        <p className="text-muted-foreground mt-2">
          Nous pouvons collecter les types de données suivants :
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
          <li>
            <strong className="text-foreground">Données d&apos;identification :</strong> nom, adresse e-mail,
            numéro de téléphone, photo de profil.
          </li>
          <li>
            <strong className="text-foreground">Données d&apos;utilisation :</strong> façon dont vous utilisez
            l&apos;application (fonctionnalités utilisées, durée des sessions).
          </li>
          <li>
            <strong className="text-foreground">Données techniques :</strong> type d&apos;appareil, système
            d&apos;exploitation, identifiant unique de l&apos;appareil.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">2. Utilisation des données</h2>
        <p className="text-muted-foreground mt-2">
          Nous utilisons vos données pour :
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
          <li>Fournir et améliorer nos services</li>
          <li>Personnaliser votre expérience dans l&apos;application</li>
          <li>Vous envoyer des notifications importantes (avec votre consentement)</li>
          <li>Assurer la sécurité et prévenir les usages abusifs</li>
          <li>Respecter nos obligations légales</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">3. Partage des données</h2>
        <p className="text-muted-foreground mt-2">
          Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec des prestataires qui nous
          aident à faire fonctionner l&apos;application (hébergement, analyse, support), sous réserve qu&apos;ils
          respectent des engagements de confidentialité stricts. Nous pouvons également divulguer des données si
          la loi l&apos;exige.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">4. Conservation des données</h2>
        <p className="text-muted-foreground mt-2">
          Nous conservons vos données tant que votre compte est actif ou selon les durées requises par la loi. Vous
          pouvez demander la suppression de votre compte et de vos données à tout moment via les paramètres de
          l&apos;application ou en nous contactant.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">5. Vos droits</h2>
        <p className="text-muted-foreground mt-2">
          Conformément au Règlement général sur la protection des données (RGPD) et aux lois applicables, vous
          disposez notamment des droits suivants : accès à vos données, rectification, suppression, limitation du
          traitement, opposition et portabilité. Pour les exercer, contactez-nous à l&apos;adresse
          mouad.khchich@gmail.com. Vous avez également le droit d&apos;introduire une réclamation auprès de l&apos;autorité
          de contrôle compétente.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">6. Sécurité</h2>
        <p className="text-muted-foreground mt-2">
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
          contre l&apos;accès non autorisé, la perte ou l&apos;altération. La transmission des données s&apos;effectue
          via des connexions sécurisées (HTTPS/TLS).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">7. Modifications</h2>
        <p className="text-muted-foreground mt-2">
          Nous pouvons mettre à jour cette politique de confidentialité. Les changements significatifs vous seront
          notifiés via l&apos;application ou par e-mail. Nous vous encourageons à consulter régulièrement cette
          page.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">8. Nous contacter</h2>
        <p className="text-muted-foreground mt-2">
          Pour toute question relative à cette politique ou à vos données personnelles, vous pouvez nous écrire à
          : <strong className="text-foreground">mouad.khchich@gmail.com</strong>.
        </p>
      </section>
    </article>
  )
}
