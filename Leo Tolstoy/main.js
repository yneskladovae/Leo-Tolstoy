'use strict'

const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'ь', 'э', 'ю', 'я'];
const arr = [47, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50, 59, 63, 38, 35, 31, 50, 59, 63, 45, 36, 46, 38, 40, 35, 31, 45, 45, 58, 53, 63, 47, 46, 35, 31, 48, 42, 46, 33, 63, 46, 50, 63, 38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 46, 44, 51, 63, 35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59]
const decryptText = arr.map(item => alphabet[item - 31] ?? ' ');

function findMostFrequentLetters(arr) {
  const reduceArr = arr.reduce((acc, curr) => {
    (!acc[curr]) ? acc[curr] = 1 : acc[curr]++;
      return acc;
  }, {});
  const sort = Object.entries(reduceArr).sort(([key1, value1], [key2, value2]) => value2 - value1);
    return (sort.slice(1,5));
}

console.log(decryptText.join(''));
console.log(findMostFrequentLetters(decryptText));