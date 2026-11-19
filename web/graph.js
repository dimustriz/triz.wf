// Patent-graph "neural constellation" background.
// Animated nodes + edges; bursts when the solver starts a run.
(function () {
  var canvas = document.getElementById('constellation');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var nodes = [];
  var burst = 0;
  var COLORS = ['#57b8ff', '#9b7bff', '#ffd166'];

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function seed() {
    var count = Math.min(110, Math.floor((W * H) / 15000));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 2.4,
        c: COLORS[(Math.random() * COLORS.length) | 0],
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);

    var link = Math.min(W, H) * 0.17;
    var t = performance.now();

    // edges
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i], b = nodes[j];
        var dx = a.x - b.x, dy = a.y - b.y;
        var d2 = dx * dx + dy * dy;
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

    // nodes
    for (var k = 0; k < nodes.length; k++) {
      var n = nodes[k];
      n.x += n.vx + burst * (Math.random() - 0.5) * 0.7;
      n.y += n.vy + burst * (Math.random() - 0.5) * 0.7;
      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;

      var pulse = 0.5 + 0.5 * Math.sin(n.phase + t / 900) + burst;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + burst * 0.9, 0, Math.PI * 2);
      ctx.fillStyle = n.c;
      ctx.globalAlpha = Math.min(1, 0.45 + pulse * 0.4);
      ctx.fill();
      ctx.globalAlpha = 1;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 3 + burst * 3, 0, Math.PI * 2);
      ctx.fillStyle = n.c;
      ctx.globalAlpha = 0.05 + burst * 0.12;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    burst *= 0.97;
    if (burst < 0.01) burst = 0;

    if (!reduceMotion) requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  frame();

  window.TrizGraph = {
    burst: function () { burst = 1; },
    calm: function () { burst = 0; },
  };
})();
