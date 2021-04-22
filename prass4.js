console.log('задание 1');
// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
// Решение:
console.log('1) через создание класса:');
class NumberToObject {
    // не знаю, куда поставить условие, чтобы работало 
    // if(number > 999) {
    //     console.log('число превышает 999');
    //     return {};
    // }
    // else {
        constructor(number) {
            this.number = number;
            this.units = number % 10;
            this.hundreds = Math.trunc(number / 100);
            this.tens = Math.trunc(number / 10) - this.hundreds * 10; 
        }  
    // }
    getStrDiv() {
            return `{единицы: ${this.units}; десятки: ${this.tens}; сотни: ${this.hundreds}}.`;
        }
}

console.log(new NumberToObject(745).getStrDiv()); // заданный результат не более чем с трёхзначными
console.log(new NumberToObject(74).getStrDiv());
console.log(new NumberToObject(7454545).getStrDiv());

// как перевести в класс (и можно ли) - не знаю. конструктор не понимает выражение regexp = /.{1}/g;
// let x = 5854659;  // вводим число
// let regexp = /.{1}/g;  // регулярное выражение, с которым будем сравнивать число, длина строки 1, g - число 
// let result = x.toString().match(regexp);
// if (result.length > 3) {
//     result = result.slice(result.length - 3, result.length);
// } 
// console.log(result);

console.log('2) через функцию:');
function numberToObject(number) {
    if (number > 999) {
            console.log('число превышает 999');
            return {};
        }
    else {
        let regexp = /.{1}/g;  // регулярное выражение, с которым будем сравнивать число, длина строки 1, g - число 
        let result = number.toString().match(regexp); 
        let units = result[result.length - 1];
        let tens = result[result.length - 2];
        let hundreds = result[result.length - 3];
        return `{единицы: ${units}; десятки: ${tens}; сотни: ${hundreds}}.`;
    }
}

console.log(numberToObject(541));
console.log(numberToObject(541465078));
console.log(numberToObject(54));
console.log(numberToObject(100));

console.log('задание 2');
// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// ответ: элементом массива может быть любой тип данных. если у нас массив объектов, в каждом объекте прописываем нужную для работы с корзиной информацию (1 объект - описание 1 товара) 
// Реализуйте такие объекты.
// ответ: типа сделано в пз 3. (это так же и вопрос, потому что я не уверена, что правильно делаю пз)
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
// ответ: думаю, что не понимаю, что нужно сделать. => дичь
// Решение:
class BasketItem {
    constructor(name, price, number, discount) {
        this.name = name; 
        this.price = price;
        this.number = number;
        this.discount = discount; // discount на всякий случай добавила, в расчётах не использовала
    }
    // внутри класса после функции-конструктора прописываем любое количество методов (все они попадут в прототип)
    countPriceOfItem() {
        this.priceOfItem = this.price * this.number;
        return `позиция: ${this.name}, к оплате: ${this.priceOfItem}`;
    }
    // countBasketTotal() {
    //     // не могу додуматься, как загнать данные всех this.priceOfItem в массив => посчитать сумму эл-тов массива (это вообще то?). 
    //     // или через наследование от класса-предка Basket (только с вебинара)
    // }
}
// создала новые объекты в корзине
console.log(new BasketItem('кроссовки', 3000, 2).countPriceOfItem());
console.log(new BasketItem('колонка', 7000, 1).countPriceOfItem());
console.log(new BasketItem('xbox', 4000, 2).countPriceOfItem());
console.log(new BasketItem('фитбол', 1000, 1).countPriceOfItem());
console.log(new BasketItem('шейкер', 500, 1).countPriceOfItem());
// считаю сумму к оплате по каждому объекту, общую сумму к оплате как посчитать - ???

// пробовала делать через класс-предок для BasketItem, но не могу загнать все суммы к оплате по товарам в 1 чек (сумма элементов массива в голове, как получить этот массив не знаю)
// знания жёстко подводят, но попытка была.
// class Basket {
//     constructor(price, number) { 
//         this.priceOfItem = price * number;
//     }
//     countBasketTotal() {
//         this.basketTotal += this.priceOfItem; // бред
//         return this.basketTotal;
//     }
// }
// class BasketItem extends Basket {
//     constructor(price, number, name='неважно', discount=0) {
//         super(price, number); // так вообще можно?
//         this.name = name;  
// }
//     countPriceOfItem() {
//         //this.priceOfItem = this.price * this.number;
//         return `позиция: ${this.name}, к оплате: ${this.priceOfItem}`;
//     }
// }

// console.log(new BasketItem(3000, 2).countPriceOfItem());  // считает)
// console.log(new Basket(7000, 1).countBasketTotal());  // NaN не считает(
// НУЖЕН РАЗБОР ДЗ
