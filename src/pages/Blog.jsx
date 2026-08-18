import { motion } from 'framer-motion';
import { fadeUp, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';
import proj1 from '../assets/project1.jpg';
import proj2 from '../assets/project2.jpg';
import proj3 from '../assets/project3.jpg';

const FEATURED = [
  {
    img: proj1, size: 'large', cat: 'SaaS Product', date: 'August 14, 2026',
    title: 'Architecting Multi-Tenant SaaS Products: From Billing to Scalable APIs',
    excerpt: 'Building a successful SaaS application requires robust multi-tenant database isolation, seamless payment pipelines, role-based security, and cloud scalability. Here is a step-by-step technical guide.',
  },
];

const SIDEBAR = [
  { img: proj2, cat: 'Branding Websites', date: 'August 8, 2026',  title: 'How Custom Branding Websites Double Conversion Rates for Tech Brands' },
  { img: proj3, cat: 'Enterprise Software', date: 'August 2, 2026',   title: 'Migrating Monolithic Enterprise Systems to Microservices & gRPC' },
];

const ARTICLES = [
  { img: proj1, cat: 'Web Application',     date: 'July 26, 2026', title: 'Building Production-Grade React & Next.js Web Apps in 2026', excerpt: 'Deep dive into state management, performance optimization, and clean architecture for modern high-traffic web applications.' },
  { img: proj2, cat: 'Mobile Application',  date: 'July 18, 2026', title: 'Cross-Platform Mobile Apps: Offline Sync & Fluid UX',        excerpt: 'Learn how to construct fast, reliable iOS & Android applications with native performance, push notifications, and offline data sync.' },
  { img: proj3, cat: 'Training & Mentoring',date: 'July 10, 2026', title: 'Developer Growth: Code Reviews & Technical Mentorship',        excerpt: 'Proven strategies for building high-performing software teams through structured 1-on-1 mentorship and constructive code review workflows.' },
];

function BlogCard({ img, cat, date, title, excerpt, large }) {
  return (
    <div className={`blog-card group ${large ? '' : ''}`}>
      <div className={`overflow-hidden ${large ? 'h-[280px]' : 'h-[200px]'}`}>
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
      </div>
      <div className="p-7">
        <div className="flex items-center gap-4 mb-3">
          <span className="font-barlow font-bold text-[0.65rem] tracking-[0.18em] uppercase text-gold bg-[rgba(245,197,24,0.1)] px-2.5 py-1 rounded-sm">{cat}</span>
          <span className="text-text-muted text-[0.75rem]">{date}</span>
        </div>
        <h3 className={`font-condensed font-black uppercase text-white mb-3 leading-snug group-hover:text-gold transition-colors duration-300 ${large ? 'text-[1.25rem]' : 'text-[1rem]'}`}>
          {title}
        </h3>
        {excerpt && <p className="text-text-muted text-[0.83rem] leading-7 mb-5">{excerpt}</p>}
        <button className="font-barlow font-bold text-[0.72rem] tracking-widest uppercase text-gold inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-300">
          Read {large ? 'Article' : 'More'} <i className="fa-solid fa-arrow-right text-xs"/>
        </button>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <>
      <PageHero title='MY <span class="text-gold">BLOG</span>' crumb="Blog"/>

      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="mb-12">
            <span className="section-label">Featured</span>
            <h2 className="section-title">LATEST <span className="text-gold">ARTICLES</span></h2>
          </motion.div>

          {/* Featured layout */}
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP}
            className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 mb-12">
            <motion.div variants={staggerItem}>
              <BlogCard {...FEATURED[0]} large/>
            </motion.div>
            <div className="flex flex-col gap-6">
              {SIDEBAR.map(s => (
                <motion.div key={s.title} variants={staggerItem}>
                  <BlogCard {...s}/>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* More articles */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="mb-6">
            <span className="section-label">More Posts</span>
            <h3 className="section-title text-[1.8rem]">ALL <span className="text-gold">ARTICLES</span></h3>
          </motion.div>

          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ARTICLES.map(a => (
              <motion.div key={a.title} variants={staggerItem}>
                <BlogCard {...a}/>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center">
            <button className="btn-outline">Load More Articles <i className="fa-solid fa-arrow-down ml-2"/></button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
        className="py-20 bg-bg-dark">
        <div className="max-w-[640px] mx-auto px-8 text-center">
          <span className="section-label block text-center">Newsletter</span>
          <h2 className="section-title mb-3">STAY IN THE <span className="text-gold">LOOP</span></h2>
          <p className="text-text-light text-sm max-w-[480px] mx-auto mb-8">Get weekly insights on full-stack web development, SaaS engineering, mobile app design, and enterprise architecture delivered straight to your inbox.</p>
          <form className="flex gap-3 max-w-[480px] mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" className="form-input flex-1" placeholder="your@email.com" required/>
            <button type="submit" className="btn-gold flex-shrink-0">Subscribe</button>
          </form>
        </div>
      </motion.section>
    </>
  );
}
