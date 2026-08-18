import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';
import { Link } from 'react-router-dom';

const SERVICES_OVERVIEW = [
  { num:'01', icon:'fa-pen-nib',  title:'Business Strategy', desc:'Strategic business solutions that drive measurable growth.' },
  { num:'02', icon:'fa-star',     title:'Branding',          desc:'Memorable brand identities that resonate deeply.'         },
  { num:'03', icon:'fa-cube',     title:'Product Design',    desc:'Intuitive and beautiful digital products.'                },
  { num:'04', icon:'fa-bullhorn', title:'Digital Marketing', desc:'High-impact digital marketing campaigns.'                 },
  { num:'05', icon:'fa-film',     title:'Motion Graphic',    desc:'Stunning motion graphics and animations.'                 },
  { num:'06', icon:'fa-code',     title:'Web Development',   desc:'Fast, responsive and modern web applications.'           },
];

const DETAIL_SERVICES = [
  {
    icon: 'fa-pen-nib', num: '01', title: 'UI/UX DESIGN',
    desc: 'User-centered design that transforms complex problems into simple, beautiful solutions. I conduct thorough user research, create wireframes, interactive prototypes, and deliver pixel-perfect designs.',
    features: ['User Research & Persona Development','Wireframing & Information Architecture','Interactive Prototyping','Usability Testing & Iteration','Design System & Component Libraries'],
  },
  {
    icon: 'fa-code', num: '02', title: 'WEB DEVELOPMENT',
    desc: 'Modern, performant web applications built with cutting-edge technologies. Every line of code is written with purpose — for speed, accessibility, and scalability.',
    features: ['React / Next.js Applications','Responsive Mobile-First Development','Performance Optimization (90+ Lighthouse)','API Integration & Backend Services','CMS Integration (Webflow, WordPress)'],
  },
  {
    icon: 'fa-star', num: '03', title: 'BRANDING & IDENTITY',
    desc: 'From logo creation to complete brand identity systems, I craft visual identities that communicate your values, attract your ideal customers, and stand apart from the competition.',
    features: ['Logo Design & Brand Mark','Color Palette & Typography System','Brand Guidelines Document','Marketing Collateral Design','Social Media Kit'],
  },
  {
    icon: 'fa-film', num: '04', title: 'MOTION GRAPHICS',
    desc: 'Dynamic animations and video productions that make your content come alive. From subtle UI micro-animations to full video campaigns that stop the scroll.',
    features: ['Explainer & Product Videos','Social Media Animations','Logo Animation & Intro/Outros','UI/Web Micro-animations','3D Motion & Visual Effects'],
  },
];

const PRICING = [
  {
    tier: 'Starter', price: '$999', period: 'per project', featured: false,
    features: [
      { yes: true, text: 'Landing Page Design' },
      { yes: true, text: 'Logo & Brand Kit' },
      { yes: true, text: 'Responsive Development' },
      { yes: true, text: '3 Revision Rounds' },
      { yes: true, text: 'Source Files Included' },
      { yes: false, text: 'SEO Optimization' },
      { yes: false, text: 'Ongoing Support' },
    ],
  },
  {
    tier: 'Professional', price: '$2,499', period: 'per project', featured: true,
    features: [
      { yes: true, text: 'Multi-page Website' },
      { yes: true, text: 'Complete Branding' },
      { yes: true, text: 'React / Next.js Dev' },
      { yes: true, text: 'Unlimited Revisions' },
      { yes: true, text: 'Source Files Included' },
      { yes: true, text: 'SEO Optimization' },
      { yes: false, text: '6-month Support' },
    ],
  },
  {
    tier: 'Enterprise', price: 'Custom', period: 'contact for pricing', featured: false,
    features: [
      { yes: true, text: 'Full Product Design' },
      { yes: true, text: 'Brand Strategy' },
      { yes: true, text: 'Full-Stack Development' },
      { yes: true, text: 'Unlimited Revisions' },
      { yes: true, text: 'All Files Included' },
      { yes: true, text: 'Advanced SEO' },
      { yes: true, text: '1-year Support' },
    ],
  },
];

export default function Services() {
  return (
    <>
      <PageHero title='MY <span class="text-gold">SERVICES</span>' crumb="Services"/>

      {/* Overview grid */}
      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center max-w-[640px] mx-auto mb-16">
            <span className="section-label">What I Offer</span>
            <h2 className="section-title mb-4">WHAT I CAN DO FOR<br/><span className="text-gold">YOUR BUSINESS</span></h2>
            <p className="text-text-light text-sm leading-7">I offer a comprehensive range of design and development services, each crafted with precision to help your business grow and succeed in the digital world.</p>
          </motion.div>

          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={VP}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden border border-white/8"
            style={{ gap:'1px', background:'rgba(255,255,255,0.08)' }}>
            {SERVICES_OVERVIEW.map(({ num, icon, title, desc }) => (
              <motion.div key={num} variants={staggerItem} className="service-card group bg-bg-card">
                <span className="absolute top-5 right-6 font-condensed font-black text-[3.5rem] text-gold/5 group-hover:text-gold/10 transition-colors duration-300 leading-none">{num}</span>
                <i className={`fa-solid ${icon} text-3xl text-text-muted group-hover:text-gold group-hover:scale-110 transform transition-all duration-300 mb-5 block`}/>
                <h3 className="font-barlow font-bold text-[0.88rem] tracking-widest uppercase text-white mb-2">{title}</h3>
                <p className="text-text-muted text-[0.82rem] leading-7">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center mb-14">
            <span className="section-label">In Detail</span>
            <h2 className="section-title">SERVICE <span className="text-gold">DETAILS</span></h2>
          </motion.div>

          {DETAIL_SERVICES.map(({ icon, num, title, desc, features }, i) => (
            <motion.div key={num} variants={i % 2 === 0 ? fadeLeft : fadeRight} initial="hidden" whileInView="visible" viewport={VP}
              className={`sdcard grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
              {/* Visual panel */}
              <div className={`bg-bg-alt flex flex-col items-center justify-center py-14 px-10 relative overflow-hidden min-h-[200px] ${i % 2 !== 0 ? '[direction:ltr]' : ''}`}>
                <i className={`fa-solid ${icon} text-[5rem] text-gold/80 hover:scale-110 hover:opacity-100 transition-all duration-300`}/>
                <span className="absolute bottom-0 right-0 font-condensed font-black text-[5rem] text-gold/5 leading-none">{num}</span>
              </div>
              {/* Info panel */}
              <div className={`p-12 ${i % 2 !== 0 ? '[direction:ltr]' : ''}`}>
                <h3 className="section-title text-[1.4rem] mb-3">{title}</h3>
                <p className="text-text-light text-sm leading-7 mb-6">{desc}</p>
                <ul className="flex flex-col gap-2.5 mb-7">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-text-light text-[0.83rem]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"/>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-gold">Get Started <i className="fa-solid fa-arrow-right ml-2"/></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center mb-16">
            <span className="section-label">Investment</span>
            <h2 className="section-title mb-3">SIMPLE <span className="text-gold">PRICING</span></h2>
            <p className="text-text-light text-sm max-w-md mx-auto">Transparent pricing with no hidden fees. All plans include revisions until you're 100% satisfied.</p>
          </motion.div>

          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map(({ tier, price, period, featured, features }) => (
              <motion.div key={tier} variants={staggerItem}
                className={`pricing-card ${featured ? 'featured' : ''}`}>
                {featured && (
                  <div className="absolute top-4 right-[-28px] bg-gold text-black font-barlow font-black text-[0.65rem] tracking-widest px-9 py-1 rotate-45">
                    POPULAR
                  </div>
                )}
                <span className="font-barlow font-bold text-[0.72rem] tracking-[0.2em] uppercase text-gold block mb-4">{tier}</span>
                <span className="font-condensed font-black text-[3.5rem] leading-none text-white block">{price}</span>
                <span className="text-text-muted text-sm block mb-7">{period}</span>
                <div className="h-px bg-white/8 my-6"/>
                <ul className="flex flex-col gap-3 mb-8 text-left">
                  {features.map(({ yes, text }) => (
                    <li key={text} className={`flex items-center gap-2.5 text-sm ${yes ? 'text-text-light' : 'text-text-muted'}`}>
                      <i className={`fa-solid ${yes ? 'fa-check text-gold' : 'fa-times text-text-muted'} text-xs`}/>
                      {text}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`${featured ? 'btn-gold' : 'btn-outline'} w-full justify-center`}>
                  {tier === 'Enterprise' ? "Let's Talk" : 'Get Started'}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
