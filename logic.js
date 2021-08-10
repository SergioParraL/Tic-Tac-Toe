function searchMove () {
	let cellAvilable = false
	let x , y
	while(cellAvilable == false){
		x = Math.round(Math.random()*2)
		y = Math.round(Math.random()*2)
		let c = document.getElementById('c'+ x + y)
		console.log(c)
		if(c.getAttribute('title') == 0) cellAvilable = true
	}
	cell(x,y)
}