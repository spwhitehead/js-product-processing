const startProcessing = () => {
    const products = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 1000,
        quantity: 5,
        inStock: true,
      },
      {
        name: "Phone",
        category: "Electronics",
        price: 500,
        quantity: 0,
        inStock: false,
      },
      {
        name: "Shirt",
        category: "Apparel",
        price: 20,
        quantity: 100,
        inStock: true,
      },
      {
        name: "Jeans",
        category: "Apparel",
        price: 40,
        quantity: 50,
        inStock: true,
      },
      {
        name: "TV",
        category: "Electronics",
        price: 1500,
        quantity: 3,
        inStock: true,
      },
      {
        name: "Hat",
        category: "Apparel",
        price: 15,
        quantity: 200,
        inStock: true,
      },
    ];
  
    const discountCategory = "Apparel";
    const discountRate = 0.1; // 10% discount
    console.log(processProducts(products, discountCategory, discountRate));
  };
  
  const processProducts = (products, discountCategory, discountRate) => {
    const inStock = products.filter((product) => product.inStock);
    const discountedProducts = [];

    for (let i=0; i < inStock.length; i++) {
        let discountedTotalValue = inStock[i].price * inStock[i].quantity;
        if (inStock[i].Category === discountCategory) {
            discountedTotalValue *= 1 - discountRate;
        }
    discountedProducts.push({
      name: inStock[i].name,
      category: inStock[i].category,
      discountedTotalValue: discountedTotalValue.toFixed(2)
    });
  }
  for (let item of discountedProducts) {
    document.getElementById("output").innerHTML +=
    "<p>Name: " + item.name + ", Category: " + item.category + ", Discounted Total Value: $" + item.discountedTotalValue + "</p>";
  }
  return discountedProducts
};