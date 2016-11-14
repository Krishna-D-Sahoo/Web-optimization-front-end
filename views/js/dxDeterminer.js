function determineDx (elem, size) {
  var oldWidth = elem.offsetWidth;
  var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
  var oldSize = oldWidth / windowWidth;

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

  var newSize = sizeSwitcher(size);
  var dx = (newSize - oldSize) * windowWidth;

  return dx;
}
