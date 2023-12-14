#!/usr/bin/env node

// Assignment 1 : fibonacci series

let array = [];

function fibs(n) {
  for (let i = 0; i <= n; i++) {
    array[i] = i <= 1 ? i : array[i - 1] + array[i - 2];
  }
  return array;
}

// console.log(fibs(8));

function fibsRec(i) {
  // get fib n for i
  const fibN = (n) => (n <= 1 ? n : fibN(n - 1) + fibN(n - 2));

  // new array item
  array[i] = fibN(i);

  // loop
  return i === 0 ? array : fibsRec(i - 1);
}

console.log("fibonacci series:", fibsRec(8));

// Assignment 2 : mergeSort

let someArray = [5, 2, 1, 3, 6, 4];

function mergeSort(array) {
  // Base case
  if (array.length === 1) return array;

  //get rounded midpoint in case array is odd
  const mid = Math.floor(array.length / 2);

  //split array at mid
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  //merge
  return merge(left, right);
}
function merge(left, right) {
  let result = [];

  //loop through arrays until one is empty
  while (left.length && right.length) {
    //compare and push smaller item to result
    left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  //in case that there are items left in left or right include them also
  return [...result, ...left, ...right];
}

console.log("Sorted array:", mergeSort(someArray));
