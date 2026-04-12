import React from 'react';
import { motion } from 'framer-motion';

export function About() {
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
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-500/60">What is Brahmopadesham?</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight text-saffron-950">
            The Second Birth
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
            Every human being is born once — from their mother's womb, into the world of names and forms. But in the Vedic tradition, a boy is given the opportunity of a second birth. This is Upanayanam.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The word itself tells you everything: <em className="text-saffron-500 font-medium">Upa</em> — near. <em className="text-saffron-500 font-medium">Nayanam</em> — to bring. To bring near. Near to what? Near to the Guru. Near to knowledge. Near to the Divine.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            But within this ceremony lives one moment that everything else is building toward. One moment that gives the entire day its name.
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl font-serif font-light text-saffron-500 text-center py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Brahmopadesham.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <em className="text-saffron-500 font-medium">Brahma</em> — the ultimate reality. The source of all that exists. Not a deity with a form, but the ground of existence itself. <em className="text-saffron-500 font-medium">Upadesha</em> — instruction. Teaching. The transmission of something that cannot be written down, only spoken, only whispered, only received.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Brahmopadesham is literally the <strong className="text-saffron-950">transmission of the knowledge of Brahman</strong> — from one human being to another, mouth to ear, breath to breath, across an unbroken lineage that stretches back to Rishi Vishwamitra himself.
          </motion.p>

          <motion.p
            className="text-saffron-950/80 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            On this day, a boy crosses a threshold that cannot be uncrossed. He receives the Yajnopavita — the sacred thread — and with it, three debts he must spend his life honouring. He receives the Gayatri Mantra — the most powerful of all Vedic hymns, a prayer not to any single god but to the light of consciousness itself. And he receives a new identity: <em className="text-saffron-500 font-medium">Dvija</em>. Twice-born.
          </motion.p>

          <motion.p
            className="text-saffron-950/60 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            This is not a religious ceremony in the narrow sense. It is a civilisational one. It is the moment a family says to a child: you are old enough now to carry something ancient. And the child, by accepting it, says: I will.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
