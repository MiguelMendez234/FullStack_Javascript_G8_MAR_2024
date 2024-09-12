--Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.

SELECT * FROM publisher;

SELECT * FROM book;


SELECT publisher_id FROM publisher 
WHERE name = 'Penguin Books';

SELECT * FROM book
WHERE publisher_id = 1;


SELECT *
FROM book
WHERE publisher_id = (
	SELECT publisher_id FROM publisher 
	WHERE name = 'Penguin Books'
);

-- Reporte 2: Seleccionar todos los libros publicados después del año 1950.

SELECT title, publication_year FROM book
WHERE publication_year > 1950;

--Reporte 3: Seleccionar los nombres de los autores que han 
--  escrito libros de género 'Fantasy' utilizando una subconsulta.


SELECT * FROM book
		WHERE genre = 'Fantasy';


SELECT * FROM book_author;
	WHERE book_id IN (4,5);

SELECT * FROM author
WHERE author_id IN (
	SELECT author_id FROM book_author
	WHERE book_id IN (
		SELECT book_id FROM book
		WHERE genre = 'Fantasy'
	) -- (4,5);
); -- (1,2,4,5)

