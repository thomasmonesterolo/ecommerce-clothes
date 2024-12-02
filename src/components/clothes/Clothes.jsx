import { useState } from 'react'
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
     {
        id: 5,
        name: "Remera Estampada",
        description: "Remera 100% algodon, con estampa frontal",
         size: "S  M  L",
        color: "Negro",
         img: "/images/bell negro.jpg"
    },
     {
         id: 6,
         name: "Remera Brise",
         description: "Remera 100% de algodon, con estampa basica",
         size: " M  L  XXL",
         color: "Negro",
       img: "/images/brise negro.jpg",
     },
    /* {
         id: 7,
         name: "Buzo Abraham",
         description: "Buzo de algodon rustico, con estampa basica frontal",
         size: "L",
         color: "Negro",
         img: "/images/buzo abraham.jpg"
     },
     {
         id: 8,
         name: "Remera Cady",
         description: "Remera 100% aldodon, con estampa basica",
         size: "M  XL  XXL",
         color: "Negro",
         img: "/images/cady beige.jpg"

     },
     {
         id: 9,
         name: "Campera Sedam",
         description: "campera especial para invierno, de algodon con friza",
        size: "S  M  L",
       color: "Gris",
        img: "/images/campera sedam gris.jpg",

     },
     {
         id: 10,
        name: "Buzo canguro Basic",
    description: "Buzo con capucha, de algodon con friza.",
         size: "L  XL  XXL",
         color: "Bordo",
         img: "/images/canguro bordo.jpg"
     },
     {
         id: 11,
       name: "Pantalon Chino",
        description: "Pantalon de gabardina.",
        size: "30 36 38 40",
        color: "Azul",
       img: "/images/chino azul1.jpg"

    },
   {
         id: 12,
        name:"Pantalon chino",
         description: "Pantalon de gabardina",
         size: " 28 30 3,8 42",
         color: "Camel",
         img: "/images/chino camel.jpg",

     },
     {
        id: 13 ,
       name:"Chomba Kane",
        description: "Chomba basica lisa de piquet",
        size: "S  M  XL",
        color: "Azul",
        img: "/images/chomba kane azul.jpg",

    },
    {
         id: 14,
       name:"Chomba Kane",
        description: "Chomba basica lisa de piquet",
        size: "S  M  XL",
        color: "Blanco",
        img: "/images/chomba kane blanco.jpg",
         
},
{       id: 15,
       name:"Chomba Kane",
        description: "Chomba basica lisa de piquet",
        size: "S  M  XL",
        color: "Negro",
        img: "/images/chomba kane negro.jpg",
},
{
         id: 16,
       name:"Chomba Kane",
        description: "Chomba basica lisa de piquet",
        size: "S  M  XL",
        color: "Gris",
        img: "/images/chomba kane gris.jpg",
},
{
        id: 18,
       name:"Pantalon de Jean",
        description: "Pantalon de jean chupin, con spandex",
        size: "28 30 36 38",
        color: "Clarito",
        img: "/images/jean5.jpg ",

    },
    {
        id: 19,
       name:"Pantalon de Jean",
        description: "Pantalon de jean negro con spandex",
        size: "30 32 38 44",
        color: "Negro",
        img: "/images/jeannegro.jpg",

    },
    {
        id: 20,
       name:"Pantalon de Jean",
        description: "Pantalon de jean elastizado ancho",
        size: "28 30 40 ",
        color: "Jean",
        img: "/images/jeans2.1.jpg",

    },
    {
        id: 21,
       name: "Pantalon Rotura",
        description: "Pantalon de jean con roturas, elastizado",
        size: "30 32 34 38",
        color: "Clarito",
        img: " /images/jeanrotura.jpg",

    },
    
    {
        id: 21,
       name: " Perfume Essentials",
        description: "Perfume ideal para hombre que le gusta oler bien",
        color: "dulce",
        img: " /images/perfummeessentials.jpg",
    },
    {
        id: 22 ,
       name:" Sweater tejido",
        description: "Sweater tejido de lana",
        size: " M L XXL",
        color: "Negro",
        img: "/images/sw skyline negro.jpg",

    }, */
   
]

const Clothes = () => {
    const [data, setData] = useState(clothesData);

    const searchHandler = (searchTerm) => {
        const filteredData = clothesData.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.color.toLowerCase().includes(searchTerm.toLowerCase())

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
