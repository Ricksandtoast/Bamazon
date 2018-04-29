DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called programming_db --
CREATE DATABASE bamazon_db;

-- Use programming db for the following statements --
USE bamazon_db;

CREATE TABLE products(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INTEGER(0) AUTO_INCREMENT NOT NULL,

product_name VARCHAR (100),
-- name of category
department_name VARCHAR(100),

price INTEGER,

stock_quantity INTEGER,
  -- Set the id as this table's primary key
primary key (id)
);
INSERT INTO products
(product_name,department_name, price,stock_quantity)
VALUES
("Iphone","Electronics",100,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("xBox","Electronics",200,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Star Wars original set","Movies",40,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Morgan Amp","Electronics",1200,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Sony Head Phones","Electronics",80,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Nike Sneakers","Clothing",70,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Mattress","Furniture",200,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Dog Food","Pet Supplies",60,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Sunglasses","Accessories",20,1);

INSERT INTO products
(product_name,department_name, price, stock_quantity)
VALUES
("Camera","Electronics",150,1);


UPDATE products 
SET stock_quantity = 6
WHERE product_name = "Sony head phones";
SELECT * FROM products