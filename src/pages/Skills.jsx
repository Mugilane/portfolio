import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';

const SKILLS_BACKEND = [
  { name: 'Node.js / NestJS',      pct: 95 },
  { name: 'TypeScript',             pct: 90 },
  { name: 'Microservices / gRPC',   pct: 88 },
  { name: 'REST API Design',         pct: 95 },
  { name: 'Kafka / BullMQ',         pct: 82 },
  { name: 'Redis Caching',           pct: 85 },
];

const SKILLS_DATA = [
  { name: 'MongoDB',                pct: 90 },
  { name: 'SQL / PostgreSQL',       pct: 85 },
  { name: 'TypeORM',                pct: 83 },
  { name: 'System Design',          pct: 88 },
  { name: 'React.js / Redux',       pct: 80 },
  { name: 'Docker / Deployment',    pct: 78 },
];

const TOOLS = [
  { icon: 'fa-brands fa-node-js',   label: 'Node.js'       },
  { icon: 'fa-solid fa-n',          label: 'NestJS'        },
  { icon: 'fa-brands fa-js',        label: 'TypeScript'    },
  { icon: 'fa-brands fa-react',     label: 'React.js'      },
  { icon: 'fa-brands fa-docker',    label: 'Docker'        },
  { icon: 'fa-brands fa-git-alt',   label: 'Git'           },
  { icon: 'fa-solid fa-database',   label: 'MongoDB'       },
  { icon: 'fa-solid fa-database',   label: 'PostgreSQL'    },
  { icon: 'fa-solid fa-bolt',       label: 'Kafka'         },
  { icon: 'fa-solid fa-memory',     label: 'Redis'         },
  { icon: 'fa-solid fa-plug',       label: 'gRPC'          },
  { icon: 'fa-solid fa-list-check', label: 'BullMQ'        },
  { icon: 'fa-solid fa-code',       label: 'TypeORM'       },
  { icon: 'fa-brands fa-github',    label: 'GitHub'        },
  { icon: 'fa-brands fa-chrome',    label: 'Express.js'    },
  { icon: 'fa-solid fa-terminal',   label: 'VS Code'       },
];

const EXPERTISE = [
  { icon: 'fa-server',       title: 'Backend Engineering',    desc: 'Production-grade Node.js and NestJS backends following Clean Architecture, SOLID principles, and DDD patterns.', tags: ['Node.js','NestJS','TypeScript'] },
  { icon: 'fa-network-wired',title: 'Microservices & APIs',   desc: '30+ RESTful APIs deployed. Architected distributed microservices systems with inter-service communication via gRPC.', tags: ['REST','gRPC','Microservices'] },
  { icon: 'fa-bolt',         title: 'Message Brokers',        desc: 'Kafka for robust event-driven streaming and BullMQ for reliable background job processing at scale.', tags: ['Kafka','BullMQ','Events'] },
  { icon: 'fa-database',     title: 'Database Optimization',  desc: 'Schema design and query optimization across MongoDB, SQL, and PostgreSQL with Redis caching to reduce database load.', tags: ['MongoDB','PostgreSQL','Redis'] },
  { icon: 'fa-shield-halved',title: 'Auth & Security',        desc: 'JWT-based authentication and RBAC authorization across multi-tenant APIs securing access across user roles.', tags: ['JWT','RBAC','OAuth'] },
  { icon: 'fa-users',        title: 'Team Leadership',        desc: 'Leading cross-functional teams of 5+ through complete SDLC — from project planning and architecture to final deployment.', tags: ['Agile','Scrum','SDLC'] },
];

function SkillBar({ name, pct }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setWidth(pct); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="mb-7">
      <div className="flex justify-between items-center mb-2.5">
        <span className="font-barlow font-semibold text-[0.82rem] tracking-widest uppercase text-white">{name}</span>
        <span className="font-condensed font-black text-base text-gold">{pct}%</span>
      </div>
      <div className="h-1 bg-[rgba(255,255,255,0.08)] rounded-sm overflow-visible relative">
        <div
          className="skill-fill"
          style={{ width: `${width}%`, transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)' }}
        />
      </div>
    </div>
  );
}

function OrbitRing({ label, value }) {
  return (
    <div className="relative flex items-center justify-center h-[280px] w-[280px] mx-auto">
      <div className="absolute inset-0 rounded-full border border-[rgba(245,197,24,0.3)] animate-spin-slow"/>
      <div className="absolute inset-10 rounded-full border border-dashed border-[rgba(245,197,24,0.2)] animate-spin-slow-r"/>
      <div className="absolute inset-20 rounded-full bg-gold flex flex-col items-center justify-center shadow-gold">
        <span className="font-condensed font-black text-[2.8rem] text-black leading-none">{value}</span>
        <span className="font-barlow font-bold text-[0.62rem] tracking-widest uppercase text-black/70">{label}</span>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <PageHero title='MY <span class="text-gold">SKILLS</span>' crumb="Skills"/>

      {/* Backend Skills */}
      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              <span className="section-label">Backend & Architecture</span>
              <h2 className="section-title mb-12">BACKEND <span className="text-gold">SKILLS</span></h2>
              {SKILLS_BACKEND.map(s => <SkillBar key={s.name} {...s}/>)}
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <OrbitRing value="2+" label="Years Exp."/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data & Frontend Skills */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              <OrbitRing value="30+" label="APIs"/>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <span className="section-label">Data & Frontend</span>
              <h2 className="section-title mb-12">DATABASE & <span className="text-gold">MORE</span></h2>
              {SKILLS_DATA.map(s => <SkillBar key={s.name} {...s}/>)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center mb-14">
            <span className="section-label">Areas</span>
            <h2 className="section-title">AREAS OF <span className="text-gold">EXPERTISE</span></h2>
          </motion.div>
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERTISE.map(({ icon, title, desc, tags }) => (
              <motion.div key={title} variants={staggerItem} className="expertise-card">
                <i className={`fa-solid ${icon} text-3xl text-gold mb-5 block`}/>
                <h3 className="font-barlow font-bold text-[1rem] tracking-widest uppercase text-white mb-2">{title}</h3>
                <p className="text-text-muted text-[0.83rem] leading-7 mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="font-barlow font-semibold text-[0.75rem] px-3 py-1.5 bg-bg-alt border border-[rgba(255,255,255,0.08)] rounded-sm text-text-light hover:border-gold hover:text-gold transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center mb-14">
            <span className="section-label">Toolbox</span>
            <h2 className="section-title">TOOLS I <span className="text-gold">USE DAILY</span></h2>
          </motion.div>
          <motion.div variants={stagger(0.05)} initial="hidden" whileInView="visible" viewport={VP}
            className="flex flex-wrap justify-center gap-3">
            {TOOLS.map(({ icon, label }) => (
              <motion.span key={label} variants={staggerItem}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-card border border-[rgba(255,255,255,0.08)] rounded-sm
                           font-barlow font-semibold text-[0.8rem] text-text-light
                           hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-300">
                <i className={`${icon} text-gold`}/> {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
