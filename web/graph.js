// Unified background + volumetric Einstein oracle. Wandering colored dots
// assemble into a 3D "Einstein" head (wild hair + mustache), slowly rotating
// for depth, then disperse back into the background.
(function () {
  var canvas = document.getElementById('constellation');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var COLORS = ['#57b8ff', '#9b7bff', '#ffd166'];
  var R = 10; // skull radius (world units)

  var bg = [];
  var face = [];
  var MAX_FACE = 640;

  var EMOTIONS = ['idle', 'thinking', 'happy', 'sad', 'surprised'];
  var emotion = 'idle';
  var burst = 0;
  var cycleStart = performance.now();

  var ASSEMBLE = 1500, HOLD = 5000, DISPERSE = 1200, WANDER = 10000;
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

  function blob(pts, cx, cy, spread, n, z) {
    for (var i = 0; i < n; i++) {
      pts.push([cx + (Math.random() - 0.5) * spread, cy + (Math.random() - 0.5) * spread, z]);
    }
  }

  function addEyes(pts, emotion, R, shift) {
    var y = 2;
    if (emotion === 'happy') {
      for (var x = -4.5; x <= -2.5; x++) pts.push([x + shift, y, R]);
      for (var x2 = 2.5; x2 <= 4.5; x2++) pts.push([x2 + shift, y, R]);
    } else if (emotion === 'surprised') {
      blob(pts, -3.5 + shift, y, 2.4, 10, R);
      blob(pts, 3.5 + shift, y, 2.4, 10, R);
    } else if (emotion === 'sad') {
      blob(pts, -3.5 + shift, y, 1.4, 5, R);
      blob(pts, 3.5 + shift, y, 1.4, 5, R);
      pts.push([-4.5 + shift, y - 1, R]);
      pts.push([4.5 + shift, y - 1, R]);
    } else {
      blob(pts, -3.5 + shift, y, 1.5, 5, R);
      blob(pts, 3.5 + shift, y, 1.5, 5, R);
    }
  }

  function addMouth(pts, emotion, R) {
    var y = -5.5;
    if (emotion === 'happy') {
      for (var x = -3; x <= 3; x++) pts.push([x, y + (x * x) * 0.18, R]);
    } else if (emotion === 'sad') {
      for (var x = -3; x <= 3; x++) pts.push([x, y - (x * x) * 0.18, R]);
    } else if (emotion === 'surprised') {
      blob(pts, 0, y, 1.6, 8, R);
    } else {
      for (var x2 = -2; x2 <= 2; x2++) pts.push([x2, y, R]);
    }
  }

  function genPoints(emotion) {
    var pts = [];
    var shift = emotion === 'thinking' ? 1.6 : 0;

    // skull
    for (var i = 0; i < 180; i++) {
      var u = Math.random() * 2 - 1;
      var th = Math.random() * Math.PI * 2;
      var s = Math.sqrt(1 - u * u);
      pts.push([R * s * Math.cos(th), R * s * Math.sin(th), R * u]);
    }

    // wild hair (top/sides/back)
    for (var j = 0; j < 300; j++) {
      var uu = Math.random() * 2 - 1;
      var th2 = Math.random() * Math.PI * 2;
      var s2 = Math.sqrt(Math.max(0, 1 - uu * uu));
      var rr = R + 1.5 + Math.random() * 4.5;
      var y = rr * uu;
      var x = rr * s2 * Math.cos(th2);
      var z = rr * s2 * Math.sin(th2);
      if (y > -R * 0.35 && z < R * 0.4) pts.push([x, y, z]);
    }

    // nose (protruding)
    for (var k = 0; k < 14; k++) {
      pts.push([(Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 2.2, R + 1.5 + Math.random() * 1.2]);
    }

    // mustache (bushy)
    for (var m = 0; m < 44; m++) {
      pts.push([(Math.random() * 2 - 1) * 5.2, -3 + (Math.random() - 0.5) * 1.6, R + 0.6 + Math.random() * 0.9]);
    }

    addEyes(pts, emotion, R, shift);
    addMouth(pts, emotion, R);

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
        c: COLORS[(Math.random() * COLORS.length) | 0],
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
        c: COLORS[i % COLORS.length],
        hx: null, hy: null, hz: null,
      });
    }
  }

  function assignHomes() {
    var targets = genPoints(emotion);
    for (var i = 0; i < face.length; i++) {
      if (i < targets.length) {
        face[i].hx = targets[i][0];
        face[i].hy = targets[i][1];
        face[i].hz = targets[i][2];
      } else {
        face[i].hx = null; face[i].hy = null; face[i].hz = null;
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

  function project(p, theta) {
    var cosT = Math.cos(theta), sinT = Math.sin(theta);
    var xr = p.hx * cosT + p.hz * sinT;
    var zr = -p.hx * sinT + p.hz * cosT;
    return { x: faceCX + xr * faceScale, y: faceCY - p.hy * faceScale, zr: zr };
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

  function drawFace(f, theta) {
    for (var i = 0; i < face.length; i++) {
      var p = face[i];
      if (p.hx === null) continue;
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;

      var pr = project(p, theta);
      var dx = p.x + (pr.x - p.x) * f;
      var dy = p.y + (pr.y - p.y) * f;

      var depth = pr.zr / R;
      var dSize = faceScale * 0.5 * (1 + depth * 0.3);
      var dAlpha = Math.min(1, Math.max(0.3, 0.4 + (depth + 1) * 0.3));
      var size = 1.6 + (dSize - 1.6) * f;
      var alpha = 0.45 + (dAlpha - 0.45) * f;

      ctx.fillStyle = p.c;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(dx, dy, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function frame(now) {
    ctx.clearRect(0, 0, W, H);
    var f = reduceMotion ? 1 : F(now);
    var theta = reduceMotion ? 0.15 : 0.4 * Math.sin(now / 4200);
    drawEdges();
    drawBg(now);
    drawFace(f, theta);
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
      var theta = reduceMotion ? 0.15 : 0.4 * Math.sin(performance.now() / 4200);
      for (var i = 0; i < face.length; i++) {
        var p = face[i];
        if (p.hx === null) continue;
        var pr = project(p, theta);
        p.x = p.x + (pr.x - p.x) * f;
        p.y = p.y + (pr.y - p.y) * f;
      }
      assignHomes();
      cycleStart = performance.now();
    },
  };
})();

