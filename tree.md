<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>three in Line</title>
	<link rel="stylesheet" href="tree.css">
	<!-- <script type="text/javascript" src="script_play.js"></script> -->
</head>
<body>
	<header>
		<h1>3 in Line</h1>
		<section class="menu">
			<span>Logo</span> <!-- logo -->
			<div>
				<button>Clean</button> <!-- clean Dashboard -->
				<button>Contact</button> <!-- Contact -->
			</div>
		</section>
	</header> 
	<div class="wrapper">
<article id="table">
	<section id=file_0 class="file">

		<div id="c02" class="cell" onclick="cleanCell(0,2)"></div>
		<div id="c12" class="cell" onclick="cleanCell(1,2)"></div>
		<div id="c22" class="cell" onclick="cleanCell(2,2)"></div>

	</section>
	<section id=file_1 class="file">

		<div id="c01" class="cell" onclick="cleanCell(0,1)"></div>
		<div id="c11" class="cell" onclick="cleanCell(1,1)"></div>
		<div id="c21" class="cell" onclick="cleanCell(2,1)"></div>

	</section>
	<section id="file_2" class="file">

		<div id="c00" class="cell" onclick="cleanCell(0,0)"></div>
		<div id="c10" class="cell" onclick="cleanCell(1,0)"></div>
		<div id="c20" class="cell" onclick="cleanCell(2,0)"></div>

	</section>
</article> <!--Dashboard-->
<aside class="grading">
	<section><h3>Points</h3></section>
	<section class="balls">0</section>
	<hr>
	<section class="cruz"></section>
</aside> <!--dot-->
	</div>
	<script type="text/javascript" src="script_play.js"></script>
</body>
</html>
