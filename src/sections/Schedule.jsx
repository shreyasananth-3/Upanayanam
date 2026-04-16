import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';

// Map each schedule index to its translation keys
const scheduleTranslations = [
  {
    event: 'eventMatruBhojana',
    desc: ['descMatruBhojana0', 'descMatruBhojana1'],
  },
  { event: 'eventBreakfast', desc: ['descBreakfast'] },
  { event: 'eventMuhurta',   desc: ['descMuhurta'] },
  { event: 'eventBrahmopadesham', desc: ['descBrahmopadesham'] },
  { event: 'eventSurya',     desc: ['descSurya'] },
  { event: 'eventAshirvadam', desc: ['descAshirvadam'] },
];

export function Schedule() {
  const { lang } = useLang();
  return (
    <section className="snap-section relative w-full min-h-screen flex items-center justify-center bg-sandalwood py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-saffron-950">
            {t.theSacredDay[lang]}
          </h2>
          <p className="text-xl text-saffron-950/50 font-light">
            {t.thursday[lang]}, {eventData.date.date}
          </p>
        </motion.div>

        <div className="space-y-0">
          {eventData.schedule.map((item, idx) => {
            const tr = scheduleTranslations[idx];
            const eventName = tr ? t[tr.event][lang] : item.event;
            const descriptions = tr
              ? tr.desc.map(key => t[key][lang])
              : (Array.isArray(item.description) ? item.description : [item.description]);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex gap-6 md:gap-8 py-6 border-b border-saffron-800/10 last:border-0 ${item.highlight ? 'bg-saffron-400/10 -mx-4 px-4 rounded-lg' : ''}`}
              >
                <div className="min-w-[5rem] md:min-w-[6rem] pt-0.5">
                  <p className={`text-lg md:text-xl font-serif font-light ${item.highlight ? 'text-saffron-500' : 'text-saffron-600'}`}>
                    {item.time}
                  </p>
                </div>

                <div className="flex flex-col items-center pt-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.highlight ? 'bg-saffron-500' : 'bg-saffron-500/40'}`} />
                  {idx < eventData.schedule.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-saffron-500/30 to-transparent mt-2" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <h3 className={`text-lg md:text-xl font-serif font-light mb-1 ${item.highlight ? 'text-saffron-950 font-normal' : 'text-saffron-950/80'}`}>
                    {eventName}
                  </h3>
                  {descriptions.map((para, i) => (
                    <p key={i} className={`text-saffron-950/60 leading-relaxed text-sm md:text-base ${i > 0 ? 'mt-2' : ''}`}>
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
