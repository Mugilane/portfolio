import { motion } from 'framer-motion';
import { stagger, staggerItem, VP } from '../../utils/animations';
import SectionHeader from '../ui/SectionHeader';
import heroImg from '../../assets/hero.jpg';

const TESTIMONIALS = [
  {
    text: 'Kane completely transformed our brand identity. His attention to detail and creative vision are unmatched. The results exceeded every expectation.',
    name: 'Sarah Johnson', role: 'CEO, TechStart Inc.',
  },
  {
    text: 'Working with Kane was a dream. He delivered our e-commerce platform on time with a design that boosted our conversions by 45% in the first month.',
    name: 'Michael Chen', role: 'Founder, UrbanNest',
  },
  {
    text: 'Exceptional quality, professionalism, and creativity. Kane redesigned our entire digital presence and the impact was immediate and measurable.',
    name: 'Emma Rodriguez', role: 'Marketing Director, Nexus',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionHeader
          label="Testimonials"
          title='WHAT CLIENTS SAY'
          goldWord="SAY"
          align="center"
          className="mb-14 max-w-[560px] mx-auto"
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map(({ text, name, role }) => (
            <motion.div
              key={name}
              variants={staggerItem}
              className="bg-bg-card border border-white/8 rounded-xl p-9
                         hover:border-[rgba(245,197,24,0.3)] hover:-translate-y-1 hover:shadow-card
                         transition-all duration-300"
            >
              <div className="testi-quote">"</div>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="text-text-light text-[0.88rem] leading-7 mb-6">{text}</p>
              <div className="flex items-center gap-3.5">
                <img src={heroImg} alt={name} className="w-11 h-11 rounded-full object-cover border-2 border-[rgba(245,197,24,0.3)]"/>
                <div>
                  <span className="font-barlow font-bold text-[0.85rem] text-white block">{name}</span>
                  <span className="text-[0.72rem] text-text-muted">{role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
