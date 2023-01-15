// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr, ...indexesToSwapPairs) {
  const array = [...arr];

  for (const indexesPair of indexesToSwapPairs) {
    const [firstIdx, secondIdx] = indexesPair;
    const firstValue = array[firstIdx];
    const secondValue = array[secondIdx];

    array[firstIdx] = secondValue;
    array[secondIdx] = firstValue;

  }

}