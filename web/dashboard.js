// Instrument Dashboard visualizations (no frameworks, no WebGL).
// Telemetry bars, sparklines, contradiction matrix heatmap, status ticker.
(function () {
  var STATUS = [
    'CROSS-DOMAIN PATENT RETRIEVAL', 'PHYSICAL CONTRADICTION', 'IDEAL FINAL RESULT',
    'ADVERSARIAL CRITIC', 'ZERO-IDLE-COST', 'FUNCTION ABSTRACTION',
    'ANTI-COMPROMISE', 'SYSTEM NOMINAL',
  ];

  function buildBars() {
    document.querySelectorAll('.bars[data-bars]').forEach(function (el) {
      var vals = (el.getAttribute('data-bars') || '').split(',').map(Number).filter(Boolean);
      el.innerHTML = '';
      vals.forEach(function (v, i) {
        var b = document.createElement('i');
        b.className = 'bar';
        b.style.height = Math.max(10, v * 18) + '%';
        b.style.animationDelay = (i * 0.14) + 's';
        el.appendChild(b);
      });
    });
  }

  function buildSparkline(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var w = 120, h = 30, n = 26;
    var pts = [];
    for (var i = 0; i < n; i++) {
      var x = (i / (n - 1)) * w;
      var y = h - ((Math.sin(i * 0.6) * 0.4 + 0.5 + (Math.random() - 0.5) * 0.5) * h * 0.85);
      pts.push(x.toFixed(1) + ',' + y.toFixed(1));
    }
    el.innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none">' +
      '<polyline points="' + pts.join(' ') + '" fill="none" stroke="var(--cyan)" stroke-width="1.5"/>' +
      '</svg>';
  }

  function buildMatrix() {
    var el = document.getElementById('matrix');
    if (!el) return;
    var size = 14;
    var html = '';
    for (var i = 0; i < size * size; i++) {
      var lit = Math.random() < 0.2;
      html += '<i class="cell' + (lit ? ' lit' : '') + '" style="animation-delay:' + (Math.random() * 4).toFixed(2) + 's"></i>';
    }
    el.innerHTML = html;
  }

  function buildTicker() {
    var el = document.getElementById('ticker');
    if (!el) return;
    var seg = STATUS.map(function (s) {
      return '<span class="tk">' + s + '</span>';
    }).join('');
    el.innerHTML = '<div class="ticker-inner"><div class="ticker-seg">' + seg + '</div><div class="ticker-seg">' + seg + '</div></div>';
  }

  buildBars();
  buildSparkline('header-spark');
  buildSparkline('rail-spark');
  buildMatrix();
  buildTicker();
})();
