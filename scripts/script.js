fetch('data/characters.json')
  .then(res => res.json())
  .then(characters => {
    const grid = document.getElementById('character-grid');

    function renderGrid() {
      grid.innerHTML = '';

      const containerWidth = grid.clientWidth;
      const itemMinWidth = 65;
      const gap = 20;
      const cols = Math.floor((containerWidth + gap) / (itemMinWidth + gap));
      const itemsToShow = cols * 2;
      const visibleChars = characters.slice(0, itemsToShow);

      // **CẬP NHẬT số cột cho grid**
      grid.style.gridTemplateColumns = `repeat(${cols}, ${itemMinWidth}px)`;

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

    renderGrid();
    window.addEventListener('resize', renderGrid);
  });
