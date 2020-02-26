import React, {useState} from "react";
import {Badge, Button, Media, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const BasketItem = ({item, qty, onQtyChange}) => {
    return (
        <>
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
                  <i className="fa fa-window-close remove-item" onClick={()=> onQtyChange(item.id, "remove")}></i>
                  <Button className="mr-4" onClick={()=> onQtyChange(item.id, "add")}><i className="fa fa-plus-square"></i></Button>
                  <Button disabled={qty<=1} onClick={()=> onQtyChange(item.id, "subtract")}><i className="fa fa-minus-square"></i></Button>
                </Media>
            </Media>
        </Media>
        <hr/>
        </>

    )
};

const Basket = ({items, products, onQtyChange,onSuccessBuy}) => {
    let basketItemsObj =[];
    let totalPrice = 0;
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const handleBuyButton = () => {
        let cartItems = [];
        for (let [key, value] of Object.entries(items)) {
            cartItems.push(`
            <product>
                <productId>${key}</productId>
                <quantity>${value}</quantity>
            </product>
            `)
        }
        const xmlFormat = `
            <xml>
              <order>
                ${cartItems.join('')}
              </order>
            </xml>`;
        console.log(xmlFormat);
        toggleModal();
        onSuccessBuy();
    };

    for (let [key, value] of Object.entries(items)) {
        const product = products.find(product => product.id === Number(key));
        basketItemsObj.push(product);
        totalPrice += product.price * value;
    }

    const renderBasketItems = basketItemsObj.map(item => (<BasketItem item={item} qty={items[item.id]} onQtyChange={onQtyChange}  key={item.id}/>));

    return (
        <>
            <div className="basket-button-wrapper">
                <Button color="success" className="basket-button" onClick={toggleModal}><i className="fa fa-shopping-cart"></i></Button>
                {Object.entries(items).length > 0? <Badge color="secondary" className="basket-count">{Object.entries(items).length}</Badge> : null}
            </div>
            <Modal isOpen={modal} toggle={toggleModal} scrollable={true} centered={true} className="basket-modal">
                <ModalHeader>Your Shopping Cart</ModalHeader>
                {  Object.entries(items).length >0 ?
                    <>
                        <ModalBody>
                            {renderBasketItems}
                        </ModalBody>
                        < ModalFooter >
                        {totalPrice > 100 && <div className="discount-box container">-10% Discount</div>}
                        <div>
                        <p>Total: {totalPrice <= 100 ? totalPrice : <s>{totalPrice}</s>} </p>
                        {totalPrice > 100 ? (<p>New Total: {totalPrice - (totalPrice / 10)}</p>) : null}
                        </div>
                        <Button color="success" onClick={handleBuyButton}>Buy <i className="fa fa-credit-card"></i></Button>
                        </ModalFooter>
                    </>
                    :
                    <ModalBody className="text-center">
                        Your Cart is empty
                    </ModalBody>
                }
            </Modal>
        </>
    );
};

export default Basket;
