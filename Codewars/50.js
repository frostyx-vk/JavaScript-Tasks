// таблица умножения в столбик

// Создаем
let arr = Array(10);
for (let i = 1; i < 10; i++) {
  arr[i] = [...Array(10)].map((_, j) => i * j);
}

// Делаем таблицу текстом
let s = '';
for (let i = 1; i < 10; i++) {
  s += arr[i].slice(1).join(' ') + '\n';
}

console.log(s);         // Вся таблица
console.log(arr[5][5]); // 25