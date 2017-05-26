<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Les 5 langages - {block name="title"}default{/block}</title>
    <link rel="stylesheet" href="{VIEW}css/style.css">
    <script src="{VIEW}js/script.js"></script>
</head>
<body>

<!-- En-tête -->
<header>
    <h1>Les 5 langages</h1>
    <span data-time>test</span>
    <p>Connecté en tant que {$pseudo}</p>
    <nav>
        <a href="{HOME}" title="">Accueil</a>
        <a href="about" title="">A propos</a>
        <a href="contact" title="">Contact</a>
    </nav>
</header>
<!-- # En-tête -->

<!-- Contenu principal -->
{block name=main}
    <main>
        Contenu par défaut
    </main>
{/block}
<!-- #Contenu principal -->

<aside id="tool-box" class="hidden">
    <a href=""><img src="http://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Tools-icon.png"></a>
</aside>


<!-- Pied de page -->
{block name=footer}
<footer>
    <p>Je suis le pied de page</p>
</footer>
{/block}

<!-- # Pied de page -->
</body>
</html>