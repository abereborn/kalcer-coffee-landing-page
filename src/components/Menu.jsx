import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { featuredMenu, secondaryMenu, images } from "../data/coffeeData";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function Menu({ onAdd }) {
  return (
    <section id="menu" className="relative overflow-hidden bg-paper py-28 lg:py-36">
      <div className="absolute inset-0">
        <img
          src={images.menuBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-105 object-cover opacity-40 blur-[2px] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-paper/88" />
      </div>

      <div className="container-kalcer relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-caramel"
          >
            Menu Pilihan
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]"
          >
            Kopi Pilihan,
            <br />
            <em className="italic text-caramel">Rasa Istimewa</em>
          </motion.h2>
        </motion.div>

        {/* Featured items — large editorial photo cards */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2"
        >
          {featuredMenu.map((item) => (
            <motion.div key={item.id} variants={fadeUp} className="group">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink/70">
                    {item.tag}
                  </span>
                  <button
                    onClick={() => onAdd(item)}
                    aria-label={`Tambah ${item.name} ke keranjang`}
                    className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-14 items-center justify-center rounded-full bg-caramel text-paper opacity-0 shadow-lift transition-all duration-400 ease-cinematic hover:bg-caramel-light group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Plus size={18} strokeWidth={2} />
                  </button>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-ink/10 py-5">
                  <div>
                    <h3 className="font-display text-xl text-ink">{item.name}</h3>
                    <p className="mt-1.5 max-w-[260px] text-[13px] leading-relaxed text-ink/55">
                      {item.description}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-display text-lg text-caramel">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary picks — compact list, different rhythm on purpose */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mx-auto mt-20 max-w-3xl border-t border-ink/10 pt-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-8 text-[11px] font-semibold uppercase tracking-widest2 text-ink/45"
          >
            Coba Juga
          </motion.p>
          <div className="divide-y divide-ink/10">
            {secondaryMenu.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group flex items-center gap-5 py-5"
              >
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg text-ink">{item.name}</h4>
                  <p className="mt-0.5 text-[13px] text-ink/55">{item.description}</p>
                </div>
                <span className="font-display text-base text-caramel">{item.price}</span>
                <button
                  onClick={() => onAdd(item)}
                  aria-label={`Tambah ${item.name} ke keranjang`}
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-caramel/40 text-caramel transition-colors hover:bg-caramel hover:text-paper"
                >
                  <Plus size={15} strokeWidth={2} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
