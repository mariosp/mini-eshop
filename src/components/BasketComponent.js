import React, {useState} from "react";
import {Button, Media, Modal, ModalBody, ModalHeader} from "reactstrap";

const BasketItem = ({item,qty}) => {
    return (
        <Media className="container baskeitem-media mt-3">
            <Media left className="image-wrapper">
                <Media object src={item.image} alt={item.name} className="basketitem-image"/>
            </Media>
            <Media body className="ml-3">
                <Media heading className="baskeitem-header">
                    {item.name}
                </Media>
                <div>
                    {qty} X {item.price} <span style={{float:"right",marginRight: "10px"}}>total: {qty * item.price} €</span>
                </div>
            </Media>
            <Media right>
                <Media body>
                  <Button className="mr-4"><i className="fa fa-plus-square"></i></Button>
                  <Button><i className="fa fa-minus-square"></i></Button>
                </Media>
            </Media>
        </Media>
    )
};

const Basket = ({items, products}) => {
    let basketItemsObj =[];
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    for (let [key, value] of Object.entries(items)) {
        console.log(`${key}: ${value}`);
        basketItemsObj.push(products.find(product => product.id === Number(key)));
    }

    const renderBasketItems = basketItemsObj.map(item => (<BasketItem item={item} qty={items[item.id]}  key={item.id}/>));

    return (
        <>
            <div className="basket-button-wrapper">
                <Button color="success" className="basket-button" onClick={toggleModal}><i className="fa fa-shopping-cart"></i></Button>
            </div>
            <Modal isOpen={modal} toggle={toggleModal} className="">
                <ModalHeader>Your Basket</ModalHeader>
                <ModalBody>
                    { renderBasketItems }
                </ModalBody>
            </Modal>
        </>
    );
};

export default Basket;
