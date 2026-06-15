import { AlertTriangle, ArrowRight, BadgeCheck, BarChart3, Briefcase, Building2, CheckCircle2, CircleDollarSign, FileCheck2, Globe2, HelpCircle, Home, Landmark, LockKeyhole, MapPin, Menu, MessageCircle, Plane, Rocket, Send, ShieldCheck, UserRoundPlus, Users, WalletCards, X } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { isSupabaseConfigured, supabase } from './lib/supabase';

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Vision', href: '/vision' },
  { label: 'Opportunities', href: '/opportunities' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Join', href: '/join' },
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

const chatPrompts = [
  {
    question: 'Can I invest today?',
    answer: 'Changers is currently welcoming early interest. No payment is collected at this stage, and investment access will only follow verification, risk review, and compliance checks.',
  },
  {
    question: 'How does Changers work?',
    answer: 'Changers is being built around four steps: register interest, complete verification, choose a property opportunity when live, and track performance through clear reporting.',
  },
  {
    question: 'Is my money safe?',
    answer: 'All investment carries risk. Changers is designed around real assets, transparent documentation, secure onboarding, and clear risk information before any investment access opens.',
  },
  {
    question: 'Who is Changers for?',
    answer: 'Changers is built for everyday investors, young professionals, diaspora communities, entrepreneurs, and people looking for a clearer route into property ownership.',
  },
  {
    question: 'How do I join?',
    answer: 'Use the join form to register your interest. The Changers team can then keep you updated as onboarding, property opportunities, and platform features develop.',
  },
];

const services = [
  {
    title: 'Property Investment Opportunities',
    description: 'Access curated property investment opportunities selected for income generation and long-term value.',
  },
  {
    title: 'Fractional Property Ownership',
    description: 'Participate in property ownership through structured fractional investment models.',
  },
  {
    title: 'Property Portfolio Management',
    description: 'Professionally managed property assets focused on operational efficiency and sustainable returns.',
  },
  {
    title: 'Diaspora Investment Solutions',
    description: 'Helping international investors access property opportunities with confidence and transparency.',
  },
  {
    title: 'Technology Infrastructure',
    description: 'Digital investor experiences for secure onboarding, reporting, and investment tracking.',
  },
];

const values = [
  ['Transparency', 'Open communication, clear reporting, and visible investor information.'],
  ['Integrity', 'Responsible operations and professional standards across every stage.'],
  ['Innovation', 'Modern technology that improves the property investment experience.'],
  ['Accessibility', 'Property ownership pathways designed for more people.'],
  ['Long-term thinking', 'Sustainable growth, real assets, and lasting value creation.'],
];

const roadmap = [
  ['Phase 1', 'Company setup, legal structuring, initial property sourcing, and MVP platform development.'],
  ['Phase 2', 'First investor onboarding, initial property acquisition, rental income distribution, and dashboard launch.'],
  ['Phase 3', 'Portfolio expansion, international investor growth, technology enhancement, and marketplace development.'],
  ['Phase 4', 'Global expansion, advanced digital infrastructure, strategic partnerships, and a scalable investment ecosystem.'],
];

const investorTypes = ['Individual Investor', 'Institutional Investor', 'Property Owner', 'Developer', 'Strategic Partner', 'Other'];

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
    <a href="/" className="logo" aria-label="Changers home">
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
        <a className="header-cta" href="/join">Join the waitlist <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="mobile-cta" href="/join" onClick={() => setOpen(false)}>Join the waitlist <ArrowRight size={16} /></a>
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
            <a className="primary-button" href="/join">Join the waitlist <ArrowRight size={17} /></a>
            <a className="secondary-button" href="/how-it-works">See how it works</a>
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

          <a className="primary-button about-cta" href="/join">
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
      message: [
        String(formData.get('message') ?? ''),
        `Phone: ${String(formData.get('phone') ?? 'Not provided')}`,
        `Investment interest: ${String(formData.get('investment_interest') ?? 'Not selected')}`,
        `Investment budget: ${String(formData.get('investment_budget') ?? 'Not selected')}`,
      ].filter(Boolean).join('\n'),
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
            <label>Phone number<input name="phone" type="tel" placeholder="+44 7000 000000" /></label>
            <label>Country of residence<input name="country" placeholder="United Kingdom" required /></label>
            <label>Investor type<select name="investor_type">{investorTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            <label>Investment interest<select name="investment_interest"><option>Residential Properties</option><option>Commercial Properties</option><option>Long-Term Income</option><option>Portfolio Diversification</option><option>Diaspora Investment Opportunities</option></select></label>
            <label>Investment budget<select name="investment_budget"><option>Under £5,000</option><option>£5,000 - £25,000</option><option>£25,000 - £100,000</option><option>£100,000+</option></select></label>
            <label className="full-width">Message<textarea name="message" placeholder="Tell us what you want to achieve with property ownership." /></label>
            <label className="full-width consent-field"><input name="consent" type="checkbox" required /> I agree to receive updates and communications from Changers Ltd.</label>
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

function PageHero({
  label,
  title,
  text,
  image,
  imageAlt,
}: {
  label: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={image ? 'page-hero visual-page-hero' : 'page-hero'}>
      <div className="page-hero-content">
        <div>
          <p className="section-label">{label}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {image && (
          <div className="page-hero-image">
            <img src={image} alt={imageAlt ?? ''} />
          </div>
        )}
      </div>
    </section>
  );
}

function HomePage() {
  return <><Hero /><AboutUs /><Solution /><PropertyOpportunities /><HowItWorks /><SecurityRisk /><FAQSection /><MeetTeam /><VisionJoin /></>;
}

function AboutPage() {
  return (
    <>
      <PageHero
        label="About Changers Ltd"
        title="A UK property investment and technology company."
        text="Changers bridges traditional property investment with modern digital infrastructure, creating transparent and accessible pathways into real estate ownership."
      />
      <AboutUs />
      <section className="section page-section">
        <div className="section-heading two-col">
          <div>
            <p className="section-label">Who we are</p>
            <h2>Real ownership, not hype.</h2>
          </div>
          <p>
            Changers combines real estate expertise, technology infrastructure, fractional ownership
            models, secure investment structures, and long-term wealth creation strategies.
          </p>
        </div>
        <div className="value-grid">
          {values.map(([title, description]) => (
            <article className="value-card lift-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <MeetTeam />
    </>
  );
}

function VisionPage() {
  return (
    <>
      <PageHero
        label="Vision and mission"
        title="A global gateway to property ownership."
        text="Changers exists to make property ownership more inclusive, transparent, liquid, and accessible for local and diaspora investors."
      />
      <section className="section warm-section">
        <div className="two-col">
          <div>
            <p className="section-label">Our vision</p>
            <h2>Property ownership without unnecessary borders.</h2>
          </div>
          <div className="stacked-copy">
            <p>Changers envisions a trusted global ecosystem where high-quality property investments are easier to access without high capital, complex processes, or geographic limitations.</p>
            <ul className="feature-list">
              <li>Property ownership becomes more inclusive.</li>
              <li>Investment opportunities become more transparent.</li>
              <li>Diaspora communities invest across borders with more confidence.</li>
              <li>Technology simplifies the property investment experience.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="two-col">
          <div>
            <p className="section-label">Our mission</p>
            <h2>Making property investment accessible.</h2>
          </div>
          <div className="mission-card">
            <p>Changers simplifies and modernises real estate investment through secure structures, innovative technology, transparent operations, investor communication, and trusted pathways between global markets.</p>
          </div>
        </div>
      </section>
      <section className="section roadmap-section">
        <div className="section-heading narrow">
          <p className="section-label">Roadmap</p>
          <h2>Building in clear phases.</h2>
        </div>
        <div className="roadmap-grid">
          {roadmap.map(([phase, description]) => (
            <article className="roadmap-card lift-card" key={phase}>
              <span>{phase}</span>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function OpportunitiesPage() {
  return (
    <>
      <PageHero
        label="Investment opportunities"
        title="Sample property opportunities for the future platform."
        text="Changers will publish live property opportunities only after due diligence, documentation, compliance review, and risk information are ready."
      />
      <PropertyOpportunities />
      <section className="section page-section">
        <div className="two-col">
          <div>
            <p className="section-label">Investment philosophy</p>
            <h2>Real estate with a long-term perspective.</h2>
          </div>
          <div className="stacked-copy">
            <p>Changers focuses on quality property selection, sustainable rental income, responsible management, strategic growth, and investor confidence.</p>
            <p>Our focus is not short-term speculation. Our focus is long-term value.</p>
          </div>
        </div>
      </section>
      <section className="section dashboard-preview">
        <div className="section-heading two-col">
          <div>
            <p className="section-label">Dashboard preview</p>
            <h2>Track ownership with clear reporting.</h2>
          </div>
          <p>Future investors will be able to monitor portfolio performance, property updates, income reporting, and account progress through a secure digital experience.</p>
        </div>
        <div className="dashboard-grid">
          <span>Portfolio value</span>
          <span>Property updates</span>
          <span>Income reporting</span>
          <span>Verification status</span>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our services"
        title="Modern property investment infrastructure."
        text="Changers is being built to support property investment opportunities, fractional ownership, portfolio management, diaspora access, and secure digital investor experiences."
      />
      <section className="section page-section">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card lift-card" key={service.title}>
              <Building2 size={26} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="How it works"
        title="Simple. Structured. Transparent."
        text="The Changers journey turns property access into a clearer process, from property selection through structuring, participation, reporting, and long-term growth."
        image="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Modern apartment building representing structured property investment"
      />
      <HowItWorks />
      <section className="section page-section">
        <div className="process-grid">
          {['Property Selection', 'Investment Structuring', 'Investor Participation', 'Income Distribution', 'Long-Term Growth'].map((item, index) => (
            <article className="process-card lift-card" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>{[
                'The team identifies and evaluates property opportunities based on location, income potential, and long-term value.',
                'Properties are placed into professionally managed structures designed for investor participation.',
                'Investors participate through fractional ownership or structured investment units when live access opens.',
                'Rental income and performance updates are handled according to the terms of each opportunity.',
                'Investors can benefit from long-term property appreciation and portfolio growth, with capital at risk.',
              ][index]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function TrustPage() {
  return (
    <>
      <PageHero
        label="Compliance and trust"
        title="Built with structure and responsibility."
        text="Changers prioritises investor transparency, proper structures, AML and KYC procedures, data protection, and responsible operational governance."
      />
      <SecurityRisk />
      <section className="section legal-section">
        <div className="section-heading two-col">
          <div>
            <p className="section-label">Legal disclaimer</p>
            <h2>Information first. No investment advice.</h2>
          </div>
          <p>The information on this website is for informational purposes only and does not constitute financial, legal, or investment advice. Investments involve risk, including potential loss of capital. Participation may be subject to eligibility requirements and applicable regulations.</p>
        </div>
      </section>
    </>
  );
}

function FAQPage() {
  return <><PageHero label="FAQ" title="Frequently asked questions." text="Clear answers about Changers, fractional ownership, risk, income, international access, and data handling." /><FAQSection /></>;
}

function JoinPage() {
  return (
    <>
      <PageHero
        label="Join Changers"
        title="Start your ownership journey."
        text="Join the Changers community and register your interest in future property ownership opportunities, investor updates, and platform access."
      />
      <VisionJoin />
      <section className="section membership-section">
        <div className="section-heading two-col">
          <div>
            <p className="section-label">Future membership options</p>
            <h2>Access levels can be introduced when onboarding is ready.</h2>
          </div>
          <p>Membership or onboarding fees are not being collected on this website. Any future fee structure will be introduced with clear terms, eligibility checks, and compliance review.</p>
        </div>
        <div className="membership-grid">
          {[
            ['Standard Membership', 'Investor updates, community membership, and early property notifications.'],
            ['Premium Investor Membership', 'Priority communications, investor webinars, reports, and dedicated support options.'],
            ['Institutional / Strategic Partner Access', 'Custom onboarding, partnership discussions, and tailored investment support.'],
          ].map(([title, description]) => (
            <article className="membership-card lift-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return <><PageHero label="Page not found" title="This Changers page is still being built." text="Return home or join the waitlist to follow the platform as it develops." /><section className="section page-section"><a className="primary-button" href="/">Back to home <ArrowRight size={17} /></a></section></>;
}

function CurrentPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/') return <HomePage />;
  if (path === '/about') return <AboutPage />;
  if (path === '/vision') return <VisionPage />;
  if (path === '/opportunities') return <OpportunitiesPage />;
  if (path === '/how-it-works') return <HowItWorksPage />;
  if (path === '/services') return <ServicesPage />;
  if (path === '/trust') return <TrustPage />;
  if (path === '/faq') return <FAQPage />;
  if (path === '/join') return <JoinPage />;
  return <NotFoundPage />;
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState(chatPrompts[0]);

  return (
    <aside className={isOpen ? 'chatbot open' : 'chatbot'} aria-label="Ask Changers assistant">
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <span>Ask Changers</span>
              <strong>Property questions, simple answers.</strong>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close Ask Changers">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-body">
            <div className="chat-message bot">
              <LogoMark />
              <p>Hi, I can help explain Changers, the waitlist, risks, and how the platform is being prepared.</p>
            </div>

            <div className="chatbot-prompts" aria-label="Quick chatbot questions">
              {chatPrompts.map((prompt) => (
                <button
                  key={prompt.question}
                  type="button"
                  className={activePrompt.question === prompt.question ? 'active' : ''}
                  onClick={() => setActivePrompt(prompt)}
                >
                  {prompt.question}
                </button>
              ))}
            </div>

            <div className="chat-message answer" aria-live="polite">
              <strong>{activePrompt.question}</strong>
              <p>{activePrompt.answer}</p>
            </div>
          </div>

          <div className="chatbot-footer">
            <a href="/join" onClick={() => setIsOpen(false)}>
              Register your interest <ArrowRight size={16} />
            </a>
            <p>No payments are collected through this assistant.</p>
          </div>
        </div>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? 'Close Ask Changers' : 'Open Ask Changers'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        <span>{isOpen ? 'Close' : 'Ask Changers'}</span>
        {!isOpen && <Send size={16} />}
      </button>
    </aside>
  );
}

function Footer() {
  return <footer className="footer"><Logo /><nav>{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}<a href="/trust">Trust</a></nav><p>© 2026 Changers</p></footer>;
}

export default function App() {
  return <><Header /><main><CurrentPage /></main><Chatbot /><Footer /></>;
}
