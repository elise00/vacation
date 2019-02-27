$(document).ready(function() {
  $("form").submit(function(event) {

    // var question2 = parseInt($("question2").val());
    // var question2 = parseInt($("question2").val());
    // var question3 = parseInt($("question3").val());
    // var question4 = parseInt($("question4").val());
    // var question5 = parseInt($("question5").val());

    var question1 = $("input:radio[name=environment]:checked").val();
    var question2 = $("input:radio[name=color]:checked").val();
    var question3 = $("input:radio[name=activity]:checked").val();
    var question4 = $("input:radio[name=alterego]:checked").val();
    var question5 = $("input:radio[name=future]:checked").val();

    var total = question1 + question2 + question3 + question4 + question5;

      if (total <= 3) {
        $(".dune").show();
      } else if (total <= 6) {
        $(".jurassic").show();
      } else {
        $(".tron").show();
      }
      event.preventDefault();
    });
  });