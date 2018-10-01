<?php


class Items {

    function create_item($title, $quantity = 1, $price = 0.00, $category = "none") {
        $new_item = [
            "title" => $title,
            "quantity" => $quantity,
            "price" => $price,
            "category" => $category
        ];

        $sql = "INSERT INTO items (title, quantity, price, category) VALUES (?, ?, ?, ?)";
        $query = $this->db()->prepare($sql);
        $query->execute([$title, $quantity, $price, $category]);

        header('Location:' . HOME . 'shopping_list');
        exit;
    }

    private function db() {
        $pdo = new PDO('mysql:host=localhost;dbname=smart_nav;charset=UTF8', 'root', '', [
            'PDO::ATTR_ERRMODE' => 'PDO::ERRMODE_EXCEPTION',
            'PDO::ATTR_DEFAULT_FETCH_MODE' => 'PDO::FETCH_ASSOC'
        ]);
        return $pdo;
    }

    function remove_item($item_id) {
        $query = $this->db()->prepare("DELETE FROM items WHERE id = ?");
        $query->execute([$item_id]);
    }

    function edit_item($item_id, $field, $new_value) {
        $fields = ['id', 'title', 'quantity', 'price', 'category'];
        if (in_array($field, $fields)) {
            $sql = "UPDATE items SET($field = ?) WHERE id = ?";
            $query = $this->db()->prepare($sql);
            $query->execute([$new_value, $item_id]);
        }
    }

    function get_item($item_id) {
        $query = $this->db()->prepare('SELECT id, title,quantity, price, category FROM items WHERE id = ?');
        $query->execute([$item_id]);
        return $query->fetch();
    }

    function get_all_item() {
        $query = $this->db()->prepare('SELECT id, title,quantity, price, category FROM items');
        $query->execute();
        return $query->fetchAll();
    }
}