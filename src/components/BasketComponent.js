import React, {useState} from "react";
import {Button, Media, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const BasketItem = ({item,qty, onQtyChange}) => {
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
                  <Button className="mr-4" onClick={()=> onQtyChange(item.id, "add")}><i className="fa fa-plus-square"></i></Button>
                  <Button onClick={()=> onQtyChange(item.id, "subtract")}><i className="fa fa-minus-square"></i></Button>
                </Media>
            </Media>
        </Media>
    )
};

const Basket = ({items, products, onQtyChange}) => {
    let basketItemsObj =[];
    let totalPrice = 0;
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    for (let [key, value] of Object.entries(items)) {
        console.log(`${key}: ${value}`);
        const product = products.find(product => product.id === Number(key));
        basketItemsObj.push(product);
        totalPrice += product.price * value;
    }

    const renderBasketItems = basketItemsObj.map(item => (<BasketItem item={item} qty={items[item.id]} onQtyChange={onQtyChange}  key={item.id}/>));

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
                <ModalFooter>
                    {totalPrice>100 && <div className="discount-box container">-10% Discount</div>}
                    <div>
                        <p>Total: {totalPrice<=100? totalPrice : <s>{totalPrice}</s>} </p>
                        {totalPrice>100? (<p>New Total: {totalPrice - (totalPrice/10)}</p>) : null }
                    </div>
                    <Button color="success">Buy <i className="fa fa-credit-card"></i></Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Basket;
