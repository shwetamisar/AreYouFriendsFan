//read input feom user
var readlineSync = require('readline-sync');
console.log("--------------------------------");
console.log("Let's play quiz on FRIENDS");
console.log("---------------------------------");

var userName = readlineSync.question("\nWhat is your name ? ");
console.log("\nWelcome " + userName + " \nAre You A True FRIENDS Fan")
//count score 
var countScore = 0

//check if user answer is valid or not
function checkAnswer(question, optionA, optionB, optionC, optionD, answer) {
  console.log("\nselect ONE OPTION from A,B,C,D");
  console.log(question + "\nA: " + optionA + "\nB: " + optionB + "\nC: " + optionC + "\nD:" + optionD);


  var userAnswer = readlineSync.question("Your answer: ");
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("\nKudos to you!! ");
    countScore++;
    console.log("Current score: " + countScore);
  }
  else
    console.log("\nBetter luck next time..");

  console.log("---------------------");

}


//store question and answer in array
var questionList = [
  {
    question: "\nWhat is the name of Joey’s acting agent?",
    optionA: "Andrea",
    optionB: "Estelle",
    optionC: "Martha",
    optionD: "Carole",
    answer: "B"
  },
  {
    question: "\nChandler and Joey had two pets. What were they called? ? ",
    optionA: "Don and Ivana",
    optionB: "Brian and Larry",
    optionC: "Walter and Sergio",
    optionD: "Chick Jr. and Duck Jr.",
    answer: "D"
  },
  {
    question: "\nWhere do Rachel and Ross go on their first date? ",
    optionA: "The cinema",
    optionB: "Ross's museum",
    optionC: "Central Perk",
    optionD: "The Empire State Building",
    answer: "A"
  },
  {
    question: "\n What are Monica and Ross' parents called? ",
    optionA: "Jack and Judy",
    optionB: "Jack and Jill",
    optionC: "Peter and Margaret",
    optionD: "Gerry and Mary",
    answer: "A"
  },
  {
    question: "\n Which character says the last ever line in the series?",
    optionA: "Gunther",
    optionB: "Phoebe",
    optionC: "Chandler",
    optionD: "Rachel",
    answer: "C"
  },
  {
    question: "\nRoss is allergic to which kind of fruit?",
    optionA: "Lemon",
    optionB: "Apple",
    optionC: "Kiwi",
    optionD: "Pomegranate",
    answer: "C"
  }

]
//track of high score
var highScore = [{
  Name: "Shweta",
  score: 5
}, {
  Name: "Ishwari",
  score: 3
}]

//call function using each object of array
for (var i = 0; i < questionList.length; i++) {
  checkAnswer(questionList[i].question, questionList[i].optionA, questionList[i].optionB, questionList[i].optionC, questionList[i].optionD, questionList[i].answer);
}

//total score

console.log("\nHey..You SCORED  " + countScore);
console.log("---------------------");
//Name of high scorers
console.log("\nName of High scorer:\n ")
for (var i = 0; i < highScore.length; i++) {
  console.log("Name: " + highScore[i].Name + "\nscore: " + highScore[i].score);
}
console.log("---------------------");
console.log("Remember to send me screenshot if you beat the score..\n I will update your name in high scorer list...")