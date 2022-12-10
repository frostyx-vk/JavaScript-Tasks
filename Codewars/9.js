// https://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n){
  let stroka = str;
  let z = '*';
  
   while(n) {
    if (n % 2 === 0) {
      stroka = stroka + z;
    } else {
      stroka = z + stroka;
    };
    
    n--;
  };
  
  return stroka;
};