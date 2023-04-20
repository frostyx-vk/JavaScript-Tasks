// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n) {
  let a = [];
  for (let i = 0; i <= n; i++) {
    let b = 2 ** i;
    let c = a.push(b);
  }
  return a
}