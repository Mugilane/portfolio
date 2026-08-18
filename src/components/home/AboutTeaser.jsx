import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, stagger, staggerItem, VP } from '../../utils/animations';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero.jpg';

const FACTS = [
  { label: 'Name',         value: 'Mugilane D'                 },
  { label: 'Location',     value: 'Chennai, TN, India'         },
  { label: 'Email',        value: 'mugilane.cse@gmail.com'     },
  { label: 'Availability', value: '● Open to Work', gold: true },
];

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Photo */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="relative h-[520px]"
          >
            <img src={heroImg} alt="Mugilane D" className="w-full h-full object-cover object-top rounded-lg"/>
            <div className="absolute -top-4 -left-4 w-28 h-28 border-t-[3px] border-l-[3px] border-gold rounded-sm"/>
            <div className="absolute -bottom-4 right-10 w-28 h-28 border-b-[3px] border-r-[3px] border-gold rounded-sm"/>
            <div className="absolute bottom-8 -right-5 bg-gold rounded-lg px-6 py-4 shadow-gold">
              <span className="font-condensed font-black text-[2.4rem] text-black leading-none block">2+</span>
              <span className="font-barlow font-bold text-[0.7rem] tracking-widest uppercase text-black/70 block">
                Years of<br/>Experience
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title mb-4">
              BACKEND ENGINEER<br/>
              <span className="text-gold">&amp; SYSTEM ARCHITECT</span>
            </h2>
            <p className="text-text-light text-sm leading-7 mb-5">
              Results-driven Software Engineer and Backend Lead with 2+ years of experience designing
              and building scalable applications using Node.js, NestJS, and Microservices Architecture.
            </p>
            <p className="text-text-light text-sm leading-7 mb-8">
              Proven expertise in API development, system design, database optimization, and distributed systems.
              Strong leader experienced in managing teams and delivering high-performance solutions at
              <span className="text-gold font-semibold"> Yoho Technologies</span>.
            </p>

            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {FACTS.map(({ label, value, gold }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="bg-bg-card border border-[rgba(255,255,255,0.08)] rounded-sm p-5 hover:border-[rgba(245,197,24,0.3)] transition-colors duration-300"
                >
                  <span className="font-barlow font-bold text-[0.65rem] tracking-[0.15em] uppercase text-gold block mb-1">{label}</span>
                  <span className={`font-condensed font-bold text-sm ${gold ? 'text-gold' : 'text-white'}`}>{value}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex gap-4 flex-wrap">
              <Link to="/about" className="btn-gold">More About Me</Link>
              <Link to="/contact" className="btn-outline">Hire Me</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
