function countBasketPrice(arr) {
    return arr.reduce(function (sum, current) {
        return sum + (current[1] * current[2]);
    }, 0);
}

let bascket = [["cola", 50, 2], ["pepsi", 50, 1], ["fanta", 25, 4], ["mirinda", 100, 3]];

alert(`Задание 2 \n Cумма корзины: ${countBasketPrice(bascket)}`);