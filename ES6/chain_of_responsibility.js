// make a request and have an abstraction know which order to run responses
// run() tries all responses with request and delegates by calling request again with a smaller amount

// Usually chain of responsibility has an abstract class which has knowledge of which onward methods to try
// The onward methods no longer need knowledge of onward methods to call after it has finished (no method chaining)

var Request = function(amount) {
    this.amount = amount;
    log.add("Requested: $" + amount + "\n");
}

Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        log.add("Dispense " + count + " $" + bill + " bills");
        return this;
    }
}

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {
    var request = new Request(378);

    request.get(100).get(50).get(20).get(10).get(5).get(1);

    log.show();
}
