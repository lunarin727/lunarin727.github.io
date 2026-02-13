const itemsPerPage = 10; // 한 페이지에 보여줄 post 개수
  const items = document.querySelectorAll('.post-item');
  const pageButtons = document.querySelectorAll('.page-btn');

function showPage(page) {
  const pageIndex = page - 1;
  const start = pageIndex * itemsPerPage;
  const end = start + itemsPerPage;

  // 모든 아이템 숨기기
  items.forEach((item, index) => {
    if (index >= start && index < end) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  // 버튼 active 표시
  pageButtons.forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.page) === page);
  });
}

// 페이지 버튼 클릭 이벤트
pageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const page = Number(btn.dataset.page);
    showPage(page);
  });
});

// 초기 1페이지 표시
showPage(1);