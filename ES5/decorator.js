var cocktail = function(ingredients) {
  this.ingredients = ingredients;
  this.presentation = ["glass"];
  this.cost = 5;
}

var sexOnTheBeach = new cocktail(["vodka", "rum", "orange"]);

var whiteRussian = new cocktail(["vodka", "milk"]);

console.log(sexOnTheBeach.presentation);

var strawDecorator = function(colour) {
  this.presentation.push(colour + " straw");
}

strawDecorator.call(sexOnTheBeach, 'red');
strawDecorator.apply(whiteRussian, ['white']);

console.log(sexOnTheBeach.presentation);
console.log(whiteRussian.presentation);

var coasterDecorator = function(drink) {
  drink.coaster = drink.coaster || true;
}

coasterDecorator(sexOnTheBeach);

var costDecorator = function() {
  this.cost = this.cost + 2;
}

var addWhiteRussian = costDecorator.bind(whiteRussian);
console.log(whiteRussian.cost);
addWhiteRussian();
console.log(whiteRussian.cost);

console.log(sexOnTheBeach.coaster);
