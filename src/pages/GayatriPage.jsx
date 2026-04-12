import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

function Chapter({ number, title, paragraphs }) {
  return (
    <div className="space-y-8 py-14 border-b border-kumkum-500/10 last:border-0">
      <motion.div {...fade()} className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-saffron-500/50">Chapter {number}</p>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-saffron-300 leading-tight">{title}</h2>
      </motion.div>
      {paragraphs.map((p, i) => (
        <motion.p
          key={i}
          {...fade(0.1 + i * 0.05)}
          className="text-saffron-100/70 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: p }}
        />
      ))}
    </div>
  );
}

const vishwamitraChapters = [
  {
    title: 'The King Who Was Not Enough',
    paragraphs: [
      'Kaushika had everything.',
      'A kingdom that stretched to the horizon. Armies that had never known defeat. A name that made other kings lower their eyes. By every measure the ancient world understood, he was complete.',
      'Then one afternoon, he rode into the hermitage of the sage Vasishtha.',
      'What happened there is told differently in different texts, but the core of it is always the same: Kaushika witnessed something in that quiet forest clearing that his kingdom, his armies, and his name could not explain. A peace. A power of a different order entirely. Not the power to command men — but the power to need nothing from them.',
      'He tried to take it by force first. That was the king in him. He failed completely.',
      'So he did the most radical thing a powerful man can do. He put down his crown and walked into the forest as a student.',
    ],
  },
  {
    title: 'The Long Burning',
    paragraphs: [
      'What followed was not a journey. It was a demolition.',
      'Vishwamitra — the name he would eventually earn, meaning <em class="text-saffron-300">friend of all</em> — undertook tapas that the texts describe in terms that strain the imagination. Years of standing on one leg. Years of living on air alone. Years of sitting within four fires in summer, unmoving.',
      'But the outer austerities were not the real story. The real story was what happened inside.',
      'He failed repeatedly. He was seduced by the apsara Menaka, sent specifically to break his penance, and spent years with her before remembering himself. He cursed people in anger, burning away merit he had spent decades accumulating. He raised the Brahmastra against Vasishtha himself — the most destructive force known — and watched it dissolve against the sage\'s quiet power. He was humiliated publicly more than once.',
      'Each time, he began again.',
      'This is what the Vishwamitra story is actually about. Not the penance. The beginning again. The refusal to let failure be the final word. The understanding that the path does not require you to be perfect — it requires you to keep walking.',
      'For a king, this was the hardest lesson of all. Kings do not begin again. They either win or they are destroyed. Vishwamitra had to learn to be neither — to simply continue.',
    ],
  },
  {
    title: 'The Mantra That Was Waiting',
    paragraphs: [
      'The Gayatri Mantra was not composed by Vishwamitra. This is the first thing to understand.',
      'In the Vedic understanding, a Rishi is not a poet. He is a <em class="text-saffron-300">drashta</em> — a seer. The mantras exist in the fabric of the universe, the way mathematics exists independently of any mathematician. A Rishi, through the burning away of ego and obstruction, becomes capable of <em class="text-saffron-300">perceiving</em> what was always there.',
      'The Gayatri is said to have been waiting. It needed a mind clear enough, vast enough, and humble enough to receive it.',
      'Vishwamitra — a man who had been a king, a warrior, a failure, a lover, a penitent, a student — became that mind.',
      'What he received was not a prayer to a particular deity. The Gayatri addresses <em class="text-saffron-300">Savitri</em> — the divine solar principle, the light of consciousness that underlies all existence, the illumination without which no mind can think, no eye can see, no truth can be known. It is addressed to something that belongs to no religion because it precedes all religion.',
      '<em class="text-saffron-300">We meditate upon the brilliant light of that divine Sun. May it guide our intellect.</em>',
      'Twenty-four syllables. The entire aspiration of human consciousness, compressed.',
    ],
  },
  {
    title: 'The Gift',
    paragraphs: [
      'When Vishwamitra had received the Gayatri, he did something that the guardians of tradition did not expect.',
      'He gave it away.',
      'Not to a select few. Not to those born in particular families. Not to those who had performed specific rituals. He declared it the birthright of all human beings who sought light — which is to say, all human beings.',
      'This was not a small act. In a world organized around the careful preservation and transmission of sacred knowledge, where mantras were treated as technologies whose power depended on their protection, this was extraordinary. Vishwamitra essentially said: this is too important to keep. This is too necessary to withhold.',
      'A king who had spent decades dismantling his own ego finally had something worth giving — and his first instinct was to give it to everyone.',
    ],
  },
  {
    title: 'What It Means to Receive It Today',
    paragraphs: [
      'When a father draws his son close, covers both their heads with a cloth, and whispers this mantra into his right ear for the first time — he is doing something that has been done for thousands of years.',
      'He is becoming, for one moment, Vishwamitra. And his son is becoming every boy who ever received this transmission.',
      'The cloth matters. It creates a small private universe within the ceremony — just the two of them, the mantra, and the breath between father and son. Outside that cloth, there is a hall full of family, flowers, and noise. Inside that cloth, there is only this. A father giving his son the most important thing he has. Not money. Not land. Not status. A way of seeing.',
      'The Gayatri is a dawn mantra. Every morning, the twice-born rises before the sun, faces east, and recites it as the light appears. He is, in that moment, doing what Vishwamitra did — turning toward the light, asking for clarity, refusing to let his mind remain in darkness.',
      'It is not a complicated practice. It does not require a temple or a priest or a particular occasion. It requires only the dawn, and the willingness to stand in it and ask.',
      '<em class="text-saffron-300">May that light guide our intellect.</em>',
      'After everything — the kings and forests and failures and fires and thousand-year lineages of transmission — it comes down to that. A human being, standing in the morning, asking to see clearly.',
    ],
  },
];

export default function GayatriPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      {/* ── Part 1: The Mantra (ivory bg) ── */}
      <div className="bg-ivory pt-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron-500/60">The Gayatri Mantra</p>
            <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight text-saffron-950">
              The Mantra That Belongs to All
            </h1>
          </div>

          <div className="space-y-12">
            {eventData.gayatri.lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
                className="text-center space-y-3"
              >
                <p className="text-2xl md:text-4xl text-saffron-500 font-serif leading-relaxed">
                  {line.devanagari}
                </p>
                <p className="text-saffron-950/50 leading-relaxed text-base md:text-lg max-w-xl mx-auto whitespace-pre-line">
                  {line.meaning}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fade(0.6)}
            className="text-saffron-950/70 leading-relaxed text-lg text-center max-w-2xl mx-auto"
          >
            This is not a prayer asking for things. It is a prayer asking for <em className="text-saffron-500 font-medium">clarity</em> — the ability to think rightly, see clearly, and live wisely. It has been recited at dawn by millions of human beings for thousands of years. Today, it enters one more life.
          </motion.p>
        </div>
      </div>

      {/* ── Part 2: Vishwamitra + Full Story (dark saffron bg) ── */}
      <div style={{ background: '#2C1200' }}>
        <div className="max-w-3xl mx-auto px-4 md:px-8">

          {/* Vishwamitra intro */}
          <div className="py-20 space-y-10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-400/50">Brahmarshi Vishwamitra</p>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-saffron-100 leading-tight">
                The Sage Who Gave Light<br />to the World
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-saffron-100/70 leading-relaxed text-lg">
                He was born a king — Kaushika, ruler of a great kingdom, commander of armies, master of every worldly power. And yet when he encountered the sage Vasishtha and witnessed the supreme peace that no kingdom could buy, he walked away from his throne.
              </p>
              <p className="text-saffron-100/70 leading-relaxed text-lg">
                It was through this journey — not despite its struggles but <em className="text-saffron-300">because</em> of them — that the Gayatri Mantra was revealed through him. He did not compose it. He <em className="text-saffron-300">received</em> it.
              </p>
              <p className="text-xl md:text-2xl font-serif font-light text-saffron-300 italic text-center py-4">
                Every time this mantra is whispered into a child's ear, Vishwamitra's long walk from power to wisdom walks again.
              </p>
            </div>
          </div>

          {/* Opening quote */}
          <div className="py-16 text-center border-t border-kumkum-500/15">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-xl md:text-2xl text-saffron-100/50 italic leading-relaxed"
            >
              Before there were temples.<br />
              Before there were texts.<br />
              Before there was a tradition to belong to —<br />
              <span className="text-saffron-300">there was a man, alone in a forest, on fire.</span>
            </motion.p>
          </div>

          {/* 5 Chapters */}
          {vishwamitraChapters.map((ch, i) => (
            <Chapter key={i} number={i + 1} title={ch.title} paragraphs={ch.paragraphs} />
          ))}

          {/* Closing */}
          <div className="py-24 text-center space-y-10">
            <motion.div {...fade()} className="space-y-2">
              <p className="text-2xl md:text-4xl text-saffron-300 font-serif leading-relaxed">
                ॐ भूर् भुवः स्वः<br />
                तत् सवितुर् वरेण्यम्<br />
                भर्गो देवस्य धीमहि<br />
                धियो यो नः प्रचोदयात्
              </p>
            </motion.div>

            <motion.div {...fade(0.2)} className="space-y-3 text-saffron-100/40 italic">
              <p>The mantra Vishwamitra received in the forest.</p>
              <p>The mantra whispered to Deva on April 23, 2026.</p>
              <p className="text-saffron-300/60">The same mantra. The same light. The same asking.</p>
            </motion.div>

            <motion.p {...fade(0.3)} className="text-saffron-100/30 text-sm leading-relaxed max-w-md mx-auto">
              The complete story of Vishwamitra — his failures, his fury, his long walk to wisdom, and the revelation of the Gayatri — is told in the <strong className="text-saffron-100/50">Bala Kanda of the Valmiki Ramayana</strong> and the <strong className="text-saffron-100/50">Adi Parva of the Mahabharata.</strong> If this page has made you curious, those texts are where to go next.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
