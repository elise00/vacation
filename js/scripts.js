$(document).ready(function() {
    $("form").submit(function(event) {
      //add vars for diff id tags
      //var total = add up all answers
      var question1 = parseInt($("select#environment").val());
      var question2 = parseInt($("select#sell2").val());
      var question3 = parseInt($("select#sell3").val());
      var question4 = parseInt($("select#sell4").val());
      var question5 = parseInt($("select#sell5").val());
  
      var total = question1 + question2 + question3 + question4 + question5;
  
      if (question1 === 0 || question2 === 0 || question3 === 0 || question4 === 0 || question5 === 0) {
        alert("You haven't answered all the questions!")
      }
  
      else if (total <= 6) {
        $(".dune").show();
        $("body").addClass("dune-background");
      }
      else if (total < 6 || total <= 12) {
        $(".jurassic").show();
        $("body").addClass("jurassic-background");
      }
      else if (total === 13 || total <= 18) {
        $(".tron").show();
        $("body").addClass("tron-background");
      }

      event.preventDefault();
  
    });
  });