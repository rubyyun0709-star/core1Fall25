<script>
const buttons = document.querySelectorAll('.pin-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    const img = card.querySelector('img');
    const messages = JSON.parse(btn.dataset.messages);

    // 랜덤 메시지 선택
    const pinText = messages[Math.floor(Math.random() * messages.length)];

    const pin = document.createElement('div');
    pin.className = 'pin';
    pin.textContent = pinText;

    pin.style.left = (Math.random() * (img.width - 100)) + 'px';
    pin.style.top = (Math.random() * (img.height - 30)) + 'px';
    card.appendChild(pin);

    // 드래그 기능
    let offsetX, offsetY, isDragging = false;

    pin.addEventListener('mousedown', e => {
      isDragging = true;
      offsetX = e.clientX - pin.offsetLeft;
      offsetY = e.clientY - pin.offsetTop;
      pin.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left - offsetX;
      let y = e.clientY - rect.top - offsetY;

      x = Math.max(0, Math.min(rect.width - pin.offsetWidth, x));
      y = Math.max(0, Math.min(rect.height - pin.offsetHeight, y));

      pin.style.left = x + 'px';
      pin.style.top = y + 'px';
    });

    pin.addEventListener('mouseup', e => {
      isDragging = false;
      pin.style.cursor = 'grab';
    });

    pin.addEventListener('mouseleave', e => {
      isDragging = false;
      pin.style.cursor = 'grab';
    });
  });
});
</script>
