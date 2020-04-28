let percent = Math.floor(Math.random() * 100);

let numsExample = [
  {num: 0, code: "zero"},
  {num: 1, code: "one"},
  {num: 2, code: "two"},
  {num: 3, code: "three"},
  {num: 4, code: "four"},
  {num: 5, code: "five"},
  {num: 6, code: "six"},
  {num: 7, code: "seven"},
  {num: 8, code: "eight"},
  {num: 9, code: "nine"},
];

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let nums = [
  {num: numsExample[num1].num, code: numsExample[num1].code},
  {num: numsExample[num2].num, code: numsExample[num2].code},
];

// TODO
// создать массив выходных данных
// создать шаблоны классов цифр (one, second...)
// посылать пользователю массив с цифрами и классами
// обернуть всё в сервис

module.exports = nums;
