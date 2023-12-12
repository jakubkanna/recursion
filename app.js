#!/usr/bin/env node

// Assignment 1

/**
 * The Fibonacci sequence is a sequence in which
 * each number is the sum of the two preceding ones.
 *  The sequence commonly starts from 0 and 1.
 */

let array = [];

function fibs(n) {
  for (let i = 0; i <= n; i++) {
    array[i] = i <= 1 ? i : array[i - 1] + array[i - 2];
  }
  return array;
}

function fibsRec(i) {
  //get fib n for i
  const fibN = (n) => (n <= 1 ? n : fibN(n - 1) + fibN(n - 2));

  //insert fibn for array[n]
  array[i] = fibN(i);

  //loop until it reaches 0
  if (i === 0) return array;
  return fibsRec(i - 1);
}

// console.log(fibs(8));
// console.log(fibsRec(8));

// Assignment 1

/**
 * Build a function mergeSort that takes in an array and returns a sorted array,
 * using a recursive merge sort methodology.
 */
