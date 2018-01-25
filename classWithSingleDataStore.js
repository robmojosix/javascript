const instances = {};
let lastChanged;

// the above can be referenced from any instance of the class below
// Useful for talking to the global state above from different places in your codebase
// getter setters get called even inside this class when they are used
// ie: calling: this.data = {}; will call the setter

class SearchMock {
  static create(recipient, occasion) {
    const instance = new SearchMock(recipient, occasion);

    instances[`${recipient + occasion}`] = instance;
    return instance;
  }

  static lastChanged() {
    return instances[lastChanged];
  }

  constructor(recipient, occasion) {
    this.key = recipient + occasion;
    this.recipient = recipient;
    this.occasion = occasion;
    this.data = {
      totalNumberOfVariants: 0,
      variants: [],
      filters: [],
    };
  }

  set data(data) {
    lastChanged = this.key;
    this.internalData = data;
  }

  get data() {
    return this.internalData;
  }

  addVariants(variants) {
    this.data.variants = variants;
  }
}

module.exports = SearchMock;
