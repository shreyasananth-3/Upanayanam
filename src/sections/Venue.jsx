import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';

export function Venue() {
  return (
    <section className="snap-section relative w-full min-h-screen flex items-center justify-center bg-ivory py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto w-full text-center space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-saffron-950">
            Join Us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-serif font-light text-saffron-950">
              {eventData.venue.name}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(eventData.venue.name + ' ' + eventData.venue.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-950/60 hover:text-saffron-500 transition-colors text-lg leading-relaxed inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-4 h-4 mr-1 -mt-0.5 opacity-60"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              {eventData.venue.address}
            </a>
          </div>

          <p className="text-xl text-saffron-500 font-serif font-light">
            {eventData.date.day}, {eventData.date.date}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-saffron-950/50 italic text-base leading-relaxed max-w-lg mx-auto"
        >
          Please arrive by 7:30 AM to join us for breakfast. The Muhurta is at 9:30 and we would love for you to witness it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-kumkum-500/15"
        >
          <p className="text-sm uppercase tracking-widest text-saffron-950/40 mb-2">For any questions</p>
          <p className="text-xl font-serif font-light text-saffron-950">
            {eventData.venue.contact.name}
          </p>
          <a
            href={`tel:${eventData.venue.contact.phone}`}
            className="text-saffron-500 hover:text-saffron-600 transition-colors text-lg"
          >
            {eventData.venue.contact.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Venue;
