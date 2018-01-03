// instead of
const myFunc = function() {
    this.a = 10;
    this.b = 5;

    this.sum = () => this.a + this.b;
    this.double = (a) => a + a;
}

const test = new myFunc()

test.sum();

/// do
function sum() {
    const argsArr = Array.from(arguments);
    return argsArr.reduce((a,b) => a+b);
}

function double(arg) {
    return arg + arg;
}

const myObj = Object.assign({}, {sum}, {double});
myObj.sum(10, 5);
