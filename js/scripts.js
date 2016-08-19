function pingPong(input) {
  var pongArray = [];
  for (var i = 1; i <= input; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      pongArray.push("ping-pong!");
    }
    else if(i % 3 === 0) {
      pongArray.push("ping!")
    }
    else if(i % 5 === 0) {
      pongArray.push("pong!");
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
    $("#setup").slideUp();
    var inputNumber = parseInt($("#input-number").val());
    var outputArray = pingPong(inputNumber);
    alert(outputArray);
    for(var j = 0; j < outputArray.length; j++) {
      if (outputArray[j] % 2 === 1) {
        $("body").toggleClass("background1");
        $("#output").text(outputArray[j]);
      }
      else if (outputArray[j] % 2 === 0) {
        $("body").toggleClass("background2");
        $("#output").text(outputArray[j])
      }
      else if (outputArray[j] === "ping!") {
        $("body").toggleClass("backgroundPing");
        $("#output").text(outputArray[j]);
      }
      else if (outputArray[j] === "pong!") {
        $("body").toggleClass("backgroundPong");
        $("#output").text(outputArray[j]);
      }
      else if (outputArray[j] === "ping-pong!") {
        $("body").toggleClass("backgroundPingPong");
        $("#output").text(outputArray[j]);
      }
    }
  });
});
