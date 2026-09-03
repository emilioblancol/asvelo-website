(function () {
  'use strict';

  function t(key) { return window.ASVELO_I18N ? window.ASVELO_I18N.t(key) : key; }

  /* ==========================================================================
     CONFIG — questions, options, and tier rules in one place.
     Edit pricing/copy here; the rendering code below never hardcodes copy or
     thresholds. Mirrors docs/pricing-tiers.md.
     ========================================================================== */
  var QUESTIONS = [
    {
      id: 'locations',
      type: 'single',
      textKey: 'est.q1.text',
      microKey: 'est.q1.micro',
      options: [
        { value: 'one', labelKey: 'est.q1.opt1' },
        { value: 'few', labelKey: 'est.q1.opt2' },
        { value: 'many', labelKey: 'est.q1.opt3' }
      ]
    },
    {
      id: 'contacts',
      type: 'single',
      textKey: 'est.q2.text',
      microKey: 'est.q2.micro',
      options: [
        { value: 'low', labelKey: 'est.q2.opt1' },
        { value: 'mid', labelKey: 'est.q2.opt2' },
        { value: 'high', labelKey: 'est.q2.opt3' },
        { value: 'unsure', labelKey: 'est.q2.opt4' }
      ]
    },
    {
      id: 'scope',
      type: 'multi',
      textKey: 'est.q3.text',
      microKey: 'est.q3.micro',
      allValue: 'full_cycle',
      allNoteKey: 'est.q3.allNote',
      options: [
        { value: 'leads', labelKey: 'est.q3.opt1' },
        { value: 'appointments', labelKey: 'est.q3.opt2' },
        { value: 'winback', labelKey: 'est.q3.opt3' },
        { value: 'reviews', labelKey: 'est.q3.opt4' },
        { value: 'full_cycle', labelKey: 'est.q3.opt5' }
      ]
    }
  ];

  /* Deterministic recommendation. Locations decide scale first (2+ units
     always means replicated workflows, i.e. Premium/Multisede) — everything
     else only matters within a single location, deciding Essential vs
     Growth. "Unsure" contact count never blocks a result; it just doesn't
     count toward the Growth threshold on its own. */
  function computeTier(answers) {
    var locations = answers.locations;
    var contacts = answers.contacts;
    var scope = answers.scope || [];
    var fullCycle = scope.indexOf('full_cycle') !== -1;
    var scopeCount = fullCycle ? 5 : scope.length;

    if (locations === 'few' || locations === 'many') {
      return { tier: 'premium', locations: locations };
    }
    var needsGrowth = fullCycle || scopeCount >= 2 || contacts === 'mid' || contacts === 'high';
    return { tier: needsGrowth ? 'growth' : 'starter' };
  }

  function priceFor(result) {
    if (result.tier === 'starter') return t('est.result.price.starter');
    if (result.tier === 'growth') return t('est.result.price.growth');
    return t('est.result.price.premium');
  }

  function bulletKeys(answers, result) {
    var keys = [];
    if (answers.locations) keys.push('est.result.bullet.loc.' + answers.locations);
    if (answers.contacts) keys.push('est.result.bullet.contacts.' + answers.contacts);
    var scope = answers.scope || [];
    var wide = scope.indexOf('full_cycle') !== -1 || scope.length >= 2;
    keys.push(wide ? 'est.result.bullet.scope.wide' : 'est.result.bullet.scope.narrow');
    if (result.tier !== 'starter') keys.push('est.result.bullet.extra');
    return keys;
  }

  /* ==========================================================================
     RENDERING / STATE — reads QUESTIONS above, never hardcodes a question.
     ========================================================================== */
  var root = document.getElementById('estimator');
  if (!root) return; // not on this page

  var estCard = document.getElementById('estCard');
  var estBack = document.getElementById('estBack');
  var progressFill = document.getElementById('estProgressFill');
  var stepLabel = document.getElementById('estStepLabel');
  var ctaHref = root.getAttribute('data-cta-href') || 'reactivar.html';
  var TOTAL = QUESTIONS.length;

  var current = 0;
  var history = [];
  var answers = {};
  var started = false;

  function dispatch(name, detail) {
    document.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
  }

  function renderStepLabel() {
    var shown = Math.min(current + 1, TOTAL);
    stepLabel.textContent = t('est.stepPrefix') + ' ' + shown + ' ' + t('diag.questionJoin') + ' ' + TOTAL;
  }

  function toggleAnswer(q, value) {
    if (q.type === 'multi') {
      var arr = (answers[q.id] || []).slice();
      if (value === q.allValue) {
        arr = arr.indexOf(q.allValue) !== -1 ? [] : [q.allValue];
      } else {
        arr = arr.filter(function (v) { return v !== q.allValue; });
        var idx = arr.indexOf(value);
        if (idx === -1) arr.push(value); else arr.splice(idx, 1);
      }
      answers[q.id] = arr;
    } else {
      answers[q.id] = value;
    }
  }

  function hasAnswer(q) {
    var v = answers[q.id];
    return q.type === 'multi' ? !!(v && v.length) : !!v;
  }

  function renderQuestion(index) {
    var q = QUESTIONS[index];
    var wrap = document.createElement('div');
    wrap.className = 'diag-step is-active';

    var h = document.createElement('h3');
    h.className = 'diag-q';
    h.textContent = t(q.textKey);
    wrap.appendChild(h);

    var micro = document.createElement('p');
    micro.className = 'muted-lead';
    micro.style.marginBottom = '20px';
    micro.textContent = t(q.microKey);
    wrap.appendChild(micro);

    var optsWrap = document.createElement('div');
    optsWrap.className = 'diag-options';
    q.options.forEach(function (opt) {
      var selected = q.type === 'multi'
        ? (answers[q.id] || []).indexOf(opt.value) !== -1
        : answers[q.id] === opt.value;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'diag-opt est-opt' + (q.type === 'multi' ? ' is-multi' : '') + (selected ? ' is-selected' : '');
      btn.setAttribute('data-value', opt.value);
      btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
      btn.textContent = t(opt.labelKey);
      optsWrap.appendChild(btn);
    });
    wrap.appendChild(optsWrap);

    if (q.type === 'multi' && (answers[q.id] || []).indexOf(q.allValue) !== -1) {
      var note = document.createElement('p');
      note.className = 'est-allnote';
      note.textContent = t(q.allNoteKey);
      wrap.appendChild(note);
    }

    var controls = document.createElement('div');
    controls.className = 'est-controls';
    var continueBtn = document.createElement('button');
    continueBtn.type = 'button';
    continueBtn.id = 'estContinue';
    continueBtn.className = 'btn btn-primary';
    continueBtn.textContent = t('est.continue');
    if (!hasAnswer(q)) continueBtn.disabled = true;
    controls.appendChild(continueBtn);
    wrap.appendChild(controls);

    return wrap;
  }

  function renderResult() {
    var result = computeTier(answers);
    var wrap = document.createElement('div');
    wrap.className = 'est-result diag-reveal';

    var eyebrow = document.createElement('div');
    eyebrow.className = 'eyebrow center';
    var dot = document.createElement('span');
    dot.className = 'dot';
    var eyebrowText = document.createElement('span');
    eyebrowText.textContent = t('est.result.eyebrow');
    eyebrow.appendChild(dot);
    eyebrow.appendChild(eyebrowText);
    wrap.appendChild(eyebrow);

    var tierName = document.createElement('h3');
    tierName.className = 'est-result-tier';
    tierName.setAttribute('tabindex', '-1');
    tierName.textContent = t('est.result.tier.' + result.tier);
    wrap.appendChild(tierName);

    var price = document.createElement('div');
    price.className = 'est-result-price';
    price.textContent = priceFor(result);
    wrap.appendChild(price);

    if (result.tier === 'growth') {
      var badge = document.createElement('p');
      badge.className = 'est-result-badge';
      badge.textContent = t('est.result.growthBadge');
      wrap.appendChild(badge);
    }
    if (result.tier === 'premium' && result.locations === 'many') {
      var scopeNote = document.createElement('p');
      scopeNote.className = 'est-result-badge';
      scopeNote.textContent = t('est.result.price.premium.note');
      wrap.appendChild(scopeNote);
    }

    var desc = document.createElement('p');
    desc.className = 'est-result-desc';
    desc.textContent = t('est.result.desc.' + result.tier);
    wrap.appendChild(desc);

    var why = document.createElement('div');
    why.className = 'est-why';
    var whyTitle = document.createElement('h3');
    whyTitle.textContent = t('est.result.whyTitle');
    why.appendChild(whyTitle);
    var ul = document.createElement('ul');
    ul.className = 'trust-list';
    bulletKeys(answers, result).forEach(function (key) {
      var li = document.createElement('li');
      li.textContent = t(key);
      ul.appendChild(li);
    });
    why.appendChild(ul);
    wrap.appendChild(why);

    if (answers.contacts === 'unsure') {
      var unsureP = document.createElement('p');
      unsureP.className = 'est-disclaimer';
      unsureP.textContent = t('est.result.unsureNote');
      wrap.appendChild(unsureP);
    }

    var trust = document.createElement('p');
    trust.className = 'est-trust';
    trust.textContent = t('est.result.trust');
    wrap.appendChild(trust);

    var disclaimer = document.createElement('p');
    disclaimer.className = 'est-disclaimer';
    disclaimer.textContent = t('est.result.disclaimer');
    wrap.appendChild(disclaimer);

    var ctaWrap = document.createElement('div');
    ctaWrap.className = 'est-result-cta';
    var cta = document.createElement('a');
    cta.href = ctaHref;
    cta.className = 'btn btn-primary btn-lg';
    cta.setAttribute('data-pricing-cta', 'estimator_result');
    cta.textContent = t('est.result.cta');
    ctaWrap.appendChild(cta);

    var recalcBtn = document.createElement('button');
    recalcBtn.type = 'button';
    recalcBtn.className = 'est-recalc';
    recalcBtn.textContent = t('est.result.recalc');
    recalcBtn.addEventListener('click', recalc);
    ctaWrap.appendChild(recalcBtn);

    wrap.appendChild(ctaWrap);

    dispatch('pricing_estimator_completed', { tier: result.tier, answers: JSON.parse(JSON.stringify(answers)) });

    return wrap;
  }

  function render(moveFocusToHeading) {
    estCard.innerHTML = '';
    if (current < TOTAL) {
      estCard.appendChild(renderQuestion(current));
      progressFill.style.width = ((current + 1) / TOTAL) * 100 + '%';
      renderStepLabel();
      if (estBack) estBack.hidden = history.length === 0;
      if (moveFocusToHeading) {
        var qHeading = estCard.querySelector('.diag-q');
        if (qHeading) { qHeading.setAttribute('tabindex', '-1'); qHeading.focus(); }
      }
    } else {
      estCard.appendChild(renderResult());
      progressFill.style.width = '100%';
      if (stepLabel) stepLabel.textContent = '';
      if (estBack) estBack.hidden = true;
      var focusTarget = estCard.querySelector('.est-result-tier');
      if (focusTarget) focusTarget.focus();
    }
  }

  function goForward() {
    dispatch('pricing_estimator_step_completed', { step: current + 1, questionId: QUESTIONS[current].id, answer: answers[QUESTIONS[current].id] });
    history.push(current);
    current += 1;
    render(true);
  }

  function goBack() {
    if (!history.length) return;
    current = history.pop();
    render(true);
  }

  function recalc() {
    answers = {};
    history = [];
    current = 0;
    started = false;
    dispatch('pricing_estimator_recalculated', {});
    render(true);
  }

  estCard.addEventListener('click', function (e) {
    var opt = e.target.closest('.diag-opt');
    if (opt) {
      if (!started) { started = true; dispatch('pricing_estimator_started', {}); }
      var q = QUESTIONS[current];
      var value = opt.getAttribute('data-value');
      toggleAnswer(q, value);
      render();
      /* Rebuilding the card destroys the clicked button, which would drop
         keyboard focus to <body>. Multi-select: keep focus on the same
         option so the user can keep toggling siblings. Single-select:
         move focus to Continue, the natural next action. */
      if (q.type === 'multi') {
        var same = estCard.querySelector('.diag-opt[data-value="' + value + '"]');
        if (same) same.focus();
      } else {
        var continueEl = estCard.querySelector('#estContinue');
        if (continueEl) continueEl.focus();
      }
      return;
    }
    var continueBtn = e.target.closest('#estContinue');
    if (continueBtn && !continueBtn.disabled) goForward();
  });

  if (estBack) estBack.addEventListener('click', goBack);

  /* Any element on the page can opt into CTA tracking with this attribute —
     used by both the estimator result CTA and the page's static CTAs. */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-pricing-cta]');
    if (el) dispatch('pricing_cta_clicked', { source: el.getAttribute('data-pricing-cta') });
  });

  var heroCta = document.getElementById('pricingHeroCta');
  if (heroCta) {
    heroCta.addEventListener('click', function (e) {
      e.preventDefault();
      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      root.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      var firstOpt = estCard.querySelector('.diag-opt');
      if (firstOpt) firstOpt.focus({ preventScroll: true });
    });
  }

  document.addEventListener('asvelo:langchange', function () { render(false); });

  render();
})();
