// https://www.codewars.com/kata/57a77726bb9944d000000b06/

function mango(quantity, price) {
  const freeCount = Math.floor(quantity / 3);
  const payCount = quantity - freeCount
  return payCount * price
}