// Bridge pattern
// Known as the double adaptor

// Client consumes an abstraction with defined interface which can be used with multiple services.
// ie: An application (the client) and a database driver (the service).
// The application writes to a well-defined database API but behind this API you will find
// that each driver's implementation is totally different for each database vendor
// so we use a bridge to bridge this gap

// bridge different downward services (input devices) with a unifed API to drive another service (outputs)

// input devices
// downstream services
var Gestures = function (output) {
    this.output = output;

    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};

var Mouse = function (output) {
    this.output = output;

    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};

// output devices
var Screen = function () {
    this.click = function () { console.log.add("Screen select"); }
    this.move = function () { console.log.add("Screen move"); }
    this.drag = function () { console.log.add("Screen drag"); }
    this.zoom = function () { console.log.add("Screen zoom in"); }
};

var Audio = function () {
    this.click = function () { console.log.add("Sound oink"); }
    this.move = function () { console.log.add("Sound waves"); }
    this.drag = function () { console.log.add("Sound screetch"); }
    this.zoom = function () { console.log.add("Sound volume up"); }
};

// application
function run() {

    var screen = new Screen();
    var audio = new Audio();

    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();

    console.log.show();
}
