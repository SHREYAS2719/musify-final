

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyASSEZVohAgrR2ow01yP8DyoWAYXk-n5bU",
    authDomain: "admin-login-b919a.firebaseapp.com",
    projectId: "admin-login-b919a",
    storageBucket: "admin-login-b919a.firebasestorage.app",
    messagingSenderId: "720534832159",
    appId: "1:720534832159:web:9366ca30351279d17b012a",
    measurementId: "G-VFC6HVS9LJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);




  
const submit=document.getElementById("submit");

submit.addEventListener("click",function(e){
  
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  e.preventDefault();
  
  
  signInWithEmailAndPassword(auth, email, password)
  
      .then((userCredential) => {
      console.log(userCredential.user.uid)
      window.location.href='/admindashboard/admin.html';
      })
      .catch((error) => {
  console.error("Sign-in error:", error.message);
      });
      if(email ==="" || password ===""){
        alert("Fill the form first");
      }else{
alert("signed in successfully!!")

       
      }
  })  


  console.log("gooooooddd")


