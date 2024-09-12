-------  FULL JOIN ----------------  

/*
El FULL OUTER JOIN devuelve todos los registros de ambas tablas,
 combinando los resultados de un LEFT JOIN y un RIGHT JOIN. 
 Si un producto no tiene coincidencias en orders_products 
 o si un pedido no tiene un producto asociado, se mostrará NULL.
*/


SELECT products.name AS product_name, orders_products.quantity
FROM products
FULL OUTER JOIN orders_products ON products.id = orders_products.product_id;



