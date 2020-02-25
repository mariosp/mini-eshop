import React from "react";
import {Button} from "reactstrap";


const BasketButton = () => {
    return (
            <div className="basket-button-wrapper">
                <Button color="success" className="basket-button"><i className="fa fa-shopping-cart"></i></Button>
            </div>
    );
};

export default BasketButton;
