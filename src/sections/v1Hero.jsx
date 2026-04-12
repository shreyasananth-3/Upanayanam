import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';

const Scene = React.lazy(() => import('../3d/SacredThread'));

const FALLBACK_BG =
  'radial-gradient(ellipse at 50% 45%, rgba(160,120,40,0.06) 0%, transparent 55%)';

const reveal = (delay) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.8, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export function Hero() {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [gl, setGl] = useState(true);

  useEffect(() => {
    setReady(true);
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const h = (e) => setReducedMotion(e.matches);
    mql.addEventListener('change', h);
    try {
      const c = document.createElement('canvas');
      if (!(c.getContext('webgl') || c.getContext('experimental-webgl'))) setGl(false);
    } catch { setGl(false); }
    return () => mql.removeEventListener('change', h);
  }, []);

  return (
    <section
      className="snap-section relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
      role="banner"
      aria-label="Invitation to Deva's Brahmopadesham ceremony"
    >
      <p className="sr-only">
        You are invited to the Brahmopadesham — the sacred thread ceremony — of
        Deva, known as Vyshampayana. Thursday, April 23, 2026, Bangalore.
      </p>

      {/* warm charcoal, not pure black */}
      <div className="absolute inset-0 bg-[#0b0a08]" />

      {/* glow — fades in over 3 s */}
      <motion.div
        className="absolute inset-0"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.4 }}
      >
        {gl ? (
          <Suspense fallback={<div className="w-full h-full" style={{ background: FALLBACK_BG }} />}>
            {ready && <Scene reducedMotion={reducedMotion} />}
          </Suspense>
        ) : (
          <div className="w-full h-full" style={{ background: FALLBACK_BG }} />
        )}
      </motion.div>

      {/* text — centered, compact, unhurried reveals */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-extralight tracking-tight leading-none"
          {...reveal(1.2)}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        >
          Brahmopadesham
        </motion.h1>

        <motion.div
          className="space-y-3"
          {...reveal(2.2)}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-600">of</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extralight"
              style={{ color: '#d4b066' }}>
            Deva
          </h2>
          <p className="text-sm text-gray-600 italic font-light">Vyshampayana</p>
        </motion.div>

        <motion.div
          className="space-y-1 text-gray-500 text-sm font-light"
          {...reveal(3.2)}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        >
          <p>Thursday, April 23, 2026</p>
          <p>Bangalore</p>
        </motion.div>

        <motion.p
          className="text-[10px] text-gray-700 tracking-widest pt-6"
          {...reveal(4.0)}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        >
          गायत्री मन्त्र — विश्वामित्र ऋषि
        </motion.p>

        <motion.div
          className="pt-8 text-gray-700"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 5 }}
        >
          <motion.p
            className="text-xs tracking-widest uppercase"
            animate={reducedMotion ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
