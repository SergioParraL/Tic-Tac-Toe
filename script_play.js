let board = new Array(3)

function cleanCell(x,y){
	board[x][y] = 0
	let cell = document.getElementById('c' + x + y)
	cell.innerHTML = ' '
}

function cleanBoard() {
	for(let x = 0; x < 3; x++){
		for(let j = 0; j < 3; j++){
			cleanCell(x,j)
		}
	}
}


function autoPlay() {
	for (let i = 0; i < 3; i++) board[i] = new Array(3)
	cleanBoard()
	cleanCell()
}

autoPlay()

/*
State of Cell:
empty 	= 	0
ball 	=	1
cross 	=	2
*/
// Que la maquina comience Primero siempre una casilla aleatoria
// controlar Movimientos de cada jugador. 3 max C/U
// al llegar al limite, se debe borrar esa casilla y escoger otra

/************************************
*			*			*			*
*			*			*			*
*	c02		*	c12		*	c22		*
*			*			*			*
*			*			*			*
*************************************
*			*			*			*
*			*			*			*
*	c01		*	c11		*	c21		*
*			*			*			*
*			*			*			*
*************************************
*			*			*			*
*			*			*			*
*	c00		*	c10		*	c20		*
*			*			*			*
*			*			*			*
************************************/