const chess = {
    containerElement: document.getElementById('chess'),

    initDesc() {
        this.containerElement.innerHTML = '<tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td></tr>';
        this.cellElements = [];

        for (let row = 1; row < 9; row++) {
            const trElem = document.createElement('tr');
            const cell = document.createElement('td');
            cell.innerText = row;
            trElem.appendChild(cell);
            this.cellElements.push(cell);

            this.containerElement.appendChild(trElem);
            firstWhite = 0;
            if (row % 2 != 0) firstWhite = 1;

            for (let col = 1; col < 9; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);
                if (firstWhite) {
                    if (col % 2 == 0) cell.style.backgroundColor = 'black';
                }
                else {
                    if (col % 2 != 0) cell.style.backgroundColor = 'black';
                }
                this.cellElements.push(cell);
            }
        }
    }

}

chess.initDesc();