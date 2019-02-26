$(document).ready(function() {
  $("form").submit(function(event) {
    
    var question2 = parseInt($("question2").val());
    var question3 = parseInt($("question3").val());
    var question4 = parseInt($("question4").val());
    var question5 = parseInt($("question5").val());

    // var total = $("input:radio[name=environment]:checked").val();
    var total = environmentChoice1 + question2 + question3 + question4 + question5;

      if (total <= 6) {
        $(".dune").show();
      } else if (total < 6 || total <= 12) {
        $(".jurassic").show();
      } else if (total === 13 || total <= 18) {
        $(".tron").show();
      }
      event.preventDefault();
    });
  });