<?php

class Password {

    const FILE_NAME = 'password.csv';

    public function createAccount($pseudo, $pass) {
        $ressource = fopen(Password::FILE_NAME, 'a');

        // formatage des données
        $pseudo = strtolower(trim($pseudo));
        $pass = $this->hashPassword(trim($pass));

        // insertion dans la base données
        fputcsv($ressource, [$pseudo, $pass]);
        fclose($ressource);
    }

    private function hashPassword($pass) {
        /*
         * Génération du sel, nécessite l'extension PHP OpenSSL pour fonctionner.
         *
         * openssl_random_pseudo_bytes() va renvoyer n'importe quel type de caractères.
         * Or le chiffrement en blowfish nécessite un sel avec uniquement les caractères
         * a-z, A-Z ou 0-9.
         *
         * On utilise donc bin2hex() pour convertir en une chaîne hexadécimale le résultat,
         * qu'on tronque ensuite à 22 caractères pour être sûr d'obtenir la taille
         * nécessaire pour construire le sel du chiffrement en blowfish.
         */
        $salt = '$2y$11$' . substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        // Voir la documentation de crypt() : http://devdocs.io/php/function.crypt
        return crypt($pass, $salt);
    }

    public function checkPassword($pseudo, $pass) {
        $users = $this->getUsers();

        if (!preg_match('#^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{6,}$#', $pass)) {
            throw new DomainException("Le mot de passe doit faire au moins 6 caractères, et contenir au moins un caractère spécial, nombre et majuscule");
        }

        // vérification, le pseudo est dans la base et le mot de passe correspond
        if (!array_key_exists($pseudo, $users) || !$this->verifyPassword($pass, $users[$pseudo])) {
            throw new DomainException("Mauvais pseudo ou mot de passe");
        }

        echo 'Connexion en cours ...';
    }

    private function getUsers() {
        $ressource = fopen(Password::FILE_NAME, 'r');
        $users = [];

        while ($ligne = fgetcsv($ressource)) {
            $pseudo = $ligne[0];
            $pass = $ligne[1];
            $users[$pseudo] = $pass;
        };

        fclose($ressource);

        return $users;
    }

    private function verifyPassword($pass, $hashedPass) {
        // Si le mot de passe en clair est le même que la version hachée alors renvoie true.
        return crypt($pass, $hashedPass) == $hashedPass;
    }
}
