import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NamamIcon() {
  return (
    <svg width="16" height="22" viewBox="27.5 419.0 3458.8 3776.7" xmlns="http://www.w3.org/2000/svg">
      <path d="m1704.8 4157.7c-42.859-9.78-82.955-29.286-116.21-56.538-36.47-29.884-95.299-128.62-147.91-248.24-25.038-56.93-48.384-109.42-51.881-116.63-10.873-22.447-69.872-83.045-95.446-98.032-31.75-18.607-93.379-39.093-162.95-54.166-166.79-36.137-221.21-70.771-265.54-168.99-8.6764-19.226-81.942-232.6-162.81-474.17-80.871-241.57-192.1-572.65-247.19-735.75-138.06-408.8-371.36-1107.8-391.11-1171.8l-16.293-52.822 23.896-24.684c27.336-28.238 204.45-162.21 296.14-224.01 142.87-96.29 503.9-292.9 515.87-280.93 4.4415 4.4414 14.882 69.696 45.244 282.78 25.181 176.72 57.503 408.18 90.106 645.25 20.028 145.63 39.887 281.59 44.132 302.13 4.2451 20.543 11.733 66.305 16.64 101.69 4.907 35.389 14.134 102.11 20.504 148.27 6.3702 46.159 18.843 133.02 27.716 193.03 8.8738 60.007 25.132 175.82 36.129 257.37 31.81 235.89 59.041 427.36 61.987 435.86 1.4943 4.309 5.2013 32.005 8.2378 61.545 4.6897 45.624 14.684 92.446 50.541 236.78 8.2473 33.199 41.411 96.936 71.685 137.77 91.422 123.32 233.5 195.86 384.9 196.5 102.39 0.437 191.65-22.753 271.77-70.61 50.461-30.138 118.79-94.321 151.23-142.05 42.818-63.003 77.293-164.21 90.452-265.52 1.9983-15.386 10.878-74.554 19.733-131.48 8.8545-56.93 18.975-123.65 22.489-148.27 3.5146-24.618 14.889-98.893 25.277-165.05 26.542-169.04 54.722-352.47 81.23-528.73 12.496-83.087 30.255-197.65 39.465-254.57 9.21-56.93 18.987-118.62 21.726-137.08 46.173-311.25 69.899-468.73 81.344-539.92 7.6681-47.698 24.066-154.7 36.44-237.79 12.374-83.086 30.003-197.86 39.176-255.06 9.1728-57.198 16.678-105.67 16.678-107.7 0-2.0397 8.6334-3.7084 19.186-3.7084 21.354 0 239.48 107.28 308.12 151.55 21.541 13.891 54.25 33.844 72.687 44.341 18.437 10.497 64.656 41.843 102.71 69.657 38.053 27.814 88.43 64.061 111.95 80.55 45.407 31.834 128 96.64 181.24 142.21 21.098 18.06 32.172 31.782 32.172 39.866 0 6.7798-17.812 65.069-39.583 129.53-21.77 64.462-45.409 134.83-52.53 156.37-7.121 21.541-29.978 88.262-50.794 148.27-20.817 60.007-61.107 178.34-89.535 262.97-28.428 84.625-91.308 269.68-139.73 411.24-48.426 141.56-150.73 444.95-227.34 674.2-165.14 494.19-214.48 637.14-232.09 672.46-16.533 33.153-45.981 61.887-81.632 79.653-26.417 13.163-45.877 18.244-192.33 50.216-34.149 7.455-89.54 24.184-123.09 37.175-97.968 37.933-119.02 65.187-201.08 260.27-62.944 149.64-79.711 179.21-127.24 224.35-62.936 59.784-125.95 78.428-204.49 60.508z" fill="#F5EAD0"/>
      <path d="m1681.4 3143.6c-99.659-23.033-207.87-118.1-236.82-208.07-23.152-71.944-23.359-181.95-0.6202-330.11 4.2504-27.696 10.398-78.051 13.66-111.9 6.1516-63.82 32.325-271.3 36.702-290.94 1.3714-6.1546 6.2141-43.921 10.762-83.926 16.765-147.48 30.644-260.97 36.086-295.08 3.074-19.266 13.316-99.232 22.76-177.7 30.002-249.29 44.893-369.82 55.993-453.2 12.318-92.536 30.401-238.77 42.204-341.3 4.4282-38.466 10.482-86.304 13.452-106.31 2.9708-20.002 10.517-76.652 16.77-125.89s20.015-153.72 30.582-232.19 21.97-167.85 25.339-198.62c10.323-94.292 18.597-154.19 20.972-151.81 2.3742 2.3741 30.527 220.01 40.264 311.27 3.1196 29.234 10.865 97.214 17.212 151.07 6.3471 53.852 16.47 143.23 22.495 198.62 6.0254 55.391 17.362 156.1 25.192 223.8 7.8304 67.7 17.965 158.34 22.522 201.42 4.5565 43.082 10.747 97.214 13.756 120.29 3.0092 23.08 11.783 99.872 19.498 170.65 7.7148 70.778 16.61 151.35 19.767 179.04 3.157 27.695 9.3783 83.086 13.825 123.09 4.4466 40.004 16.898 147.01 27.669 237.79 10.771 90.78 24.816 212.89 31.21 271.36 6.3941 58.468 21.813 194.43 34.263 302.13 27.469 237.62 30.544 284.48 22.194 338.12-9.2221 59.247-41.934 126.14-82.656 169.03-46.554 49.027-102.22 86.507-149.54 100.68-48.141 14.418-123.57 18.374-165.51 8.68z" fill="#E03030"/>
    </svg>
  );
}

export function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';
  const [visible, setVisible] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) { setVisible(true); return; }

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNaamam = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-2 flex items-center justify-between transition-all duration-500"
        style={{
          background: visible ? 'rgba(44, 18, 0, 0.95)' : 'transparent',
          backdropFilter: visible ? 'blur(8px)' : 'none',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <a
          href="/"
          onClick={handleNaamam}
          className="hover:opacity-80 transition-opacity duration-300"
          aria-label="Home"
        >
          <NamamIcon />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/ceremony"
            className={`text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${pathname === '/ceremony' ? 'text-saffron-300' : 'text-saffron-400/50 hover:text-saffron-300'}`}
          >
            The Ceremony
          </Link>
          <span className="text-saffron-400/20">·</span>
          <Link
            to="/gayatri"
            className={`text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${pathname === '/gayatri' ? 'text-saffron-300' : 'text-saffron-400/50 hover:text-saffron-300'}`}
          >
            The Gayatri Mantra
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7"
          aria-label="Menu"
        >
          <span className={`block h-[1.5px] bg-saffron-300/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block h-[1.5px] bg-saffron-300/70 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] bg-saffron-300/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-400 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(44, 18, 0, 0.98)' }}
      >
        <div className="flex flex-col items-center gap-10">
          <Link
            to="/ceremony"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-serif font-light uppercase tracking-[0.2em] transition-colors duration-300 ${pathname === '/ceremony' ? 'text-saffron-300' : 'text-saffron-100/60 hover:text-saffron-300'}`}
          >
            The Ceremony
          </Link>

          <div className="w-8 h-px bg-kumkum-500/30" />

          <Link
            to="/gayatri"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-serif font-light uppercase tracking-[0.2em] transition-colors duration-300 ${pathname === '/gayatri' ? 'text-saffron-300' : 'text-saffron-100/60 hover:text-saffron-300'}`}
          >
            The Gayatri Mantra
          </Link>
        </div>
      </div>
    </>
  );
}
