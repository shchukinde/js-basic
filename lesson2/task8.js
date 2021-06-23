function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    }
    else return val;
}

alert(`Задание 8\nx = ${x}, y = ${y},  power(x, y) = ${power(x, y)}`);