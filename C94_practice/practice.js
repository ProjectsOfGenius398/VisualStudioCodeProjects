
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyBIsiRST88rdxcJcrS-iYwjDjXiO-r01J4",
  authDomain: "chat-test-fc546.firebaseapp.com",
  projectId: "chat-test-fc546",
  storageBucket: "chat-test-fc546.appspot.com",
  messagingSenderId: "591256458619",
  appId: "1:591256458619:web:05b47458148b489fe559de",
  measurementId: "G-L5VL27ND16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


function addUser(){
    user_name=document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}