import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeLeft, fadeRight, fadeUp, VP } from '../../utils/animations';
import heroImg from '../../assets/hero.jpg';

const socials = [
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/mugilane-sdm', label: 'LinkedIn' },
  { icon: 'fa-brands fa-github',      href: 'https://github.com/mugilaneyoho', label: 'GitHub'   },
  { icon: 'fa-brands fa-google',        href: 'mailto:mugilane.cse@gmail.com',     label: 'mail'},
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-bg-deep flex items-center">
      {/* ── Yellow diagonal background ── */}
      <div className="absolute left-0 top-0 w-[38%] h-full bg-gold hero-yellow-clip z-0" />

      {/* ── Decorative rings ── */}
      <svg
        className="absolute bottom-10 left-[-60px] w-[300px] h-[300px] opacity-10 z-0"
        viewBox="0 0 300 300" fill="none"
      >
        <circle cx="150" cy="150" r="140" stroke="#f5c518" strokeWidth="1" strokeDasharray="8 8"/>
        <circle cx="150" cy="150" r="100" stroke="#f5c518" strokeWidth="1"/>
        <circle cx="150" cy="150" r="60"  stroke="#f5c518" strokeWidth="1" strokeDasharray="4 4"/>
      </svg>

      {/* ── Main grid ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 pt-28 pb-16
                      grid grid-cols-1 md:grid-cols-[420px_1fr_48px] gap-0 items-center min-h-screen">

        {/* Photo */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="relative flex items-end h-[560px] md:h-[580px] z-10"
        >
          <img src={heroImg} alt="Mugilane D — Software Engineer" className="hero-photo-img"/>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="px-0 md:px-12 text-center md:text-left"
        >
          <h1 className="leading-none">
            <span className="font-condensed font-black uppercase text-gold block"
                  style={{ fontSize: 'clamp(2.4rem,5vw,3.6rem)', lineHeight: 1 }}>
              SDM
            </span>
            <span className="font-condensed font-black uppercase text-white block"
                  style={{ fontSize: 'clamp(4rem,8vw,7rem)', lineHeight: 0.9 }}>
              MUGILANE
            </span>
          </h1>

          {/* Divider */}
          <div className="w-14 h-0.5 bg-gold my-5 mx-auto md:mx-0"/>

          <p className="font-barlow font-semibold text-sm tracking-[0.22em] uppercase text-text-light mb-3">
            Software Engineer &nbsp;&amp;&nbsp; Backend Lead
          </p>
          <p className="font-barlow text-[0.82rem] text-text-muted mb-9 flex items-center gap-2 justify-center md:justify-start">
            <i className="fa-solid fa-location-dot text-gold text-xs"/>
            Chennai, Tamil Nadu, India
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <a href="https://github.com/Mugilane/portfolio/raw/48902ae1b649e7df33ef996990da23df92f83d8a/public/mugilane-cv.pdf" className="btn-dark">
              <i className="fa-solid fa-envelope text-xs"/>
              DOWNLOAD CV
            </a>
            <Link to="/contact" className="btn-outline">
              Hire Me
            </Link>
          </div>
        </motion.div>

        {/* Social column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="hidden md:flex flex-col items-center gap-5 pb-5"
        >
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center border border-[rgba(255,255,255,0.08)] rounded-full
                         text-text-light text-sm hover:bg-gold hover:text-black hover:border-gold
                         transition-all duration-300"
            >
              <i className={icon}/>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-y z-10">
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"/>
        <span className="text-[0.62rem] tracking-[0.15em] uppercase text-text-muted font-barlow">Scroll</span>
      </div>
    </section>
  );
}
