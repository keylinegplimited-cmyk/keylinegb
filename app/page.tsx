import { ArrowUpRight } from 'lucide-react';

const email = 'Olumide@keylinegroup.com.ng';

export default function ComingSoonPage() {
  return (
    <div className="site-shell">
      <header className="site-header page-wrap">
        <a className="brand" href="/" aria-label="Keyline Growth Partners home">
          <span className="brand-mark" aria-hidden="true">K<span className="brand-mark-arrow">↗</span></span>
          <span className="brand-name">Keyline <span>Growth Partners</span></span>
        </a>
        <a className="header-contact" href={`mailto:${email}`}>
          Get in touch <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </header>

      <main className="coming-main page-wrap">
        <div className="coming-content">
          <p className="eyebrow reveal"><span className="eyebrow-line" /> SOMETHING NEW IS ON THE WAY</p>
          <h1 className="reveal delay-1">Coming <em>soon<span className="period">.</span></em></h1>
          <p className="coming-description reveal delay-2">A new home for Keyline Growth Partners is in the works.</p>
          <a className="primary-button reveal delay-3" href={`mailto:${email}`}>
            Say hello <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-rule" aria-hidden="true"><span /></div>
      </main>

      <footer className="site-footer page-wrap">
        <span>© {new Date().getFullYear()} Keyline Growth Partners Limited</span>
        <span>Nigeria</span>
      </footer>
    </div>
  );
}
