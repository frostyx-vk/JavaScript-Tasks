// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str) {
  let a = str.split(' ');
  let b = a.reverse();
  let c = b.join(' ')
  return c;
}