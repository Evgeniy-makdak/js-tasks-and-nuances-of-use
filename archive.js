// // 3.1.1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
// const num = 123450;
// newNum = +(String(num).split('')).sort((a, b) => a - b).join('');
// console.log(newNum === num ? true : false);

// // 3.1.2 Дан массив:
// const arr = [1, '', 2, 3, '', 5];
// // Удалите из массива все пустые строки.
// let newArr = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i]) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// // 3.1.3 Дан массив:
// const arr1 =
// [
// 	[2, 1, 4, 3, 5, 17],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// // Отсортируйте элементы в каждом подмассиве.
// let newArr1 = [];
// for (let i = 0; i <= arr1.length - 1; i++) {
//     console.log(arr1[i].sort((a, b) => a - b));
// }

// // 3.1.4 Даны два массива:

// let arr2 = [1, 2, 3, 7];
// let arr3 = [1, 2, 3, 4, 5];
// // Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

// for (let i = 0; i <= arr3.length - 1; i++) {
//     while (arr3.length !== arr2.length) {
//         arr3.pop();
//     }
// }
// console.log(arr3);

// 3.2.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
// const res = [];
// const beetwen = [];
// for (let i = 10; i <= 1000; i++) {
//     res.push(String(i).split(''));
// }
// for (let j = 0; j < res.length; j++) {
//     if ((res[j][res[j].length - 2]) % 2 === 0 && (res[j][res[j].length - 2]) != 0) {
//         beetwen.push(res[j].join(''));
//     }
// }
// console.log(beetwen);

// 3.2.2 Дан массив. Удалите из него каждый пятый элемент.
// const arr = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 5 != 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// 3.2.3 Дана некоторая переменная с числом:
// let num = 7; // 00000
// Сделайте строку, содержащую столько нулей, сколько указано в переменной.
// let zeroString = '';
// for (let i = 1; i <= num; i++) {
//     zeroString += i * 0;
// }
// console.log(zeroString);

// 3.2.4 Дана некоторая строка со словами:

// const str = 'aaa bbb ccc eee fff' // 'aaa ccc fff'
// Удалите из этой строки каждое второе слово.
// let arr = [];
// for (let i = 0; i < str.split(' ').length; i++) {
//     if (i % 2 === 0) {
//         arr.push(str.split(' ')[i])
//     }
// }
// console.log(arr.join(' '))

// 3.2.5 Дан массив:
// arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

// let sum = 0;
// let newArr = (arr.join(',').split(','));
// for (let i = 0; i < newArr.length; i++) {
//     sum += (+newArr[i]);
// }
// console.log(sum);

// 3.3.1 Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
// arr = ['qwerty', 'som', 'iq', 'azov', 'usa', 're1$_,a'];
// sortArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 3) {
//         sortArr.push(arr[i]);
//     };
// };
// console.log(sortArr);

// 3.3.2 Дано некоторое число:
// const num = 1357;
// Проверьте, что все цифры этого числа являются нечетными.
// let numArr = [];
// let newNum = num.toString().split('');
// for (let i = 0; i < newNum.length; i++) {
//     if (newNum[i] % 2 === 0) {
//         console.log(false);
//     } else {
//         console.log(true);
//     };
// }

// 3.3.3 Дано некоторое слово:
// const str = '12321';
// Проверьте, что это слово читается одинаково с любой стороны.
// let rewStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     rewStr += str[i];
// }
// if (str === rewStr) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 3.3.4 Дан массив:

// arr = [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.
// let str = arr.join(',').split(',').map(Number).reduce(function(a, b) {
//     return (a + b);
// });
// console.log(str);

// 3.4.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
// let str = [];
// for (let i = 10; i <= 1000; i++) {
//     if (i.toString().split('').map(Number)[0] % 2 === 0) {
//         str.push(i);
//     }
// }
// console.log(str.join(','));

// // 3.4.2 Дан некоторый массив, например, вот такой:
// arr = [1, 2, 3, 4, 5, 6] // => [2, 1, 4, 3, 6, 5]
// // Поменяйте местами пары элементов этого массива
// let newArr = [];
// for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i + 1], arr[i]);
// }
// console.log(newArr);

// 3.4.3 Дан следующий объект:

// let obj = {
//     1: {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     2: {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     3: {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// }
// // Найдите сумму элементов этого объекта.
// let transArr = [];
// let summ = 0;
// for (let key in obj) {
//     transArr.push(obj[key]);
// }
// let totalSum = 0;

// for (let i = 0; i < transArr.length; i++) {
//   let obj = transArr[i];
//   for (let key in obj) {
//     totalSum += obj[key];
//   }
// }

// console.log(totalSum);

// 3.5.1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
// const text = 'Какой хороший архив у этого атамана, проворчал архиепископ.'
// let textArr = text.split(' ');
// let newArr = [];
// for (let word in textArr) {
//     if (textArr[word][0] === 'а') {
//         newArr.push(textArr[word]);
//     };
// }
// console.log(newArr);

// 3.5.2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
// const arr = [73, 11, 100, 205, 7, 0];
// newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0 && arr[i] != 0) {
//         newArr.push(arr[i]);
//     };
// }
// console.log(newArr);

// 3.5.3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
// const arr = [73, 11, 100, 205, 7, 0];
// const newArr = arr.filter(num => num.toString().includes('0'))
// console.log(newArr);

// 3.5.4 Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// const arr = [73, 11, 100, 205, 7, 0];
// const newArr = arr.some(num => num.toString().includes('3'));
// console.log(newArr);

// 3.5.5 Дано некоторое число. Отсортируйте цифры по возрастанию.
// const num = 53412;
// const sortNum = num.toString().split('').sort().join('');
// console.log(+sortNum);

// 3.5.6 Напишите программу, которая сформирует следующую строку:
// '-1-2-3-4-5-'
// let str = [];
// for (let i = 1; i <= 5; i++) {
//     str.push('-' + i);
// }
// console.log(str.join('') + '-');

// 3.5.7 Дан следующий объект:

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Найдите сумму элементов этого объекта.
// function sumValues(obj) {
// 	let sum = 0;
// 	for (let key in obj) {
// 	  if (typeof obj[key] === 'object') {
// 		sum += sumValues(obj[key]); // рекурсивный вызов для объектов
// 	  } else {
// 		sum += obj[key]; // суммирование числовых значений
// 	  }
// 	}
// 	return sum;
//   }

//   const totalSum = sumValues(obj);
//   console.log(totalSum);

// 3.6.1 Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
// const arr = new Array(77, 375, 1, 2997, 11873);
// let resArr = [];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i].toString().length <= 3) {
// 		resArr.push(arr[i]);
// 	}
// };
// console.log(resArr);

// 3.6.2 Дано число, например, вот такое:
// let num = 12345;
// // Проверьте, что все цифры этого числа больше нуля.

// num.toString().split('').forEach((i) => {
// 	console.log(i > 0 ? true : false);
// })

// 3.6.3 Дан некоторый массив, например, вот такой:
// const arr = [123, 456, 789];
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let resArr = [];
// arr.forEach((item) => {
// 	resArr.push(item.toString().split(''));
// })
// console.log([].concat(...resArr));

// 3.6.4 Дан следующая структура:

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.
// let sum = 0;
// for (let i = 1; i <= 3; i++) {
// 	data.forEach((item) => {
// 		sum += item[i];
// 	})
// }
// console.log(sum);

// 3.7.1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.
// const str = 'это просто обычная строка, которую нужно отсортировать по возрастанию';
// console.log(str.split(' ').sort().join(' '));

// 3.7.2 Дано число. Получите массив делителей этого числа.
// const num = 18;
// let del = [];
// for (let i = 2; i <= num; i++) {
// 	if (num % i === 0) {
// 		del.push(i);
// 	}
// }
// console.log(del);

// 3.7.3 Даны два числа. Получите массив общих делителей этих чисел.
// const a = 24;
// const b = 16;
// let sumArr = [];
// for (let i = 2; i <= a; i++) {
//     if (a % i === 0 && b % i === 0) {
//         sumArr.push(i);
//     }
// };
// console.log(sumArr);

// 3.7.4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
// const num = 12;
// let count = 0;
// for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//         count += 1;
//     };
// };
// count > 2 ? console.log(false) : console.log(true);

// 3.7.5 Через запятую написаны числа. Получите максимальное из этих чисел.
// const arr = '11, 6, 22, 37, 128, 0, -6';
// const sortArr = (arr.split(',').sort((a, b) => a - b));
// console.log(sortArr[sortArr.length - 1]);

// 3.7.6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
// const arr = [15, 7, 27, 1];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         newArr.push(arr[i], arr[i]);
//     } else newArr.push(arr[i]);
// };
// console.log(newArr);

// 3.7.7 Дана строка. Удалите из нее все гласные буквы.
// const string = 'consolidate';
// let sortString = [];
// const wovel = ['a', 'o', 'i', 'y', 'u', 'e'];
// const stringArr = string.split('');

// for (let i = 0; i < stringArr.length; i++) {

//     if (!wovel.includes(stringArr[i])) {
//         sortString.push(stringArr[i]);
//     }
// }
// console.log(sortString.join(''));

// 3.7.8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
// const str = 'idf fhyj dbrnj';
// const strArr = str.split(' ');
// let newStr = [];
// for (let i = 0; i < strArr.length; i++) {
//     newStr.push(strArr[i].slice(0, -1) + strArr[i].slice(-1).toUpperCase());
// }
// console.log(newStr.join(' '));

// 3.7.9 Дан следующая структура:

// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// // Найдите сумму элементов этой структуры.
// let newArr = [];
// let sum = 0;
// for (let i = 0; i < data.length; i++) {
// 	let arr = [];
// 	for (key in data[i]) {
// 		arr.push(data[i][key]);
// 	}
// 	newArr = arr.join(',').split(',');
// 	for (let i = 0; i < newArr.length; i++) {
// 		sum += parseInt(newArr[i])
// 	}
// }
// console.log(sum);

// 3.8.1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
// const arr = [73, 13, 333, 301];
// for (let i = 0; i < arr.length; i++) {
//     arr[i].toString().includes(3) ? console.log(true) : false;
// }

// 3.8.2 Дана строка в формате:

// const kebab = 'kebab-case';
// // Преобразуйте ее в формат:
// 'snake_case'
// const snake = kebab.split('-').join('_');
// console.log(snake);

// 3.8.3 Дана строка в формате:
// const str = 'snake_case';
// // Преобразуйте ее в формат:
// // 'camelCase'
// const camelCase = str.split('_');
// console.log(camelCase[0] + camelCase[1].split('').shift().toUpperCase() + camelCase[1].slice(1));

// 3.8.4 Дана строка в формате:
// const str = 'camelCase'
// // Преобразуйте ее в формат:
// // 'snake_case'
// let snake = str.split(/(?=[A-Z])/).join('_').toLowerCase();
// console.log(snake);

// 3.8.5 Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

// let arr = [];
// let res = [];
// for (let i = 1; i <= 3; i++) {
//     arr.push(i);
// }
// for (let j = 0; j <= 4; j++) {
//     res.push(arr);
// }
// console.log(res);

// 3.9.1 Дана строка. Проверьте, что эта строка состоит только из цифр.
// const str = '378*9';
// const arrStr = str.split('');
// let count = 0;
// arrStr.forEach((numb) => {
//     if (!isNaN(numb)) {
//         count += 1;
//     };
// });
// count === arrStr.length ? console.log(true) : console.log(false);

// 3.9.2 Дана строка. Проверьте, что эта строка состоит только из четных цифр.
// const str = '8228';
// let arrStr = str.split('');
// let count = 0;
// for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i] % 2 === 0) {
//         count += 1
//     }
// }
// if (count === arrStr.length) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// let res = arrStr.map((count) => {
//     return count % 2 === 0;
// })
// console.log(res);

// 3.9.3 Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
// const arr = [11, 200, 75];
// const filteredArr = arr.filter(num => {
//     const numStr = num.toString();
//     let zeroCount = 0;
//     for (let i = 0; i < numStr.length; i++) {
//       if (numStr[i] === '0') {
//         zeroCount++;
//         if (zeroCount >= 2) {
//           return false;
//         }
//       }
//     }
//     return true;
//   });

//   console.log(filteredArr);

// 3.9.4 Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
// let sumArr = [];
// for (let i = 0; i <= 1000; i++) {
//     if (i.toString().split('').reduce((acc, item) => (+acc + +item), 0) === 13) {
//         sumArr.push(i);
//     };
// };
// console.log(sumArr);

// 3.9.5 Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr.push([]);
//     for (let j = 1; j <= 9; j++) {
//         if (arr[i].length < 3) {
//             arr[i].push(j)
//         };
//     };
// };
// console.log(arr);

// 3.10.1 Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
// const arr = [3, 7, 11];
// let newArr = [];
// arr.forEach((item) => {
//     newArr.push(item, item);
// });
// console.log(newArr);

// 3.10.2 Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
// const arr = [3, 5, 9, 15, 0, 105];
// const number = 5;
// let resArr = [];
// arr.map((item) => {
//     if (item % number === 0 && item !== 0) {
//         resArr.push(item);
//     };
// });
// console.log(resArr);

// 3.10.3 Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
// const arr1 = [75, 11, 7, 251, 33, 0];
// const arr2 = [0, 8, 12, 55, 7, 33];
// let resArr = [];
// arr1.forEach((item) => {
//     arr2.forEach((num) => {
//         if (item === num) {
//             resArr.push(item);
//         };
//     });
// });
// console.log(resArr);

// 3.10.4 Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
// const num = 87354639330;
// const arrNum = num.toString().split('');
// arrNum.pop();
// arrNum.shift();
// let resArr = [];
// arrNum.map((item, index) => {
//     if (item === '3') {
//         resArr.push(index);
//     };
// });
// console.log(resArr);

// 3.10.5 Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
// const arr = [8458, 21, 777, 1717, 897];
// let diffArr = [];
// const str = arr.toString();
// arr.forEach((item) => {
//     if (item.toString().length === new Set(item.toString()).size) {
//         diffArr.push(item);
//     };
// });
// console.log(diffArr);

// 3.10.6 Дан массив:

// const arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// // Слейте элементы этого массива в один одномерный массив:
// // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = [];
// resArr = [];
// newArr = arr.toString().split(',');
// newArr.forEach((item) => {
// 	resArr.push(+item);
// })
// console.log(resArr);

// 4.1.1 Сделайте функцию, которая вернет текущий день недели словом.

// const day = {
// 	1 : 'Monday',
// 	2 : 'Tuesday',
// 	3 : 'Wednesday',
// 	4 : 'Thursday',
// 	5 : 'Friday',
// 	6 : 'Saturday',
// 	7 : 'Sunday'
// }
// function theDay(data) {
// 	return data <= 0 || data > 7 ? 'Input correct data' : day[data];
// };
// console.log(theDay(7));

// 4.1.2 Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

// const data = {
// 	1 : 'Monday',
// 	2 : 'Tuesday',
// 	3 : 'Wednesday',
// 	4 : 'Thursday',
// 	5 : 'Friday',
// 	6 : 'Saturday',
// 	7 : 'Sunday'
// }
// let nowData = new Date().getDay()
// function sayDay() {
//     return data[nowData];
// };

// console.log(sayDay(nowData));

// 4.1.3 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
// function secToDay(seconds) {
//     return Math.floor(seconds / +86400);
// };

// console.log(secToDay(173001));

// 4.1.4 Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
// function sliced(num, str) {
//     return str.slice(0, num);
// };
// console.log(sliced(3, 'begemot'));

// 4.1.5 Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.
// const zodiac = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

// function showZodiac(data) {
//     if (new Date(data.split('.').slice(1, 3).join('.')) > 20.01) {
//         return zodiac[0];
//     };
// };
// console.log(showZodiac('2017.01.27'));

// 4.1.6 Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
// let sum = 0;
// function district(num) {
//     for (let i = 2; i < num; i++) {
//         if ( num % i === 0 ) {
//             sum += i;
//         };
//     };
//     return sum;
// };

// console.log(district(12));

// 4.2.1 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// function isSumm(num) {
//     let arr = num.toString().split('')
//     return arr.reduce((acc, item) => {
//         return acc + parseInt(item);
//     }, 0);
// };

// console.log(isSumm(3101));

// 4.2.2 Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
// function delZero(num) {
//     let res = [];
//     let arr = num.toString().split('');
//     arr.forEach((element) => {
//         if (element !== '0') {
//             res.push(element);
//         };
//     });
//     return res.join('');
// };
// console.log(delZero(100702705));

// 4.2.3 Сделайте функцию, которая будет возвращать сколько дней прошло или осталось
// до заданной даты в году, в зависимости от того, была уже эта дата или нет.

// function daysToOrFrom(dateString) {
//   const targetDate = new Date(dateString);
//   const today = new Date();
//   const year = today.getFullYear();
//   const targetYearDate = new Date(`${year}-${targetDate.getMonth() + 1}-${targetDate.getDate()}`);
//   const diff = targetYearDate - today;
//   const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//   if (days < 0) {
//     return `${-days} days ago`;
//   } else {
//     return `${days} days left`;
//   }
// };
// console.log(daysToOrFrom('2023-06-01'));

// 4.2.4 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// function wisYear(year) {
//     return year % 4 === 0 ? 'yes' : 'no';
// };

// console.log(wisYear('1982'));

// 4.3.1 Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
// const arr = [3, 17, 25, 3, 77, 0, -1, 17, 17, 17, -1];
// function noDubles(arr) {
//     let newArr = [];
//     for (let element = 0; element < arr.length; element++) {
//         if (!newArr.includes(arr[element])) {
//             newArr.push(arr[element]);
//         }
//     };
//     return newArr;
// };

// console.log(noDubles(arr));

// 4.3.2 Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
// const arr = [3, 17, 25, 3, 77, 0, -1, 17, 17, 17, -1, 3, 0, 0];
// function freeDubles(arr) {
//   let countArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count = arr.filter(element => element === arr[i]).length;
//     if (count <= 3 && !countArr.includes(arr[i])) {
//       countArr.push(arr[i]);
//     }
//   }
//   return countArr;
// }

// console.log(freeDubles(arr));

// 4.3.3 Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
// const arr = [11, 27, 27, 5, 8, 73, 73];
// let newArr = [];
// function delArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != arr[i - 1]) {
//             newArr.push(arr[i]);
//         };
//     };
//     return newArr;
// };
// console.log(delArr(arr));

// 4.3.4 Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }

// const arr = [11, 27, 27, 5, 8, 73, 73];
// let res;
// function minMax(arr) {
//     return res = `{\nmax: ${Math.max(...arr)} \n min: ${Math.min(...arr)}\n}`
// };
// console.log(minMax(arr));

// 4.4.1 Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
// function breakNum(number) {
//     let counter = 0;
//     for (let i = 2; i <= number; i++) {
//         if (number % i === 0) {
//             counter++;
//         };
//     }
//     return counter;
// };
// console.log(breakNum(7));

// 4.4.3 Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
// function part(num) {
//     let party = [];
//     for (let i = 2; i <= num; i++) {
//         if (num % i === 0) {
//             party.push(i);
//         };
//     };
//     return party;
// };
// console.log(part(18));

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
// function slou(num) {
//     let counter = 0;
//     for (let i = 2; i <= num; i++) {
//         if (num % i === 0) {
//             counter++;
//         }
//     }
//     counter > 1 ? console.log('no') : console.log('yes');
// };
// slou(12);

// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
// function odd(num) {
//     let odd = [];
//     for (let i = 1; i <= num; i++) {
//         odd.push(i);
//     };
//     newArr = odd.filter((item) => {
//         return item % 2 !== 0;
//     });
//     console.log(newArr);
// };
// odd(15);

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
// function randomArr(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.floor(Math.random() * num));
//     };
//     return arr;
// }
// console.log(randomArr(10));

// Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
// const str = '123';
// function isNumber(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (isNaN(+str[i])) {
//         return false;
//       }
//     }
//     return true;
//   }

// console.log(isNumber(str));

// Дана переменная со строкой. Проверьте, что эта строка представляет собой дробь.
// const str = '3175';
// function ceil(str) {
//     if (+str === Math.floor(str)) {
//         return true;
//     } return false;
// };
// console.log(ceil(str));

// 4.5.3 Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
// const arr = [73, 11, 5, 237, 0, -1];
// function preMarch(arr) {
//     let newArr = arr.sort((a, b) => a - b);
//     return newArr[newArr.length - 2];
// };
// console.log(preMarch(arr));

// 4.5.4 Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив,
// заполненный целыми числами от минимального параметра до максимального.

// function array(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i++) {
//         arr.push(i);
//     };
//     return arr;
// };
// console.log(array(3, 11));

// 4.5.5 Сделайте функцию, которая заполнит массив случайными латинскими буквами.
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// function latLetters(latLetters) {
//     let numArr = [];
//     let randArr = [];
//     for (let i = 0; i < letters.length; i++) {
//         numArr.push((Math.random(latLetters[i]).toFixed(2) * 25).toFixed());
//     }
//     for (let j = 0; j < numArr.length; j++) {
//         randArr.push(letters[numArr[j]]);
//     };
//     return randArr;
// };
// console.log(latLetters(letters));

// 4.6.1 Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
// function checkDate(dateString) {
//   let date = new Date(dateString);
//   if (isNaN(date.getTime())) {
//     return false;
//   }
//   return true;
// }
// console.log('====================================');
// console.log(checkDate('2003-04-07'));
// console.log('====================================');

//  4.6.2 Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// function randLatLetters(num) {
//     let randLetters = [];
//     for (let i = 1; i < letters.length; i++) {
//         randLetters.push(letters[Math.floor(Math.random((letters[i])) * 26)]);
//     };
//     return randLetters.slice(0, num);
// };
// console.log(randLatLetters(7));

// 4.6.3 Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
// function bigLetters(sentance) {
//     let arrWord = (sentance.split(' '));
//     let firstBigLetters = [];
//     for (let i = 0; i < arrWord.length; i++) {
//         firstBigLetters.push(arrWord[i].slice(0, 1));
//     };
//     return (firstBigLetters.join('')).toUpperCase();
// }
// console.log('====================================');
// console.log(bigLetters('да будь я хоть негром преклонных годов'));
// console.log('====================================');

// 4.6.4 Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
// function arrDivide(arrey) {
//     let result = [];
//     for (let i = 0; i < arrey.length; i++) {
//         let dividers = [];
//         for (j = 2; j < arrey[i]; j++) {
//             if (arrey[i] % j === 0 && i !== j) {
//                 dividers.push(j);
//             };
//         };
//         result.push(dividers);
//     };
//     return result;
// };
// console.log('====================================');
// console.log(arrDivide([6, 8, 9]));
// console.log('====================================');

// 4.6.5 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

// function secondsToDate(seconds) {
//     day = Math.floor(seconds / 86400);
//     hourse = Math.floor((seconds - (day * 86400)) / 3600);
//     minuts = Math.floor((((seconds - (day * 86400)) / 3600) - hourse) * 60);
//     sec = Math.ceil((((((seconds - (day * 86400)) / 3600) - hourse) * 60) - minuts) * 60);
//     return [day, hourse, minuts, sec];
// };
// console.log('====================================');
// console.log(secondsToDate(93677));
// console.log('====================================');

// 4.7.1 Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

// function alphabet(sentance) {
//     return sentance.toLowerCase().split(' ').sort().join(' ');
// };
// console.log(alphabet('lorem Ipsum Ave rempo'));

// 4.7.2 Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
// const arr_one = [26, 5, 11, 0, 0, 28, 28];
// const arr_two = [777, 11, 28, 54, 10, 5];
// function summArrows(arr_one, arr_two) {
//     let arr_three = arr_one.concat(arr_two)
//     return new Array(new Set(...[arr_three]));
// }
// console.log(summArrows(arr_one, arr_two));

// function sumArr(arr_one, arr_two) {
//     let arr_three = [];
//     for (let i = 0; i < arr_one.length; i++) {
//         for (let j = 0; j < arr_two.length; j++) {
//             if (arr_one[i] === arr_two[j]) {
//                 arr_three.push(arr_two[j]);
//             }
//         }
//     }
//     return new Set(arr_three);
// };
// console.log(sumArr(arr_one, arr_two));

// 4.7.3 Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
// function isRandomNum() {
//     return Math.random()
// }
// console.log(isRandomNum());

// 4.7.4 Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

// let arr = [1, 2, 3, 4, 5, 11, 79];

// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1
// function toNextElem(arr, elem) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (i === arr.length) {
//       return arr[0];
//     }
//     if (i === elem) {
//       return arr[i];
//     }
//   }
// }
// console.log(toNextElem(arr, 4));

// 4.8.1 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
// function randomNum(arr) {
//     return arr[Math.floor(Math.random() * arr.length)]
// };
// console.log(randomNum(arr));

// 4.8.2 Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
// function randArr(count) {
//     let newArr = [];
//     for (let i = 0; i < count; i++) {
//         newArr.push(arr[Math.floor(Math.random() * arr.length)])
//     }
//     return newArr;
// };
// console.log(randArr(3));

// 4.8.4 Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
// function slowRandArr(first, second) {
//   let slowRandArrow = [];
//   for (let i = first; i <= second; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       slowRandArrow.push(i);
//     }
//   }
//   return slowRandArrow;
// }
// console.log(slowRandArr(4, 18));

// 4.8.5 Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
// function isSumm(...numbers) {
//   let summArr = numbers.reduce((acc, elem) => {
//     return acc + elem;
//   });
//   return summArr;
// }
// console.log(isSumm(51, 3, 1, 8, 0));

// 4.8.6 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

// let randomArrey = [];
// function randArr(num1, num2) {
//   for (let i = num1; i <= num2; i++) {
//     let randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
//     randomArrey.push(randomNumber);
//   }
//   return randomArrey;
// }
// console.log(randArr(7, 17));

// 4.8.7 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
// let namArrey = [];
// function randArr(num1, num2) {
//   for (let i = num1; i <= num2; i++) {
//     let numberRandom = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
//     while (!namArrey.includes(numberRandom)) {
//       namArrey.push(numberRandom);
//     }
//   }
//   return namArrey;
// }

// console.log(randArr(1, 11));

// Метод map для перебора массива в JavaScript:

// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
// const arr = [81, 9, 64, 36, 16];
// let sqrtArr = [];
// arr.map((elem) => {
//   sqrtArr.push(Math.sqrt(elem));
// })
// console.log(sqrtArr);

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
// const strArr = ['первое', "слово", "дороже", "второго"];
// let goodArr = [];
// strArr.map((elem) => {
//   goodArr.push(elem + '!');
// });
// console.log(goodArr);

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
// const strArr = ['первое', "слово", "дороже", "второго"];
// function revArr(strArr) {
//   let reverseArr = [];
//   for (let i = 0; i < strArr.length; i++) {
//     reverseArr.push(strArr[i].split('').reverse().join(''));
//   }
//   return reverseArr;
// }
// console.log(revArr(strArr));

// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];
// function mapArr(arr) {
//   let splitArr = [];
//   arr.map((elem) => {
//     splitArr.push(elem.split(''));
//   });
//   return splitArr;
// };
// console.log((mapArr(arr)));

// Дан массив с числами. Используя метод map запишите в каждый элемент массива
// значение этого элемента, умноженное на его порядковый номер в массиве.
// const arr = [11, 5, 24, 8];
// function elemIndex(arr) {
//   return arr.map((elem, index) => {
//     return elem * index;
//   });
// }
// console.log(elemIndex(arr));

// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
// const arr = [11, 5, 3, 2];
// function sqrtArr(arr) {
//   sum = 0;
//   arr.forEach(element => {
//     sum += element * element;
//   });
//   return sum;
// };
// console.log(sqrtArr(arr));

// Дан массив с числами. Оставьте в нем только положительные числа.
// const arr = [375, -11, 0, 26, -8, 1, 7, -1, 9, 10, -10.5, 5.3];
// function justPlus(arr) {
//   return arr.filter((elem) => {
//     return elem > 0;
//   });
// };
// console.log(justPlus(arr));

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
// function isPositive(arr) {
//   return arr.filter((elem) => {
//     return elem > 0 && elem < 10;
//   });
// };
// console.log(isPositive(arr));

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const arr = ['slowly', 'quicq', 'foo', 'header', 'main'];
// function isBelowFive(arr) {
//   return arr.filter((elem) => {
//     return elem.length > 5;
//   });
// };
// console.log(isBelowFive(arr));

// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
// function isBelowFiftee(arr) {
//   return arr.filter((elem, index) => {
//     return (elem * index) < 30;
//   });
// };
// console.log(isBelowFiftee(arr));

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
// const arr = [1, 2, [3, 4], 5, [6, 7], 'gft'];
// function slowNumb(arr) {
//   return arr.filter((elem) => {
//     return typeof(elem) === 'number';
//   });
// };
// console.log(slowNumb(arr));

// 4.9.5 Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
// const arr = [[83, 11, 102], [20, -999, 251, 0], [-7, -3.15, -3], [11]];
// function maxNumbers(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     let maxOfArr = arr[i].sort((a, b) => a - b).slice(arr[i].length - 1);
//     newArr.push(maxOfArr)
//   }
//   return newArr ;
// }
// console.log(maxNumbers(arr));

// 4.10.1 Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.
// function isLatOrKir(letter) {
//     return letter.charCodeAt();
// };
// console.log(isLatOrKir('R'));

// 4.10.2 Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.
// const arr = [9, 8, 7, 6, 5]
// function randArr(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[Math.floor(Math.random() * arr.length)]);
//     }
//     return newArr;
// }
// console.log(randArr(arr));

// Дан текст со словами. Запишите все слова этого текста в специальный объект.
// Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.
// const wordArr = ["key", "meet", "mount", "object", "kloud", "ocean", "python"];
// function sortObject(wordArr) {
//   let sortObj = {};
//   for (let i = 0; i < wordArr.length; i++) {
//     const secondChar = wordArr[i][0];
//     if (sortObj[secondChar]) {
//       sortObj[secondChar].push(wordArr[i]);
//     } else {
//       sortObj[secondChar] = [wordArr[i]];
//     }
//   }
//   return sortObj;
// }

// console.log(sortObject(wordArr));

// Найти максимальный элемент массива через цикл и reduse.
// const arr_1 = [82, 19, -107, 83.01];
// function maxElem(arr_1) {
//     let max = arr_1[0];
//     for (let i = 1; i < arr_1.length; i++) {
//         if (arr_1[i] > max) {
//             max = arr_1[i];
//         }
//     }
//     return max;
// }
// console.log(maxElem(arr_1));

// function maxReduceElement(arr_1) {
//     arr_1.reduce((acc, item) => {
//         if (item > acc) {
//             acc = item;
//             return acc;
//         };
//     });
// };
// console.log(maxElem(arr_1));

// function maxOptimReduceElement(arr_1) {
//     return arr_1.reduce((acc, item) => (item > acc ? acc = item : acc))
// };
// console.log(maxOptimReduceElement(arr_1));

// function maxMathElement(arr_1) {
//     return Math.max(...arr_1);
// };
// console.log(maxMathElement(arr_1));

// Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами.
// const one = {
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
// };

// const tens = {
//   10: "ten",
//   20: "twenty",
//   30: "thirty",
//   40: "forty",
//   50: "fifty",
//   60: "sixty",
//   70: "seventy",
//   80: "eighty",
//   90: "ninety",
// };

// function wordFromNumber(ceil) {
//   if (ceil.toString().length === 1) {
//     return one[ceil];
//   } else if (ceil.toString().length === 2 && 20 <= ceil) {
//     if (ceil % 10 !== 0) {
//       return tens[ceil - (ceil % 10)] + " " + one[ceil % 10];
//     }
//     else return tens[ceil]
//   }
// }
// console.log(wordFromNumber(2));

// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.
// function singleDevider(num) {
//   let slowArrDeviders = [];
//   for (let i = 2; i <= num; i++) {
//     let counter = 0;
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0) {
//         counter++;
//       }
//     }
//     if (counter < 2) {
//       slowArrDeviders.push(i);
//     }
//   }
//   return slowArrDeviders;
// }

// console.log(singleDevider(8));

// Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.
// function toSlog(word) {
//   const vowel = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
//   let result = [];
//   let arrLetters = "";
//   for (let i = 0; i < word.length; i++) {
//     if (!vowel.includes(word[i + 1]) && vowel.includes(word[i])) {
//       arrLetters += word[i];
//       result.push(arrLetters);
//       arrLetters = "";
//     } else arrLetters += word[i];
//   }
//   if (arrLetters !== "") {
//     result.push(arrLetters);
//   }
//   return result;
// }

// console.log(toSlog("фляга"));

// 5.1.1 Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.

// const input1 = document.getElementsByClassName('input1')[0];
// const input2 = document.getElementsByClassName('input2')[0];

// function summ(a, b) {
//   let res = parseInt(a.value) + parseInt(b.value);
//   return res;
// };

// function showSum() {
//   let result = summ(input1, input2);
//   document.querySelector('.paragraph').innerHTML = result;
// }

// html:
{
  /* <body>
    <input class="input1" type="text" style="width: 150px; height: 30px; border: solid 1px;">
    <input class="input2" type="text" style="width: 150px; height: 30px; border: solid 1px;">
    <p class="paragraph" style="width: 300px; height: 30px; border: solid 1px;"></p>
    <button class="button" onclick="showSum()">summ</button>
    <script src="tasks.js"></script>
</body> */
}

// 5.1.2 Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.
// const number = document.getElementsByClassName('paragraph')[0]

// function square(num) {
//   let res = parseInt(num.innerHTML) ** 2;
//   return res;
// };

// function showRes() {
//   let result = square(number);
//   document.querySelector('.paragraph').innerHTML = result;
// };

// html:
{
  /* <body>
    <p class="paragraph" style="width: 100px; height: 20px; border: solid 0.5px;">7</p>
    <button class="button" onclick="showRes()" style="cursor: pointer;">square</button>
    <script src="tasks.js"></script>
</body> */
}

// 5.1.3 Даны абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.
// const data1 = document.getElementsByClassName('paragraph1')[0];
// const data2 = document.getElementsByClassName('paragraph2')[0];

// function sumParag(a, b) {
//   let sumRes = parseInt(a.innerHTML) + parseInt(b.innerHTML);
//   return sumRes;
// };

// function showRes() {
//   let sumShow = sumParag(data1, data2);
//   document.querySelector('.paragraphRes').innerHTML = sumShow;
// };

// html:
// {
//   /* <body>
//     <p class="paragraph1" style="width: 100px; height: 20px; border: solid 0.5px; display: flex; justify-content: center;">7</p>
//     <p class="paragraph2" style="width: 100px; height: 20px; border: solid 0.5px; display: flex; justify-content: center;">11</p>
//     <p class="paragraphRes" style="width: 100px; height: 20px; border: solid 0.5px;"></p>
//     <button class="button" onclick="showRes()" style="cursor: pointer;">result</button>
//     <script src="tasks.js"></script>
// </body> */
// }

// 5.1.4 Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.
// const number1 = document.querySelector('.paragraph1');
// const number2 = document.querySelector('.paragraph2');

// function toSquare(a) {
//   let square = parseInt(a.value) ** 2;
//   return square;
// }

// function reset() {
//   number1.value = 2;
//   number2.value = 3;
// }

// function showResOne() {
//   number1.value = toSquare(number1);
// }

// function showResTwo() {
//   number2.value = toSquare(number2);
// }

// function toNull() {
//   reset();
// }

// html:
// {
//   /* <body>
//     <p class="paragraph1" onclick="showResOne()" style="width: 100px; height: 20px; border: solid 0.5px; display: flex; justify-content: center; cursor: pointer;">5</p>
//     <p class="paragraph2" onclick="showResTwo()" style="width: 100px; height: 20px; border: solid 0.5px; display: flex; justify-content: center; cursor: pointer;">12</p>
//     <button onclick="toNull()">начальные значения</button>
//     <script src="tasks.js"></script>
// </body> */
// }

// 5.1.5 Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.
// html:
// <body>
//     <input type="button" class="paragraph1" onclick="showResOne()" style="width: 104px; height: 20px; border: solid 0.5px; margin-bottom: 10px; font-size: small; display: flex; justify-content: center; cursor: pointer;" value="2">
//     <input type="text" class="paragraph2" onblur="showResTwo()" style="width: 100px; height: 20px; border: solid 0.5px; text-align: center; cursor: pointer;" value="3">
//     <button onclick="toNull()">начальные значения</button>
//     <script src="tasks.js"></script>
// </body>

// 5.2.1 Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.
// const variant = document.getElementsByClassName("paragraph");

// function summ100() {
//   let summ100 = 0;
//   for (let i = 1; i <= 5; i++) {
//     summ100 += i;
//   }
//   return summ100;
// }

// function toResult() {
//   let res = summ100();
//   document.querySelector(".paragraph").innerHTML = res;
// }
// <body style="text-align: center">
//     <p
//       class="paragraph"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         cursor: pointer;
//       "
//     ></p>
//     <button onclick="toResult()">result</button>
//     <script src="tasks.js"></script>
//   </body>

// 5.2.2 Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел.

// const inp1 = document.getElementsByClassName('input1')[0];
// const inp2 = document.getElementsByClassName('input2')[0];

// function summInputs(a, b) {
//     let summInput = parseInt(a.value) + parseInt(b.value);
//     return summInput;
// };

// function showSumm() {
//     let showSummer = summInputs(inp1, inp2)
//     document.querySelector('.paragraph').innerHTML = showSummer;
// };

// html:
// <body style="text-align: center">
//     <input
//       class="input1"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         cursor: pointer;
//       "
//       type="text"
//     />
//     <input
//       class="input2"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         cursor: pointer;
//       "
//       type="text"
//     />

//     <p
//       class="paragraph"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         margin-top: 10px;
//         cursor: pointer;
//       "
//     ></p>

//     <button onclick="showSumm()">result</button>
//     <script src="tasks.js"></script>
//   </body>

// 5.2.3 Дана строка с предложением, кнопка и див. По нажатию на кнопку найдите количество слов и выведите это значение в див.
// const inp = document.getElementsByClassName('input1')[0];

// function sentanse(a) {
//     let zeros = a.value.split(' ').length;
//     return zeros;
// };

// function showWords() {
//     let result = sentanse(inp)
//     document.querySelector('.paragraph').innerHTML = result;
// };

// function showZero() {
//     const zero = '';
//     document.querySelector('.paragraph').innerHTML = zero;
// };

// <body style="text-align: center">
// <input
//   class="input1"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     cursor: pointer;
//   "
//   type="text"
// />

// <p
//   class="paragraph"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     margin-top: 10px;
//     cursor: pointer;
//   "
// ></p>
// <button onclick="showWords()">result</button>
// <button onclick="showZero()">zero</button>
// <script src="tasks.js"></script>
// </body>

// 5.2.4 Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке.
// const sent = document.getElementsByClassName('input1')[0];

// function howSymbols(a) {
//     let howSymbols = a.value.length;
//     return howSymbols;
// };

// function showCount() {
//     let showCount = howSymbols(sent);
//     document.querySelector('.paragraph').innerHTML = showCount;
// };

// <body style="text-align: center">
// <input
//   class="input1"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     cursor: pointer;
//   "
//   type="text"
// />

// <p
//   class="paragraph"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     margin-top: 10px;
//     cursor: pointer;
//   "
// ></p>
// <button onclick="showCount()">result</button>
// <script src="tasks.js"></script>
// </body>

// 5.3.1 Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.
// const inp = document.getElementsByClassName("input1")[0];

// function factorial(a) {
//   let result = 1;
//   for (let i = 2; i <= a; i++) {
//     result *= i;
//   }
//   return result;
// }

// function showRes() {
//   let showRes = factorial(parseInt(inp.value));
//   document.querySelector(".paragraph").innerHTML = showRes;
// }

// <body style="text-align: center">
// <input
//   class="input1"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     cursor: pointer;
//   "
//   type="text"
// />

// <p
//   class="paragraph"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     margin-top: 10px;
//     cursor: pointer;
//   "
// ></p>
// <button onclick="showRes()">result</button>
// <script src="tasks.js"></script>
// </body>

// 5.3.2 Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.
// const inp1 = document.getElementsByClassName('input1')[0];
// const inp2 = document.getElementsByClassName('input2')[0];

// function whatMore(a, b) {
//     if (parseInt(a.value) > parseInt(b.value)) {
//         return a.value;
//     } else return b.value;
// };

// function showMore() {
//     let more = whatMore(inp1, inp2);
//     document.querySelector('.paragraph').innerHTML = more;
// };

// <body style="text-align: center">
// <input
//   class="input1"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     cursor: pointer;
//   "
//   type="text"
// />

// <input
//   class="input2"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     cursor: pointer;
//   "
//   type="text"
// />

// <p
//   class="paragraph"
//   style="
//     width: 100px;
//     height: 20px;
//     border: solid 0.5px;
//     margin-bottom: 10px;
//     text-align: center;
//     margin: 0 auto;
//     margin-top: 10px;
//     cursor: pointer;
//   "
// ></p>
// <button onclick="showMore()">result</button>
// <script src="tasks.js"></script>
// </body>

// 5.3.3 Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.
// const inp = document.getElementsByClassName('input')[0];

// function parsNumber(a) {
//     let arrNum = (a.value.split(''))
//     let newArr = arrNum.reduce((acc, index) => {
//         return acc + parseInt(index);
//     }, 0);
//     return newArr;
// };

// function showRes() {
//     let res = parsNumber(inp);
//     document.querySelector('.paragraph').innerHTML = res;
// };

// <body style="text-align: center">
//     <input
//       class="input"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         cursor: pointer;
//       "
//       type="text"
//     />

//     <p
//       class="paragraph"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         margin-top: 10px;
//         cursor: pointer;
//       "
//     ></p>
//     <button onclick="showRes()">result</button>
//     <script src="tasks.js"></script>
//   </body>

// 5.3.4 Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.
// const inp = document.getElementsByClassName('input')[0];

// function reverse(a) {
//     let revWord = a.value.split('').reverse().join('');
//     return revWord;
// };

// function showReverse() {
//     let result = reverse(inp);
//     document.querySelector('.paragraph').innerHTML = result;
// }

// <body style="text-align: center">
//     <input
//       class="input"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         cursor: pointer;
//       "
//       type="text"
//     />

//     <p
//       class="paragraph"
//       style="
//         width: 100px;
//         height: 20px;
//         border: solid 0.5px;
//         margin-bottom: 10px;
//         text-align: center;
//         margin: 0 auto;
//         margin-top: 10px;
//         cursor: pointer;
//       "
//     ></p>
//     <button onclick="showReverse()">result</button>
//     <script src="tasks.js"></script>
//   </body>

// 5.3.5 Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку от 1 до 10 каждый абзац по 5 чисел.
// function numbers() {
//     let num = [];
//     for (let i = 0; i <= 10; i++) {
//         num.push(i);
//     };
//     return num.join('');
// };

// function showResult() {
//     let res = numbers();
//     document.querySelector('.paragraph1').innerHTML = res.slice(0, 5);
//     document.querySelector('.paragraph2').innerHTML = res.slice(5, 10)
// };

// 5.3.6 Дан инпут, абзац и кнопка. В инпут вводится число. По клику на кнопку выведите в абзац факториал этого числа.
// const num = document.getElementsByClassName('input')[0];

// function toFactorial(a) {
//     let factorial = 2;
//     for (let i = 3; i <= parseInt(a.value); i++) {
//         factorial *= i;
//     };
//     return factorial;
// };

// function showResult() {
//     let res = toFactorial(num);
//     document.querySelector('.paragraph').innerHTML = res;
// };

// 5.4.3 Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.
// function showResult() {
//     let res = [];
//     for (let i = 1; i < 10; i++) {
//         res.push(i);
//     };
//     return res.join(',');
// };

// function showText() {
//     let showT = showResult();
//     document.querySelector('.paragraph1').innerHTML = showT;
// };

// 5.4.4 Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.
// let date = new Date();

// function showResult() {
//     let thisYear = document.querySelector('.year').innerHTML = date.getFullYear();
//     let thisMonth = document.querySelector('.month').innerHTML = date.getMonth();
//     let thisDay = document.querySelector('.day').innerHTML = date.getDate();
//     return thisYear, thisMonth, thisDay;
// };

// 5.5.1 Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31.
// По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.
// const data = document.getElementsByTagName('input')[0];

// function parceDate() {
//     let arrDate = [];
//     let year = '';
//     let month = '';
//     let day = '';
//     arrDate.push(data.value.split('-'));
//     year = arrDate[0][0]
//     month = arrDate[0][1]
//     day = arrDate[0][2]
//     document.querySelector('.year').innerHTML = year;
//     document.querySelector('.month').innerHTML = month;
//     document.querySelector('.day').innerHTML = day;
//     return year, month, day;
// };

// 5.5.2 Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.
// 5.5.2 Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.
// const inputStart = document.querySelector('.inpstart');
// const inputEnd = document.getElementsByClassName('inpend')[0];

// function ceilNumbers(a, b) {
//     let arr = '';
//     for (let i = parseInt(a.value); i <= parseInt(b.value); i++) {
//         arr += i + ' ';
//     };
//     return arr;
// };

// function showRes() {
//     let showArr = ceilNumbers(inputStart, inputEnd);
//     document.querySelector('.res').innerHTML = showArr;
// }

// 5.5.3 Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.
// const word = document.querySelector('.inpstart');

// function lastElem(a) {
//     let last = a[a.length - 1];
//     return last;
// };

// function showRes() {
//     let res = lastElem(word.value);
//     document.querySelector('.res').innerHTML = res;
// };

// 5.5.4 Дан абзац, в котором записано число 1 и кнопка. По нажатию на кнопку увеличивайте число в абзаце на единицу.
// const number = document.querySelector('.res');

// function plusOne(a) {
//     a += 1;
//     return a;
// };

// function showRes() {
//     let show = plusOne(parseInt(number.innerHTML));
//     document.querySelector('.res').innerHTML = show;
// };

// 5.5.5 Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.
// const sentance = document.querySelector('.inpstart');

// function howWords(a) {
//     let arrSentance = a.split(' ');
//     return arrSentance.length;
// };

// function showResult() {
//     let show = howWords(sentance.value);
//     document.querySelector('.res').innerHTML = show;
// };

// 5.6.1 Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите,
// введен високосный год или нет и выведите информацию об этом в абзац.
// const inp = document.querySelector('.inpstart');

// function isVisocYear(a) {
//     let yearInfo = '';
//     if (parseInt(a.value) % 4 === 0 & parseInt(a.value) % 100 != 0) {
//         yearInfo = 'год високосный';
//     }
//     else yearInfo = 'это обычный год';
//     return yearInfo;
// };

// function showRes() {
//     let res = isVisocYear(inp);
//     document.querySelector('.res').innerHTML = res;
// };

// 5.6.2 Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.
// function isRandom() {
//     let rand = Math.random() * 100;
//     return Math.ceil(rand);
// };

// function showRes() {
//     let res = isRandom();
//     document.querySelector('.inpstart').value = res;
// };

// 5.6.3 Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.
// const data = document.getElementsByClassName('inpstart')[0];

// function toDay(a) {
//     const dayOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
//     let day = new Date(a.value);
//     return dayOfWeek[day.getDay()];
// };

// function showRes() {
//     let showDay = toDay(data);
//     document.querySelector('.res').innerHTML = showDay;
// };

// 5.6.4 Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.
// function upToTwo() {
//   let sizeDiv = document.querySelector(".info");
//   let computedStyle = getComputedStyle(sizeDiv);

//   let width = parseInt(computedStyle.width);
//   let height = parseInt(computedStyle.height);

//   width *= 2;
//   height *= 2;

//   sizeDiv.style.width = width + "px";
//   sizeDiv.style.height = height + "px";
// }

// 5.6.5 Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.
// let links = document.querySelectorAll('a');

// links.forEach(function(link) {
//   link.addEventListener('mouseover', function() {
//     let hrefValue = link.getAttribute('href');
//     alert(hrefValue);
//   });
// });

// Просто задачка - возведение числа n в степень m:
// function toUp(n, m) {
//   let res = 1;
//   while (m > 0) {
//     res *= n;
//     m -= 1;
//   };
//   return res;
// };
// console.log(toUp(3, 0));

//5.7.1 Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.
// const inputs = document.querySelectorAll(".input");

// function arrInput() {
//   let arr = Array.from(inputs);
//   let sum = arr.reduce((acc, el) => {
//     return acc + parseInt(el.value);
//   }, 0);
//   return sum;
// };

// function showRes() {
//     let res = arrInput();
//     document.querySelector('.inpstart').value = res;
// }

// 5.7.2 Даны инпуты с числами и кнопка. По нажатию на кнопку увеличьте все числа в инпутах на единицу.
// const inp = document.querySelectorAll('.input');

// function plusOne() {
//   inp.forEach(function(input) {
//     let plus = parseInt(input.value) + 1;
//     input.value = plus;
//   });
// }

// 5.7.3 Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую.
// const startNum = document.getElementsByClassName('input')[0];

// function devArr() {
//   let devider = [];
//   for (let i = 2; i < parseInt(startNum.value); i++) {
//     if (parseInt(startNum.value) % i === 0) {
//       devider.push(i);
//     };
//   };
//   return devider.join(',');
// };

// function showRes() {
//   let res = devArr();
//   document.querySelector('.paragraph').innerHTML = res;
// };

// 5.7.4 Дан абзац с текстом. Сделайте так, чтобы по нажатию на абзац его текст переворачивался.
// const sentance = document.querySelector('.paragraph');

// function reverseSentence() {
//     let text = sentance.textContent;
//     let reversedText = text.split('').reverse().join('');
//     document.querySelector('.paragraph').innerHTML = reversedText;
// };

// 5.7.5 В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр.
// function isIqual() {
//   const sixNumbers = document.querySelector(".input").value;
//   let firstNumb = [];
//   let secondNumb = [];
//   for (let i = 0; i < sixNumbers.length; i++) {
//     while (i <= 2 && firstNumb.length < 3) {
//       firstNumb.push(parseInt(sixNumbers[i]));
//       i++;
//     }
//     secondNumb.push(parseInt(sixNumbers[i]));
//   }
//   const sumFirst = firstNumb.reduce((a, b) => a + b, 0);
//   const sumSecond = secondNumb.reduce((a, b) => a + b, 0);
//   return sumFirst === sumSecond;
// }

// function showRes() {
//   let show = isIqual();
//   document.querySelector(".input").value = show;
// }

// 5.8.1 Дан инпут. В него вводятся числа. Сделайте так, чтобы при потере фокуса в инпуте появлялся квадрат введенного в него числа.
// const inp = document.querySelector('.input');

// function toSquare() {
//     let square = parseInt(inp.value) ** 2;
//     document.querySelector('.input').value = square;
// }

// 5.8.2 Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.
// const array = document.querySelector(".paragraph").innerText;

// function randNumber() {
//   let randArr = [];
//   randArr = array.split(" ").map((num) => parseInt(num));
//   let randomIndex = Math.floor(Math.random() * randArr.length);
//     return randArr[randomIndex];
// }

// function showRes() {
//   let res = randNumber();
//   document.querySelector(".input").value = res;
// }

// 5.8.3 Дан инпут и абзац. В инпут через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.
// const inp = document.querySelector('.input');

// function sumInp() {
//   let str = inp.value;
//   let arrInp = str.split(',').map((el) => parseInt(el));
//   let sumerInputs = arrInp.reduce((acc, el) => {
//     return acc + el;
//   }, 0);
//   return sumerInputs;
// };

// function showRes() {
//   let res = sumInp();
//   document.querySelector('.paragraph').innerHTML = res;
// };

// 5.8.4 Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в абзац.
// const inp1 = document.querySelector(".input1");
// const inp2 = document.querySelector(".input2");

// function uniqDeviders(a, b) {
//   let items = [];
//   for (let i = 2; i <= parseInt(a.value); i++) {
//     if (a.value % i === 0) {
//       for (let j = 2; j <= parseInt(b.value); j++) {
//         if (b.value % j === 0 && j === i) {
//           items.push(i);
//         }
//       }
//     }
//   }
//   return items.join(",");
// }

// function showRes() {
//   let res = uniqDeviders(inp1, inp2);
//   document.querySelector(".paragraph").innerHTML = res;
// }

// 5.8.5 Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.
// const inputs = document.querySelector('.input');

// function is13() {
//   let is13 = false;
//   let arrInputs = inputs.value.split(',');
//   arrInputs.forEach((el) => {
//     if (parseInt(el) === 13) {
//       is13 = true;
//     }
//   });
//   return is13;
// }

// function showRes() {
//   let res = is13();
//   document.querySelector('.paragraph').innerHTML = res;
// }

// 5.8.6 Дан инпут и кнопка. В него вводится число из шести цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет,
// то есть сумма первых трех цифр равна сумме вторых трех цифр.
// const inp = document.querySelector('.input');

// function isHappy() {
//   let arrInp1 = inp.value.split('').slice(0, 3);
//   let arrInp2 = inp.value.split('').slice(3, 6);
//   let sum1 = arrInp1.map(Number).reduce(((acc, el) => acc + el), 0);
//   let sum2 = arrInp2.map(Number).reduce(((acc, el) => acc + el), 0);
//   return sum1 - sum2 === 0 ? true : false;
// };

// function showRes() {
//   let res = isHappy();
//   document.querySelector('.paragraph').innerHTML = res;
// };

// 5.9.1 Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.
// const inputData = document.getElementsByClassName('paragraph')[0];

// function toDivider(a) {
//   let divider = a.innerText.split('').join(',');
//   return divider;
// };

// function showRes() {
//   let res = toDivider(inputData);
//   document.querySelector('.input').value = res;
// };

// 5.9.2  абзац с текстом. Сделайте так, чтобы по нажатию на абзац его текст красился в оранжевый цвет.
// function changeColor() {
//   document.querySelector('.paragraph').style.color = 'orange';
// }

// 5.9.3 Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
// const inp = document.querySelector(".input");

// function changeBorder() {
//   parseInt(inp.value) % 2 === 0
//     ? (document.querySelector(".input").style.borderColor = "red")
//     : (document.querySelector(".input").style.borderColor = "green");
// };

// 5.9.4 В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 31.12.2025.
// function changeFormat() {
//   const data = document.querySelector(".input").value;
//   let newFormat = data.split("-").reverse().join(".");
//   return newFormat;
// }

// function showRes() {
//   let show = changeFormat();
//   document.querySelector(".input").value = show;
// }

// 5.10.1 Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
// const inp = document.getElementsByClassName('input')[0];

// function whatsColor() {
//     return parseInt(inp.value) % 2 === 0 ? document.querySelector('.input').style.borderColor = 'green' : document.querySelector('.input').style.borderColor = 'red';
// };

// 5.10.2 Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число.
// let paragraph = document.querySelector('.parag').textContent.split(',');

// function isRandom() {
//   let newNum = Math.ceil(Math.random() * 10);
//   paragraph.push(newNum);
//   document.querySelector('.parag').textContent = paragraph.join(',');
// }

// Дан массив с названиями цвета. Дан абзац с текстом.
// Сделайте так, чтобы по нажатию на абзац его текст красился в случайный цвет из массива.

// const colors = ["yellow", "blue", "orange", "red", "green", "gray", "violet"];

// function changeColor() {
//   document.querySelector(".color").style.color =
//     colors[Math.floor(Math.random() * colors.length)];
// }

// 5.10.3 Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию
// на любой абзац его текст красился в случайный цвет из массива.

// function evenNumbers() {
//   let evenNumbers = [];
//   const arrNumbers = document
//     .querySelector(".paragraph")
//     .textContent.split(",");
//   for (let i = 0; i < arrNumbers.length; i++) {
//     if (parseInt(arrNumbers[i]) % 2 === 0) {
//       evenNumbers.push(arrNumbers[i]);
//     }
//   }
//   return evenNumbers.join(',');
// }

// function showRes() {
//   document.querySelector(".input").value = evenNumbers();
// }

// 5.10.5 Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.
// const data = '2023-12-31'
// const millisecondsPerDay = 24 * 60 * 60 * 1000;
// function howToNewYear(data) {
//   let diffDate = (new Date(data) - new Date()) / millisecondsPerDay;
//   return Math.floor(diffDate);
// };

// function showRes() {
//   const showRes = howToNewYear(data)
//   document.querySelector('.paragraph').innerHTML = showRes;
// }

// 5.10.6 Дана кнопка и ul. По клику на кнопку выведите список всех годов за десять лет назад и вперед.

// const lastYear = new Date().getFullYear();

// function listYears() {
//   let listYears = [];
//   for (let i = (lastYear - 10); i < (lastYear + 11); i++) {
//     listYears.push(i);
//   };
//   return listYears;
// };

// function showRes() {
//   const years = listYears();
//   const listContainer = document.getElementById("list-container");
//   listContainer.innerHTML = "";
//   years.forEach(year => {
//     const listItem = document.createElement("li");
//     listItem.textContent = year;
//     listContainer.appendChild(listItem);
//   });
// }

// 6.1.1 Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива.
// const arr = [217, 55, 82, -1, 1097, -3519];

// function showRes() {
//   const listContainer = document.getElementById("list-container");
//   listContainer.innerHTML = "";
//   arr.forEach(number => {
//     const listItem = document.createElement("li");
//     listItem.textContent = number;
//     listContainer.appendChild(listItem);
//   });
// }

// В этой простой задаче вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число

// highAndLow("1 2 3 4 5");           // return "5 1"
// highAndLow("1 2 -3 4 5");         // return "5 -3"
// highAndLow("1 9 3 4 -5");        // return "9 -5"

// const str = "1 9 3 4 -5"

// function highAndLow(str) {
//   let arrStr = str.split(' ');
//   let sortArr = arrStr.sort((a, b) => b - a);
//   return sortArr.splice(0, 1).join('') + ' ' + sortArr.splice(sortArr.length - 1).join('');
// };

// console.log(highAndLow(str));

// 6.1.2 Дана кнопка и пустой список ul. По клику на кнопку заполните список числами от 1 до 10.

// function getList() {
//   let arr = [];
//   for (let i = 1; i <= 10; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// function showRes(arr) {
// let result = getList();
//   for (let j = 0; j < arr.length; j++) {
//     let list = document.querySelector('#list-container');
//     let listItem = document.createElement('li');
//     listItem.textContent = arr[j]
//     list.appendChild(listItem);
//   };
// };

// ЗАДАЧА: Напишите функцию accum(s), которая принимает в качестве аргумента строку. Функция должна вернуть новую строку,
// в которой каждая буква из исходной строки повторяется в верхнем регистре, а затем в нижнем регистре столько раз,
// сколько она находится на своей позиции в исходной строке. Каждая такая пара букв должна быть разделена дефисом '-'
// const s = 'abcdef';
// output: 'A-Bb-Ccc-Dddd-Eeeee-Ffffff';

// function accum(s) {
//   let sArr = s.split('');
//   let newArr = [];
//   sArr.map((el, index) => {
//     newArr.push(
//       el
//         .repeat(index + 1)
//         .toUpperCase()
//         .slice(0, 1) + el.repeat(index + 1).slice(1)
//     );
//   });
//   return newArr.join('-')
// }

// console.log(accum(s));

// 6.1.3 Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с текстом '!'.

// const addButton = document.getElementsByClassName('button');
// const list = document.getElementById('list');

// function addSymbol() {
//   let newItem = document.createElement('li');
//   newItem.textContent = '!';
//   list.appendChild(newItem);
// }

// 6.1.4 Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с порядковым номером.
// const btn = document.getElementsByClassName('button');
// const list = document.querySelector('#list');
// let count = 1;

// function addNumber() {
//   let newItem = document.createElement('li');
//   newItem.textContent = count;
//   list.appendChild(newItem);
//   count++;
// };

// 6.1.5 Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите последний пункт списка.

// function deliteLast() {
//   const list = document.getElementById('list');
//   let lastItem = list.lastElementChild;
//   list.removeChild(lastItem);
// }

// 6.1.5 Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите случайный пункт списка.

// function deleteRandomPoint() {
//   const list = document.getElementById('list');
//   let randomPoint = Math.floor(Math.random() * list.childElementCount);
//   let listItem = list.children;
//   list.removeChild(listItem[randomPoint])
// }

// 6.2.1 По клику на кнопку создайте HTML таблицу с заданной шириной и высотой.

//                                    ****************************************
//                                                     codewars
//                                    ****************************************

// function likes(names) {
//   if (names.length == []) {
//     return 'no one likes this';
//   }
//   else if (names.length === 1) {
//     return names[0] + ' likes this';
//   }
//   else if (names.length === 2) {
//     return names[0] + ' and ' + names[1] + ' likes this';
//   }
//   else if (names.length === 3) {
//     return names[0] + ', ' + names[1] + ' and ' + names[2] + ' likes this';
//   }
//   else {
//     return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others' + ' like this';
//   }
// }

// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

//                                    ****************************************

// Дано число n. Необходимо найти и вывести в консоль сумму его цифр. Если сумма больше одной цифры, то итерация повторяется.

// function digitalRoot(n) {
//   const nArrow = (String(n).split(''));
//   let result = nArrow.reduce((acc, elem) => {
//       return acc + +elem;
//   }, 0);
//   if (String(result).length > 1) {
//       return digitalRoot(result)
//   } return result;
// }

// console.log(digitalRoot(731));

//                                    ****************************************

// Функция принимает число и возвращает число, состоящее из квадратов цифр этого числа. Например:
// вход 7581 => 4925641;

// function squareDigits(num) {
//   let numArray = String(num).split('');
//   const resultArray = numArray.map((digit) => digit * digit);
//   const result = Number(resultArray.join(''));
//   return result;
// }

// console.log(squareDigits(317));

//                                    ****************************************

// Вычислите сумму чисел в n-й строке этого треугольника:
// 1    1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// 31    33    35    37    39    41
// 43    45    47    49    51    53    55
// .............................

// strictEqual(rowSumOddNumbers(1), 1);
// strictEqual(rowSumOddNumbers(42), 74088);

// function rowSumOddNumbers(n) {
//   let strNum = 0;
//   let lastIndex = 0;
//   let rowSumNumbers = 0;
//   for (let i = 0; i < n; i++) {
//     strNum += i;
//     lastIndex = ((strNum + (n - 1)) * 2 + 1);
//   }
//   let firstIndex = strNum * 2 + 1;
//   for (let j = firstIndex; j <= lastIndex; j += 2) {
//     rowSumNumbers += j;
//   }
//   return rowSumNumbers;
// }

// console.log(rowSumOddNumbers(42));

//                                    ****************************************

// Дан массив, состоящий минимум из трёх элементов. Один элемент обязательно отличается от других, которые абсолютно равны между собой.
// Вывести значение этого уникального элемента.

// function findUniq(arr) {
//   const map = arr.reduce((acc, el) => {
//     if (el in acc) acc[el]++;
//     else acc[el] = 1;
//     return acc;
//   }, {});
//     const minValue = Math.min(...Object.values(map));
//     const minKey = Object.keys(map).find(key => map[key] === minValue);
//     return +minKey;
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));

//                                    ****************************************

// Напишите функцию, принимающую строку и возвращающую также строку, но те слова, которые состоят из 5 и более букв, должны быть записаны
// в обратном порядке. Регистр букв сохраняется.

// function spinWords(string){
//   let reverseWords = string.split(' ');
//   let reverseSentanse = [];
//   for (let i = 0; i < reverseWords.length; i++) {
//     if (reverseWords[i].length >= 5) {
//       reverseSentanse.push(reverseWords[i].split('').reverse().join(''))
//     }
//     else {
//       reverseSentanse.push(reverseWords[i]);
//     }
//   }
//   return reverseSentanse.join(' ');
// }

// console.log(spinWords("You are almost to the last test"));

//                                    ****************************************

// Мяч находится на высоте h0 над поверхностью земли. Он падает вниз, отскакивает на высоту bounce = 0,66 от h0. Сколько раз он будет наблюдаться
// из точки, находящейся на уровне window = 1,5 метра над уровнем земли (учитывать и взлёт и падение)? Если значение bounce меньше 0 или больше
// либо равно 1, то result = -1. Значение window не должно превышать h0.

// function bouncingBall(h, bounce, window) {
//   let result = 1;
//   if (window >= h || bounce >= 1 || bounce <= 0) {
//     return -1;
//   } else {
//     let hNew = h * bounce;
//     if (hNew < window) {
//       return result;
//     } else {
//       result++;
//       return result + bouncingBall(hNew, bounce, window);
//     }
//   }
// }

// console.log(bouncingBall(30.0, 0.66, 1.5));

//                                    ****************************************

// На вход подаются 2 числа, где первое обязательно меньше второго. Создайте функцию, которая на выходе возвращает массив, состоящий из
// цифр (чисел) из диапазона этих двух заданных чисел, удовлетворяющих условию - первая цифра числа в первой степени плюс вторая цифра
// числа во второй степени и так далее дают само это число. Например:
// Входные данные: 100, 150. На выходе 135, так как 135 = (1 ** 1) + (3 ** 2) + (5 ** 3).
// Входные данные: 1, 5. На выходе [1, 2, 3, 4, 5], так как каждая из этих цифр в первой степени даёт саму себя.

// function sumDigPow(a, b) {
//   const digArray = [];
//   const resArray = [];
//   for (let i = a; i <= b; i++) {
//     digArray.push(i);
//   }
//   for (let j = 0; j < digArray.length; j++) {
//     const numString = digArray[j].toString();
//     let sum = 0;
//     for (let k = 0; k < numString.length; k++) {
//       const digit = parseInt(numString[k]);
//       sum += Math.pow(digit, k + 1);
//     }
//     if (sum === digArray[j]) {
//       resArray.push(digArray[j]);
//     }
//   }
//   return resArray;
// }

// console.log(sumDigPow(10, 1400));

//                                    ****************************************

// Даны в виде двух объектов ингредиенты для приготовления пирожных и имеющиеся ингредиенты. Написать функцию, которая возвращает
// количество пирожных, которые можно приготовить из имеющихся ингредиентов по точной рецептуре.

// recipe = { flour: 500, sugar: 200, eggs: 1 };
// available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

// function cakes(recipe, available) {
//   let equal = {};
//   for (let key in recipe) {
//     if (key in available) {
//       equal[key] = Math.floor(available[key] / recipe[key]);
//     } else if (!(key in available)) {
//       equal[key] = 0;
//     }
//   }
//   let values = Object.values(equal);
//   return (values.sort((a, b) => a - b))[0];
// }
// console.log(cakes(recipe, available));

//                                    ****************************************

// На вход подаётся строка, состоящая из букв латинского алфавита. i означает инкремент, d - декремент, s - возведение в квадрат
// символ o означает output - вывод полученного значения в консоль. Остальные символы не принимаются во внимание. Результат сохраняется после
// вывода в консоль. Например: iiids0 -> 1 + 1 + 1 - 1 ** 2 = 4 [4]. Второй пример: iiisxxxdoso -> 1 + 1 + 1 ** 2 - 1 = 8 ** 2 = 64 [8, 64]

// function parse(data) {
//   let arrowResult = [];
//   let middleResult = 0;
//   for (let j = 0; j < data.length; j++) {
//     if (data[j] === 'i') {
//       middleResult += 1;
//     } else if (data[j] === 'd') {
//       middleResult -= 1;
//     } else if (data[j] === 's') {
//       middleResult **= 2;
//     } else if (data[j] === 'o') {
//       arrowResult.push(middleResult);
//     }
//   }
//   return arrowResult;
// }

// console.log(parse('iiisxxxdoso'));

//                                    ****************************************

// Дана строка, которая может состоять из нескольких слов. Необходимо так переделать каждое слово, чтобы перая буква переместилась в конец
// и окончанием добалены буквы 'ay'. Примеры: 'Pig latin is cool'; // igPay atinlay siay oolcay
// 'Hello world !'; // elloHay orldway !

// function pigIt(str) {
//   let resString = [];
//   let arrowString = str.split(' ');
//   for (let i = 0; i < arrowString.length; i++) {
//     const regex = /[a-zA-Z]/;
//     if (arrowString[i].length >= 1 && regex.test(arrowString[i])) {
//       resString.push(arrowString[i].slice(1) + arrowString[i][0] + 'ay');
//     } else resString.push(arrowString[i]);
//   }
//   return resString.join(' ');
// }

// console.log(pigIt('This is my string a !'));

//                                    ****************************************

// Дан массив с целыми числами и число - цель. Необходимо в массиве найти два числа, которые в сумме дают целевое число.
// В консоль вывести массив индексов этих чисел. Например:
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

// function twoSum(numbers, target) {
//   const trueResult = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target && i != j && i < j) {
//         trueResult.push(i, j);
//       };
//     };
//   };
//   return trueResult;
// };

// console.log(twoSum([3, 2, 4], 6));

//                                    ****************************************

// На вход подаётся n - значное число. Путём перемножения его цифр нужнодобиться преобразования его в цифру. То есть:
// 97 -> 9 * 7 = 63 -> 6 * 3 = 18 -> 1 * 8 = 8. На выходе должны получить количество итераций с числом, пока оно не преобразовалось в
// однозначное (цифру). В данном примере это 3

// function persistence(num) {
//   const numArray = num.toString().split('');
//   let summer = 0;
//   let counter = 0;

//   if (numArray.length > 1) {
//     summer = numArray.reduce((acc, elem) => {
//       return +acc * +elem;
//     });
//     counter++;
//     return counter + persistence(summer);
//   } else {
//     return counter;
//   }
// }

// console.log(persistence(999));

//                                    ****************************************
// CW 4

// Напишите функцию, которая на вход принимает строку или текст (это могут быть либо отдельные буквы, либо целые предложения),
// а на выходе выводит массив с наиболее часто повторяющимися элементами. Если текст содержит менее трех уникальных слов,
// то должны быть возвращены либо первые 2, либо первые 1 слова, либо пустой массив, если текст не содержит слов.
// Совпадения не должны быть чувствительны к регистрам.
// Примеры:

// "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

// --> ["e", "ddd", "aa"]

// "wont won't won't"

// --> ["won't", "wont"]

// const text = "  //wont won't won't "

// function topThreeWords(text) {
//   const cleanedText = text.replace(/[^\w\s']/g, ''); 
//   const textToArray = cleanedText.toLowerCase().split(' ');
//   let resArray = textToArray.reduce((acc, el) => {
//     if (el !== '' && el !== "'") {
//       if (el in acc) acc[el]++;
//       else acc[el] = 1;
//     }
//     return acc;
//   }, {});
//   return Object.entries(resArray).sort((a, b) => b[1] - a[1]).slice(0, 3).map(item => item[0]);
// }

// console.log(topThreeWords(text));

//                                    ****************************************

// Напишите функцию, которая принимает на вход массив объектов пользователей и возвращает новый массив,
// содержащий только уникальные объекты пользователей, определяемые по их email адресам.
// Если у нескольких пользователей одинаковый email адрес, то в результирующем массиве должен сохраниться только один из них

// const arr = [
//   { id: 1, name: 'Alice', email: 'alice@example.com' },
//   { id: 2, name: 'Bob', email: 'bob@example.com' },
//   { id: 3, name: 'Alice', email: 'alice@example.com' },
//   { id: 4, name: 'David', email: 'david@example.com' },
// ];

// function unicArray(arr) {
//   let resArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!resArray.some(obj => obj.email === arr[i].email)) {
//       resArray.push(arr[i]);
//     }
//   }
//   return resArray;
// }
//
// Второй вариант решения задачи через reduce:

// function unicArray(arr) {
//   let resArray = [];
//   arr.reduce((acc, elem) => {
//     if (!(elem.email in acc)) {
//       acc[elem.email] = true;
//       resArray.push(elem);
//     }
//     return acc;
//   });
//   return resArray;
// }

// console.log(unicArray(arr));