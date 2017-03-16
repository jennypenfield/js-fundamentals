/* PART 0 *
Write a function that calculates the sum of all the numbers in an array */
console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)

function sumOfArray (arr1) {
  var sum = 0
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i]
  }
  return sum
}
//
// // PART 1
//
// // Write a function maxOfArray() that takes an array of numbers as an argument and finds the highest number.
console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

function maxOfArray (arr1) {
    var max = 0
    for (i = 0; i < arr1.length; i++) {
      if (isNaN(arr1[i])) {
        max = 'Array needs to be all numbers'
      } else if (arr1[i] > max) {
          max = arr1[i]
      }
    }
    return max
}
// /**
// PART 2 *
// Write a function isVowel() that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise. */
//
console.assert(isVowel(0) === false)
console.assert(isVowel('B') === false)
console.assert(isVowel('b') === false)
console.assert(isVowel('a') === true)
console.assert(isVowel('E') === true)

function isVowel (letterInput) {
  var isVowel = false
  if (letterInput === 'A' || letterInput === 'a' || letterInput === 'E' || letterInput === 'e' || letterInput === 'I' ||
  letterInput === 'i' || letterInput === 'O' || letterInput === 'o' || letterInput === 'U' || letterInput === 'u') {
    isVowel = true
  }
  return isVowel
}
//
// /**
// Part 3 *
// Define a function reverse() that computes
// the reversal of a string. For example,
// reverse("skoob") should return the
// string "books". */
//
console.assert(reverse('books') === 'skoob')
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

function reverse (strInput) {
  var newArr = []
  for (i = strInput.length - 1; i >= 0; i--) {
    newArr.push(strInput[i])
  }
  return (newArr.join(''))
}
// /**
// Part 4 *
// write a function the returns a FizzBuzz string for some number N (counting up from 1).
// - for every number that isn't a multiple of 3 or 5, return a period "."
// - for every number that is a multiple of 3 (but not 5), return "fizz"
// - for every number that is a multiple of 5 (but not 3), return "buzz"
// - for every number that is a multiple of 3 and 5, return "fizzbuzz" */
//
console.assert(fizzbuzz(1) === '.')
console.assert(fizzbuzz(2) === '..')
console.assert(fizzbuzz(3) === '..fizz')
console.assert(fizzbuzz(5) === '..fizz.buzz')
console.assert(fizzbuzz(10) === '..fizz.buzzfizz..fizzbuzz')

function fizzbuzz (inputNum) {
  var outputStr = ''
  for (i = 1; i <= inputNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputStr += 'fizzbuzz'
    } else if (i % 3 === 0 && i % 5 !== 0) {
      outputStr += 'fizz'
    } else if (i % 5 === 0 && i % 3 !== 0) {
      outputStr += 'buzz'
    } else {
      outputStr += '.'
    }
  }
  return outputStr
}

/**
Part 5 *
Write a function findLongestWord() that takes a string of words and returns the longest word.
i.e. findLongestWord("a book full of dogs") should return "book" */

console.assert(findLongestWord('a book full of dogs') === 'book')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

function findLongestWord (inputStr) {
   var replaced = inputStr.replace(/[^A-Za-z\s]/g,"");
   var newArr = replaced.split(' ')
   var result = newArr[0]

   for (i = 1; i < newArr.length; i++) {
     if (newArr[i].length > result.length) {
       result = newArr[i]
     }
   }
   return result
}

//
// /**
// PART 6 *
// write a function that returns the Greatest Common Denominator of two numbers
// - if no GCD exists, return 1 */
//
function GCD (num1, num2) {
  if (num1 % num2 === 0) {
    return num2
  } else if (!num1 % num2 % 2) {
    return 1
  } else {
    return num1 % num2
  }
}

console.assert(GCD(5, 1) === 1)
console.assert(GCD(15, 3) === 3)
console.assert(GCD(15, 5) === 5)
console.assert(GCD(50, 20) === 10)
