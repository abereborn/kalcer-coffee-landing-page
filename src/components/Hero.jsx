import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { images } from "../data/coffeeData";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] w-full overflow-hidden bg-ink lg:min-h-screen"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={images.heroBg}
          alt="Secangkir kopi hangat di atas meja krem dengan cahaya matahari dan dedaunan"
          className="h-full w-full object-cover object-[62%_45%]"
        />
      </motion.div>

      {/* Legibility gradients — kept light to preserve the photograph */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-transparent lg:from-ink/60 lg:via-ink/10 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/10" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-kalcer relative z-10 flex min-h-[92vh] flex-col justify-center pb-24 pt-32 lg:min-h-screen lg:pb-32"
      >
        <motion.div
          variants={staggerContainer(0.14, 0.15)}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-caramel-light sm:text-[11px] sm:tracking-widest2"
          >
            Good Coffee
            <span className="inline-block h-px w-8 bg-caramel-light/70" />
            Better Days
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[15vw] font-medium leading-[0.98] text-paper sm:text-6xl lg:text-[5.4rem]"
          >
            Menikmati
            <br />
            Indahnya <em className="italic text-caramel-light">Kopi</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/80 lg:text-base"
          >
            Menikmati kopi adalah seni yang memadukan rasa, aroma, dan
            pengalaman. Setiap tegukan membawa kita pada perjalanan rasa yang
            unik.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-caramel px-7 py-3.5 text-sm font-semibold text-paper shadow-lift transition-colors duration-300 hover:bg-caramel-light"
            >
              Beli Sekarang
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <button className="group inline-flex items-center gap-3 text-sm font-medium text-paper/90 transition-colors hover:text-caramel-light">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/40 transition-colors group-hover:border-caramel-light">
                <Play size={13} strokeWidth={1.5} className="ml-0.5 fill-current" />
              </span>
              Tonton Video
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative handwritten note */}
      <motion.p
        initial={{ opacity: 0, y: 10, rotate: -6 }}
        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
        viewport={viewportOnce}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="pointer-events-none absolute right-[8%] top-[16%] hidden font-hand text-3xl leading-tight text-paper/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] lg:block xl:text-4xl"
      >
        Good Coffee
        <br />
        Good Mood
      </motion.p>

      {/* Vertical slide indicators */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-full bg-ink/25 px-3 py-4 backdrop-blur-sm lg:flex xl:right-10">
        {["01", "02", "03"].map((n, i) => (
          <div key={n} className="flex flex-col items-center gap-4">
            {i !== 0 && <span className="h-8 w-px bg-paper/30" />}
            <span
              className={`text-xs tracking-widest ${
                i === 0 ? "font-semibold text-caramel-light" : "text-paper/50"
              }`}
            >
              {n}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
