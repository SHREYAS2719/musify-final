

// upload songs and store inside the firebase realtime database

const uploadbtn = document.querySelector(".next-btn");
const songupload = document.querySelector(".form-section");

const firebaseConfig = {
  apiKey: "AIzaSyA91acLw4QeIukmP_6hS3eCz17kTU2sakM",
  authDomain: "musify-artist.firebaseapp.com",
  databaseURL: "https://musify-artist-default-rtdb.firebaseio.com",
  projectId: "musify-artist",
  storageBucket: "musify-artist.firebasestorage.app",
  messagingSenderId: "986362565699",
  appId: "1:986362565699:web:7943edc68972208785f0f6",
  measurementId: "G-MB322NR9XC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("Uploaded Songs");

uploadbtn.addEventListener("click", function(e) {
  e.preventDefault();

  const releasename = document.getElementById("releasename").value;
  const songlangauge = document.getElementById("songlangauge").value;
  const genre = document.getElementById("genre").value;
  const year = document.getElementById("year").value;
  const lyricslan = document.getElementById("lyricslan").value;
  const content = document.getElementById("content").value;
  const origin = document.getElementById("origin").value;
  const writer = document.getElementById("writer").value;
  const production = document.getElementById("production").value;

  ref.push({
    ReleaseName: releasename,
    Songlangauge: songlangauge,
    Genre: genre,
    ReleaseDate: year,
    Lyricslanguage: lyricslan,
    Content: content,
    Origin: origin,
    Writer: writer,
    Production: production
  })
  .then(() => {
    alert("Song Uploaded Successfully!!");
    songupload.reset();
  })
  .catch((error) => {
    console.error("Error uploading song: ", error);
    alert("Error uploading song. Please try again.");
  });
});


// track and artist img uploaded


document.addEventListener("DOMContentLoaded", () => {
    const imageUploadButton = document.querySelector("#uploadimg input");
    const artworkContainer = document.querySelector(".artwork");
    const trackUploadButton = document.querySelector(".track-upload button");
    const trackUploadSection = document.querySelector(".track-upload h1");
    
    // Image upload event
    imageUploadButton.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                artworkContainer.style.backgroundImage = `url(${e.target.result})`;
                artworkContainer.style.backgroundSize = "cover";
                artworkContainer.style.backgroundPosition = "center";
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file.");
        }
    });

    // Music upload event
    trackUploadButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default form submission
        
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "audio/*";
        
        fileInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                trackUploadSection.textContent = `Uploaded:     ${file.name}`;
            }
        });
        
        fileInput.click();
    });
});






