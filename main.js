// En celular, la barra con el botón de WhatsApp aparece al pasar la portada y se esconde al llegar a contacto:
// así nunca hay dos botones iguales a la vista. Sin este archivo la página funciona igual, solo que sin la barra.
(function () {
  var barra = document.querySelector('.barra');
  var portada = document.querySelector('.portada');
  var contacto = document.getElementById('contacto');
  if (!barra || !portada || !('IntersectionObserver' in window)) return;

  var enPortada = true;
  var enContacto = false;
  function pintar() { barra.hidden = enPortada || enContacto; }

  new IntersectionObserver(function (entradas) {
    enPortada = entradas[0].isIntersecting;
    pintar();
  }, { threshold: 0.15 }).observe(portada);
  if (contacto) {
    new IntersectionObserver(function (entradas) {
      enContacto = entradas[0].isIntersecting;
      pintar();
    }, { threshold: 0.2 }).observe(contacto);
  }
})();
