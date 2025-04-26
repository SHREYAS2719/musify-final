const singers = [
  "Hariharan",
  "Asha Bhosle",
  "Shreya Ghoshal",
  "Suresh Wadkar",
  "Bela Shende",
  "Lata Mangeshkar",
  "Sadhana Sargam",
  "Kavita Krishnamurthy",
  "Shankar Mahadevan",
  "Usha Mangeshkar",
  "Avadhoot Gupte",
  "Roopkumar Rathod",
  "Kumar Sanu",
  "Abhijeet Bhattacharya",
  "Rekha Bhardwaj",
  "Kunal Ganjawala",
  "Vasantrao Deshpande",
  "Hemant Kumar",
  "KK",
  "Mahalakshmi Iyer",
  "Sudhir Phadke",
  "Aarya Ambekar",
  "Javed Ali",
  "Deenanath Mangeshkar",
  "Bhimsen Joshi",
  "Vaishali Samant",
  "Chandrashekhar Gadgil",
  "Anjali Kulkarni",
  "Shalmali Kholgade",
  "Neha Rajpal",
];

const singerImages = [
  "hariharan.jpeg",
  "asha.jpeg",
  "shreya.jpg",
  "suresh.jpg",
  "bela.jpg",
  "lata.jpg",
  "sadhana.webp",
  "kavita.jpg",
  "shankar.jpg",
  "usha.jpg",
  "shankar.jpg",
  "roopkumar.jpeg",
  "sanu.webp",
  "abhijeet.jpeg",
  "rekha.jpg",
  "kunal.webp",
  "vasantrao.jpg",
  "hemant.jpg",
  "kk.webp",
  "iyer.jpeg",
  "sudhir.jpg",
  "arya.jpeg",
  "javed.jpeg",
  "Deenanath.jpeg",
  "bhimsen.jpg",
  "vaishali.jpg",
  "bhimsen.jpg",
  "rekha.jpg",
  "kavita.jpg",
  "neha.jpeg",
];

const container = document.getElementById("singersContainer");
const nextButton = document.getElementById("nextButton");
let selectedSingers = [];

singers.forEach((singer, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const imgSrc =
    singerImages[index] ||
    `https://source.unsplash.com/200x200/?portrait,face&random=${index}`;
  card.innerHTML = `
        <img src="${imgSrc}" alt="${singer}">
        <h3>${singer}</h3>
    `;

  card.addEventListener("click", () => {
    if (selectedSingers.includes(singer)) {
      selectedSingers = selectedSingers.filter((s) => s !== singer);
      card.classList.remove("selected");
    } else if (selectedSingers.length < 3) {
      selectedSingers.push(singer);
      card.classList.add("selected");
    }

    nextButton.style.display = selectedSingers.length === 3 ? "block" : "none";
  });

  container.appendChild(card);
});


// onAuthStateChanged(auth, (user) => {
//   if (!user) {
//     window.location.href = "/Home Page/src/userpage.html";
//   }
// });
