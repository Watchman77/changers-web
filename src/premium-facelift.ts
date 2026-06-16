const money = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });

function html(strings: TemplateStringsArray, ...values: Array<string | number>) {
  return strings.reduce((output, part, index) => output + part + (values[index] ?? ''), '');
}

function buildPremiumSections() {
  return html`
    <section class="premium-trust-strip" aria-label="Changers trust highlights">
      <div><strong>UK registered</strong><span>Company number 17126553</span></div>
      <div><strong>No payment today</strong><span>Interest-only onboarding</span></div>
      <div><strong>Real-asset focus</strong><span>Property-backed opportunities</span></div>
      <div><strong>Compliance-first</strong><span>KYC, AML and risk review before launch</span></div>
    </section>

    <section class="section premium-calculator-section" id="ownership-calculator">
      <div class="premium-section-heading">
        <p class="section-label">Investment calculator</p>
        <h2>See what fractional ownership could look like.</h2>
        <p>Give visitors an instant, interactive sense of ownership, rental-share thinking, and long-term property access before live investment opens.</p>
      </div>
      <div class="calculator-shell">
        <div class="calculator-card">
          <label for="premium-investment-range">Example investment amount</label>
          <div class="calculator-value" data-investment-value>£5,000</div>
          <input id="premium-investment-range" type="range" min="500" max="50000" step="500" value="5000" />
          <div class="calculator-range-labels"><span>£500</span><span>£50,000</span></div>
          <p class="calculator-disclaimer">Illustrative only. Not investment advice, not a live offer, and returns are not guaranteed.</p>
        </div>
        <div class="calculator-results">
          <article><span>Example property value</span><strong>£250,000</strong></article>
          <article><span>Indicative ownership share</span><strong data-ownership-output>2.00%</strong></article>
          <article><span>Illustrative annual rent share</span><strong data-rent-output>£400</strong></article>
          <article><span>Platform status</span><strong>Waitlist open</strong></article>
        </div>
      </div>
    </section>

    <section class="section premium-dashboard-section" id="premium-dashboard-preview">
      <div class="premium-dashboard-copy">
        <p class="section-label gold">Investor dashboard preview</p>
        <h2>Make the platform feel real before the first property goes live.</h2>
        <p>Future investors should immediately understand that Changers is not just a brochure website. It is becoming a digital investor experience for verification, opportunity review, income reporting and portfolio tracking.</p>
        <a class="primary-button" href="/join">Join the waitlist</a>
      </div>
      <div class="dashboard-mockup" aria-label="Illustrative Changers investor dashboard">
        <div class="mockup-top"><span></span><span></span><span></span></div>
        <div class="mockup-grid">
          <article><small>Portfolio value</small><strong>£12,500</strong><span class="up">+8.4% projected</span></article>
          <article><small>Rental income</small><strong>£74/mo</strong><span>illustrative</span></article>
          <article><small>Ownership blocks</small><strong>25</strong><span>across 2 assets</span></article>
          <article><small>Verification</small><strong>Pending</strong><span>KYC before access</span></article>
        </div>
        <div class="mockup-chart"><span style="height:38%"></span><span style="height:54%"></span><span style="height:42%"></span><span style="height:68%"></span><span style="height:76%"></span><span style="height:88%"></span></div>
      </div>
    </section>

    <section class="section premium-founder-section" id="founder-story">
      <div class="founder-card">
        <div class="founder-avatar">BA</div>
        <div>
          <p class="section-label">Founder story</p>
          <h2>Built for people who want property ownership, but need a fairer entry point.</h2>
          <p>Changers is shaped around a simple belief: property wealth should not be reserved only for people who can afford large deposits from day one. The platform is being built to make the journey clearer, more structured and more inclusive.</p>
          <div class="founder-highlights"><span>Inclusive wealth-building</span><span>Diaspora access</span><span>Trust-first onboarding</span></div>
        </div>
      </div>
    </section>

    <section class="section premium-testimonials-section" id="early-supporters">
      <div class="premium-section-heading narrow">
        <p class="section-label">Early supporter sentiment</p>
        <h2>Speak to the investor dream with confidence.</h2>
      </div>
      <div class="testimonial-grid">
        <article><p>“I want a way to start property ownership without waiting years to save a huge deposit.”</p><strong>Young professional</strong></article>
        <article><p>“As a diaspora investor, transparency and verified reporting are what would make me trust a platform.”</p><strong>Diaspora investor profile</strong></article>
        <article><p>“The dashboard idea makes it easier to understand what I own and how the property is performing.”</p><strong>First-time investor profile</strong></article>
      </div>
    </section>

    <section class="section premium-final-cta" id="premium-final-cta">
      <div>
        <p class="section-label gold">Changers waitlist</p>
        <h2>Property ownership, redesigned for everyday people.</h2>
        <p>Join the early community and receive updates as verification, property opportunities, and investor dashboard features are prepared.</p>
      </div>
      <a class="primary-button" href="/join">Register your interest</a>
    </section>
  `;
}

function applyCalculator() {
  const slider = document.querySelector<HTMLInputElement>('#premium-investment-range');
  const value = document.querySelector<HTMLElement>('[data-investment-value]');
  const ownership = document.querySelector<HTMLElement>('[data-ownership-output]');
  const rent = document.querySelector<HTMLElement>('[data-rent-output]');
  if (!slider || !value || !ownership || !rent) return;

  const update = () => {
    const amount = Number(slider.value);
    const propertyValue = 250000;
    const annualYield = 0.04;
    value.textContent = money.format(amount);
    ownership.textContent = `${((amount / propertyValue) * 100).toFixed(2)}%`;
    rent.textContent = money.format(amount * annualYield);
  };

  slider.addEventListener('input', update);
  update();
}

function mountPremiumFacelift() {
  const heroTitle = document.querySelector<HTMLElement>('.hero h1');
  const heroLede = document.querySelector<HTMLElement>('.hero-lede');
  const hero = document.querySelector<HTMLElement>('.hero');

  if (!hero) return false;

  document.body.classList.add('premium-facelift-active');

  if (heroTitle) heroTitle.textContent = 'Property ownership without the old barriers.';
  if (heroLede) {
    heroLede.textContent = 'Changers is building a premium, trust-first route for everyday and diaspora investors to access real property opportunities through smaller, transparent ownership blocks.';
  }

  if (!document.querySelector('.premium-trust-strip')) {
    hero.insertAdjacentHTML('afterend', buildPremiumSections());
  }

  applyCalculator();
  return true;
}

export function applyPremiumFacelift() {
  const tryMount = () => mountPremiumFacelift();

  tryMount();
  window.setTimeout(tryMount, 100);
  window.setTimeout(tryMount, 500);
  window.setTimeout(tryMount, 1200);

  window.addEventListener('load', tryMount);
  document.addEventListener('DOMContentLoaded', tryMount);

  const observer = new MutationObserver(() => {
    if (!document.querySelector('.premium-trust-strip')) tryMount();
  });

  const root = document.getElementById('root') ?? document.body;
  observer.observe(root, { childList: true, subtree: true });
}
