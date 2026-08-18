import { motion } from 'framer-motion';
import { stagger, staggerItem, fadeUp, VP } from '../../utils/animations';
import SectionHeader from '../ui/SectionHeader';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    num: '01', title: 'Web Application',
    desc: 'Building high-performance, scalable web applications with React, Next.js, and modern backend architectures for seamless user experiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM2.25 12h19.5m-3.375-6.75C17.06 7.6 15.6 9.6 15.6 12s1.46 4.4 2.775 6.75m-12.75-13.5C6.94 7.6 8.4 9.6 8.4 12s-1.46 4.4-2.775 6.75"/>
      </svg>
    ),
  },
  {
    num: '02', title: 'Branding Websites',
    desc: 'Designing and developing memorable, conversion-focused branding websites and landing pages that elevate visual identity and drive growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.01-3.08c-.352-.271-.71-.531-1.074-.781m5.01 3.08a16.038 16.038 0 01-1.074.781m0-3.861L18.423 3.5a1.875 1.875 0 012.652 2.652L8.21 18.966m0 0l-3.375.844.844-3.375"/>
      </svg>
    ),
  },
  {
    num: '03', title: 'Mobile Application',
    desc: 'Creating intuitive cross-platform mobile apps for iOS and Android with smooth animations, offline capabilities, and native performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
      </svg>
    ),
  },
  {
    num: '04', title: 'SaaS Product Development',
    desc: 'End-to-end SaaS engineering — multi-tenant database design, subscription & billing pipelines, admin dashboards, and scalable cloud APIs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925-3.546 5.974 5.974 0 00-4.133-1.486 5.974 5.974 0 00-5.833 4.567A4.5 4.5 0 002.25 15z"/>
      </svg>
    ),
  },
  {
    num: '05', title: 'Training & Mentoring',
    desc: 'Empowering developers and teams through personalized technical mentoring, hands-on code reviews, modern architecture training, and career guidance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-5.25 6.557c0 1.144.205 2.24.582 3.256"/>
      </svg>
    ),
  },
  {
    num: '06', title: 'Custom Enterprise Software',
    desc: 'Architecting bespoke enterprise software solutions, microservices, gRPC communication pipelines, and complex workflow automation systems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-bg-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionHeader
          label="What I Do"
          title="WHAT I CAN BUILD FOR YOUR BUSINESS"
          goldWord="BUILD FOR YOUR BUSINESS"
          className="mb-14"
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                     border border-[rgba(255,255,255,0.08)] rounded-lg overflow-hidden"
          style={{ gap: '1px', background: 'rgba(255,255,255,0.08)' }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              className="service-card group bg-bg-card"
            >
              <span className="absolute top-5 right-6 font-condensed font-black leading-none
                               text-[3.5rem] text-gold/5 group-hover:text-gold/10 transition-colors duration-300">
                {s.num}
              </span>
              <div className="w-9 h-9 mb-5 text-text-muted group-hover:text-gold transition-all duration-300 group-hover:scale-110 transform">
                {s.icon}
              </div>
              <h3 className="font-barlow font-bold text-[0.88rem] tracking-widest uppercase text-white mb-2.5">
                {s.title}
              </h3>
              <p className="text-text-muted text-[0.82rem] leading-7">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="text-center mt-10"
        >
          <Link to="/services" className="btn-outline">
            View All Services <i className="fa-solid fa-arrow-right ml-1"/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
