const INITIAL_STATE = [
  {
    id: 1,
    title: "Bags",
    routeName: "bags",
    items: [
      {
        id: 2,
        name: "White bag",
        imageUrl: "https://i.ibb.co/G2KdfN8/2021-04-04-16-28-IMG-3878.jpg",
        price: 18,
      },
      {
        id: 3,
        name: "Blue Bag",
        imageUrl: "https://i.ibb.co/R2s0pVm/2021-04-04-16-33-IMG-3884.jpg",
        price: 35,
      },
      {
        id: 4,
        name: "Blue gucchi",
        imageUrl: "https://i.ibb.co/WkCJK7b/2021-04-04-16-20-IMG-3863.jpg",
        price: 25,
      },
      {
        id: 5,
        name: "Gucchi",
        imageUrl: "https://i.ibb.co/ZMLHLjW/2021-04-04-16-18-IMG-3861.jpg",
        price: 18,
      },
      {
        id: 6,
        name: "White Bag",
        imageUrl: "https://i.ibb.co/QMJLBdk/2021-04-02-15-28-IMG-3838.jpg",
        price: 14,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue",
        imageUrl: "https://i.ibb.co/3hZhqnN/code-9.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Green",
        imageUrl: "https://i.ibb.co/8xTfhdH/code-10.jpg",
        price: 20,
      },
      {
        id: 25,
        name: "Dress",
        imageUrl: "https://i.ibb.co/LYXw9dN/Code-3.jpg",
        price: 80,
      },
      {
        id: 26,
        name: "Yellow Dress",
        imageUrl: "https://i.ibb.co/n1ftZcb/code-8.jpg",
        price: 80,
      },
      {
        id: 27,
        name: "Pink",
        imageUrl: "https://i.ibb.co/hZQRkp7/code-5.jpg",
        price: 45,
      },
      {
        id: 28,
        name: "Green",
        imageUrl: "https://i.ibb.co/wN8851Z/code-6.jpg",
        price: 135,
      },
      {
        id: 29,
        name: "Dark Yellow",
        imageUrl: "https://i.ibb.co/D7MQZ5B/code-2.jpg",
        price: 20,
      },
      {
        id: 50,
        name: "WHite Pink",
        imageUrl: "https://i.ibb.co/vs1RdfZ/code-1.jpg",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
];

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopReducer;
