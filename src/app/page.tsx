"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Lightbulb,
  MapPin,
  Menu,
  MonitorPlay,
  ShieldCheck,
  Tent,
  X,
} from "lucide-react";

const services = [
  {
    title: "Sonorisation",
    description:
      "Systèmes son, diffusion et réglages pensés pour les conférences, cérémonies, lancements et soirées corporate.",
    icon: Headphones,
  },
  {
    title: "Éclairage",
    description:
      "Mise en lumière technique et scénographique pour valoriser les espaces, la scène et le rythme visuel de l’événement.",
    icon: Lightbulb,
  },
  {
    title: "Vidéo",
    description:
      "Écrans, projection, diffusion et restitution pour renforcer la lisibilité des contenus et des prises de parole.",
    icon: MonitorPlay,
  },
  {
    title: "Structures et scènes",
    description:
      "Structures techniques, scènes, couvertures et tentes pour donner un cadre fiable et professionnel aux opérations.",
    icon: Tent,
  },
];

const sectors = [
  {
    title: "Entreprises",
    text: "Conventions, séminaires, lancements, soirées corporate et dispositifs de marque avec exigence d’image.",
    icon: Building2,
  },
  {
    title: "Collectivités",
    text: "Événements publics, institutionnels ou culturels qui demandent fiabilité, organisation et tenue technique.",
    icon: MapPin,
  },
  {
    title: "Agences",
    text: "Un partenaire capable d’absorber la complexité d’un dispositif et de sécuriser sa qualité d’exécution.",
    icon: ShieldCheck,
  },
];

const proofPoints = [
  "Prestataire technique événementiel depuis 1991",
  "Parc matériel important et équipe technique permanente",
  "Pilotage des dispositifs son, lumière, vidéo, structures et logistique",
  "Accompagnement des entreprises, collectivités et agences en Île-de-France",
];

const slides = [
  {
    image: "/IMG_6016.jpeg",
    label: "Scène et coordination technique",
    title: "Une mise en scène qui clarifie immédiatement le niveau de l’événement.",
    text: "Son, lumière et vidéo doivent fonctionner comme un ensemble cohérent pour donner plus d’impact à la prise de parole et à l’expérience sur place.",
  },
  {
    image: "/IMG_6020.jpeg",
    label: "Éclairage et valorisation d’espace",
    title: "La lumière structure les regards et donne plus de force au lieu.",
    text: "Une implantation bien pensée améliore la lisibilité, la perception premium et la qualité des images produites pendant l’événement.",
  },
  {
    image: "/IMG_6025.jpeg",
    label: "Exécution événementielle",
    title: "Un dispositif technique doit rassurer avant même qu’on l’explique.",
    text: "Quand l’installation est juste, le public perçoit une organisation plus solide, plus fluide et plus crédible.",
  },
];

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentSlide = useMemo(() => slides[activeSlide], [activeSlide]);

  const previous = () => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <main className="grain overflow-hidden">
      <section className="relative min-h-screen border-b border-white/8">
        <div className="absolute inset-0">
          <Image
            src="/IMG_6016.jpeg"
            alt="Installation technique événementielle JGCOM"
            fill
            priority
            className="object-cover object-center opacity-34"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(47,109,255,0.24),transparent_25%),linear-gradient(180deg,rgba(4,9,18,0.16),rgba(4,9,18,0.82)_48%,rgba(4,9,18,0.96)_100%)]" />
        </div>

        <div className="container-shell relative z-10 pt-4 md:pt-6">
          <header className="glass rounded-[1.75rem] px-4 py-3 md:px-5">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/JGCOM.svg" alt="Logo JGCOM" width={132} height={42} className="h-10 w-auto" priority />
              </Link>

              <nav className="hidden gap-8 text-sm text-white/74 md:flex">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="hidden rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] md:inline-flex"
                >
                  Demander un devis
                </a>
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="glass inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
                  aria-label="Ouvrir le menu"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {menuOpen && (
              <div className="mt-4 grid gap-2 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-3 md:hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-[1rem] px-4 py-3 text-sm text-white/82 transition hover:bg-white/8"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-[1rem] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Demander un devis
                </a>
              </div>
            )}
          </header>

          <div className="grid min-h-[calc(100vh-112px)] gap-14 py-16 md:grid-cols-[1.08fr_0.92fr] md:items-end md:py-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-[var(--line)] bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
                Prestataire technique événementiel · Paris · Île-de-France
              </div>
              <h1 className="display-title max-w-5xl text-5xl font-semibold leading-[0.94] text-white sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Son, lumière, vidéo et structures pour des événements mieux tenus.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
                JGCOM conçoit et déploie des prestations techniques événementielles pour entreprises, collectivités et agences : sonorisation, éclairage, vidéo, structures, scènes, tentes, décoration et mobilier.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Voir les services
                </Link>
              </div>
            </div>

            <div className="glass ml-auto max-w-xl rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/46">JGCOM</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/74">
                <p>
                  Basée à proximité de Paris, l’entreprise accompagne depuis plus de 30 ans les projets événementiels qui demandent de la tenue technique, de la coordination et un rendu professionnel.
                </p>
                <p>
                  L’objectif est de réunir les bons moyens techniques, la bonne mise en œuvre et le bon niveau d’exigence pour que l’événement soit plus lisible, plus fluide et plus impactant.
                </p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {proofPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-[var(--line)] bg-white/[0.04] px-4 py-3 text-sm text-white/78">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/8 py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-soft)]">Services</p>
              <h2 className="display-title mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Une offre complète pour concevoir, installer et piloter vos dispositifs techniques.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/66 md:justify-self-end">
              Chaque prestation répond à un besoin concret : rendre une prise de parole audible, valoriser un espace, diffuser un contenu, structurer un lieu ou sécuriser le déroulé d’un événement.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="glass rounded-[2rem] p-6">
                  <div className="inline-flex rounded-2xl border border-[var(--line)] bg-white/6 p-3">
                    <Icon className="h-6 w-6 text-[var(--accent-soft)]" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="realisations" className="border-b border-white/8 py-20 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-soft)]">Réalisations</p>
              <h2 className="display-title mt-4 text-4xl font-semibold text-white md:text-5xl">
                Une lecture plus premium des installations et du savoir-faire JGCOM.
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={previous}
                className="glass inline-flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-white/10"
                aria-label="Slide précédente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="glass inline-flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-white/10"
                aria-label="Slide suivante"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-[var(--line)] bg-white/5">
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-cover transition duration-500"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-white/54">{currentSlide.label}</p>
                <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                  {currentSlide.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{currentSlide.text}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`glass relative overflow-hidden rounded-[2rem] border p-4 text-left transition ${
                    index === activeSlide ? "border-[var(--line-strong)] bg-white/[0.08]" : "border-[var(--line)]"
                  }`}
                >
                  <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
                    <div className="relative h-28 overflow-hidden rounded-[1.4rem] border border-[var(--line)]">
                      <Image src={slide.image} alt={slide.label} fill className="object-cover" sizes="160px" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-white/44">{slide.label}</p>
                      <p className="mt-3 text-lg font-semibold text-white">{slide.title}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="border-b border-white/8 py-20 md:py-24">
        <div className="container-shell grid gap-12 md:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-soft)]">Expertise</p>
            <h2 className="display-title mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Un accompagnement technique pensé pour la qualité d’exécution et l’image finale.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/66">
              Au-delà du matériel, JGCOM intervient sur l’organisation technique globale : préparation, cohérence des moyens, fluidité sur site et qualité perçue par les publics, les intervenants et les commanditaires.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="glass rounded-[1.8rem] p-5">
                <ShieldCheck className="h-5 w-5 text-[var(--accent-soft)]" />
                <p className="mt-4 text-sm leading-7 text-white/74">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-20 md:py-24">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <article key={sector.title} className="glass rounded-[2rem] p-6">
                <Icon className="h-6 w-6 text-[var(--accent-soft)]" />
                <h3 className="mt-6 text-2xl font-semibold text-white">{sector.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{sector.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24">
        <div className="container-shell">
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-[var(--accent-soft)]/10 blur-3xl" />
            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-soft)]">Contact</p>
                <h2 className="display-title mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Vous avez un projet événementiel à équiper : parlons du dispositif adapté.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Nous étudions vos contraintes, votre lieu, votre format d’événement et le niveau d’image attendu pour proposer une solution technique claire, réaliste et bien exécutée.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contact@jgcom.fr"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
                >
                  Demander un devis
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Voir les prestations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
