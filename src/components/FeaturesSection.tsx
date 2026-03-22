'use client';

import { motion } from 'framer-motion';
import { FEATURES } from '@/data/site';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-ink-50 py-24 sm:py-32">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        <p className="font-display text-accent-500 text-sm tracking-[0.25em] uppercase mb-4">
          Features
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 mb-16 max-w-xl leading-tight">
          What we do
        </h2>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="divide-y divide-ink-200"
        >
          {FEATURES.map((feature, index) => (
            <motion.li
              key={feature.title}
              variants={itemVariants}
              className="flex items-start gap-8 py-10 sm:py-12"
            >
              <span className="font-display text-4xl font-bold text-ink-200 w-12 shrink-0 leading-none pt-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink-600 leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
