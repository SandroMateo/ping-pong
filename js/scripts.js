function pingPong(input) {
  var pongArray = [];
  for (var i = 1; i <= input; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      pongArray.push("ping-pong!");
    }
    else if(i % 5 === 0) {
      pongArray.push("pong!");
    }
    else if(i % 3 === 0) {
      pongArray.push("ping!")
    }
    else {
      pongArray.push(i);
    }
  }
  return pongArray;
}
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#input-number").val());
    var output = pingPong(inputNumber);
    $("#output").text(output);
  });
});
