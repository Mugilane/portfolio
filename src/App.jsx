import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Skills   from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact  from './pages/Contact';
import Blog     from './pages/Blog';

/* ── LOADING SCREEN ── */
function Loader() {
  return (
    <div id="loader">
      <div className="font-condensed font-black text-[2.5rem] tracking-widest text-gold">SDM</div>
      <div className="w-[180px] h-0.5 bg-white/8 rounded-sm overflow-hidden">
        <div className="loader-bar h-full bg-gold rounded-sm"/>
      </div>
    </div>
  );
}

/* ── CUSTOM CURSOR ── */
function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [fol, setFol] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let mouse = { x: -100, y: -100 };
    let follower = { x: -100, y: -100 };
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setPos({ x: mouse.x - 5, y: mouse.y - 5 });
    };

    const animFol = () => {
      follower.x += (mouse.x - follower.x) * 0.12;
      follower.y += (mouse.y - follower.y) * 0.12;
      setFol({ x: follower.x - 18, y: follower.y - 18 });
      raf = requestAnimationFrame(animFol);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animFol);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  // Only on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      <div className="custom-cursor" style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}/>
      <div className="cursor-follower" style={{ transform: `translate(${fol.x}px, ${fol.y}px)` }}/>
    </>
  );
}

/* ── BACK TO TOP ── */
function BackTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button
      id="back-top"
      className={visible ? 'visible' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up"/>
    </button>
  );
}

/* ── PAGE TRANSITION WRAPPER ── */
const pageVariants = {
  initial: { opacity: 0, y: 14 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
};

function AnimatedPage({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide loader after 1.8 s
    const t = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(t);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Loader */}
      <div id="loader" className={loading ? '' : 'hidden'}>
        <div className="font-condensed font-black text-[2.5rem] tracking-widest text-gold">SDM</div>
        <div className="w-[180px] h-0.5 bg-white/8 rounded-sm overflow-hidden mt-2">
          <div className="loader-bar h-full bg-gold rounded-sm"/>
        </div>
      </div>

      <Cursor/>
      <Header/>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"         element={<AnimatedPage><Home/></AnimatedPage>}/>
            <Route path="/about"    element={<AnimatedPage><About/></AnimatedPage>}/>
            <Route path="/skills"   element={<AnimatedPage><Skills/></AnimatedPage>}/>
            <Route path="/services" element={<AnimatedPage><Services/></AnimatedPage>}/>
            <Route path="/projects" element={<AnimatedPage><Projects/></AnimatedPage>}/>
            <Route path="/contact"  element={<AnimatedPage><Contact/></AnimatedPage>}/>
            <Route path="/blog"     element={<AnimatedPage><Blog/></AnimatedPage>}/>
          </Routes>
        </AnimatePresence>
      </main>

      <Footer/>
      <BackTop/>
    </>
  );
}
