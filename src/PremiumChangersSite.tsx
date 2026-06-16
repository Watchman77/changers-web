import './PremiumChangersSite.css'

const trustItems = [
  ['UK registered', 'Company number 17126553'],
  ['No payment today', 'Interest-only onboarding before launch'],
  ['Real-asset focused', 'Built around tangible property opportunities'],
  ['Compliance-first', 'KYC, AML and risk review before access'],
]

const propertyCards = [
  ['Doncaster rental apartment', 'Doncaster, UK', '64%', 'Coming soon'],
  ['Regional family home portfolio', 'South Yorkshire, UK', '42%', 'Under review'],
  ['Diaspora gateway property', 'International pipeline', '28%', 'Research stage'],
]

export default function PremiumChangersSite() {
  return (
    <main className="premium-site">
      <header className="premium-nav">
        <a className="premium-brand" href="/">
          <span className="premium-brand-mark">C</span>
          <span><strong>Changers</strong><small>Own property, one block at a time</small></span>
        </a>
        <nav>
          <a href="#opportunities">Opportunities</a>
          <a href="#calculator">Calculator</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#trust">Trust</a>
        </nav>
        <a className="premium-nav-cta" href="/join">Join waitlist</a>
      </header>

      <section className="premium-hero">
        <div className="premium-hero-copy">
          <p className="premium-eyebrow">Fractional property ownership</p>
          <h1>Property ownership without the old barriers.</h1>
          <p>Changers is building a premium, trust-first route for everyday and diaspora investors to access real property opportunities through smaller, transparent ownership blocks.</p>
          <div className="premium-actions">
            <a className="premium-primary" href="/join">Register your interest</a>
            <a className="premium-secondary" href="#calculator">Explore ownership</a>
          </div>
        </div>
        <div className="premium-hero-visual" aria-label="Premium property dashboard visual">
          <div className="visual-card large"><span>Portfolio value</span><strong>£12,500</strong><small>illustrative preview</small></div>
          <div className="visual-card"><span>Rental share</span><strong>£74/mo</strong></div>
          <div className="visual-card"><span>Blocks owned</span><strong>25</strong></div>
          <div className="visual-bars"><i /><i /><i /><i /><i /><i /></div>
        </div>
      </section>

      <section className="premium-trust-strip">
        {trustItems.map(([title, text]) => <article key={title}><strong>{title}</strong><span>{text}</span></article>)}
      </section>

      <section className="premium-section premium-intro">
        <p className="premium-label">Why Changers</p>
        <h2>A modern property platform for people who want to start smaller, learn clearly and grow responsibly.</h2>
        <div className="premium-feature-grid">
          <article><h3>Lower entry point</h3><p>Designed for investors who want property access without needing the full deposit for an entire property.</p></article>
          <article><h3>Transparent reporting</h3><p>Built around clear updates, ownership records, risk information and portfolio visibility.</p></article>
          <article><h3>Diaspora ready</h3><p>Structured for local and international investors who need trust, clarity and simple onboarding.</p></article>
        </div>
      </section>

      <section className="premium-section premium-opportunities" id="opportunities">
        <div className="premium-section-head"><p className="premium-label">Sample opportunities</p><h2>Make the investment journey feel tangible.</h2></div>
        <div className="premium-property-grid">
          {propertyCards.map(([title, location, progress, status]) => (
            <article className="premium-property" key={title}>
              <div className="property-image"><span>{status}</span></div>
              <p>{location}</p><h3>{title}</h3>
              <div className="property-meter"><span style={{ width: progress }} /></div>
              <small>Preview only. Not an offer or invitation to invest.</small>
            </article>
          ))}
        </div>
      </section>

      <section className="premium-section premium-calculator" id="calculator">
        <div><p className="premium-label">Investment calculator</p><h2>See what fractional ownership could look like.</h2><p>Example: a £5,000 interest in a £250,000 property could represent 2% indicative ownership before costs, terms and risk checks.</p></div>
        <div className="calc-box"><strong>£5,000</strong><span>Indicative share: 2.00%</span><span>Illustrative annual rent share: £400</span><small>Illustrative only. Returns are not guaranteed.</small></div>
      </section>

      <section className="premium-section premium-dashboard" id="dashboard">
        <div><p className="premium-label gold">Investor dashboard</p><h2>A real platform experience, not just a brochure.</h2><p>Future investors can track verification, property blocks, income reporting and portfolio performance from one secure dashboard.</p></div>
        <div className="dashboard-preview"><article><span>Verification</span><strong>Pending</strong></article><article><span>Portfolio</span><strong>2 assets</strong></article><article><span>Income</span><strong>Monthly</strong></article><article><span>Updates</span><strong>Live feed</strong></article></div>
      </section>

      <section className="premium-section premium-founder">
        <div className="founder-badge">BA</div>
        <div><p className="premium-label">Founder story</p><h2>Built for people who want property ownership, but need a fairer entry point.</h2><p>Changers is shaped around a simple belief: property wealth should not be reserved only for people who can afford large deposits from day one.</p></div>
      </section>

      <section className="premium-section premium-testimonials">
        <p className="premium-label">Early supporter sentiment</p><h2>Speak to the investor dream with confidence.</h2>
        <div className="testimonial-grid"><article>“I want to start property ownership without waiting years to save a huge deposit.”</article><article>“As a diaspora investor, transparency and verified reporting matter most.”</article><article>“The dashboard makes it easier to understand what I own.”</article></div>
      </section>

      <section className="premium-final" id="trust">
        <div><p className="premium-label gold">Changers waitlist</p><h2>Property ownership, redesigned for everyday people.</h2><p>No payment is collected today. Investment access will follow verification, risk review and compliance checks.</p></div>
        <a className="premium-primary" href="/join">Join the waitlist</a>
      </section>
    </main>
  )
}
