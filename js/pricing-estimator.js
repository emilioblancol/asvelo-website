(function () {
  'use strict';

  /* Any element on the page can opt into CTA tracking with this attribute. */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-pricing-cta]');
    if (el) document.dispatchEvent(new CustomEvent('pricing_cta_clicked', { detail: { source: el.getAttribute('data-pricing-cta') } }));
  });
})();

(function () {
  'use strict';

  /* ==========================================================================
     QUALIFYING CALCULATOR — six questions → one of the three statuses in
     docs/free-reactivation-qualification.md ("Quiz output"), plus a
     recoverable-value range for anyone not disqualified.
     Gates mirror that doc and js/reactivar.js's DIAG_PERSONA_ORDER: a hard
     fail ends the quiz early (nothing later can change the outcome); soft
     flags collect into the conditional checklist.
     Value = contacts × 3% × ticket, ±20%. Each band uses its floor, so
     500–1,000 contacts × MXN 2,000–5,000 reproduces the doc's
     500 × 3% × 2,000 = MXN 30,000 example — which is also the minimum: any
     lower point estimate is rejected as 'low_value'. Point estimates above
     MAX_VALUE are capped so big-base × big-ticket answers stay credible.
     ========================================================================== */
  var MIN_VALUE = 30000;
  var MAX_VALUE = 300000;

  var QUESTIONS = [
    { id: 'crm', options: [
      { value: 'crm' },
      { value: 'sheet', flag: 'loose' },
      { value: 'whatsapp', flag: 'loose' },
      { value: 'none', fail: 'no_list' }
    ] },
    { id: 'contacts', options: [
      { value: 'lt300', fail: 'below_floor' },
      { value: '300', n: 300 },
      { value: '500', n: 500 },
      { value: '1000', n: 1000 },
      { value: '2000', n: 2000 }
    ] },
    { id: 'source', options: [
      { value: 'recent' },
      { value: 'mid' },
      { value: 'old', flag: 'stale' },
      { value: 'purchased', fail: 'purchased_list' },
      { value: 'unsure', flag: 'unsure_age' }
    ] },
    { id: 'ticket', options: [
      { value: 'lt1000', n: 500, flag: 'low_ticket' },
      { value: '1000', n: 1000, flag: 'low_ticket' },
      { value: '2000', n: 2000 },
      { value: '5000', n: 5000 },
      { value: '10000', n: 10000 },
      { value: '25000', n: 25000 }
    ] },
    { id: 'capacity', options: [
      { value: 'yes' },
      { value: 'adjust', flag: 'capacity' },
      { value: 'no', fail: 'saturated' }
    ] },
    { id: 'response', options: [
      { value: 'always' },
      { value: 'sometimes', flag: 'response' },
      { value: 'no', fail: 'slow_response' }
    ] }
  ];

  var root = document.getElementById('calc');
  if (!root) return;

  function t(key) { return window.ASVELO_I18N.t(key); }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function formatMXN(n) {
    return '$' + (Math.round(n / 500) * 500).toLocaleString('en-US');
  }

  var card = document.getElementById('calcCard');
  var back = document.getElementById('calcBack');
  var progressFill = document.getElementById('calcProgressFill');
  var stepLabel = document.getElementById('calcStepLabel');
  var TOTAL = QUESTIONS.length;
  var current = 0;
  var history = [];
  var answers = {};

  function renderQuestion(q) {
    var wrap = el('div', 'diag-step is-active');
    wrap.appendChild(el('h3', 'diag-q', t('calc.' + q.id)));
    var opts = el('div', 'diag-options');
    q.options.forEach(function (opt, i) {
      var btn = el('button', 'diag-opt' + (answers[q.id] === opt ? ' is-selected' : ''), t('calc.' + q.id + '.' + opt.value));
      btn.type = 'button';
      btn.setAttribute('data-index', i);
      opts.appendChild(btn);
    });
    wrap.appendChild(opts);
    return wrap;
  }

  function evaluate() {
    var fail = null;
    var flags = [];
    var point = null;
    QUESTIONS.forEach(function (q) {
      var a = answers[q.id];
      if (!a) return;
      if (a.fail) fail = a.fail;
      if (a.flag && flags.indexOf(a.flag) === -1) flags.push(a.flag);
    });
    if (!fail && answers.contacts && answers.ticket) {
      point = answers.contacts.n * 0.03 * answers.ticket.n;
      if (point < MIN_VALUE) fail = 'low_value';
    }
    return { fail: fail, flags: flags, point: point };
  }

  function renderResult() {
    var r = evaluate();
    var fail = r.fail;
    var flags = r.flags;
    var status = fail ? 'fail' : (flags.length ? 'conditional' : 'prequalified');

    var wrap = el('div', 'est-result diag-reveal');
    var eyebrow = el('div', 'eyebrow center');
    eyebrow.appendChild(el('span', 'dot'));
    eyebrow.appendChild(el('span', '', t('calc.status.' + status)));
    wrap.appendChild(eyebrow);
    wrap.appendChild(el('h3', 'diag-q', t(fail ? 'calc.fail.' + fail + '.title' : 'calc.' + status + '.title')));

    if (fail) {
      wrap.appendChild(el('p', 'est-result-desc', t('calc.fail.' + fail + '.body')));
    } else {
      var capped = r.point > MAX_VALUE;
      var point = Math.min(r.point, MAX_VALUE);
      wrap.appendChild(el('div', 'diag-reveal-number', 'MXN\u00a0' + formatMXN(point * 0.8) + ' \u2013\u00a0' + formatMXN(point * 1.2)));
      wrap.appendChild(el('p', 'diag-reveal-note', t('calc.result.note') + (capped ? ' ' + t('calc.result.capNote') : '')));
      wrap.appendChild(el('p', 'est-result-price', t('calc.result.offer')));
      wrap.appendChild(el('p', 'est-result-badge', t('calc.result.offerNote')));
      if (status === 'prequalified') wrap.appendChild(el('p', 'est-result-desc', t('calc.prequalified.body')));
      flags.forEach(function (f) { wrap.appendChild(el('div', 'est-trust', t('calc.flag.' + f))); });
    }

    var ctaWrap = el('div', 'est-result-cta');
    var cta = el('a', 'btn btn-primary', t('calc.cta.' + status));
    cta.href = root.getAttribute('data-cta-href');
    /* Qualified results pre-fill the message with the top of the range shown,
       so each lead arrives already segmented by estimated value. */
    if (!fail) cta.href = cta.href.split('?')[0] + '?text=' + encodeURIComponent(t('calc.waMessage').replace('{amount}', 'MXN ' + formatMXN(point * 1.2)));
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.setAttribute('data-pricing-cta', 'calculator_' + status);
    ctaWrap.appendChild(cta);
    var recalc = el('button', 'est-recalc', t('calc.recalc'));
    recalc.type = 'button';
    recalc.addEventListener('click', function () {
      answers = {};
      history = [];
      current = 0;
      render(true);
    });
    ctaWrap.appendChild(recalc);
    wrap.appendChild(ctaWrap);
    return wrap;
  }

  function render(moveFocus) {
    card.innerHTML = '';
    var done = current >= TOTAL;
    card.appendChild(done ? renderResult() : renderQuestion(QUESTIONS[current]));
    progressFill.style.width = (done ? 100 : ((current + 1) / TOTAL) * 100) + '%';
    stepLabel.textContent = done ? '' : t('diag.questionPrefix') + ' ' + (current + 1) + ' ' + t('diag.questionJoin') + ' ' + TOTAL;
    back.hidden = done || history.length === 0;
    if (moveFocus) {
      var heading = card.querySelector('.diag-q');
      heading.setAttribute('tabindex', '-1');
      heading.focus();
    }
  }

  card.addEventListener('click', function (e) {
    var btn = e.target.closest('.diag-opt');
    if (!btn) return;
    var opt = QUESTIONS[current].options[btn.getAttribute('data-index')];
    answers[QUESTIONS[current].id] = opt;
    QUESTIONS.slice(current + 1).forEach(function (q) { delete answers[q.id]; });
    history.push(current);
    current = evaluate().fail ? TOTAL : current + 1;
    render(true);
  });

  back.addEventListener('click', function () {
    if (!history.length) return;
    current = history.pop();
    render(true);
  });

  document.addEventListener('asvelo:langchange', function () { render(false); });

  render(false);
})();
