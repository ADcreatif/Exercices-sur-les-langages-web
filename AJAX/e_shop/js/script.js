'use strict';
/* global $ */
var tooltip;

/**
 * Once we caught back the product informations from php we can display tooltip
 * @param datas
 */
function onAjaxMouseEnterProduct(datas) {
    tooltip.children('h3').text(datas.name);
    tooltip.children('p').text(datas.description);
    tooltip.children('ul').empty().append(
        $('<li>').text('prix : ' + datas.price),
        $('<li>').text('couleur : ' + datas.color),
        $('<li>').text('poids : ' + datas.weight)
    );

    tooltip.fadeIn()
}

/**
 * The product have been hovered, let's get product infos by ajax
 */
function onMouseEnterProduct() {

    // getting product id from
    var id = $(this).data('id');

    // sending product to php with ajax ($_GET['id'] = 2)
    $.get('', 'ajax&action=get&id=' + id, onAjaxMouseEnterProduct, 'json');
}

/**
 * Hide tooltip on mouseOut
 */
function onMouseOutProduct() {
    tooltip.fadeOut();
}

/////////////////////////////////////// ADD TO CART ////////////////////////////////

var onAjaxAddToCart = function (cart) {
    var ul, name, quantity, price;

    // on sait que le format de retour est en "json"
    ul = $('<ul>');

    $(cart).each(function (index, product) {
        name = product['name'];
        quantity = product['quantity'];
        price = (product['quantity'] * product['price']).toFixed(2);

        // if quantity is null, we don't display the line
        if (!quantity) {
            return
        }


        // generate the line for the cart
        ul.append(
            $('<li>').text(name + ' x' + quantity + ' ' + price + ' €')
                .append(
                    $('<a>')
                    // generate the suppressing URL
                        .attr('href', 'ajax&action=remove&id=' + product.id)
                        // add the X icon
                        .append($('<i>').addClass('fa fa-times'))
                )
        )
    });

    // finally we add everything to the DOM, not in the loop, so we only rebuilt the page once
    $('.item-list').empty().append(ul);
};

var onClickAddToCart = function (event) {
    // pour éviter le renvoi en haut de page (à cause de href="#")
    event.preventDefault();

    // on récupère l'id du produit sur lequel on a cliqué
    // this --> event.currentTarget
    // les attribut data en JS natif : this.dataset.bidule
    var id = $(this).data('id');

    // $.getJSON( url, data, success ] )
    $.getJSON('', "ajax&action=add&id=" + id, onAjaxAddToCart);
};

var onClickItemList = function (event) {
    // on désactive le clic sur le lien
    event.preventDefault();

    // this est le lien qui à été cliqué
    var id = $(this).data('id');

    // php/ajax.php?action=remove&productid=49
    $.getJSON(this.href, null, onAjaxAddToCart)

    /*
        c'est deux écritures sont exactement les mêmes que les précédentes
        $.getJSON('php/ajax.php', {action:'remove',productid:49}, onAjaxAddToCart)
        $.getJSON('php/ajax.php?action:remove&productid=49', null, onAjaxAddToCart)
     */
};


// Waiting for the DOM to be loaded
$(function () {
    // ------------------------------
    //          TOOLTIPS
    // ------------------------------
    tooltip = $('#tooltip');
    $('.product').mouseenter(onMouseEnterProduct).mouseout(onMouseOutProduct);

    // positionnement du tooltip a côté de la souris
    $(window).mousemove(function (event) {
        tooltip.css('left', event.clientX + 20);
        tooltip.css('top', event.clientY);
    });

    // ------------------------------
    //             CART
    // ------------------------------
    $(".add-to-cart").click(onClickAddToCart);

    /*
        Un problème se pose : on à besoin de créer un écouteur d'évènement sur les li du panier,
        mais ils ne cessent d'être réécris dans le DOM, donc pour cela il faut créer l'écouteur
        d'évènement sur tout le conteneur, mais il ne se déclenche que si l'on clique sur son
        enfant, la balise "<a>" : https://api.jquery.com/on/#on-events-selector-data-handler
     */
    $('.item-list').on('click', 'a', onClickItemList);


});
