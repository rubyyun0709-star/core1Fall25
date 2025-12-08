 <script>
    const entryImages = document.querySelectorAll(".entry img");

    entryImages.forEach(img => {
      img.addEventListener("dblclick", () => {
        const target = img.dataset.target;
        if(target) {
          window.location.href = target;
        }
      });
    });
  </script>