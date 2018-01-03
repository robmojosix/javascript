const logAdapter1 = {
  log: (name) => {
    console.log('adapter1:', name);
  }
}
const logAdapter2 = {
  log: (name) => {
    console.log('adapter2:', name);
  }
}

class LogMyName {
  contructor(adapter) {
    this.logger = adapter
  }

  logName(name) {
    this.logger.log(name);
  }
}

new LogMyName(logAdapter1).logName('rob');
