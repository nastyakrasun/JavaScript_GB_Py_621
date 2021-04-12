//№1 в браузере
//var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
//Почему код даёт именно такие результаты?

//№2 в браузере
// var a = 2;
// var x = 1 + (a *= 2);
// alert(x);

//№3
// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
a = +prompt('введите a:');
b = +prompt('введите b:');
var result;
if (a >= 0 && b >= 0) {
    result = a - b;
}
else if (a < 0 && b < 0) {
    result = a * b;
}
else {
    result = a + b;
}
alert(result);

//№4
// Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.
a = +prompt('введите число от 0 до 15:');
resultFor = [];
// через цикл for (понятнее и знала)
for (let i = a; i <= 15; i+=1) {
    resultFor[resultFor.length] = i; 
}
alert(resultFor);

// через switch (не знала о таком вообще) 
result = [];
switch (a) {
    case 0:
        result[result.length] = 0;
    case 1:
        result[result.length] = 1;
    case 2:
        result[result.length] = 2;
    case 3:
        result[result.length] = 3;
    case 4:
        result[result.length] = 4;
    case 5:
        result[result.length] = 5;
    case 6:
        result[result.length] = 6;
    case 7:
        result[result.length] = 7;
    case 8:
        result[result.length] = 8;
    case 9:
        result[result.length] = 9;
    case 10:
        result[result.length] = 10;
    case 11:
        result[result.length] = 11;
    case 12:
        result[result.length] = 12;
    case 13:
        result[result.length] = 13;
    case 14:
        result[result.length] = 14;
    case 15:
        result[result.length] = 15;
        break;
}
alert(result);

// №5
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return. 
a = +prompt('введите a:');
b = +prompt('введите b:');
function summ(a, b) {
    return a + b;
}
function diff(a, b) {
    return a - b;
}
function prod(a, b) {
    return a * b;
}
function quot(a, b) {
    if (b != 0) {
        return a / b;
    }
    else {
        return 'деление на ноль'
    }
}
alert(summ(a, b));
alert(diff(a, b));
alert(prod(a, b));
alert(quot(a, b));

// №6
//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций 
//(использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'summ':
            return summ(arg1, arg2);
            break;
        case 'diff':
            return diff(arg1, arg2);
            break;
        case 'prod':
            return prod(arg1, arg2);
            break;
        case 'quot':
            return quot(arg1, arg2);
            break;
            }
}

// №7
//*Сравнить null и 0. Попробуйте объяснить результат. 
const resSumm = mathOperation(5, 10, 'summ');
const resDiff = mathOperation(5, 10, 'diff');
alert(resSumm);
alert(resDiff);
alert(mathOperation(5, 10, 'prod'));
alert(mathOperation(5, 10, 'quot'));

alert(null >= 0);  // false Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение null >= 0 истинно, 
alert(null > 0);  // false а null > 0 ложно.
alert(null == 0); // false  для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.
alert(null === 0); // false строгое равенство, строго null и 0 не равны
alert(null != 0); // true строгое неравенство

// №8
//С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    else {
        return val * power(val, pow - 1);
    }
}

alert(power(5, 6));
