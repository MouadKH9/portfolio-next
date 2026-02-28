import type { Metadata } from "next"
import { HelpCircle, Mail, MessageCircle, FileQuestion } from "lucide-react"

export const metadata: Metadata = {
  title: "Support | Darna",
  description: "Centre d'aide et support pour l'application mobile Darna",
}

export default function DarnaSupportPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-foreground mb-2">Centre d&apos;aide</h1>
      <p className="text-muted-foreground text-lg">
        Bienvenue sur la page d&apos;assistance de Darna. Consultez les ressources ci-dessous ou contactez-nous.
      </p>

      <section className="mt-10 space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Questions fréquentes</h2>

        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex gap-3">
              <FileQuestion className="size-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground">Comment créer un compte ?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Téléchargez l&apos;application Darna depuis l&apos;App Store ou Google Play. Ouvrez l&apos;app et
                  suivez les étapes d&apos;inscription avec votre adresse e-mail ou numéro de téléphone.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex gap-3">
              <FileQuestion className="size-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground">J&apos;ai oublié mon mot de passe</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Sur l&apos;écran de connexion, appuyez sur « Mot de passe oublié ». Saisissez votre e-mail ou
                  numéro de téléphone pour recevoir un lien de réinitialisation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex gap-3">
              <FileQuestion className="size-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground">Comment supprimer mon compte ?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Allez dans Paramètres → Mon compte → Supprimer le compte. Vous recevrez un e-mail de
                  confirmation. La suppression est définitive après validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground mb-6">Nous contacter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:mouad.khchich@gmail.com"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <Mail className="size-6 text-muted-foreground" />
            <div>
              <p className="font-medium text-foreground">E-mail</p>
              <p className="text-sm text-muted-foreground">mouad.khchich@gmail.com</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <MessageCircle className="size-6 text-muted-foreground" />
            <div>
              <p className="font-medium text-foreground">Assistance in-app</p>
              <p className="text-sm text-muted-foreground">Menu → Aide → Contacter le support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-border bg-muted/30 p-6">
        <div className="flex gap-3">
          <HelpCircle className="size-6 text-muted-foreground shrink-0" />
          <div>
            <h3 className="font-medium text-foreground">Besoin d&apos;aide immédiate ?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Notre équipe répond généralement sous 24 à 48 heures. Pour les demandes urgentes, précisez « Urgent »
              dans l&apos;objet de votre e-mail.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
