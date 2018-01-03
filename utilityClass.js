class Setup {
	constructor(name) {
      	this.name = name;
    	this.setupLogging();
    }

  	setupLogging() {
    	console.log('setup logging');
    }

  	doSomething() {
      console.log('other utility');
    }
}

class App extends Setup {
    constructor(name) {
        super(name);
    }

    doSomething() {
      	// call parent method
        super.doSomething();
    }
}

const app = new App('app-name');
app.doSomething();
