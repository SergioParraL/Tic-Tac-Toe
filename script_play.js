const $cell = document.querySelectorAll('.cell')
const $clean = document.getElementById('clean')
$clean.addEventListener('click',Dashboard)
let $arr = [[],[]]

function Dashboard () {
	for (var i = 0; i < $cell.length; i++) {
		$cell[i].setAttribute('title','0')
		$cell[i].innerHTML = ''
	}
}
	Dashboard()

function cell (x,y) {
	let c = document.getElementById('c' + x + y)
	let turn = turnPlay()
	
	if (c.getAttribute('title') == 0) {
		
		console.log(turn)
		c.innerHTML = '<img src="img/' + turn + '.svg" alt="">'
		
		if (turn == 'ball'){
			c.setAttribute('title','1')
			$arr[0].push(c)
		}else {
			c.setAttribute('title','2')
			$arr[1].push(c)

		}
	}else {
		console.log('ocupado')
		console.log($arr)
	}
}

function turnPlay () {
	let turn = 'ball', cont = 0
	for (var i = 0; i < $cell.length; i++) {
		if ($cell[i].getAttribute('title') != 0) {
			cont++
		}
	}
	if (cont == 0 || cont % 2 == 0) {
		return turn
	}else {
		turn = 'cross'
		return turn
	}
}




// function play () {
// }

// play()


// State of Cell:
/*
empty 	= 	0
ball 	=	1 ==> Maquina
cross 	=	2 ==> Usuario
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