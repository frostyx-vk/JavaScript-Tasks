// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/

var humanYearsCatYearsDogYears = function (humanYears) {
  let cat
  let dog
  let human = humanYears;
  if (humanYears === 1) {
    cat = 15
  } else if (humanYears === 2) {
    cat = 24
  } else if (humanYears > 2) {
    cat = 24 + (humanYears - 2) * 4
  };

  if (humanYears === 1) {
    dog = 15
  } else if (humanYears === 2) {
    dog = 24
  } else if (humanYears > 2) {
    dog = 24 + (humanYears - 2) * 5
  }

  return [human, cat, dog];
}