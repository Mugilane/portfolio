import { Link } from 'react-router-dom';

const socials = [
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/mugilane-sdm' },
  { icon: 'fa-brands fa-github',      href: 'https://github.com/mugilaneyoho' },
  { icon: 'fa-brands fa-google',        href: 'mailto:mugilane.cse@gmail.com'    },
];

const footerCols = [
  {
    title: 'Navigation',
    links: [
      { to: '/',         label: 'Home'     },
      { to: '/about',    label: 'About'    },
      { to: '/skills',   label: 'Skills'   },
      { to: '/services', label: 'Services' },
      { to: '/projects', label: 'Projects' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Web Application'    },
      { to: '/services', label: 'Branding Websites'         },
      { to: '/services', label: 'Mobile Application'  },
      { to: '/services', label: 'SaaS Product Development'   },
      { to: '/services', label: 'Training & Mentoring'   },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: 'mailto:mugilane.cse@gmail.com', label: 'mugilane.cse@gmail.com' },
      { href: 'tel:+919360096656',              label: '+91 9360096656'         },
      { href: '#',                              label: 'Chennai, TN, India'     },
      { to: '/contact',                         label: 'Send a Message'         },
      { href: 'https://www.linkedin.com/in/mugilane-sdm', label: 'LinkedIn'    },
    ],
  },
];

const LogoHex = () => (
  <Link to="/" className="flex items-center gap-2.5 font-condensed font-black text-xl tracking-wide text-white">
    <div className="logo-hex">
      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    </div>
    SDM<span className="text-gold">.</span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/8 pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <LogoHex />
            <p className="text-text-muted text-sm leading-7 mt-4 max-w-[280px]">
              Software Engineer &amp; Backend Lead specializing in Node.js, NestJS,
              Microservices, and scalable API development. Open to new opportunities.
            </p>
            <div className="flex gap-2.5 mt-5">
              {socials.map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  className="w-9 h-9 border border-white/8 rounded-full flex items-center justify-center text-text-muted text-sm hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <i className={icon}/>
                </a>
              ))}
            </div>
          </div>

          {/* Cols */}
          {footerCols.map(col => (
            <div key={col.title}>
              <h4 className="font-barlow font-bold text-[0.72rem] tracking-[0.18em] uppercase text-white mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(({ to, href, label }) => (
                  <li key={label}>
                    {to ? (
                      <Link
                        to={to}
                        className="text-sm text-text-muted hover:text-gold hover:pl-1 transition-all duration-300 flex items-center gap-1 group"
                      >
                        <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1.5 group-hover:translate-x-0 duration-300">→</span>
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className="text-sm text-text-muted hover:text-gold hover:pl-1 transition-all duration-300 flex items-center gap-1 group"
                      >
                        <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1.5 group-hover:translate-x-0 duration-300">→</span>
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-text-muted text-sm">
            © 2026 <span className="text-gold">Mugilane SDM</span>. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Made with <span className="text-gold">♥</span> for great experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
