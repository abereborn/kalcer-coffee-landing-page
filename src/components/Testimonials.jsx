import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "../data/coffeeData";
import { fadeUp, viewportOnce } from "../lib/motion";

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      const next = (prev + dir + testimonials.length) % testimonials.length;
      return [next, dir];
    });
  };

  const active = testimonials[index];

  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="container-kalcer">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-caramel">
            Testimoni
          </p>
          <h2 className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]">
            Apa <em className="italic text-caramel">Kata Mereka?</em>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center"
              >
                <span className="font-display text-6xl leading-none text-caramel/40">
                  &ldquo;
                </span>
                <p className="mx-auto -mt-4 max-w-xl text-xl leading-relaxed text-ink sm:text-2xl">
                  {active.quote}
                </p>

                <div className="mt-7 flex items-center justify-center gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-caramel text-caramel" />
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coffee text-sm font-semibold text-paper">
                    {initials(active.name)}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-ink">{active.name}</p>
                    <p className="text-xs text-ink/55">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              aria-label="Testimoni sebelumnya"
              onClick={() => paginate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-caramel hover:text-caramel"
            >
              <ArrowLeft size={17} strokeWidth={1.6} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Ke testimoni ${i + 1}`}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-caramel" : "w-1.5 bg-ink/20"
                  }`}
                />
              ))}
            </div>

            <button
              aria-label="Testimoni berikutnya"
              onClick={() => paginate(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-caramel hover:text-caramel"
            >
              <ArrowRight size={17} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
