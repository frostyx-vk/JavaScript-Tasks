// https://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
    let value;
    
    for (let i = 0; i < arr.length; i++) {
      if(value === undefined) {
        value = arr[i];
      }
      else if(arr[i].length < value.length) {
        value = arr[i];
      }
    } 
    
      let newValue = arr.map(function(el) {
        return el.slice(0, value.length);
        });
  
    return newValue;
  }
  
