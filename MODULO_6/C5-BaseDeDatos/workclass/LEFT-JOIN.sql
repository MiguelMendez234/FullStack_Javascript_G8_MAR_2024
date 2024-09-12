
SELECT *
FROM products p
LEFT JOIN orders_products op
ON p.id = op.product_id;

/*
El LEFT JOIN devuelve todos los productos, y para aquellos que no han sido comprados (como 'Capuchino' y 'Bagel'), 
muestra NULL en la columna quantity.
*/


SELECT products.name AS product_name, orders_products.quantity
FROM products
LEFT JOIN orders_products ON products.id = orders_products.product_id;

