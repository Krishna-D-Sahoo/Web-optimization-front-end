importScripts('dxDeterminer.js');

this.onMessage = function(e) {
  var randomPizza = e.data.randomPizza;
  var size = e.data.size;

  try {
    // var randomPizza = document.querySelectorAll(".randomPizzaContainer");
    for (var i = 0; i < randomPizza.length; i++) {
      var dx = determineDx(randomPizza[i], size);
      var newwidth = (randomPizza[i].offsetWidth + dx) + 'px';
      randomPizza[i].style.width = newwidth;
    }
    postMessage(randomPizza);
  }
  catch (e) {
    function ErrorMessenger(message) {
      this.name = "ManipulationException";
      this.message = message;
    };
    throw new ErrorMessenger('Image manipulation error');
    postMessage(undefined);
  }
}
