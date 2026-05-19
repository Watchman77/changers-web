import { ArrowRight, BadgeCheck, BarChart3, Blocks, Briefcase, Building2, CheckCircle2, CircleDollarSign, FileCheck2, Globe2, Home, Landmark, LockKeyhole, Menu, Plane, Rocket, ShieldCheck, UserRoundPlus, Users, WalletCards, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Solution', href: '#solution' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Vision', href: '#vision' },
  { label: 'Join', href: '#join' },
];

const stats = [
  { value: '3 steps', label: 'Account, verification, investment' },
  { value: 'Real assets', label: 'Property-backed opportunities' },
  { value: 'Global', label: 'Built for local and diaspora investors' },
];

const benefits = [
  { icon: CircleDollarSign, title: 'Accessible investment', description: 'Invest with smaller amounts instead of waiting years to afford a full deposit or entire property.' },
  { icon: Building2, title: 'Real-world assets', description: 'Every opportunity is connected to tangible property, making the investment easier to understand and track.' },
  { icon: ShieldCheck, title: 'Trust-first structure', description: 'Verification, compliance checks, and transparent reporting create a more responsible investor environment.' },
  { icon: Globe2, title: 'Cross-border access', description: 'Diaspora communities can explore structured property pathways back home or across international markets.' },
];

const steps = [
  { icon: UserRoundPlus, title: 'Create an account', description: 'Sign up with basic details and open your secure investor dashboard.' },
  { icon: BadgeCheck, title: 'Complete verification', description: 'KYC and AML checks help protect investors and support a safer platform.' },
  { icon: Home, title: 'Choose a property', description: 'Browse opportunities, review property details, projected income, and choose your amount.' },
  { icon: BarChart3, title: 'Track performance', description: 'Monitor ownership, rental distributions, property updates, and long-term growth.' },
];

const audiences = [
  { icon: Briefcase, label: 'Young professionals' },
  { icon: CircleDollarSign, label: 'First-time investors' },
  { icon: Plane, label: 'Diaspora communities' },
  { icon: Rocket, label: 'Entrepreneurs' },
  { icon: Users, label: 'Middle-income earners' },
];

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Changers home">
      <span className="logo-mark"><Blocks size={24} aria-hidden /></span>
      <span>
        <strong>Changers</strong>
        <small>Property block by block</small>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-cta" href="#join">Start investing <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="mobile-cta" href="#join" onClick={() => setOpen(false)}>Start investing <ArrowRight size={16} /></a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-overlay" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><Landmark size={16} /> Fractional property ownership</p>
          <h1>Own property. One block at a time.</h1>
          <p className="hero-lede">Changers helps everyday people invest in real property through smaller, transparent ownership portions. No huge deposit, no confusing gatekeeping, just a clearer route into long-term property wealth.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#join">Join Changers <ArrowRight size={17} /></a>
            <a className="secondary-button" href="#how-it-works">See how it works</a>
          </div>
          <div className="stats-row">
            {stats.map((stat) => <div className="stat-card" key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </div>
        <div className="hero-panel">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" alt="Investor reviewing property finance documents" />
          <div className="panel-features">
            {[{ icon: WalletCards, label: 'Lower entry point' }, { icon: LockKeyhole, label: 'Secure verification' }, { icon: CheckCircle2, label: 'Clear reporting' }].map((item) => (
              <div key={item.label}><item.icon size={20} /><strong>{item.label}</strong></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="section warm-section">
      <div className="section-heading two-col">
        <div>
          <p className="section-label">The solution</p>
          <h2>Property ownership should feel possible, not protected by old barriers.</h2>
        </div>
        <p>Changers modernises property investment through secure digital infrastructure, fractional ownership models, and plain-English investor communication. It is designed for young professionals, first-time investors, entrepreneurs, middle-income earners, and diaspora communities.</p>
      </div>
      <div className="benefit-grid">
        {benefits.map((benefit) => <article className="benefit-card" key={benefit.title}><benefit.icon size={26} /><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}
      </div>
      <div className="trust-block">
        <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=1300&q=80" alt="Modern apartment building exterior" />
        <div>
          <p className="section-label">Why trust Changers?</p>
          <h3>Built on real assets, transparent reporting, and responsible operations.</h3>
          <p>Property investment is tied to people&apos;s financial futures, families, and long-term goals. Changers puts trust at the centre with clear structures, visible performance, managed opportunities, and accountability.</p>
          <div className="mini-grid">
            <span><FileCheck2 size={20} /> KYC and compliance checks</span>
            <span><Users size={20} /> Community-driven ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section dark-section">
      <div className="section-heading narrow">
        <p className="section-label gold">How it works</p>
        <h2>Owning property, one block at a time.</h2>
        <p>The first experience should feel simple, secure, and beginner-friendly. Changers turns a complex property journey into a clear digital flow.</p>
      </div>
      <div className="step-grid">
        {steps.map((step, index) => <article className="step-card" key={step.title}><div><step.icon size={26} /><span>0{index + 1}</span></div><h3>{step.title}</h3><p>{step.description}</p></article>)}
      </div>
      <div className="quote-row">
        <blockquote>"I never thought property ownership would be possible for me, but Changers made it a reality. Their innovative approach is a breath of fresh air in an outdated system."<cite>Aisha Rahman, new property investor</cite></blockquote>
        <div className="income-card"><p className="section-label gold">After investing</p><h3>Rental income and appreciation potential.</h3><p>As properties generate rental income, investors may receive distributions based on their ownership share. If property values rise over time, the investor&apos;s share may also grow in value.</p></div>
      </div>
    </section>
  );
}

function VisionJoin() {
  return (
    <>
      <section id="vision" className="section warm-section vision-section">
        <div className="two-col">
          <div><p className="section-label">Vision and mission</p><h2>Become a global gateway to property ownership.</h2></div>
          <div><p>Changers envisions a world where anyone, anywhere, can access high-quality property investments without high capital, complex processes, or geographic limitations.</p><div className="mission-card"><h3>Our mission</h3><p>Simplify and modernise real estate investment through secure structures, innovative technology, transparent operations, investor communication, and trusted investment pathways between global markets.</p></div></div>
        </div>
      </section>
      <section id="join" className="section join-section">
        <div className="join-grid">
          <div>
            <p className="section-label">Join Changers</p>
            <h2>Your path to property ownership starts here.</h2>
            <p>Create your account, complete verification, and become part of a community building long-term financial security through property.</p>
            <div className="audience-grid">{audiences.map((audience) => <span key={audience.label}><audience.icon size={20} /> {audience.label}</span>)}</div>
          </div>
          <form className="join-form">
            <label>Name<input placeholder="Your full name" /></label>
            <label>Email address<input type="email" placeholder="you@example.com" /></label>
            <label>Country of residence<input placeholder="United Kingdom" /></label>
            <label>Investor type<select><option>First-time investor</option><option>Young professional</option><option>Diaspora investor</option><option>Entrepreneur</option></select></label>
            <label className="full-width">Message<textarea placeholder="Tell us what you want to achieve with property ownership." /></label>
            <button type="button">Create your Changers account <ArrowRight size={17} /></button>
            <p>This form is ready to connect to Supabase when the investor database is added.</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return <footer className="footer"><Logo /><nav>{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><p>© 2026 Changers</p></footer>;
}

export default function App() {
  return <><Header /><main><Hero /><Solution /><HowItWorks /><VisionJoin /></main><Footer /></>;
}
