"use strict";
/*
- Reverse a String
// 1.create newStr array
// 2.loop str string backwards
// 3.push str characters into newStr array 
// 4.use join('') on newStr array to return a string from newStr elements

function reverseString(str) {
  let newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join("");
}
reverseString("hello");
*/

//----------------------------------

/*
- Factorialize a Number
1. Create a base case - stopping condition
2. recursive call to the same function with different arguments every time
3. when num = 1 instead of make a recursive call again we just return 1
4. return results from factorialize() calls bubbles up

function factorialize(num) {
  if ((num <= 1)) {
    return 1;
  } else {
    console.log(num);
  return  num * factorialize(num - 1);
  }
}
factorialize(4);
*/

//----------------------------------

/*
- Return longest word length
1. create an array
2. split str string with an empty space as a separator parameter and store the returned  array in the longestWordLengthArray array
3. loop the longestWordLengthArray
4. check each  longestWordLengthArray element length and return the length of the longest word in to max variable

function findLongestWordLength(str) {
  let max = 0;
  let longestWordLengthArray = [];
  longestWordLengthArray = str.split(' ');
  for (let i = 0; i < longestWordLengthArray.length; i++) {
    if (longestWordLengthArray[i].length > max) {
      max = longestWordLengthArray[i].length;
    }
  }
  return max;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/

//----------------------------------
/*
- Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let largestNumbersArray = [];
  let max = Number.MIN_SAFE_INTEGER;
  // loop the outer array
  for (let i = 0; i < arr.length; i++) {
    // loop the inner array
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    // push each sub-array max element into largestNumbersArray
    largestNumbersArray.push(max);
    // reset max value with MIN_SAFE_INTEGER in order to compare with negative values safe
    max = Number.MIN_SAFE_INTEGER;
  }
  return largestNumbersArray;
}
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
*/
//----------------------------------

/*
- Confirm the Ending

function confirmEnding(str, target) {
  //slice as many characters as the target string from the end of the str string and  compare if the characters are the same 
  const result = str.slice(-target.length) === target ? true : false;
  return result;
}
console.log(confirmEnding("Connor", "n"));
*/

/*
-Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let repeatedString = '';
  let i = 1;
  if (num < 0) {
    return '';
  } else {
    while (i <= num) {
      repeatedString += str;
      i++;
    }
  }
  console.log(repeatedString);
  return repeatedString;
}

repeatStringNumTimes("abc", 3);
*/
