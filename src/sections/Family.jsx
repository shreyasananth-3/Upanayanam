import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';

export function Family() {
  return (
    <section
      className="snap-section relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8"
      style={{ background: '#2C1200' }}
    >
      <div className="max-w-3xl mx-auto w-full space-y-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-saffron-100">
            Grace Us With Your Presence
          </h2>
          <p className="text-xl md:text-2xl font-serif font-light text-saffron-100/70 leading-relaxed">
            <span className="text-saffron-300">Ananth's family</span> humbly requests you and your family to come and bless our child
            as he steps into the light of the Vedas and becomes <span className="text-saffron-300 italic">Dvija</span> — twice-born.
          </p>
        </motion.div>

        {/* Parents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-400/50">Parents</p>
          <p className="text-2xl font-serif font-light text-saffron-300">
            {eventData.family.parents.map(p => p.name).join(' & ')}
          </p>
        </motion.div>

        {/* Grandparents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-400/50">Blessed by</p>
          <p className="text-xl font-serif font-light text-saffron-100/80">
            {eventData.family.grandparents.map(g => g.name).join(' & ')}
          </p>
          <p className="text-xl font-serif font-light text-saffron-100/80">
            {eventData.family.maternalGrandmother.name} & <span className="italic">late</span> {eventData.family.lateGrandparents[0].name}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-kumkum-500/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-kumkum-500/30" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-kumkum-500/20" />
        </div>

        {/* Relatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-400/50">With heartfelt love from</p>
          {eventData.family.relatives.map((r, i) => (
            <p key={i} className="text-lg font-serif font-light text-saffron-100/70">{r.name}</p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Family;
