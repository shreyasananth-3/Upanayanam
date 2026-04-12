import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

function Chapter({ number, title, paragraphs }) {
  return (
    <div className="space-y-8 py-16 border-b border-kumkum-500/10 last:border-0">
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

const chapters = [
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
      'He failed repeatedly. He was seduced by the apsara Menaka, sent specifically to break his penance, and spent years with her before remembering himself. He cursed people in anger, burning away merit he had spent decades accumulating. He nearly killed a man out of jealousy. He was humiliated publicly by Vasishtha more than once.',
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
      'When a father draws his son close, covers both their heads with a cloth, and whispers this mantra into his right ear for the first time — he is doing something that has been done, in this form or something close to it, for thousands of years.',
      'He is becoming, for one moment, Vishwamitra. And his son is becoming every boy who ever received this transmission.',
      'The cloth matters. It creates a small private universe within the ceremony — just the two of them, the mantra, and the breath between father and son. Outside that cloth, there is a hall full of family, flowers, and noise. Inside it, there is only this. A father giving his son the most important thing he has. Not money. Not land. Not status. A way of seeing.',
      'The Gayatri is a dawn mantra. Every morning, the twice-born rises before the sun, faces east, and recites it as the light appears. He is, in that moment, doing what Vishwamitra did — turning toward the light, asking for clarity, refusing to let his mind remain in darkness.',
      'It is not a complicated practice. It does not require a temple or a priest or a particular occasion. It requires only the dawn, and the willingness to stand in it and ask.',
      '<em class="text-saffron-300">May that light guide our intellect.</em>',
      'After everything — the kings and forests and failures and fires and thousand-year lineages of transmission — it comes down to that. A human being, standing in the morning, asking to see clearly.',
    ],
  },
];

export default function GayatriStoryPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: '#2C1200' }}>
      {/* Back link */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
        <Link
          to="/"
          className="text-saffron-400/50 hover:text-saffron-300 text-sm uppercase tracking-[0.2em] transition-colors duration-300"
        >
          ← Return to the ceremony
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Opening */}
        <div className="min-h-screen flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-saffron-100/50 italic leading-relaxed">
              Before there were temples.<br />
              Before there were texts.<br />
              Before there was a tradition to belong to —<br />
              <span className="text-saffron-300">there was a man, alone in a forest, on fire.</span>
            </p>
          </motion.div>
        </div>

        {/* Chapters */}
        {chapters.map((ch, i) => (
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
            The complete story of Vishwamitra — his failures, his fury, his long walk to wisdom, and the revelation of the Gayatri — is told in full in the <strong className="text-saffron-100/50">Maha Brahmana.</strong> If this page has made you curious, that book is where to go next.
          </motion.p>

          <motion.div {...fade(0.4)} className="pt-8">
            <Link
              to="/"
              className="text-saffron-400/50 hover:text-saffron-300 text-sm uppercase tracking-[0.2em] transition-colors duration-300"
            >
              ← Return to the ceremony
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
