(function () {
  'use strict';

  var button = document.getElementById('switch');
  var beam = document.querySelector('.beam');

  // Partículas de polvo flotando dentro del haz de luz
  function crearPolvo(cantidad) {
    for (var i = 0; i < cantidad; i++) {
      var p = document.createElement('span');
      var size = 2 + Math.random() * 3;
      p.className = 'dust';
      p.style.width = p.style.height = size + 'px';
      p.style.left = 10 + Math.random() * 80 + '%';
      p.style.bottom = Math.random() * 85 + '%';
      p.style.setProperty('--dx', (Math.random() * 60 - 30) + 'px');
      p.style.animationDuration = 5 + Math.random() * 7 + 's';
      p.style.animationDelay = -Math.random() * 10 + 's';
      beam.appendChild(p);
    }
  }

  function alternar() {
    var encendida = document.body.classList.toggle('on');
    button.setAttribute('aria-pressed', String(encendida));
    button.setAttribute('aria-label', encendida ? 'Apagar linterna' : 'Encender linterna');
  }

  crearPolvo(28);
  button.addEventListener('click', alternar);
})();
