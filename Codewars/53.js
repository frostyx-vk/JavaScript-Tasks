// https://www.codewars.com/kata/562926c855ca9fdc4800005b/

function numberToPower(number, power){
  let result = number;
  if(power === 0){
    result = 1
  } else {
  for (let i = 1; i < power; i++) {
    result *= number;
  }}
  return result;
}