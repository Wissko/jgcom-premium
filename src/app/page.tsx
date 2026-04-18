import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cable,
  CirclePlay,
  Headphones,
  Lightbulb,
  MapPin,
  MonitorPlay,
  ShieldCheck,
  Tent,
} from "lucide-react";

const services = [
  {
    title: "Sonorisation",
    description:
      "Des dispositifs son clairs, puissants et calibrés pour conférences, lancements, cérémonies et soirées corporate.",
    icon: Headphones,
  },
  {
    title: "Éclairage",
    description:
      "Une lumière pensée pour l’impact visuel, la lisibilité de scène et la mise en valeur des espaces et intervenants.",
    icon: Lightbulb,
  },
  {
    title: "Vidéo",
    description:
      "Écrans, diffusion, projection, murs LED et solutions de restitution conçus pour les prises de parole et les expériences immersives.",
    icon: MonitorPlay,
  },
  {
    title: "Structures et scènes",
    description:
      "Structures techniques, scènes, couvertures et installations temporaires fiables pour les opérations exigeantes.",
    icon: Tent,
  },
];

const sectors = ["Entreprises", "Collectivités", "Agences", "Lieux événementiels"];

const proofPoints = [
  "Prestataire technique événementiel depuis 1991",
  "Parc matériel important et équipe technique permanente",
  "Pilotage global : son, lumière, vidéo, structures et logistique",
  "Interventions en Île-de-France et sur dispositifs professionnels exigeants",
];

const gallery = [
  "/IMG_6016.jpeg",
  "/IMG_6020.jpeg",
  "/IMG_6021.jpeg",
  "/IMG_6025.jpeg",
];

export default function Home() {
  return (
    <main className="grain overflow-hidden">
      <section className="relative min-h-screen section-line">
        <div className="absolute inset-0">
          <Image
            src="/IMG_6016.jpeg"
            alt="Installation technique événementielle JGCOM"
            fill
            priority
            className="object-cover object-center opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(136,168,255,0.24),transparent_28%),linear-gradient(180deg,rgba(4,6,10,0.1),rgba(4,6,10,0.82)_45%,rgba(4,6,10,0.96)_100%)]" />
        </div>

        <header className="sticky top-0 z-50">
          <div className="container-shell pt-4">
            <div className="glass flex items-center justify-between rounded-full px-5 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/55">JGCOM</p>
                <p className="text-sm text-white/75">Prestataire technique événementiel</p>
              </div>
              <nav className="hidden gap-8 text-sm text-white/70 md:flex">
                <a href="#services">Services</a>
                <a href="#realisations">Réalisations</a>
                <a href="#expertise">Expertise</a>
                <a href="#contact">Contact</a>
              </nav>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </header>

        <div className="container-shell relative z-10 flex min-h-[calc(100vh-92px)] items-end py-18 pb-10 md:pb-18">
          <div className="grid w-full gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                Paris · Île-de-France · Corporate · Institutionnel
              </div>
              <h1 className="display-title max-w-5xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[6.2rem]">
                L’infrastructure technique qui donne de la stature à vos événements.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                JGCOM conçoit et déploie des prestations techniques premium : sonorisation,
                éclairage, vidéo, structures, scènes, tentes et mobilier pour entreprises,
                collectivités et agences qui veulent un rendu net, maîtrisé et crédible.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#88a8ff] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-[#a6bcff]"
                >
                  Cadrer votre projet
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#realisations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Voir les réalisations
                  <CirclePlay className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="glass ml-auto max-w-xl rounded-[2rem] p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">Positionnement</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Technique, image, conversion</p>
                </div>
                <ShieldCheck className="h-10 w-10 text-[#d8b47a]" />
              </div>
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p>
                  Nous intervenons comme partenaire technique unique ou comme renfort expert pour sécuriser l’exécution, la lisibilité scénique et la qualité perçue de vos opérations.
                </p>
                <p>
                  L’enjeu n’est pas seulement d’installer du matériel : il s’agit de rendre votre événement plus lisible, plus rassurant et plus mémorable pour vos publics.
                </p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <div
                    key={sector}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/75"
                  >
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-line py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Services</p>
              <h2 className="display-title mt-4 max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                Une chaîne technique complète, pilotée comme un dispositif de marque.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/66 md:pt-12">
              La performance d’un événement professionnel repose sur la coordination. Nous réunissons la technique, la logistique et la mise en scène pour créer des environnements cohérents, lisibles et solides sur toute la durée d’exploitation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="glass rounded-[2rem] p-6 md:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                      <Icon className="h-6 w-6 text-[#88a8ff]" />
                    </div>
                    <Cable className="h-5 w-5 text-white/25" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/66">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="realisations" className="section-line py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Réalisations</p>
              <h2 className="display-title mt-4 text-4xl font-semibold text-white md:text-5xl">
                Des installations qui doivent convaincre avant même la prise de parole.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60">
              Le bon dispositif technique ne se remarque pas par ses complications. Il se remarque par sa fluidité, sa netteté et la confiance qu’il installe immédiatement.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5">
              <Image
                src={gallery[0]}
                alt="Scène et installation lumière JGCOM"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Pilotage global</p>
                <p className="mt-3 max-w-lg text-2xl font-semibold text-white md:text-3xl">
                  Son, lumière et restitution visuelle intégrés dans une même lecture de scène.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              {gallery.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="relative min-h-[180px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5"
                >
                  <Image
                    src={image}
                    alt={`Référence JGCOM ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-line py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Expertise</p>
            <h2 className="display-title mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Une exécution technique pensée pour la crédibilité, la fluidité et la conversion terrain.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/66">
              Pour une entreprise, une collectivité ou une agence, la technique n’est jamais un sujet décoratif. Elle influe directement sur la perception du niveau, sur le confort des participants et sur la qualité de l’expérience produite.
            </p>
          </div>

          <div className="glass rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="mt-1 rounded-full border border-white/10 bg-white/6 p-2">
                    <ShieldCheck className="h-4 w-4 text-[#88a8ff]" />
                  </div>
                  <p className="text-sm leading-7 text-white/74">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-line py-20 md:py-28">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          <div className="glass rounded-[2rem] p-6">
            <Building2 className="h-6 w-6 text-[#d8b47a]" />
            <h3 className="mt-6 text-xl font-semibold text-white">Entreprises</h3>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Conventions, prises de parole, lancements, soirées corporate et dispositifs de marque avec exigence d’image et de fluidité.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <MapPin className="h-6 w-6 text-[#d8b47a]" />
            <h3 className="mt-6 text-xl font-semibold text-white">Collectivités</h3>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Installations temporaires robustes, lisibles et bien pilotées pour événements publics, institutionnels et culturels.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <CirclePlay className="h-6 w-6 text-[#d8b47a]" />
            <h3 className="mt-6 text-xl font-semibold text-white">Agences</h3>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Un partenaire technique fiable pour absorber la complexité opérationnelle et protéger la qualité finale du dispositif.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="container-shell">
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#88a8ff]/20 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-[#d8b47a]/12 blur-3xl" />
            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Contact</p>
                <h2 className="display-title mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Vous avez un événement à cadrer : parlons du dispositif, des contraintes et du niveau attendu.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Nous préparons une base de site pensée pour générer plus de demandes qualifiées, mieux présenter vos métiers et renforcer votre visibilité naturelle sur Google et dans les interfaces IA.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contact@jgcom.fr"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-white/92"
                >
                  Contacter JGCOM
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explorer les services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
