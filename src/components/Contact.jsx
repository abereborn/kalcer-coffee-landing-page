import { motion } from "framer-motion";
import { images } from "../data/coffeeData";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[78vh] items-center overflow-hidden bg-ink py-28 lg:min-h-[85vh]"
    >
      <div className="absolute inset-0">
        <img
          src={images.ctaBg}
          alt="Interior Kalcer Coffee di malam hari dengan pencahayaan hangat"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(36,24,17,0.75) 0%, rgba(36,24,17,0.25) 60%, rgba(36,24,17,0.15) 100%)",
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer(0.13)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-kalcer relative z-10 mx-auto max-w-xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 text-[11px] font-semibold uppercase tracking-widest2 text-caramel-light"
        >
          Kunjungi Kami
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-4xl font-medium leading-[1.1] text-paper sm:text-5xl lg:text-[3.4rem]"
        >
          Siap Menikmati
          <br />
          <em className="italic text-caramel-light">Kopi Terbaik?</em>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-sm text-paper/75">
          Kunjungi Kalcer Coffee dan temukan rasa favoritmu.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-caramel px-7 py-3.5 text-sm font-semibold text-paper shadow-lift transition-colors duration-300 hover:bg-caramel-light"
          >
            Kunjungi Lokasi
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="mailto:hello@kalcercoffee.com"
            className="inline-flex items-center gap-2 rounded-full border border-paper/35 px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-caramel-light hover:text-caramel-light"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
