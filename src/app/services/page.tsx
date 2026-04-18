import Image from "next/image";
import Link from "next/link";
import { Lightbulb, MonitorPlay, ShieldCheck, Tent, Volume2 } from "lucide-react";

const services = [
  {
    title: "Sonorisation événementielle",
    intro:
      "Des dispositifs son conçus pour garantir une écoute claire, stable et adaptée au format de chaque événement.",
    points: [
      "Conférences, conventions, cérémonies et prises de parole",
      "Soirées corporate, galas et événements institutionnels",
      "Étude de couverture et réglages en fonction du lieu et du public",
    ],
    icon: Volume2,
  },
  {
    title: "Éclairage technique et scénographique",
    intro:
      "Une mise en lumière qui sert la scène, valorise l’espace et donne plus de lisibilité à l’ensemble du dispositif.",
    points: [
      "Valorisation de scène, d’intervenants et d’architecture",
      "Gestion des flux visuels dans les zones clés de l’événement",
      "Rendu plus qualitatif pour les photos, vidéos et captations",
    ],
    icon: Lightbulb,
  },
  {
    title: "Vidéo, diffusion et restitution",
    intro:
      "Écrans, projection, diffusion et restitution pour renforcer l’impact des contenus et des messages portés sur place.",
    points: [
      "Écrans retour, diffusion frontale et affichage événementiel",
      "Projection et restitution pour plénières, interventions et contenus visuels",
      "Intégration cohérente entre diffusion, scénographie et rythme de l’événement",
    ],
    icon: MonitorPlay,
  },
  {
    title: "Structures, scènes et couvertures",
    intro:
      "Des infrastructures temporaires fiables pour sécuriser les opérations, structurer les espaces et accueillir les dispositifs techniques.",
    points: [
      "Scènes, praticables, structures techniques et couvertures",
      "Tentes et installations temporaires pour environnements exigeants",
      "Coordination avec les autres lots pour une mise en œuvre fluide",
    ],
    icon: Tent,
  },
];

export default function ServicesPage() {
  return (
    <main className="grain min-h-screen bg-transparent pb-20 text-white">
      <section className="relative overflow-hidden border-b border-white/8 pt-8 pb-20 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/IMG_6020.jpeg"
            alt="Installation technique JGCOM"
            fill
            className="object-cover opacity-22"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.72)_20%,rgba(7,17,31,0.95)_80%,#07111f_100%)]" />
        </div>

        <div className="container-shell relative z-10">
          <header className="glass flex items-center justify-between rounded-[1.75rem] px-4 py-3 md:px-5">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/JGCOM.svg" alt="Logo JGCOM" width={132} height={42} className="h-10 w-auto" priority />
            </Link>
            <div className="flex gap-3">
              <Link
                href="/"
                className="rounded-full border border-[var(--line)] bg-white/6 px-4 py-2 text-sm text-white/84 transition hover:bg-white/10"
              >
                Accueil
              </Link>
              <a
                href="mailto:contact@jgcom.fr"
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              >
                Demander un devis
              </a>
            </div>
          </header>

          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.82fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-soft)]">Nos prestations</p>
              <h1 className="display-title mt-4 max-w-4xl text-5xl font-semibold leading-[0.96] md:text-6xl">
                Des prestations techniques complètes pour les événements professionnels.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                JGCOM accompagne les entreprises, collectivités et agences sur des dispositifs techniques complets en Île-de-France. L’objectif est de produire une installation fiable, lisible et cohérente, avec un niveau d’exécution adapté aux enjeux d’image de chaque événement.
              </p>
            </div>
            <div className="glass rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3 text-[var(--accent-soft)]">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Positionnement</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Sonorisation, éclairage, vidéo, structures, scènes, tentes, décoration et mobilier : l’offre JGCOM couvre les principaux besoins techniques d’un événement d’entreprise, institutionnel ou porté par une agence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="container-shell grid gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="glass grid gap-6 rounded-[2rem] p-6 md:grid-cols-[0.75fr_1.25fr] md:p-8"
              >
                <div>
                  <div className="inline-flex rounded-2xl border border-[var(--line)] bg-white/6 p-3">
                    <Icon className="h-6 w-6 text-[var(--accent-soft)]" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-white md:text-3xl">{service.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">{service.intro}</p>
                </div>
                <div className="grid gap-3 self-center">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.4rem] border border-[var(--line)] bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white/76"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="pt-6">
        <div className="container-shell">
          <div className="glass rounded-[2.4rem] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-soft)]">Contact</p>
            <h2 className="display-title mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Vous cherchez un partenaire technique fiable pour votre événement.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Nous étudions votre format, vos contraintes et le niveau d’image attendu pour proposer un dispositif technique clair, réaliste et bien exécuté.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:contact@jgcom.fr"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              >
                Demander un devis
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
