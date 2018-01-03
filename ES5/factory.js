var employeeFactory = function(type) {
  var employee;

  switch(type) {
    case "full time":
      employee = new fullTime();
      break;
    case "part time":
      employee = new partTime();
      break;
    default:
      employee = new fullTime();
      break;
  }

  employee.type = type;

  return employee;
}

var fullTime = function() {
  this.rate = 5;
}

var partTime = function() {
  this.rate = 3;
}

var fullTimeEmployee = employeeFactory('fullTime');

console.log(fullTimeEmployee.rate);
