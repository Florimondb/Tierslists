document.addEventListener('DOMContentLoaded', function() {
  const addWebtoonForm = document.getElementById('addWebtoonForm');

  addWebtoonForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const webtoon = {
      name: document.getElementById('webtoonName').value,
      image: document.getElementById('webtoonImage').value,
      status: document.getElementById('webtoonStatus').value,
      genre: document.getElementById('webtoonGenre').value,
      note: document.getElementById('webtoonNote').value
    };

    // Récupérer les Webtoons existants depuis localStorage
    let webtoons = JSON.parse(localStorage.getItem('webtoons')) || [];

    // Ajouter le nouveau Webtoon
    webtoons.push(webtoon);
    localStorage.setItem('webtoons', JSON.stringify(webtoons));

    alert(`Webtoon ajouté : ${webtoon.name}`);

    // Réinitialiser le formulaire
    addWebtoonForm.reset();

    // Redirection vers la page des Webtoons après ajout
    window.location.href = "webtoons.html";
  });
});
