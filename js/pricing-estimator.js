(function () {
  'use strict';

  /* ==========================================================================
     CURRENCY TOGGLE — swaps the static pricing table between MXN and USD.
     ========================================================================== */
  var currencyBtns = document.querySelectorAll('.currency-btn');
  if (!currencyBtns.length) return;

  var priceEls = document.querySelectorAll('.pt-price-value');
  var currencyNote = document.getElementById('currencyNote');
  var setCurrency = function (cur) {
    priceEls.forEach(function (el) {
      var val = el.getAttribute('data-' + cur);
      if (val) el.textContent = val;
    });
    currencyBtns.forEach(function (btn) {
      var active = btn.getAttribute('data-currency') === cur;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (currencyNote) currencyNote.hidden = cur !== 'usd';
  };
  currencyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { setCurrency(btn.getAttribute('data-currency')); });
  });

  /* Any element on the page can opt into CTA tracking with this attribute. */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-pricing-cta]');
    if (el) document.dispatchEvent(new CustomEvent('pricing_cta_clicked', { detail: { source: el.getAttribute('data-pricing-cta') } }));
  });
})();
