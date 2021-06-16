function split_number(num) {
    if (num > 999) {
        console.log("Вы ввели число больше 999. Это недопустимое значение");
        return {};
    }
    else {
        result = {
            one: num % 10,
            ten: Math.floor(num % 100 / 10),
            hundred: Math.floor(num / 100)
        };
        return result;
    }
}

let number = 536
a = split_number(number);

alert(`Задание 1\n Разбиваем число number = ${number} split_number(num) \n Сотни = ${a.hundred}, Десятки = ${a.ten}, Единицы = ${a.one}`);
