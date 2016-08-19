$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input-number").val());
    var output = pingPong(inputNumber);
    $("#output").text(output);
  });
});
