class Brush {
  strategy(type) {
    this.type = type;
  }
  paint() {
    return this.type.paint();
  }
}

class ThinBrush {
  paint() {
    console.log('Im painting with a thin brush');
  }
}

const brush = new Brush();
const brushType = new ThinBrush();

brush.strategy(brushType);

brush.paint();  
