import React from 'react';
import { motion } from 'framer-motion';
import { rituals } from '../data/ritualsData';

export function Rituals() {
  return (
    <section className="snap-section relative w-full min-h-screen flex items-center justify-center bg-ivory py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-500/60">The Ceremony</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight text-saffron-950">
            The Sacred Rituals of the Day
          </h2>
        </motion.div>

        <div className="space-y-0">
          {rituals.map((ritual, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`flex gap-5 md:gap-7 py-7 border-b border-saffron-800/8 last:border-0 ${ritual.highlight ? 'bg-saffron-400/8 -mx-4 px-4 rounded-lg' : ''}`}
            >
              {/* Number + dot */}
              <div className="flex flex-col items-center pt-1.5 min-w-[2rem]">
                <span className={`text-xs font-light tabular-nums ${ritual.highlight ? 'text-saffron-500' : 'text-saffron-500/40'}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${ritual.highlight ? 'bg-saffron-500' : 'bg-saffron-500/25'}`} />
                {idx < rituals.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-saffron-500/15 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-lg md:text-xl font-serif font-light mb-2 ${ritual.highlight ? 'text-saffron-500' : 'text-saffron-950/90'}`}>
                  {ritual.name}
                </h3>
                <p className="text-saffron-950/60 leading-relaxed text-sm md:text-base">
                  {ritual.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rituals;
