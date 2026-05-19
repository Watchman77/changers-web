import { AlertTriangle, ArrowRight, BadgeCheck, BarChart3, Briefcase, Building2, CheckCircle2, CircleDollarSign, FileCheck2, Globe2, HelpCircle, Home, Landmark, LockKeyhole, MapPin, Menu, Plane, Rocket, ShieldCheck, UserRoundPlus, Users, WalletCards, X } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { isSupabaseConfigured, supabase } from './lib/supabase';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Solution', href: '#solution' },
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Vision', href: '#vision' },
  { label: 'Join', href: '#join' },
];

const stats = [
  { value: '4 steps', label: 'Account, verification, selection, tracking' },
  { value: 'Real assets', label: 'Property-backed opportunities' },
  { value: 'Global', label: 'Built for local and diaspora investors' },
];

const benefits = [
  { icon: CircleDollarSign, title: 'Accessible investment', description: 'Invest with smaller amounts instead of waiting years to afford a full deposit or entire property.' },
  { icon: Building2, title: 'Real-world assets', description: 'Every opportunity is connected to tangible property, making the investment easier to understand and track.' },
  { icon: ShieldCheck, title: 'Trust-first platform', description: 'Verification, compliance checks, and transparent reporting create a more responsible investor environment.' },
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

const propertyOpportunities = [
  {
    title: 'Doncaster rental apartment',
    location: 'Doncaster, UK',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    status: 'Coming soon',
    target: 'Target raise: to be confirmed',
    income: 'Rental income: projected range pending review',
    progress: 64,
  },
  {
    title: 'Regional family home portfolio',
    location: 'South Yorkshire, UK',
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=80',
    status: 'Under review',
    target: 'Target raise: sample listing',
    income: 'Yield information will be published with risk notes',
    progress: 42,
  },
  {
    title: 'Diaspora gateway property',
    location: 'International pipeline',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    status: 'Research stage',
    target: 'Target raise: not open',
    income: 'Documentation required before investor access',
    progress: 28,
  },
];

const faqs = [
  {
    question: 'Can I invest today?',
    answer: 'Not yet. Changers is currently welcoming early interest while onboarding, compliance, legal structure, and risk disclosures are prepared.',
  },
  {
    question: 'Are returns guaranteed?',
    answer: 'No. Property can rise or fall in value, rental income can vary, and investors may lose money. Changers presents risk information clearly before investment access opens.',
  },
  {
    question: 'How will my information be stored?',
    answer: 'Your information will be stored securely to support onboarding, investor communication, and future platform features. Security, privacy, and controlled access will be built into the platform as it grows.',
  },
  {
    question: 'Why fractional ownership?',
    answer: 'Fractional models can lower the entry barrier by allowing people to participate in property opportunities with smaller ownership portions.',
  },
];

const teamRoles = [
  {
    title: 'Founder and product vision',
    description: 'Leads the mission, investor experience, and long-term direction for inclusive property ownership.',
  },
  {
    title: 'Property operations',
    description: 'Supports sourcing, due diligence coordination, property management standards, and reporting workflows.',
  },
  {
    title: 'Compliance and governance',
    description: 'A dedicated advisory role for financial promotions, risk communication, data protection, and investor safeguards.',
  },
];

function LogoMark() {
  return (
    <span className="logo-mark animated-logo" aria-hidden>
      <span className="logo-block block-one" />
      <span className="logo-block block-two" />
      <span className="logo-block block-three" />
      <span className="logo-block block-four" />
      <span className="logo-block block-five" />
      <span className="logo-growth-line" />
    </span>
  );
}

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Changers home">
      <LogoMark />
      <span>
        <strong>Changers</strong>
        <small>Own property, one block at a time</small>
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
        <a className="header-cta" href="#join">Join the waitlist <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="mobile-cta" href="#join" onClick={() => setOpen(false)}>Join the waitlist <ArrowRight size={16} /></a>
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
          <p className="hero-lede">Changers helps everyday people invest in real property through smaller, transparent ownership portions. No large deposits, no unnecessary barriers - just a clearer route into long-term property wealth.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#join">Join the waitlist <ArrowRight size={17} /></a>
            <a className="secondary-button" href="#how-it-works">See how it works</a>
          </div>
          <p className="hero-disclaimer">A developing property investment platform currently welcoming early interest. No payment is collected at this stage; investment access will follow verification, risk review, and compliance checks.</p>
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div
                className="stat-card"
                key={stat.value}
                style={{ animationDelay: `${450 + index * 140}ms` }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel">
          <img src="/hero-blocks.png" alt="People assembling modular property blocks into a modern building model" />
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

function AboutUs() {
  const [activeCard, setActiveCard] = useState('story');

  const aboutCards = [
    {
      id: 'story',
      icon: FileCheck2,
      title: 'Our Story',
      text: 'Changers was founded to break down the barriers to property ownership and create a fairer, more inclusive way to build generational wealth.',
    },
    {
      id: 'mission',
      icon: Rocket,
      title: 'Our Mission',
      text: 'To democratise property investment by offering simple, transparent, and accessible ownership opportunities one block at a time.',
    },
    {
      id: 'promise',
      icon: ShieldCheck,
      title: 'Our Promise',
      text: 'We are committed to transparency, security, and community so people can invest with confidence and grow with purpose.',
    },
  ];

  const active = aboutCards.find((card) => card.id === activeCard) ?? aboutCards[0];

  return (
    <section className="section about-interactive" id="about">
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-label">About Changers</p>
          <h2>Building property access for everyday people.</h2>
          <p>
            Changers is a community-driven property investment platform that makes real estate
            ownership simple, inclusive, and rewarding. We help everyday investors, young
            professionals, entrepreneurs, and diaspora communities invest in real assets through
            smaller ownership blocks.
          </p>

          <div className="about-tabs" role="tablist" aria-label="About Changers">
            {aboutCards.map((card) => {
              const Icon = card.icon;

              return (
                <button
                  key={card.id}
                  className={activeCard === card.id ? 'about-tab active' : 'about-tab'}
                  onClick={() => setActiveCard(card.id)}
                  type="button"
                  role="tab"
                  aria-selected={activeCard === card.id}
                  aria-controls="about-detail"
                >
                  <Icon size={22} aria-hidden />
                  <span>{card.title}</span>
                </button>
              );
            })}
          </div>

          <div className="about-detail-card" id="about-detail" role="tabpanel">
            <h3>{active.title}</h3>
            <p>{active.text}</p>
          </div>

          <a className="primary-button about-cta" href="#join">
            Join Changers <ArrowRight size={18} />
          </a>
        </div>

        <div className="about-visual-card" aria-label="Property ownership visual">
          <div className="about-building-card">
            <img
              src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80"
              alt="Modern apartment building representing property ownership"
            />
          </div>

          <div className="floating-card floating-card-top">
            <BarChart3 size={24} aria-hidden />
            <strong>Growth-focused</strong>
            <span>Long-term property value</span>
          </div>

          <div className="floating-card floating-card-bottom">
            <ShieldCheck size={24} aria-hidden />
            <strong>Trust-first</strong>
            <span>Verification and transparency</span>
          </div>

          <div className="block-cluster" aria-hidden>
            <span />
            <span />
            <span />
            <span />
            <span />
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
          <h2>Making property ownership possible beyond old barriers.</h2>
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

function PropertyOpportunities() {
  return (
    <section id="opportunities" className="section opportunities-section">
      <div className="section-heading two-col">
        <div>
          <p className="section-label">Sample property opportunities</p>
          <h2>Sample Property Opportunities</h2>
        </div>
        <p>
          These sample cards illustrate the type of property opportunities Changers may feature in
          the future. Live listings will only be published after due diligence, documentation, and
          compliance checks are complete.
        </p>
      </div>

      <div className="property-grid">
        {propertyOpportunities.map((property) => (
          <article className="property-card lift-card" key={property.title}>
            <div className="property-image">
              <img src={property.image} alt={property.title} />
              <span>{property.status}</span>
            </div>
            <div className="property-card-body">
              <p><MapPin size={16} /> {property.location}</p>
              <h3>{property.title}</h3>
              <div className="property-meta">
                <span>{property.target}</span>
                <span>{property.income}</span>
              </div>
              <div className="property-progress" aria-label={`${property.progress}% readiness indicator`}>
                <span style={{ width: `${property.progress}%` }} />
              </div>
              <small>Preview only. Not an offer or invitation to invest.</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section dark-section">
      <div className="section-heading narrow">
        <p className="section-label gold">How It Works</p>
        <h2>Owning property, one block at a time.</h2>
        <p>Changers makes the first experience simple, secure, and beginner-friendly, turning a complex property journey into a clear digital flow.</p>
      </div>
      <div className="timeline-grid">
        {steps.map((step, index) => (
          <article className="step-card timeline-card" key={step.title} style={{ animationDelay: `${index * 130}ms` }}>
            <div className="timeline-card-top">
              <span className="timeline-icon"><step.icon size={24} /></span>
              <span className="timeline-number">0{index + 1}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
      <div className="quote-row">
        <blockquote>"We are building Changers to make property ownership more understandable, transparent, and within reach."<cite>Changers founder statement</cite></blockquote>
        <div className="income-card"><p className="section-label gold">After investing</p><h3>Rental income and appreciation potential.</h3><p>As properties generate rental income, investors may receive distributions based on their ownership share. If property values rise over time, the investor&apos;s share may also grow in value.</p></div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="section faq-section">
      <div className="section-heading two-col">
        <div>
          <p className="section-label">FAQ</p>
          <h2>Clear answers before anyone joins the investor journey.</h2>
        </div>
        <p>
          Changers keeps the investor journey clear from the start. These answers explain the
          platform status, data handling, risk position, and access model.
        </p>
      </div>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <article className="faq-card lift-card" key={faq.question}>
            <HelpCircle size={24} />
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
      <div className="community-strip">
        <blockquote>
          "Changers is building a clearer, safer route into property ownership for everyday people."
          <cite>Changers community vision</cite>
        </blockquote>
      </div>
    </section>
  );
}

function MeetTeam() {
  return (
    <section className="section team-section" id="team">
      <div className="section-heading two-col">
        <div>
          <p className="section-label">Meet the team</p>
          <h2>The people building Changers.</h2>
        </div>
        <p>
          Full team profiles, credentials, and responsibilities will be added as the platform
          develops.
        </p>
      </div>
      <div className="team-grid">
        {teamRoles.map((role) => (
          <article className="team-card lift-card" key={role.title}>
            <div className="team-avatar"><Users size={26} /></div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SecurityRisk() {
  return (
    <section className="section security-section" id="security">
      <div className="security-grid">
        <div>
          <p className="section-label">Security and responsibility</p>
          <h2>Trust comes before transactions.</h2>
          <p>
            Changers builds investor confidence through data protection, clear risk communication,
            and responsible onboarding. Payment collection launches only after the right legal,
            compliance, and financial-promotion review is complete.
          </p>
        </div>
        <div className="security-card-grid">
          <article className="security-card">
            <LockKeyhole size={24} />
            <h3>Secure onboarding</h3>
            <p>Identity checks, investor categorisation, and protected account access come before any investment action.</p>
          </article>
          <article className="security-card">
            <FileCheck2 size={24} />
            <h3>Clear documentation</h3>
            <p>Property details, ownership structure, fees, and reporting stay plain, visible, and easy to compare.</p>
          </article>
          <article className="security-card risk-card">
            <AlertTriangle size={24} />
            <h3>Capital at risk</h3>
            <p>Property investments can fall in value. Returns are not guaranteed, and investors may lose money.</p>
          </article>
          <article className="security-card">
            <ShieldCheck size={24} />
            <h3>Compliance review</h3>
            <p>Investment promotions, payments, and onboarding journeys go through review before public launch.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function VisionJoin() {
  const [joinStatus, setJoinStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleJoinSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (joinStatus === 'loading') return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const lead = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      country: String(formData.get('country') ?? ''),
      investor_type: String(formData.get('investor_type') ?? 'First-time investor'),
      message: String(formData.get('message') ?? ''),
    };

    setJoinStatus('loading');

    if (!isSupabaseConfigured || !supabase) {
      window.setTimeout(() => setJoinStatus('success'), 650);
      return;
    }

    const { error } = await supabase.from('leads').insert(lead);

    if (error) {
      console.error('Lead submission failed', error);
      setJoinStatus('error');
      return;
    }

    form.reset();
    setJoinStatus('success');
  };

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
            <p>Register your interest and become part of a community building long-term financial security through property. Verification, risk information, and onboarding will come before investment access.</p>
            <div className="audience-grid">{audiences.map((audience) => <span key={audience.label}><audience.icon size={20} /> {audience.label}</span>)}</div>
          </div>
          <form className="join-form" onSubmit={handleJoinSubmit}>
            <label>Name<input name="name" placeholder="Your full name" required /></label>
            <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Country of residence<input name="country" placeholder="United Kingdom" required /></label>
            <label>Investor type<select name="investor_type"><option>First-time investor</option><option>Young professional</option><option>Diaspora investor</option><option>Entrepreneur</option></select></label>
            <label className="full-width">Message<textarea name="message" placeholder="Tell us what you want to achieve with property ownership." /></label>
            <button type="submit" disabled={joinStatus === 'loading'}>
              {joinStatus === 'loading' ? <span className="button-spinner" aria-hidden /> : <CheckCircle2 size={17} />}
              {joinStatus === 'success' ? 'Interest received' : joinStatus === 'loading' ? 'Sending securely' : joinStatus === 'error' ? 'Try again' : 'Register your interest'}
              {joinStatus === 'idle' && <ArrowRight size={17} />}
            </button>
            {joinStatus === 'success' && (
              <div className="join-success" role="status">
                <CheckCircle2 size={18} />
                Thanks. Your interest has been received. Secure onboarding comes next.
              </div>
            )}
            {joinStatus === 'error' && (
              <div className="join-error" role="alert">
                <AlertTriangle size={18} />
                We could not save this yet. Please try again or contact the Changers team.
              </div>
            )}
            <p className="join-trust-note">No payment is collected here. Verification, risk information, and compliance checks come before investing.</p>
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
  return <><Header /><main><Hero /><AboutUs /><Solution /><PropertyOpportunities /><HowItWorks /><SecurityRisk /><FAQSection /><MeetTeam /><VisionJoin /></main><Footer /></>;
}
