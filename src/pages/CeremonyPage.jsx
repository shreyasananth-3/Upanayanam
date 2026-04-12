import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { rituals } from '../data/ritualsData';

export default function CeremonyPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-ivory pt-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 space-y-16">

        {/* ── What is Brahmopadesham ── */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron-500/60">What is Brahmopadesham?</p>
            <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight text-saffron-950">
              The Second Birth
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-saffron-950/80 leading-relaxed text-lg">
              Every human being is born once — from their mother's womb, into the world of names and forms. But in the Vedic tradition, a boy is given the opportunity of a second birth. This is Upanayanam.
            </p>

            <p className="text-saffron-950/80 leading-relaxed text-lg">
              The word itself tells you everything: <em className="text-saffron-500 font-medium">Upa</em> — near. <em className="text-saffron-500 font-medium">Nayanam</em> — to bring. To bring near. Near to what? Near to the Guru. Near to knowledge. Near to the Divine.
            </p>

            <p className="text-saffron-950/80 leading-relaxed text-lg">
              But within this ceremony lives one moment that everything else is building toward. One moment that gives the entire day its name.
            </p>

            <p className="text-2xl md:text-3xl font-serif font-light text-saffron-500 text-center py-2">
              Brahmopadesham.
            </p>

            <p className="text-saffron-950/80 leading-relaxed text-lg">
              <em className="text-saffron-500 font-medium">Brahma</em> — the ultimate reality. The source of all that exists. Not a deity with a form, but the ground of existence itself. <em className="text-saffron-500 font-medium">Upadesha</em> — instruction. Teaching. The transmission of something that cannot be written down, only spoken, only whispered, only received.
            </p>

            <p className="text-saffron-950/80 leading-relaxed text-lg">
              Brahmopadesham is literally the <strong className="text-saffron-950">transmission of the knowledge of Brahman</strong> — from one human being to another, mouth to ear, breath to breath, across an unbroken lineage that stretches back to Rishi Vishwamitra himself.
            </p>

            <p className="text-saffron-950/80 leading-relaxed text-lg">
              On this day, a boy crosses a threshold that cannot be uncrossed. He receives the Yajnopavita — the sacred thread — and with it, three debts he must spend his life honouring. He receives the Gayatri Mantra — the most powerful of all Vedic hymns, a prayer not to any single god but to the light of consciousness itself. And he receives a new identity: <em className="text-saffron-500 font-medium">Dvija</em>. Twice-born.
            </p>

            <p className="text-saffron-950/60 leading-relaxed text-lg">
              This is not a religious ceremony in the narrow sense. It is a civilisational one. It is the moment a family says to a child: you are old enough now to carry something ancient. And the child, by accepting it, says: I will.
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-kumkum-500/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-kumkum-500/30" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-kumkum-500/20" />
        </div>

        {/* ── The 12 Rituals ── */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron-500/60">The Ceremony</p>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight text-saffron-950">
              The Sacred Rituals of the Day
            </h2>
          </div>

          <div className="space-y-0">
            {rituals.map((ritual, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.03 }}
                className={`flex gap-5 md:gap-7 py-7 border-b border-saffron-800/8 last:border-0 ${ritual.highlight ? 'bg-saffron-400/8 -mx-4 px-4 rounded-lg' : ''}`}
              >
                <div className="flex flex-col items-center pt-1.5 min-w-[2rem]">
                  <span className={`text-xs font-light tabular-nums ${ritual.highlight ? 'text-saffron-500' : 'text-saffron-500/70'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 ${ritual.highlight ? 'bg-saffron-500' : 'bg-saffron-500/40'}`} />
                  {idx < rituals.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-saffron-500/15 to-transparent mt-2" />
                  )}
                </div>

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

      </div>
    </div>
  );
}
