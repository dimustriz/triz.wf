// Instrument Dashboard visualizations (no frameworks, no WebGL).
// Builds the TRIZ data-viz chrome: telemetry bars, sparklines, contradiction
// matrix heatmap, the 40 inventive principles grid, and the footer ticker.
(function () {
  var PRINCIPLES = [
    'Дробление', 'Вынесение', 'Местное качество', 'Асимметрия',
    'Объединение', 'Универсальность', 'Матрёшка', 'Противовес',
    'Предварительное антидействие', 'Предварительное действие',
    'Заранее подложенная подушка', 'Эквипотенциальность',
    'Наоборот', 'Сфероидальность', 'Динамичность', 'Частичное или избыточное действие',
    'Переход в другое измерение', 'Механические колебания', 'Периодическое действие',
    'Непрерывность полезного действия', 'Проскок', 'Обратить вред в пользу',
    'Обратная связь', 'Посредник', 'Самообслуживание', 'Копирование',
    'Дешёвая недолговечность', 'Замена механической схемы',
    'Пневмо- и гидроконструкции', 'Гибкие оболочки и плёнки', 'Пористые материалы',
    'Изменение окраски', 'Однородность', 'Отброс и регенерация частей',
    'Изменение физ.-хим. параметров', 'Фазовые переходы', 'Тепловое расширение',
    'Сильные окислители', 'Инертная атмосфера', 'Композиционные материалы',
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

  function buildPrinciples() {
    var el = document.getElementById('principles-grid');
    if (!el) return;
    el.innerHTML = PRINCIPLES.map(function (name, i) {
      return '<div class="principle"><span class="p-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="p-name">' + name + '</span></div>';
    }).join('');
  }

  function buildTicker() {
    var el = document.getElementById('ticker');
    if (!el) return;
    var seg = PRINCIPLES.map(function (name, i) {
      return '<span class="tk">' + String(i + 1).padStart(2, '0') + ' · ' + name + '</span>';
    }).join('');
    el.innerHTML = '<div class="ticker-inner"><div class="ticker-seg">' + seg + '</div><div class="ticker-seg">' + seg + '</div></div>';
  }

  buildBars();
  buildSparkline('header-spark');
  buildSparkline('rail-spark');
  buildMatrix();
  buildPrinciples();
  buildTicker();
})();
