#!/usr/bin/env node

// Assignment 1: Fibonacci series

let array = [];

function fibs(n) {
  for (let i = 0; i <= n; i++) {
    array[i] = i <= 1 ? i : array[i - 1] + array[i - 2];
  }
  return array;
}

// console.log(fibs(8));

function fibsRec(i) {
  // Get Fibonacci number for i
  const fibN = (n) => (n <= 1 ? n : fibN(n - 1) + fibN(n - 2));

  // Add new Fibonacci number to the array
  array[i] = fibN(i);

  // Recursion
  return i === 0 ? array : fibsRec(i - 1);
}

console.log("Fibonacci series:", fibsRec(8));

// Assignment 2: Merge Sort

let someArray = [5, 2, 1, 3, 6, 4];

function mergeSort(array) {
  // Base case
  if (array.length === 1) return array;

  // Get rounded midpoint in case the array length is odd
  const mid = Math.floor(array.length / 2);

  // Split array at the midpoint and run mergeSort for it
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  // Merge
  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  // Loop through arrays until one is empty
  while (left.length && right.length) {
    // Compare and push the smaller item to the result
    left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  // Include any remaining items from left or right
  return [...result, ...left, ...right];
}

console.log("Sorted array:", mergeSort(someArray));
