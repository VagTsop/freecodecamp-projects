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
