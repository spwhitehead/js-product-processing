# js-product-processing
A basic inventory management application that:

1. Filters out the products that are out of stock.
2. Calculates the total value of each product in stock (price * quantity).
3. Applies a discount to the total value of products that belong to a specific category.
4. Formats and returns the final array to include only the product name, category, and the discounted total value.

Example output:

[
  { name: "Laptop", category: "Electronics", discountedTotalValue: "5000.00" },
  { name: "Shirt", category: "Apparel", discountedTotalValue: "1800.00" },
  { name: "Jeans", category: "Apparel", discountedTotalValue: "1800.00" },
  { name: "TV", category: "Electronics", discountedTotalValue: "4500.00" },
  { name: "Hat", category: "Apparel", discountedTotalValue: "2700.00" }
]
