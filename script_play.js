const $cell = document.querySelectorAll('.cell')
const $clean = document.getElementById('clean')
$clean.addEventListener('click',Dashboard)
let $arr = [], $turn 

function Dashboard () {
	for (var i = 0; i < $cell.length; i++) {
		$cell[i].setAttribute('title','0')
		$cell[i].innerHTML = ''
	}
}

function cell (x,y) {
	let c = document.getElementById('c' + x + y)
	if (c.getAttribute('title') == 0) {
		console.log($turn)
		c.innerHTML = '<img src="img/' + $turn + '.svg" alt="">'
		if ($turn == 'ball'){
			c.setAttribute('title','1')
			$turn = 'cross'
			$arr.push(c)
			console.log($arr.pop())
		}else {
			c.setAttribute('title','2')
			$arr.push(c)
			$turn = 'ball'
			console.log($arr.pop())
			searchMove()
		}
	}else {
		cellBusy($arr,$turn)
	}
}
function cellBusy (array,player) {
	console.log(array.pop())
}
function autoPlay () {
	$turn = 'ball'
	$arr = []

	Dashboard()
	searchMove()
	// cell(1,2)

}

autoPlay()

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