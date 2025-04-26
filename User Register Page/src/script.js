let hereclick = document.querySelector(".here-click");
let signup = document.querySelector(".sign-up");
let sidehereclick = document.querySelector(".side-here-click");


hereclick.addEventListener("click", function(){
    signup.style.display = "flex"
    signup.style.width = "100%"
    login.style.width = "100%"
    login.style.border = "none"
})

sidehereclick.addEventListener("click", function(){
    signup.style.display = "none"
    signup.style.width = "100%"
    login.style.width = "100%"
    login.style.border = "none"
})

// firebase auth code 

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

import { getDatabase,set,get,ref } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAoMNQWP9TTbnFIffkHFsQ_Rz1avAWLVyw",
    authDomain: "musify-8d8b3.firebaseapp.com",
    databaseURL: "https://musify-8d8b3-default-rtdb.firebaseio.com",
    projectId: "musify-8d8b3",
    storageBucket: "musify-8d8b3.firebasestorage.app",
    messagingSenderId: "98427509533",
    appId: "1:98427509533:web:964da31bf1857f90a39ff4",
    measurementId: "G-Z1V31SB6G0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getDatabase(app);





// write data into firebase realtime database 

function writeuserdata(userid,name,email){
set(ref(db,'Admin/' + userid),{
  name:name,
  email:email
})
}
writeuserdata(1,"shreyas" , "shreyas12@.com");


// get data from realtime database

function readdata(){
  const userref = ref(db,'users');

get(userref).then((snapshot)=>{
  snapshot.forEach((childsnapshot) => {
    // console.log(childsnapshot.val());
  });
})

}
readdata();








// login 

const login=document.getElementById("login");



login.addEventListener("click",function(e){
  
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
e.preventDefault();

createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
    console.log(userCredential.user.uid)
    
    })
    .catch((error) => {
  console.error("Sign-up error:");
    });
    if(email =="" || password==""){
      alert("Fill the form first");
    }else{
     alert("Register  successfully!!")
     alert("pls click Login Redirect to Home Page")
    }
})


// sinned in into home page

const Signin=document.getElementById("Signin");

Signin.addEventListener("click",function(e){
  
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  e.preventDefault();
  
  
  signInWithEmailAndPassword(auth, email, password)
  
      .then((userCredential) => {
      console.log(userCredential.user.uid)
      window.location.href='/Gnere Page/index.html';
      
      })
      .catch((error) => {
  alert("Sign-in error:", error.message);
      });
      if(email ==="" || password ===""){
        alert("Fill the form first");
      }else{
alert("Loged in successfully!!")

       
      }
  })  









// Forgot Password Functionality
const forgotPasswordLink = document.querySelector('.forgot-password-link');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeModal = document.querySelector('.close-modal');
const resetPasswordForm = document.getElementById('resetPasswordForm');
const resetMessage = document.getElementById('resetMessage');

// Show modal when forgot password link is clicked
forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  forgotPasswordModal.style.display = 'block';
});

// Close modal when X is clicked
closeModal.addEventListener('click', () => {
  forgotPasswordModal.style.display = 'none';
  resetMessage.style.display = 'none';
  resetPasswordForm.reset();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === forgotPasswordModal) {
    forgotPasswordModal.style.display = 'none';
    resetMessage.style.display = 'none';
    resetPasswordForm.reset();
  }
});

// Handle password reset form submission
resetPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('resetEmail').value;
  
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Success message
      resetPasswordForm.style.display = 'none';
      resetMessage.style.display = 'block';
      resetMessage.innerHTML = `
        Password reset email sent to ${email}. 
        Please check your inbox and follow the instructions.
      `;
      resetMessage.style.color = 'green';
      console.log(email)
      // Hide modal after 5 seconds
      setTimeout(() => {
        forgotPasswordModal.style.display = 'none';
        resetPasswordForm.style.display = 'block';
        resetMessage.style.display = 'none';
        resetPasswordForm.reset();
      }, 5000);
    })
    .catch((error) => {
      // Error handling
      let errorMessage = "Error sending reset email. Please try again.";
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No user found with this email address.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "The email address is invalid.";
      }
      
      resetMessage.style.display = 'block';
      resetMessage.innerHTML = errorMessage;
      resetMessage.style.color = 'red';
    });
});





// onsate change user code


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // If user is logged in, redirect to the user home page
//     console.log("User is logged in:", user.email);
//     // window.location.href = "/Home Page/src/userpage.html"; // Adjust path if needed
//   } else {
//     // If user is logged out, return to the login page
//     console.log("User is logged out");
//     if (window.location.pathname !== "/userpage.html") {
//       window.location.href = "/User Register Page/src/userpage.html"; // Change to your login page's filename
//     }
//   }
// });


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // Agar user login ho gaya hai, to Genre page pe redirect karo
//     window.location.href = "/Gnere Page/index.html";
//   }
// });



  console.log("gooooooddd")

