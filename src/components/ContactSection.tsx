'use client';

import { motion } from 'framer-motion';
import { CONTACT_CONTENT } from '@/data/site';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink-950 py-24 sm:py-32">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        <p className="font-display text-accent-500 text-sm tracking-[0.25em] uppercase mb-4">
          Contact
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink-50 mb-6 max-w-xl leading-tight">
          {CONTACT_CONTENT.heading}
        </h2>
        <p className="text-ink-400 text-lg mb-12 max-w-lg leading-relaxed">
          {CONTACT_CONTENT.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <a
            href={`mailto:${CONTACT_CONTENT.email}`}
            className="text-ink-400 hover:text-accent-400 transition-colors font-body text-sm"
          >
            {CONTACT_CONTENT.email}
          </a>
          <span className="text-ink-400 font-body text-sm">
            {CONTACT_CONTENT.phone}
          </span>
        </div>

        <motion.a
          href={`mailto:${CONTACT_CONTENT.email}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="inline-flex items-center gap-2 bg-accent-500 text-ink-950 font-display font-semibold px-8 py-4 text-sm tracking-wide uppercase hover:bg-accent-400 transition-colors duration-200"
        >
          {CONTACT_CONTENT.ctaText}
          <span aria-hidden="true">→</span>
        </motion.a>
      </div>
    </section>
  );
}
