import React, {useEffect, useState} from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Products from "./ProductsComponent";
import Basket from "./BasketComponent";
import { PRODUCTS } from "../shared/products"
import { BASKET_ITEMS } from "../shared/local-storage";


const Main = () => {
    const initialState = () => JSON.parse(localStorage.getItem(BASKET_ITEMS)) || {};
    const [products, setProducts] = useState(PRODUCTS);
    const [basket, setBasket] = useState(initialState);

    useEffect(()=>{
        localStorage.setItem(BASKET_ITEMS, JSON.stringify(basket));
    },[basket]);

    const hadleAddToCartButton = (productId) => {
        let oldCount = productId in basket ? basket[productId] : 0;
        const newItem = {
            [productId]: ++oldCount
        };
        setBasket({...basket, ...newItem  });
    };

    const handleItemQty = (productId, type) => {
        let oldCount = basket[productId];
        switch (type) {
            case"add":
                oldCount++;
                break;
            case "subtract":
                oldCount--;
                break;
            default:
        }
        const newItem = {
            [productId]: oldCount
        };
        setBasket({...basket, ...newItem} )
    };

    return(
        <div>
            <Header/>
            <Products products={products} onAddToCartButton={hadleAddToCartButton}/>
            <Footer/>
            <Basket products={products} items={basket} onQtyChange={handleItemQty} />
        </div>
    );
};

export default Main;
