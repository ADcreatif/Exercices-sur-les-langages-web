<?php

const DB_NAME = 'web_tuto';
const DB_TABLE = 'e_shop';
const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';

function connect()
{
    // Connection
    $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8', DB_USER, DB_PASS);

    // Display errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    // return pdo instance
    return $pdo;
}

function queryAll($sql, array $data = [])
{
    $query = connect()->prepare($sql);
    $query->execute($data);
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function query($sql, array $data = [])
{
    $query = connect()->prepare($sql);
    $query->execute($data);
    return $query->fetch(PDO::FETCH_ASSOC);
}

function execute($sql, array $data = [])
{
    $pdo = connect();
    $query = $pdo->prepare($sql);
    $query->execute($data);
    return $pdo->lastInsertId();
}

function get_products()
{
    // récupération des produits en php
    return queryAll('SELECT * FROM ' . DB_TABLE);
}


function get_product($id)
{
    // récupération des produits en php
    return queryAll('SELECT * FROM ' . DB_TABLE . ' WHERE id = ?', [$id]);
}
