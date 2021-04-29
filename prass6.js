const $cart = document.querySelector(`#cart`);
const $listOfItems = document.querySelector(`#list-of-items`);
const $popup = document.querySelector(`#popup`);  // для всплывающего модального окна
// с уроков 3-4
const cart = [];  // массив с корзиной
const goods = [];  // массив с товарами (для витрины)
// функция-конструктор для корзины
function inCart(name, price, quantity=1) {
    this.name = name;        
    this.price = price;    
    this.quantity = quantity;
};
// функция-конструктор для позиции товара
function Item(name, price, images) {
    this.name = name;        
    this.price = price;
    this.images = images.split(',');  // к кажд товару передавать разные картинки
};
// прикладные функции
// функция расчёта общей стоимости корзины
function getPrice(array) {
    return array.reduce(function(acc, item) {
        return acc + (item.price * item.quantity);
    }, 0);
};
// функция получения "штук" товаров в корзине
function getQuantity(array) {
    return array.reduce(function(acc, item) {
        return acc + item.quantity;
    }, 0);
};
// с урока 5
// функция отрисовки корзины
function drawCart() {
    $cart.textContent = '';  // удаляем содержимое корзины перед началом работы
    const product = document.createElement(`product`);

    if (cart.length !== 0) {
        product.textContent = `В корзине ${getQuantity(cart)} товаров на сумму ${getPrice(cart)} рублей`;
    }
    else {
        product.textContent = `Корзина пуста`;
    };

    $cart.appendChild(product);
    // создать кнопку покупки - не знаю. данные о покупке надо передавать в отдельный массив? это же прибыль) создала "очистить корзину"
    const transaction = `<div id="cart"><p></p><button id="cart">очистить корзину</button>   <button class="cart">купить</button>`;
    $cart.insertAdjacentHTML('beforeend', transaction);   
};
// добавление события "очистить корзину" (как различают кнопки в одном блоке? кнопки "очистить корзину" и "купить" должны работать по-разному)
$cart.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        cart.length = 0;
        drawCart();
    };
});

// функция отриcовки карточки товара
function drawGoods() {
    goods.forEach(function(item, i) {
        const imagesHtml = item.images.map(function(src) {
            return `<img width = "50" src = "${src}"></img>`
        }).join('');
        console.log(imagesHtml);
        const html = `<div class="item"><h3>${item.name}</h3><p>${item.price}</p>${imagesHtml}   <button data-id="${i}">+</button>`;
        $listOfItems.insertAdjacentHTML('beforeend', html);
    });
};
// добавление события 'keydown'
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        $popup.style.display = 'none';
    };
});
// спойлер события при нажатии на изображение 
$listOfItems.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        $popup.textcontent = '';
        $popup.style.display = 'block';
        $popup.insertAdjacentHTML('beforeend', `<img src = "${event.target.getAttribute('src')}">`);
    };
});
// добавление события над списком товаров при нажатии на кнопку "+" (добавление товара в корзину)
$listOfItems.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const id = Number(event.target.getAttribute('data-id'));
        const item = goods[id];
        const uniqueId = cart.findIndex(function(item) {
            return item.name == item.name;
        });

        cart.push(new inCart(item.name, item.price));  // можно без if-else условий?
        // console.log(uniqueId);
        // console.log(cart);
        drawCart();
    };
});

goods.push(new Item('Bread', 20, './img/bread_1.jpg, ./img/bread_2.jpg, ./img/bread_3.jpg'));
goods.push(new Item('Milk', 40, './img/milk_1.jpg, ./img/milk_2.jpg, ./img/milk_3.jpg'));
goods.push(new Item('Eggs', 60, './img/eggs_1.jpg, ./img/eggs_2.jpg, ./img/eggs_3.jpg'));

console.log(goods);

drawGoods();
drawCart();

// // смотрим, куда кликаем
// function clickHandler(event) {
//     console.log(this, event.target);
// };
// document.addEventListener('click', clickHandler);
