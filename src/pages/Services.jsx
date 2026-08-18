import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';
import { Link } from 'react-router-dom';

const SERVICES_OVERVIEW = [
  { num: '01', icon: 'fa-laptop-code', title: 'Web Application', desc: 'Fast, responsive, and scalable web applications built with modern frontend and backend tech.' },
  { num: '02', icon: 'fa-palette', title: 'Branding Websites', desc: 'Stunning visual identities and high-converting websites tailored to your brand.' },
  { num: '03', icon: 'fa-mobile-screen-button', title: 'Mobile Application', desc: 'Intuitive cross-platform mobile apps delivering smooth performance on iOS and Android.' },
  { num: '04', icon: 'fa-cloud', title: 'SaaS Product Development', desc: 'End-to-end multi-tenant SaaS engineering, cloud infrastructure, and backend APIs.' },
  { num: '05', icon: 'fa-chalkboard-user', title: 'Training & Mentoring', desc: '1-on-1 developer mentorship, code reviews, and technical workshops for engineering growth.' },
  { num: '06', icon: 'fa-building-user', title: 'Custom Enterprise Software', desc: 'Bespoke enterprise software systems, microservice architectures, and complex workflow automation.' },
];

const DETAIL_SERVICES = [
  {
    icon: 'fa-laptop-code', num: '01', title: 'WEB APPLICATION',
    desc: 'Modern, performant web applications built with cutting-edge technologies. Every line of code is written with focus on performance, accessibility, security, and scalability across all devices.',
    features: ['Custom React & Next.js Development', 'Responsive & Mobile-First UIs', 'State Management & Real-time Integration', 'Performance & SEO Optimization', 'Progressive Web App (PWA) Capabilities'],
  },
  {
    icon: 'fa-palette', num: '02', title: 'BRANDING WEBSITES',
    desc: 'From custom visual aesthetics and typography to high-converting landing pages, I craft online visual identities that communicate your brand values and engage visitors.',
    features: ['Custom Visual Design & Brand Aesthetics', 'High-Converting Landing Pages', 'Smooth Micro-Interactions & Animations', 'Brand Guidelines & Digital Assets', 'Content Management System (CMS) Integration'],
  },
  {
    icon: 'fa-mobile-screen-button', num: '03', title: 'MOBILE APPLICATION',
    desc: 'End-to-end mobile application development for iOS and Android. Delivering clean mobile architectures with fluid navigation, push notifications, and seamless API connectivity.',
    features: ['iOS & Android Cross-Platform Development', 'Native Performance & Intuitive UI/UX', 'RESTful API & Firebase Integration', 'App Store & Google Play Deployment', 'Offline Support & Push Notifications'],
  },
  {
    icon: 'fa-cloud', num: '04', title: 'SAAS PRODUCT DEVELOPMENT',
    desc: 'Turn your SaaS vision into a reliable, enterprise-grade cloud product. I engineer full-stack multi-tenant applications complete with subscription billing, admin dashboards, and scalable architectures.',
    features: ['Multi-Tenant SaaS Architecture', 'Stripe & Billing Pipeline Integration', 'Role-Based Access Control & Auth', 'Real-Time Analytics & Admin Dashboards', 'Cloud CI/CD Pipelines & Infrastructure'],
  },
  {
    icon: 'fa-chalkboard-user', num: '05', title: 'TRAINING & MENTORING',
    desc: 'Empowering software developers and engineering teams to level up their technical skills. I offer personalized coaching sessions, code reviews, system design workshops, and career growth guidance.',
    features: ['1-on-1 Mentorship & Career Coaching', 'In-Depth Code Reviews & Architecture Refactoring', 'System Design & Engineering Best Practices', 'Full-Stack Developer Bootcamps', 'Team Upskilling & Technical Workshops'],
  },
  {
    icon: 'fa-building-user', num: '06', title: 'CUSTOM ENTERPRISE SOFTWARE',
    desc: 'Tailored enterprise-grade software solutions engineered for complex business requirements. I design distributed systems, microservices architectures, legacy modernizations, and automated workflow pipelines.',
    features: ['Custom Enterprise Microservices & APIs', 'Legacy System Modernization & Migration', 'gRPC & Event-Driven Message Queues', 'Complex Business Logic & Workflow Engines', 'High-Availability Cloud Infrastructure'],
  },
];

const PRICING = [
  {
    tier: 'Starter', price: '$999', period: 'per project', featured: false,
    features: [
      { yes: true, text: 'Branding Website / Landing Page' },
      { yes: true, text: 'Responsive Mobile Design' },
      { yes: true, text: '3 Revision Rounds' },
      { yes: true, text: 'Source Code & Assets' },
      { yes: true, text: 'Basic SEO Setup' },
      { yes: false, text: 'Mobile App Development' },
      { yes: false, text: 'SaaS Multi-Tenant Architecture' },
    ],
  },
  {
    tier: 'Professional', price: '$2,499', period: 'per project', featured: true,
    features: [
      { yes: true, text: 'Full Web Application' },
      { yes: true, text: 'Cross-Platform Mobile App' },
      { yes: true, text: 'Branding & UI/UX System' },
      { yes: true, text: 'Unlimited Revisions' },
      { yes: true, text: 'API Integration & Backend' },
      { yes: true, text: 'Advanced SEO & Analytics' },
      { yes: false, text: 'Dedicated SaaS Infrastructure' },
    ],
  },
  {
    tier: 'Enterprise', price: 'Custom', period: 'contact for pricing', featured: false,
    features: [
      { yes: true, text: 'SaaS Product Development' },
      { yes: true, text: 'Multi-Tenant Cloud Infrastructure' },
      { yes: true, text: 'Team Training & Mentoring' },
      { yes: true, text: 'Unlimited Revisions' },
      { yes: true, text: 'Custom Auth & Billing Pipelines' },
      { yes: true, text: 'Security Audit & Optimization' },
      { yes: true, text: '1-Year Dedicated Support' },
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
