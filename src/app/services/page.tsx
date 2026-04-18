"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Sonorisation",
    text: "Systèmes audio et diffusion pour conférences, cérémonies, lancements, événements institutionnels et soirées corporate.",
    image: "/IMG_6018.jpeg",
  },
  {
    title: "Éclairage",
    text: "Mise en lumière technique et scénographique pour structurer l’espace, valoriser la scène et renforcer le niveau perçu de l’événement.",
    image: "/IMG_6020.jpeg",
  },
  {
    title: "Vidéo",
    text: "Écrans, projection, diffusion et restitution pour rendre les contenus plus visibles, les messages plus lisibles et l’expérience plus cohérente.",
    image: "/IMG_6021.jpeg",
  },
  {
    title: "Structures, scènes, tentes",
    text: "Installations temporaires fiables pour équiper les lieux, accueillir les dispositifs techniques et organiser les flux sur site.",
    image: "/IMG_6025.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: "#F2EFE8", color: "#1F2F3D" }}>
      <section
        style={{
          minHeight: "75svh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/IMG_6020.jpeg"
          alt="Prestations techniques JGCOM"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(12,20,34,0.18) 0%, rgba(12,20,34,0.16) 35%, rgba(12,20,34,0.78) 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            minHeight: "75svh",
            padding: "clamp(1.25rem, 5vw, 4rem)",
            paddingBottom: "clamp(2rem, 6vw, 5rem)",
            paddingTop: "5rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.65rem, 1.3vw, 0.9rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Prestations techniques événementielles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              lineHeight: 0.92,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              maxWidth: "11ch",
            }}
          >
            Les moyens techniques au service de vos événements.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.45 }}
            style={{
              marginTop: "1.25rem",
              maxWidth: "38rem",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            JGCOM accompagne les entreprises, collectivités et agences avec une offre technique complète : sonorisation, éclairage, vidéo, structures, scènes, tentes, décoration et mobilier.
          </motion.p>

          <div style={{ marginTop: "1.75rem", display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
            <a
              href="mailto:contact@jgcom.fr"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.25rem",
                backgroundColor: "#FFFFFF",
                color: "#203A57",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Demander un devis
            </a>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.25rem",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.16)",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Retour accueil
            </Link>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            alignItems: "stretch",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              position: "relative",
              minHeight: "clamp(300px, 45vw, 560px)",
              order: index % 2 === 0 ? 0 : 1,
            }}
          >
            <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              background: index % 2 === 0 ? "#FBF8F2" : "#E6EDF4",
              padding: "clamp(2.5rem, 7vw, 5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "0.58rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#2E5F95",
                marginBottom: "1rem",
              }}
            >
              JGCOM
            </p>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.8vw, 4.5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.04em",
                color: "#1F2F3D",
                maxWidth: "10ch",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                marginTop: "1.5rem",
                maxWidth: "34rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#2E4155",
              }}
            >
              {service.text}
            </p>
          </motion.div>
        </section>
      ))}

      <section
        id="contact"
        style={{
          background: "#1F2F3D",
          color: "#F2EFE8",
          padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "0.58rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(242,239,232,0.6)",
              marginBottom: "1rem",
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 5rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.04em",
              maxWidth: "12ch",
            }}
          >
            Parlons de votre prochain dispositif technique.
          </h2>
          <p
            style={{
              marginTop: "1.5rem",
              maxWidth: "40rem",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(242,239,232,0.82)",
            }}
          >
            JGCOM étudie votre format, votre lieu, vos contraintes et le niveau d’image attendu pour proposer une solution technique claire, réaliste et bien exécutée.
          </p>
        </div>
      </section>
    </main>
  );
}
