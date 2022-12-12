// https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  const a = [];
  let noGap = string.split(' ');

  for (const array of noGap) {
    a.push(array.split('').join(separator));
  }

  return a.join(' ');

  ///////// 2
  //   const splitted =  string.split(' ');

  //   const joindBySeparator = splitted.map(item => item.split('').join(separator));

  //   return joindBySeparator.join(' ');

  //////// 1 
  //   return string
  //     .split(' ')
  //     .map(item => item.split('').join(separator))
  //     .join(' ')
}