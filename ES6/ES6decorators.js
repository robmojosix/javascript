const strawDecorator = function(colour) {
  this.presentation.push(colour + " straw");
}

@strawDecorator('red') // add decorator to class
class Cocktail {
  constructor(ingredients) {
    this.ingredients = ingredients;
    this.presentation = ["glass"];
    this.cost = 5;
  }
}

@strawDecorator('red') // or I think you can add to method
const sexOnTheBeach = new Cocktail(["vodka", "rum", "orange"]);

console.log(sexOnTheBeach.presentation); // includes straw;
