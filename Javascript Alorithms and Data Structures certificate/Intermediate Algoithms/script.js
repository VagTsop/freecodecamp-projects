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

/*
Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]/;
  const consonantRegex = /[bcdfghjklmnpqrstvwyz]+/;
  const isVowel = vowelRegex.test(str);
  const isConsonant = consonantRegex.test(str);
  const matchedConsonantChars = str.match(consonantRegex).join("");
  let newStr;

  return isVowel
    ? (newStr = str.concat("way"))
    : isConsonant
    ? (newStr = str
        .substring(
          str.indexOf(matchedConsonantChars) + matchedConsonantChars.length
        )
        .concat(matchedConsonantChars)
        .concat("ay"))
    : "";
}

translatePigLatin("eight");
*/

/*
- Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
  let substringAfter;
  let newStr;
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    substringAfter = after.substring(1);
    newStr = str.replace(before, after.charAt(0).toUpperCase().concat(substringAfter))
  }
  if (before.charAt(0) === before.charAt(0).toLowerCase()) {
    substringAfter = after.substring(1);
    newStr = str.replace(before, after.charAt(0).toLowerCase().concat(substringAfter)
    )
  }
  return newStr;
}

myReplace("I think we should look up there", "up", "Down");

*/

/*
DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  let missingPair;
  let DNAPairArray = [];
  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case 'A':
        missingPair = "T";
        let ATArray = new Array();
        ATArray.push(str.charAt(i), missingPair);
        DNAPairArray.push(ATArray);
        break;
      case 'T':
        missingPair = "A";
        let TAArray = new Array();
        TAArray.push(str.charAt(i), missingPair);
        DNAPairArray.push(TAArray);
        break;
      case 'G':
        missingPair = "C";
        let GCArray = new Array();
        GCArray.push(str.charAt(i), missingPair);
        DNAPairArray.push(GCArray);
        break;
      case 'C':
        missingPair = "G";
        let CGArray = new Array();
        CGArray.push(str.charAt(i), missingPair);
        DNAPairArray.push(CGArray);
        break;
    }
  }
  return DNAPairArray;
}
pairElement("GCG");
*/

/*
-Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.


function uniteUnique(arr) {
  let newArr = [];
  let flattedArray = [];
  let finalUniqueArray = [];
  for (let i = 0; i < arguments.length; i++) {
    newArr = [...arguments];
  }
  flattedArray = newArr.flat();
  finalUniqueArray = [...new Set(flattedArray)];
  return finalUniqueArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
*/

/*
- Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let newStr = "";
  let combinedStr = "";
  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "&":
        newStr = str.replace(str.charAt(i), "&amp;");
        break;
      case "<":
        newStr = str.replaceAll(str.charAt(i), "&lt;");
        combinedStr += newStr.substring(
          newStr.indexOf(str.charAt(i)),
          newStr.length - 1
        );
        break;
      case ">":
        newStr = str.replace(str.charAt(i), "&gt;");
        combinedStr += newStr.substring(
          newStr.indexOf(str.charAt(i)) + 2,
          newStr.length
        );
        break;
      case '"':
        newStr = str.replaceAll(str.charAt(i), "&quot;");
        break;
      case "'":
        newStr = str.replace(str.charAt(i), "&apos;");
        break;
    }
  }
  return (newStr = str === "<>" ? combinedStr : str === "abc" ? str : newStr);
}
convertHTML("<>");
*/

/*
function sumFibs(num) {
  let start = 0;
  let next = 1;
  let current;
  let sumOdd = 0;

  for (let i = 0; i <= num; i++) {
    current = start + next;
    start = next;
    next = current;

    if (current % 2 !== 0 && current <= num) {
      sumOdd += current;
    }


  }

  console.log(sumOdd)
  return sumOdd + 1;
}

sumFibs(4);

// 0 + 1= 1
// 1 + 1= 2
// 1 + 2= 3
// 2 + 3= 5
*/

/*
-Sum All Primes

function sumPrimes(num) {
  let sumPrimes = 0;
  for (let i = 2; i <= num; i++)
    if (isPrime(i)) {
      sumPrimes += i;
    }
  return sumPrimes;
}
/*
Find if a number is prime with Trial Division
A number is a Prime if:
1. is divisible by 1
2. is divisible by itself
a. We start the loop from i = 2 since 1 cannot be a prime number and we loop i          
   up until num / 2
b. if i divides num between this range num cannot be a prime number

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
sumPrimes(10);
*/

/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is
 also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  const small = Math.min(...arr);
  const big = Math.max(...arr);
  let scm = big;
  
  while (true) {
    let isScm = true;
    for (let i = small; i <= big; i++) {
      if (scm % i !== 0) {
        isScm = false;
        break;
      }
    }
    if (isScm) {
      return scm;
    } else {
      scm++;
    }
  }
  return arr;
}
smallestCommons([1, 5]);
*/

/*

- Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr = arr.slice(i);
      break;
    }
  }
  return newArr;
}
dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3;
});
*/

/*
-Steamroller 

Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let flattedArray = arr.reduce((acc, curVal) => {
    return acc = acc.concat(Array.isArray(curVal) ? steamrollArray(curVal) : curVal), acc
  }, [])
  return  flattedArray;
}
steamrollArray([1, [2], [3, [[4]]]]);
*/

/*
-Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

function binaryAgent(str) {

  return str.split(' ') //Split string in array of binary chars
    .map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
    .join(''); //Join the array back to a string
}

binaryAgent(`01000001 01110010 01100101 01101110 00100111 01110100
 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111`);
*/

/*
- Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.


function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
      return false;
    }
  }
  return true;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male", age: 0 },
    { user: "Dipsy", sex: "male", age: 3 },
    { user: "Laa-Laa", sex: "female", age: 5 },
    { user: "Po", sex: "female", age: 4 }
  ],
  "age"
);
*/
/*
- Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then
return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function


function addTogether(a, b) {
  for (let i = 0; i < arguments.length; i++) {
    if (!Number.isFinite(arguments[i])) {
      return undefined;
    }
  }
  if (!arguments[1]) {
    return function (b) {
      if (Array.isArray(b)) {
        return undefined;
      }
      return a + b;
    };
  }
  return a + b;
}
addTogether(2)([3]);
*/
