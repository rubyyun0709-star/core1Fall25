<script>
    function animateText(id) {
      const el = document.getElementById(id);
      el.classList.remove('animate-text'); // reset animation
      void el.offsetWidth; // trigger reflow
      el.classList.add('animate-text');
    }
  </script>