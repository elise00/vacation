$(document).ready(function() {
  $("form").submit(function(event) {

    var question1 = parseInt($("input:radio[name=environment]:checked").val());
    var question2 = parseInt($("input:radio[name=color]:checked").val());
    var question3 = parseInt($("input:radio[name=activity]:checked").val());
    var question4 = parseInt($("input:radio[name=alterego]:checked").val());
    var question5 = parseInt($("input:radio[name=future]:checked").val());

    var total = question1 + question2 + question3 + question4 + question5;

      if (total <= 3) {
        $(".dune").show();
      } else if (total <= 5) {
        $(".jurassic").show();
      } else {
        $(".tron").show();
      }
      event.preventDefault();
    });
  });