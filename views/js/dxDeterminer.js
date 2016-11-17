function determineDx (elem, size) {
  var oldWidth = elem;
  console.log(elem);
  // var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
  // console.log(windowWindth);
  var windowWidth = 10;
  var oldSize = oldWidth / windowWidth;

  console.log(oldSize);
  var newSize = sizeSwitcher(size);
  console.log(newSize);
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


