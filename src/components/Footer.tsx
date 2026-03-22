import { SITE_METADATA } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800 py-8">
      <div className="w-full px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        <span className="font-display text-xs tracking-[0.2em] uppercase text-ink-600">
          {SITE_METADATA.siteName}
        </span>
        <p className="font-body text-xs text-ink-600">
          &copy; 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
