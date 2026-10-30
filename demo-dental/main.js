// Arma el mensaje de WhatsApp con lo elegido y muestra la barra fija en el celular al pasar el hero.
(function () {
  var form = document.getElementById('formulario-cita');
  var texto = document.getElementById('texto-cita');
  var vista = document.getElementById('vista-cita');
  if (form && texto && vista) {
    var armar = function () {
      var servicio = form.querySelector('input[name="servicio"]:checked');
      var turno = form.querySelector('input[name="turno"]:checked');
      var mensaje = 'Hola, quiero una cita de ' + (servicio ? servicio.value : 'evaluación') + ', ' + (turno ? turno.value : 'lo antes posible') + '.';
      texto.value = mensaje;
      vista.textContent = mensaje;
    };
    form.addEventListener('change', armar);
    form.addEventListener('submit', function (evento) {
      // Los radios no deben viajar en la URL: solo el texto.
      evento.preventDefault();
      armar();
      window.open('https://wa.me/51993339301?text=' + encodeURIComponent(texto.value), '_blank', 'noopener');
    });
    armar();
  }

  var barra = document.querySelector('.barra-wa');
  var hero = document.querySelector('.hero');
  var cierre = document.querySelector('.cierre');
  if (!barra || !hero || !('IntersectionObserver' in window)) return;
  var heroVisible = true, cierreVisible = false;
  var actualizar = function () {
    if (!heroVisible && !cierreVisible) barra.removeAttribute('hidden'); else barra.setAttribute('hidden', '');
  };
  new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; actualizar(); }, { threshold: 0.15 }).observe(hero);
  if (cierre) new IntersectionObserver(function (e) { cierreVisible = e[0].isIntersecting; actualizar(); }, { threshold: 0.2 }).observe(cierre);
})();
