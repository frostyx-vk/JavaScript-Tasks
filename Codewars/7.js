// https://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n){
  if(n<5){return 100*n}
  else if (n>=5&&n<10){return 95*n}
  else if (n>=10){return 90*n}
}