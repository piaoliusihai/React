const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name : 'Max'
};
const newPerson = {
  ...person,
  age: 28
};
console.log(newPerson);

const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));


const numbers = [1, 2, 3];
[num1, ,num3] = numbers;
console.log(num1, num3);


const person = {
  name: 'Max',
  age: 28
};
const secondPerson = person;
person.name = 'Manu';
console.log(secondPerson);


const person = {
  name: 'Max',
  age: 28
};
const secondPerson = {...person};
person.name = 'Manu';
console.log(secondPerson);


let a = 1;
let b = a;
console.log(a);
console.log(b);
b = 2;
console.log(a);
console.log(b);
