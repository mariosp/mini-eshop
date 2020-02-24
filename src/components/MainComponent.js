import React, {useState} from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Products from "./ProductsComponent";
import { PRODUCTS } from "../shared/products"


const Main = () => {
    const [products, setProducts] = useState(PRODUCTS);

    hadleAddToCartButton() {

    }

    return(
        <div>
            <Header/>
            <Products products={products} onAddToCartButton={hadleAddToCartButton}/>
            <Footer/>
        </div>
    );
};

export default Main;
