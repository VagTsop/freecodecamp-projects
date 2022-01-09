"use strict";
/*
- Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of 
all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
  const arrUnique = [...new Set(arr)];
  const arrSum = arrUnique.reduce((prevValue, curValue) =>
    prevValue + curValue, 0)
  return arrSum;
}
console.log(sumAll([4, 1]));
*/

/*
- Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const arr2exist = arr1.filter(item => arr2.indexOf(item) === -1)
  const arr1exist = arr2.filter(item => arr1.indexOf(item) === -1)
  const finalArr = [...arr2exist, ...arr1exist]
  return finalArr;
}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
*/

/*
- Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

function destroyer(arr) {
  let newArr = [...arguments];
  return newArr[0].filter(item => newArr.indexOf(item) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/
