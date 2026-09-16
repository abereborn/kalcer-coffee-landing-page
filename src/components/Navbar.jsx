import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { navLinks } from "../data/coffeeData";

export default function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveHref(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const lightText = !scrolled;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(250,246,238,0.94)" : "rgba(250,246,238,0)",
          boxShadow: scrolled
            ? "0 10px 30px -18px rgba(36,24,17,0.35)"
            : "0 0px 0px rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-kalcer">
          <div className="flex h-20 items-center justify-between lg:h-24">
            {/* Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className={`font-display text-2xl tracking-tight transition-colors duration-500 ${
                lightText ? "text-paper" : "text-ink"
              }`}
            >
              Kalcer<span className="text-caramel-light">.</span>
              <span className="block -mt-1 text-[10px] font-body font-medium uppercase tracking-widest2 opacity-70">
                Coffee
              </span>
            </a>

            {/* Center links - desktop */}
            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative py-2 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-500 ${
                    lightText ? "text-paper/90 hover:text-paper" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 ease-cinematic group-hover:w-full ${
                      lightText ? "bg-caramel-light" : "bg-caramel"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-5">
              <div className="hidden items-center sm:flex">
                <motion.div
                  className="flex items-center overflow-hidden"
                  animate={{ width: searchOpen ? 160 : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <input
                    type="text"
                    placeholder="Cari menu..."
                    className={`w-40 border-b bg-transparent px-1 py-1 text-sm outline-none placeholder:opacity-50 ${
                      lightText ? "border-paper/40 text-paper" : "border-ink/30 text-ink"
                    }`}
                  />
                </motion.div>
                <button
                  aria-label="Toggle search"
                  onClick={() => setSearchOpen((s) => !s)}
                  className={`transition-colors duration-500 ${
                    lightText ? "text-paper hover:text-caramel-light" : "text-ink hover:text-caramel"
                  }`}
                >
                  <Search size={19} strokeWidth={1.6} />
                </button>
              </div>

              <button
                aria-label="Shopping cart"
                onClick={(e) => handleNavClick(e, "#menu")}
                className={`relative transition-colors duration-500 ${
                  lightText ? "text-paper hover:text-caramel-light" : "text-ink hover:text-caramel"
                }`}
              >
                <ShoppingBag size={19} strokeWidth={1.6} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.4, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-caramel text-[10px] font-semibold text-paper"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={`transition-colors duration-500 lg:hidden ${
                  lightText ? "text-paper" : "text-ink"
                }`}
              >
                <Menu size={22} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="container-kalcer flex h-20 items-center justify-between">
              <span className="font-display text-2xl text-paper">Kalcer Coffee</span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-paper">
                <X size={24} strokeWidth={1.6} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl leading-tight text-paper/90 transition-colors hover:text-caramel-light"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-kalcer pb-10 text-sm uppercase tracking-widest2 text-paper/50">
              Jakarta, Indonesia
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
