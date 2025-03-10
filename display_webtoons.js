document.addEventListener('DOMContentLoaded', function() {
    const webtoonGrid = document.getElementById('webtoonGrid');
  
    // Récupérer les Webtoons du localStorage
    let webtoons = JSON.parse(localStorage.getItem('webtoons')) || [];
  
    // Afficher chaque Webtoon dans la liste
    webtoons.forEach(webtoon => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <img src="${webtoon.image}" alt="${webtoon.name}">
        <h3>${webtoon.name}</h3>
        <p>Statut: ${webtoon.status}</p>
        <p>Genre: ${webtoon.genre}</p>
        <p>Note: ${webtoon.note}/10</p>
      `;
  
      webtoonGrid.appendChild(card);
    });
  });
  