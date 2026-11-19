// Unified background + oracle. Wandering constellation elements assemble into
// the pixel oracle face (Matrix-green), hold, then disperse back to drifting.
(function () {
  var canvas = document.getElementById('constellation');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var BG_COLORS = ['#57b8ff', '#9b7bff', '#ffd166'];
  var FACE_BASE = [[87, 184, 255], [155, 123, 255], [255, 209, 102]];
  var PHOS = [0, 255, 65];

  var bg = [];
  var face = [];
  var MAX_FACE = 300;

  var EMOTIONS = ['idle', 'thinking', 'happy', 'sad', 'surprised'];
  var emotion = 'idle';
  var burst = 0;
  var cycleStart = performance.now();

  var ASSEMBLE = 1500, HOLD = 3600, DISPERSE = 1200, WANDER = 2800;
  var TOTAL = ASSEMBLE + HOLD + DISPERSE + WANDER;

  var faceCX = 0, faceCY = 0, faceScale = 3;

  function ease(x) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }

  function F(now) {
    var t = (now - cycleStart) % TOTAL;
    if (t < ASSEMBLE) return ease(t / ASSEMBLE);
    if (t < ASSEMBLE + HOLD) return 1;
    if (t < ASSEMBLE + HOLD + DISPERSE) return 1 - ease((t - ASSEMBLE - HOLD) / DISPERSE);
    return 0;
  }

  function ellipseFill(g, cx, cy, rx, ry) {
    for (var y = -ry; y <= ry; y++) {
      var w = Math.round(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry))));
      if (w > 0) g.fillRect(cx - w, cy + y, w * 2, 1);
    }
  }

  function ring(g, cx, cy, rOut, rIn) {
    g.globalCompositeOperation = 'source-over';
    g.fillStyle = '#fff';
    ellipseFill(g, cx, cy, rOut, rOut);
    g.globalCompositeOperation = 'destination-out';
    ellipseFill(g, cx, cy, rIn, rIn);
    g.globalCompositeOperation = 'source-over';
  }

  function faceTargets(emotion) {
    var c = document.createElement('canvas');
    c.width = 32; c.height = 32;
    var g = c.getContext('2d');

    ring(g, 16, 16, 12, 10); // head
    ring(g, 11, 15, 4, 2);   // left lens
    ring(g, 21, 15, 4, 2);   // right lens
    g.fillStyle = '#fff';
    g.fillRect(13, 13, 6, 1); // bridge

    if (emotion === 'surprised') { g.fillRect(9, 14, 2, 2); g.fillRect(20, 14, 2, 2); }
    else { g.fillRect(10, 15, 2, 1); g.fillRect(20, 15, 2, 1); }

    if (emotion === 'happy') { g.fillRect(12, 23, 2, 1); g.fillRect(18, 23, 2, 1); g.fillRect(12, 24, 8, 1); }
    else if (emotion === 'sad') { g.fillRect(12, 23, 8, 1); g.fillRect(12, 24, 2, 1); g.fillRect(18, 24, 2, 1); }
    else if (emotion === 'surprised') { g.fillRect(15, 23, 2, 2); }
    else if (emotion === 'thinking') { g.fillRect(15, 23, 2, 1); }
    else { g.fillRect(13, 23, 6, 1); }

    var data = g.getImageData(0, 0, 32, 32).data;
    var pts = [];
    for (var y = 0; y < 32; y++) {
      for (var x = 0; x < 32; x++) {
        if (data[(y * 32 + x) * 4 + 3] > 128) pts.push([x, y]);
      }
    }
    return pts;
  }

  function seedBg() {
    var count = Math.min(70, Math.floor((W * H) / 20000));
    bg = [];
    for (var i = 0; i < count; i++) {
      bg.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 2.4,
        c: BG_COLORS[(Math.random() * BG_COLORS.length) | 0],
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function seedFace() {
    face = [];
    for (var i = 0; i < MAX_FACE; i++) {
      face.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: 1.6,
        base: FACE_BASE[i % FACE_BASE.length],
        homeX: null, homeY: null,
      });
    }
  }

  function assignHomes() {
    var targets = faceTargets(emotion);
    for (var i = 0; i < face.length; i++) {
      if (i < targets.length) {
        face[i].homeX = faceCX + (targets[i][0] - 16) * faceScale;
        face[i].homeY = faceCY + (targets[i][1] - 16) * faceScale;
      } else {
        face[i].homeX = null; face[i].homeY = null;
      }
    }
  }

  function measureFace() {
    var el = document.getElementById('guide');
    if (el) {
      var r = el.getBoundingClientRect();
      faceCX = r.left + r.width / 2;
      faceCY = r.top + r.height / 2;
      faceScale = Math.max(2, r.height / 32);
    } else {
      faceCX = W / 2; faceCY = 140; faceScale = 3;
    }
  }

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    measureFace();
    seedBg();
    seedFace();
    assignHomes();
  }

  function drawEdges() {
    var link = Math.min(W, H) * 0.17;
    for (var i = 0; i < bg.length; i++) {
      for (var j = i + 1; j < bg.length; j++) {
        var a = bg[i], b = bg[j];
        var dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < link * link) {
          var alpha = (1 - Math.sqrt(d2) / link) * (0.16 + burst * 0.55);
          ctx.strokeStyle = 'rgba(87, 184, 255, ' + alpha.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  function drawBg(now) {
    for (var i = 0; i < bg.length; i++) {
      var n = bg[i];
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      var pulse = 0.5 + 0.5 * Math.sin(n.phase + now / 900) + burst;
      ctx.fillStyle = n.c;
      ctx.globalAlpha = Math.min(1, 0.45 + pulse * 0.4);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + burst * 0.9, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function drawFace(f) {
    for (var i = 0; i < face.length; i++) {
      var p = face[i];
      if (p.homeX === null) continue;
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;

      var dx = p.x + (p.homeX - p.x) * f;
      var dy = p.y + (p.homeY - p.y) * f;

      var base = p.base;
      var rr = Math.round(base[0] + (PHOS[0] - base[0]) * f);
      var gg = Math.round(base[1] + (PHOS[1] - base[1]) * f);
      var bb = Math.round(base[2] + (PHOS[2] - base[2]) * f);
      ctx.fillStyle = 'rgb(' + rr + ',' + gg + ',' + bb + ')';
      ctx.globalAlpha = f > 0.05 ? Math.min(1, 0.5 + f * 0.5) : 0.35;
      ctx.beginPath();
      ctx.arc(dx, dy, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function frame(now) {
    ctx.clearRect(0, 0, W, H);
    var f = reduceMotion ? 1 : F(now);
    drawEdges();
    drawBg(now);
    drawFace(f);
    burst *= 0.97;
    if (burst < 0.01) burst = 0;
    if (!reduceMotion) requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  if (reduceMotion) { frame(performance.now()); } else { requestAnimationFrame(frame); }

  window.TrizGraph = {
    burst: function () { burst = 1; },
    calm: function () { burst = 0; },
  };

  window.TrizFace = {
    set: function (e) {
      if (EMOTIONS.indexOf(e) === -1) return;
      emotion = e;
      var f = reduceMotion ? 1 : F(performance.now());
      for (var i = 0; i < face.length; i++) {
        var p = face[i];
        if (p.homeX !== null) {
          p.x = p.x + (p.homeX - p.x) * f;
          p.y = p.y + (p.homeY - p.y) * f;
        }
      }
      assignHomes();
      cycleStart = performance.now();
    },
  };
})();

