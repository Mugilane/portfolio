import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';
import { Link } from 'react-router-dom';
import proj1 from '../assets/project1.jpg';
import proj2 from '../assets/project2.jpg';
import proj3 from '../assets/project3.jpg';

const FILTERS = ['all', 'uiux', 'branding', 'web', 'motion'];

const PROJECTS = [
  { img: proj1, cat: ['uiux','web'],       tag: 'UI/UX · Web Dev',      title: 'BRANDING & DIGITAL VIDEO CAMPAIGN FOR GEORGE\'S CAFÉ',   desc: 'A cutting-edge real estate platform for a San Francisco-based firm.', tall: true  },
  { img: proj2, cat: ['branding'],          tag: 'Branding · Identity',  title: 'AETHEL — COMPLETE BRAND IDENTITY SYSTEM',                 desc: 'Full brand identity system from logo to comprehensive guidelines.',    tall: false },
  { img: proj3, cat: ['motion','branding'], tag: 'Motion · Branding',    title: 'NEXUS TECH — DIGITAL CAMPAIGN',                           desc: 'Bold visual campaign for a fast-growing tech company.',               tall: false },
  { img: proj1, cat: ['web','uiux'],        tag: 'UI/UX · Front-end',    title: 'HEALTH MONITORING DASHBOARD & MOBILE APP',                desc: 'Real-time analytics platform for 50k+ users.',                        tall: false },
  { img: proj2, cat: ['branding','uiux'],   tag: 'Branding · Identity',  title: 'GEORGE\'S CAFÉ — COMPLETE BRAND OVERHAUL',                desc: 'Full rebrand including packaging and brand guidelines.',               tall: true  },
  { img: proj3, cat: ['web'],               tag: 'Web Dev · Full-Stack', title: 'NEXUS TECH — SAAS ANALYTICS PLATFORM',                    desc: 'Full-stack SaaS platform with React and real-time data visualization.',tall: false },
];

function ProjectCard({ img, tag, title, desc, tall }) {
  return (
    <div className={`group project-card ${tall ? 'lg:row-span-2' : ''}`}>
      <div className={`relative overflow-hidden ${tall ? 'h-[280px] lg:h-[520px]' : 'h-[240px]'}`}>
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
        <div className="project-overlay">
          <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <span className="font-barlow font-bold text-[0.65rem] tracking-[0.16em] uppercase text-gold block mb-1">{tag}</span>
            <span className="font-condensed font-black text-[1.1rem] text-white uppercase block">{title.substring(0,30)}...</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="font-barlow font-bold text-[0.65rem] tracking-[0.16em] uppercase text-gold mb-2 block">{tag}</span>
        <h3 className="font-barlow font-bold text-[0.9rem] text-white leading-snug mb-2">{title}</h3>
        <p className="text-[0.8rem] text-text-muted leading-relaxed mb-4">{desc}</p>
        <button className="font-barlow font-bold text-[0.72rem] tracking-widest uppercase text-gold inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-300">
          View Case Studies <i className="fa-solid fa-arrow-right text-xs"/>
        </button>
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="flex flex-wrap gap-2 mb-12">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`filter-tab ${active === f ? 'active' : ''}`}>
                {f === 'all' ? 'All Projects' : f === 'uiux' ? 'UI/UX Design' : f === 'web' ? 'Web Dev' : f.charAt(0).toUpperCase() + f.slice(1)}
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
              {visible.map((p, i) => (
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
