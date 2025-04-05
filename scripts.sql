CREATE SEQUENCE products_id_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price FLOAT NOT NULL
);

ALTER SEQUENCE products_id_seq OWNED BY products.id;