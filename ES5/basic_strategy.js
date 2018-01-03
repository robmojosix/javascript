var Brush = function() {
  this.name = "generic brush";
}

Brush.prototype = {
  strategy: function(message) {
    this.message = message;
  },
  draw: function() {
    return this.message;
  }
}

var brush = new Brush();

brush.strategy("hello");

var message = brush.draw();

console.log(message);
