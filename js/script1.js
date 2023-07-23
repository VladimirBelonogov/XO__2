// Объявляем игроков
let players = {
	player0: 'crest',
	player1: 'nulls',
}
// Узнать текущего игрока
let currentPlayers = players.player0;

// Сменить игрока после хода
function switchplayers() {
	if (currentPlayers ==  players.player0){
		currentPlayers = players.player1
	} else if (currentPlayers == players.player1){
		currentPlayers = players.player0
	}
}

// Поставить крестик или нолик в поле
const cells = document.querySelectorAll('.game__item');
if(cells.length){
	cells.forEach(cell => {
		cell.addEventListener('click',function (e) {
			if ( !(cell.closest('.crest')) && !(cell.closest('.nulls') )){
				cell.classList.add (currentPlayers);
				switchplayers();
			}
		});
	});
}

// Внести данные об игре в массив
const valueCurrentOccupancy = document.querySelectorAll('.game__item');
if(cells.length){
	cells.forEach(cell => {
		cell.addEventListener('click',function (e) {
			if ( cell.closest('.crest')){
				currentOccupancy[cell.dataset.cell] = 1;
				console.log(currentOccupancy);
			} else if ( cell.closest('.nulls')){
				currentOccupancy[cell.dataset.cell] = 2;
				console.log(currentOccupancy);
			}
			cheсkedResult()
		});
	});
}


// Массив куда записываются текущие результаты игры
// 0 - не было хода
// 1 - Крестик
// 2 - Нолик
let currentOccupancy = [0,0,0,0,0,0,0,0,0];

// Проверка результата игры
function cheсkedResult(){
		// Проверка выйграли ли крестики?
	if ((currentOccupancy[0] === 1) && (currentOccupancy[1] === 1) && (currentOccupancy[2] === 1)) {
		console.log( 'Выйграли крестики');
		return
	}
	else if ((currentOccupancy[3] === 1) && (currentOccupancy[4] === 1) && (currentOccupancy[5] === 1)) {
		console.log( 'Выйграли крестики');
		return
	}
	else if ((currentOccupancy[6] === 1) && (currentOccupancy[7] === 1) && (currentOccupancy[8] === 1)) {
		console.log( 'Выйграли крестики');
	}
	else if ((currentOccupancy[0] === 1) && (currentOccupancy[3] === 1) && (currentOccupancy[6] === 1)) {
		console.log( 'Выйграли крестики');
		return
	}
	else if ((currentOccupancy[1] === 1) && (currentOccupancy[4] === 1) && (currentOccupancy[7] === 1)) {
		console.log( 'Выйграли крестики');
		return
	}
	else if ((currentOccupancy[2] === 1) && (currentOccupancy[5] === 1) && (currentOccupancy[8] === 1)) {
		console.log( 'Выйграли крестики');
		return
	}
	else if ((currentOccupancy[0] === 1) && (currentOccupancy[4] === 1) && (currentOccupancy[8] === 1)) {
		console.log( 'Выйграли крестики');
		return
	}	else if ((currentOccupancy[2] === 1) && (currentOccupancy[4] === 1) && (currentOccupancy[6] === 1)) {
		console.log( 'Выйграли крестики');
		return
	}
	// Проверка выйграли ли нолики?
	else if ((currentOccupancy[0] === 2) && (currentOccupancy[1] === 2) && (currentOccupancy[2] === 2)) {
		console.log( 'Выйграли нолики');
		return
	}
	else if ((currentOccupancy[3] === 2) && (currentOccupancy[4] === 2) && (currentOccupancy[5] === 2)) {
		console.log( 'Выйграли нолики');
		return
	}
	else if ((currentOccupancy[6] === 2) && (currentOccupancy[7] === 2) && (currentOccupancy[8] === 2)) {
		console.log( 'Выйграли нолики');
	}
	else if ((currentOccupancy[0] === 2) && (currentOccupancy[3] === 2) && (currentOccupancy[6] === 2)) {
		console.log( 'Выйграли нолики');
		return
	}
	else if ((currentOccupancy[1] === 2) && (currentOccupancy[4] === 2) && (currentOccupancy[7] === 2)) {
		console.log( 'Выйграли нолики');
		return
	}
	else if ((currentOccupancy[2] === 2) && (currentOccupancy[5] === 2) && (currentOccupancy[8] === 2)) {
		console.log( 'Выйграли нолики');
		return
	}
	else if ((currentOccupancy[0] === 2) && (currentOccupancy[4] === 2) && (currentOccupancy[8] === 2)) {
		console.log( 'Выйграли нолики');
		return
	}
	else if ((currentOccupancy[2] === 2) && (currentOccupancy[4] === 2) && (currentOccupancy[6] === 2)) {
		console.log( 'Выйграли нолики');
		return
	}
	// Проверка: а может ничья?
	else if ( (currentOccupancy[0] > 0) && (currentOccupancy[1] > 0) && (currentOccupancy[2] > 0)
	&& (currentOccupancy[3] > 0) && (currentOccupancy[4] > 0) && (currentOccupancy[5] > 0)
	&& (currentOccupancy[6] > 0) && (currentOccupancy[7] > 0) && (currentOccupancy[8] > 0) ){
		console.log( 'Боевая ничья');
	}
	// Проверка: игра ещё завершена?
	else if ( (currentOccupancy[0] == 0) || (currentOccupancy[1] == 0) || (currentOccupancy[2] == 0)
	|| (currentOccupancy[3] == 0) || (currentOccupancy[4] == 0) || (currentOccupancy[5] == 0)
	|| (currentOccupancy[6] == 0) || (currentOccupancy[7] == 0) || (currentOccupancy[8] == 0) ){
		console.log( 'Игра ещё не завершена');
	}}
console.log(cheсkedResult());
