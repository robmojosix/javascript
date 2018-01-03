class person {
  constructor(name) {
    this.firstName = name;
    this.lastName = "Smith";
  }

  get name() {
      return this.firstName + ' ' + this.lastName;
  },
  set name(name) {
      var words = name.toString().split(' ');
      this.firstName = words[0] || '';
      this.lastName = words[1] || '';
  }
}

cont me = new person("Rob");
console.log(me.firstName);
console.log(me.lastName);
// literal objects only (not functions)
