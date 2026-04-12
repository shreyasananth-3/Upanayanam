import React from 'react';
import { motion } from 'framer-motion';

export function Vishwamitra() {
  return (
    <section className="snap-section relative w-full min-h-screen flex items-center justify-center bg-ivory py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-500/60">Brahmarshi Vishwamitra</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight text-saffron-950">
            The Sage Who Gave Light<br />to the World
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            He was born a king — Kaushika, ruler of a great kingdom, commander of armies, master of every worldly power. And yet when he encountered the sage Vasishtha and witnessed the supreme peace that no kingdom could buy, he walked away from his throne.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What followed was one of the most extraordinary journeys in all of Indian thought. Vishwamitra underwent tapas of such intensity — through failure, humiliation, temptation, and relapse — that the cosmos itself had to acknowledge him. He became Brahmarshi: a seer of the highest order.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            It was through this journey — not despite its struggles but <em className="text-saffron-500 font-medium">because</em> of them — that the Gayatri Mantra was revealed through him. He did not compose it. He <em className="text-saffron-500 font-medium">received</em> it. A seer does not create truth; he burns away everything false until truth is all that remains.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Vishwamitra then did something radical: he declared the Gayatri Mantra the inheritance of all human beings, regardless of birth. A king who became a sage. A sage who gave his greatest discovery away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8 mt-4 border-t border-kumkum-500/20"
          >
            <p className="text-xl md:text-2xl font-serif font-light text-saffron-500 leading-relaxed italic text-center">
              Every time this mantra is whispered into a child's ear, Vishwamitra's long walk from power to wisdom walks again.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Vishwamitra;
