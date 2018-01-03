class Cocktail {
  constructor(ingredients) {
    this.ingredients = ingredients;
    this.presentation = ["glass"];
    this.cost = 5;
  }
}

const sexOnTheBeach = new Cocktail(["vodka", "rum", "orange"]);

const whiteRussian = new Cocktail(["vodka", "milk"]);

console.log(sexOnTheBeach.presentation);

const strawDecorator = function(colour) {
  this.presentation.push(colour + " straw");
}

strawDecorator.call(sexOnTheBeach, 'red');
strawDecorator.apply(whiteRussian, ['white']);

console.log(sexOnTheBeach.presentation);
console.log(whiteRussian.presentation);

const coasterDecorator = function(drink) {
  drink.coaster = drink.coaster || true;
}

coasterDecorator(sexOnTheBeach);

const costDecorator = function() {
  this.cost = this.cost + 2;
}

const addWhiteRussian = costDecorator.bind(whiteRussian);
console.log(whiteRussian.cost);
addWhiteRussian();
console.log(whiteRussian.cost);

console.log(sexOnTheBeach.coaster);
