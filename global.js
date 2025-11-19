// There is currently no JavaScript code here.
document.addEventListener('DOMContentLoaded', () => {
  const bar  = document.getElementById('categoryBar');   // ボタンの帯
  const grid = document.getElementById('serviceGrid');   // カードの帯
  if (!bar || !grid) return;

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;

    // --- ボタン側：active を付ける＆ボタン自体も中央にスクロール ---
    bar.querySelectorAll('.category-btn').forEach(b => {
      b.classList.toggle('active', b === btn);
    });

    const btnLeft = btn.offsetLeft - (bar.clientWidth - btn.offsetWidth) / 2;
    bar.scrollTo({ left: btnLeft, behavior: 'smooth' });

    // --- カード側：対応する service-card を中央にスクロール ---
    const category = btn.dataset.category;
    const card = grid.querySelector(`.service-card[data-category="${category}"]`);
    if (!card) return;

    const cardLeft = card.offsetLeft - (grid.clientWidth - card.offsetWidth) / 2;
    grid.scrollTo({ left: cardLeft, behavior: 'smooth' });
  });

  // ページ読み込み時、最初のボタンのカードを中央にする
  // ページ読み込み時、最初にキッチンを中央にする
const initBtn = bar.querySelector('.category-btn[data-category="キッチン"]');
if (initBtn) initBtn.click();
});
