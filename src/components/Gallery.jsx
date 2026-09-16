import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { galleryItems } from "../data/coffeeData";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const spanClasses = {
  interior: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2",
  lifestyle: "col-span-1 row-span-2 sm:col-span-1 sm:row-span-3",
  atmosphere: "col-span-1 row-span-2 sm:col-span-1 sm:row-span-3",
  "detail-latte": "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  "detail-counter": "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  "detail-beans": "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="bg-ink py-28 lg:py-36">
      <div className="container-kalcer">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-caramel-light"
          >
            Galeri
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-medium leading-[1.1] text-paper sm:text-[2.75rem]"
          >
            Suasana yang
            <br />
            <em className="italic text-caramel-light">Membuat Rindu</em>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 auto-rows-[110px] gap-3 sm:grid-cols-4 sm:auto-rows-[150px] sm:gap-4 lg:auto-rows-[170px]"
        >
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              variants={fadeUp}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden text-left ${spanClasses[item.id]}`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/45" />
              <div className="absolute inset-0 flex translate-y-2 flex-col items-start justify-end gap-2 p-4 opacity-0 transition-all duration-400 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/50 text-paper">
                  <Expand size={14} strokeWidth={1.6} />
                </span>
                <p className="text-xs font-medium text-paper/90">{item.caption}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6"
          >
            <motion.button
              aria-label="Tutup"
              onClick={() => setActiveIndex(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-caramel-light hover:text-caramel-light"
            >
              <X size={20} strokeWidth={1.6} />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl"
            >
              <img
                src={galleryItems[activeIndex].image}
                alt={galleryItems[activeIndex].caption}
                className="max-h-[85vh] w-full object-contain"
              />
              <p className="mt-4 text-center font-hand text-2xl text-paper/80">
                {galleryItems[activeIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
