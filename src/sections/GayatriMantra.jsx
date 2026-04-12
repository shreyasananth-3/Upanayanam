import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventData } from '../data/eventData';

export function GayatriMantra() {
  return (
    <section
      className="snap-section relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8"
      style={{ background: '#2C1200' }}
    >
      <div className="max-w-3xl mx-auto w-full space-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-400/50">The Gayatri Mantra</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight text-saffron-100">
            The Mantra That Belongs<br />to All of Humanity
          </h2>
        </motion.div>

        <div className="space-y-12">
          {eventData.gayatri.lines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.15 }}
              className="text-center space-y-3"
            >
              <p className="text-2xl md:text-4xl text-saffron-300 font-serif leading-relaxed">
                {line.devanagari}
              </p>
              <p className="text-saffron-100/50 leading-relaxed text-base md:text-lg max-w-xl mx-auto whitespace-pre-line">
                {line.meaning}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8 border-t border-saffron-500/20 space-y-6 text-center"
        >
          <p className="text-saffron-100/70 leading-relaxed text-lg">
            This is not a prayer asking for things. It is a prayer asking for <em className="text-saffron-300">clarity</em> — the ability to think rightly, see clearly, and live wisely. It has been recited at dawn by millions of human beings for thousands of years. Today, it enters one more life.
          </p>

          <Link
            to="/gayatri-story"
            className="inline-block text-saffron-400/60 hover:text-saffron-300 text-sm uppercase tracking-[0.2em] transition-colors duration-300 border-b border-saffron-400/20 hover:border-saffron-300/50 pb-1"
          >
            Read the full story of the Gayatri Mantra →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default GayatriMantra;
