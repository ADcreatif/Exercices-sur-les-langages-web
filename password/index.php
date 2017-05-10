<?php
include 'password.php';

/*
addPassword('zobby','lamouche');
addPassword('fresd','aster');
addPassword('francky','vincent');
*/

if(array_key_exists('login', $_POST)){
    $pseudo = $_POST['pseudo'];
    $pass = $_POST['password'];

    checkPassword($pseudo, $pass);
}

?>

<form method="POST">
    <input type="text" name="pseudo" placeholder="pseudo">
    <input type="password" name="password" placeholder="pass">
    <input type="submit" name="login" value="connexion">
</form>
