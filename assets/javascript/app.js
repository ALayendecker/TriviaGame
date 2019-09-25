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
  if ($(".a3").hasClass(".selected")) {
    correct++;
    console.log(correct);
    // console.log($(".aq1.selected").attr("data-value"));
  }
  if ($(".a5").hasClass(".selected")) {
    correct++;
    console.log(correct);
    // console.log($(".aq2.selected").attr("data-value"));
  }
  if ($(".a7").hasClass(".selected")) {
    correct++;
    console.log(correct);
  }
  // console.log($(".aq3.selected").attr("data-value"));
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

    if (counter === 15) {
      grading();
    }
  }
}, 1000);

var correct = 0;
var wrong = 0;
// var userAnswers = $("button").click();

$("#q1").on("click", "input", function() {
  $(this).addClass("selected");
  $(this)
    .siblings()
    .removeClass("selected");

  if ($(".aq1").hasClass("selected")) {
    console.log($(".aq1.selected").attr("data-value"));
  }
});

$("#q2").on("click", "input", function() {
  $(this).addClass("selected");
  $(this)
    .siblings()
    .removeClass("selected");

  if ($(".aq1").hasClass("selected")) {
    console.log($(".aq2.selected").attr("data-value"));
  }
});

$("#q3").on("click", "input", function() {
  $(this).addClass("selected");
  $(this)
    .siblings()
    .removeClass("selected");

  if ($(".aq1").hasClass("selected")) {
    console.log($(".aq3.selected").attr("data-value"));
  }
});
$("#grading").html("Correct: " + correct);
