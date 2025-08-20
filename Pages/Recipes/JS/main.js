// main.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const recipeCards = document.querySelectorAll(".recipe-card");
  const noResults = document.getElementById("noResults");

  if (!searchInput || !recipeCards.length) return;

  const filterCards = (query) => {
    const q = query.trim().toLowerCase();
    let visibleCount = 0;

    recipeCards.forEach(card => {
      const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const keywords = (card.getAttribute("data-keywords") || "").toLowerCase();
      const match = title.includes(q) || keywords.includes(q);

      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    if (noResults) noResults.style.display = visibleCount === 0 ? "block" : "none";
  };

  searchInput.addEventListener("input", (e) => filterCards(e.target.value));
});
