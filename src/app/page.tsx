"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Prestations" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
] as const;

const showcase = [
  {
    image: "/IMG_6020.jpeg",
    label: "Son, lumière, vidéo",
    title: "Des dispositifs techniques qui rendent l’événement plus net, plus fluide, plus crédible.",
  },
  {
    image: "/IMG_6025.jpeg",
    label: "Structures et scènes",
    title: "Une infrastructure lisible pour mieux accueillir le public, la prise de parole et l’expérience sur place.",
  },
  {
    image: "/IMG_6016.jpeg",
    label: "Pilotage global",
    title: "Un partenaire unique pour coordonner les moyens techniques et tenir le niveau attendu.",
  },
];

const serviceBlocks = [
  {
    title: "Sonorisation",
    text: "Dispositifs audio pour conférences, cérémonies, lancements, événements institutionnels et soirées corporate.",
  },
  {
    title: "Éclairage",
    text: "Mise en lumière technique et scénographique pour donner du relief, structurer l’espace et valoriser les intervenants.",
  },
  {
    title: "Vidéo",
    text: "Écrans, projection et diffusion pour renforcer la lisibilité des contenus, des messages et des temps forts.",
  },
  {
    title: "Structures, scènes, tentes",
    text: "Installations temporaires fiables pour équiper les lieux, organiser les flux et sécuriser l’exécution de l’événement.",
  },
];

function SignatureMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? "none" : "auto" }}
        transition={{ duration: 0.2 }}
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 200,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#203A57",
          border: "1.5px solid rgba(138,168,199,0.55)",
          borderRadius: "999px",
          padding: "9px 16px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 800,
            fontSize: "13px",
            color: "#FFFFFF",
            letterSpacing: "0.05em",
            lineHeight: 1,
          }}
        >
          JG
        </span>
        <span style={{ display: "block", width: "1px", height: "13px", background: "rgba(255,255,255,0.25)" }} />
        <span
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#FFFFFF",
          }}
        >
          Menu
        </span>
        <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ display: "block", height: "1.5px", width: "15px", background: "#FFFFFF" }} />
          <span style={{ display: "block", height: "1.5px", width: "9px", background: "#FFFFFF" }} />
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 190,
              backgroundColor: "#203A57",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#F2EFE8",
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                }}
              >
                Close
              </span>
              <span style={{ display: "block", width: "1.1rem", height: "1px", backgroundColor: "#F2EFE8" }} />
            </button>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: 1,
                padding: "clamp(5rem, 12vw, 8rem) clamp(1.5rem, 6vw, 3.5rem) clamp(3rem, 8vw, 5rem)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 800,
                      display: "block",
                      fontSize: "clamp(2rem, 8vw, 5.5rem)",
                      lineHeight: 1.15,
                      padding: "clamp(0.6rem, 2vw, 1rem) 0",
                      color: "#F2EFE8",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div
              style={{
                padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 6vw, 3.5rem)",
                color: "#D8D1C4",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
                fontSize: "0.8rem",
                lineHeight: 1.7,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <p>Prestataire technique événementiel</p>
              <p>Paris · Île-de-France</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignatureMenu />

      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/IMG_6016.jpeg"
          alt="Installation technique événementielle JGCOM"
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
              "linear-gradient(to bottom, rgba(12,20,34,0.04) 0%, rgba(12,20,34,0.08) 35%, rgba(12,20,34,0.78) 100%)",
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
            minHeight: "100svh",
            padding: "clamp(1.25rem, 5vw, 4rem)",
            paddingBottom: "clamp(2rem, 6vw, 5rem)",
            paddingTop: "5rem",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 11vw, 10rem)",
              lineHeight: 0.9,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              maxWidth: "11ch",
            }}
          >
            JG /<br />
            COM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.65rem, 1.3vw, 0.9rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Prestataire technique événementiel · Paris · Île-de-France
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              marginTop: "1.25rem",
              maxWidth: "34rem",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Sonorisation, éclairage, vidéo, structures, scènes, tentes, décoration et mobilier pour entreprises, collectivités et agences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            style={{ marginTop: "1.75rem", display: "flex", gap: "0.9rem", flexWrap: "wrap" }}
          >
            <Link
              href="/services"
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
                whiteSpace: "nowrap",
              }}
            >
              Voir les prestations
            </Link>
            <a
              href="#contact"
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
                whiteSpace: "nowrap",
              }}
            >
              Demander un devis
            </a>
          </motion.div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            backgroundColor: "#D8D1C4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
            minHeight: "clamp(260px, 40vw, 480px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 3.5vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1F2F3D",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Une technique juste.
            <br />
            Une image plus forte.
            <br />
            Un événement mieux tenu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            position: "relative",
            minHeight: "clamp(260px, 40vw, 480px)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/IMG_6020.jpeg"
            alt="Éclairage et structure JGCOM"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#203A57",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2.5rem",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Image
            src="/IMG_6025.jpeg"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center", opacity: 0.12 }}
          />
        </div>

        {[
          { label: "Métiers", value: "Sonorisation, éclairage, vidéo, structures, scènes, tentes" },
          { label: "Clients", value: "Entreprises, collectivités, agences" },
          { label: "Position", value: "Prestataire technique événementiel depuis 1991" },
        ].map(({ label, value }) => (
          <div key={label} style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "0.58rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#F2EFE8",
                opacity: 0.54,
                marginBottom: "0.55rem",
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
                color: "#F2EFE8",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </motion.section>

      <section id="realisations" style={{ background: "#FBF8F2" }}>
        {showcase.map((item, index) => (
          <section
            key={item.title}
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
                minHeight: "clamp(320px, 48vw, 620px)",
                order: index % 2 === 0 ? 0 : 1,
              }}
            >
              <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
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
                {item.label}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4.8vw, 4.5rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.04em",
                  color: "#1F2F3D",
                  maxWidth: "11ch",
                }}
              >
                {item.title}
              </h2>
            </motion.div>
          </section>
        ))}
      </section>

      <section id="contact" style={{ background: "#1F2F3D", color: "#F2EFE8", padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 4rem)" }}>
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
            Parlons de votre prochain dispositif événementiel.
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
            JGCOM étudie vos contraintes, votre lieu, vos objectifs et le niveau d’image attendu pour proposer une solution technique claire, réaliste et bien exécutée.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
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
              href="/services"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.25rem",
                backgroundColor: "transparent",
                color: "#F2EFE8",
                border: "1px solid rgba(255,255,255,0.16)",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Explorer les prestations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
