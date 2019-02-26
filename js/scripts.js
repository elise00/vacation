$(document).ready(function() {
  $("#form").submit(function(event) {
    var scores = [0, 0, 0, 0];
    var questions = ["question1", "question2", "question3", "question4"];

    questions.forEach(function(q) {
      var answer = parseInt($("select#" + q).val());
      scores[answer] += 1;
    });

    var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
    if ($("input:radio[name=environment]:checked").val() === "The forest") {
      $(".jurassic").show();
    }
     if (indexOfMax === 0) {
       $(".dune").show();
     } else if (indexOfMax === 1) {
      $(".jurassic").show();
    } else {
      $(".tron").show();
    }

    event.preventDefault();
  });
});
