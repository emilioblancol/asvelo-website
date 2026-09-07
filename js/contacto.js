(function () {
  'use strict';

  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.elements['Nombre'].value.trim();
    var email = form.elements['Correo'].value.trim();
    var business = form.elements['Negocio'].value.trim();
    var message = form.elements['Mensaje'].value.trim();

    var subject = 'Contacto desde asvelo.com' + (business ? ' — ' + business : '');
    var body = [
      'Nombre: ' + name,
      'Correo: ' + email,
      business ? 'Negocio: ' + business : '',
      '',
      message
    ].filter(function (line) { return line !== ''; }).join('\n');

    window.location.href = 'mailto:contact@asvelo.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
  });
})();
