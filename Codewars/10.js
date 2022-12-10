// https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr) {
  let odd = [],
    even = [];

  for (const value of arr) {
    if (value % 2 === 0) {
      even.push(value);
    } else {
      odd.push(value)
    }
  }
  return [odd, even];
}