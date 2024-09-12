
--- Para obtener los productos comprados en cada pedido, debemos utilizar un INNER JOIN con la tabla intermedia orders_products:

SELECT orders.id AS order_id, products.name AS product_name, orders_products.quantity
FROM orders
INNER JOIN orders_products ON orders.id = orders_products.order_id
INNER JOIN products ON orders_products.product_id = products.id;



--Mostrar todos los productos y, si han sido comprados, el nombre del cliente que los compró.
SELECT products.name AS product_name, customers.name AS customer_name, orders_products.quantity
FROM products
LEFT JOIN orders_products ON products.id = orders_products.product_id
LEFT JOIN orders ON orders_products.order_id = orders.id
LEFT JOIN customers ON orders.customer_id = customers.id;