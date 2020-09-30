var firebaseConfig = {
    apiKey: "AIzaSyDIgD42KQaZHPtuDfMky53pBl6QHLyuI9U",
    authDomain: "cpeg470-p1.firebaseapp.com",
    databaseURL: "https://cpeg470-p1.firebaseio.com",
    projectId: "cpeg470-p1",
    storageBucket: "cpeg470-p1.appspot.com",
    messagingSenderId: "216143523871",
    appId: "1:216143523871:web:70f829b7d13859dc2f652a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let myDatabase = firebase.database();
myDatabase.ref("dictionary").child("numstarters").once('value', ss => {

    let rackcount = parseInt(ss.val());
    let randomrack = parseInt(Math.floor(rackcount * Math.random()));

    myDatabase.ref("dictionary").child("starters").child(randomrack).once('value', ss2 => {


        alert(ss2.val());
    });


})

