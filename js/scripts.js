function pingPong(input) {
  var pongArray = [];
  for (var i = 1; i <= input; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      pongArray.push("ping-pong");
    }
    else if(i % 3 === 0) {
      pongArray.push("ping")
    }
    else if(i % 5 === 0) {
      pongArray.push("pong");
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
    var count = 0;
    myLoop(outputArray,count);
    function myLoop (array, counter) {
      setTimeout(function() {
        if(array[counter] % 2 === 0 || array[counter] % 2 === 1) {
          $("body").attr("class", "background" + array[counter] % 2);
          $("#output").attr("class", "text" + array[counter] % 2);
          $("#output").text(array[counter]);
        }
        else {
          $("body").attr("class", "background" + array[counter]);
          $("#output").attr("class", "text" + array[counter]);
          $("#output").text(array[counter] + "!");
        }
        counter++;
        if (counter < array.length) {
          myLoop(array,counter);
        }
      }, 1000)
    }
    // $(".btn-default").fadeIn(outputArray.length*3000);
  });
  // $(".btn-default").click(function(event) {
  //   event.preventDefault();
  //   $("body").removeClass();
  //   $("#output").fadeOut();
  //   $(".btn-default").fadeOut();
  //   $("#setup").slideDown();
  // });
});
