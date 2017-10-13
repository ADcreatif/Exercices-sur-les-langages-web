{extends "layout.tpl"}

{block name="title"}Accueil{/block}

{block name="main"}
<main>
    <h2>Page d'accueil</h2>
    <article id="broccoli" style="color:green" class="poil" title="un titre">
        <h2>Brocolis <span data-time>test</span></h2>
        <p>Tous mes sens sont émus d'une volupté douce et pure, comme l'haleine du matin dans cette saison délicieuse. Seul, au milieu d'une contrée qui semble fait exprès pour un coeur tel que mien, j'y goûte à longs traits l'ivresse de la vie. Je suis si heureux, mon ami, si absorbé dans le sentiment de ma paisible existence, que mon art en souffre. Incapable de dessiner le mointre trait, la plus faible ébauche, jamais pourtant je ne fus si grand peintre.</p>
        <p>Quand mon vallon chéri se couvre autour de moi d'une légère vapeur; qu'au-dessus de ma tête le soleil de midi darde ses rayons embrasés sur la sombre voûte de mon bois, au fond duquel, comme d'un sanctuaire, il introduit à peine une tremblante lumière; qu'étendu sur le gazon touffu, à la chute d'un ruisseau, je découvre avec ravissement une multitude de plantes, de fleurs d'une délicatesse infinie; que je vois s'agiter entre les brins d'herbe des milliers de vermisseaux, d'insectes, de moucherons, aux formes variées et innombrables; que j'entends résonner à mon oreille le murmure confus de ce petit monde; quand l'auguste présence de l'Être tout-puissant qui créa l'homme à son image, le souffle vivifiant du Dieu d'amour et de bonté qui nous porte et nous soutient sur un océan de délices éternels, me pénètrent de toutes parts, et que le ciel et la terre se réfléchissent dans mon âme sous le traits d'une amante adorée, alors je soupire et me dis: Oh!</p>
    </article>

    <article id="helicopter">
        <h2>Hélicoptère</h2>
        <p>que ne puis-je exprimer ce que je sens si vivement! Ces émotions brûlantes, que ne m'est-il donné de les peindre en traits de flamme! Mais - mon ami - les forces me manquent; je succombe sous la grandeur, sous la majesté de ces sublimes merveilles! Tous mes sens sont émus d'une volupté douce et pure, comme l'haleine du matin dans cette saison délicieuse. Seul, au milieu d'une contrée qui semble fait exprès pour un coeur tel que mien, j'y goûte à longs traits l'ivresse de la vie. Je suis si heureux, mon ami, si absorbé dans le sentiment de ma paisible existence, que mon art en souffre.</p>
        <p>Incapable de dessiner le mointre trait, la plus faible ébauche, jamais pourtant je ne fus si grand peintre.</p>
        <p>Quand mon vallon chéri se couvre autour de moi d'une légère vapeur; qu'au-dessus de ma tête le soleil de midi darde ses rayons embrasés sur la sombre voûte de mon bois, au fond duquel, comme d'un sanctuaire, il introduit à peine une tremblante lumière; qu'étendu sur le gazon touffu, à la chute d'un ruisseau, je découvre avec ravissement une multitude de plantes, de fleurs d'une délicatesse infinie; que je vois s'agiter entre les brins d'herbe des milliers de vermisseaux, d'insectes, de moucherons, aux formes variées et innombrables; que j'entends résonner à mon oreille le murmure confus de ce petit monde; quand l'auguste présence de l'Être tout-puissant qui créa l'homme à son image, le souffle vivifiant du Dieu d'amour et de bonté qui nous porte et nous soutient sur un océan de délices éternels, me pénètrent de toutes parts, et que le ciel et la terre se réfléchissent dans mon âme sous le traits d'une amante adorée, alors je soupire et me dis: Oh!</p>
        <div class="tool">
            <p>Voici une liste non exaustive de mes aliments préférés</p>
            <ul>
                {foreach $tableau as $aliment }
                    <li>{$aliment.name}</li>
                {/foreach}
            </ul>
        </div>

    </article>
    <article id="hi-tech">
        <h2>Hi tech</h2>
        <p>que ne puis-je exprimer ce que je sens si vivement! Ces émotions brûlantes, que ne m'est-il donné de les peindre en traits de flamme! Mais - mon ami - les forces me manquent; je succombe sous la grandeur, sous la majesté de ces sublimes merveilles! Tous mes sens sont émus d'une volupté douce et pure, comme l'haleine du matin dans cette saison délicieuse. Seul, au milieu d'une contrée qui semble fait exprès pour un coeur tel que mien, j'y goûte à longs traits l'ivresse de la vie. Je suis si heureux, mon ami, si absorbé dans le sentiment de ma paisible existence, que mon art en souffre. Incapable de dessiner le mointre trait, la plus faible ébauche, jamais pourtant je ne fus si grand peintre.</p>
        <p>Quand mon vallon chéri se couvre autour de moi d'une légère vapeur; qu'au-dessus de ma tête le soleil de midi darde ses rayons embrasés sur la sombre voûte de mon bois, au fond duquel, comme d'un sanctuaire, il introduit à peine une tremblante lumière; qu'étendu sur le gazon touffu, à la chute d'un ruisseau, je découvre avec ravissement une multitude de plantes, de fleurs d'une délicatesse infinie; que je vois s'agiter entre les brins d'herbe des milliers de vermisseaux, d'insectes, de moucherons, aux formes variées et innombrables; que j'entends résonner à mon oreille le murmure confus de ce petit monde; quand l'auguste présence de l'Être tout-puissant qui créa l'homme à son image, le souffle vivifiant du Dieu d'amour et de bonté qui nous porte et nous soutient sur un océan de délices éternels, me pénètrent de toutes parts, et que le ciel et la terre se réfléchissent dans mon âme sous le traits d'une amante adorée, alors je soupire et me dis: Oh!</p>
        <p>que ne puis-je exprimer ce que je sens si vivement! Ces émotions brûlantes, que ne m'est-il donné de les peindre en traits de flamme! Mais - mon ami - les forces me manquent; je succombe sous la grandeur, sous la majesté de ces sublimes merveilles! Tous mes sens sont émus d'une volupté douce et pure, comme l'haleine du matin dans cette saison délicieuse. Seul, au milieu d'une contrée qui semble fait exprès pour un coeur tel que mien, j'y goûte à longs traits l'ivresse de la vie. Je suis si heureux, mon ami, si absorbé dans le sentiment de ma paisible existence, que mon art en souffre. Incapable de dessiner le mointre trait, la plus faible ébauche, jamais pourtant je ne fus si grand peintre. Quand mon vallon chéri se couvre autour de moi d'une légère vapeur; qu'au-dessus de ma tête le soleil de midi darde ses rayons embrasés sur la sombre voûte de mon bois, au fond duquel, comme d'un sanctuaire, il introduit à peine une tremblante lumière; qu'étendu sur le gazon touffu, à la chute d'un ruisseau, je découvre</p>
    </article>
</main>
{/block}

