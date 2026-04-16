import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';

export function Footer() {
  const { lang } = useLang();
  return (
    <section className="relative w-full py-20 px-4 md:px-8" style={{ background: '#2C1200' }}>
      <div className="relative z-10 max-w-3xl mx-auto w-full text-center space-y-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif text-saffron-300"
        >
          ॐ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-saffron-100/50 italic text-lg leading-relaxed"
        >
          {t.footerTagline[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-1 text-saffron-100/70 text-sm"
        >
          <p className="font-serif font-light text-lg text-saffron-300">
            {t.footerTitle[lang]}
          </p>
          <p className="text-saffron-100/60">{t.footerDate[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Footer;
