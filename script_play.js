const $cell = document.querySelectorAll('.cell')
const $clean = document.getElementById('clean')
$clean.addEventListener('click',Dashboard)
let $arr = [[],[]], $turn = 'ball' 

function Dashboard () {
	$arr = [[],[]]
	for (var i = 0; i < $cell.length; i++) {
		$cell[i].setAttribute('title','0')
		$cell[i].innerHTML = ''
	}
}
	Dashboard()

function cell (x,y) {
	let c = document.getElementById('c' + x + y)
	// let turn = turnPlay()
	// console.log('valor c ')
	// console.log(c)
	if (c.getAttribute('title') == 0) {
		// console.log($turn)
			c.innerHTML = '<img src="img/' + $turn + '.svg" alt="">'
		
		if ($turn == 'ball'){
			c.setAttribute('title','1')
			$turn = 'cross'
			searchMove()
			$arr[0].push(c)
		}else {
			c.setAttribute('title','2')
			$arr[1].push(c)
			$turn = 'ball'

		}
	}else {
		cellBusy($arr,$turn)
	}
}
function cellBusy (array,player) {
	// console.log('ocupado')
	console.log(player)
	if(player == 'cross'){
		let q = array[1].length
		// console.log(array[1][q-1],player)

	}else {
		let q = array[0].length
		// console.log(array[0][q-1],player)

	}
}
	

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