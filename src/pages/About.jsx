import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpg';
import { useCounter } from '../hooks/useCounter';

const FACTS = [
  { label: 'Name',         value: 'Mugilane D'               },
  { label: 'Location',     value: 'Chennai, TN, India'       },
  { label: 'Email',        value: 'mugilane.cse@gmail.com'   },
  { label: 'Phone',        value: '+91 9360096656'           },
  { label: 'Status',       value: '● Open to Work', gold: true },
  { label: 'CGPA',         value: '8.42 / 10'                },
];

const EXPERIENCE = [
  {
    year: 'Sep 2024 — Present',
    title: 'Software Engineer / Backend Lead',
    company: '@ Yoho Technologies Pvt Ltd, Chennai',
    desc: 'Architected and transitioned backend systems to a highly scalable microservices architecture using NestJS. Led a cross-functional team of 5+ members across the full SDLC. Built 30+ RESTful APIs achieving a 40% reduction in backend response time. Implemented gRPC for low-latency inter-service communication and Kafka for event-driven data streaming. Automated 10+ backend processes, cutting manual operational workload by 60%.',
  },
];

const EDUCATION = [
  {
    year: '2020 — 2024',
    title: 'B.Tech — Computer Science & Engineering',
    company: '@ Christ College of Engineering and Technology, Puducherry',
    desc: 'Bachelor of Technology with a Major in Computer Science and Engineering. Graduated with a CGPA of 8.42 / 10.',
  },
];

const HIGHLIGHTS = [
  { icon: 'fa-network-wired', label: 'Microservices'          },
  { icon: 'fa-bolt',          label: 'gRPC & Kafka'           },
  { icon: 'fa-shield-halved', label: 'JWT Auth & RBAC'        },
  { icon: 'fa-database',      label: 'MongoDB & SQL'          },
  { icon: 'fa-layer-group',   label: 'Redis Caching'          },
  { icon: 'fa-code-branch',   label: 'Clean Architecture'     },
  { icon: 'fa-users',         label: 'Team Leadership'        },
  { icon: 'fa-rocket',        label: 'Performance Tuning'     },
];

function Timeline({ items }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold to-transparent"/>
      {items.map(({ year, title, company, desc }, i) => (
        <motion.div key={i} variants={staggerItem} className="relative pb-10 last:pb-0">
          <div className="tl-dot"/>
          <span className="font-barlow font-bold text-[0.7rem] tracking-[0.16em] uppercase text-gold block mb-1.5">{year}</span>
          <h3 className="font-condensed font-black text-[1.1rem] uppercase text-white mb-1">{title}</h3>
          <span className="font-barlow font-semibold text-[0.8rem] text-text-muted block mb-2.5">{company}</span>
          <p className="text-[0.85rem] text-text-light leading-7">{desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function StatItem({ target, suffix, label }) {
  const { ref, display } = useCounter(target, 1800, suffix);
  return (
    <div className="text-center py-8 px-6 border-r border-[rgba(255,255,255,0.08)] last:border-r-0 hover:bg-[rgba(245,197,24,0.05)] transition-colors duration-300">
      <span ref={ref} className="font-condensed font-black text-[3.5rem] leading-none text-gold block">{display}</span>
      <span className="font-barlow font-semibold text-[0.72rem] tracking-[0.15em] uppercase text-text-muted mt-2 block">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero title='ABOUT <span class="text-gold">ME</span>' crumb="About Me"/>

      {/* ── Main about layout ── */}
      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP} className="relative h-[520px]">
              <img src={heroImg} alt="Mugilane D" className="w-full h-full object-cover object-top rounded-lg"/>
              <div className="absolute -top-4 -left-4 w-28 h-28 border-t-[3px] border-l-[3px] border-gold rounded-sm"/>
              <div className="absolute -bottom-4 right-10 w-28 h-28 border-b-[3px] border-r-[3px] border-gold rounded-sm"/>
              <div className="absolute bottom-8 -right-5 bg-gold rounded-lg px-6 py-4 shadow-gold">
                <span className="font-condensed font-black text-[2.4rem] text-black leading-none block">2+</span>
                <span className="font-barlow font-bold text-[0.7rem] tracking-widest uppercase text-black/70 block">Years of<br/>Experience</span>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <span className="section-label">My Story</span>
              <h2 className="section-title mb-4">
                BACKEND ENGINEER<br/>
                <span className="text-gold">&amp; TECH LEAD</span>
              </h2>
              <p className="text-text-light text-sm leading-7 mb-4">
                Hi, I'm Mugilane D — a Results-driven Software Engineer and Backend Lead based in Chennai,
                Tamil Nadu. I specialize in designing and building scalable backend systems using
                Node.js, NestJS, and Microservices Architecture.
              </p>
              <p className="text-text-light text-sm leading-7 mb-4">
                At Yoho Technologies, I architected the transition to microservices, built 30+ RESTful APIs,
                implemented gRPC &amp; Kafka for real-time inter-service communication, and led a cross-functional
                team through the full software development lifecycle.
              </p>
              <p className="text-text-light text-sm leading-7 mb-8">
                Passionate about performance optimization, clean architecture, and modern backend technologies.
                I thrive at the intersection of engineering excellence and team leadership.
              </p>

              <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={VP}
                className="grid grid-cols-2 gap-4 mb-8">
                {FACTS.map(({ label, value, gold }) => (
                  <motion.div key={label} variants={staggerItem}
                    className="bg-bg-card border border-[rgba(255,255,255,0.08)] rounded-sm p-5 hover:border-[rgba(245,197,24,0.3)] transition-colors duration-300">
                    <span className="font-barlow font-bold text-[0.65rem] tracking-[0.15em] uppercase text-gold block mb-1">{label}</span>
                    <span className={`font-condensed font-bold text-sm break-all ${gold ? 'text-gold' : 'text-white'}`}>{value}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex gap-4 flex-wrap">
                <a href="mailto:mugilane.cse@gmail.com" className="btn-gold">
                  <i className="fa-solid fa-envelope text-xs"/> Contact Me
                </a>
                <a href="https://www.linkedin.com/in/mugilane-sdm" target="_blank" rel="noreferrer" className="btn-outline">
                  <i className="fa-brands fa-linkedin-in text-xs"/> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg-deep border-t border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP} className="grid grid-cols-2 lg:grid-cols-4">
            <StatItem target={2}  suffix="+" label="Years Experience"/>
            <StatItem target={30} suffix="+" label="APIs Shipped"/>
            <StatItem target={10} suffix="+" label="Processes Automated"/>
            <StatItem target={5}  suffix="+" label="Team Members Led"/>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="mb-12">
                <span className="section-label">Career</span>
                <h2 className="section-title">WORK <span className="text-gold">EXPERIENCE</span></h2>
              </motion.div>
              <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP}>
                <Timeline items={EXPERIENCE}/>
              </motion.div>

              {/* Key achievements */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="mt-10">
                <h4 className="font-barlow font-bold text-[0.8rem] tracking-widest uppercase text-gold mb-5">Key Achievements</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    '40% reduction in backend response time',
                    '60% cut in manual operational workload',
                    'Implemented JWT auth + RBAC across all APIs',
                    'Kafka event streaming for real-time data pipelines',
                    'gRPC for low-latency microservice communication',
                    'Led team of 5+ across full SDLC',
                  ].map(a => (
                    <li key={a} className="flex items-start gap-2.5 text-text-light text-[0.83rem] leading-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5"/>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="mb-12">
                <span className="section-label">Education</span>
                <h2 className="section-title">MY <span className="text-gold">EDUCATION</span></h2>
              </motion.div>
              <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP}>
                <Timeline items={EDUCATION}/>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Strengths */}
      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center mb-14">
            <span className="section-label">Core Strengths</span>
            <h2 className="section-title">TECHNICAL <span className="text-gold">HIGHLIGHTS</span></h2>
          </motion.div>
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={VP}
            className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {HIGHLIGHTS.map(({ icon, label }) => (
              <motion.div key={label} variants={staggerItem}
                className="bg-bg-card border border-[rgba(255,255,255,0.08)] rounded-xl py-7 px-5 text-center
                           hover:border-[rgba(245,197,24,0.3)] hover:-translate-y-1 transition-all duration-300">
                <i className={`fa-solid ${icon} text-gold text-3xl mb-3 block`}/>
                <h4 className="font-barlow font-bold text-[0.82rem] tracking-widest uppercase text-white">{label}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
        className="py-20 bg-bg-dark text-center">
        <div className="max-w-[1200px] mx-auto px-8">
          <span className="section-label block text-center">Let's Connect</span>
          <h2 className="section-title mb-5">OPEN FOR NEW<br/><span className="text-gold">OPPORTUNITIES</span></h2>
          <p className="text-text-light text-sm max-w-md mx-auto mb-9">
            Looking for a Backend Engineer who can scale your systems, lead your team,
            and ship production-grade APIs? Let's talk.
          </p>
          <Link to="/contact" className="btn-gold text-sm px-9 py-4">
            Get In Touch <i className="fa-solid fa-arrow-right ml-2"/>
          </Link>
        </div>
      </motion.section>
    </>
  );
}
