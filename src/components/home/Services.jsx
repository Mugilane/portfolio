import { motion } from 'framer-motion';
import { stagger, staggerItem, fadeUp, VP } from '../../utils/animations';
import SectionHeader from '../ui/SectionHeader';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    num: '01', title: 'Backend Development',
    desc: 'Building scalable, production-ready backend systems using Node.js, NestJS, and TypeScript with clean architecture and best practices.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"/>
      </svg>
    ),
  },
  {
    num: '02', title: 'Microservices Architecture',
    desc: 'Designing and implementing distributed microservices systems with gRPC, Kafka, and event-driven patterns for maximum scalability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
      </svg>
    ),
  },
  {
    num: '03', title: 'API Design & Development',
    desc: 'Developing 30+ production RESTful APIs with JWT authentication, role-based authorization, and performance optimization yielding 40% faster responses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
      </svg>
    ),
  },
  {
    num: '04', title: 'Database Design & Optimization',
    desc: 'Designing and optimizing schemas across MongoDB and SQL/PostgreSQL with TypeORM and Redis caching to ensure high efficiency and data integrity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>
      </svg>
    ),
  },
  {
    num: '05', title: 'System Design & Architecture',
    desc: 'End-to-end system design for high-performance distributed applications — from architecture decisions to Docker deployment and SDLC management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
      </svg>
    ),
  },
  {
    num: '06', title: 'Full-Stack Development',
    desc: 'Building complete web solutions from React.js + Redux frontends to NestJS backends, including responsive UIs and micro-frontend architectures.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-bg-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionHeader
          label="What I Do"
          title="WHAT I CAN BUILD FOR YOUR BUSINESS"
          goldWord="BUILD FOR YOUR BUSINESS"
          className="mb-14"
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                     border border-[rgba(255,255,255,0.08)] rounded-lg overflow-hidden"
          style={{ gap: '1px', background: 'rgba(255,255,255,0.08)' }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              className="service-card group bg-bg-card"
            >
              <span className="absolute top-5 right-6 font-condensed font-black leading-none
                               text-[3.5rem] text-gold/5 group-hover:text-gold/10 transition-colors duration-300">
                {s.num}
              </span>
              <div className="w-9 h-9 mb-5 text-text-muted group-hover:text-gold transition-all duration-300 group-hover:scale-110 transform">
                {s.icon}
              </div>
              <h3 className="font-barlow font-bold text-[0.88rem] tracking-widest uppercase text-white mb-2.5">
                {s.title}
              </h3>
              <p className="text-text-muted text-[0.82rem] leading-7">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="text-center mt-10"
        >
          <Link to="/services" className="btn-outline">
            View All Services <i className="fa-solid fa-arrow-right ml-1"/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
