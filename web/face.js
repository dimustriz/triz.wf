// Pixel "Dr. Know" face — a calm Matrix-green oracle with round glasses.
// Rendered on a 32x32 canvas, upscaled with image-rendering: pixelated.
(function () {
  var canvas = document.getElementById('face');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var S = 32;
  canvas.width = S; canvas.height = S;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var BG = '#03130a';    // dark green-black screen
  var PHOS = '#00ff41';  // bright phosphor green
  var EMOTIONS = ['idle', 'thinking', 'happy', 'sad', 'surprised'];
  var emotion = 'idle';
  var blinkMs = 0;
  var nextBlink = 3000;

  function px(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  function ellipseFill(cx, cy, rx, ry, color) {
    ctx.fillStyle = color;
    for (var y = -ry; y <= ry; y++) {
      var w = Math.round(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry))));
      if (w > 0) ctx.fillRect(cx - w, cy + y, w * 2, 1);
    }
  }

  function ring(cx, cy, r) {
    ellipseFill(cx, cy, r, r, PHOS);
    ellipseFill(cx, cy, r - 1, r - 1, BG);
  }

  function drawHead() {
    ellipseFill(16, 16, 12, 12, PHOS);
    ellipseFill(16, 16, 11, 11, BG);
  }

  function drawGlasses() {
    ring(11, 15, 4);
    ring(21, 15, 4);
    px(13, 13, 6, 1, PHOS); // bridge
  }

  function drawEyes() {
    if (blinkMs > 0) return; // closed (calm blink)
    var gaze = emotion === 'thinking' ? (Math.floor(Date.now() / 2500) % 3) - 1 : 0;
    if (emotion === 'surprised') {
      px(9 + gaze, 14, 2, 2, PHOS);
      px(20 + gaze, 14, 2, 2, PHOS);
    } else {
      px(10 + gaze, 15, 2, 1, PHOS); // half-lidded, calm
      px(20 + gaze, 15, 2, 1, PHOS);
    }
  }

  function drawMouth() {
    if (emotion === 'happy') { px(12, 23, 2, 1, PHOS); px(18, 23, 2, 1, PHOS); px(12, 24, 8, 1, PHOS); }
    else if (emotion === 'sad') { px(12, 23, 8, 1, PHOS); px(12, 24, 2, 1, PHOS); px(18, 24, 2, 1, PHOS); }
    else if (emotion === 'surprised') { px(15, 23, 2, 2, PHOS); }
    else if (emotion === 'thinking') { px(15, 23, 2, 1, PHOS); }
    else { px(13, 23, 6, 1, PHOS); }
  }

  function draw() {
    ctx.clearRect(0, 0, S, S);
    px(0, 0, S, S, BG);

    // gentle breathing glow
    var breath = 0.5 + 0.5 * Math.sin(performance.now() / 3200);
    ctx.globalAlpha = 0.05 + 0.04 * breath;
    ellipseFill(16, 16, 13, 13, PHOS);
    ctx.globalAlpha = 1;

    drawHead();
    drawGlasses();
    drawEyes();
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
    if (nextBlink <= 0) { blinkMs = 110; nextBlink = 4200 + Math.random() * 2600; }
    if (blinkMs > 0) blinkMs -= dt;
    draw();
    requestAnimationFrame(loop);
  }

  if (reduceMotion) { draw(); } else { requestAnimationFrame(loop); }

  window.TrizFace = { set: set };
})();
