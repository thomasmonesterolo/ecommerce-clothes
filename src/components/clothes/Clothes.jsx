import React, { useState } from 'react'
import ClotheItem from '../clotheItem/ClotheItem'
import BookSearch from '../bookSearch/BookSearch'
import SlideShow from '../imageSlider/Slideshow.jsx' // Asegúrate de importar el componentet
import "./Clothes.css"
 
const imagesRopa  = [
    '/videos/portada9.mp4',
    '/videos/portada7.mp4',
    '/videos/portada8.mp4',
    
]

const clothesData = [
   {
       id: 1,
        name:"Remeras",
        description: "Camiseta de algodón, cómoda y ligera.",
        color: "Blanca",
        img: "/images/cady negro.jpg"
    },
    {
        id: 2,
        name: "Jeans",
        description: "Jeans ajustados de mezclilla, estilo moderno.",
        color: "Negro",
        img:  "/images/jean5.jpg",

    },
    {
        id: 3,
        name: "Sweater",
        description: "Sweater de hilo",
        color: 'azul',
        img: "/images/sw linden azul.jpg"
       
    },
     {
         id: 4,
         name: "Perfume Blueeblood",
         description: "Aroma citrico y amaderado",
         img: "/images/perfumeblueblood.jpg"

     },
    // {
    //     id: 5,
    //     name: "Campera rompe viento",
    //     description: "campera especial para invierno.",
    //     size: "S",
    //     color: "Verde",
    //     img: "https://scandinavianar.vtexassets.com/arquivos/ids/177980-800-auto?v=638334082479530000&width=800&height=auto&aspect=true"

    // },
    // {
    //     id: 6,
    //     name: "Jeans",
    //     description: "Jeans ajustados de mezclilla, estilo moderno.",
    //     size: "32",
    //     color: "Negro",
    //     img: "https://acdn.mitiendanube.com/stores/001/343/531/products/dsc01934-7b5483077a5e83a87e17107643004432-640-0.jpg"

    // },
    // {
    //     id: 7,
    //     name: "Chaqueta",
    //     description: "Chaqueta de jean, ideal para el invierno.",
    //     size: "L",
    //     color: "Negro",
    //     img: "https://forever21.com.ar/media/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/c/a/campera-denim-hombre-forever21-r2t000041-550_6__1.jpg"
    // },
    // {
    //     id: 8,
    //     name: "Zapatos",
    //     description: "Zapatos de cuero, elegantes y cómodos.",
    //     size: "42",
    //     color: "Negro",
    //     img: "https://dinobutelli.com.ar/wp-content/uploads/2023/02/zapato-vestir-hombre-dino-butelli-cuero6.jpg"

    // },
    // {
    //     id: 9,
    //     name: "Campera rompe viento",
    //     description: "campera especial para invierno.",
    //     size: "S",
    //     color: "Verde",
    //     img: "https://scandinavianar.vtexassets.com/arquivos/ids/177980-800-auto?v=638334082479530000&width=800&height=auto&aspect=true"

    // },
    // {
    //     id: 10,
    //     name: "Chaqueta",
    //     description: "Chaqueta de jean, ideal para el invierno.",
    //     size: "L",
    //     color: "Negro",
    //     img: "https://forever21.com.ar/media/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/c/a/campera-denim-hombre-forever21-r2t000041-550_6__1.jpg"
    // },
    // {
    //     id: 11,
    //     name: "Zapatos",
    //     description: "Zapatos de cuero, elegantes y cómodos.",
    //     size: "42",
    //     color: "Negro",
    //     img: "https://dinobutelli.com.ar/wp-content/uploads/2023/02/zapato-vestir-hombre-dino-butelli-cuero6.jpg"

    // },
    // {
    //     id: 12,
    //     name: "Campera rompe viento",
    //     description: "campera especial para invierno.",
    //     size: "S",
    //     color: "Verde",
    //     img: "https://scandinavianar.vtexassets. com/arquivos/ids/177980-800-auto?v=638334082479530000&width=800&height=auto&aspect=true"

    // }
]

const Clothes = () => {
    const [data, setData] = useState(clothesData);

    const searchHandler = (searchTerm) => {
        const filteredData = clothesData.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())

        );
        setData(filteredData);
    };

    return (
       
      
        <div className='main'>
            <div style={{marginBottom: 30}}>
                <BookSearch onSearch={searchHandler} />
            </div>
            <div style={{marginBottom:30}}> 

            <SlideShow images={imagesRopa} interval={4000} />
            </div>

            
            <div
                className='main'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '25px',
                    flexWrap: 'wrap',
                    margin: 15
                }}
            >

                {data.map((item, i) => (
                    <ClotheItem key={i} item={item} />
                ))}
            </div>
        </div>
    );

}


export default Clothes;
