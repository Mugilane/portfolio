import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, stagger, staggerItem, VP } from '../utils/animations';
import PageHero from '../components/ui/PageHero';

const FAQS = [
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope. A landing page typically takes 1–2 weeks, a full branding project 3–4 weeks, and a complex web application 6–12 weeks.' },
  { q: 'Do you work with clients internationally?', a: 'Absolutely! I work with clients worldwide. I\'m comfortable with remote collaboration via Zoom, Slack, and other tools.' },
  { q: "What's your payment process?", a: 'I typically require a 50% upfront deposit to begin work, with the remaining balance due upon project completion. I accept bank transfers, PayPal, and Stripe.' },
  { q: 'Do you offer ongoing support after delivery?', a: 'Yes! I offer a complimentary 30-day post-launch support period. Extended support packages are available for longer-term maintenance.' },
  { q: 'How many revisions are included?', a: 'My standard packages include 3 revision rounds. The Professional and Enterprise packages include unlimited revisions until you\'re completely satisfied.' },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 py-6">
      <button onClick={() => setOpen(v => !v)}
        className="flex justify-between items-center gap-4 w-full text-left">
        <h4 className="font-barlow font-bold text-[0.95rem] text-white">{q}</h4>
        <div className={`w-7 h-7 rounded-full border border-white/8 flex items-center justify-center text-gold text-xs flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45 border-gold' : ''}`}>
          <i className="fa-solid fa-plus"/>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
        className="overflow-hidden"
      >
        <p className="text-text-muted text-[0.87rem] leading-7 pt-4">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); e.target.reset(); }, 3500);
  };

  return (
    <>
      <PageHero title='GET IN <span class="text-gold">TOUCH</span>' crumb="Contact"/>

      <section className="py-24 bg-bg-deep">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16">

            {/* Left: Info */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              {/* Availability banner */}
              <div className="flex items-center gap-4 bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.3)] rounded-xl p-5 mb-10">
                <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 animate-pulse-green"/>
                <div>
                  <span className="font-barlow font-bold text-[0.85rem] text-white block">Available for New Projects</span>
                  <span className="text-text-muted text-[0.78rem]">Typical response time: within 24 hours</span>
                </div>
              </div>

              <h2 className="section-title mb-4">LET'S CREATE<br/>SOMETHING <span className="text-gold">GREAT</span></h2>
              <p className="text-text-light text-sm leading-7 mb-10">Whether you have a project in mind, a question, or just want to say hello — my inbox is always open. I'll get back to you as soon as possible.</p>

              <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VP} className="flex flex-col gap-5">
                {[
                  { icon: 'fa-envelope',      label: 'Email',         val: 'mugilane.cse@gmail.com'     },
                  { icon: 'fa-phone',          label: 'Phone',         val: '+91 9360096656'              },
                  { icon: 'fa-location-dot',   label: 'Location',      val: 'Chennai, Tamil Nadu, India'  },
                  { icon: 'fa-clock',          label: 'Working Hours', val: 'Mon–Fri, 9am–6pm IST'       },
                ].map(({ icon, label, val }) => (
                  <motion.div key={label} variants={staggerItem}
                    className="flex items-center gap-4 bg-bg-card border border-white/8 rounded-sm p-6 hover:border-[rgba(245,197,24,0.3)] hover:translate-x-1 transition-all duration-300">
                    <div className="w-11 h-11 bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.3)] rounded-sm flex items-center justify-center text-gold flex-shrink-0">
                      <i className={`fa-solid ${icon}`}/>
                    </div>
                    <div>
                      <span className="font-barlow font-bold text-[0.65rem] tracking-[0.16em] uppercase text-gold block mb-0.5">{label}</span>
                      <span className="text-[0.9rem] text-white">{val}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex gap-3 mt-10">
                {[
                  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mugilane-sdm' },
                  { icon: 'fa-brands fa-github',      label: 'GitHub',   href: 'https://github.com/mugilaneyoho'          },
                  { icon: 'fa-brands fa-google',        label: 'Mail', href:  'mailto:mugilane.cse@gmail.com'    },
                ].map(({ icon, label, href }) => (
                  <a key={label} href="#"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-[rgba(255,255,255,0.08)] rounded-sm font-barlow font-bold text-[0.78rem] text-text-muted hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-300">
                    <i className={icon}/> {label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <form onSubmit={handleSubmit}
                className="bg-bg-card border border-white/8 rounded-2xl p-12 flex flex-col gap-5">
                <div>
                  <span className="section-label">Send a Message</span>
                  <h3 className="font-condensed font-black text-[1.4rem] uppercase text-white">START YOUR PROJECT</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-barlow font-bold text-[0.7rem] tracking-[0.14em] uppercase text-text-muted block mb-2">Full Name *</label>
                    <input className="form-input" type="text" placeholder="John Doe" required/>
                  </div>
                  <div>
                    <label className="font-barlow font-bold text-[0.7rem] tracking-[0.14em] uppercase text-text-muted block mb-2">Email Address *</label>
                    <input className="form-input" type="email" placeholder="john@company.com" required/>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-barlow font-bold text-[0.7rem] tracking-[0.14em] uppercase text-text-muted block mb-2">Phone Number</label>
                    <input className="form-input" type="tel" placeholder="+1 (000) 000-0000"/>
                  </div>
                  <div>
                    <label className="font-barlow font-bold text-[0.7rem] tracking-[0.14em] uppercase text-text-muted block mb-2">Budget Range</label>
                    <select className="form-input cursor-pointer">
                      <option value="">Select a range</option>
                      <option>$500 – $1,000</option>
                      <option>$1,000 – $2,500</option>
                      <option>$2,500 – $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-barlow font-bold text-[0.7rem] tracking-[0.14em] uppercase text-text-muted block mb-2">Service Interested In</label>
                  <select className="form-input cursor-pointer">
                    <option value="">Choose a service</option>
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Branding & Identity</option>
                    <option>Motion Graphics</option>
                    <option>Full Project</option>
                  </select>
                </div>

                <div>
                  <label className="font-barlow font-bold text-[0.7rem] tracking-[0.14em] uppercase text-text-muted block mb-2">Your Message *</label>
                  <textarea className="form-input h-40 resize-none" placeholder="Tell me about your project, goals, timeline..." required/>
                </div>

                <button type="submit"
                  className={`btn-gold self-start px-8 py-4 text-[0.88rem] transition-all duration-300 ${sent ? '!bg-green-500 !shadow-none' : ''}`}>
                  {sent
                    ? <><i className="fa-solid fa-check"/> Message Sent!</>
                    : <><i className="fa-solid fa-paper-plane"/> Send Message</>
                  }
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-[760px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="text-center mb-14">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">FREQUENTLY ASKED <span className="text-gold">QUESTIONS</span></h2>
          </motion.div>
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={VP}>
            {FAQS.map((f) => <motion.div key={f.q} variants={staggerItem}><FAQ {...f}/></motion.div>)}
          </motion.div>
        </div>
      </section>
    </>
  );
}
