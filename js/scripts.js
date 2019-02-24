$(document).ready(function() {
  $("#formz").submit(function(event) {
      
      //var total = add up answers
      var question1 = parseInt($("input.environment").val());
      var question2 = parseInt($("input.color").val());
      var question3 = parseInt($("input.activity").val());
      var question4 = parseInt($("input.alterego").val());
      var question5 = parseInt($("input.future").val());
  
      var total = question1 + question2 + question3 + question4 + question5;
  
      if (total <= 6) {
        $(".dune").show();
        $("body").addClass();
      }
      else if (total < 6 || total <= 12) {
        $(".tron").show();
        $("body").addClass("jurassic-background");
      }
      else if (total === 13 || total <= 18) {
        $(".jurassic").show();
        $("body").addClass("tron-background");
      }

      event.preventDefault();
  
    });
  });