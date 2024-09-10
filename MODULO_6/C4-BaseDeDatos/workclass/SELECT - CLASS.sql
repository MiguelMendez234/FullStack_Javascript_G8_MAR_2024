-- This is a comment

/*
	this is a 
	multilinea comment
*/


SELECT * FROM products
	WHERE price > 2.50 OR price < 15;

SELECT * FROM products;

-- = > < >= <= != AND OR

-- IN , LIKE % _ , BETWEEN, NOT

SELECT * FROM products
	WHERE name LIKE '%emon%';


SELECT 
	name,
	type,
	price
FROM products
WHERE price BETWEEN 2.50 AND 15;


-- ORDER BY DESC ASC

SELECT 
	name,
	price
FROM products
ORDER BY price ASC;


SELECT 
	name,
	price
FROM products
WHERE price BETWEEN 2.50 AND 15
ORDER BY price ASC;



-- LIMIT OFFSET

SELECT * FROM products LIMIT 3 OFFSET 6;

-- DISTINCT

SELECT DISTINCT price
	FROM products;


-- Agregaciones con FUNCIONES
-- COUNT() 
-- SUM()
-- AVG()
-- MAX()
-- MIN()

SELECT COUNT(*) FROM products;

SELECT SUM(price) AS total FROM products;

SELECT AVG(price) AS price FROM products;

SELECT MAX(price) AS maximum FROM products;

SELECT MIN(price) AS minimum FROM products;

SELECT MAX(price) AS maximum, MIN(price) AS minimum FROM products;



-- GROUP BY

SELECT type, COUNT(*) AS count_price FROM products GROUP BY type;

SELECT type, AVG(price) AS average_price FROM products GROUP BY type;

-- HAVING

-- combinación con la clausula GROUP BY, filas donde la condicion es verdadera

-- SELECT field, condicion -> funcion -> FROM -> GROUP BY field-> HAVING condicion

/*

SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
*/

SELECT type, COUNT(*) as quantity
FROM products
GROUP BY type
HAVING COUNT(*) > 2;


-- IS NULL
SELECT
	name,
	type
FROM products
WHERE type IS NOT NULL;


-- CONTACT

SELECT CONCAT('Name:', name, ' Price:', price) AS name_price FROM products;
SELECT name ||' ' || price FROM products;

-- CASE

SELECT *, 
CASE
	WHEN price > 2.50 AND price < 10 THEN 'Greather than 2.50 and less than 10'
	WHEN price > 10 THEN 'Greather than 10'
	ELSE 'Minor than 2.50'
END AS greater_than

FROM products;


-- SUBCONSULTAS

SELECT AVG(price)
		FROM products;

SELECT * FROM products
WHERE price > 
	( 
		SELECT AVG(price)
		FROM products
	
	);


UPDATE products
 SET name = 'Lemon Cake 2.0'
 WHERE product_id = 25;


DELETE FROM products
	WHERE product_id = 27;


