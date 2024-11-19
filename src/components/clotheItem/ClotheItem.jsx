import { Card } from 'react-bootstrap';


const ClotheItem = ({ item }) => {
    return <Card style={{ width: 250, height: 400}}>
           <Card.Img
                height={300}
               variant="top"
               src={item.img !== "" ? item.img : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
               <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>{item.description}</Card.Subtitle>
            </Card.Body>
        </Card>
}

export default ClotheItem;

//<div>Color: {item.color}</div>
             //   <p>Talle: {item.size}</p>