import { translateText } from "../helpers/translation";

import Image5 from "../Product-Image/Clothes/Clothes5.png";
import Image6 from "../Product-Image/Clothes/Clothes6.jpg";
import Image10 from "../Product-Image/Electronics/Electronics4.jpg";
import Image11 from "../Product-Image/Electronics/Electronics5.jpg";
import Image16 from "../Product-Image/HealthCare/HealthCare4.jpg";
import Image17 from "../Product-Image/HealthCare/HealthCare5.png";
import Image28 from "../Product-Image/Toys/Toys4.jpg";
import Image29 from "../Product-Image/Toys/Toys5.jpg";
import Image34 from "../Product-Image/Watches/Watches4.jpg";
import Image35 from "../Product-Image/Watches/Watches5.jpg";

let randomProducts2 = [
    {
        id: 5,
        category: "clothes",
        image: Image5,
        title: translateText().ClothesProduct5,
        description: translateText().ClothesProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 35,
        category: "watches",
        image: Image35,
        title: translateText().WatchesProduct5,
        description: translateText().WatchesProduct5_title,
        oldPrice: "189",
        price: "163$",
    }, 
    

    {
        id: 10,
        category: "electronics",
        image: Image10,
        title: translateText().ElectronicsProduct4,
        description: translateText().ElectronicsProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 11,
        category: "electronics",
        image: Image11,
        title: translateText().ElectronicsProduct5,
        description: translateText().ElectronicsProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 16,
        category: "shampoo",
        image: Image16,
        title: translateText().HealthCareProduct4,
        description: translateText().HealthCareProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 17,
        category: "shampoo",
        image: Image17,
        title: translateText().HealthCareProduct5,
        description: translateText().HealthCareProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 28,
        category: "toys",
        image: Image28,
        title: translateText().ToysProduct3,
        description: translateText().ToysProduct3_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 29,
        category: "toys",
        image: Image29,
        title: translateText().ToysProduct4,
        description: translateText().ToysProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 34,
        category: "watches",
        image: Image34,
        title: translateText().WatchesProduct4,
        description: translateText().WatchesProduct4_title,
        oldPrice: "189",
        price: "163$",
    }, 

  
    {
        id: 6,
        category: "clothes",
        image: Image6,
        title: translateText().ClothesProduct6,
        description: translateText().ClothesProduct6_title,
        oldPrice: "189",
        price: "163$",
    },
]

export default randomProducts2;