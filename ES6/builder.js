// interface to building objects
// builder takes 1 or multiple objects to return an instance of a new object
// composed how the builder determines
class Builder {
    build(part1, part2) {
      // we can use part2 by looping over objects
      // or without the loop we can cherrypick methods from each object
        part1.step1();
        part1.step2();
        return part1.get();
    }
}

 // builder type
class CarBuilder {
    constructor() {
      this.car = null;
    }

    step1() {
        this.car = new Car();
    };

    step2() {
        this.car.addParts();
    };

    get() {
        return this.car;
    };
}

// object type
class Car {
    constructor() {
      this.doors = 0;
    }

    addParts() {
        this.doors = 4;
    };

    say() {
        console.log("I am a " + this.doors + "-door car");
    };
}

class ColorBuilder {
    constructor(color) {
      this.color = color;
    }

    step1() {
      // do something like decorate a car
    }
}

function run() {
    const builder = new Builder();
    const carBuilder = new CarBuilder();
    const colorBuilder = new ColourBuilder('yellow');
    const car = builder.build(carBuilder, colorBuilder);
    car.say();
}

run()
