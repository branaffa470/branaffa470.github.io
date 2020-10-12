 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDz9x6e7GXwC5T48LhDr-M89tZlVw0D23w",
  authDomain: "wordbuilder-cpeg470.firebaseapp.com",
  databaseURL: "https://wordbuilder-cpeg470.firebaseio.com",
  projectId: "wordbuilder-cpeg470",
  storageBucket: "wordbuilder-cpeg470.appspot.com",
  messagingSenderId: "170777246838",
  appId: "1:170777246838:web:f1321413a1de2120e5f357"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let myDatabase = firebase.database();
myDatabase.ref("dictionary").once('value', ss=>{
  alert(ss.val());
});