document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".view-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.parentElement;
      const img = card.querySelector("img");
      const defaultSrc = btn.dataset.default;
      const highlightSrc = btn.dataset.highlight;

      img.src = highlightSrc;

      setTimeout(() => {
        img.src = defaultSrc;
      }, 2000);
    });
  });
});
