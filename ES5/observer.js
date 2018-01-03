function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {

    subscribe: function(fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function(args, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, args);
        });
    }
}

var foo = function(message) {
  console.log('I fired!: ' + message);
}
var observe = new Click();
observe.subscribe(foo);
observe.fire("yo!", this); // this = window || in node global
observe.unsubscribe(foo);
observe.fire("yo!", this);
