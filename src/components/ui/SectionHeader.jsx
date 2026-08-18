import { motion } from 'framer-motion';
import { fadeUp, VP } from '../../utils/animations';

/**
 * Reusable section header.
 * @param {string}  label    - small uppercase label above title
 * @param {string}  title    - main heading text (supports <br/>)
 * @param {string}  goldWord - word to colour in gold
 * @param {string}  desc     - optional paragraph below
 * @param {string}  align    - 'left' | 'center'
 */
export default function SectionHeader({ label, title, goldWord, desc, align = 'left', className = '' }) {
  const centered = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VP}
      className={`${centered} ${className}`}
    >
      {label && <span className="section-label">{label}</span>}
      <h2
        className="section-title mb-4"
        dangerouslySetInnerHTML={{
          __html: goldWord
            ? title.replace(goldWord, `<span class="text-gold">${goldWord}</span>`)
            : title,
        }}
      />
      {desc && (
        <p className={`text-text-light text-sm leading-7 ${align === 'center' ? 'max-w-[560px] mx-auto' : 'max-w-[560px]'}`}>
          {desc}
        </p>
      )}
    </motion.div>
  );
}
