SELECT
  cashier.name AS Casier,
  product.name as Product,
  category.name AS Category,
  product.price as Price
FROM product
INNER JOIN category
  on category.id = product.id_category
INNER JOIN cashier
  on cashier.id = product.id_cashier