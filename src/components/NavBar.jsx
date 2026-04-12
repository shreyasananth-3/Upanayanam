import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) { setVisible(true); return; }

    const onScroll = () => {
      // Show navbar after scrolling past ~80% of the viewport (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-500"
      style={{
        background: visible ? 'rgba(44, 18, 0, 0.95)' : 'transparent',
        backdropFilter: visible ? 'blur(8px)' : 'none',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="flex items-center gap-4 md:gap-6 ml-auto">
        <Link
          to="/ceremony"
          className={`text-xs md:text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${pathname === '/ceremony' ? 'text-saffron-300' : 'text-saffron-400/50 hover:text-saffron-300'}`}
        >
          The Ceremony
        </Link>
        <span className="text-saffron-400/20">·</span>
        <Link
          to="/gayatri"
          className={`text-xs md:text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${pathname === '/gayatri' ? 'text-saffron-300' : 'text-saffron-400/50 hover:text-saffron-300'}`}
        >
          The Mantra
        </Link>
      </div>
    </nav>
  );
}
