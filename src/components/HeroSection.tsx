'use client';

import { motion } from 'framer-motion';
import { HERO_CONTENT, SITE_METADATA } from '@/data/site';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-ink-950 overflow-hidden"
    >
      {/* アクセントライン — 上部 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent-500" />

      <div className="w-full px-6 sm:px-12 lg:px-20 py-32">
        {/* ブランド名 — 最大の視覚要素 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-accent-500 text-sm tracking-[0.25em] uppercase mb-6"
        >
          {SITE_METADATA.siteName}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl lg:text-[clamp(4rem,9vw,8rem)] font-bold leading-[1.05] tracking-tight text-ink-50 max-w-5xl"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-lg sm:text-xl text-ink-400 max-w-xl leading-relaxed"
        >
          {HERO_CONTENT.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href={HERO_CONTENT.ctaHref}
            className="inline-flex items-center gap-2 bg-accent-500 text-ink-950 font-display font-semibold px-8 py-4 text-sm tracking-wide uppercase hover:bg-accent-400 transition-colors duration-200"
          >
            {HERO_CONTENT.ctaText}
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>

      {/* アクセントライン — 下部 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-ink-800" />
    </section>
  );
}
