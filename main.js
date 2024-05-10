const app = Vue.createApp({
  // needs at least an ampty object to get it started
  data() {
    return {
      cart: 0,
      product: {
        name: "Socks",
        description: "Man, I love socks",
        image: "./assets/images/socks_green.jpg",
        inStock: false,
        inventory: 100,
        isOnSale: true,
        composition: ["50% cotton", "30% wool", "20% polyester"],
        variants: [
          {
            id: 1,
            color: "blue",
            hex: "#35495e",
            image: "./assets/images/socks_blue.jpg",
            inventory: 10,
            isOnSale: false,
          },
          {
            id: 2,
            color: "green",
            hex: "#42b883",
            image: "./assets/images/socks_green.jpg",
            inventory: 2,
            isOnSale: true,
          },
        ],
      },
    };
  },
  methods: {
    updateProductImage(image) {
      this.product.image = image;
    },
    addToCart() {
      this.cart++;
    },
  },
});
