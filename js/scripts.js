// $(document).ready(function() {
//   $("form").submit(function(event) {
      
//       //var total = add up answers
//       var question1 = parseInt($("input.environment").val());
//       var question2 = parseInt($("input.color").val());
//       var question3 = parseInt($("input.activity").val());
//       var question4 = parseInt($("input.alterego").val());
//       var question5 = parseInt($("input.future").val());
  
//       var total = question1 + question2 + question3 + question4 + question5;
  
//       if (total <= 6) {
//         $(".dune").show();
//         $("body").addClass();
//       }
//       else if (total < 6 || total <= 12) {
//         $(".tron").show();
//         $("body").addClass("jurassic-background");
//       }
//       else if (total === 13 || total <= 18) {
//         $(".jurassic").show();
//         $("body").addClass("tron-background");
//       }

//       event.preventDefault();
  
//     });
//   });

// $(document).ready(function() {
//   $("#formz").submit(function(event) {
//     //add vars for diff id tags
//     //var total = add up all answers
//     var question1 = parseInt($(".question1").val());
//     var question2 = parseInt($(".question2").val());
//     var question3 = parseInt($(".question3").val());
//     var question4 = parseInt($(".question4").val());
//     var question5 = parseInt($(".question5").val());

//     var total = question1 + question2 + question3 + question4 + question5;

//     if (total < 12) {
//       $(".dune").show();
//     }
//     else if (total < 6 || total <= 12) {
//       $(".jurassic").show();
//     }
//     else if (total === 13 || total <= 18) {
//       $(".tron").show();
//     }

//     event.preventDefault();

//   });
// });

// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     var scores = [0, 0, 0, 0];
//     var questions = ["question1", "question2", "question3", "question4"];

//     questions.forEach(function(q) {
//       var answer = parseInt($("select#" + q).val());
//       scores[answer] += 1;
//     });

//     var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
//     if ($("input:radio[name=environment]:checked").val() === "The forest") {
//       $(".jurassic").show();
//     }
//     // if (indexOfMax === 0) {
//     //   $(".dune").show();
//     // } else if (indexOfMax === 1) {
//     //   $(".jurassic").show();
//     // } else {
//     //   $(".tron").show();
//     // }

//     event.preventDefault();
//   });
// });