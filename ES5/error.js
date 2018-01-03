function NumberError(message) {
  this.message = message;
  this.stack = (new Error).stack;
}

NumberError.prototype = Object.create(Error.prototype);
NumberError.prototype.name = "NumberError";

function number(num) {
  if(typeof(num) == number) return num;
  throw new NumberError("not a number");
}

function runNumber() {
  try {
    console.log(number("hi"));
  } catch(e) {
    if(e instanceof NumberError) {
      console.log('not a number passed');
      console.log(e.message);
      console.log(e.stack);
    }
    else {
      throw e;
    }
  }
}

runNumber();
