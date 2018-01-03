class Brush {
  this.name = "generic brush";

  strategy(message) {
    this.message = message;
  }

  draw() {
    return this.message;
  }
}

const brush = new Brush();

brush.strategy("hello");

const message = brush.draw();

console.log(message);
