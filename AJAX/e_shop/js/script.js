'use strict';
/* global $ */
let tooltip;

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
    let id = $(this).data('id');

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

let onAjaxAddToCart = function (cart) {
    let ul, name, quantity, price;

    // we already know the return format is "json"
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

let onClickAddToCart = function (event) {
    // disable the link behaviour, (go to top of the page)
    event.preventDefault();

    // getting clicked item's ID
    // this --> event.currentTarget
    // equivalent in native JS : this.dataset.bidule
    let id = $(this).data('id');

    // $.getJSON( url, data, success ] )
    $.getJSON('', "ajax&action=add&id=" + id, onAjaxAddToCart);
};

let onClickItemList = function (event) {
    // disabling link click effect
    event.preventDefault();

    // "this" represents the clicked link
    let id = $(this).data('id');

    // php/ajax.php?action=remove&productid=49
    $.getJSON(this.href, null, onAjaxAddToCart)

    /*
        exactly the same as previous line
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

    // positioning the tooltip next to the mouse
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
