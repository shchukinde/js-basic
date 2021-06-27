const catalog = {
    containerCatalogElement: null,
    basket: null,
    products: [
        {
            id: 1,
            name: "cola",
            price: 50,
            description: "Напиток сильногазированный Cola",
            photo_link: "./image1.jpg"
        },

        {
            id: 2,
            name: "fanta",
            price: 100,
            description: "Напиток сильногазированный Fanta",
            photo_link: "./image2.jpg"
        },

        {
            id: 3,
            name: "sprite",
            price: 25,
            description: "Напиток сильногазированный Sprite",
            photo_link: "./image3.jpg"
        }
    ],

    init(catalogBlockId, basket) {
        this.containerCatalogElement = document.getElementById(catalogBlockId);
        this.basket = basket;
        this.printCatalog();
        this.addEventHandlers();
    },


    printCatalog: function () {
        this.containerCatalogElement.innerHTML = '<div><h3>Каталог товаров</h3></div><hr />';
        if (this.products.length == 0) this.containerCatalogElement.innerHTML = '<div><b>Каталог пуст</b></div>';
        else {
            this.products.forEach(product => {
                itemHtml = `<div><b>Номер продукта</b>: ${product.id}</div>
                            <div><b>Наименование</b>: ${product.name}</div>
                            <div><b>Цена</b>: ${product.price}</div>
                            <div><b>Описание</b>: ${product.description}</div>
                            <button data-id=${product.id}>Добавить в корзину</button><br>
                            <hr /> `;
                this.containerCatalogElement.insertAdjacentHTML('beforeend', itemHtml);
            });
        }
    },

    addEventHandlers() {
        this.containerCatalogElement.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket: function (event) {
        item = event.target.dataset.id;
        for (var i = 0; i < this.products.length; i++) {
            if (item == this.products[i].id) {
                currentProduct = this.products[i];
                if (this.basket.items.length == 0) { //если корзина пуста, то сразу добавляем туда товар
                    this.basket.items.push({
                        id: currentProduct.id,
                        name: currentProduct.name,
                        price: currentProduct.price,
                        description: currentProduct.description,
                        photo_link: currentProduct.photo_link,
                        count: 1
                    });
                    this.basket.printBasket();

                }
                else {
                    isInTheBasket = 0;
                    for (var j = 0; j < this.basket.items.length; j++) { // проверяем, есть ли такой товар уже в корзине
                        if (item == this.basket.items[j].id) { // если такой товар уже есть в корзине, то увеличиваем его количество на 1
                            isInTheBasket = 1;
                            this.basket.items[j].count++;
                            break;
                        }
                    }
                    if (!isInTheBasket) { // если такого товара ещё нет в корзине, то просто добавляем его
                        this.basket.items.push({
                            id: currentProduct.id,
                            name: currentProduct.name,
                            price: currentProduct.price,
                            description: currentProduct.description,
                            photo_link: currentProduct.photo_link,
                            count: 1
                        });
                    }
                }
                this.basket.printBasket();
                break;
            }
        }
    }
};

const basket = {
    containerElement: document.getElementById('basket'),
    items: [],
    basketPrice: function () {
        return this.items.reduce(function (sum, current) {
            return sum + (current.count * current.price);
        }, 0);
    },

    printBasket: function () {
        this.containerElement.innerHTML = '';
        if (this.items.length == 0) this.containerElement.innerHTML = '<div><b>Корзина пуста</b></div>';
        else {
            this.containerElement.insertAdjacentHTML('beforeend', `<div><b>Сумма товаров в корзине</b>: ${this.basketPrice()}</div><br>`);
            this.items.forEach(item => {
                itemHtml = `<div><b>Наименование</b>: ${item.name}</div>
                            <div><b>Цена</b>: ${item.price}</div>
                            <div><b>Количество</b>: ${item.count}</div>
                            <div><b>Описание</b>: ${item.description}</div><br>
                            <hr /> `;
                this.containerElement.insertAdjacentHTML('beforeend', itemHtml);
            });
        }
    },

    addToBasket: function (item) {
        for (var i = 0; i < this.products.length; i++) {
            if (item == this.products[i].id) {
                currentProduct = this.products[i];
                for (var j = 0; j < basket.items.length; j++) {
                    if (item == basket.items[j].id) {
                        basket.items[j].count++;
                        break;
                    }
                    basket.items.push({
                        id: currentProduct.id,
                        name: currentProduct.name,
                        price: currentProduct.price,
                        description: currentProduct.description,
                        photo_link: currentProduct.photo_link,
                        count: 1
                    });
                }
                basket.printBasket();
                break;
            }
            else alert("Такой товар в каталоге не найден");
        }
    }
};

catalog.init("catalog", basket);
basket.printBasket();