import { useCounter } from '../../hooks/useCounter';
import { motion } from 'framer-motion';
import { stagger, staggerItem, VP } from '../../utils/animations';

const STATS = [
  { target: 2,  suffix: '+', label: 'Years Experience'     },
  { target: 30, suffix: '+', label: 'RESTful APIs Shipped' },
  { target: 10, suffix: '+', label: 'Processes Automated'  },
  { target: 5,  suffix: '+', label: 'Team Members Led'     },
];

function StatItem({ target, suffix, label }) {
  const { ref, display } = useCounter(target, 1800, suffix);
  return (
    <motion.div
      variants={staggerItem}
      className="text-center py-8 px-6 border-r border-[rgba(255,255,255,0.08)] last:border-r-0
                 hover:bg-[rgba(245,197,24,0.05)] transition-colors duration-300"
    >
      <span ref={ref} className="font-condensed font-black text-[3.5rem] leading-none text-gold block">
        {display}
      </span>
      <span className="font-barlow font-semibold text-[0.72rem] tracking-[0.15em] uppercase text-text-muted mt-2 block">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-0 bg-bg-deep border-t border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
