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

/*
-Truncate a String

function truncateString(str, num) {
  let truncatedString = "";

  if (str.length > num) {
    truncatedString = str.slice(0, num).concat("...");
    return truncatedString;
  }
  if (str.length <= num) {
    return str;
  }
  console.log(str);
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
);
*/

/*
- Finders Keepers
reate a function that looks through an array arr and returns the first element 
in it that passes a 'truth test'.  This means that given an element x, the 'truth test'
is passed if func(x) is true. If no element passes the test, return undefined.


function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
*/

/*
-Boo who
Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  }
  return false;
}
booWho(null);
*/

/*
-Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  const splittedArray = str.toLowerCase().split(' ');
  const capitalizedArray = []
  for (let i = 0; i < splittedArray.length; i++) {
    capitalizedArray.push(splittedArray[i].replace(
      splittedArray[i].charAt(0).toLowerCase(),
      splittedArray[i].charAt(0).toUpperCase()
    ));
  }
  return capitalizedArray.join(' ');
}
titleCase("I'm a little tea pot");
*/

/*
-Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let spreadedArray = [];
  let finalArray = [];
  let slicedArray = arr2.slice(0, n);
  spreadedArray = [...slicedArray, ...arr1]
  finalArray = spreadedArray.concat(arr2.slice(n));
  return finalArray;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
*/

/*
-Falsy Bouncer

Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter(value => !!value === true);
}

bouncer([7, "ate", "", false, 9]);
*/

/*
- Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into 
an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
  return arr.indexOf(num);
}
getIndexToIns([10, 20, 30, 40, 50], 35)
*/

/*
- Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

function mutation(arr) {
  const startElement = arr.slice(0, 1).join().toLowerCase();
  const lastElement = arr.slice(-1).join().toLowerCase();
  for (let i = 0; i < lastElement.length; i++) {
    if (!startElement.includes(lastElement[i])) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);

mutation(["hello", "Hello"]);
*/
