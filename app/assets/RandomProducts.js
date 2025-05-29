import { translateText } from "../helpers/translation";

// console.log(translateText);

import Image1 from "../Product-Image/Clothes/Clothes1.jpg";
import Image2 from "../Product-Image/Clothes/Clothes2.jpg";
import Image7 from "../Product-Image/Electronics/Electronics1.jpg";
import Image13 from "../Product-Image/HealthCare/HealthCare1.png";
import Image14 from "../Product-Image/HealthCare/HealthCare2.png";
import Image19 from "../Product-Image/Shoeses/Shoeses1.jpg";
import Image25 from "../Product-Image/Toys/Toys1.jpg";
import Image26 from "../Product-Image/Toys/Toys2.jpg";
import Image31 from "../Product-Image/Watches/Watches1.png";
import Image32 from "../Product-Image/Watches/Watches2.jpg";

let randomProducts = [
    {
        id: 1,
        category: "clothes",
        image: Image1,
        title: translateText().ClothesProduct1,
        description: translateText().ClothesProduct1_title,
        oldPrice: "189",
        price: "163",
    },   
    
    {
        id: 2,
        category: "clothes",
        image: Image2,
        title: translateText().ClothesProduct2,
        description: translateText().ClothesProduct2_title,
        oldPrice: "189",
        price: "163",
    },   

    {
        id: 7,
        category: "electronics",
        image: Image7,
        title: translateText().ElectronicsProduct1,
        description: translateText().ElectronicsProduct1_title,
        oldPrice: "189",
        price: "163",
    },    

    {
        id: 13,
        category: "shampoo",
        image: Image13,
        title: translateText().HealthCareProduct1,
        description: translateText().HealthCareProduct1_title,
        oldPrice: "189",
        price: "163",
    },    

    {
        id: 14,
        category: "shampoo",
        image: Image14,
        title: translateText().HealthCareProduct2,
        description: translateText().HealthCareProduct2_title,
        oldPrice: "189",
        price: "163",
    },

    {
        id: 32,
        category: "watches",
        image: Image32,
        title: translateText().WatchesProduct2,
        description: translateText().WatchesProduct2_title,
        oldPrice: "189",
        price: "163",
    },

    
    {
        id: 25,
        category: "toys",
        image: Image25,
        title: translateText().ToysProduct1,
        description: translateText().ToysProduct1_title,
        oldPrice: "189",
        price: "163",
    },   

    {
        id: 26,
        category: "toys",
        image: Image26,
        title: translateText().ToysProduct6,
        description: translateText().ToysProduct6_title,
        oldPrice: "189",
        price: "163",
    },

    {
        id: 31,
        category: "watches",
        image: Image31,
        title: translateText().WatchesProduct1,
        description: translateText().WatchesProduct1_title,
        oldPrice: "189",
        price: "163",
    },    

     
    {
        id: 19,
        category: "shoeses",
        image: Image19,
        title: translateText().ShoesesProduct1,
        description: translateText().ShoesesProduct1_title,
        oldPrice: "189",
        price: "163",
    },
]

export default randomProducts;