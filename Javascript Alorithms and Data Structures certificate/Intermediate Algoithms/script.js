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

/*
- Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  let arr = [];
  let sourceKeys = Object.keys(source);
  // Only change code below this line

  arr = collection.filter(item => {

    for (let i = 0; i < sourceKeys.length; i++) {
      if (!item.hasOwnProperty(sourceKeys[i]) || item[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  }

  )
  console.log(arr)
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })
*/

/*
- Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

function fearNotLetter(str) {

   // 1  create a base fullAlphabet string to use it as a base for comparison with the parameter string
  let fullAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  if (str === fullAlphabet) {
    return undefined;
  }

 // 2 compare each letter of fullAlphabet string with parameter string (use nested loops for this)
  for (let i = 0; i < fullAlphabet.length; i++) {
    4 // if you have the newStr substring break also from the outer loop
    if (newStr) {
      break;
    }

 // 3 if it find a match between fullAlphabet string  and parameter string get a substring from  fullAlphabet string 
   starting from the same initial character until the parameter string till the end  and store it in to newStr variable and break out of the inner loop

    for (let j = 0; j < str.length; j++) {
      if (fullAlphabet.charAt(i) === str.charAt(j)) {
        newStr = fullAlphabet.substring(
          fullAlphabet.indexOf(fullAlphabet.charAt(i)),
          fullAlphabet.length
        );
        break;
      }
    }
  }

 // 5  loop newStr substring and if you not find a match with parameter string return this element - the character that missing from parameter string
  for (let k = 0; k < newStr.length; k++) {
    if (newStr.charAt(k) !== str.charAt(k)) {
      return console.log(newStr.charAt(k));
    }
  }
}

fearNotLetter("stvwx"); //should return the string u.
*/
