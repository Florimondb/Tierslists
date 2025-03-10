document.addEventListener('DOMContentLoaded', function() {
    const animeGrid = document.getElementById('animeGrid');

    if (!animeGrid) return;

    animeGrid.innerHTML = ""; // Supprime l'ancien contenu

    let animes = JSON.parse(localStorage.getItem('animes')) || [];

    if (animes.length === 0) {
        animeGrid.innerHTML = "<p>Aucun anime ajouté pour le moment.</p>";
        return;
    }

    animes.forEach(anime => {
        if (anime.name && anime.image) {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${anime.image}" alt="${anime.name}" onerror="this.onerror=null; this.src='default.jpg';">
                <h3>${anime.name}</h3>
                <p>Statut: ${anime.status}</p>
                <p>Genre: ${anime.genre}</p>
                <p>Note: ${anime.note}/10</p>
            `;

            animeGrid.appendChild(card);
        }
    });
});
