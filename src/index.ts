import { removeObjectWithId } from './arrayHacks'

const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Kate" },
  { id: 3, name: "Peter" },
];

const filteredArray = removeObjectWithId(arr, 2);


console.log(filteredArray);