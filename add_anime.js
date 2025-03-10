document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire d'ajout d'Anime
    const addAnimeForm = document.getElementById('addAnimeForm');
    if (addAnimeForm) {
        addAnimeForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('animeName').value;
            const image = document.getElementById('animeImage').value.trim(); // On enlève les espaces vides
            const status = document.getElementById('animeStatus').value;
            const genre = document.getElementById('animeGenre').value;
            const note = document.getElementById('animeNote').value;

            // Vérifier si tous les champs sont remplis
            if (!name || !image || !status || !genre || !note) {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            // Récupérer les animes déjà stockés
            let animes = JSON.parse(localStorage.getItem('animes')) || [];

            // Ajouter le nouvel anime
            animes.push({ name, image, status, genre, note });

            // Mettre à jour le localStorage
            localStorage.setItem('animes', JSON.stringify(animes));

            alert(`Anime ajouté : ${name}`);

            // Réinitialiser le formulaire
            addAnimeForm.reset();

            // Rediriger vers la liste des animes
            window.location.href = "animes.html";
        });
    }
});
