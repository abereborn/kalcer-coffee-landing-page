import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "../data/coffeeData";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mainY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const accentY = useTransform(scrollYProgress, [0, 1], ["-4%", "10%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-paper py-28 lg:py-36"
    >
      <div className="container-kalcer grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-14">
        {/* Text column */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-lg"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-caramel"
          >
            Tentang Kami
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]"
          >
            Lebih dari Sekadar Kopi,
            <br />
            <em className="italic text-caramel">Ini Tentang Cerita.</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-[15px] leading-relaxed text-ink/65 lg:text-base"
          >
            Kami percaya bahwa kopi bukan hanya minuman, tetapi juga tentang
            momen, kebersamaan, dan cerita yang tercipta di setiap
            cangkirnya.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group mt-9 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-semibold text-ink transition-colors hover:border-caramel hover:text-caramel"
          >
            Pelajari Lebih Lanjut
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Layered photography composition */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px] lg:h-[520px] lg:max-w-none">
          <motion.div
            style={{ y: mainY }}
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-0 w-[78%] -translate-x-[58%] bg-paper p-3 pb-5 shadow-card sm:w-[72%]"
          >
            <img
              src={images.aboutBg}
              alt="Latte hangat di atas meja kayu dengan foto polaroid tertempel di dinding"
              className="h-[300px] w-full object-cover sm:h-[340px] lg:h-[380px]"
            />
          </motion.div>

          <motion.div
            style={{ y: accentY }}
            initial={{ opacity: 0, y: -30, rotate: 5 }}
            whileInView={{ opacity: 1, rotate: 5 }}
            viewport={viewportOnce}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 w-[52%] bg-paper p-2.5 pb-4 shadow-card sm:w-[46%]"
          >
            {/* washi tape */}
            <span className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-3 bg-sand/80" />
            <img
              src={images.coffeeAmericano}
              alt="Kopi hitam pekat di dalam cafe Kalcer Coffee"
              className="h-40 w-full object-cover sm:h-44"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pointer-events-none absolute -right-2 bottom-6 rotate-3 font-hand text-3xl leading-tight text-caramel-dim sm:right-2 sm:text-4xl"
          >
            Small cup
            <br />
            Big story
          </motion.p>
        </div>
      </div>
    </section>
  );
}
