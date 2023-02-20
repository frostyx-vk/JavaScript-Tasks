// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/

function rowSumOddNumbers(n) {

  const start = n ** 2 - n + 1;

  let sum = start;

  for (let index = 1; index < n; index++) {
    sum += start + (2 * index);
  }
  return sum
}