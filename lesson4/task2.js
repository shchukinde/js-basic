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

var basket = {
    items: [product1, product2, product3],
    basketPrice: function () {
        return this.items.reduce(function (sum, current) {
            return sum + (current.count * current.price);
        }, 0);
    }
};

alert(`Задание 2\nПродукты в корзине:
${basket.items[0].name}, цена = ${basket.items[0].price}, количество = ${basket.items[0].count}
${basket.items[1].name}, цена = ${basket.items[1].price}, количество = ${basket.items[1].count}
${basket.items[2].name}, цена = ${basket.items[2].price}, количество = ${basket.items[2].count}
Стоимость товаров в корзине равна ${basket.basketPrice()}`);