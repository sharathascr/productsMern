let products = [
  {
    name: "iPhone",
    price: "100000",
    description: "Awesome",
    id: "80c1e11d-982b-4710-8877-e95da8b785cc",
  },
];

const product = products.find(
  (product) => product.id == "80c1e11d-982b-4710-8877-e95da8b785cc"
);

console.log(product);
