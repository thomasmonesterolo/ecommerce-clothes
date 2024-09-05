import React from 'react'
import { Card } from 'react-bootstrap';

const ClotheItem = ({ item }) => {
    return (
        <Card style={{ width: 250, height: 500}}>
            <Card.Img
                height={400}
                variant="top"
                src={item.img !== "" ? item.img : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>{item.description}</Card.Subtitle>
                <div>Color: {item.color}</div>
                <p>Talle: {item.size}</p>
            </Card.Body>
        </Card>
    )}
  


export default ClotheItem;
