// Pixel "Dr. Know" face — a dynamic smiley showing basic emotions.
// Rendered on a 32x32 canvas and upscaled with image-rendering: pixelated.
(function () {
  var canvas = document.getElementById('face');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var S = 32;
  canvas.width = S; canvas.height = S;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var HEAD = '#bff2ff', EDGE = '#6fc9d8', INK = '#0a2530', AMBER = '#ffb84d';
  var EMOTIONS = ['idle', 'thinking', 'happy', 'sad', 'surprised'];
  var emotion = 'idle';
  var blinkMs = 0;
  var nextBlink = 2000;

  function px(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  function ellipse(cx, cy, rx, ry, color) {
    ctx.fillStyle = color;
    for (var y = -ry; y <= ry; y++) {
      var w = Math.round(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry))));
      if (w > 0) ctx.fillRect(cx - w, cy + y, w * 2, 1);
    }
  }

  function drawHead() {
    ellipse(16, 16, 13, 13, EDGE);
    ellipse(16, 16, 12, 12, HEAD);
  }

  function drawEyes() {
    if (blinkMs > 0) { px(10, 16, 3, 1, INK); px(19, 16, 3, 1, INK); return; }
    if (emotion === 'surprised') { px(9, 14, 3, 3, INK); px(20, 14, 3, 3, INK); }
    else if (emotion === 'happy') { px(10, 15, 3, 1, INK); px(19, 15, 3, 1, INK); }
    else if (emotion === 'thinking') {
      var look = Math.floor(Date.now() / 500) % 2;
      px(11 + look, 15, 2, 2, INK); px(19 + look, 15, 2, 2, INK);
    }
    else { px(10, 15, 2, 2, INK); px(20, 15, 2, 2, INK); }
  }

  function drawBrows() {
    if (blinkMs > 0) return;
    if (emotion === 'sad') { px(9, 12, 4, 1, INK); px(19, 13, 4, 1, INK); }
    else if (emotion === 'surprised') { px(9, 11, 4, 1, INK); px(19, 11, 4, 1, INK); }
    else if (emotion === 'thinking') { px(9, 12, 4, 1, INK); px(19, 11, 4, 1, INK); }
    else if (emotion === 'happy') { /* relaxed, no brows */ }
    else { px(9, 12, 4, 1, INK); px(19, 12, 4, 1, INK); }
  }

  function drawMouth() {
    if (emotion === 'happy') {
      px(12, 23, 2, 1, INK); px(18, 23, 2, 1, INK); px(12, 24, 8, 1, INK);
      px(8, 19, 2, 1, AMBER); px(22, 19, 2, 1, AMBER);
    }
    else if (emotion === 'sad') { px(12, 23, 8, 1, INK); px(12, 24, 2, 1, INK); px(18, 24, 2, 1, INK); }
    else if (emotion === 'surprised') { px(15, 23, 2, 2, INK); }
    else if (emotion === 'thinking') { px(15, 23, 2, 1, INK); }
    else { px(13, 24, 6, 1, INK); }
  }

  function draw() {
    ctx.clearRect(0, 0, S, S);
    drawHead();
    drawEyes();
    drawBrows();
    drawMouth();
  }

  function set(e) {
    if (EMOTIONS.indexOf(e) !== -1) emotion = e;
    draw();
  }

  var last = performance.now();
  function loop(now) {
    var dt = now - last; last = now;
    nextBlink -= dt;
    if (nextBlink <= 0) { blinkMs = 120; nextBlink = 2200 + Math.random() * 2200; }
    if (blinkMs > 0) blinkMs -= dt;
    draw();
    requestAnimationFrame(loop);
  }

  if (reduceMotion) { draw(); } else { requestAnimationFrame(loop); }

  window.TrizFace = { set: set };
})();
