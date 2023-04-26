class ProductManager {
  constructor() {
    this.products = [];
    this.idCounter = 0;
  }

  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log("Error: Todos los campos son obligatorios");
      return;
    }
    if (this.products.find(p => p.code === product.code)) {
      console.log("Error: El código de producto ya existe");
      return;
    }
    this.idCounter++;
    this.products.push({
      ...product,
      id: this.idCounter
    });
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      console.log("Error: Producto no encontrado");
      return null;
    }
    return product;
  }
}

const pm = new ProductManager();

pm.addProduct({
  title: "Zapatillas Nike",
  description: "Zapatillas Nike Air",
  price: 100,
  thumbnail: "nikeair.jpg",
  code: "PROD1",
  stock: 10
});

pm.addProduct({
  title: "Zapatillas Adidas",
  description: "Zapatillas Adidas Court",
  price: 200,
  thumbnail: "adidascourt.jpg",
  code: "PROD2",
  stock: 3
});

pm.addProduct({
    title: "Zapatillas Puma",
    description: "Zapatillas Puma",
    price: 320,
    thumbnail: "puma.jpg",
    code: "PROD3",
    stock: 45
  });

  pm.addProduct({
    title: "Zapatillas DC",
    description: "Zapatillas DC",
    price: 450,
    thumbnail: "dc.jpg",
    code: "PROD4",
    stock: 2
  });

  pm.addProduct({
    title: "Zapatillas Converse",
    description: "Zapatillas Converse",
    price: 150,
    thumbnail: "converse.jpg",
    code: "PROD5",
    stock: 7
  });

console.log(pm.getProductById(1));

console.log(pm.getProductById(2));

console.log(pm.getProductById(3));

console.log(pm.getProductById(4));

console.log(pm.getProductById(5));