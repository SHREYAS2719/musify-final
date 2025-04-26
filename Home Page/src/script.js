let menu = document.querySelector(".menu-icon");
let close = document.querySelector(".close");
let sidebar = document.querySelector(".side-menu-bar");
let playline = document.querySelector(".play-line");
let seemorebtn = document.querySelector(".see-more-btn");
let seemoreclick = document.querySelector(".see-more-click");
let seemore = document.querySelector(".see-more");
let randomsong = document.querySelector(".random-song");
let lessmoreclick = document.querySelector(".less-more-click");
let down = document.querySelector(".down");
let albumexplore = document.querySelector(".album-explore");
let bg = document.querySelector(".bg");
let mainloginpopun = document.querySelector(".main-login-popun");



menu.addEventListener("click", function () {
    sidebar.style.display = "block"
})

close.addEventListener("click", function () {
    sidebar.style.display = "none"
})

seemoreclick.addEventListener("click", function () {
    seemorebtn.style.display = "none"
    seemore.style.display = "flex"
    randomsong.style.height = "1000px"
})

lessmoreclick.addEventListener("click", function () {
    seemorebtn.style.display = "block"
    seemore.style.display = "none"
    randomsong.style.height = "500px"
})

const fullbody =document.getElementById("full body")

albumexplore.addEventListener("click", function () {
    bg.style.display = "block"
    mainloginpopun.style.display = "flex"

})


seemoreclick.addEventListener("click", function () {
    randomsong.animate([
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ], {
        duration: 1000,
    })
})



// single music play and pouse functianlities and songs play


let currentsong =0;

const music =document.getElementById("audio");
const seekbar =document.getElementById("progress");
const songname =document.getElementById("songname");
const artistname =document.getElementById("artistname");
const songimg =document.getElementById("songimg");
const currentTime =document.querySelector(".current-time");
const songduration =document.querySelector(".song-duration");
const backward =document.getElementById("backward");
const playicon =document.getElementById("playicon");
const pauseicon =document.getElementById("pauseicon");
const forward =document.getElementById("forward");


// play and pause function

playicon.addEventListener("click",function(){

if(playicon.className.includes('pause')){
music.play();
}

    playicon.style.display="none";
    pauseicon.style.display="block"
})

pauseicon.addEventListener("click",function(){

    if(playicon.className.includes('play')){
        music.pause();
        }
    pauseicon.style.display="none";
    playicon.style.display="block"
})


// music setup to the page

const setmusic =(i)=>{
    seekbar.value=0;

    let gana =songs[i];


    music.src=gana.path;
    currentsong = i;
    songname.innerText=gana.name;
    artistname.innerText=gana.artistname;
    songimg.style.backgroundImage= `url('${gana.cover}')`;
    currentTime.innerHTML='00:00'

setTimeout(() => {
    seekbar.max= music.duration;
    songduration.innerText= formatTime(music.duration);
}, 200);
    
}
setmusic(0);



// formating time mili sec to mini

const formatTime=(time)=>{
    let mini =Math.floor(time / 60);
    if(mini < 10){
        mini =`0${mini}`;
    }
    let sec =Math.floor(time % 60);
    if(sec < 10){
        sec =`0${sec}`;
    }

    return `${mini}:${sec}`;
}

// seek bar progress acording to song playing

setInterval(()=>{
    seekbar.value = music.currentTime;
    currentTime.innerHTML= formatTime(music.currentTime);
},500)

  seekbar.addEventListener("change",()=>{
    music.currentTime = seekbar.value;
})


//  forword nd backword btn working 

forward.addEventListener("click",function(){

if(currentsong >= songs.length -1)
   {
    currentsong = 0;
}else{
    currentsong++;
}

setmusic(currentsong);
playicon.click();
})

backward.addEventListener("click",function(){

    if(currentsong <= 0)
       {
        currentsong = songs.length -1;
    }else{
        currentsong--;
    }
    
    setmusic(currentsong);
    playicon.click();
    })
    
// Auto-play next song when current ends

music.addEventListener("ended", function () {
    if (isShuffle) {
        playRandomSong();
    } else {
        if (currentsong >= songs.length - 1) {
            currentsong = 0;
        } else {
            currentsong++;
        }
        setmusic(currentsong);
        music.play();
    }

    playicon.style.display = "none";
    pauseicon.style.display = "block";
});


    // function for playing playlist click songs 
    
  // Select all individual songs from the playlist

const songItems = document.querySelectorAll(".songs");

songItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    setmusic(index);
    music.play();

    // Optional: toggle UI elements to show pause icon
    playicon.style.display = "none";
    pauseicon.style.display = "block";
  });
});



// songs shuffels button

let isShuffle = false;

const shuffleBtn = document.querySelector(".shuffle-icon");

shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;

    // Toggle active class for visual feedback (optional)
    shuffleBtn.classList.toggle("active");

    if (isShuffle) {
        shuffleBtn.style.color = "#1DB954"; // green like Spotify
    } else {
        shuffleBtn.style.color = "#fff"; // back to white
    }
});

const playRandomSong = () => {
    let randomIndex = Math.floor(Math.random() * songs.length);
    
    // Avoid repeating the current song
    while (randomIndex === currentsong) {
        randomIndex = Math.floor(Math.random() * songs.length);
    }

    currentsong = randomIndex;
    setmusic(currentsong);
    music.play();
}




// search bar functionalites

// Search Functionality
// const searchInput = document.querySelector(".searchbar");
// const songListContainer = document.querySelector(".song-list");
// const allSongs = document.querySelectorAll(".songs");

// // Create a message element for 'no song found'
// const noSongMessage = document.createElement("div");
// noSongMessage.style.color = "white";
// noSongMessage.style.textAlign = "center";
// noSongMessage.style.padding = "20px";
// noSongMessage.innerText = "No such song found.";
// noSongMessage.style.display = "none";
// songListContainer.appendChild(noSongMessage);

// searchInput.addEventListener("input", () => {
//     const searchValue = searchInput.value.toLowerCase();
//     let matchFound = false;

//     allSongs.forEach(song => {
//         const songName = song.querySelector("h1").innerText.toLowerCase();
//         const artistName = song.querySelector("p").innerText.toLowerCase();

//         if (songName.includes(searchValue) || artistName.includes(searchValue)) {
//             song.style.display = "flex";
//             matchFound = true;
//         } else {
//             song.style.display = "none";
//         }
//     });

//     noSongMessage.style.display = matchFound ? "none" : "block";
// });



// search bar functionalities 

const searchInput = document.querySelector(".searchbar");
const songListContainer = document.querySelector(".song-list");
const allSongs = document.querySelectorAll(".songs");

const homeSections = document.querySelectorAll(
    ".poster-box, .playlist-section, .artist-section, .song-header, .see-more-btn, .see-more"
);

const noSongMessage = document.createElement("div");
noSongMessage.style.color = "white";
noSongMessage.style.textAlign = "center";
noSongMessage.style.fontSize = "1.2rem";
noSongMessage.style.padding = "50px 0";
noSongMessage.innerText = "No songs found matching your search.";
noSongMessage.style.display = "none";
songListContainer.appendChild(noSongMessage);

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    let matchFound = false;

    if (searchValue.length > 0) {
        // Hide all home sections
        homeSections.forEach(section => {
            section.style.display = "none";
        });

        // Show song list only
        songListContainer.style.display = "flex";
        songListContainer.style.flexDirection = "column";

        // Filter songs
        allSongs.forEach(song => {
            const songName = song.querySelector("h1").innerText.toLowerCase();
            const artistName = song.querySelector("p").innerText.toLowerCase();

            if (songName.includes(searchValue) || artistName.includes(searchValue)) {
                song.style.display = "flex";
                matchFound = true;
            } else {
                song.style.display = "none";
            }
        });

        // Toggle "no song found" message
        noSongMessage.style.display = matchFound ? "none" : "block";
    } else {
        // If search is cleared
        homeSections.forEach(section => {
            section.style.display = "";
        });

        allSongs.forEach(song => {
            song.style.display = "flex";
        });

        noSongMessage.style.display = "none";
    }
});


// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//       window.location.href = "/User Register Page/src/userpage.html";
//     }
//   });
  






