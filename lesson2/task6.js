function mathOperation(x, y, operation) {
    switch (operation) {
        case "sum":
            alert(`Задание 6\nx = ${x}, y = ${y}, operation = ${operation},  mathOperation(x,y,operation) = ${mySum(x, y)}`);
            break;
        case "diff":
            alert(`Задание 6\nx = ${x}, y = ${y}, operation = ${operation},  mathOperation(x,y,operation) = ${myDiff(x, y)}`);
            break;
        case "mult":
            alert(`Задание 6\nx = ${x}, y = ${y}, operation = ${operation},  mathOperation(x,y,operation) = ${myMult(x, y)}`);
            break;
        case "div":
            alert(`Задание 6\nx = ${x}, y = ${y}, operation = ${operation},  mathOperation(x,y,operation) = ${myDiv(x, y)}`);
            break;
        default:
            alert(`что-то пошло не так`);
    }
}

var operation = "sum"
mathOperation(x, y, operation)

operation = "diff"
mathOperation(x, y, operation)

operation = "mult"
mathOperation(x, y, operation)

operation = "div"
mathOperation(x, y, operation)
