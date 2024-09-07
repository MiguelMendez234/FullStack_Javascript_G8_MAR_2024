-- CREATE

CREATE TABLE customers (
	id bigint primary key generated always as identity,
	name text NOT NULL,
	email text UNIQUE NOT NULL,
	phone text
);


CREATE TABLE products (
	id bigint primary key generated always as identity,
	name text NOT NULL,
	price numeric NOT NULL,
	category text
);


CREATE TABLE orders (
	id bigint primary key generated always as identity,
	customer_id bigint references customers(id),
	order_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
	total_amount numeric NOT NULL
);

CREATE TABLE orders_products (
	id bigint primary key generated always as identity,
	order_id bigint references orders (id),
	product_id bigint references products (id),
	quantity integer NOT NULL,
	price numeric NOT NULL
);

-- CREATE

INSERT INTO customers (name, email, phone)
	VALUES (
		'Juan Diego',
		'juan@email.com',
		'+57 31189999'
	);

-- READ

SELECT * FROM customers;


-- DELETE

DELETE FROM customers
WHERE id = 3;

-- UPDATE

UPDATE customers
	SET name = 'Felipe 2'
	WHERE id = 3;