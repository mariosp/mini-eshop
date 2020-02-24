import React from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

const Product = ({product}) => {

    return (
        <Card className="product-card">
            <CardImg top src={product.image} alt={product.name} className="product-image"/>
            <CardBody>
                <CardTitle><span >Price</span> {product.price} € </CardTitle>
                <CardSubtitle>{product.name}</CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button className="product-button">Add to cart <i className="fa fa-cart-plus"></i></Button>
            </CardBody>
        </Card>
    );
};

export default Product;
