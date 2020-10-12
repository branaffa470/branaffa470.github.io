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

//$("#guesses").hide();

let myDatabase = firebase.database();
var level = -1;
var wrongWord;
var strikes = 0;
var wordCombos;
var correctWords;
var temp = 0;


function nextLevel() {
  $("#possWords").empty();
  $("#jumbledWord").empty();
  $("#wrong").empty();
  $("#bot").empty();
  strikes = 0;
  correctWords = 0;
  temp = 0;
}

function reset() {

  $("#instructions").show();
  $("#title").show();
  $("#start").show();
  $("#jumbledWord").hide();
  $("#guesses").hide();
  $("#check").hide();
  $("#wrong").hide();
  $("#possWords").empty();
  $("#wrong").empty();
  $("#bot").empty();
  level = -1;
  strikes = 0;
  correctWords = 0;
  temp = 0;

}

function playGame() {
  nextLevel();
  $("#instructions").hide();
  $("#title").hide();
  $("#start").hide();
  $("#jumbledWord").show();
  $("#guesses").show();
  $("#check").show();
  $("#wrong").show();
  $("#bot").append('<div id = "wrong">Incorrect Responses so far...</div>');
  level++;
  myDatabase.ref("dictionary").child("starters").child(level).once('value', ss => {
    let word = ss.val();
    $("#jumbledWord").append(word);
    myDatabase.ref("dictionary").child("combos").child(word).once('value', ss2 => {
      wordCombos = ss2.val();
      console.log(wordCombos);
      for (var j = 0; j < wordCombos.length; j++) {
        let wordLength = wordCombos[j].length;

        if (wordLength === 3) {
          $("#possWords").append('<div class = "slot" id ="' + j + '"> - - - </div>');
        }
        else if (wordLength === 4) {
          $("#possWords").append('<div class = "slot" id ="' + j + '"> - - - - </div>');
        }
        else if (wordLength === 5) {
          $("#possWords").append('<div class = "slot" id ="' + j + '"> - - - - - </div>');
        }
        else if (wordLength === 6) {
          $("#possWords").append('<div class = "slot" id ="' + j + '"> - - - - - - </div>');
        }
      }


    });


  });
}


function checkWord() {

  for (var x = 0; x < wordCombos.length; x++) {
    if ($("#guesses").val() === wordCombos[x]) {
      correctWords++;
      document.getElementById(x).innerHTML = wordCombos[x];
    }
  }


  if (correctWords > temp) {
    temp = correctWords;
  }
  else {
    wrongWord = $("#guesses").val();
    strikes++;
    if (strikes === 6) {
      $("#wrong").append(" " + wrongWord);
      alert("GAME OVER: Best Level was " + (level + 1));
      reset();
    }
    else {
      $("#wrong").append(" " + wrongWord + ",");
    }
  }



  if (correctWords === wordCombos.length) {
    alert("Level Complete!");
    playGame();
    if (level > 4) {
      alert("YOU WIN!");
      reset();
    }
  }
}

function instruction(){
  $("#instructions").hide();
  $("#rules").show();
  $("#return").show();
}

function returnB(){
  $("#instructions").show();
  $("#rules").hide();
  $("#return").hide();
}





