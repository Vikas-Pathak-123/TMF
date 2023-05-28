const data = [
  {
    _id: "1",
    name: "Aaloo Paratha",
    image: require("../images/aaloparatha.jpg"),
    price: 80,
    rating: 10,
    numReviews: 10,
    category: "Breakfast",
    description: "1 Serving includes 2 Parathas, Dahi & Chutney",
  },
  {
    _id: "2",
    name: "Sandwich",
    image: require("../images/sandwich.jpg"),
    price: 35,
    rating: 4.5,
    numReviews: 10,
    category: "Breakfast",
    description:
      "Veg Sandwich, filling with mayonnaise, carrot, capsicum, cabbage & onion",
  },
  {
    _id: "3",
    name: "Aaloo Puri",
    image: require("../images/aaloopuri.png"),
    price: 80,
    rating: 4.5,
    numReviews: 10,
    category: "Breakfast",
    description: "1 serving contains 4 puris with a bowl of aaloo sabji",
  },
  {
    _id: "4",
    name: "Dosa",
    image: require("../images/dosa.jpg"),
    price: 90,
    rating: 4.5,
    numReviews: 10,
    category: "Breakfast",
    description: "1 serving contains 1 dosa with sambhar and nariyal chutney",
  },
  {
    _id: "5",
    name: "Idli",
    image: require("../images/idli.jpg"),
    price: 80,
    rating: 4.5,
    numReviews: 10,
    category: "Breakfast",
    description: "1 serving contains 5 pieces of idli with sambhar",
  },
  {
    _id: "6",
    name: "Dhokla",
    image: require("../images/Dhokla.jpg"),
    price: 50,
    rating: 4.5,
    numReviews: 10,
    category: "Breakfast",
    description: "1 serving contains 6 pieces with chutney",
  },
  {
    _id: "7",
    name: "Pakora",
    image: require("../images/pakora.jpg"),
    price: 80,
    rating: 4.5,
    numReviews: 10,
    category: "Breakfast",
    description: "1 serving contains 100 gms of pakora with chutney",
  },
  {
    _id: "8",
    name: "Upma",
    image: require("../images/upma.jpg"),
    price: 80,
    rating: 4.5,
    numReviews: 10,
    category: "Breakfast",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "9",
    name: "Veg Thali",
    image: require("../images/vegthali.jpg"),
    price: 150,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "10",
    name: "Kadi Chawal",
    image: require("../images/kadhichawal.jpeg"),
    price: 40,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "11",
    name: "Pulao",
    image: require("../images/pulaoo.jpg"),
    price: 60,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "12",
    name: "Chhole Bhature",
    image: require("../images/Chholebhature.jpeg"),
    price: 70,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "13",
    name: "Rajma Chawal",
    image: require("../images/Razmachawal.jpeg"),
    price: 40,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "14",
    name: "Chhole Kulche",
    image: require("../images/chholekulche.jpeg"),
    price: 50,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "15",
    name: "Raita",
    image: require("../images/raita.jpeg"),
    price: 30,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "16",
    name: "Biryani",
    image: require("../images/biryani.jpg"),
    price: 60,
    rating: 4.5,
    numReviews: 10,
    category: "Lunch",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "17",
    name: "Dum Aaloo",
    image: require("../images/dumaaloo.png"),
    price: 40,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "18",
    name: "Paneer",
    image: require("../images/paneer.png"),
    price: 70,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "19",
    name: "Kofte",
    image: require("../images/kofte.png"),
    price: 40,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "20",
    name: "Butter Chicken",
    image: require("../images/butterchicken.png"),
    price: 150,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "21",
    name: "Dal Makhni",
    image: require("../images/dalmakhni.png"),
    price: 45,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "22",
    name: "Korma",
    image: require("../images/korma.jpg"),
    price: 60,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "23",
    name: "Roti",
    image: require("../images/roti.jpeg"),
    price: 10,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "24",
    name: "Plain Rice",
    image: require("../images/plainrice.jpeg"),
    price: 20,
    rating: 4.5,
    numReviews: 10,
    category: "Dinner",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "25",
    name: "Laddu",
    image: require("../images/laddu.jpg"),
    price: 10,
    rating: 4.5,
    numReviews: 10,
    category: "Dessert",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "26",
    name: "Kheer",
    image: require("../images/kheer.png"),
    price: 60,
    rating: 4.5,
    numReviews: 10,
    category: "Dessert",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "27",
    name: "Gujia",
    image: require("../images/gujia.jpg"),
    price: 10,
    rating: 4.5,
    numReviews: 10,
    category: "Dessert",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
  {
    _id: "28",
    name: "Jalebi",
    image: require("../images/jalebi.jpg"),
    price: 30,
    rating: 4.5,
    numReviews: 10,
    category: "Dessert",
    description: "Tasty & healthy breakfast made of Suji and some vegetables",
  },
];


export default data;