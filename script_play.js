const $cell = document.querySelectorAll('.cell')
const $clean = document.getElementById('clean')
$clean.addEventListener('click',Dashboard)
let $arr,$turn 

function Dashboard () {
	$arr = [[],[]]

	for (let i = 0; i < $cell.length; i++) {
		$cell[i].setAttribute('title','0')
		$cell[i].innerHTML = ''
	}
}

function paintCell (x,y) {
	let c = document.getElementById('c' + x + y)
	let crossess = turnCount($turn)
	if (crossess < 3){
		if (c.getAttribute('title') == 0) {
			c.innerHTML = '<img src="img/' + $turn + '.svg" alt="">'
			if ($turn == 'ball'){
				c.setAttribute('title','1')
				$arr[0].push(c)
				$turn = 'cross'
			}else {
				c.setAttribute('title','2')
				$arr[1].push(c)
				$turn = 'ball'
				searchMove()
			}
		}
	}else {
		clearCell()
	}
}

function clearCell () {
	let c
	let ballRandom = Math.round(Math.random()*2)
	let cellRandom = $arr[0][ballRandom]
	if($turn == 'ball'){
		$arr[0].splice(ballRandom,1)
		cellRandom.innerHTML = ' '
		searchMove()
		cellRandom.setAttribute('title','0')
		$turn = 'cross'
		console.log('saliendo ' + $turn)
	}else {

 		for (var i = 0; i < $cell.length; i++) {
		console.log($turn)
			$cell[i].addEventListener('click', function () {
				if (this.getAttribute('title') == 2) {
					console.log('entrando')
					this.setAttribute('title', '0')
					this.innerHTML = ' '
					console.log(this.getAttribute('id'))
					$turn = 'ball'
				}else {
					console.log('retornando')
					return clearCell($turn)				
				}
				// console.log('saliendo')
			})
		
		}
	}
}

function autoPlay () {
	$turn = 'ball'
	Dashboard()
	searchMove()

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