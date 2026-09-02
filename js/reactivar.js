(function () {
  'use strict';

  function t(key) { return window.ASVELO_I18N.t(key); }
  function lang() { return window.ASVELO_I18N.getLang(); }

  var diagSteps = Array.prototype.slice.call(document.querySelectorAll('.diag-step'));
  var diagProgressFill = document.getElementById('diagProgressFill');
  var diagStepLabel = document.getElementById('diagStepLabel');
  var diagCard = document.getElementById('diagCard');
  var diagBack = document.getElementById('diagBack');
  var totalSteps = 8;
  var diagActive = 0;
  var diagState = {};
  var stepHistory = [];
  var stepAnswers = {}; // step index -> option index chosen, so "back" can show what was picked

  function renderDiagLabel() {
    var shown = Math.min(diagActive + 1, totalSteps);
    diagStepLabel.textContent = t('diag.questionPrefix') + ' ' + shown + ' ' + t('diag.questionJoin') + ' ' + totalSteps;
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
     One priority chain, first match wins — mirrors the tiers in
     docs/free-reactivation-qualification.md. Keep this the single source of truth;
     don't re-derive the logic elsewhere without staying in sync with that doc. */
  var DIAG_PERSONA_ORDER = [
    { key: 'no_list', test: function () { return diagState.crmFlag === 'nocrm'; } },
    { key: 'purchased_list', test: function () { return diagState.sourceFlag === 'disqualify'; } },
    { key: 'below_floor', test: function () { return diagState.volumeFlag === 'belowfloor'; } },
    { key: 'saturated', test: function () { return diagState.capacityFlag === 'fail'; } },
    { key: 'slow_response', test: function () { return diagState.responseFlag === 'fail'; } },
    { key: 'loose_data', test: function () { return diagState.crmFlag === 'loose'; } },
    { key: 'stale_data', test: function () { return diagState.sourceFlag === 'stale' || diagState.sourceFlag === 'unsure'; } },
    { key: 'low_ticket', test: function () { return diagState.ticketFlag === 'lowticket'; } },
    { key: 'capacity_conditional', test: function () { return diagState.capacityFlag === 'conditional'; } },
    { key: 'response_conditional', test: function () { return diagState.responseFlag === 'conditional'; } }
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
    var recapEl = document.getElementById('diagDoneRecap');
    var recapNumberEl = document.getElementById('diagDoneRecapNumber');
    if (!titleEl) return;
    var persona = classifyDiagPersona();
    diagState.persona = persona;
    titleEl.textContent = t('diag.persona.' + persona + '.title');
    bodyEl.textContent = t('diag.persona.' + persona + '.body');
    if (ctaEl) ctaEl.textContent = t('diag.persona.' + persona + '.cta');

    /* Personalize the result with the actual estimate from step 4, when one exists —
       reinforces "what they might win" at the moment that matters most. */
    if (recapEl && recapNumberEl) {
      if (diagState.revealAmount) {
        recapNumberEl.innerHTML = formatMXN(diagState.revealAmount) + '<span>' + t('diag.reveal.perMonth') + '</span>';
        recapEl.hidden = false;
      } else {
        recapEl.hidden = true;
      }
    }
  }

  function applyStepSelection(i) {
    var stepEl = diagSteps[i];
    if (!stepEl) return;
    var opts = stepEl.querySelectorAll('.diag-opt');
    opts.forEach(function (opt, idx) {
      opt.classList.toggle('is-selected', stepAnswers[i] === idx);
    });
  }

  function updateBackButton() {
    if (!diagBack) return;
    diagBack.hidden = stepHistory.length === 0 || diagActive === 8;
  }

  function goToDiagStep(i) {
    diagActive = i;
    diagSteps.forEach(function (s) { s.classList.toggle('is-active', parseInt(s.dataset.step, 10) === i); });
    applyStepSelection(i);
    if (i === 4) renderDiagReveal();
    if (i === 8) renderDiagDone();
    if (i < totalSteps) {
      diagProgressFill.style.width = ((i + 1) / totalSteps) * 100 + '%';
      renderDiagLabel();
    } else {
      diagProgressFill.style.width = '100%';
    }
    updateBackButton();
  }

  function goForward(nextIndex) {
    stepHistory.push(diagActive);
    goToDiagStep(nextIndex);
  }

  function goBack() {
    if (!stepHistory.length) return;
    goToDiagStep(stepHistory.pop());
  }

  if (diagBack) diagBack.addEventListener('click', goBack);

  if (diagCard) {
    diagCard.addEventListener('click', function (e) {
      var opt = e.target.closest('[data-next]');
      if (!opt) return;
      var field = opt.getAttribute('data-field');
      var currentStep = opt.closest('.diag-step');
      var currentIndex = parseInt(currentStep.dataset.step, 10);
      if (field) {
        var val = opt.getAttribute('data-val');
        diagState[field + 'Val'] = val ? parseFloat(val) : null;
        diagState[field + 'Flag'] = opt.getAttribute('data-flag') || null;
        var optsInStep = Array.prototype.slice.call(currentStep.querySelectorAll('.diag-opt'));
        stepAnswers[currentIndex] = optsInStep.indexOf(opt);
      }
      if (field === 'crm' && diagState.crmFlag === 'nocrm') {
        goForward(4);
        return;
      }
      goForward(currentIndex + 1);
    });

    var diagForm = document.getElementById('diagForm');
    if (diagForm) {
      diagForm.addEventListener('submit', function (e) {
        e.preventDefault();
        goForward(8);
      });
    }
  }

  document.addEventListener('asvelo:langchange', function () {
    renderDiagLabel();
    if (diagActive === 4) renderDiagReveal();
    if (diagActive === 8) renderDiagDone();
  });

  if (diagSteps.length) goToDiagStep(0);
})();
