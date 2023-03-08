// https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  const a = [];
  let noGap = string.split(' ');

  for (const array of noGap) {
    a.push(array.split('').join(separator));
  }

  return a.join(' ');

}