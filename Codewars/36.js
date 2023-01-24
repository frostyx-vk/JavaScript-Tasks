// https://www.codewars.com/kata/559d2284b5bb6799e9000047/

function addLength(str) {
  let a = str.split(' ');
  let b = a.map(item => (item + ' ' + item.length))
  return b
}