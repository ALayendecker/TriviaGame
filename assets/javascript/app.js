// Questions/answers objects

// var triviaQuestions = [
//   {
//     question: "Who is the best Marvel Super Hero?",
//     answers: ["Doctor Strange", "Spiderman", "Iron Man"],
//     rightAnswer: "Iron Man"
//   },
//   {
//     question: "Who is the lead singer of the Smashing Pumpkins?",
//     answers: ["Frank Castle", "Billy Corgan", "Ted Mosby"],
//     rightAnswer: "Billy Corgan"
//   },

//   {
//     question: "What is the name of Frodo's sword?",
//     answers: ["Sting", "Yggdrasil", "Mjolnir"],
//     rightAnswer: "Sting"
//   }
// ];

// for loop for question intervals

// modified timer origional found on jsFiddle made by Srinivas Chekuri
function grading() {
  if ($(".aq1.selected").attr("data-value") == "Iron man");
  console.log($(".aq1.selected").attr("data-value"));
  correct++;
  if ($(".aq2.selected").attr("data-value") == "Billy Corgan");
  console.log($(".aq1.selected").attr("data-value"));
  correct++;
  if ($(".aq3.selected").attr("data-value") == "Sting");
  console.log($(".aq1.selected").attr("data-value"));
  correct++;
}

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
    //console.log("Time Left --> " + counter);

    // if (counter === 0) {
    //   grading();
    // }
  }
}, 1000);

var correct = 0;
// var userAnswers = $("button").click();

$(document).on("click", "input", function() {
  $(this).addClass("selected");
  $(this)
    .siblings()
    .removeClass("selected");

  console.log($(".aq1.selected").attr("data-value"));
});

$(document).on("click", "input", function() {
  $(this).addClass("selected");
  $(this)
    .siblings()
    .removeClass("selected");

  console.log($(".aq2.selected").attr("data-value"));
});

$(document).on("click", "input", function() {
  $(this).addClass("selected");
  $(this)
    .siblings()
    .removeClass("selected");

  console.log($(".aq3.selected").attr("data-value"));
});
$("#grading").html("Correct: " + correct);
