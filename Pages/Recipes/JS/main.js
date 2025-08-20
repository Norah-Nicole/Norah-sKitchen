// Search filter for recipes
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const recipeCards = document.querySelectorAll(".recipe-card");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();

      recipeCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(filter)) {
          card.style.display = "block"; // show
        } else {
          card.style.display = "none"; // hide
        }
      });
    });
  }
});
