(function () {
  'use strict';

  function t(key) { return window.ASVELO_I18N.t(key); }
  function lang() { return window.ASVELO_I18N.getLang(); }

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById('navBurger');
  var navMobile = document.getElementById('navMobile');
  if (burger && navMobile) {
    burger.addEventListener('click', function () {
      var isOpen = navMobile.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', isOpen);
    });
    navMobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navMobile.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Live demo widget ---------- */
  var micBtn = document.getElementById('micBtn');
  var volumeBars = document.getElementById('volumeBars');
  var statusText = document.getElementById('demoStatusText');
  var timerEl = document.getElementById('demoTimer');
  var isPlaying = false;

  if (micBtn) {
    var demoInterval = null;
    var demoSeconds = 0;

    function formatTime(s) {
      var m = Math.floor(s / 60);
      var sec = s % 60;
      return (m < 10 ? '0' + m : m) + ':' + (sec < 10 ? '0' + sec : sec);
    }

    function stopDemo() {
      isPlaying = false;
      clearInterval(demoInterval);
      micBtn.classList.remove('is-active');
      volumeBars.classList.remove('is-active');
      statusText.textContent = t('demo.status.ready');
      demoSeconds = 0;
      timerEl.textContent = '00:00';
    }

    micBtn.addEventListener('click', function () {
      if (isPlaying) { stopDemo(); return; }
      isPlaying = true;
      micBtn.classList.add('is-active');
      volumeBars.classList.add('is-active');
      statusText.textContent = t('demo.status.connecting');
      setTimeout(function () {
        if (!isPlaying) return;
        statusText.textContent = t('demo.status.connected');
      }, 900);
      demoInterval = setInterval(function () {
        demoSeconds++;
        timerEl.textContent = formatTime(demoSeconds);
        if (demoSeconds >= 18) stopDemo();
      }, 1000);
    });
  }

  /* ---------- How We Work: timeline <-> panel sync ---------- */
  var howSteps = Array.prototype.slice.call(document.querySelectorAll('.how-step'));
  var howCounter = document.getElementById('howCounter');
  var howHeadline = document.getElementById('howHeadline');
  var howLog = document.getElementById('howLog');
  var howPrev = document.getElementById('howPrev');
  var howNext = document.getElementById('howNext');
  var howActive = 0;

  function setHowStep(i) {
    if (i < 0 || i >= howSteps.length) return;
    howActive = i;
    howSteps.forEach(function (s, idx) { s.classList.toggle('is-active', idx === i); });
    renderHowPanel();
  }

  function renderHowPanel() {
    var titleEl = howSteps[howActive].querySelector('.how-pill-bottom h4');
    var logLines = window.ASVELO_I18N.dict[lang()].howSteps[howActive].log;
    howCounter.textContent = t('how.counterPrefix') + ' 0' + (howActive + 1) + ' / 0' + howSteps.length;
    howHeadline.textContent = titleEl ? titleEl.textContent : '';
    howLog.innerHTML = logLines.map(function (line) {
      return '<li><span class="log-dot"></span>' + line + '</li>';
    }).join('');
  }

  howSteps.forEach(function (step, idx) {
    step.addEventListener('click', function () { setHowStep(idx); });
  });
  if (howPrev) howPrev.addEventListener('click', function () { setHowStep((howActive - 1 + howSteps.length) % howSteps.length); });
  if (howNext) howNext.addEventListener('click', function () { setHowStep((howActive + 1) % howSteps.length); });

  /* ---------- Coverage: search + filter ---------- */
  var coverageSearch = document.getElementById('coverageSearch');
  var filterPills = document.getElementById('filterPills');
  var coverageItems = Array.prototype.slice.call(document.querySelectorAll('.coverage-item'));
  var coverageEmpty = document.getElementById('coverageEmpty');
  var activeFilter = 'all';

  function applyCoverageFilter() {
    var query = (coverageSearch && coverageSearch.value || '').trim().toLowerCase();
    var visibleCount = 0;
    coverageItems.forEach(function (item) {
      var matchesFilter = activeFilter === 'all' || item.dataset.cat === activeFilter;
      var titleText = item.querySelector('h4').textContent.toLowerCase();
      var matchesSearch = !query || titleText.indexOf(query) !== -1;
      var show = matchesFilter && matchesSearch;
      item.classList.toggle('is-hidden', !show);
      if (show) visibleCount++;
    });
    if (coverageEmpty) coverageEmpty.hidden = visibleCount !== 0;
  }

  if (coverageSearch) coverageSearch.addEventListener('input', applyCoverageFilter);
  if (filterPills) {
    filterPills.addEventListener('click', function (e) {
      var btn = e.target.closest('.pill');
      if (!btn) return;
      filterPills.querySelectorAll('.pill').forEach(function (p) { p.classList.remove('is-active'); });
      btn.classList.add('is-active');
      activeFilter = btn.dataset.filter;
      applyCoverageFilter();
    });
  }

  /* ---------- FAQ accordion ---------- */
  var accordion = document.getElementById('accordion');
  if (accordion) {
    accordion.addEventListener('click', function (e) {
      var head = e.target.closest('.acc-head');
      if (!head) return;
      var item = head.closest('.acc-item');
      var wasOpen = item.classList.contains('is-open');
      accordion.querySelectorAll('.acc-item').forEach(function (i) { i.classList.remove('is-open'); });
      if (!wasOpen) item.classList.add('is-open');
    });
  }

  /* ---------- Diagnostic quiz ---------- */
  var diagSteps = Array.prototype.slice.call(document.querySelectorAll('.diag-step'));
  var diagProgressFill = document.getElementById('diagProgressFill');
  var diagStepLabel = document.getElementById('diagStepLabel');
  var diagCard = document.getElementById('diagCard');
  var totalQuestions = 8;
  var diagActive = 0;
  var diagState = {};

  function renderDiagLabel() {
    if (diagActive < totalQuestions) {
      diagStepLabel.textContent = t('diag.questionPrefix') + ' ' + (diagActive + 1) + ' ' + t('diag.questionJoin') + ' ' + totalQuestions;
    }
  }

  function formatMXN(n) {
    return 'MXN $' + Math.round(n).toLocaleString('en-US');
  }

  function renderDiagReveal() {
    var headlineEl = document.getElementById('diagRevealHeadline');
    var numberEl = document.getElementById('diagRevealNumber');
    var noteEl = document.getElementById('diagRevealNote');
    if (!headlineEl) return;

    if (diagState.crmFlag === 'nocrm') {
      headlineEl.textContent = t('diag.reveal.nocrm.headline');
      numberEl.innerHTML = '—';
      noteEl.textContent = t('diag.reveal.nocrm.note');
      return;
    }
    if (diagState.sourceFlag === 'disqualify') {
      headlineEl.textContent = t('diag.reveal.disqualified.headline');
      numberEl.innerHTML = '—';
      noteEl.textContent = t('diag.reveal.disqualified.note');
      return;
    }
    if (diagState.volumeFlag === 'belowfloor') {
      headlineEl.textContent = t('diag.reveal.belowfloor.headline');
      numberEl.innerHTML = '—';
      noteEl.textContent = t('diag.reveal.belowfloor.note');
      return;
    }

    var vol = diagState.volumeVal || 300;
    var ticket = diagState.ticketVal || 2000;
    var amount = Math.round((vol * 0.03 * ticket) / 500) * 500;
    diagState.revealAmount = amount;

    headlineEl.textContent = t('diag.reveal.qualified.headline');
    numberEl.innerHTML = formatMXN(amount) + '<span>' + t('diag.reveal.perMonth') + '</span>';
    noteEl.textContent = t('diag.reveal.qualified.note') + (diagState.crmFlag === 'loose' ? ' ' + t('diag.reveal.looseNote') : '');
  }

  /* Hard fails block the pilot outright; soft flags just mean something needs
     confirming on the audit call. Capacity/response failures matter as much as
     database failures — a saturated business can sink the pilot same as a bad list.
     One priority chain, first match wins — this is the single source of truth for
     both the persona shown and its tier. Never re-derive this logic anywhere else
     (e.g. server-side, on a results page) without this staying authoritative. */
  var DIAG_PERSONA_ORDER = [
    { key: 'no_list', test: function () { return diagState.crmFlag === 'nocrm'; }, tier: 'notEligible' },
    { key: 'purchased_list', test: function () { return diagState.sourceFlag === 'disqualify'; }, tier: 'notEligible' },
    { key: 'below_floor', test: function () { return diagState.volumeFlag === 'belowfloor'; }, tier: 'notEligible' },
    { key: 'saturated', test: function () { return diagState.capacityFlag === 'fail'; }, tier: 'notEligible' },
    { key: 'slow_response', test: function () { return diagState.responseFlag === 'fail'; }, tier: 'notEligible' },
    { key: 'loose_data', test: function () { return diagState.crmFlag === 'loose'; }, tier: 'conditional' },
    { key: 'stale_data', test: function () { return diagState.sourceFlag === 'stale' || diagState.sourceFlag === 'unsure'; }, tier: 'conditional' },
    { key: 'low_ticket', test: function () { return diagState.ticketFlag === 'lowticket'; }, tier: 'conditional' },
    { key: 'capacity_conditional', test: function () { return diagState.capacityFlag === 'conditional'; }, tier: 'conditional' },
    { key: 'response_conditional', test: function () { return diagState.responseFlag === 'conditional'; }, tier: 'conditional' }
  ];

  function classifyDiagPersona() {
    for (var i = 0; i < DIAG_PERSONA_ORDER.length; i++) {
      if (DIAG_PERSONA_ORDER[i].test()) return DIAG_PERSONA_ORDER[i].key;
    }
    return 'prequalified';
  }

  function renderDiagDone() {
    var titleEl = document.getElementById('diagDoneTitle');
    var bodyEl = document.getElementById('diagDoneBody');
    var ctaEl = document.getElementById('diagDoneCta');
    if (!titleEl) return;
    var persona = classifyDiagPersona();
    diagState.persona = persona;
    titleEl.textContent = t('diag.persona.' + persona + '.title');
    bodyEl.textContent = t('diag.persona.' + persona + '.body');
    if (ctaEl) ctaEl.textContent = t('diag.persona.' + persona + '.cta');
  }

  function goToDiagStep(i) {
    diagActive = i;
    diagSteps.forEach(function (s) { s.classList.toggle('is-active', parseInt(s.dataset.step, 10) === i); });
    if (i === 4) renderDiagReveal();
    if (i === 8) renderDiagDone();
    if (i < totalQuestions) {
      diagProgressFill.style.width = ((i + 1) / totalQuestions) * 100 + '%';
      renderDiagLabel();
    } else {
      diagProgressFill.style.width = '100%';
    }
  }

  if (diagCard) {
    diagCard.addEventListener('click', function (e) {
      var opt = e.target.closest('[data-next]');
      if (!opt) return;
      var field = opt.getAttribute('data-field');
      if (field) {
        var val = opt.getAttribute('data-val');
        diagState[field + 'Val'] = val ? parseFloat(val) : null;
        diagState[field + 'Flag'] = opt.getAttribute('data-flag') || null;
      }
      if (field === 'crm' && diagState.crmFlag === 'nocrm') {
        goToDiagStep(4);
        return;
      }
      var currentStep = opt.closest('.diag-step');
      goToDiagStep(parseInt(currentStep.dataset.step, 10) + 1);
    });

    var diagForm = document.getElementById('diagForm');
    if (diagForm) {
      diagForm.addEventListener('submit', function (e) {
        e.preventDefault();
        goToDiagStep(8);
      });
    }
  }

  /* ---------- Hero form (draft: prevents navigation, no backend wired yet) ---------- */
  var heroForm = document.getElementById('heroForm');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var span = heroForm.querySelector('.btn-submit span');
      if (span) span.textContent = t('hero.form.thanks');
      heroForm.reset();
    });
  }

  /* ---------- Re-render dynamic strings on language change ---------- */
  document.addEventListener('asvelo:langchange', function () {
    if (howSteps.length) renderHowPanel();
    if (!isPlaying && statusText) statusText.textContent = t('demo.status.ready');
    renderDiagLabel();
    if (diagActive === 4) renderDiagReveal();
    if (diagActive === 8) renderDiagDone();
  });

  /* ---------- Init ---------- */
  if (howSteps.length) setHowStep(0);
})();
