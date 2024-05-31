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
      name: inStockProducts[i].name,
      category: inStockProducts[i].category,
      discountedTotalValue: discountedTotalValue.toFixed(2)
    });
    return discountedProducts
  }
};


//     // Your code goes here
//     let outputArray = [];
//     const outputElement = document.getElementById("output");
//     products.forEach(item => {
//         let discountedTotalValue = item.quantity * item.price;
//         outputArray.push(item.name, item.category, discountedTotalValue)
//     });
//     outputElement.innerHTML +=
//         "<p>" + outputArray + "</p>";
//   };



//   discountedTotalValue *= 1 - discountRate;
// }
// discountedProducts.push({
//   name: inStockProducts[i]["name"],
//   category: inStockProducts[i].category,
//   discountedTotalValue: discountedTotalValue.toFixed(2),
// });
// }
// return discountedProducts;