<script>
  // 모든 entry 이미지 선택
  const entryImages = document.querySelectorAll('.entry img');

  entryImages.forEach(img => {
    // 더블클릭 이벤트 추가
    img.addEventListener('dblclick', () => {
      const targetPage = img.getAttribute('data-target'); // data-target 속성 읽기
      if (targetPage) {
        window.location.href = targetPage; // 해당 페이지로 이동
      } else {
        console.warn('data-target 속성이 없습니다:', img);
      }
    });
  });
</script>
