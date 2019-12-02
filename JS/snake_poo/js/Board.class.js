"use strict";

/* global $ */


class Board {

    getCellByCood(x, y) {
        return y * BOARDSIZE + x;
    }

    haveApple(cellID) {
        return $('#' + cellID).hasClass('apple');
    }

    generateBoard() {
        let table = $("<table>");
        let cellID = 0;
        let tr_index, tr, td_index, td;

        for (tr_index = 0; tr_index < BOARDSIZE; tr_index++) {
            tr = $('<tr>');

            for (td_index = 0; td_index < BOARDSIZE; td_index++) {
                td = $('<td>');
                td.attr('id', cellID);
                cellID++;
                tr.append(td);
            }
            table.append(tr);
        }
        // c'est seulement à la fin qu'on touche au DOM pour insérer la totalité de la table
        $('#board').append(table);
    }
}