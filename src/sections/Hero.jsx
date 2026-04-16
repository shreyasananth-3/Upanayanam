import React, { useEffect, useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';

const Scene = React.lazy(() => import('../3d/SacredThread'));

const FALLBACK =
	'radial-gradient(ellipse at 50% 48%, rgba(180,130,30,0.09) 0%, rgba(120,80,15,0.03) 35%, transparent 60%)';


const INTRO_DURATION = 10; // seconds before intro fades out

const r = (delay) => ({
	initial: { opacity: 0, y: 8 },
	transition: { duration: 2, delay, ease: [0.22, 0.1, 0.25, 1] },
});

export function Hero() {
	const rmQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
	const [rm, setRm] = useState(() => rmQuery?.matches ?? false);
	const [gl] = useState(() => {
		try { const c = document.createElement('canvas'); return !!(c.getContext('webgl') || c.getContext('experimental-webgl')); }
		catch { return false; }
	});
	const [introDone, setIntroDone] = useState(() => sessionStorage.getItem('introDone') === '1');
	const [countdown, setCountdown] = useState(() => sessionStorage.getItem('introDone') === '1' ? 0 : INTRO_DURATION);

	// Lock scroll during intro
	useEffect(() => {
		if (!introDone) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [introDone]);

	useEffect(() => {
		if (!rmQuery) return;
		const h = (e) => setRm(e.matches);
		rmQuery.addEventListener('change', h);

		// Countdown timer
		const tick = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(tick);
					setIntroDone(true);
					sessionStorage.setItem('introDone', '1');
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => {
			rmQuery?.removeEventListener('change', h);
			clearInterval(tick);
		};
	}, [rmQuery]);

	const { lang } = useLang();
	const [textReady, setTextReady] = useState(false);

	// Text appears 4s after intro ends (thread 3s + knot 1s)
	useEffect(() => {
		if (introDone) {
			const timer = setTimeout(() => setTextReady(true), 1000);
			return () => clearTimeout(timer);
		}
	}, [introDone]);

	const a = () => (textReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 });
	const aTitle = () =>
		introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 };

	return (
		<section
			className='snap-section relative w-full min-h-[100dvh] flex items-center justify-center text-white overflow-hidden mx-auto'
			style={{ maxWidth: '1920px' }}
			role='banner'
			aria-label="Invitation to Deva's Brahmopadesham ceremony"
		>
			<p className='sr-only'>
				You are invited to the sacred Brahmopadesham ceremony of Deva
				(Vyshampayana). Thursday, April 23, 2026, Bangalore.
			</p>

			{/* Background */}
			<div className='absolute inset-0 bg-saffron-900' />

			{/* Skip intro button (dev hotkey) */}
			{!introDone && (
				<button
					onClick={() => { setIntroDone(true); sessionStorage.setItem('introDone', '1'); }}
					className='fixed top-4 right-4 z-50 text-[10px] uppercase tracking-widest px-3 py-1 rounded border transition-opacity hover:opacity-100'
					style={{
						color: 'rgba(212,176,102,0.5)',
						borderColor: 'rgba(212,176,102,0.2)',
						opacity: 0.4,
					}}
				>
					Skip →
				</button>
			)}

			{/* 3D scene — starts after intro, fades in */}
			<motion.div
				className='absolute inset-0'
				aria-hidden='true'
				initial={{ opacity: 0 }}
				animate={{ opacity: introDone ? 1 : 0 }}
				transition={{ duration: 2, delay: 0.2 }}
			>
				{gl ?
					<Suspense
						fallback={
							<div className='w-full h-full' style={{ background: FALLBACK }} />
						}
					>
						{introDone && <Scene reducedMotion={rm} />}
					</Suspense>
				:	<div className='w-full h-full' style={{ background: FALLBACK }} />}
			</motion.div>

			{/* ═══════════════════════════════════════════
          PHASE 1: Gratitude intro (first 5 seconds)
          ═══════════════════════════════════════════ */}
			<AnimatePresence>
				{!introDone && (
					<motion.div
						className='absolute inset-0 z-20 flex flex-col'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, y: -40 }}
						transition={{ duration: 1.2, ease: 'easeInOut' }}
					>
						{/* ── Top progress bar ── */}
						<div className='w-full px-0'>
							{/* Bar track */}
							<div
								className='relative w-full h-[2px]'
								style={{ background: 'rgba(212,176,102,0.10)' }}
							>
								<motion.div
									className='absolute left-0 top-0 h-full'
									style={{
										background:
											'linear-gradient(90deg, rgba(212,176,102,0.15), rgba(212,176,102,0.50))',
									}}
									initial={{ width: '0%' }}
									animate={{ width: '100%' }}
									transition={{ duration: INTRO_DURATION, ease: 'linear' }}
								/>
							</div>
							{/* Countdown label */}
							<div className='flex justify-end px-4 sm:px-6 mt-2'>
								<span
									className='text-xs font-semibold tracking-widest tabular-nums'
									style={{
										color: '#d4b066',
										textShadow: '0 0 10px rgba(212,176,102,0.3)',
									}}
								>
									{countdown}s
								</span>
							</div>
						</div>

						{/* ── Top: Om Gurave Namah ── */}
						<div className='w-full text-center pt-6 sm:pt-10 px-6'>
							<motion.p
								className='font-serif font-semibold'
								style={{
									color: '#d4b066',
									textShadow: '0 0 25px rgba(212,176,102,0.35), 0 0 50px rgba(212,176,102,0.15)',
									fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
								}}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
							>
								ॐ गुरवे नमः
							</motion.p>
						</div>

						{/* ── Centered: Gayatri Mantra + gratitude (starts after 2s pause) ── */}
						<div className='flex-1 flex items-center justify-center px-6'>
							<div className='max-w-xl text-center space-y-6'>
								{/* Full Gayatri Mantra — 24 syllables (3 padas × 8) */}
								<motion.div
									className='space-y-1'
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.5, delay: 1.5 }}
								>
									<p
										className='font-serif leading-relaxed'
										style={{ color: 'rgba(212,176,102,0.75)', fontSize: 'clamp(0.875rem, 2.5vw, 1.5rem)' }}
									>
										ॐ भूर्भुवः स्वः
									</p>
									<p
										className='font-serif leading-relaxed'
										style={{ color: 'rgba(212,176,102,0.65)', fontSize: 'clamp(0.8rem, 2.2vw, 1.25rem)' }}
									>
										तत्सवितुर्वरेण्यम्
									</p>
									<p
										className='font-serif leading-relaxed'
										style={{ color: 'rgba(212,176,102,0.65)', fontSize: 'clamp(0.8rem, 2.2vw, 1.25rem)' }}
									>
										भर्गो देवस्य धीमहि
									</p>
									<p
										className='font-serif leading-relaxed'
										style={{ color: 'rgba(212,176,102,0.65)', fontSize: 'clamp(0.8rem, 2.2vw, 1.25rem)' }}
									>
										धियो यो नः प्रचोदयात्
									</p>
								</motion.div>

								{/* Gratitude message — Brahmarshi Vishwamitra highlighted */}
								<motion.p
									className='font-serif font-light leading-relaxed'
									style={{ color: 'rgba(212,190,140,0.75)', fontSize: 'clamp(0.75rem, 2vw, 1.125rem)' }}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.8, delay: 2.5 }}
								>
									Salutations to{' '}
									<span
										className='font-normal'
										style={{
											color: '#d4b066',
											textShadow: '0 0 20px rgba(212,176,102,0.30)',
										}}
									>
										Brahmarshi Vishwamitra
									</span>
									, who gifted humanity the Gayatri Mantra — the divine light
									that guides us through Kali Yuga.
								</motion.p>

								<motion.p
									className='font-serif font-light leading-relaxed'
									style={{ color: 'rgba(212,190,140,0.70)', fontSize: 'clamp(0.75rem, 2vw, 1.125rem)' }}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.8, delay: 3.5 }}
								>
									With deep gratitude and namaskaram, we begin this
									Brahmopadesham (sacred thread ceremony).
								</motion.p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ═══════════════════════════════════════════
          PHASE 2: Main content (after intro fades)
          ═══════════════════════════════════════════ */}

			{/* Aksharas are rendered inside the 3D scene — see SacredThread.jsx */}

			{/* Main text — fluid sizing with clamp() */}
			<div className='relative z-10 text-center w-full max-w-2xl mx-auto flex flex-col items-center min-h-[100dvh]'
				style={{ padding: 'clamp(16px, 3vh, 56px) clamp(12px, 4vw, 24px)' }}>
				{/* ── TOP: Title ── */}
				<div className='flex flex-col items-center' style={{ gap: 'clamp(6px, 1.2vh, 14px)' }}>
					<motion.h1
						className='font-serif font-normal leading-none'
						style={{ color: '#d4b066', fontSize: 'clamp(1.75rem, 6vw, 4.5rem)' }}
						{...r(0.4)}
						animate={aTitle()}
					>
						ब्रह्मोपदेशम्
					</motion.h1>

					<motion.p
						className='font-serif font-light tracking-wide'
						style={{ color: 'rgba(212,176,102,0.65)', fontSize: 'clamp(0.75rem, 2vw, 1.125rem)' }}
						{...r(0.6)}
						animate={aTitle()}
					>
						(Brahmopadesham)
					</motion.p>

					<motion.p
						className='tracking-[0.35em] uppercase font-light'
						style={{ color: 'rgba(180,160,120,0.55)', fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)' }}
						{...r(1.2)}
						animate={aTitle()}
					>
						{t.sacredThreadCeremony[lang]}
					</motion.p>
				</div>

				{/* ── CENTER: Deva (sits with the 3D thread) ── */}
				<div className='flex-1 flex flex-col items-center justify-center pb-16 sm:pb-0' style={{ gap: 'clamp(4px, 1vh, 10px)' }}>
					<motion.div
						className='flex flex-col items-center gap-1'
						{...r(1.8)}
						animate={a()}
					>
						<span
							className='uppercase tracking-[0.4em] font-light'
							style={{ color: 'rgba(180,160,120,0.45)', fontSize: 'clamp(0.55rem, 1.2vw, 0.7rem)' }}
						>
							{t.of[lang]}
						</span>
						<h2
							className='font-serif font-normal leading-none'
							style={{
								color: '#d4b066',
								fontSize: 'clamp(2rem, 7vw, 5rem)',
								textShadow:
									'0 0 30px rgba(212,176,102,0.35), 0 0 60px rgba(212,176,102,0.18), 0 0 110px rgba(180,140,60,0.08)',
							}}
						>
							Chi. Deva
						</h2>
					</motion.div>

					<motion.p
						className='font-normal tracking-wide'
						style={{ color: 'rgba(212,176,102,0.55)', fontSize: 'clamp(0.8rem, 1.8vw, 1.05rem)' }}
						{...r(2.2)}
						animate={a()}
					>
						(Vyshampayana)
					</motion.p>
				</div>

				{/* ── BOTTOM: Date + Scroll ── */}
				<div className='flex flex-col items-center' style={{ gap: 'clamp(12px, 2vh, 24px)' }}>
					<motion.div
						className='flex flex-col items-center gap-1'
						{...r(1.4)}
						animate={aTitle()}
					>
						<p
							className='font-normal tracking-wide'
							style={{ color: '#d4b066', fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}
						>
							{t.thursday[lang]}, {t.date[lang]} &nbsp;·&nbsp; {t.bangalore[lang]}
						</p>
						<a
							href='https://maps.google.com/?q=Sri+Radhakrishna+Convention+Hall+Gandhi+Bazaar+Basavanagudi+Bangalore'
							target='_blank'
							rel='noopener noreferrer'
							className='font-light underline underline-offset-4 decoration-gold-500/30 hover:decoration-gold-500/60 transition-colors leading-relaxed'
							style={{ color: 'rgba(212,190,140,0.55)', fontSize: 'clamp(0.8rem, 1.6vw, 0.875rem)' }}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-3 h-3 mr-1 -mt-0.5 opacity-70"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
							Sri Radhakrishna Convention Hall, Gandhi Bazaar, Basavanagudi
						</a>
					</motion.div>

					<motion.button
						onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
						initial={{ opacity: 0 }}
						animate={introDone ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 1.2, delay: 4 }}
						className='cursor-pointer bg-transparent border-0 p-2'
						aria-label='Scroll to next section'
					>
						<motion.div
							className='flex flex-col items-center gap-1'
							animate={rm ? {} : { y: [0, 5, 0] }}
							transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
						>
							<span
								className='uppercase tracking-[0.4em] font-light'
								style={{ color: 'rgba(212,176,102,0.75)', fontSize: 'clamp(0.55rem, 1.2vw, 0.7rem)' }}
							>
								{t.scroll[lang]}
							</span>
							<span style={{ color: 'rgba(212,176,102,0.70)', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}>
								↓
							</span>
						</motion.div>
					</motion.button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
