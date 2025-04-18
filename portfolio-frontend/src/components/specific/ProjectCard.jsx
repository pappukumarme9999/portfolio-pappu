import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../styles/global.scss";
import im1 from "../../assets/images/im1.jpg";
import im2 from "../../assets/images/im2.jpg";
import im3 from "../../assets/images/im3.jpg";
import im4 from "../../assets/images/im4.jpg";

const imageMap = {
  "im1.jpg": im1,
  "im2.jpg": im2,
  "im3.jpg": im3,
  "im4.jpg": im4,
};

const WideProjectCard = ({ imgName, title, description, link }) => {
  const imgSrc = imageMap[imgName] || im1;

  return (
    <Card className="mb-3 project-card shadow-sm">
      <Card.Img variant="top" src={imgSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-primary" href={link} target="_blank">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WideProjectCard;
