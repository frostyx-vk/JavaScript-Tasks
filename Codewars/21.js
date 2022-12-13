// https://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s){
  let a = s.trim();
  let b = a+a;
  let c = a+a+a;
  let d = a+a+a+a;
  let e = a+a+a+a+a;
  let letter = (`${a}\n${b}\n${c}\n${d}\n${e}`)
  return letter;
}