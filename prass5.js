function fillBoard() {
    let board = document.querySelector('.board');
    let square;  
    let letters = 'HGFEDCBA';
    let colour = true;  // булевое значение для изменения цвета

    for (let i = 0; i < 10; i++) {  // доска 8х8 + поля для букв и цифр
        for (let j = 0; j < 10; j++) {
            if (j == 0) colour = !colour;  // в начале новой строки меняем цвет

            square = document.createElement('div');  // создаём новый квадрат

            if (colour) square.className = 'square white';  // закрашиваем в нужный цвет
            else square.className = 'square black';
            board.appendChild(square);
            colour = !colour;  // меняем цвет у следующего квадрата в строке
// расставляем буквы и цифры "по полям"
            if (i === 0 || i === 9) {
                square.textContent = letters.charAt(j-1);
                square.className = 'square green';
                continue;
            }
            if (j === 0 || j === 9) {
                square.textContent = 9-i;
                square.className = 'square green';
                continue;
            }
        }
    }
}

fillBoard();
