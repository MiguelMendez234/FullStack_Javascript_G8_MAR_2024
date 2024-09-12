-------  RIGHT JOIN ----------------  

/*
Aquí, el RIGHT JOIN garantiza que todos los productos serán mostrados, 
incluso aquellos que no han sido comprados. 
Para los productos que no tienen coincidencias en la tabla orders_products, 
como 'Capuchino' y 'Bagel', las columnas quantity se muestran como NULL.
*/


SELECT products.name AS product_name, orders_products.quantity
FROM orders_products
RIGHT JOIN products ON orders_products.product_id = products.id;


