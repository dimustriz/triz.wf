// Unified background + two oracle faces (expert + skeptic).
// Wandering colored dots assemble into volumetric heads, react to user actions,
// then disperse back into the background.
(function () {
  var canvas = document.getElementById('constellation');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var DARK_DOT = '#6fbaff';
  var LIGHT_DOT = '#47617f';
  var DOT_COLOR = DARK_DOT;
  var DARK_EDGE = '111, 186, 255';
  var LIGHT_EDGE = '71, 97, 127';
  var EDGE_RGB = DARK_EDGE;
  var R = 10; // skull radius (world units)

  var bg = [];
  var burst = 0;

  var ASSEMBLE = 900, HOLD = 2400, DISPERSE = 900;
  var EMOTIONS = ['idle', 'thinking', 'happy', 'sad', 'surprised', 'skeptic'];

  function ease(x) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }

  function F(reactStart, now) {
    var t = now - reactStart;
    if (t < 0) return 0;
    if (t < ASSEMBLE) return ease(t / ASSEMBLE);
    if (t < ASSEMBLE + HOLD) return 1;
    if (t < ASSEMBLE + HOLD + DISPERSE) return 1 - ease((t - ASSEMBLE - HOLD) / DISPERSE);
    return 0;
  }

  function thetaAt(now) { return reduceMotion ? 0.15 : 0.4 * Math.sin(now / 4200); }

  function blob(pts, cx, cy, spread, n, z, k) {
    k = k || 0;
    for (var i = 0; i < n; i++) {
      pts.push([cx + (Math.random() - 0.5) * spread, cy + (Math.random() - 0.5) * spread, z, k]);
    }
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

  function addEyes(pts, emotion, R, shift) {
    var y = 2;
    if (emotion === 'happy') {
      for (var x = -4.5; x <= -2.5; x++) { pts.push([x + shift, y, R, 1]); pts.push([x + shift, y - 0.5, R, 1]); }
      for (var x2 = 2.5; x2 <= 4.5; x2++) { pts.push([x2 + shift, y, R, 1]); pts.push([x2 + shift, y - 0.5, R, 1]); }
    } else if (emotion === 'surprised') {
      blob(pts, -3.5 + shift, y, 2.4, 18, R, 1);
      blob(pts, 3.5 + shift, y, 2.4, 18, R, 1);
    } else if (emotion === 'sad') {
      blob(pts, -3.5 + shift, y, 1.4, 12, R, 1);
      blob(pts, 3.5 + shift, y, 1.4, 12, R, 1);
      for (var d = 0; d < 3; d++) { pts.push([-4.5 + shift, y - 1 - d * 0.5, R, 1]); pts.push([4.5 + shift, y - 1 - d * 0.5, R, 1]); }
    } else if (emotion === 'skeptic') {
      blob(pts, -3.5 + shift, y, 1.1, 8, R, 1);
      blob(pts, 3.5 + shift, y, 1.1, 8, R, 1);
    } else {
      blob(pts, -3.5 + shift, y, 1.5, 12, R, 1);
      blob(pts, 3.5 + shift, y, 1.5, 12, R, 1);
    }
  }

  function addMouth(pts, emotion, R) {
    var y = -5.5;
    if (emotion === 'happy') {
      for (var x = -3; x <= 3; x++) { pts.push([x, y + (x * x) * 0.18, R, 1]); pts.push([x, y + (x * x) * 0.18 - 0.5, R, 1]); }
    } else if (emotion === 'sad') {
      for (var x = -3; x <= 3; x++) { pts.push([x, y - (x * x) * 0.18, R, 1]); pts.push([x, y - (x * x) * 0.18 - 0.5, R, 1]); }
    } else if (emotion === 'surprised') {
      blob(pts, 0, y, 1.6, 14, R, 1);
    } else if (emotion === 'skeptic') {
      for (var x2 = -2; x2 <= 2; x2++) { pts.push([x2, y + 0.4, R, 1]); pts.push([x2, y + 0.9, R, 1]); }
    } else {
      for (var x3 = -2; x3 <= 2; x3++) { pts.push([x3, y, R, 1]); pts.push([x3, y - 0.5, R, 1]); }
    }
  }

  function genPoints(emotion, opts) {
    opts = opts || {};
    var pts = [];
    var shift = emotion === 'thinking' ? 1.6 : 0;
    var rx = opts.skeptic ? 8 : R;
    var ry = opts.skeptic ? 11 : R;

    // skull (ellipsoid for the skeptic, sphere for the expert)
    for (var i = 0; i < 260; i++) {
      var u = Math.random() * 2 - 1;
      var th = Math.random() * Math.PI * 2;
      var s = Math.sqrt(1 - u * u);
      pts.push([rx * s * Math.cos(th), ry * s * Math.sin(th), R * u, 0]);
    }

    // hair
    if (opts.skeptic) {
      // disheveled spikes: chaotic strands jutting out from the top of the head
      for (var j = 0; j < 150; j++) {
        var uu = Math.random() * 2 - 1;
        var th2 = Math.random() * Math.PI * 2;
        var s2 = Math.sqrt(Math.max(0, 1 - uu * uu));
        var bx = rx * s2 * Math.cos(th2);
        var by = ry * uu;
        var bz = R * s2 * Math.sin(th2);
        if (by < -R * 0.25) continue;
        var dx = (Math.random() - 0.5) * 2.2;
        var dy = 0.4 + Math.random() * 1.4;
        var dz = (Math.random() - 0.5) * 2.2;
        var len = 1.5 + Math.random() * 4.2;
        for (var q = 0; q < 4; q++) {
          var tt = q / 3;
          pts.push([bx + dx * len * tt, by + dy * len * tt, bz + dz * len * tt, 0]);
        }
      }
      // a few stray long spikes
      for (var j2 = 0; j2 < 36; j2++) {
        var uu2 = Math.random() * 0.9;
        var th3 = Math.random() * Math.PI * 2;
        var s3 = Math.sqrt(Math.max(0, 1 - uu2 * uu2));
        var bx2 = rx * s3 * Math.cos(th3);
        var by2 = ry * uu2;
        var bz2 = R * s3 * Math.sin(th3);
        var dx2 = (Math.random() - 0.5) * 2.6;
        var dy2 = 0.9 + Math.random() * 1.7;
        var dz2 = (Math.random() - 0.5) * 2.6;
        var len2 = 3.5 + Math.random() * 5;
        for (var q2 = 0; q2 < 5; q2++) {
          var t2 = q2 / 4;
          pts.push([bx2 + dx2 * len2 * t2, by2 + dy2 * len2 * t2, bz2 + dz2 * len2 * t2, 0]);
        }
      }
    } else {
      // expert: wild fuzzy halo following the head
      for (var j = 0; j < 340; j++) {
        var uu3 = Math.random() * 2 - 1;
        var th4 = Math.random() * Math.PI * 2;
        var s4 = Math.sqrt(Math.max(0, 1 - uu3 * uu3));
        var rr = R + 1.2 + Math.random() * 3.3;
        var y = rr * uu3 * (ry / R);
        var x = rr * s4 * Math.cos(th4) * (rx / R);
        var z = rr * s4 * Math.sin(th4);
        if (y > -R * 0.35 && z < R * 0.4) pts.push([x, y, z, 0]);
      }
    }

    // nose (protruding, bright)
    for (var k = 0; k < 24; k++) {
      pts.push([(Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 2.2, R + 1.5 + Math.random() * 1.2, 1]);
    }

    // mustache (bushy, bright) — expert only
    if (!opts.skeptic) {
      for (var m = 0; m < 80; m++) {
        pts.push([(Math.random() * 2 - 1) * 5.2, -3 + (Math.random() - 0.5) * 1.6, R + 0.6 + Math.random() * 0.9, 1]);
      }
    }

    addEyes(pts, emotion, R, shift);
    addMouth(pts, emotion, R);

    return pts;
  }

  function project(p, theta, cx, cy, scale) {
    var cosT = Math.cos(theta), sinT = Math.sin(theta);
    var xr = p.hx * cosT + p.hz * sinT;
    var zr = -p.hx * sinT + p.hz * cosT;
    return { x: cx + xr * scale, y: cy - p.hy * scale, zr: zr };
  }

  function makeFace(opts) {
    opts = opts || {};
    var f = {
      parts: [],
      emotion: 'idle',
      reactStart: -1e9,
      cx: 0, cy: 0, scale: 3,
    };
    f.seed = function () {
      f.parts = [];
      for (var i = 0; i < 1400; i++) {
        f.parts.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          hx: null, hy: null, hz: null, kind: 0,
        });
      }
    };
    f.assignHomes = function () {
      var targets = genPoints(f.emotion, opts);
      for (var i = 0; i < f.parts.length; i++) {
        if (i < targets.length) {
          f.parts[i].hx = targets[i][0];
          f.parts[i].hy = targets[i][1];
          f.parts[i].hz = targets[i][2];
          f.parts[i].kind = targets[i][3] || 0;
        } else {
          f.parts[i].hx = null; f.parts[i].hy = null; f.parts[i].hz = null; f.parts[i].kind = 0;
        }
      }
    };
    f.measure = function (guideId) {
      var el = document.getElementById(guideId);
      if (el) {
        var r = el.getBoundingClientRect();
        f.cx = r.left + r.width / 2;
        f.cy = r.top + r.height / 2;
        f.scale = Math.max(2, r.height / 32);
      } else {
        f.cx = W / 2; f.cy = 140; f.scale = 3;
      }
    };
    f.draw = function (ff, theta) {
      for (var i = 0; i < f.parts.length; i++) {
        var p = f.parts[i];
        if (p.hx === null) continue;
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;

        var pr = project(p, theta, f.cx, f.cy, f.scale);
        var dx = p.x + (pr.x - p.x) * ff;
        var dy = p.y + (pr.y - p.y) * ff;

        var depth = pr.zr / R;
        var isFeature = p.kind === 1;
        var dSize = (isFeature ? f.scale * 0.62 : f.scale * 0.42) * (1 + depth * 0.2);
        var dAlpha = isFeature
          ? Math.min(1, 0.85 + (depth + 1) * 0.08)
          : Math.min(0.6, 0.28 + (depth + 1) * 0.16);
        var size = 1.6 + (dSize - 1.6) * ff;
        var alpha = 0.45 + (dAlpha - 0.45) * ff;

        ctx.fillStyle = DOT_COLOR;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(dx, dy, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    };
    f.set = function (e) {
      if (EMOTIONS.indexOf(e) === -1) return;
      f.emotion = e;
      var ff = reduceMotion ? 1 : F(f.reactStart, performance.now());
      var theta = thetaAt(performance.now());
      for (var i = 0; i < f.parts.length; i++) {
        var p = f.parts[i];
        if (p.hx === null) continue;
        var pr = project(p, theta, f.cx, f.cy, f.scale);
        p.x = p.x + (pr.x - p.x) * ff;
        p.y = p.y + (pr.y - p.y) * ff;
      }
      f.assignHomes();
      f.reactStart = performance.now();
    };
    f.hide = function () {
      f.reactStart = performance.now() - ASSEMBLE - HOLD;
    };
    return f;
  }

  function seedBg() {
    var count = Math.min(70, Math.floor((W * H) / 20000));
    bg = [];
    for (var i = 0; i < count; i++) {
      bg.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 2.4,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function drawEdges() {
    var link = Math.min(W, H) * 0.17;
    for (var i = 0; i < bg.length; i++) {
      for (var j = i + 1; j < bg.length; j++) {
        var a = bg[i], b = bg[j];
        var dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < link * link) {
          var alpha = (1 - Math.sqrt(d2) / link) * (0.16 + burst * 0.55);
          ctx.strokeStyle = 'rgba(' + EDGE_RGB + ', ' + alpha.toFixed(3) + ')';
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
      ctx.fillStyle = DOT_COLOR;
      ctx.globalAlpha = Math.min(1, 0.45 + pulse * 0.4);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + burst * 0.9, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  var expert = makeFace();
  var skeptic = makeFace({ skeptic: true });

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedBg();
    expert.measure('guide');
    skeptic.measure('guide-skeptic');
    expert.seed();
    skeptic.seed();
    expert.assignHomes();
    skeptic.assignHomes();
  }

  function frame(now) {
    ctx.clearRect(0, 0, W, H);
    var theta = thetaAt(now);
    drawEdges();
    drawBg(now);
    expert.draw(reduceMotion ? 1 : F(expert.reactStart, now), theta);
    skeptic.draw(reduceMotion ? 1 : F(skeptic.reactStart, now), theta);
    burst *= 0.97;
    if (burst < 0.01) burst = 0;
    if (!reduceMotion) requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  if (reduceMotion) { frame(performance.now()); } else { requestAnimationFrame(frame); }

  function setTheme(mode) {
    DOT_COLOR = mode === 'light' ? LIGHT_DOT : DARK_DOT;
    EDGE_RGB = mode === 'light' ? LIGHT_EDGE : DARK_EDGE;
  }
  setTheme((document.documentElement.getAttribute('data-theme') || 'dark') === 'light' ? 'light' : 'dark');
  window.addEventListener('triz:theme', function (e) { setTheme(e.detail); });

  window.TrizGraph = {
    burst: function () { burst = 1; },
    calm: function () { burst = 0; },
  };

  window.TrizFace = {
    set: function (e) { expert.set(e); },
    hide: function () { expert.hide(); },
  };

  window.TrizSkeptic = {
    set: function (e) { skeptic.set(e); },
  };
})();

