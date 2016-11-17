// importScripts('dxDeterminer.js');
function determineDx (elem, winWid, size) {
  var oldWidth = elem;
  windowWidth =  winWid;
  var oldSize = oldWidth / windowWidth;

  var newSize = sizeSwitcher(size);
  var dx = (newSize - oldSize) * windowWidth;

  return dx;
}

// Changes the slider value to a percent width
function sizeSwitcher (size) {
   switch(size) {
     case "1":
       return 0.25;
     case "2":
       return 0.3333;
     case "3":
       return 0.5;
     default:
       console.log("bug in sizeSwitcher");
   }
}



self.onmessage = function(e) {
  var newWidth = new Array();
  var size = e.data[0];
  var randomPizza = e.data[1];
  var winWid = e.data[2];

    // var randomPizza = document.querySelectorAll(".randomPizzaContainer");
    for (var i = 0; i < randomPizza.length; i++) {
      var dx = determineDx(randomPizza[i], winWid, size);
      newWidth.push(randomPizza[i] + dx);
    }
    postMessage(newWidth);
  
    // catch (e) {
    // function ErrorMessenger(message) {
    //   this.name = "ManipulationException";
    //   this.message = message;
    // };
    // throw new ErrorMessenger('Slider manipulation error');
    // postMessage(undefined);
  // }
}
