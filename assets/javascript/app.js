// Questions/answers objects

var triviaQuestions = [
  {
    questions: "Who is the best Marvel Super Hero?",
    answers: ["Doctor Strange", "Spiderman", "Iron Man"],
    rightAnswer: "Iron Man"
  },
  {
    questions: "Who is the lead singer of the Smashing Pumpkins?",
    answers: ["Frank Castle", "Billy Corgan", "Ted Mosby"],
    rightAnswer: "Billy Corgan"
  },

  {
    questions: "What is the name of Frodo's sword?",
    answers: ["Sting", "Yggdrasil", "Mjolnir"],
    rightAnswer: "Sting"
  }
];

console.log(triviaQuestions);
var questionTracker = 0;
var answerTracker = 0;
// var right = //scores
// var wrong = //scores
// var timer =

// for loop for question intervals

// modified timer origional found on jsFiddle made by Srinivas Chekuri

var counter = 30;
var interval = setInterval(function() {
  counter--;
  // Display 'counter' wherever you want to display it.
  if (counter <= 0) {
    clearInterval(interval);
    $("#timer").html("<h3>Times up!</h3>");
    return;
  } else {
    $("#time").text(counter);
    console.log("Time Left --> " + counter);
  }
}, 1000);

$("#myForm input").on("click", function() {
  alert(
    $("input[name=radioName]:checked", "#myForm").val(
      "triviaQuestions.rightAnswer"
    )
  );
  //   if (val === "Iron Man") {
  //     wins++;
  //   }
  console.log(this);
});
