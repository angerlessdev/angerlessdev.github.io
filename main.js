// Enciende el tablero al cargar y muestra la barra de WhatsApp en el celular al pasar el hero.
(function () {
  var tablero = document.querySelector('.tablero');
  if (tablero) {
    window.requestAnimationFrame(function () { tablero.classList.add('encendido'); });
  }

  var barra = document.querySelector('.barra-wa');
  var hero = document.querySelector('.hero');
  var contacto = document.getElementById('contacto');
  if (!barra || !hero || !('IntersectionObserver' in window)) return;

  var heroVisible = true;
  var contactoVisible = false;
  function actualizar() {
    var mostrar = !heroVisible && !contactoVisible;
    if (mostrar) barra.removeAttribute('hidden'); else barra.setAttribute('hidden', '');
  }
  new IntersectionObserver(function (entradas) {
    heroVisible = entradas[0].isIntersecting;
    actualizar();
  }, { threshold: 0.15 }).observe(hero);
  if (contacto) {
    new IntersectionObserver(function (entradas) {
      contactoVisible = entradas[0].isIntersecting;
      actualizar();
    }, { threshold: 0.2 }).observe(contacto);
  }
})();
