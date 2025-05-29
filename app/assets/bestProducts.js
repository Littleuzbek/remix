import { translateText } from "../helpers/translation";

import Image1 from "../Product-Image/Clothes/Clothes1.jpg";
import Image2 from "../Product-Image/Clothes/Clothes2.jpg";
import Image7 from "../Product-Image/Electronics/Electronics1.jpg";
import Image13 from "../Product-Image/HealthCare/HealthCare1.png";
import Image22 from "../Product-Image/Shoeses/Shoeses4.jpg";
import Image32 from "../Product-Image/Watches/Watches2.jpg";

let bestProducts = [
    {
        id: 1,
        category: "clothes",
        image: Image1,
        title: translateText().ClothesProduct1,
        description: translateText().ClothesProduct1_title,
        oldPrice: "189",
        price: "163$",
    },   
    
    {
        id: 2,
        category: "clothes",
        image: Image2,
        title: translateText().ClothesProduct2,
        description: translateText().ClothesProduct2_title,
        oldPrice: "189",
        price: "163$",
    },   

    {
        id: 7,
        category: "electronics",
        image: Image7,
        title: translateText().ElectronicsProduct1,
        description: translateText().ElectronicsProduct1_title,
        oldPrice: "189",
        price: "163$",
    },    

    {
        id: 13,
        category: "shampoo",
        image: Image13,
        title: translateText().HealthCareProduct1,
        description: translateText().HealthCareProduct1_title,
        oldPrice: "189",
        price: "163$",
    },
    
    {
        id: 22,
        category: "shoeses",
        image: Image22,
        title: translateText().ShoesesProduct4,
        description: translateText().ShoesesProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 32,
        category: "watches",
        image: Image32,
        title: translateText().WatchesProduct2,
        description: translateText().WatchesProduct2_title,
        oldPrice: "189",
        price: "163$",
    },
]
;

export default bestProducts;