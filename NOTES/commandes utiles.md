# VOICI QUELQUES COMMANDES UTILES #

## GIT ##

### Récupérer un projet existant ###
_on va dans le dossier de travail_
`cd c:\wamp\www`

_on creé le répertoire de travail_
`mkdir test`

_on va dedans_
`cd test`

_on récupère le tout_
`git clone https://github.com/ADcreatif/test.git`

### GIT PULL ###
_on récupère la dernière version (test: repo / master:branche)_
`git pull test master`

### GIT PUSH ###
`git init`
`git add README.md`
`git commit -m "first commit"`
`git remote add origin git@github.com:ADcreatif/restaurant.git`
`git push -u origin master`

### GIT Créer un espace ###
`git init`
`git add README.md`
`git commit -m "first commit"`
`git remote add origin https://github.com/ADcreatif/blog.git`
`git push -u origin master`
…or push an existing repository from the command line
`git remote add origin https://github.com/ADcreatif/repositoty.git`
`git push -u origin master`





## BASE DE DONNEES ##

installer phpmyadmin
    mysql-ctl install
    phpmyadmin-ctl install
    mysql-ctl start

    https://[workspace]-[user].c9users.io/phpmyadmin/


# INSTALLER WORDPRESS EN LIGNE DE COMMANDES #
## Installation ##
*télécharger wp-cli.phar*

`curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar`

*vérifier que le fichier marche*

`php wp-cli.phar --info`

*changer les droits sur le fichier*

`chmod +x wp-cli.phar`

*déplacer le fichier sur le serveur*

`sudo mv wp-cli.phar /usr/local/bin/wp`

*vérifier que tout est ok*

`wp --info`

##utilisation##
*on crée un dossier*

`mkdir wordpress`

*on se positionne dedans*

`cd wordpress`

*installation de wordpress*

`wp core download`

*installation d'un plugin*

`wp plugin install rest-api --activate`