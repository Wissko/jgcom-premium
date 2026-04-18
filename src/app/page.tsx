"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
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
      "Des systèmes son calibrés pour rendre chaque prise de parole lisible et chaque moment fort plus net.",
    icon: Headphones,
  },
  {
    title: "Éclairage",
    description:
      "Une lumière qui hiérarchise l’espace, valorise la scène et donne immédiatement plus de niveau au dispositif.",
    icon: Lightbulb,
  },
  {
    title: "Vidéo",
    description:
      "Écrans, projection, diffusion et restitution pensés pour servir le message sans alourdir l’expérience.",
    icon: MonitorPlay,
  },
  {
    title: "Structures",
    description:
      "Scènes, couvertures, tentes et structures techniques pour produire un cadre solide, lisible et premium.",
    icon: Tent,
  },
];

const sectors = [
  {
    title: "Entreprises",
    text: "Conventions, lancements, soirées corporate et prises de parole avec exigence d’image.",
    icon: Building2,
  },
  {
    title: "Collectivités",
    text: "Dispositifs publics et institutionnels qui demandent fiabilité, lisibilité et tenue opérationnelle.",
    icon: MapPin,
  },
  {
    title: "Agences",
    text: "Un partenaire technique capable d’absorber la complexité et de protéger la qualité finale du projet.",
    icon: CirclePlay,
  },
];

const proofPoints = [
  "Prestataire technique événementiel depuis 1991",
  "Parc matériel important et équipe technique permanente",
  "Pilotage de dispositifs complets : son, lumière, vidéo, structures et logistique",
  "Interventions pour environnements professionnels exigeants en Île-de-France",
];

const slides = [
  {
    image: "/IMG_6016.jpeg",
    label: "Scénographie technique",
    title: "Une lecture de scène plus propre, plus forte, plus crédible.",
    text: "Quand la technique est bien pensée, elle ne parasite pas l’événement : elle le porte.",
  },
  {
    image: "/IMG_6020.jpeg",
    label: "Éclairage et mise en espace",
    title: "La lumière comme outil de hiérarchie visuelle et de perception premium.",
    text: "Le bon éclairage structure les regards, clarifie les zones clés et renforce l’impact du lieu.",
  },
  {
    image: "/IMG_6025.jpeg",
    label: "Exécution opérationnelle",
    title: "Des dispositifs techniques pensés pour rassurer dès les premières secondes.",
    text: "Le visiteur ne doit pas percevoir la complexité. Il doit percevoir la maîtrise.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
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
            className="object-cover object-center opacity-36"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(136,168,255,0.22),transparent_26%),linear-gradient(180deg,rgba(4,6,10,0.1),rgba(4,6,10,0.8)_48%,rgba(4,6,10,0.96)_100%)]" />
        </div>

        <div className="container-shell relative z-10 pt-4 md:pt-6">
          <header className="glass flex items-center justify-between rounded-full px-4 py-3 md:px-5">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/JGCOM.svg" alt="Logo JGCOM" width={124} height={40} className="h-9 w-auto" priority />
            </Link>
            <nav className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#services">Services</a>
              <a href="#realisations">Réalisations</a>
              <a href="#expertise">Expertise</a>
              <a href="#contact">Contact</a>
            </nav>
            <a
              href="#contact"
              className="rounded-full border border-white/12 bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/92"
            >
              Demander un devis
            </a>
          </header>

          <div className="grid min-h-[calc(100vh-92px)] gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/68">
                Prestataire technique événementiel · Paris · Île-de-France
              </div>
              <h1 className="display-title max-w-5xl text-5xl font-semibold leading-[0.94] text-white sm:text-6xl md:text-7xl lg:text-[6rem]">
                Un site plus premium commence par des événements mieux mis en scène.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                JGCOM accompagne les entreprises, collectivités et agences avec des dispositifs techniques élégants, fiables et lisibles : sonorisation, éclairage, vidéo, structures, scènes, tentes et mobilier.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#88a8ff] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-[#a2baff]"
                >
                  Cadrer votre projet
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explorer les services
                  <CirclePlay className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="glass ml-auto max-w-xl rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/42">Ce que le client doit ressentir</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
                <p>Un événement mieux tenu. Une lecture plus claire. Une exécution qui inspire confiance sans montrer d’effort.</p>
                <p>Le rôle du site est le même : rassurer, qualifier et convertir avec plus de netteté, moins de bruit et davantage de stature.</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {proofPoints.slice(0, 4).map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/74">
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
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Services</p>
              <h2 className="display-title mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Chaque métier présenté comme une vraie promesse de résultat.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/64 md:justify-self-end">
              Pour éviter l’effet “site IA”, chaque section doit avoir une intention simple : expliquer, rassurer, projeter. Pas de bloc fourre-tout. Pas de texte générique. Pas de fausse sophistication.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="glass rounded-[2rem] p-6">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/6 p-3">
                    <Icon className="h-6 w-6 text-[#88a8ff]" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{service.description}</p>
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
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Carousel premium</p>
              <h2 className="display-title mt-4 text-4xl font-semibold text-white md:text-5xl">
                Un système de slides plus design, plus narratif, plus premium.
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

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-cover transition duration-500"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-white/52">{currentSlide.label}</p>
                <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                  {currentSlide.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{currentSlide.text}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`glass relative overflow-hidden rounded-[2rem] border p-4 text-left transition ${
                    index === activeSlide ? "border-white/25 bg-white/[0.08]" : "border-white/8"
                  }`}
                >
                  <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
                    <div className="relative h-28 overflow-hidden rounded-[1.4rem] border border-white/8">
                      <Image src={slide.image} alt={slide.label} fill className="object-cover" sizes="160px" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-white/42">{slide.label}</p>
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
        <div className="container-shell grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Expertise</p>
            <h2 className="display-title mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Un site plus épuré parce qu’il reflète une exécution plus maîtrisée.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64">
              Le premium ne vient pas d’une accumulation d’effets. Il vient d’une hiérarchie nette, d’images fortes, de peu de blocs par section et d’un message qui sait exactement ce qu’il doit faire passer.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="glass rounded-[1.8rem] p-5">
                <ShieldCheck className="h-5 w-5 text-[#88a8ff]" />
                <p className="mt-4 text-sm leading-7 text-white/72">{point}</p>
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
                <Icon className="h-6 w-6 text-[#d8b47a]" />
                <h3 className="mt-6 text-2xl font-semibold text-white">{sector.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{sector.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24">
        <div className="container-shell">
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#88a8ff]/18 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-[#d8b47a]/10 blur-3xl" />
            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#d8b47a]">Conversion</p>
                <h2 className="display-title mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Vous avez besoin d’un dispositif technique qui élève l’image de votre événement.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Nous cadrons les contraintes, le niveau d’exigence et les enjeux d’image pour transformer une demande floue en dispositif clair, fiable et mieux présenté.
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
