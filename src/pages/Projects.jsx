import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';
import { Link } from 'react-router-dom';
import proj1 from '../assets/project1.jpg';
import proj2 from '../assets/project2.jpg';
import proj3 from '../assets/project3.jpg';

const FILTERS = [
  { id: 'all',      label: 'All Projects' },
  { id: 'web-app',  label: 'Web Application' },
  { id: 'branding', label: 'Branding Websites' },
  { id: 'mobile',   label: 'Mobile Application' },
  { id: 'saas',     label: 'SaaS Product' },
  { id: 'training', label: 'Training & Mentoring' },
];

const PROJECTS = [
  {
    img: proj1, cat: ['web-app', 'saas'],
    tag: 'Web Application · SaaS Product',
    title: 'ENTERPRISE DASHBOARD & REAL-TIME PORTAL',
    desc: 'Scalable high-performance web portal built with React, Redux Toolkit, and Node.js microservices for real-time data streaming and analytics.',
    tall: true,
  },
  {
    img: proj2, cat: ['branding'],
    tag: 'Branding Websites · Visual Identity',
    title: 'AETHEL — BRANDING WEBSITE & DESIGN SYSTEM',
    desc: 'Custom visual identity, logo design system, and responsive branding website crafted to maximize audience conversion.',
    tall: false,
  },
  {
    img: proj3, cat: ['mobile'],
    tag: 'Mobile Application · iOS & Android',
    title: 'FINTRACK — CROSS-PLATFORM MOBILE FINANCE APP',
    desc: 'Intuitive iOS and Android mobile app featuring push notifications, biometric security, and offline transactions.',
    tall: false,
  },
  {
    img: proj1, cat: ['saas', 'web-app'],
    tag: 'SaaS Product · Cloud Architecture',
    title: 'NEXUS TECH — MULTI-TENANT SAAS PLATFORM',
    desc: 'Full-stack SaaS application with multi-tenant database isolation, automated billing pipelines, and admin dashboards.',
    tall: false,
  },
  {
    img: proj2, cat: ['training'],
    tag: 'Training & Mentoring · Architecture',
    title: 'FULL-STACK BOOTCAMP & DEV MENTORSHIP',
    desc: 'Custom developer mentorship and engineering team workshops focused on clean code, microservices, and system architecture.',
    tall: true,
  },
  {
    img: proj3, cat: ['web-app'],
    tag: 'Web Application · Full-Stack',
    title: 'HEALTH MONITORING & PATIENT PORTAL',
    desc: 'HIPAA-compliant web platform serving 50k+ daily users with gRPC microservice backend and low latency responses.',
    tall: false,
  },
  {
    img: proj1, cat: ['mobile', 'branding'],
    tag: 'Mobile Application · Branding',
    title: 'WELLNESS MOBILE APP & BRAND KIT',
    desc: 'Comprehensive mobile app UI design and cross-platform Flutter/React Native build paired with brand style guidelines.',
    tall: false,
  },
  {
    img: proj2, cat: ['branding', 'web-app'],
    tag: 'Branding Websites · Web Dev',
    title: 'GEORGE\'S CAFÉ — BRAND OVERHAUL & WEB PORTAL',
    desc: 'Complete digital rebrand featuring interactive menu showcase, location finder, and online order processing.',
    tall: false,
  },
  {
    img: proj3, cat: ['training', 'saas'],
    tag: 'Training & Mentoring · System Design',
    title: 'ENGINEERING TEAM SAAS ARCHITECTURE COACHING',
    desc: 'Hands-on technical workshops coaching engineering teams on scaling SaaS backends, CI/CD pipelines, and API design.',
    tall: false,
  },
];

function ProjectCard({ img, tag, title, desc, tall }) {
  return (
    <div className={`group project-card ${tall ? 'lg:row-span-2' : ''}`}>
      <div className={`relative overflow-hidden ${tall ? 'h-[280px] lg:h-[520px]' : 'h-[240px]'}`}>
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
        <div className="project-overlay">
          <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <span className="font-barlow font-bold text-[0.65rem] tracking-[0.16em] uppercase text-gold block mb-1">{tag}</span>
            <span className="font-condensed font-black text-[1.1rem] text-white uppercase block">{title.substring(0,35)}...</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="font-barlow font-bold text-[0.65rem] tracking-[0.16em] uppercase text-gold mb-2 block">{tag}</span>
        <h3 className="font-barlow font-bold text-[0.9rem] text-white leading-snug mb-2">{title}</h3>
        <p className="text-[0.8rem] text-text-muted leading-relaxed mb-4">{desc}</p>
        <Link to="/contact" className="font-barlow font-bold text-[0.72rem] tracking-widest uppercase text-gold inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-300">
          Start Similar Project <i className="fa-solid fa-arrow-right text-xs"/>
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('all');

  const visible = PROJECTS.filter(p =>
    active === 'all' || p.cat.includes(active)
  );

  return (
    <>
      <PageHero title='MY <span class="text-gold">PROJECTS</span>' crumb="Projects"/>

      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Filter tabs */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="flex flex-wrap gap-2.5 mb-12">
            {FILTERS.map(f => (
              <button key={f.id} onClick={() => setActive(f.id)}
                className={`filter-tab ${active === f.id ? 'active' : ''}`}>
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Masonry grid */}
          <motion.div
            layout
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
          >
            <AnimatePresence>
              {visible.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  variants={staggerItem}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={p.tall ? 'lg:row-span-2' : ''}
                >
                  <ProjectCard {...p}/>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
        className="py-20 bg-bg-dark text-center">
        <div className="max-w-[1200px] mx-auto px-8">
          <span className="section-label block text-center">Next Project</span>
          <h2 className="section-title mb-5">HAVE A PROJECT<br/><span className="text-gold">IN MIND?</span></h2>
          <p className="text-text-light text-sm max-w-md mx-auto mb-9">Let's turn your idea into a stunning digital experience.</p>
          <Link to="/contact" className="btn-gold px-9 py-4">Start A Project <i className="fa-solid fa-arrow-right ml-2"/></Link>
        </div>
      </motion.section>
    </>
  );
}
