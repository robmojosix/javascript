// abstract class - a class that doesn't get instansiated but relies on a subclasses inheriting from it
// Or relies on a method existing on a subclass.

// Make sure you don;t instanciate it
class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}

class Derived extends Abstract {
  constructor() {
    super();
    // more Derived-specific stuff here, maybe
  }
}

const a = new Abstract(); // new.target is Abstract, so it throws
const b = new Derived(); // new.target is Derived, so no error

// Make sure a method exists when you instanciate
class Abstract {
  constructor() {
    if (this.method === undefined) {
      // or maybe test typeof this.method === "function"
      throw new TypeError("Must override method");
    }
  }
}

class Derived1 extends Abstract {}
class Derived2 extends Abstract {
  method() {}
}

const a = new Abstract(); // this.method is undefined; error
const b = new Derived1(); // this.method is undefined; error
const c = new Derived2(); // this.method is Derived2.prototype.method; no error
