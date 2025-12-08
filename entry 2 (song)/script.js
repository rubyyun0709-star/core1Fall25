const buttons = document.querySelectorAll('.experience-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.parentElement.querySelector('img');
    const whiteSrc = btn.dataset.white;
    const colorSrc = btn.dataset.color;

    // 원래 이미지로 돌아오는 기능 추가
    img.src = colorSrc; // 클릭 즉시 컬러 이미지
    setTimeout(() => {
      img.src = whiteSrc; // 3초 후 원래 흑백 이미지로
    }, 2000);
  });
});
