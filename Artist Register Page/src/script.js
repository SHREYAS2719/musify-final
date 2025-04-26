let login = document.querySelector(".login");
let artist = document.querySelector(".artist-name");
let artistname = document.querySelector(".artist-hh-name");
let artistpass = document.querySelector(".artist-pass");
let artistregister = document.querySelector(".artist-register");
let register = document.getElementById("register");
const userlogin =document.getElementById("userlogin");


 // artist login authentication logic 

 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use

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
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 register.addEventListener("click", function(e){
  const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
e.preventDefault();
 createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
     console.log(userCredential.user.uid);
      alert("Register successfully!!");
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("error:", errorMessage); 
       alert("error: Firebase: Error (auth/invalid-email).")
   });
   });  

//    loged in artist into home page

   userlogin.addEventListener("click", function(e){
    const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
  e.preventDefault();
  signInWithEmailAndPassword (auth, email, password)
       .then((userCredential) => {
       console.log(userCredential.user.uid);
        alert("loged in successfully!!");
        window.location.href="/Home Page/src/userpage.html"
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log("error:", errorMessage); 
         alert("error: Firebase: Error (auth/invalid-email).")
     });
     }); 


    //  register to login page  changes
const number = 0;

login.addEventListener("click", function name() {   
    if(number == 0){
        
        artist.style.display = "none"
        artistname.style.display = "none"
        artistpass.style.display = "none"
        login.innerHTML = "Register"
        userlogin.display="block"
        // register.innerHTML = "Login"
        artistregister.innerHTML = "Artist Login"
        
        number = 1
    }else{
        artist.style.display = "block"
        artistname.style.display = "block"
        artistpass.style.display = "block"
        // login.innerHTML = "register"
        // artistregister.innerHTML = "Artist Register"
        // register.innerHTML = "login"
        number = 0
    }
}) 


login.addEventListener("click", function () {
    artist.animate([
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ], {
        duration: 800,
    })
})

login.addEventListener("click", function () {
    artistname.animate([
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ], {
        duration: 800,
    })
})

login.addEventListener("click", function () {
    artistpass.animate([
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ], {
        duration: 800,
    })
})

login.addEventListener("click", function () {
    login.animate([
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ], {
        duration: 800,
    })
})

login.addEventListener("click", function () {
    register.animate([ 
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ], {
        duration: 800,
    })
})






    