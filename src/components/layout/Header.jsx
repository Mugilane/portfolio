import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { to: '/',         label: 'Portfolio' },
  { to: '/blog',     label: 'Blog'      },
  { to: '/about',    label: 'About'     },
  { to: '/projects', label: 'Projects'  },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(17,17,17,0.96)] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.08)] py-3.5'
            : 'py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 font-condensed font-black text-xl tracking-wide text-white">
            <div className="logo-hex">
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            SDM<span className="text-gold">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="hidden md:inline-flex btn-gold text-xs">
            Hire Me
          </Link>

          {/* Hamburger */}
          <button
            id="hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          >
            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}/>
          </button>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* ── MOBILE DRAWER ── */}
      <nav className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        {[...NAV_LINKS, { to: '/skills', label: 'Skills' }, { to: '/services', label: 'Services' }, { to: '/contact', label: 'Contact' }].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={closeMenu}
            className={({ isActive }) =>
              `block font-condensed font-black text-2xl tracking-wide uppercase py-4 border-b border-white/8 transition-colors duration-300 ${isActive ? 'text-gold' : 'text-text-light hover:text-gold'}`
            }
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="btn-gold mt-6 inline-flex"
        >
          Hire Me
        </Link>
      </nav>
    </>
  );
}
