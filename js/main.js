function switchTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function filterCards() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll("#searchResults .card");
  let count = 0;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const match = text.includes(input);
    card.style.display = match ? "block" : "none";
    if (match) count++;
  });

  document.getElementById("searchCount").textContent = `一致: ${count} 件`;
}

document.getElementById("searchInput").addEventListener("input", filterCards);

// テーマ切替
const themeSelect = document.getElementById("themeSelect");
themeSelect.addEventListener("change", () => {
  const value = themeSelect.value;
  if (value === "dark") {
    document.body.classList.add("dark");
  } else if (value === "light") {
    document.body.classList.remove("dark");
  } else {
    // システムに従う
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }
});


// 文字サイズ切替
const fontSizeSelect = document.getElementById("fontSizeSelect");
fontSizeSelect.addEventListener("change", () => {
  document.body.classList.remove("small", "medium", "large");
  document.body.classList.add(fontSizeSelect.value);
});

// 初期設定：中フォント
document.body.classList.add("medium");
