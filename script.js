function findDuplicates(arr) {
  const frequency = {};
  const duplicates = [];
  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  for (const num in frequency) {
    if (frequency[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 7, 3];
const result = findDuplicates(numbers);
console.log("Array with Duplicates : ", numbers);
console.log("Result : ", result); // [1, 2, 3]
console.log("///////////////////////////////////////////////////////");

////////////////////////////////////////////////////////////////////////////////////////////

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function findPrimesInRange(start, end) {
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

const start = 10;
const end = 50;
const primeNumbers = findPrimesInRange(start, end);
console.log("Start:", start);
console.log("End:", end);
console.log("Prime Num :", primeNumbers); // [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
console.log("///////////////////////////////////////////////////////");
////////////////////////////////////////////////////////////////////////////////////////////////////////

function sortWordsByLength(sentence) {
  const words = sentence.split(" ");
  words.sort((a, b) => a.length - b.length);
  return words.join(" ");
}
const sentence = "Sort the words in this sentence by their length";
const sortedSentence = sortWordsByLength(sentence);
console.log("Sentence :", sentence);
console.log("Sorted Sentence :", sortedSentence);
console.log("///////////////////////////////////////////////////////");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function filterArray(arr, predicate) {
  return arr.filter(predicate);
}
function isGreaterThanFive(num) {
  return num > 5;
}

const nums = [1, 2, 3, 6, 7, 8, 10];
const filteredNumbers = filterArray(nums, isGreaterThanFive);
console.log("Nums:", nums);
console.log("Filtered Numbers:", filteredNumbers); // [6, 7, 8, 10]
console.log("///////////////////////////////////////////////////////");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
