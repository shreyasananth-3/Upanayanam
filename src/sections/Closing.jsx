import React from 'react';
import { motion } from 'framer-motion';
import { templeAudio } from '../utils/audioSynthesis';

export function Closing() {
  return (
    <section className="snap-section relative w-full min-h-screen flex items-center justify-center bg-black text-white py-20 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-900" />

      {/* Ambient elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center space-y-16">
        {/* Sacred transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
          <span className="text-3xl">🕉️</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
        </motion.div>

        {/* Main closing message */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
            Your Presence
            <br />
            Is Blessed
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl mx-auto">
            As Deva steps into the eternal light of Vedic knowledge, your presence and blessings become part of this sacred journey.
          </p>
        </motion.div>

        {/* Contact & Bell */}
        <motion.div
          className="space-y-8 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-gray-500">For inquiries</p>
            <p className="text-2xl font-serif font-light text-gold-300">
              Shreyas Ananth
            </p>
          </div>

          <button
            onClick={() => templeAudio.playBell(2)}
            className="inline-block px-8 py-3 border border-gold-500 text-gold-300 hover:bg-gold-500/10 transition-all duration-300 rounded-lg"
          >
            🔔 Hear the Sacred Bell
          </button>
        </motion.div>

        {/* Sanskrit closing */}
        <motion.div
          className="space-y-6 py-12 border-t border-gold-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-2xl md:text-3xl text-gold-200 leading-relaxed italic">
            अयं निज: परो वेति गणना लघु चेतसाम् |<br />
            उदारचरितानां तु वसुधैव कुटुम्बकम्
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            "Others are not strangers; they are family. This is the wisdom of the noble-hearted."
          </p>
        </motion.div>

        {/* Final blessing */}
        <motion.div
          className="text-center text-gray-400 text-sm md:text-base space-y-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>
            Created with reverence for a moment of eternal significance.
          </p>
          <p className="text-gold-400 font-serif font-light text-xl pt-2">
            Hari Om Tat Sat
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Closing;
