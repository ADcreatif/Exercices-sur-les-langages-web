<?php include 'products.php' ?>

<!DOCTYPE html>
<html>
	<head>
		<title>Le mauvais coin</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css" type="text/css" />
		<script src="https://code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
		<script type="text/javascript" src="script.js"></script>
	</head>
	<body>
		<section>
			<h1>Le mauvais coin</h1>
			<p>Survolez un produit pour en savoir plus</p>
			<?php foreach($products as $id => $product): ?>
				<article data-productid="<?= $id ?>">
					<img src="img/<?=$product['picture']?>">
					<h2><?=$product['name'] ?></h2>
				</article>
			<?php endforeach ?>
		</ul>
		<div id="tooltip">
			<h3></h3>
			<p></p>
			<ul></ul>
		</div>
	</body>
</html>