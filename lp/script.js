/* ═══════════════════════════════════════════
   arcwove LP — script.js
═══════════════════════════════════════════ */

// ══════════════════════════════════════════
// ★ 本番デプロイ時はこのURLを変更してください ★
// 開発: http://localhost:5173
// 本番: https://arcwove.com
// ══════════════════════════════════════════
var SITE_URL = 'http://localhost:5173';

// ★ 本番デプロイ時: 'https://api.arcwove.com' など実際のAPIサーバーURLに変更
var API_URL = 'http://localhost:8000';

// ── CTA リンク設定 ──
document.querySelectorAll('[data-cta]').forEach(function (el) {
  var plan = el.getAttribute('data-cta');
  el.href = plan
    ? SITE_URL + '/#/counseling?plan=' + plan
    : SITE_URL + '/#/counseling';
});

// ── スクロールアニメーション ──
(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();

// ── ナビ スクロール状態 ──
(function () {
  var nav = document.querySelector('nav');
  function update() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ── サイト診断 ──
(function () {
  var btn     = document.getElementById('analyze-btn');
  var input   = document.getElementById('analyze-url');
  var errEl   = document.getElementById('analyze-error');
  var results = document.getElementById('results');

  if (!btn) return;

  function showError(msg) { errEl.textContent = msg; }
  function clearError()   { errEl.textContent = ''; }

  function runAnalyze(url) {
    clearError();
    btn.disabled = true;
    btn.textContent = '診断中...';

    fetch(API_URL + '/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: url })
    })
      .then(function (res) {
        if (!res.ok) return res.json().then(function (d) { throw new Error(d.detail || '解析できませんでした'); });
        return res.json();
      })
      .then(function (data) {
        renderResults(data);
        results.style.display = '';
        results.querySelectorAll('[data-cta]').forEach(function (el) {
          var plan = el.getAttribute('data-cta');
          el.href = plan ? SITE_URL + '/#/counseling?plan=' + plan : SITE_URL + '/#/counseling';
        });
        results.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
      .catch(function (e) {
        showError(e.message || '解析できませんでした。しばらくしてから再試行してください。');
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = '診断する';
      });
  }

  function renderResults(data) {
    document.getElementById('result-total-num').textContent = data.total_score;

    [
      ['visual',      data.scores.visual_flow],
      ['cognitive',   data.scores.cognitive_load],
      ['trust',       data.scores.trust],
      ['consistency', data.scores.consistency],
      ['cta',         data.scores.cta],
    ].forEach(function (pair) {
      document.getElementById('bar-' + pair[0]).style.width = pair[1] + '%';
      document.getElementById('val-' + pair[0]).textContent = pair[1];
    });

    var issuesEl = document.getElementById('result-issues');
    issuesEl.innerHTML = '';
    (data.issues || []).forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item.problem;
      issuesEl.appendChild(li);
    });

    var impEl = document.getElementById('result-improvements');
    impEl.innerHTML = '';
    (data.improvements || []).forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item.action + (item.impact ? ' — ' + item.impact : '');
      impEl.appendChild(li);
    });
  }

  btn.addEventListener('click', function () {
    var url = input.value.trim();
    if (!url) { showError('URLを入力してください'); return; }
    if (!/^https?:\/\/.+/.test(url)) { showError('http:// または https:// から始まるURLを入力してください'); return; }
    runAnalyze(url);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') btn.click();
  });
})();

// ── アンカースムーススクロール ──
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var id = this.getAttribute('href');
    if (id === '#') return;
    var target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
