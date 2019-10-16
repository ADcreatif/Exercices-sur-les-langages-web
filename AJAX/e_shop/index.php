<?php

include "products.php";

$products = get_products();


if (array_key_exists('ajax', $_GET)) {
    $datas = [];

    if (array_key_exists('action', $_GET)) {
        switch ($_GET['action']) {
            case 'get' :
                $datas = get_product($_GET['id']);
                break;
            case 'remove':

                break;
        }
    }

    echo json_encode($datas);
}

include 'index.phtml';
