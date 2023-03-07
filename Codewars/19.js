// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  let strUp = str.toUpperCase();
  let words = strUp.split(" ");

  const result = words.map(item => item.slice(0, item.length - 1) + item[item.length - 1].toLowerCase());

  return result.join(' ');
}