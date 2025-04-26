document.addEventListener("DOMContentLoaded", function() {
    const genres = [
        "Music of India", "Indian classical music", "Hindustani classical music", "Folk music", "Carnatic music", "Hindi film music", "Indian pop",
        "Vocal music", "Qawwali", "Thumri", "Music of Punjab", "Bhajan", "Bhangra", "Chaiti", "Ghazal", "Rabindra Sangeet", "Filmi", "Indian folk music",
        "Khyal", "Hindi cinema", "Baithak Gana", "Gaana", "Sadra", "Ladishah", "Odissi music", "Dadra", "Bhavageete", "Devotional song", "Mand", "Bandish",
        "Tappa", "Sufi music", "Kajari", "Music in ancient India", "Raga rock", "Odissi", "Dhrupad", "Music of Rajasthan", "Hindu music", "Hori",
        "Indigenous music of North America", "Dhamar", "Bharatanatyam", "Kathak", "Garba"
    ];
    
    const container = document.getElementById("music-genres");
    const title = document.createElement("h2");
    title.id = "title";
    title.textContent = "Select Any Three Genres";
    document.body.insertBefore(title, container);
    
    const selectedGenres = [];
    
    genres.forEach((genre, index) => {
        const box = document.createElement("div");
        box.className = "genre-box";
        box.style.backgroundColor = `hsl(${index * 15 % 360}, 70%, 50%)`;
        
        const h3 = document.createElement("h3");
        h3.textContent = genre;
        
        box.appendChild(h3);
        container.appendChild(box);
        
        box.addEventListener("click", function() {
            if (selectedGenres.includes(genre)) {
                selectedGenres.splice(selectedGenres.indexOf(genre), 1);
                box.classList.remove("selected");
            } else {
                if (selectedGenres.length < 3) {
                    selectedGenres.push(genre);
                    box.classList.add("selected");
                }
            }
            document.getElementById("next-button").style.display = selectedGenres.length === 3 ? "block" : "none";
        });
    });
    
    const nextButton = document.createElement("button");
    nextButton.id = "next-button";
    nextButton.textContent = "Next";
    document.body.appendChild(nextButton);
});


// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//       // Agar user logged out hai, to login page pe bhejo
//       window.location.href = "/pick up artists page/index.html";
//     }
//   });
  