function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(1, 3);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var min = convertHoursToMinutes(2);
console.log(min);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMult = addAndMultiplyBy5(10, 5);
console.log(addAndMult);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multAndDiv5 = multiplyAndDivideBy5(35, 10);
console.log(multAndDiv5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtr = subtractTwoNumbers(22, 7);
console.log(subtr);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

var circleCircm = getCircleCircumference(5);
console.log(circleCircm);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var result = cube(5);
console.log(result);
