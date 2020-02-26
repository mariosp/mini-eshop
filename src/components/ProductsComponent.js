import React from "react";
import Product from "./ProductComponent";


const Products = ({products, onAddToCartButton}) => {

    const renderedProducts = products.map(product => (
        <div key={product.id} className="col-10 col-sm-8 col-md-6 mt-3">
            <Product product={product} onAddToCartButton={onAddToCartButton} />
        </div>
    ));

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {renderedProducts}
            </div>
        </div>
    );
};

export default Products;
