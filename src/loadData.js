import { db } from '../src/firebase.js';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";


const  mockItem = [
    {
        id: 1,
        name: "Green tea: Mater Kong",
        description: "This tea is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas. Green tea originated in China, and since then its production and manufacture has spread to other countries in East Asia. The most well-known and abundant catechin in green tea is epigallocatechin-3-gallate (EGCG), which research has found may be involved in improving various health conditions or markers of disease. Green tea has polyphenol antioxidants, including a catechin called EGCG.",
        category: "drinks",
        price: 2.300,
        stock: 20,
        imageUrl: "/products/teverde.png",
       
    },
    {   id: 2,
        name: "Pink Salmon",
        description: "Pink salmon or humpback salmon is a species of euryhaline ray-finned fish in the family Salmonidae. It is the type species of the genus Oncorhynchus, and is the smallest and most abundant of the seven officially recognized species of salmon. Our salmon is tottally fresh from the sea to your table",
        category: "foods",
        price: 20.900,
        stock: 20,
        imageUrl:"/products/salmon.png"
    },
    {   id: 3,
        name: "Goyi's bayas Kaxing",
        description: "Goji Berries are tasty on their own and are delicious when blended with smoothies, mixed with oatmeal, cereals, granola, yogurt and salads. They are grown in the Himalayan mountains, carefully cultivated and harvested, then sun-dried to maintain their potent raw qualities",
        category: "foods",
        price: 9.000,
        stock: 20, 
        imageUrl:"/products/goji.png",
    
    
    },
    {
        id: 4,
        name: "Chinese Spices, El Castillo",
        description: "Popular herbs like ginger, garlic, scallions, star anise, cinnamon, and Sichuan peppercorns are frequently used in Chinese cooking because of their therapeutic properties, in addition to their ability to improve the flavour, aroma, and texture of food.",
        category: "foods",
        price: 6.890,
        stock: 20,
        imageUrl: "/products/cincoespeacias.png",
       
    },
    {   id: 5,
        name: "Chia Oil Nutra Sem",
        description: " Chia oil helps to reduce cholesterol levels and help to reduce weight. Chia seed oil is full of dietary fibers that also benefit heart health and weight management. Studies suggest that tumour development might slow down by using chia seed oils.",
        category: "oils",
        price: 9.450,
        stock: 20,
        imageUrl:"/products/aceitechia.png",
    },
    {   id: 6,
        name: " Coconut oil with garlic",
        description: "Coconut oil is edible oil made from pressing the meat inside coconuts. It's solid at room temperature and liquid when heated. There are two types: virgin and refined. Virgin coconut oil uses fresh meat, while refined oil uses dried coconut meat, also called copra. This plant-based oil is used as a cooking fat",
        category: "oils",
        price: 10.800,
        stock: 20, 
        imageUrl:"/products/aceitedecoco.png", 
    
    },
    {   id: 7,
        name: "Seaweed Yaki",
        description: "Seaweed is chock-full of vitamins, minerals, and fiber, and can be tasty. For at least 1,500 years, the Japanese have enrobed a mixture of raw fish, sticky rice, and other ingredients in a seaweed called nori. The delectable result is a sushi roll",
        category: "foods",
        price: 20.99,
        stock: 0,
        imageUrl:"/products/algas.png",
    },
    {   id: 8,
        name: "Coconut Oil: God bless you ",
        description: "QUALITY YOU CAN TRUST - Our cold pressed coconut Oil is USDA-Certified Organic, Non-GMO Project Verified, Certified gluten free, Keto and Paleo, and grown and harvested organically without the use of harmful chemicals or additives",
        category: "oils",
        price: 14.000, 
        stock: 0,
        imageUrl:"/products/godbless.png", 
    
    },
    {
        id: 9,
        name: "Olive oil: Zuelo",
        description: "Probably the most widely-used oil in cooking, olive oil is pressed from fresh olives. It's mainly made in the Mediterranean, primarily in Italy, Spain and Greece (though countries such as America and Australia also produce it). Much like wine-making, climate, soil and the way the olives are harvested and pressed all have an impact on an oil's character.",
        category: "oils",
        price: 15.600,
        stock: 30,
        imageUrl: "/products/aceitezuelo.png",
       
    },
    {   id: 10,
        name: "Sesamo Oil",
        description: "Sesame oil contains antioxidants and other plant compounds that may benefit heart health, reduce arthritis symptoms, and aid gingivitis treatment. There are two varieties of sesame oil: cold-pressed and toasted. People tend to use the cold-pressed type for cooking and the toasted variety for seasoning",
        category: "oils",
        price: 50.000,
        stock: 20,  
        imageUrl:"/products/sesamo.png",
    },
    {   id: 11,
        name: "Green olives: Nucete",
        description: "Olives are very high in vitamin E and other powerful antioxidants. Studies show that they are good for the heart and may protect against osteoporosis and cancer. The healthy fats in olives are extracted to produce olive oil, one of the key components of the incredibly healthy Mediterranean diet",
        category: "foods",
        price: 3.470, 
        stock: 20,
        imageUrl: "/products/aceitunas.png", 
    
    },{ id: 12,
        name: "Shrimps",
        description: "Shrimp is a good source of protein, on par with, say, a rib-eye steak. It’s high in calcium and vitamin B12. It’s low in saturated fat, which makes it heart-healthy. And while shrimp is high in cholesterol, experts no longer worry as much about dietary cholesterol’s effect on health.",
        category: "foods",
        price: 7.500,
        stock: 20, 
        imageUrl:"/products/osaka.png",
        
         
    
    }
];

mockItem.forEach(async (item) => {
    try {
        const docRef = doc(db, "mockItem", item.id.toString());
        await setDoc(docRef, item);
        console.log("Documento escrito con ID: ", item.id);
      } catch (e) {
        console.error("Error al agregar el documento: ", e);
    }
  });