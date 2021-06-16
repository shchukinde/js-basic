let simple_numbers = "";
let i = 1;
let maxNum = 100;
while (i <= maxNum) {
    let countRemDiv = 0;
    let j = 1;
    while (j <= maxNum) {
        if (i % j == 0) countRemDiv += 1;
        j += 1;
    }
    if (countRemDiv == 2) simple_numbers += i + " ";
    i += 1;
}

alert(`Задание 1 \n Простые числа до ${maxNum} : ${simple_numbers}`);