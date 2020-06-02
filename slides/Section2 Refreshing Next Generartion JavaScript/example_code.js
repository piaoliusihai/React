function printMyName(name) {
  console.log(name);
}
printMyName('Max');

const printMyName = (name) => {
  console.log(name);
}
printMyName('Max');

const printMyName = name => {
  console.log(name);
}
printMyName('Max');

const printNameAndAge = (name, age) => {
  console.log(name);
  console.log(age);
}
printNameAndAge('Max', 28);

const multiply = (number) => {
  return number * number;
}
console.log(multiply(2));


const multiply = number => number * number;  // pay attention, No "return" here.
console.log(multiply(2));