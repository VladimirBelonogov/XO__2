
// Объявляем игроков
let players = {
	playerX: 'crest',
	playerO: 'nulls',
}

// Узнать текущего игрока
let currentPlayer = players.playerX;

// Информация об актуальном состоянии игры:
// Наличии Х и О в ячейках
// 0 - ячейка пуста
// 1 - в ячейке находится Х
// 2 - в ячейке находится О
resultGame = [0,0,0,0,0,0,0,0];

// Узнать статус игры
let statusGame = {
    winX: false,
    winO: false,
    drow: false,
}

// Коллекция которая содержит все наши ячейки
const cells = document.querySelectorAll('.game__item');

// Функция которая меняет игрока
function switchplayers() {
	if (currentPlayer ===  players.playerX){
		currentPlayer = players.playerO
	} else if (currentPlayer === players.playerO){
		currentPlayer = players.playerX
	}
}

// Объект который содержит кнопку, по которой начинается игра
const btnWatchStatusgame = document.querySelector('.game__button');

// Очищаем массив с результатом, дабы избежать ошибок
// А также для начала каждый раз новой игры
function clearResulPreviousGame (){
    // Очищаем массив с результатом
    resultGame = [0,0,0,0,0,0,0,0];
    // Очищаем статус игры
    statusGame.winX = false;
    statusGame.winO = false;
    statusGame.drow = false;
    // Для того чтобы игра с крестиков начиналась
    currentPlayer = players.playerX;
        // Отчищаем все ячейки от Х и О.
    // Проверяем такие элементы вообще существуют
    // Для того чтобы дальнейший код не вызывал ошибкок
    // Просто хорошая практика
    if(cells.length){
        // Удаляем классы со всех ячеек в которых есть  Х или О
        cells.forEach(cell => {
            // Делаем проверку, если ячейка заполнена Х или О
            // Тогда при клике удаляем эти элменты
            if (cell.closest('.crest')){
            // Если есть Х в ячейке, удаляем его
            cell.classList.remove ('crest');
            } else if (cell.closest('.nulls')){
                // Если есть O в ячейке, удаляем его
                    cell.classList.remove ('nulls');
            };
        });
    }
}

// Информация об актуальном состоянии игры:
// Если в ячейке Х или О 
// 0 - ячейка пуста
// 1 - в ячейке находится Х
// 2 - в ячейке находится О
function addDateResultGame () {
    // Внести данные об изменении в игре в массив
    if(cells.length){
    cells.forEach(cell => {
        cell.addEventListener('click',function (e) {
            if ( cell.closest('.crest')) {
        resultGame[cell.dataset.cell] = 1;
            } else if ( cell.closest('.nulls')) {
        resultGame[cell.dataset.cell] = 2;
                }
            })
        })
    }
}

// Добавить Х или О 
function addCellssuccessively () {
    cells.forEach(cell => {
        cell.addEventListener('click',function (e) {
        // Делаем проверку, если ячейка не заполнена Х или О
        // Тогда при клике заполняем её
            if ( !(cell.closest('.crest')) && !(cell.closest('.nulls') )){
        // Добавляем класс, ячейке, внутри которой
        // Рисует Х или О
        // Понимает Х или О программа исходя из текущего игрока
            cell.classList.add (currentPlayer);
            // Затем необходимо сменить игрока
            switchplayers();
            }}
        )
    })
    // if ((statusGame.winX === true) || (statusGame.winO === true) 
    // || (statusGame.drow === true)){
    //     cells.forEach(cell => {
    //         cell.removeEventListener('click',function (e) {
    //         // Делаем проверку, если ячейка не заполнена Х или О
    //         // Тогда при клике заполняем её
    //             if ( !(cell.closest('.crest')) && !(cell.closest('.nulls') )){
    //         // Добавляем класс, ячейке, внутри которой
    //         // Рисует Х или О
    //         // Понимает Х или О программа исходя из текущего игрока
    //             cell.classList.add (currentPlayer);
    //             // Затем необходимо сменить игрока
    //             switchplayers();
    //             }}
    //         )
    //     })
    // }
}

// Проверка результата игры
function cheсkedResult(){
        cells.forEach(cell => {
            cell.addEventListener('click',function (e) {    
                // Проверка на победу Х
                if ((resultGame[0] === 1) && (resultGame[1] === 1) && (resultGame[2] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                } else if ((resultGame[3] === 1) && (resultGame[4] === 1) && (resultGame[5] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                } else if ((resultGame[6] === 1) && (resultGame[7] === 1) && (resultGame[8] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                } else if ((resultGame[0] === 1) && (resultGame[3] === 1) && (resultGame[6] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                } else if ((resultGame[1] === 1) && (resultGame[4] === 1) && (resultGame[7] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                } else if ((resultGame[2] === 1) && (resultGame[5] === 1) && (resultGame[8] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                } else if ((resultGame[0] === 1) && (resultGame[4] === 1) && (resultGame[8] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                } else if ((resultGame[2] === 1) && (resultGame[4] === 1) && (resultGame[6] === 1)) {
                    statusGame.winX = true,
                    gameEnd();
                }
                // Проверка на победу О
                else if ((resultGame[0] === 2) && (resultGame[1] === 2) && (resultGame[2] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } else if ((resultGame[3] === 2) && (resultGame[4] === 2) && (resultGame[5] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } else if ((resultGame[6] === 2) && (resultGame[7] === 2) && (resultGame[8] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } else if ((resultGame[0] === 2) && (resultGame[3] === 2) && (resultGame[6] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } else if ((resultGame[1] === 2) && (resultGame[4] === 2) && (resultGame[7] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } else if ((resultGame[2] === 2) && (resultGame[5] === 2) && (resultGame[8] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } else if ((resultGame[0] === 2) && (resultGame[4] === 2) && (resultGame[8] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } else if ((resultGame[2] === 2) && (resultGame[4] === 2) && (resultGame[6] === 2)) {
                    statusGame.winO = true,
                    gameEnd();
                } // Проверка на ничью
                else if ( (resultGame[0] > 0) && (resultGame[1] > 0) && (resultGame[2] > 0)
                && (resultGame[3] > 0) && (resultGame[4] > 0) && (resultGame[5] > 0)
                && (resultGame[6] > 0) && (resultGame[7] > 0) && (resultGame[8] > 0) ){
                    statusGame.drow = true,
                    gameEnd();
                }
            }
        )}
    )
}


// Отследить состояние кнопки,
// Вследствия нажатия на которую начинается игра.
btnWatchStatusgame.addEventListener('click', function startGame (event) {
    event.preventDefault();
    // Делаем небольшую подготовку к игре:
    clearResulPreviousGame ();
    initializationGame();
    }
);


function initializationGame()  {
    if ((statusGame.winX === false) && (statusGame.winO === false) 
    && (statusGame.drow === false)) {
            addCellssuccessively();
            addDateResultGame();
            cheсkedResult();
            console.log(statusGame.winX,statusGame.winO,statusGame.drow);
        }
        console.log(statusGame);
    }

// Заканчиваем игру игру
function gameEnd()  {
    if (statusGame.winX === true) {
        console.log('Выйграли Х');
    } else if(statusGame.winO === true) {
        console.log('Выйграли О');
    } else if(statusGame.drow === true) {
        console.log('Ничья');
    }
}
