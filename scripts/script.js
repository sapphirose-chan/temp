fetch('../data/characters.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('character-grid');
    data.forEach(c => {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      div.innerHTML = `
        <img src="${c.image}" alt="${c.name}">
        <p>${c.name}</p>
      `;
      grid.appendChild(div);
    });
  });
