var Brush = function() {
  this.name = "generic brush";
}

Brush.prototype = {
  strategy: function(type) {
    this.type = type;
  },
  draw: function() {
    return this.type.draw();
  }
}

var thinBrush = function() {
  this.draw = function() { console.log('drawing with thin brush'); }
}

var thickBrush = function() {
  this.draw = function() { console.log('drawing with thick brush'); }
}

var thin = new thinBrush();

var brush = new Brush;

brush.strategy(thin);

brush.draw();
