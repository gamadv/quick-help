const result = {
  name: 'John',
  age: 30,
};


const myArray = [1, 2, 3, 4, false, null, undefined];

const result2 = myArray.filter(item => Boolean(item))

const expected = result2

console.log('Expected', expected);
