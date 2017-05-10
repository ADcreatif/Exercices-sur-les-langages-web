<meta charset="utf-8">
<?php  

session_start();

$backgroundColor='inherit';
$fontFamily = 'inherit';

if(array_key_exists('user', $_SESSION)){
	$isLogged = true;
	$backgroundColor = $_SESSION['user']['backgroundColor'];
	$fontFamily = $_SESSION['user']['fontFamily'];
} else {
	$isLogged = false;
}
 ?>
 
 <style>
	/* montrer qu'on peut faire du css dynamique */
    <?php include 'style.php'; ?>
</style> 

<nav>
	<a href="index.php">index</a>
	<a href="page.php">page</a>
	<?php if($isLogged): ?>
		<a href="logout.php">logout</a>
	<?php else: ?>
		<a href="login.php">login</a>
	<?php endif ?>
</nav>
<?php if($isLogged): ?>
	<p>Bonjour <?=$_SESSION['user']['name'] ?>, <strong><?=count($_SESSION['cart']) ?> produit(s) différent dans votre panier</strong></p>
<?php endif ?>