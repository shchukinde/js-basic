var product1 = {
    name: "cola",
    price: 50,
    count: 2,
    description: "Напиток сильногазированный Cola",
    photo_link: "./image1.jpg"
};

var product2 = {
    name: "fanta",
    price: 100,
    count: 1,
    description: "Напиток сильногазированный Fanta",
    photo_link: "./image2.jpg"
};

var product3 = {
    name: "sprite",
    price: 25,
    count: 4,
    description: "Напиток сильногазированный Sprite",
    photo_link: "./image3.jpg"
};

const basket = {
    containerElement: document.getElementById('basket'),
    items: [product1, product2, product3],
    basketPrice: function () {
        return this.items.reduce(function (sum, current) {
            return sum + (current.count * current.price);
        }, 0);
    },

    printBasket: function () {
        this.containerElement.innerHTML = '';
        if (this.items.length == 0) this.containerElement.innerHTML = '<div><b>Корзина пуста</b></div>';
        else {
            this.items.forEach(item => {
                itemHtml = `<div><b>Наименование</b>: ${item.name}</div>
                            <div><b>Цена</b>: ${item.price}</div>
                            <div><b>Количество</b>: ${item.count}</div>
                            <div><b>Описание</b>: ${item.description}</div><br>`;
                this.containerElement.insertAdjacentHTML('beforeend', itemHtml);
            });
            this.containerElement.insertAdjacentHTML('beforeend', `<div><b>Сумма товаров в корзине</b>: ${this.basketPrice()}</div><br>`);
        }
    }
};

basket.printBasket();