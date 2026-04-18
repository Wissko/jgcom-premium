"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Prestations" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function JgcomMenu() {
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
              {NAV_LINKS.map((link, i) => (
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
