import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cable, Lightbulb, MonitorPlay, ShieldCheck, Tent, Volume2 } from "lucide-react";

const services = [
  {
    title: "Sonorisation événementielle",
    intro:
      "Des dispositifs son pensés pour l’intelligibilité, la pression acoustique maîtrisée et le confort d’écoute sur l’ensemble du site.",
    points: [
      "Conférences, conventions, cérémonies et prises de parole",
      "Soirées corporate, galas et événements institutionnels",
      "Étude de couverture et calibration selon le lieu et le public",
    ],
    icon: Volume2,
  },
  {
    title: "Éclairage technique et scénographique",
    intro:
      "Une mise en lumière qui structure l’espace, donne du relief aux scènes et renforce immédiatement la perception de qualité.",
    points: [
      "Face, contre, ambiance et valorisation architecturale",
      "Gestion des flux visuels sur scène et dans les zones de circulation",
      "Lecture plus premium pour les photos, vidéos et interventions live",
    ],
    icon: Lightbulb,
  },
  {
    title: "Vidéo, diffusion et restitution",
    intro:
      "Écrans, murs LED, projection et diffusion : chaque support est intégré pour servir la compréhension et l’impact visuel.",
    points: [
      "Écrans retour, diffusion frontale et affichage événementiel",
      "Projection et restitution pour plénières et prises de parole",
      "Cohérence entre contenu diffusé, scénographie et rythme du dispositif",
    ],
    icon: MonitorPlay,
  },
  {
    title: "Structures, scènes et couvertures",
    intro:
      "Des infrastructures temporaires fiables pour sécuriser les opérations, cadrer les flux et donner de la stature au dispositif global.",
    points: [
      "Scènes, praticables, structures techniques et couvertures",
      "Tentes et installations temporaires pour environnements exigeants",
      "Coordination avec les autres lots pour une exécution sans friction",
    ],
    icon: Tent,
  },
];

export default function ServicesPage() {
  return (
    <main className="grain min-h-screen bg-transparent pb-20 text-white">
      <section className="relative overflow-hidden border-b border-white/8 pt-8 pb-18 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/IMG_6020.jpeg"
            alt="Installation technique JGCOM"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.74),rgba(5,7,11,0.94))]" />
        </div>

        <div className="container-shell relative z-10">
          <div className="glass flex items-center justify-between rounded-full px-5 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">JGCOM</p>
              <p className="text-sm text-white/75">Services techniques événementiels</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Retour accueil
              </Link>
              <a
                href="#contact"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/92"
              >
                Demander un devis
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Page service</p>
              <h1 className="display-title mt-4 max-w-4xl text-5xl font-semibold leading-[0.96] md:text-6xl">
                Prestations techniques événementielles : son, lumière, vidéo et structures.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                JGCOM accompagne les entreprises, collectivités et agences sur des dispositifs techniques complets en Île-de-France. L’objectif est simple : produire une expérience nette, fiable et cohérente, avec un niveau de lecture à la hauteur de votre image.
              </p>
            </div>
            <div className="glass rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#d8b47a]">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Lecture SEO / GEO</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Cette page pose les entités métier principales du site : prestataire technique événementiel, sonorisation événementielle, éclairage événementiel, vidéo événementielle, structures temporaires, scènes, tentes et dispositifs professionnels pour événements d’entreprise et opérations institutionnelles.
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
                className="glass grid gap-6 rounded-[2rem] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8"
              >
                <div>
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/6 p-3">
                    <Icon className="h-6 w-6 text-[#88a8ff]" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-white md:text-3xl">{service.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/66">{service.intro}</p>
                </div>
                <div className="grid gap-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/74"
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

      <section className="py-18 md:py-24">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          <div className="glass rounded-[2rem] p-6">
            <Cable className="h-6 w-6 text-[#d8b47a]" />
            <h3 className="mt-6 text-xl font-semibold">Pourquoi cette approche fonctionne</h3>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Quand la technique est bien conçue, l’événement paraît plus fluide, plus sérieux et plus rassurant pour les publics, les intervenants et les commanditaires.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <ShieldCheck className="h-6 w-6 text-[#d8b47a]" />
            <h3 className="mt-6 text-xl font-semibold">Ce que cherche le client final</h3>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Un interlocuteur fiable, une exécution sans friction, un rendu maîtrisé et une capacité à absorber la complexité sans dégrader l’image du projet.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <ArrowRight className="h-6 w-6 text-[#d8b47a]" />
            <h3 className="mt-6 text-xl font-semibold">Objectif commercial du site</h3>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Mieux capter la demande naturelle, mieux qualifier les prospects et mieux transformer les visites en demandes de contact ou de devis.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-6">
        <div className="container-shell">
          <div className="glass rounded-[2.4rem] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Contact</p>
            <h2 className="display-title mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Vous cherchez un prestataire technique événementiel capable de tenir le niveau d’image attendu.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
              Nous cadrons vos besoins, vos contraintes d’espace, vos enjeux d’image et la nature de votre public pour proposer un dispositif clair, réaliste et efficace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:contact@jgcom.fr"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-white/92"
              >
                Demander un devis
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Revenir à l’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
