SELECT *
FROM products AS p
INNER JOIN orders_products AS op
ON p.id = op.product_id;

--TOTAL PRODUCT

SELECT
	p.name,
	p.price * op.quantity "$ producto"
FROM products p
JOIN orders_products op
ON p.id = op.producto_id;


-- TOTAL A PAGAR ---

SELECT
	SUM(p.price * op.quantity) "Total a pagar"
FROM products p
JOIN orders_products op
ON p.id = op.product_id;

/*
Este INNER JOIN solo muestra los productos que tienen coincidencias en la tabla orders_products. 
Los productos que no han sido comprados (como 'Capuchino' y 'Bagel') no aparecen en los resultados.
*/

SELECT products.name AS product_name, orders_products.quantity
FROM products
INNER JOIN orders_products ON products.id = orders_products.product_id;

