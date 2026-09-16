import { motion } from "framer-motion";
import { Coffee, Sparkles, Truck, Heart } from "lucide-react";
import { features } from "../data/coffeeData";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const iconMap = {
  quality: Coffee,
  flavor: Sparkles,
  delivery: Truck,
  loyal: Heart,
};

export default function FeatureBar() {
  return (
    <div className="relative z-20 -mt-16 px-4 sm:-mt-20 sm:px-0 lg:-mt-24">
      <div className="container-kalcer">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-x-4 gap-y-9 rounded-[26px] bg-paper px-6 py-9 shadow-soft ring-1 ring-ink/[0.06] sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-ink/10 sm:px-2 sm:py-11 lg:px-6"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.id];
            return (
              <motion.div
                key={feature.id}
                variants={fadeUp}
                className="flex flex-col items-center gap-4 px-2 text-center sm:px-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-caramel/35 text-caramel">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="font-display text-[17px] text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-ink/55">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
