// JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // === サービスカードのスクロール ===
  const bar  = document.getElementById('categoryBar');   // ボタンの帯
  const grid = document.getElementById('serviceGrid');   // カードの帯
  if (bar && grid) {
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-btn');
      if (!btn) return;

      // ボタンの active 切り替え
      bar.querySelectorAll('.category-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
      });

      // ボタンを中央にスクロール
      const btnLeft = btn.offsetLeft - (bar.clientWidth - btn.offsetWidth) / 2;
      bar.scrollTo({ left: btnLeft, behavior: 'smooth' });

      // 対応カードを中央にスクロール
      const category = btn.dataset.category;
      const card = grid.querySelector(`.service-card[data-category="${category}"]`);
      if (!card) return;

      const cardLeft = card.offsetLeft - (grid.clientWidth - card.offsetWidth) / 2;
      grid.scrollTo({ left: cardLeft, behavior: 'smooth' });
    });

    // 初期状態：キッチンを中央に
    const initBtn = bar.querySelector('.category-btn[data-category="キッチン"]');
    if (initBtn) initBtn.click();
  }

  // === Q&A の開閉処理 ===
  document.querySelectorAll('.qa-item').forEach(item => {
    const question = item.querySelector('.qa-question');
    if (!question) return;

    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});
});
