// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/

function isPalindrome(x) {
  if(x.slice(0,1).toUpperCase() === x.slice(-1).toUpperCase()){
    return true
  } else if(x.slice(0,1).toUpperCase() !== x.slice(-1).toUpperCase()){
console.log(x)
    return false
  } 
}