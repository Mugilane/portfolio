import { motion } from 'framer-motion';
import { fadeUp, VP } from '../../utils/animations';
import { Link } from 'react-router-dom';

/**
 * Reusable inner-page hero banner.
 * @param {string} title   - plain text, use HTML for gold span manually
 * @param {string} crumb   - breadcrumb page name
 */
export default function PageHero({ title, crumb }) {
  return (
    <section className="relative pt-40 pb-20 bg-bg-deep overflow-hidden">
      {/* decorative gradient corner */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full page-hero-clip"
        style={{ background: 'rgba(245,197,24,0.05)' }}
      />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="section-title"
          style={{ fontSize: 'clamp(3rem,6vw,5.5rem)' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="flex items-center gap-2 mt-4 font-barlow font-bold text-[0.78rem] tracking-widest uppercase text-text-muted"
        >
          <Link to="/" className="text-gold hover:text-white transition-colors duration-300">Home</Link>
          <span className="text-xs">›</span>
          <span className="text-text-light">{crumb}</span>
        </motion.div>
      </div>
    </section>
  );
}
