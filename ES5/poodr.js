// shameless

// var choose = function(text) {
//   switch(text) {
//     case 1:
//     return "One person."
//       break;
//     case 2:
//       return "Two persons."
//       break;
//     default:
//       return "Other person."
//       break;
//   }
// }
//
// console.log(choose(1));


// dry

// var choose = function(text) {
//  return numberString(text) + " " + person(text) + ".";
// }
//
// function numberString(text) {
//   var string = {
//     1: "one",
//     2: "two",
//   }
//   return (string[text] !== undefined) ?  string[text] : "other";
// }
//
// function person(text) {
//   if(text == 1) {
//     return "person";
//   }
//   else {
//     return "persons";
//   }
// }
//
// console.log(choose(3));

// Objectify

// function SentanceNumber(text) {
//   this.number = text;
//   this.strigify = function() {
//     var string = {
//       1: "one",
//       2: "two",
//     }
//     return (string[this.number] !== undefined) ?  string[this.number] : "other";
//   }
//   this.person = function() {
//       if(this.number == 1) {
//         return "person";
//       }
//       else {
//         return "persons";
//       }
//   }
// }
//
// var choose = function(text) {
//   var sentanceNumber = new SentanceNumber(text);
//   return sentanceNumber.strigify() + " " + sentanceNumber.person() + ".";
// }
//
// console.log(choose(1));




// Objects without conditions




// function SentanceNumber(text) {
//   this.number = text;
// }
//
// SentanceNumber.prototype.strigify = function() {
//   return this.number;
// }
// SentanceNumber.prototype.person = function() {
//   return "person";
// }
//
// function SentanceNumber1(text) {
//   this.number = text;
// }
// SentanceNumber1.prototype = Object.create(SentanceNumber.prototype);
// SentanceNumber1.prototype.strigify = function() {
//   return "one"
// }
//
// function SentanceNumber2(text) {
//   this.number = text;
// }
// SentanceNumber2.prototype = Object.create(SentanceNumber.prototype);
// SentanceNumber2.prototype.strigify = function() {
//   return "two"
// }
// SentanceNumber1.prototype.person = function() {
//   return "persons";
// }
//
// function SentanceNumberOther(text) {
//   this.number = text;
// }
//
// SentanceNumberOther.prototype = Object.create(SentanceNumber.prototype);
// SentanceNumberOther.prototype.strigify = function() {
//   return "other"
// }
//
// var choose = function(text) {
//   var sentanceNumber = sentanceFactory(text);
//   return sentanceNumber.strigify() + " " + sentanceNumber.person() + ".";
// }
//
// function sentanceFactory(text) {
//   switch(text) {
//     case 1:
//       return new SentanceNumber1(text);
//       break;
//     case 2:
//       return new SentanceNumber2(text);
//       break;
//     default:
//       return new SentanceNumberOther(text);
//       break;
//   }
// }
//
// console.log(choose(1));

// Better factory

var SentanceDecorator = function() {
  this.person = function() {
    return "person";
  }
}

function SentanceNumber1(text) {
  this.number = text;
}
SentanceNumber1.prototype.strigify = function() {
  return "one"
}

function SentanceNumber2(text) {
  this.number = text;
}
SentanceNumber2.prototype.strigify = function() {
  return "two"
}
SentanceNumber2.prototype.person = function() {
  return "persons"
}

function SentanceNumberOther(text) {
  this.number = text;
}
SentanceNumberOther.prototype.strigify = function() {
  return "other"
}

var choose = function(text) {
  var sentanceNumber = sentanceFactory(text);
  console.log(sentanceNumber.person())
  return sentanceNumber.strigify() + " " + sentanceNumber.person() + ".";
}

function sentanceFactory(text) {
  switch(text) {
    case 1:
      var sentance = new SentanceNumber1(text);
      SentanceDecorator.call(sentance);
      return sentance;
      break;
    case 2:
      var sentance = new SentanceNumber2(text);
      SentanceDecorator.call(sentance);
      return sentance;
      break;
    default:
      var sentance = new SentanceNumberOther(text);
      SentanceDecorator.call(sentance);
      return sentance;
      break;
  }
}

console.log(choose(3));
