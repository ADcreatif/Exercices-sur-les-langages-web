<?php include "header.php" ?>

<h1>page</h1>
<p>Plein de trucs à dire c'est fou </p>

<?php if($isLogged): ?>
	vous êtes <?= $_SESSION['user']['skill'] ?>
<?php endif ?>