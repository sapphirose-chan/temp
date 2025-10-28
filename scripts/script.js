fetch('data/characters.json')
  .then(res => res.json())
  .then(characters => {
    const grid = document.getElementById('character-grid');

    // Xóa nội dung cũ
    grid.innerHTML = '';

    // Hàm render grid
    function renderGrid() {
      grid.innerHTML = '';
      const containerWidth = grid.clientWidth; // chiều rộng div container
      const itemMinWidth = 150; // width tối thiểu 1 ô nhân vật
      const gap = 20; // gap grid
      const cols = Math.floor((containerWidth + gap) / (itemMinWidth + gap)); // số cột vừa đủ
      const itemsToShow = cols * 2; // 2 hàng
      const visibleChars = characters.slice(0, itemsToShow); // chỉ hiển thị số cần

      visibleChars.forEach(c => {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerHTML = `
          <img src="${c.image}" alt="${c.name}">
          <p>${c.name}</p>
        `;
        grid.appendChild(div);
      });
    }

    // Render lần đầu
    renderGrid();

    // Render lại khi resize cửa sổ
    window.addEventListener('resize', renderGrid);
  });
