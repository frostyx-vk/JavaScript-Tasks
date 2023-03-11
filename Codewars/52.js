// https://www.codewars.com/kata/54edbc7200b811e956000556/

function countSheeps(arrayOfSheep) {

  let num = 0;
  
  for (let arr of arrayOfSheep){
    console.log(arr)
    if(arr === undefined){
      arr = 0
    }
    num = num + +arr
    
  }
  return num;
}