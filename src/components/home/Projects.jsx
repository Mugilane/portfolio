import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stagger, staggerItem, fadeUp, VP } from '../../utils/animations';
import SectionHeader from '../ui/SectionHeader';
import { Link } from 'react-router-dom';
import proj1 from '../../assets/project1.jpg';
import proj2 from '../../assets/project2.jpg';
import proj3 from '../../assets/project3.jpg';

const PROJECTS = [
  {
    img: proj1, tag: 'UI/UX · Front-end',
    title: 'BRANDING & DIGITAL VIDEO CAMPAIGN FOR GEORGE\'S CAFÉ',
    desc: 'We created a cutting-edge platform for San Francisco-based firm Martin Building.',
  },
  {
    img: proj2, tag: 'Analytics · UI/UX · Front-end',
    title: 'BRANDING & DIGITAL VIDEO CAMPAIGN FOR GEORGE\'S CAFÉ',
    desc: 'We created a cutting-edge platform for San Francisco-based firm Martin Building.',
  },
  {
    img: proj3, tag: 'Analytics · UI/UX · Front-end',
    title: 'BRANDING & DIGITAL VIDEO CAMPAIGN FOR GEORGE\'S CAFÉ',
    desc: 'We created a cutting-edge platform for San Francisco-based firm Martin Building.',
  },
];

function ProjectCard({ img, tag, title, desc }) {
  return (
    <motion.div variants={staggerItem} className="project-card flex-shrink-0 w-full">
      <div className="relative overflow-hidden h-[220px]">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
        <div className="project-overlay">
          <span className="font-barlow font-bold text-[0.72rem] tracking-widest uppercase text-gold flex items-center gap-1.5">
            View Case Study <i className="fa-solid fa-arrow-right text-xs"/>
          </span>
        </div>
      </div>
      <div className="p-6">
        <span className="font-barlow font-bold text-[0.65rem] tracking-[0.16em] uppercase text-gold mb-2 block">{tag}</span>
        <h3 className="font-barlow font-bold text-[0.9rem] text-white leading-snug mb-2">{title}</h3>
        <p className="text-[0.8rem] text-text-muted leading-relaxed mb-4">{desc}</p>
        <Link to="/projects" className="font-barlow font-bold text-[0.72rem] tracking-widest uppercase text-gold inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-300">
          View Case Studies <i className="fa-solid fa-arrow-right text-xs"/>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, PROJECTS.length - 3);

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(max, i + 1));

  return (
    <section className="py-24 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-12">
          <SectionHeader label="Portfolio" title="MY LATEST PROJECTS" goldWord="PROJECTS"/>
          <div className="flex gap-2.5 flex-shrink-0">
            {[prev, next].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                className="w-11 h-11 border border-white/8 rounded-sm flex items-center justify-center
                           text-text-light hover:border-gold hover:text-gold hover:-translate-y-0.5
                           transition-all duration-300"
              >
                <i className={`fa-solid fa-arrow-${i === 0 ? 'left' : 'right'} text-sm`}/>
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {PROJECTS.map((p, i) => (
              <div key={i} className="group">
                <ProjectCard {...p}/>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="text-center mt-12"
        >
          <Link to="/projects" className="btn-outline">
            Explore More <i className="fa-solid fa-arrow-right ml-1"/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
