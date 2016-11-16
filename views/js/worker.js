importScripts('dxDeterminer.js');

this.onMessage = function(e) {
  var randomPizza, size, newWidth;
  newWidth = 0;
  size = e.data.size;
  randomPizza = document.querySelectorAll(".randomPizzaContainer");

  try {
    // var randomPizza = document.querySelectorAll(".randomPizzaContainer");
    for (var i = 0; i < randomPizza.length; i++) {
      var dx = determineDx(randomPizza[i], size);
      newWidth = newWidth + (randomPizza[i].offsetWidth + dx) + 'px';
    }
    postMessage(newWidth);
  }
  catch (e) {
    function ErrorMessenger(message) {
      this.name = "ManipulationException";
      this.message = message;
    };
    throw new ErrorMessenger('Slider manipulation error');
    postMessage(undefined);
  }
}
