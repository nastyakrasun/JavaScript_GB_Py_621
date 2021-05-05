const $cart = document.querySelector(`#cart`);
const $listOfItems = document.querySelector(`#list-of-items`);
const $popup = document.querySelector(`#popup`);  // для всплывающего модального окна
const $closePopupBtn = document.querySelector(`#closePopupBtn`);  // для кнопки закрыть попап
// с уроков 3-4
const cart = [];  // массив с корзиной
const goods = [];  // массив с товарами (для витрины)
const images = ['img/bread_1.jpg', 'img/bread_2.jpg', 'img/bread_3.jpg'];
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
        const imagesHtml = item.images.map(function(img) {
            return `<img width="100" src="${img}"></img>`
        }).join(' & ');
        const html = `<div class="item"><h3>${item.name}</h3><p>${item.price}</p>${imagesHtml}   <button data-id="${i}">+</button>`;
        $listOfItems.insertAdjacentHTML('beforeend', html);
    });
};

// функция отриcовки картинок 
function drawImages(images) {
    // goods.forEach(function(item, i) {
        const htmlIMG = images.map(function(img) {
            return `<img id="slide-img" src="${img}"></img>`
        }).join(' ');
    // });

    const htmlSlider = `<div id="slider">
        <button id="previous"> пред </button>
        <div id="slide">${htmlIMG}</div>
        <button id="next"> след </button>
    </div>`;

    $popup.insertAdjacentHTML('beforeend', htmlSlider);

    initSlider($popup.querySelector('#slider'));
};

function initSlider($slider) {
    let currentSlide = 0;
    const images = $slider.querySelectorAll('img');

    function nextSlide() {
        images[currentSlide].style.display = 'none';
        currentSlide = (currentSlide === images.length - 1) ? 0 : currentSlide + 1;
        images[currentSlide].style.display = 'block';
    };

    function prevSlide() {
        images[currentSlide].style.display = 'none';
        currentSlide = (currentSlide === 0) ? images.length - 1 : currentSlide - 1;
        images[currentSlide].style.display = 'block';
    };

    $slider.querySelector('#previous').addEventListener('click', prevSlide);
    $slider.querySelector('#next').addEventListener('click', nextSlide);

    images[currentSlide].style.display = 'block';
}

//1) назовём функцию для открытия кнопки попапа (по клику на изображение)
function openPopup(event) {
    if (event.target.tagName === 'IMG'){
        $popup.style.display = 'block';
        //$popup.insertAdjacentHTML('beforeend', `<img src="${event.target.getAttribute('src')}">`);
    }
}
// 2) навесим событие нажатия на изображение
$listOfItems.addEventListener('click', openPopup);

// 1) назовём функцию для закрытия кнопки попапа (по х и по Escape)
function closePopup(event) {
    if (event.type === 'click' || event.key === 'Escape'){
        $popup.style.display = 'none';
    }
}
// 2) навесим события нажатия на х и Escape
$closePopupBtn.addEventListener('click', closePopup);
document.addEventListener('keydown',closePopup);

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
drawImages(images);

// // смотрим, куда кликаем
// function clickHandler(event) {
//     console.log(this, event.target);
// };
// document.addEventListener('click', clickHandler);
